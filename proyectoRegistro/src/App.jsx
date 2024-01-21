import Registro from './assets/components/Registro'
import { useState } from 'react'
import './App.css'

const App = () => {
  const [error, setError] = useState("")
  return (
    <>
      <Registro
      error={error}
      setError={setError}
      />
    </>
  )
}

export default App
