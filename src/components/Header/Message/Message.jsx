import React, { useContext } from 'react'
import "./Message.css"
import { StateContext } from '../../../AppProject'

function Message({message, setMessage}) {
    const { active, setActive } = useContext(StateContext)

    return (
        <>
        <div className='message' style={{opacity: message &&active && "1", top:!active&&"0"}}>
            {message && <p>Item added to basket</p> }
        </div>
        
        <div className='messageDelete' style={{ opacity: !message &&active&& "1",top:!active&&"0"}}>
            {!message && <p>Item removed from basket</p> }
        </div>
        </>
    )
}

export default Message



// import React from 'react'
// import "./Message.css"

// function Message({message, setMessage}) {

//     return (
//         <>
//         <div className='message' style={{ opacity: message && "1", top: message && "90%" }}>
//             {message && <p>Item added to basket</p> }
//         </div>
        
//         <div className='messageDelete' style={{ opacity: !message && "1", top: !message && "90%" }}>
//             {!message && <p>Item removed from basket</p> }
//         </div>
//         </>
//     )
// }

// export default Message