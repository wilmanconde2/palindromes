const year = new Date().getFullYear();

const Footer = () => {
  return (
    <>
      <div className='footer-fixed'>
        © {year} &middot; by WC2 &middot; willconde2@hotmail.com
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
