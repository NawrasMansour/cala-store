import React from 'react'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

import { useTranslation } from 'react-i18next'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Pagination = ({paginationObj}) => {
  const [t,i18n] = useTranslation();

  return (
    <div className=" px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden">
        <a
          href={paginationObj.prev_page_url ? paginationObj.prev_page_url : '#'}
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href={paginationObj.next_page_url ? paginationObj.next_page_url : '#'}
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{paginationObj.from}</span> to <span className="font-medium">{paginationObj.to}</span> of{' '}
            <span className="font-medium">{paginationObj.total}</span> results
          </p>
        </div>
        <div>
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            {/* <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a> */}
            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
            {paginationObj.links.map( (link , i )=> (
                link.label === '&laquo; Previous' ?
                    (<a
                        href={paginationObj.prev_page_url ? paginationObj.prev_page_url : '#'}
                        key={i}
                        className={classNames(
                          i18n.language == 'ar' ? "rounded-r-md": "rounded-l-md",
                          "relative inline-flex items-center px-2 py-2  border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        )}
                        >
                        <span className="sr-only">Previous</span>
                        {i18n.language == 'ar' ?
                          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                          : <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" /> }

                    </a>)
                    : link.label === 'Next &raquo;' ?
                        <a
                            href={paginationObj.next_page_url ? paginationObj.next_page_url : '#'}
                            key={i}
                            className={classNames(
                              i18n.language == 'ar' ? "rounded-l-md": "rounded-r-md",
                              "relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                            )}
                            >
                            <span className="sr-only">Next</span>
                            {i18n.language == 'ar' ?
                              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                              : <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />}

                        </a>
                        :
                        (<a
                            href={link.url}
                            key={i}
                            aria-current="page"
                            className={classNames(
                                link.active ? "bg-indigo-50 border-indigo-500 text-indigo-600" : "bg-white border-gray-300 text-gray-500",
                                "z-10 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                            )}
                        >
                            {link.label}
                        </a>)
                ))}
          </nav>
        </div>
      </div>
    </div>
  )
}


export default Pagination;