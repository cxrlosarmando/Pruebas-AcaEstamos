import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css';
import { useNavigate } from'react-router-dom';
import axios from 'axios';


function LoginFrom() {

  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post('http://localhost:3000/Login-usuario', {      
            Email,
            Password
          });
    
          alert(JSON.stringify(response.data, null, 2));
          navigate('/Perfil-Usuario')
        } catch (error) {
          console.error('Error al enviar la solicitud:', error.response?.data || error.message);
        }
      };


    return (
        <div className='container-fluid'>
        <main  className="d-flex justify-content-center vh-100 w-100">
            <div className="row rowCR" id="login-user">
                <div className="col align-self-center">
                    <div className="border p-4"
                        style={{ borderRadius: '10px', borderStyle: 'solid', borderColor: 'black', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}>
                        <h2 className="text-center">Inicio de sesión</h2>
                        <div style={{ width: '600px', margin: 'auto' }} className="from-ingreso">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="correoInicioSesion" className="form-label">Ingrese email</label>
                                    <input type="email" className="form-control" id="correoInicioSesion"
                                        aria-describedby="emailHelp" value={Email} onChange={(e) => setEmail(e.target.value)}/>
                                    <div id="emailHelp" className="form-text">Ingrese un Email Registrado</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="contraseñaInicioSesion" className="form-label">Contraseña</label>
                                    <input type="password" className="form-control" id="contraseñaInicioSesion" value={Password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Guardar contraseña</label>
                                </div>
                                <div className="text-center">
                                    <button type='submit'  className="btn btn-primary btn-lg" id="BotonInicioSesion">Ingresar</button> <br />
                                </div>
                                <div className="Olvide" style={{textAlign:'center', marginTop:'10px'}}><Link to ="/OlvidoContra" className="Olvide-con" >Recuperar Contraseña</Link></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </div>
    );
}

export default LoginFrom;
