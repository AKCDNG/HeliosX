import './Header.scss';

const Header = () => {
  return (
    <header className='col-12'>
      <a href='https://www.dermatica.co.uk/'>
        <img
          src='src/assets/dermatica-logo.png'
          alt='company logo'
          height={40}
        />
      </a>
    </header>
  );
};

export default Header;
