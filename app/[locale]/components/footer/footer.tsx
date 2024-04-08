import Link from "next/link";
import './footer.css';
const Footer:React.FC = () => {

  const links = [
    {title:'Privacy Policy', url:'#'},
    {title:'Cookies Policy', url:'#'},
    {title:'Legal Notice', url:'#'},
    {title:'Terms and Conditions', url:'#'}
  ]

  return(
    <footer>
      <div>
        <p>Copyright © 2024</p>
        
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