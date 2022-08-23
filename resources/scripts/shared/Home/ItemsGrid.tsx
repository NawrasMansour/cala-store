
import NoData from '@/scripts/templates/NoData'
import Pagination from '@/scripts/templates/Pagination'
import React from 'react'

import { useTranslation } from 'react-i18next'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ItemsGrid = ({data , title , pagination}) => {
  const [t,i18n] = useTranslation();

  return (
    <div dir={i18n.language == 'ar' ? 'rtl' : 'ltr'}  className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={classNames(
            title ? "py-16 sm:py-24 lg:py-16" : '',
            "max-w-2xl mx-auto  lg:max-w-none"
          )}>
          <h2 className={classNames(
            title ? "pb-10" : '',
            "text-5xl font-extrabold text-primary-dark-blue text-center"
          )}>{t('homepage.items.title')}</h2>

          <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
            {data && data.map((product) => (
              <div key={product.id} className="group relative pb-10 pt-1">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  //src={product.pictures.length > 0 ? product.pictures[0].name : 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg'}
                  src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                  alt={product.pictures.length > 0 ? product.pictures[0].name : product.en_name}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={`/products/${product.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {i18n.language == 'ar' ? product.ar_name : product.en_name }
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.colors.length} {t('homepage.items.colors')}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{t('homepage.items.currency')} {product.price}</p>
              </div>
            </div>
            ))}

            {!data &&
              <div className='items-center justify-center flex w-screen'>
                <NoData />
              </div>
            }
          </div>
        </div>
      </div>
      {pagination && <Pagination paginationObj={pagination} />}

    </div>
  )
}

export default ItemsGrid