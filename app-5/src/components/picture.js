import React from 'react'

function Picture(props) {
    return(
        <div>
            <img src={props.url}/>
        </div>
    )
}

export default Picture