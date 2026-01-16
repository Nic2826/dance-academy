export default function Header() {
  return (
    <div className="header">
      <nav className="headernav">
        <div className="headernav-logo">
          <img className="headernav-logo-photo" src="/public/Heels-logo.png" alt="tacones-logo" />
          <a className="headernav-logo-name" href="#hero">Heels Bucaramanga</a>
        </div>
        
        <div className="headernav-items"> 
            <a className="headernav-item" href="#hero">hero</a>
            <a className="headernav-item" href="#clases">Clases</a>
            <a className="headernav-item" href="#contacto">Contacto</a>
            <a className="headernav-item" href="#contacto">Help</a>
            <a className="headernav-item" href="#login">Login</a>
        </div>          
      </nav>
    </div>
  );
}
