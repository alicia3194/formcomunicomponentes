import React, { useState, useContext } from "react";
import { UserContext } from '../../context/userContext'
import './Form.css'

const Form = () => {
  const { setUserInfo } = useContext(UserContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [urlPhoto, setUrlPhoto] = useState('')
  const [age, setAge] = useState('')

  const onNameChanged = (e) => {
    setName(e.target.value)
  }

  const onEmailChanged = (e) => {
    setEmail(e.target.value)
  }

  const onUrlPhotoChanged = (e) => {
    setUrlPhoto(e.target.value)
      
  }
  

  const onAgeChanged = (e) => {
    setAge(e.target.value)
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    setUserInfo({
      email,
      name,
      urlPhoto,
      age
    })
    setAge('')
    setName('')
    setEmail('')
    setUrlPhoto('')

    console.log(e.target);
  }

  return <>
    <h1>Formulario</h1>
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="name">Name</label>
      <input id="name" value={name} type="text" onChange={onNameChanged} />

      <label htmlFor="email">Email</label>
      <input id="email" value={email} type="text" onChange={onEmailChanged} />

      <label htmlFor="url_photo">URL photo</label>
      <input id="url_photo" value={urlPhoto} type="url" onChange={onUrlPhotoChanged} />
      

      <label htmlFor="age">Age</label>
      <input id="age" value={age} type="text" onChange={onAgeChanged} />

      <button type="submit" >Submit</button>
    </form>
  </>;
};

export default Form;