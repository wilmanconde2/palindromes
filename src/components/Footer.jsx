// src/components/Footer.jsx

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <>
      <div className='footer-fixed'>
        © {year} &middot; by{' '}
        <a className="kraken" href='https://krakendigitalsd.netlify.app/' target='_blank' rel='noopener noreferrer'>
          KrakenDigitalSD
        </a> &middot;
        <div id='redesSociales'>
          <a href={'https://github.com/wilmanconde2'} target='_blank' rel='noopener noreferrer'>
            <img
              className='redesSociales'
              src='/githubWhite.png'
              alt='Github icons created by -Artist - Flaticon'
            />
          </a>
          <a
            href={'https://www.linkedin.com/in/wilman-conde/'}
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='redesSociales'
              src='/linkedinWhite.png'
              alt='Linkedin icons created by Smashicons - Flaticon'
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
