
type ButtonType = {
  title:string,
  type:"submit" | "reset" | "button" | undefined,
  disabled:boolean
}

const Button = ({title, type, disabled}:ButtonType) =>{
  return(
    <button type={type} disabled={disabled}>{title}</button>
  )
} 

export default Button;