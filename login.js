import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');

 const handleSubmit = async (event) => {
 event.preventDefault();
 try {
 const response = await axios.get(`http://localhost:3000/users?username=${username}&password=${password}`);
 const user = response.data[0];
 if (user) {
 localStorage.setItem('user', JSON.stringify(user));
 window.location.href = '/dashboard';
 } else {
 console.error('Usuario o contraseña incorrecta');
 }
 } catch (error) {
 console.error(error);
 }
 };

 return (
 <form onSubmit={handleSubmit}>
 <label>Nombre de usuario:</label>
 <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
 <br />
 <label>Contraseña:</label>
 <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
 <br />
 <button type="submit">Iniciar sesión</button>
 </form>
 );
};

export default Login;