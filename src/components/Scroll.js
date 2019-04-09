import React from 'react';
import './Scroll.css';

const Scroll = (props) => {
    return (
        <div className='ma3' style={{
            overflowY: 'scroll',
            height: '768px'
        }}>
            {props.children}
        </div>
    );
};

export default Scroll;