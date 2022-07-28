import Head from 'next/head';
import Image from 'next/image';
import Layout from '../Components/Layout';

export default function Home() {
  return (
    <Layout title='Market Your Dream - Home'>
      <div className='main-wrapper'>
        <div className='logo-container'>
          <img src='/logo/Logo_1.png' />
        </div>
        <div className='word-container'>
          <div className='image-container'>
            <img src={'/images/backgroundNone.png'} />
          </div>
          <div className='main-wording'>
            <h2>be where the world is going</h2>
            <p>marketing and strategy studio</p>
            <div className='main-button'>
              <a href='mailto:andrea@marketyourdream.ca'>
                <div>Contact Us</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
