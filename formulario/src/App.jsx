import React, { useState } from 'react'
import Card from './components/Card/Card'
import Form from './components/Form/Form'
import Head from './components/Head/Head'
import { UserContext } from './context/userContext'
import './App.css'

function App() {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    urlPhoto: '',
    age: null
  })



  return (
    <UserContext.Provider value={{
      ...userInfo,
      setUserInfo
    }}>
      <Head></Head>
      <Form></Form>
      <Card></Card>
    </UserContext.Provider>
  )
}

export default App