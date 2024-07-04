import { type } from "@testing-library/user-event/dist/type"

function StartScreen({dispatch, numQuestions}) {
    return (
        <div className="start">
            <h3 className="heading-secondary">Welcome to The React Quiz!</h3>
            <p className="start__desc">{numQuestions} questions to test your React mastery</p>
            <button className="btn btn-ui" onClick={()=>dispatch({type: 'startQuiz'})}>Let's Start!</button>
        </div>
    )
}

export default StartScreen
