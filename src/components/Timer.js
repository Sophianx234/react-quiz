import { useEffect } from "react"

function Timer({secondsRemaining, dispatch}) {
    const min = Math.floor(secondsRemaining/60);
    const seconds = secondsRemaining%60;
    console.log(secondsRemaining)
    useEffect(function(){
        const id =  setInterval(function(){
            
            dispatch({type:'tick'})
        }, 1000)

            return ()=> clearInterval(id)
            
    },[dispatch])
    return (
        <button className="btn btn-ui nav_btn">
           {`${min<10 ? `0${min}`:min}:${seconds<10 ?`0${seconds}`: seconds}`}
        </button>
    )
}

export default Timer
