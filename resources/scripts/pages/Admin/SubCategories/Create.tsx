import { useForm } from '@inertiajs/inertia-react';
import React, { useState } from 'react'

const Create = (props) => {

  const { data, setData, post, processing, errors } = useForm({
        en_name: '',
        ar_name: '',
        en_description:'',
        ar_description:'',
        picture: '' as any,
        category_id : props.categories[0].id,
    });

    const [file, setFile] = useState('');

    function handleChange(e) {
        console.log(e.target.files);
        setData('picture', e.target.files[0]);
        setFile(URL.createObjectURL(e.target.files[0]));
    }


  const submit = (e)=>{
    e.preventDefault();
    console.log(data);
    post(route(`${props.routeBaseName}.store`), {
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
        <div className='grid md:grid-cols-2'>
          <div className='p-2'>
            <label htmlFor="en_description" className="text-gray-900 font-medium">
              English Description
            </label>
            <textarea
              value={data.en_description}
              onChange={(e) => {
                  setData('en_description', e.target.value);
              }}
              rows={5}
              cols={5}
              className='border-solid border-gray-300 border py-8 px-4 w-full rounded text-gray-700 hover:border-gray-500 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-non'
              id="en_description">

            </textarea>
            {errors.en_description && (
              <div className="mb-3 text-normal text-red-500 ">
                {errors.en_description}
              </div>
            )}
          </div>

          <div className='p-2'>
            <label htmlFor="ar_description" className="text-gray-900 font-medium">
              Arabic Description
            </label>
            <textarea
              value={data.ar_description}
              onChange={(e) => {
                  setData('ar_description', e.target.value);
              }}
              rows={5}
              cols={5}
              className='border-solid border-gray-300 border py-8 px-4 w-full rounded text-gray-700 hover:border-gray-500 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-non'
              id="ar_description">

            </textarea>
            {errors.ar_description && (
              <div className="mb-3 text-normal text-red-500 ">
                {errors.ar_description}
              </div>
            )}
          </div>

        </div>
        <div className='flex flex-row'>
          <div className='p-2 w-full'>
            <label htmlFor="description" className="text-gray-900 font-medium">
              Select Category
            </label>
            <select className="form-select form-select-lg mb-3 appearance-none block w-full px-4 py-2 text-xl font-normal text-gray-700
              bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition  ease-in-out m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label=".form-select-lg example"
              onChange={(e) => {
                  setData('category_id', e.target.value);
              }}
              >
                {props.categories.map((category) => (
                  <option key={category.id} value={category.id} >{category.en_name}</option>
                ))}
            </select>
            {errors.category_id && (
              <div className="mb-3 text-normal text-red-500 ">
                {errors.category_id}
              </div>
            )}
          </div>
        </div>
        <div className='flex flex-row'>
          <div className='p-2 w-full'>
            <label htmlFor="picture" className="text-gray-900 font-medium">
              Upload Preview
            </label>
            <div className="flex items-center justify-center w-full">
                <label className="flex flex-col w-full h-52 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                    {file ?
                      <div className="flex flex-col items-center justify-center pt-3">
                          <img src={file} className="w-52 h-44 rounded border-gray-500 " />
                      </div>
                      :
                      <div className="flex flex-col items-center justify-center pt-16">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                clip-rule="evenodd" />
                        </svg>
                        <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                            Select a photo</p>
                      </div>
                    }
                    <input
                      type="file"
                      id="picture"
                      name="picture"
                      onChange={handleChange}
                      className="opacity-0" />
                </label>
            </div>
            {errors.picture && (
              <div className="mb-3 text-normal text-red-500 ">
                {errors.picture}
              </div>
            )}
          </div>
        </div>
        <div className='flex flex-row p-2'>
          <button
            className="mt-4 w-full bg-green-600 hover:bg-green-800 text-green-100 border py-3 px-6 font-semibold text-md rounded"
            type="submit"
            disabled={processing}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Create