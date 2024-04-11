import './button.css';


type ButtonType = {
  title:string,
  type?:"submit" | "reset" | "button" | undefined,
  disabled?:boolean
}

const Button = ({title, type, disabled}:ButtonType) =>{
  return(
    <button type={type} disabled={disabled} className='button-gradient'><span className='span-button'>{title}</span></button>
  )
} 

export default Button;