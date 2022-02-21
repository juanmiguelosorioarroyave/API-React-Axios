//https://backend-edw.herokuapp.com/usuario
import React from 'react';
function App() {
  return (
    <div className="App">
      <p className='Title'>Inicio de Sesion</p>
                <input type='email' className='Email' placeholder='Correo Electronico'></input>
                <input type='password' className='Password' placeholder='Contraseña'></input>
            <button className='ButtonLogin'>Iniciar Sesion</button>
    </div>
  );
}
export default App;
