function Options({options, index, answer,dispatch, questions}) {
    const {correctOption} =questions
    const hasAnswered = answer !== null
    
    return (
        <div className="options">
            {options.map((option,i)=>
            
        
            <div  className={`option ${i === answer ? 'active': null} ${hasAnswered &&answer === correctOption && answer === i && "correct"} 
            ${hasAnswered && i !== correctOption  && 'wrong'}
            ${hasAnswered && i === correctOption  && 'correct'}
            `}
            
            key={option} onClick={(e)=>
                {

                    console.log(i)
                    dispatch({type: 'answerQuestion', payload: i})
                }
        } >{option}</div>
            
            )}
            
        </div>
    )
}

export default Options
