import { faFacebook, faGithub, faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const SocialButton = ({icono}) => {
  return (
    <>
      <a href="https://github.com"><button>{icono==='github' ?  <FontAwesomeIcon icon={faGithub} size="3x"/>:null}</button></a>
      <a href="https://www.facebook.com/"><button>{icono==='facebook' ?  <FontAwesomeIcon icon={faFacebook} size="3x"/>:null}</button></a>
      <a href="https://cl.linkedin.com/"><button>{icono==='linkedin' ?  <FontAwesomeIcon icon={faGithubAlt} size="3x"/>:null}</button></a>
      <button>{icono==='otro' ? "O usa tu email para registrarte" :null}</button>
    </>
  )
}

export default SocialButton