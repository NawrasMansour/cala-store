import React from 'react'
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

import { useTranslation } from 'react-i18next'

const features = [
  {
    en_name: 'Categories',
    ar_name: 'التصنيفات',
    en_description:'We are specialists in all types of furniture and the decorations',
    ar_description:'نحن متخصصون في جميع أنواع الأثاث والديكورات',
    icon: GlobeAltIcon,
  },
  {
    en_name: 'Clusters',
    ar_name: 'الأنواع',
    en_description:'Our products are made from various types of raw materials',
    ar_description:'منتجاتنا مصنوعة من أنواع مختلفة من المواد الخام',
    icon: ScaleIcon,
  },
  {
    en_name: 'Groups',
    ar_name: 'المجموعات',
    en_description:'Each group consists of many the beautiful items',
    ar_description:'كل مجموعة تتكون من العديد من العناصر الجميلة',
    icon: LightningBoltIcon,
  },
  {
    en_name: 'Items',
    ar_name: 'المنتجات',
    en_description:'There are many shapes and colors for every product',
    ar_description:'هناك العديد من الأشكال والألوان لكل منتج',
    icon: AnnotationIcon,
  },
]

const Feature = () => {
  const [t,i18n] = useTranslation();

  const lang_features = features.map(feature => {
    if(i18n.language == 'ar')
      return {
        name        : feature.ar_name,
        description : feature.ar_description,
        icon        : feature.icon
      }
    else
      return {
        name        : feature.en_name,
        description : feature.en_description,
        icon        : feature.icon
    }
  })

  return (
    <div dir={i18n.language == 'ar' ? 'rtl' : 'ltr'}  className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-xl text-primary-custom-brown font-semibold tracking-wide uppercase">{t('homepage.feature.title')}</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-primary-dark-blue sm:text-4xl">
            {t('homepage.feature.description')}
          </p>
          {/* <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
            accusamus quisquam.
          </p> */}
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {lang_features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-custom-orange bg-gradient-to-r from-primary-custom-red to-primary-custom-orange text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className={classNames(
                    i18n.language == 'ar' ? "mr-16": "ml-16",
                    " text-lg leading-6 font-medium text-primary-dark-blue"
                  )} >{feature.name}</p>
                </dt>
                <dd className={classNames(
                  i18n.language == 'ar' ? "mr-16": "ml-16",
                  "mt-2 text-base text-gray-500"
                )} >{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Feature