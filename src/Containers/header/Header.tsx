import React from 'react'
import './Headers.css'
import people from '../../Assets/Group 81.png'
import ai from '../../Assets/Header Illustration.png'

type HeaderProps = {
  content1?: string
  content2?: string
  peoplecontent?: string
}

const Headers = ({content1, content2, peoplecontent}: HeaderProps) => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className="gpt3__header-content">
        <h1 className='gradient__text'>
          {content1}
        </h1>
        <p>{content2}</p>

        <div className="gpt3__header-content__input">
          <input type='email' placeholder='Your Email Address' />
          <button type='button'> Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} />
          <p>
            {peoplecontent}
          </p>
        </div>
      </div>
      <div className='gpt3__header-image'>
        <img src={ai} alt='ai' />
      </div>
    </div>
  )
}

export default Headers