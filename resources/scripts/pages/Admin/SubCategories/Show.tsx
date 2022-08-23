import React, { Fragment } from 'react'
import { Inertia } from '@inertiajs/inertia';
import { useForm, usePage } from '@inertiajs/inertia-react';
import { ChevronDownIcon, PencilIcon, TrashIcon } from '@heroicons/react/solid';
import { Menu, Transition } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Show = (props) => {
  //console.log(props);
  const { delete: inertiaDelete } = useForm({});

  const onDelete = (e) => {
        e.preventDefault();
        inertiaDelete(route(`${props.routeBaseName}.destroy`, props.subCategory.id), {
            //@ts-ignore
            onBefore: () =>
                confirm('Are you sure you want to delete this Sub Category'),
        });
    };

  return (
    <div className=" w-full space-x-2 p-5 rounded border border-gray-200 bg-white">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="capitalize text-5xl font-bold leading-7 text-gray-900 sm:text-5xl sm:truncate">{props.subCategory?.en_name}</h2>

        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
          <span className="hidden sm:block">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={() => {
                        Inertia.get(route(`${props.routeBaseName}.edit`, props.subCategory.id));
                    }}
            >
              <PencilIcon className="-ml-1 mr-2 h-5 w-5 text-gray-500" aria-hidden="true" />
              Edit
            </button>
          </span>

          <span className="sm:ml-3">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              onClick={onDelete}
            >
              <TrashIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Delete
            </button>
          </span>

          {/* Dropdown */}
          <Menu as="div" className="ml-3 relative sm:hidden">
            <Menu.Button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              More
              <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 text-gray-500" aria-hidden="true" />
            </Menu.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                      Edit
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                      View
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>

      {/* Image gallery */}
      {props.subCategory?.picture ?
        <div className='mt-6 mx-auto sm:px-6 w-full'>
          <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden ">
            <img
              //src={props.subCategory?.picture}
              src='https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg'
              alt={props.subCategory?.picture}
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>
      :
        <div className="rounded-lg lg:block border-4 border-dashed mt-5">

            <div className="flex flex-col items-center justify-center pt-20 pb-20">
              <svg xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clip-rule="evenodd" />
              </svg>
              <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                  custom photo</p>
            </div>
          </div>
      }


      <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          {/* <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">
              <span className='p-2 text-gray-400 text-2xl font-semibold'> Sub Group : </span>
              {props.item?.sub_group.en_name}
            </h1>
          </div> */}

          <div className="mt-4 lg:mt-0 lg:row-span-3">
            <h2 className="sr-only">Product information</h2>

            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-gray-900">Information: </h3>
              <div className="items-center">
                <div className='p-2 mb-2 flex flex-'>
                  <span className='capitalize text-xl text-gray-600 font-medium'> </span>
                  <span className="text-2xl font-semibold text-gray-900 sm:text-xl"> {props.subCategory.clusters.length} Clusters</span>
                </div>
              </div>
            </div>

          </div>

          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{props.subCategory?.en_description}</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Show