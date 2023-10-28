import React from 'react';
import "./style.css"

import HTML_logo from "./picture/HTML5.jpg"
import CSS_logo from "./picture/CSS3 .png"
import JS_logo from "./picture/JavaScript.png"

const About = () => {
    return (
        <div id='about'>

            <header className='d-flex justify-content-between py-2 px-3'>
                <h1 className='mb-0'>以後別做朋友</h1>
                <div className='mt-2'>
                    <button>
                        送出
                    </button>
                </div>
            </header>

            <section style={{marginTop:"200px"}}>
                <h1 className='ms-5'>技術方面</h1>
              
                <div className="technology-list d-flex mx-5">
                    <div className='w-100 bg-info'>
                        <img src={HTML_logo} alt="" />
                    </div>
                    <div className='w-100 bg-info'>
                        <img src={HTML_logo} alt="" />
                    </div>
                    <div className='w-100 bg-info'>
                        <img src={HTML_logo} alt="" />
                    </div>
                    <div className='w-100 bg-info'>
                        <img src={HTML_logo} alt="" />
                    </div>
                    <div className='w-100 bg-info'>
                        <img src={HTML_logo} alt="" />
                    </div>
                </div>
               
            </section>

        </div>
    );
}

export default About;
