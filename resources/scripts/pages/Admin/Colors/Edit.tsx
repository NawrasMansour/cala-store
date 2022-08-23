import { useForm } from '@inertiajs/inertia-react';
import React, { useState } from 'react'

const Edit = (props) => {
    console.log(props);

  const { data, setData, post, processing, errors } = useForm({
        en_name: props.color.en_name || '',
        ar_name: props.color.ar_name || '',
        _method: 'PUT',
    });

  const submit = (e)=>{
    e.preventDefault();

    post(route(`${props.routeBaseName}.update`, props.color.id), {
            preserveState: (page) =>
                Object.keys(page?.props?.errors).length > 0,
        });
  }

  return (
    <div className="w-full flex flex-col justify-center items-center p-5 rounded border border-gray-200 bg-white">
      <form onSubmit={submit} className="w-full mt-5">
        <div className='grid md:grid-cols-2'>
          <div className='p-2'>
            <label htmlFor="en_name" className="text-gray-900 font-medium">
              English Name
            </label>
            <input
              className='border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700 hover:border-gray-500 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-non'
              id="en_name"
              name="en_name"
              value={data.en_name}
              onChange={(e) => {
                  setData('en_name', e.target.value);
              }}
              type="text"
              autoComplete="name"
              placeholder="English Name"
            />
            {errors.en_name && (
              <div className="mb-3 text-normal text-red-500 ">
                {errors.en_name}
              </div>
            )}
          </div>
          <div className='p-2'>
            <label htmlFor="ar_name" className="text-gray-900 font-medium">
              Arabic Name
            </label>
            <input
              className='border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700 hover:border-gray-500 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-non'
              id="ar_name"
              name="ar_name"
              value={data.ar_name}
              onChange={(e) => {
                  setData('ar_name', e.target.value);
              }}
              type="text"
              autoComplete="name"
              placeholder="Arabic Name"
            />
            {errors.ar_name && (
              <div className="mb-3 text-normal text-red-500 ">
                {errors.ar_name}
              </div>
            )}
          </div>
        </div>
        <div className='flex flex-row p-2'>
          <button
            className="mt-4 w-full bg-blue-600 hover:bg-blue-800 text-green-100 border py-3 px-6 font-semibold text-md rounded"
            type="submit"
            disabled={processing}
          >
            Update
          </button>
        </div>
      </form>
    </div>
  )
}

export default Edit