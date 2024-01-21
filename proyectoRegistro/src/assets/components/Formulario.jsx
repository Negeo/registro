import { useState } from "react";

const Formulario = ({setError}) => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const validarDatos= (e) =>{
        e.preventDefault();
        const { nombre, email, password, confirmPassword } = formData;
        //validar email
        //validar regexpassword 1:05
        const datosValidar = !nombre || !email || !password || !confirmPassword;
        datosValidar? 
          setError({
            error: true,
            msg: "Completa todos los campos",
            color: "warning",
          }):
            setError({
              error: false,
              msg: "Cuenta creada correctamente",
              color: "success",
            });
        const validarPassword = password !== confirmPassword;
        if (validarPassword) {
          setError({
            error: true,
            msg: "Las contraseñas no coinciden, prueba nuevamente",
            color: "danger",
          });
          return;
        }
        setFormData({
          nombre: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
    }
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        };

    return (
        <form
          className="formulario"
          onSubmit={(e) => validarDatos(e)}
        >
          <div className="form-group">
            <br />
            <input
              type="text"
              name="nombre"
              className="form-control"
              placeholder="Nombre"
              onChange={handleChange}
              value={formData.nombre}
            />
          </div>
          <div className="form-group">
            <br />
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="micorreo@ejemplo.com"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <div className="form-group">
            <br />
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Contraseña"
              onChange={handleChange}
              value={formData.password}
            />
          </div>
          <div className="form-group">
            <br />
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              placeholder="Confirma tu contraseña"
              onChange={handleChange}
              value={formData.confirmPassword}
            />
          </div>
          <br />
          <button type="submit" className="btn btn-primary fullWidth">
            Registrarse
          </button>
          <br />
        </form>
    );
};

export default Formulario;