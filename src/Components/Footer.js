import React from 'react';

const Footer = () => {

  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 ">
           <img src='../images/logo.svg'></img>
            <p>Gifting made easy.</p>
            <div className='social-icons d-flex gap-3 mt-5 md:mt-5 pt-3'>
              <img src='../images/_Twitter.png' alt='Twitter'></img>
              <img src='../images/_Facebook.png' alt='Facebook'></img>
              <img src='../images/Tiktok.jpg' style={{ width: '24px', height: '24px', borderRadius: '3px' }} alt='Tiktok'></img>
              <img src='../images/_Instagram.png' alt='Instagram'></img>
            </div>
            <p>© {currentYear} GiftList. All rights Reserved</p>
          </div>
          <div className="col-md-3 ">
            <h4>About GiftList</h4>
            <ul>
              <li>How it works</li>
              <li>About Us</li>
              <li>Browser Extensions</li>
              <li>Shop</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Help</h4>
            <ul>
              <li>Disclaimer</li>
              <li>Privacy policy</li>
              <li>Terms of Use</li>
              <li>Contact Us</li>
              <li>FAQ</li>
            </ul>
    
          </div>
          <div className="col-md-3">
          <div class="btns flex-column">
            <button type="button" class="btn">Log in</button>
            <button type="button" class="btn sign-up">Sign Up</button>
            </div>
    
          </div>
        </div>
      </div>
   
    </footer>
  );
};

export default Footer;
