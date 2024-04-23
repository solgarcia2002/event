"use client"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import './footer.css';
const Footer:React.FC = () => {

  const router = useRouter();

  const links = [
    {title:'Privacy Policy', url:'#'},
    {title:'Cookies Policy', url:'#'},
    {title:'Legal Notice', url:'#'},
    {title:'Terms and Conditions', url:'#'}
  ]

  const linksSocialMedia = [
    {title:'Facebook', url:'https://www.facebook.com/profile.php?id=61558330092580', icon:<FontAwesomeIcon icon={faInstagram} />},
    {title:'Instagram', url:'https://www.instagram.com/wellbizbridgemiami2024/', icon:<FontAwesomeIcon icon={faFacebook} />},
    {title:'Linkedin', url:'https://www.linkedin.com/company/102448014/admin/feed/posts/', icon:<FontAwesomeIcon icon={faLinkedin} />},
  ]

  return(
    <footer>
      <div>
        <p >Copyright © 2024</p>
        
      </div>
      <div className="links-social-media">
        {linksSocialMedia.map((item, i) =>(
          <button aria-label={item.title} onClick={()=>router.push(item.url)} key={i} >
            {item.icon}
          </button>
        ))}
      </div>
      <div className="links-list">
        {links.map((item, i)=>(
          <Link key={i} href={item.url}>{item.title}</Link>
        ))}
        
      </div>
    </footer>
  )
}

export default Footer;