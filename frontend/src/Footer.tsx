import './Footer.scss';

const Footer = () => {
  return (
    <footer className='container-fluid'>
      <div className='row'>
        <div className='col-12 col-lg-4'>
          <img src='src/assets/dermatica-logo.png' alt='' height={20} />
        </div>
        <div className='col-12 col-lg-4'>
          <p>Home</p>
        </div>
        <div className='col-12 col-lg-4'>
          <p>About us</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
