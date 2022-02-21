import React from 'react'
import './FormLogin.css'


export const FormLogin = () => {
  return (
    <body className='padre'>
      <p className='Title'>Inicio de Sesion</p>
        <div className='contentForm'>    
                <input type='text' className='Email' placeholder='Correo Electronico'></input>
                <input type='password' className='Password' placeholder='Contraseña'></input>
            <button className='ButtonLogin'>Iniciar Sesion</button>
        </div>
    </body>
  )
}
export default FormLogin ;