import React from 'react'

import { useTranslation } from 'react-i18next'

const CTASection = () => {

  const [t,i18n] = useTranslation();

  return (
    <div className="bg-gray-100">
      <section className="w-full bg-gray-100">
        <div className="w-full px-4 py-20 mx-auto text-left md:text-center md:w-3/4 lg:w-2/4">
          <p className="mb-2 text-base font-semibold text-primary-custom-brown">{t('homepage.cta.title')}</p>
          <h2 className="mb-6 text-3xl font-extrabold tracking-tight md:text-4xl md:mb-6 md:leading-tight text-primary-dark-blue">{t('homepage.cta.description')}</h2>
          <div className="mb-0 space-x-0 md:space-x-2">
            <a className="bg-primary-custom-orange px-7 py-3 rounded-full text-neutral-white text-xs bg-gradient-to-r from-primary-custom-red to-primary-custom-orange hover:button-brightness inline-flex items-center justify-center w-full mb-2 btn btn-primary btn-lg sm:w-auto sm:mb-0" href="/products">
              {t('homepage.cta.btn')}
              <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CTASection