import React from 'react';
import {ReactComponent as ReactLoader }  from './loader.svg';


function Loading(){
    return(
        <div className='loadingWrapper'>
            <ReactLoader/>
        </div>
    )
}

export default Loading;