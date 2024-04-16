import { useTranslations } from 'next-intl';
import './themes.css';

const Themes:React.FC = () =>{

  const t = useTranslations("home.themes");

  return(
    <div className='cont-themes-list'>

    
    <div className='themes-list'>
      <ul>
        {[1,2,3,4,5].map((item)=>(
          <li key={item}>{t(`li${item}`)}</li>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default Themes;