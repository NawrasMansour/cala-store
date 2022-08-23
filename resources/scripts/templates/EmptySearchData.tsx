import React from 'react'

const EmptySearchData = () => {
  return (
    <section className="px-4 py-24 mx-auto max-w-7xl">
        <div className="w-full mx-auto text-center lg:w-2/3">
            <h1 className="mb-4 text-6xl font-thin text-primary-custom-brown">0 Result</h1>
            <p className="mb-3 text-xl font-bold text-primary-dark-blue md:text-2xl">Oh no! We couldn’t find the product you were looking for.</p>
            <p className="mb-3 text-lg font-medium text-gray-700">
            Do you need somthing? visit our <a href="/products" className="underline">Products Section</a>, or go back to the
            <a href="/" className="underline"> homepage</a>.
            </p>
        </div>
    </section>
  )
}

export default EmptySearchData