import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './Card';
import User from './User';

import { useState, useEffect } from 'react';




function App() {

  // const [ users, setUsers ]   = useState([]);

  // useEffect(   () => {
  //   const getUsers = async () => {
  //     const endPoint = 'http://127.0.0.1:3000/api/users';
  //     const resp =  await fetch(endPoint);
  //     const users = await resp.json();
  //     setUsers( users.data);
  //     console.log(users);
  //   }
  
  //   getUsers();
  // }, [])

  let logueado=true;
  let mensaje = logueado == true ? 'bienvenido' : 'inicio de sesion';
  
  let nombre = "José";
  let edad = 21;
  const productos = [
    {
      id: 1, nombre:'mate', precio:500
    },
    {
      id: 2, nombre:'galletitas', precio:800
    },
    {
      id: 3, nombre:'coca', precio:400
    },
    {
      id: 4, nombre:'helado', precio:100
    }
  ];
  let titulo = <h2> Esto es un título</h2>;
  // const userData = {
  //   name: 'Juan',
  //   email: 'juan@mail.com'
  // }
  
  return (
    <div>
      <h1> Aplicaciones Híbridas</h1>
      {/* {
        users.map( user => (
          <User  
            name={user.name}
            email={ user.email }
          />
        ))
      } */}


      <img src="" alt="" /> 
      { titulo}

      <h4>{mensaje}</h4>

  <hr />
<div className="row">
  {
  //renderizado lista
    productos.map( producto => { return <Card texto={producto.nombre} precio={producto.precio} /> })
  
  }
</div>
     { 
     //renderizado condicional
     logueado == true ?(
     <>
     <h4>Bienvenido <p className="verde">Hola {nombre}</p></h4>
      {/* <div className='row'>
        <Card texto="Termo" precio={40000} />
        <Card texto="Mate" precio={5000} />
      </div> */}
      </>
     ):(
     <h4>Iniciar sesion <a href="#">Login</a></h4>
     )}

      {/* <p className='verde'> Hola { nombre }</p>
      <p> {  edad + 2  }</p>
      <p> {  cursos[2]  } </p> */}
    </div>
  )
}

export default App
