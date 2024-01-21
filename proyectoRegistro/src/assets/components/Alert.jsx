

const Alert = ({error, color}) => {
    return (
      <>
        <div className={`alert ${color}`}> {error}</div>
        
      </>
    )
  }
  
  export default Alert;