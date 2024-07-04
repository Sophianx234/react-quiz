function NextButton({dispatch,index}) {
    if(index <14)
    return (

        <button className="btn btn-ui nav_btn"
        onClick={()=>dispatch({type: 'nextQuestion'})}
        >
            Next
        </button>
    )
    else
    return (

        <button className="btn btn-ui nav_btn"
        onClick={()=>dispatch({type: 'finish'})}
        >
            Finish
        </button>
    )
}

export default NextButton
