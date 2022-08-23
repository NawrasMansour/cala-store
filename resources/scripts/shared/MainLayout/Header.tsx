import { Transition } from '@headlessui/react';
import { Inertia } from '@inertiajs/inertia';
import { useForm } from '@inertiajs/inertia-react';
import React, { Fragment, useEffect, useState } from 'react'

import { useTranslation } from 'react-i18next'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



const Header = ({navItems}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [t,i18n] = useTranslation();
  const [query, setQuery] = useState("");


  useEffect(() => {
    if (query) {
      return Inertia.get(route('products.shop.index'),{query : query });
    }
  }, [query]);

  return (
    <>
        <div dir={i18n.language == 'ar' ? 'rtl' : 'ltr'} className="fixed z-50 top-0 w-full bg-white border-y">
        <nav className="container flex justify-between items-center z-20">
          <div className="my-5 lg:my-6">
            <img src="/images/logo_header.png" alt="Cala logo" />
          </div>

          <div className="hidden lg:block text-sm text-neutral-grayish-blue">
            {navItems.map((navItem , index) => (
              <a key={index} className={classNames(
                navItem.current ? "" : "",
                "mx-3 py-5 px-2 hover:gradient-border-bottom"
              )}
              href={navItem.href}
              aria-current={navItem.current ? 'page' : undefined}
              >
                {navItem.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:block relative mx-auto w-max">
            <input type="search"
                   name='search'
                   value={query}
                   onChange={({ target }) => setQuery(target.value)}
                   className="border-red-300 peer cursor-pointer relative z-10 h-10 w-10 rounded-full border bg-transparent pl-8 outline-none focus:w-full focus:cursor-text focus:border focus:border-orange-300 focus:pl-16 focus:pr-4"
              />
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-red-500 px-3.5 peer-focus:border-orange-300 peer-focus:stroke-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
              <path  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <a href='/contact' className="hidden lg:block bg-primary-custom-orange px-7 py-3 rounded-full text-neutral-white text-xs bg-gradient-to-r from-primary-custom-red to-primary-custom-orange hover:button-brightness focus:outline-none focus:ring ring-orange-400">
            {t('homepage.contact_btn')}
          </a>

          { i18n.language == 'en' &&
            <button
                onClick={()=>{i18n.changeLanguage('ar')}}
                className='px-2 py-1 bg-primary-custom-brown text-white rounded-lg mx-2 hover:button-brightness'>
                Ar
            </button>
          }

          { i18n.language == 'ar' &&
            <button
                onClick={()=>{i18n.changeLanguage('en')}}
                className='px-2 py-1 bg-primary-custom-brown text-white rounded-lg mx-2 hover:button-brightness'>
                En
            </button>
          }


          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden focus:outline-none"
          >
            <img
              className={`${isOpen && 'hidden'}`}
              src="/icons/icon-hamburger.svg"
              alt=""
            />
            <img
              className={isOpen ? 'block' : 'hidden'}
              src="/icons/icon-close.svg"
              alt=""
            />
          </button>
        </nav>
      </div>

      {/* Modal */}
      <div
        dir={i18n.language == 'ar' ? 'rtl' : 'ltr'}
        className={`fixed inset-0 z-30 bg-gray-800
        bg-opacity-50 ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className="bg-white text-primary-dark-blue flex flex-col text-center mx-5 my-20 py-4 rounded">
          {navItems.map((navItem,index) => (
            <a key={index} className="py-2" href={navItem.href}>
              {navItem.name}
            </a>
          ))}
          <Transition
              as={Fragment}
              show={true}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-x-1"
              enterTo="opacity-100 translate-x-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 translate-x-1"
          >
            <form className=" relative mx-auto w-max">
              <input type="search"
                    className="peer cursor-pointer relative z-10 h-10 w-10 rounded-full border bg-transparent pl-8 outline-none focus:w-full focus:cursor-text focus:border-lime-300 focus:pl-16 focus:pr-4"
                />
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </form>
          </Transition>

        </div>


      </div>
    </>
  )
}

export default Header