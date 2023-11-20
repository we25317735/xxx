import React from 'react';

const Information = () => {
    return (
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

                            {errors.choose && <span className='ms-5'>請選擇您的性別</span>}
                        </li>

                        <li className='my-2 ms-3'>
                            <label htmlFor="x">年齡: </label>
                            <input id='x'  className='ms-2' style={{width: "150px"}} {...register("年齡")} />
                        </li>

                        <li className='my-2 ms-3'>
                            <label htmlFor="x">電話: </label>
                            <input id='x' type='number' className='ms-2'style={{width: "150px"}} {...register("電話")} />
                        </li>

                        <p className='mx-2 mt-3 text-danger' style={{fontSize: "12px"}}>
                            ※ 基於性別與各年齡層或許存在於不同差異,故出此分類方便顧及所有族群
                        </p>
                        
                    </ul>
    );
}

export default Information;
