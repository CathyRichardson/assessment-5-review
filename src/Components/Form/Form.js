import React, { useState, useEffect } from 'react';
import axios from 'axios';
import noImage from './../../assets/no_image.jpg';
import './Form.css';

function Form(props) {
  const [title, setTitle] = useState('')
  const [img, setImg] = useState('')
  const [content, setContent] = useState('')

  const submit = () => {
    axios.post('/api/post', { img, title, content })
      .then(() => {
        props.history.push('/dash')
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    console.log('COMPONENT DID MOUNT')
  }, [])

  useEffect(() => {
    console.log('COMPONENT DID MOUNT AND WHEN IMG STATE CHNAGES')
  }, [img])
  
    let imgSrc = img || noImage;

    return (
      <div className='form content-box'>
        <h2 className='title'>New Post</h2>
        <div className='form-main'>
          <div className='form-input-box'>
            <p>Title:</p>
            <input value={title} onChange={e => setTitle(e.target.value)} />
          </div>
          <img className='form-img-prev' src={imgSrc} alt='preview'/>
          <div className='form-input-box'>
            <p>Image URL:</p>
            <input value={img} onChange={e => setImg(e.target.value)} />
          </div>
          <div className='form-text-box'>
            <p>Content:</p>
            <textarea value={content} onChange={e => setContent(e.target.value)} />
          </div>
        </div>
        <button onClick={submit} className='dark-button'>Post</button>
      </div>
    );
}

export default Form;