import React, {useState} from "react"

const Contact = () => {

    const [input, setInput] = useState('')

  return (
    <div className="contact">
        <p>35,000+ already joined</p>
        <h3>Stay up-to-date with what we’re doing</h3>
        <input 
            type="email" 
            placeholder="Enter your email address"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            />
        <button>Contact Us</button>

    </div>
  )
}

export default Contact