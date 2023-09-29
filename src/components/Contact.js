import React, {useState, useRef} from "react"
import errorIcon from '../images/icon-error.svg'

const Contact = () => {

    const [input, setInput] = useState('')
    const inputRef = useRef(null);

    const [error, setError] = useState(false)
  

  return (
    <div className="contact">
        <p>35,000+ already joined</p>
        <h3>Stay up-to-date with what we’re doing</h3>
        <input 
            type="email" 
            placeholder={`Enter your email address `}
            value={input}
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            ref={inputRef}
            className={error? 'error': ''}
            onChange={(event) => {
              setInput(event.target.value)
              }
            }
            />
            <div className={`error-msg ${error? '': 'hide'}` }><p>Whoops, make sure it's an email</p><img src={errorIcon} alt=""/></div>
        <button
          onClick={() => {
            setError(!(inputRef.current.value.length > 0 && inputRef.current.validity.valid))
            console.log(error)
          }}
        >Contact Us</button>

    </div>
  )

}


export default Contact