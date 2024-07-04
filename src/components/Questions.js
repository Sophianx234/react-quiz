import Options from "./Options"
import NextButton from "./NextButton"
import Timer from "./Timer"
function Questions({questions,dispatch, answer, index, numQuestions, totalPoints, points}) {
    const {question, options} = questions
    const hasAnswered = answer !== null
    return (
        <div className="quest__container">
             <progress max={numQuestions-1} value={index}/> 
            <div className="quiz_info">
                <p className="answered">Question <strong>{index+1}</strong>/{numQuestions}</p>
                <p className="points"><strong>{points}</strong>/{totalPoints} points</p>
            </div>
            <p className="question">{question}</p>
            <Options options ={options} dispatch={dispatch} questions ={questions} answer={answer}/>
            <div className="nav__btns">
                <Timer/>
            {hasAnswered&&<NextButton index={index} dispatch={dispatch}/>}
            </div>


        </div>
    )
}

export default Questions
