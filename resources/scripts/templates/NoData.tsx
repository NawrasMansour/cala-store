import React from 'react'

import { useTranslation } from 'react-i18next'

const NoData = () => {
  const [t,i18n] = useTranslation();

  return (
    <section className="px-4 py-24 mx-auto max-w-7xl">
        <div className="w-full mx-auto text-center lg:w-2/3">
            <h1 className="mb-4 text-6xl font-thin text-primary-custom-brown">{t('noData.title')}</h1>
            <p className="mb-3 text-xl font-bold text-primary-dark-blue md:text-2xl">{t('noData.message')}</p>
        </div>
    </section>
  )
}

export default NoData