import WhatssapIcon from '../assets/whatsapp.png';
import TiktokIcon from '../assets/tiktok.png';
import InstagramIcon from '../assets/ig.png';

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-social">
        <img className="Footer-social-image" src={InstagramIcon} alt="Instagram icon" />
        <a className="Footer-social-item" href="https://www.instagram.com/heels_bucaramanga/?hl=en" target="_blank">Instagram</a>
      </div>
        
        <div className="Footer-social">
          <img className="Footer-social-image" src={TiktokIcon} alt="TikTok icon" />
          <a className="Footer-social-item" href="https://www.tiktok.com/@heelsbucaramanga" target="_blank">TikTok</a>
        </div>
        
        <div className="Footer-social">
          <img className="Footer-social-image" src={WhatssapIcon} alt="WhatsApp icon" />
          <a className="Footer-social-item" href="https://wa.me/573144433845?text=Hola%2C%20vengo%20de%20la%20pagina" target="_blank">WhatsApp</a>
        </div>
        
    </div>
  )
}
