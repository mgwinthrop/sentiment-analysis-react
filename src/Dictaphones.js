import React, { useState } from 'react'
import { DictaphoneWidgetA } from './Dictaphone'
import SpeechRecognition from './SpeechRecognition'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophone, faStopCircle } from '@fortawesome/free-solid-svg-icons'

export default (props) => {
  const [showFirstWidget, setShowFirstWidget] = useState(true)
  //const toggleShowFirstWidget = () => setShowFirstWidget(!showFirstWidget)

  const listenContinuously = () => SpeechRecognition.startListening({
    continuous: true,
    language: 'en-GB'
  })
  // const listenContinuouslyInChinese = () => SpeechRecognition.startListening({
  //   continuous: true,
  //   language: 'zh-CN'
  // })
  // const listenOnce = () => SpeechRecognition.startListening({ continuous: false })

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

  return (
    <div>
        {showFirstWidget && <DictaphoneWidgetA props={props}/>}
      {/* <button onClick={listenOnce}>Listen once</button> */}
      <button type="button" className="btn btn-primary" onClick={listenContinuously}><FontAwesomeIcon icon={faMicrophone} /> {' '}Record</button>{' '}{' '}
      <button type="button" className="btn btn-danger" onClick={SpeechRecognition.stopListening}><FontAwesomeIcon icon={faStopCircle} /> Stop</button>
      
    </div>
  )
}
