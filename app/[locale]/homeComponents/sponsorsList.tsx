import Image from 'next/image';
import './sponsorsList.css';

const SponsorsList:React.FC = () => {
  const logos = [
    {logo:'/logo-santala.jpg', width:325, height:159},
    {logo:'/logo-angeles.png', width:300, height:300},
    {logo:'/logo-empowerit.png', width:300, height:300},
    {logo:'/logo-lalloz.png', width:708, height:147},
    {logo:'/logo-cesar.png', width:248, height:203},
    {logo:'/logo-susana.png', width:110, height:110},
    {logo:'/logo-latam.png', width:110, height:110},
    {logo:'/logo-camara.png', width:110, height:110},
  ]

  return(
    <div className='cont-sponsors-list'>
      <h2>Sponsors</h2>
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