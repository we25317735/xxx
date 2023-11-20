import React from 'react';
import "./style.css"

const Title = ({TitleName}) => {

    return (
        <>
            <div id='Title' className='fs-1 fw-lighter'>{TitleName}<span className='me-2 fs-4 '></span></div>
        </>
    );
}

export default Title;
