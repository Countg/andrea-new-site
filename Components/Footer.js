import react from 'react';
import { BsInstagram } from 'react-icons/bs';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-item'>
          <h2>Follow Us </h2>
          <h3>On Instagram</h3>
          <a
            href='https://www.instagram.com/marketyourdream_/'
            target='blank'
            className='underline'
            alt='MYD Instagram'>
            <BsInstagram className='insta' /> marketyoudream_
          </a>
        </div>

        <div className='footer-item'>
          <h2>Contact Us </h2>
          <h3>Andrea McDonald</h3>
          <a href='mailto:andrea@marketyourdream.ca' className='rightUnderline'>
            andrea@marketyourdream.ca
          </a>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>Web design by Gavin Stephens</p>
      </div>
    </div>
  );
}
