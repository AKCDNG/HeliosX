import './Footer.scss';

const Footer = () => {
  return (
    <footer className='container-fluid'>
      <div className='row'>
        <div className='img-container col-12 col-lg-4'>
          <img src='src/assets/dermatica-logo.png' alt='' height={20} />
        </div>
        <div className='col-12 col-lg-4'>
          <p className='sub-header'>Quick Links</p>
          <ul>
            <li>
              <a href='https://www.dermatica.co.uk/registration'>
                Start consultation
              </a>
            </li>
            <li>
              <a href='https://www.dermatica.co.uk/treatments/'>
                Personalised formulas
              </a>
            </li>
            <li>
              <a href='https://www.dermatica.co.uk/shop/'>Routine essentials</a>
            </li>
            <li>
              <a href='https://www.dermatica.co.uk/how-it-works'>
                How it works
              </a>
            </li>
            <li>
              <a href='https://www.dermatica.co.uk/affiliates'>
                Affiliate program
              </a>
            </li>
            <li>
              <a href='https://www.dermatica.co.uk/login'>Login</a>
            </li>
          </ul>
        </div>
        <div className='col-12 col-lg-4'>
          <p className='sub-header'>Useful Links</p>
          <ul>
            <li>
              <a href='https://support.dermatica.com/hc/en-gb'>
                Support centre
              </a>
            </li>
            <li>
              <a href='https://www.dermatica.co.uk/skinlab/'>Blog</a>
            </li>
            <li>
              <a href='https://www.dermatica.co.uk/about-us#regulation'>
                Regulations
              </a>
            </li>
            <li>
              <a href='https://www.dermatica.co.uk/terms'>
                Terms and conditions
              </a>
            </li>
            <li>
              <a href='https://www.dermatica.co.uk/privacy'>Privacy policy</a>
            </li>
            <li>
              <a href='https://www.dermatica.co.uk/about-us#regulation'>
                Complaints
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
