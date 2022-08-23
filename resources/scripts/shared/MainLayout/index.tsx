
import React, { Fragment, useState } from 'react'

import { useTranslation } from 'react-i18next'

import Header from './Header';
import Footer from './Footer';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const navItems = [
  {
    en_name: 'Home',
    ar_name: 'الرئيسية',
    href: '/',
    current: true
  },
  {
    en_name: 'Products',
    ar_name: 'المنتجات',
    href: '/products',
    current: false
  },
  {
    en_name: 'Contact Us',
    ar_name: 'اتصل بنا',
    href: '/contact',
    current: false
  }
];

const MainLayout = ({children}) => {
  const [t,i18n] = useTranslation();

  const lang_navItems = navItems.map(navItem => {
    if(i18n.language == 'ar')
      return {
        name    : navItem.ar_name,
        href    : navItem.href,
        current : navItem.current
      }
    else
      return {
        name    : navItem.en_name,
        href    : navItem.href,
        current : navItem.current
    }
  })

  return (
    <>
      <Header navItems={lang_navItems} />
      <div className='content bg-gray-100'>
          {children}
      </div>

      <Footer navItems={lang_navItems} />

    </>
  )
}

export default MainLayout