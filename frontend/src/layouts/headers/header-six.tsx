'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeaderMenus from './header-menus';
import useSticky from '@/hooks/use-sticky';
import { Menu, Search, Wishlist, Zero } from '@/components/svg';
import logo from '@/assets/img/logo/logo-white.png';
import CartOffcanvas from '@/components/offcanvas/cart-offcanvas';
import MobileOffcanvas from '@/components/offcanvas/mobile-offcanvas';

export default function HeaderSix() {
  const {sticky,headerFullWidth} = useSticky();
  const [openCartMini, setOpenCartMini] = React.useState(false);
  const [openOffCanvas, setOpenOffcanvas] = React.useState(false);
  useEffect(() => {
    headerFullWidth();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <header className="tp-header-height z-index-5">
        <div className="tp-inner-header-2-area tp-shop-mob-space tp-transparent tp-inner-header-white">
          <div className="container container-1800">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-4 col-md-4 col-4">
                <div className="tp-header-logo">
                  <Link href="/">
                    <Image src={logo} alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-5 d-none d-xl-block">
                <div className="tp-inner-header-2-menu header-main-menu">
                  <nav className="tp-main-menu-content">
                    {/* header menus */}
                    <HeaderMenus />
                    {/* header menus */}
                  </nav>
                </div>
              </div>
              <div className="col-xl-5 col-lg-8 col-md-8 col-8">
                <div className="tp-inner-header-2-right d-flex align-items-center justify-content-end">
                  <div className="tp-inner-header-2-search p-relative d-none d-lg-block">
                    <input type="text" placeholder="Search" />
                    <span>
                      <Search/>
                    </span>
                  </div>
                  <button className="tp-shop-mob-search d-lg-none">
                    <span>
                    <Search/>
                    </span>
                  </button>
                  <Link className="tp-inner-header-2-wishlist p-relative" href="/wishlist">
                    <i>o</i>
                    <span>
                      <Wishlist/>
                    </span>
                  </Link>
                  <button onClick={()=> setOpenOffcanvas(true)} className="tp-inner-header-2-bar tp-offcanvas-open-btn">
                    <span>
                      <Menu/>
                    </span>
                  </button>
                  <button onClick={() => setOpenCartMini(true)} className="tp-inner-header-2-cart cartmini-open-btn">
                    <span>
                      <Zero/>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </header>

      {/* cart mini */}
      <CartOffcanvas openCartMini={openCartMini} setOpenCartMini={setOpenCartMini} />
      {/* cart mini */}

      {/* off canvas */}
      <MobileOffcanvas openOffcanvas={openOffCanvas} setOpenOffcanvas={setOpenOffcanvas} />
      {/* off canvas */}
    </>
  )
}
