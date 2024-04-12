import './button.css';


type ButtonType = {
  title:string,
  type?:"submit" | "reset" | "button" | undefined,
  disabled?:boolean,
  bigger?:boolean,
  id?:string | undefined,
  onClick?:React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({title, type, disabled, bigger, id, onClick}:ButtonType) =>{
  
  return(
    <button onClick={onClick} type={type} disabled={disabled} id={id} className='button-gradient'><span className={`span-button ${bigger && 'bigger'}`}>{title}</span></button>
  )
} 

export default Button;