import React from 'react'

import { useTranslation } from 'react-i18next'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const Hero = ({data}) => {
  const [t,i18n] = useTranslation();
 // console.log(data[4].pictures.length > 0 ? 1 : 0);
  return (
    <div dir={i18n.language == 'ar' ? 'rtl' : 'ltr'}  className="relative bg-white overflow-hidden">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font font-extrabold tracking-tight text-primary-dark-blue sm:text-6xl">
              {t('homepage.hero.title')}
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              {t('homepage.hero.description')}
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
              >
                <div className={classNames(
                    i18n.language == 'ar' ? "sm:right-1/2 lg:right-1/2 ": "sm:left-1/2 lg:left-1/2  ",
                    "absolute transform sm:top-0 sm:translate-x-8 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8"
                  )}>
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8 px-5">
                      <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                        <img
                          //src={data[0].pictures.length > 0 ? data[0].pictures[0].name : "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"}
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                          //src={data[1].pictures.length > 0 ? data[1].pictures[0].name : "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"}
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          //src={data[2].pictures.length > 0 ? data[2].pictures[0].name : "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"}
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          //src={data[3].pictures.length > 0 ? data[3].pictures[0].name : "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"}
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          //src={data[4].pictures.length > 0 ? data[4].pictures[0].name : "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"}
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          //src={data[5].pictures.length > 0 ? data[5].pictures[0].name : "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"}
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          //src={data[6].pictures.length > 0 ? data[6].pictures[0].name : "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"}
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="/products"
                className="inline-block text-center bg-primary-custom-orange bg-gradient-to-r from-primary-custom-red to-primary-custom-orange hover:button-brightness border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700"
              >
                {t('homepage.hero.btn')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero