import React, { useState, useEffect } from 'react'
import SpeechRecognition, { useSpeechRecognition } from '../SpeechRecognition'
import Sentiment from 'sentiment'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import "./dictaphone-style.css";


const sentiment = new Sentiment();
//const vaderSentiment = new SentimentIntensityAnalyzer();


const Dictaphone = ({ commands, props }) => {
  const [sentimentScore, setSentimentScore] = useState("")
  const [generalSentiment, setGeneralSentiment] = useState("")
  const [positiveWords, setPositiveWords] = useState([])
  const [negativeWords, setNegativeWords] = useState([])
  const [transcribing, setTranscribing] = useState(true)
  const [clearTranscriptOnListen, setClearTranscriptOnListen] = useState(true)
 
  
  const toggleTranscribing = () => setTranscribing(!transcribing)
  //const toggleClearTranscriptOnListen = () => setClearTranscriptOnListen(!clearTranscriptOnListen)

    const cardTitle  = JSON.stringify(props.props.location.state.cardInfo.title).slice(1,-1)
    const cardQuestion = JSON.stringify(props.props.location.state.cardInfo.question).slice(1,-1)
    const cardImageUrl = JSON.stringify(props.props.location.state.cardInfo.imageUrl).slice(1,-1) 
  // console.log(cardTitle)

  

  const {
    transcript,
    interimTranscript,
    finalTranscript,
    resetTranscript,
    listening,
  } = useSpeechRecognition({ transcribing, clearTranscriptOnListen, commands })
  useEffect(() => {
    if (interimTranscript !== '') {
      console.log('Got interim result:', interimTranscript)
    }
    if (finalTranscript !== '') {
      console.log('Got final result:', finalTranscript)
    }
  }, [interimTranscript, finalTranscript]);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

  let postiveWordRender;
  let negativeWordRender;

  const findSentiment = e => {
   // e.preventDefault();
    //setTranscribing(false)
    const result = sentiment.analyze(finalTranscript)
    console.log(result)
    setSentimentScore(result.score)

    if (result.score < 0) {
      setGeneralSentiment('Negative')
    } else if (result.score > 0) {
      setGeneralSentiment('Positive')
    } else {
      setGeneralSentiment('Neutral')
    }

    setNegativeWords(...negativeWords,[result.negative])
    setPositiveWords(...positiveWords,[result.positive])
  }
    
    
   const handlePositiveWords = () => {
    if (positiveWords){
       postiveWordRender = positiveWords.map(item => {
         return <div key={item}>{item}</div>
       })
     }
   } 

   const handleNegativeWords = () => {
    if (negativeWords){
      console.log(negativeWords)
       negativeWordRender = negativeWords.map(item => {
        return <div key={item}>{item}</div>
      })
    }
   }
  
  return (
    <div>
      <div>
        <Jumbotron style={{ backgroundImage: `url(${cardImageUrl})`, backgroundSize: 'cover' }}>
          <Container style={{color:'white' }}>
            <h1>{cardTitle}</h1>
          <p>
          {cardQuestion}
        </p>
      </Container>
    </Jumbotron>
      
       
    <div>
          
          <p>Sentiment Score: {sentimentScore}</p>
          <p>General Sentiment: {generalSentiment}</p>
      </div> 
      <div>
      <button type="button" className="btn btn-success"onClick={findSentiment}>Analyze</button>{' '}{' '}{' '}{' '}
      <button type="button" className="btn btn-secondary"onClick={resetTranscript}>Reset</button>
        <p></p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {/* <span>listening: {listening ? 'on' : 'off'}</span>
        <span>transcribing: {transcribing ? 'on' : 'off'}</span>
        <span>clearTranscriptOnListen: {clearTranscriptOnListen ? 'on' : 'off'}</span> */}
        {/* <span>{transcript}</span> */}
        <textarea onChange={findSentiment} value={transcript}/>
      </div>
      <p></p>
      </div>
      </div>
  )
}

export default Dictaphone