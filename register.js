import React, { useState } from 'react';

function Register() {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');

 const handleSubmit = (event) => {
 event.preventDefault();
 // Lógica de registro
 };

 return (
 <form onSubmit={handleSubmit}>
 <label>Nombre de usuario:</label>
 <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
 <br />
 <label>Contraseña:</label>
 <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
 <br />
 <button type="submit">Registrarse</button>
 </form>
 );
}

export default Register;