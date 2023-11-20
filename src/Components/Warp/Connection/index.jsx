import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './style.css';
import Questions from './Information';


const Connection = () => {

    const {
        register,           // 使用react-hook-form中的register函數來註冊表單輸入元素
        handleSubmit,       // 在提交表單之前驗證輸入，然後執行onSubmit函數
        watch,              // 監聽表單輸入元素的值
        formState: { errors },  // 存放表單驗證錯誤的狀態
    } = useForm()

    const onSubmit = (data) => { // 當表單提交時執行的函數，將表單數據輸出到控制台
        console.log(data);
    }

    const [comment, setComment] = useState(''); //留言框 
    const maxChars = 200; //留言框字數限制

    const [SendOut, setSendOut] = useState(true);

    // 字數限制器
    const WordLimit = (event) => { 
        const inputValue = event.target.value;
        if (inputValue.length <= maxChars) {
        setComment(inputValue);
        }
    };

    //日期顯示, 顯示當天日期
    const getDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = (today.getMonth() + 1).toString().padStart(2, '0');
        const day = today.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    //確認條款有勾選
    const CheckSubmit = () => {
        setSendOut(!SendOut);
    };


    return (
        <div id='connection' >

            <div className='Questionnaire container mx-auto py-3'>
               
                <form onSubmit={handleSubmit(onSubmit)}>

                    <h1 className='py-3 ps-3'>與我聯絡</h1>

                    {/* 基本資料 */}
                    <ul className='form-box py-3 mx-3'>
                        <h4 className='mb-3'>基本資料</h4>

                        <li className='my-2 ms-3'>
                            <label htmlFor="x">姓名: </label>
                            <input id='x'  className='ms-2' style={{width: "150px"}} {...register("姓名")} />
                        </li>
                        
                        <li className='my-2 ms-3'>
                            <span>性別:</span>
                            <label className='ms-2'>
                                <input type="radio" {...register("choose")}  value={"男生"}/>
                                男生
                            </label>

                            <label className='ms-1'>
                                <input type="radio" {...register("choose")}  value={"女生"}/>
                                女生
                            </label>

                            <label className='ms-1'>
                                <input type="radio" {...register("choose", {required: true})}  value={"其他"}/>
                                不方便
                            </label>

                            {errors.choose && <span className='ms-3 text-danger' style={{fontSize: "12px"}}>請選擇您的性別</span>}
                        </li>

                        <li className='my-2 ms-3'>
                            <label htmlFor="x">年齡: </label>
                            <input id='x'  className='ms-2' style={{width: "150px"}} {...register("年齡")} />
                        </li>

                        <li className='my-2 ms-3'>
                            <label htmlFor="x">電話: </label>
                            <input id='x' type='number' className='ms-2'style={{width: "150px"}} {...register("電話")} />
                        </li>

                        <p className='mx-2 mt-3 text-secondary' style={{fontSize: "12px"}}>
                            ※ 基於性別與各年齡層或許存在於不同差異,故出此分類方便顧及所有族群
                        </p>
                  
                        
                    </ul>

                    <ul className='form-box py-3 mx-3'>
                        <h4 className='mb-3'>相關訊息</h4>

                        <li className='my-2 ms-3'>
                            <label htmlFor="selectTitle">標題: </label>
                            <select id="selectTitle" className='ms-2' {...register("Title", { required: true })} defaultValue="">
                                <option value="" disabled>(請點擊選擇...)</option>
                                <option value="選項1">那天在你們公司門口的是誰?</option>
                                <option value="專案2">你們公司後門的巷子多了些路障</option>
                                <option value="提問3">其他...</option>
                            </select>

                            {errors.Title && <span className='ms-3 text-danger' style={{fontSize: "12px"}}>※請描述您的問題</span>}
                        </li>


                        <li className='my-2 ms-3'>
                            <label htmlFor="Email">信箱: </label>
                            <input type='email' id='Email' className='ms-2'style={{width: "250px"}} {...register("信箱")} />
                        </li>
                        
                        <li className='my-2 ms-3'>
                            <label htmlFor="comment" >問題內容: </label>
                            <span className='ms-3' style={{fontSize: "12px"}}>(還剩: <span>{maxChars - comment.length}</span> 個字)</span>
                            <br/>

                            {/* value 為最多字限制, register不能放在onChange後面,會無法輸入 */}
                            <textarea id="comment"  className='mt-2' name="comment" value={comment} {...register("問題內容")} onChange={WordLimit} ></textarea>
                        </li>

                        <li className='my-2 ms-3'>
                            <label htmlFor="Date">日期: </label>
                            <input type='date' id='Date' className='ms-2'style={{width: "150px"}} defaultValue={getDate()} {...register("日期")}/>
                        </li>
                        
                    </ul>
                    
                    <div className="mx-2 d-flex">
                        <div className='ms-3 mt-2'>
                            <input type="checkbox"  onClick={CheckSubmit}/>
                            <span className='ms-1'>
                                本人同意並接受<a href="#">以下條款</a>
                            </span>
                        </div>
                        <input className='btn btn-primary btn-sm d-block ms-auto me-3' type="submit" disabled={SendOut}/>
                    </div>
                    
                </form>
            </div>
            {/* <form onSubmit={handleSubmit(onSubmit)}>
                
                <input type='email' defaultValue="你好" {...register("輸入")} />
                <input {...register("xx", { required: true })} />
                {errors.xx && <span>此字段為必填項</span>}

                <input type="submit" />
            </form> */}
        </div>
    
    
    );
}

export default Connection;
