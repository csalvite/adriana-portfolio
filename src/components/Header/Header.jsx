import './Header.css';

const Header = () => {
  return (
    <header id='header1'>
      <video
        src='/resources/videos/headerBackground.mp4'
        muted
        autoPlay
        loop
      ></video>

      <div className='containerTitle'>
        <h1>Rosa Maria Melano</h1>
        <h2>Fashion Photographer / Visual Creator</h2>
        <i className='fa-solid fa-angle-down'></i>
      </div>
    </header>
  );
};

export default Header;
