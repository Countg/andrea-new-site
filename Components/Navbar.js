import react, { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const openSideBar = () => {
    setOpen(!open);
  };

  return (
    <div className='navbar'>
      <nav className='nav-wrapper'>
        <div className='nav-logo'></div>

        <ul className={open ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <a className='nav-link' href='#about'>
              About
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#contact'>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
