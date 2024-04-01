import { useState } from 'react'

//importando los modulos de firebase
import appFirebase from '../src/credenciales'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
const auth = getAuth(appFirebase)

//importar nuestro componentes
import login from '../src/components/Login'
import Home from '../src/components/home'


import './App.css'

function App() {

  const [usuario, setUsuario] = useState(null)

  onAuthStateChanged(auth, (usuariofirebase)=>{
    if (usuariofirebase) {
      setUsuario(usuariofirebase)
    }
    else
    {
      setUsuario(null)
    }
  })

  return (
    <div> 
      {usuario ? <Home correoUsuario = {usuario.email} /> : <login/>}
    </div>
  )
}

export default App
