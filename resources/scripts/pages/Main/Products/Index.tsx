import React,{ Fragment, useEffect, useState } from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { ChevronDownIcon, FilterIcon, MinusSmIcon, PlusSmIcon, ViewGridIcon } from '@heroicons/react/solid'
import ItemsGrid from '@/scripts/shared/Home/ItemsGrid'

import { useTranslation } from 'react-i18next'
import { Inertia } from '@inertiajs/inertia'
import EmptySearchData from '@/scripts/templates/EmptySearchData'
import { useFilterContext } from '@/scripts/providers/Filter/filter_context';

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Index = ({...props}) => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [t,i18n] = useTranslation();
  const {filters:{
            category,
            group,
            color,
            min_price,
            price,
            max_price,
          },
          updateFilters,
          clearFilters,
          all_products,
          filtered_products,
          fetchProducts
        } = useFilterContext();

  const filters = [
    // {
    //   id: 'category',
    //   name: 'Category',
    //   options: props.categories.map( (category) => ({ value: category.en_name, label: category.en_name, checked: false }) ),
    // },
    {
      id: 'cluster',
      name: 'Cluster',
      options: props.clusters.map( (cluster) => ({ value: cluster.en_name, label: cluster.en_name, checked: false }) ),
    },
    {
      id: 'group',
      name: 'Group',
      options: props.groups.map( (group) => ({ value: group.en_name, label: group.en_name, checked: false }) ),
    },
    {
      id: 'color',
      name: 'Colors',
      options: props.colors.map( (color) => ({ value: color.en_name, label: color.en_name, checked: false }) ),
    },
  ]

  const [filter , setFilter] = useState(filters);
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  useEffect(()=>{
    fetchProducts(props.all_items);
  },[props.all_items])



  return (
    <div dir={i18n.language == 'ar' ? 'rtl' : 'ltr'} className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 flex z-40">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                  <div className="px-4 flex items-center justify-between">
                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                    <button
                      type="button"
                      className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-8 border-t border-gray-200 " onSubmit={(e)=> e.preventDefault()}>
                    <h3 className="font-medium text-gray-900 my-2 ml-4">{t('products.Colors')}</h3>
                    <div className="flex items-center mx-auto ml-4">
                      <input
                        id={`filter-color-all`}
                        name='color'
                        value={'all'}
                        onChange={updateFilters}
                        type="radio"
                        defaultChecked={true}
                        className={`${i18n.language == 'ar' ? 'mr-3' : 'ml-3'} h-4 w-4 mx-au border-gray-300 rounded text-indigo-600 focus:ring-indigo-500`}
                      />
                      <label
                        htmlFor={`filter-color-all`}
                        className={`${i18n.language == 'ar' ? 'mr-3' : 'ml-3'}  text-sm text-gray-600`}
                      >
                        {i18n.language == 'ar' ? 'الكل' : 'All'}
                      </label>
                    </div>
                    {props.colors.map((option, optionIdx) => (
                      <div key={option.en_name} className="flex items-center ml-4">
                        <input
                          id={`filter-${option.en_name}-${optionIdx}`}
                          name='color'
                          value={option.id}
                          onChange={updateFilters}
                          type="radio"
                          defaultChecked={option.checked}
                          className={`${i18n.language == 'ar' ? 'mr-3' : 'ml-3'} h-4 w-4 mx-au border-gray-300 rounded text-indigo-600 focus:ring-indigo-500`}
                        />
                        <label
                          htmlFor={`filter-${option.en_name}-${optionIdx}`}
                          className={`${i18n.language == 'ar' ? 'mr-3' : 'ml-3'}  text-sm text-gray-600`}
                        >
                          {i18n.language == 'ar' ? option.ar_name : option.en_name}
                        </label>
                      </div>
                    ))}

                    <hr className='my-6'/>
                    <h3 className="font-medium text-gray-900 mb-2 ml-4">{t('products.Price')}</h3>
                    <p className='mb-1 ml-4'>
                      {t('products.currency')} <span dir={i18n.language == 'ar' ? 'rtl' : 'ltr'}>{price}</span>
                    </p>
                    <input type="range"
                          name='price'
                          onChange={updateFilters}
                          min={min_price}
                          max={max_price}
                          value={price}
                          className="ml-4"
                    />

                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
            <h1 className="text-4xl font-extrabold tracking-tight text-primary-dark-blue">{t('products.title')}</h1>

            <div className="flex items-center">
              <button
                type="button"
                className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FilterIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
              {/* Filters */}
              <form className="hidden lg:block" onSubmit={(e)=> e.preventDefault()}>
                <h3 className="font-medium text-gray-900 mb-2">{t('products.Colors')}</h3>
                <div className="flex items-center">
                  <input
                    id={`filter-color-all`}
                    name='color'
                    value={'all'}
                    onChange={updateFilters}
                    type="radio"
                    defaultChecked={true}
                    className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor={`filter-color-all`}
                    className={`${i18n.language == 'ar' ? 'mr-3' : 'ml-3'}  text-sm text-gray-600`}
                  >
                    {i18n.language == 'ar' ? 'الكل' : 'All'}
                  </label>
                </div>
                {props.colors.map((option, optionIdx) => (
                  <div key={option.en_name} className="flex items-center">
                    <input
                      id={`filter-${option.en_name}-${optionIdx}`}
                      name='color'
                      value={option.id}
                      onChange={updateFilters}
                      type="radio"
                      defaultChecked={option.checked}
                      className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                      htmlFor={`filter-${option.en_name}-${optionIdx}`}
                      className={`${i18n.language == 'ar' ? 'mr-3' : 'ml-3'}  text-sm text-gray-600`}
                    >
                      {i18n.language == 'ar' ? option.ar_name : option.en_name}
                    </label>
                  </div>
                ))}
                <hr className='my-6'/>
                <h3 className="font-medium text-gray-900 mb-2">{t('products.Price')}</h3>
                <p className='mb-1'>
                  {t('products.currency')} {price}
                </p>
                <input type="range"
                      name='price'
                      dir={i18n.language == 'ar' ? 'rtl' : 'ltr'}
                      onChange={updateFilters}
                      min={min_price}
                      max={max_price}
                      value={price}
                />

              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                {props.items.data.length > 0 &&
                  <ItemsGrid title="" data={filtered_products} pagination="" />
                }

                {
                  filtered_products.length == 0 && <EmptySearchData />
                }

              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}


export default Index;