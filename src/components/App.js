import { useEffect, useReducer } from "react"
import Header from "./Header"
import Main from "./Main"
import StartScreen from "./StartScreen"
import Questions from './Questions'
import Finished from "./Finished"
import Loading from "./Loading"

const initialState = {
  questions: [],
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
  secondsRemaining: 400
}
document.title = 'React-Quiz'
function reducer(state, action){
  switch(action.type){
    case 'setQuestion':
      return {...state, questions: action.payload, status: 'ready' }
    case 'setError':
      return {...state, status: 'error'}
    case 'startQuiz':
      return {...state, status: 'start'}
    case 'answerQuestion':
      
      const question = state.questions.at(state.index)
      return {...state, answer: action.payload, points:action.payload === question.correctOption ? state.points+state.questions.at(state.index).points: state.points}
    case 'nextQuestion':
      if(state.index === state.questions.length -1) return state
      return {...state, index: state.index+1, answer: null}
    case 'finish':
      return {...state, status: 'finished'}
    case 'tick':
      return {...state, secondsRemaining: state.secondsRemaining>0 ? state.secondsRemaining -1: state.secondsRemaining, status: state.secondsRemaining === 0 ? 'finished': 'start'}
    default:
      throw new Error ('could not fetch')
  }
}

function App() {
  const [{questions, status, index, answer, points, secondsRemaining}, dispatch] = useReducer(reducer, initialState)
  
  const numQuestions = questions.length
  const totalPoints = questions?.map(question=>question.points).reduce((curr, acc)=> curr+acc,0)
  useEffect(function(){
    async function fetchQuestion(){
      try{
        const res = await fetch('http://localhost:8000/questions');
        
        if(!res.ok) throw new Error('Could not fetch')
          const data = await res.json();
        dispatch({type:'setQuestion', payload: data})

      }catch(err){
        dispatch({type:'setError'})

      }
    }
    fetchQuestion();
  },[])
  console.log(questions)
  return (
    <div className="container">
      <Header/>
      <Main>
        {status ==="ready" &&<StartScreen dispatch = {dispatch} numQuestions={numQuestions} />}
        {status === 'start' &&< Questions questions={questions[index]} dispatch={dispatch} answer={answer} index={index} numQuestions={numQuestions} totalPoints={totalPoints} points={points}
        secondsRemaining={secondsRemaining}
        />}
        {status === 'finished'&& <Finished totalPoints={totalPoints} points={points}/>}
        {status === 'loading' && <Loading/>}

      </Main>
    </div>
  )
}

export default App


