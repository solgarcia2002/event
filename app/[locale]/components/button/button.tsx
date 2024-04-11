import './button.css';


type ButtonType = {
  title:string,
  type?:"submit" | "reset" | "button" | undefined,
  disabled?:boolean,
  bigger?:boolean
}

const Button = ({title, type, disabled, bigger}:ButtonType) =>{
  return(
    <button type={type} disabled={disabled} className='button-gradient'><span className={`span-button ${bigger && 'bigger'}`}>{title}</span></button>
  )
} 

export default Button;