import Alert from './Alert'
import Formulario from './Formulario';
import SocialButton from './SocialButton';

const Registro = ({error, setError}) => {
    console.log(error)
    return (
      <>
      <h1>Crea tu cuenta</h1>
        <SocialButton icono={"github"}/>
        <SocialButton icono={"facebook"}/>
        <SocialButton icono={"linkedin"}/>
        <SocialButton icono={"otro"}/>
        <Formulario
        error= {error}
        setError={setError}
        />
        <Alert error={error.msg} color={error.color} />
      </>
    )
  }
  
  export default Registro;