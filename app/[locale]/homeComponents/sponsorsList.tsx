"use client"
import Image from 'next/image';
import './sponsorsList.css';

const SponsorsList:React.FC = () => {
  const logos = [
    {logo:'/logo-santala.jpg', url:'#'},
    {logo:'/logo-santala.jpg', url:'#'},
    {logo:'/logo-santala.jpg', url:'#'},
    {logo:'/logo-santala.jpg', url:'#'},
    {logo:'/logo-santala.jpg', url:'#'},
    {logo:'/logo-santala.jpg', url:'#'},
  ]

  return(
    <div className='cont-sponsors-list'>
      <h4>Sponsors</h4>
      <div className='carousel-logos'>
        <div className='ticker-track'>
          {
            logos.map((logo,i)=>(
              <Image key={i} src={logo.logo} alt='sponsor' width={325} height={159} />
            ))
          }

        </div>
      </div>
    </div>
  )
}
export default SponsorsList;