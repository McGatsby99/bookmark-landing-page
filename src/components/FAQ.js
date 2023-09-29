import arrowIcon from '../images/icon-arrow.svg'
import React, { useState } from 'react';

const FAQ = () => {

    const [open, setOpen] = useState(false);
    const [q, setQ] = useState('');
  return (
    <div className='faq component-margin'>
        <section>
            <h3>Frequently Asked Questions</h3>
            <p>
                Here are some of our FAQs. If you have any  other questions you’d like 
                answered please feel free to email us.
            </p>
        </section>
        <section>
            <div className={`questions ${q === 'one' && open? 'open': ''}`}>
                <p>What is Bookmark?</p>
                <img 
                    src={arrowIcon} 
                    alt="" 
                    className={` ${q === 'one' && open? 'flip': ''}`}
                    onClick={() => {
                        setQ('one');
                        setOpen(!open)
                    }}
                    />
                <div className="answers">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
                    justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
                </p>
                </div>
            </div>

            <div className={`questions ${q === 'two' && open? 'open': ''}`}>
                <p>How can I request a new browser?</p>
                <img 
                    src={arrowIcon} 
                    alt="" 
                    className={` ${q === 'two' && open? 'flip': ''}`}
                    onClick={() => {   
                        setQ('two')
                        setOpen(!open)
                    }}
                    />
                <div className="answers">
                <p>
                    Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
                    Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
                    ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
                    Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
                    </p>
                </div>
            </div>

            <div className={`questions ${q === 'three' && open? 'open': ''}`}>
                <p>Is there a mobile app?</p>
                <img 
                    src={arrowIcon} 
                    alt="" 
                    className={` ${q === 'three' && open? 'flip': ''}`}
                    onClick={() => {
                        setQ('three')
                        setOpen(!open)
                    }}
                    />
                <div className="answers">
                <p>
                    Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
                    urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
                    sollicitudin ex et ultricies bibendum.
                </p>
                </div>
            </div>

            <div className={`questions ${q === 'four' && open? 'open': ''}`}>
                <p>What about other Chromium browsers?</p>
                <img 
                    src={arrowIcon} 
                    alt="" 
                    className={` ${q === 'four' && open? 'flip': ''}`}
                    onClick={() => {
                        setQ('four')
                        setOpen(!open)
                    }}
                    />
                <div className="answers">
                <p>
                    Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
                    vitae neque eget nisl gravida pellentesque non ut velit.
                </p>
                </div>
            </div>
            <button>More Info</button>
        </section>
  
    </div>
  )
}

export default FAQ