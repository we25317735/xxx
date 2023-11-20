import React from 'react';
import "./style.css"
import Title from './Title';

import pic from "./picture/5.jpg";

const About = () => {
    return (
        <div id='about'>

            <header className=' d-flex justify-content-between py-2 px-3'>
                <h1 className='mb-0'>目前沒有東西...</h1>
                <div className='mt-2'>
                    <button>
                        送出
                    </button>
                </div>
            </header>

            <div className="container w-100">
                <div className="row mx-5">

                    {/* 關於我 */}
                    <section id="About-me" className='d-md-flex'>
                        <div className='img-box ms-3 mt-3 mb-4'>
                            <img src={pic} alt="圖片" />
                        </div>

                        <div className='mx-5 mt-3'>
                            <h1>你好</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni asperiores enim rerum praesentium aliquam tempore maxime amet! Dicta, quos nostrum. Est, cumque la.elit. Magni asperiores enim rerum praesentium aliquam tempore maxime amet! Dicta, quos nostrum. Est, cumque la.elit. Magni asperiores enim rerum praesentium aliquam tempore mores enim rerum praesentium aliquam tempore maxime amet! Dicta, quos nostrum. Est, cumque la.
                            </p>
                        </div>
                    </section>

                    {/* 使用技能 */}
                    <section id='Skill' style={{marginTop:"50px"}}>
                        <div className="ms-2">
                            <Title TitleName="工作"/>
                        </div>
                        
                        <div className="row mx-3">
                            <ul className='mt-3 col-12 col-md-7'>
                                <li>HTML 5</li>
                                <li>CSS </li>
                                <li>JS</li>
                            </ul>
                            <ul className='mt-3 col-12 col-md-3'>
                                <li>scss</li>
                                <li>React</li>
                            </ul>
                        </div>
                        
                    </section>

                    {/* 經歷 */}
                    <section id='Experience' style={{marginTop:"50px"}}>
                        <div className="ms-2">
                            <Title TitleName="經歷"/>
                        </div>
                        
                        <p className='mx-3 mt-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quo sit. Perspiciatis, perferendis voluptatibus illum, totam nam excepturi hic vitae, neque accusamus consequatur quis ratione esse assumenda necessitatibus obcaecati sapiente enim eum adipisci. Modi veniam quam ut incidunt similique sunt, repellendus quo, nulla officiis unde temporibus mollitia nihil iste totam?
                        </p>
                        
                    </section>

                    {/* 關於更多 */}
                    <section id='Experience' style={{marginTop:"50px"}}>
                        <div className="ms-2">
                            <Title TitleName="關於更多"/>
                        </div>
                        
                        <p className='mx-3 mt-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quo sit. Perspiciatis, perferendis voluptatibus illum, totam nam excepturi hic vitae, neque accusamus consequatur quis ratione esse assumenda necessitatibus obcaecati sapiente enim eum adipisci. Modi veniam quam ut incidunt similique sunt, repellendus quo, nulla officiis unde temporibus mollitia nihil iste totam?
                        </p>
                        
                    </section>

                </div>

            </div>
           


        </div>
    );
}

export default About;
