import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import useOnClickOutside from 'use-onclickoutside';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { RootState } from 'store';

type HeaderType = {
  isErrorPage?: Boolean;
}

const Header = ({ isErrorPage }: HeaderType) => {
  const router = useRouter();
  const { cartItems } = useSelector((state: RootState)  => state.cart);
  const arrayPaths = ['/'];  

  const [onTop, setOnTop] = useState(( !arrayPaths.includes(router.pathname) || isErrorPage ) ? false : true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navRef = useRef(null);
  const searchRef = useRef(null);

  const headerClass = () => {
    if(window.pageYOffset === 0) {
      setOnTop(true);
    } else {
      setOnTop(false);
    }
  }

  useEffect(() => {
    if(!arrayPaths.includes(router.pathname) || isErrorPage) {
      return;
    }

    headerClass();
    window.onscroll = function() {
      headerClass();
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  }

  const closeSearch = () => {
    setSearchOpen(false);
  }

  // on click outside
  useOnClickOutside(navRef, closeMenu);
  useOnClickOutside(searchRef, closeSearch);

  return (
    <header className={`fixed w-full top-0 left-0 z-[999] h-[65px] text-white transition-all duration-300 ${!onTop ? 'bg-gray-900 shadow-md' : ''}`}>
      <div className="container flex h-full items-center">
        <Link href="/">
          <a className="flex items-center text-white text-[14px] md:text-[16px]">
           
          <p className="text-xl font-semibold mr-60"><span className="text-yellow-500">E</span>-Shop</p>
          </a>
        </Link>
        <nav ref={navRef} className={`site-nav flex space-x-6 ${menuOpen ? 'flex' : 'hidden'} md:flex`}>
          <Link href="/products">
            <a className="text-white">Products</a>
          </Link>
          <a href="#" className="text-white">Inspiration</a>
          <a href="#" className="text-white">Kids</a>
          <button className="site-nav__btn text-white">
            <p>Account</p>
          </button>
        </nav>
        <div className="ml-auto flex items-center">
          <button ref={searchRef} className={`relative ${searchOpen ? 'active' : ''} text-white text-lg`}>
            <form className={`absolute top-0 left-0 w-full ${searchOpen ? 'block' : 'hidden'}`}>
              <i className="icon-cancel" onClick={() => setSearchOpen(!searchOpen)}></i>
              <input type="text" name="search" placeholder="Enter the product you are looking for" className="w-full " />
            </form>
            <i onClick={() => setSearchOpen(!searchOpen)} className="icon-search"></i>
          </button>
          <Link href="/cart">
            <button className="ml-[15px] relative text-white text-lg">
              <i className="icon-cart"></i>
              {cartItems.length > 0 && 
                <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full px-[5px] text-xs">{cartItems.length}</span>
              }
            </button>
          </Link>
          <Link href="/login">
            <button className="ml-[15px] hidden md:block"><i className="icon-avatar text-white text-lg"></i></button>
          </Link>
          <button 
            onClick={() => setMenuOpen(true)} 
            className="ml-[15px] block md:hidden">
            <i className="btn-hamburger"><span></span></i>
          </button>
        </div>
      </div>
    </header>
  )
  
};


export default Header;
