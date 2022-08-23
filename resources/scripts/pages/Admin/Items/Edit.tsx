import { useForm } from '@inertiajs/inertia-react';
import React, { useState } from 'react'

const Edit = (props) => {
  //console.log(props.item.pictures);
  const inistialColors = [...props.colors.map((color)=>
      {
        const requiredColor = props.item.colors.find( (colorData) => (colorData.id === color.id));
        if(requiredColor){
          return (
            { id:color.id,
              key:color.en_name,
              checked:requiredColor.pivot.count > 0 ? true : false,
              value:requiredColor.pivot.count
            })
        }

        return (
          {id:color.id,key:color.en_name,checked:false,value:0}
        )
      }
    )
  ];
  const [files, setFiles] = useState([]);
  const [colorsData, setColorsData] = useState(inistialColors);
  const { data, setData, post, processing, errors , delete: inertiaDelete } = useForm({
        en_name: props.item.en_name || '',
        ar_name: props.item.ar_name || '',
        en_description:props.item.en_description || '',
        ar_description:props.item.ar_description || '',
        price: props.item.price || 0,
        colorsAmounts : inistialColors,
        pictures: [] as any,
        sub_group_id : props.item.sub_group_id ||  props.subGroups[0].id,
        _method: 'PUT',
    });



  const handleChange = (e) =>{
    const newFiles = Object.values(e.target.files);
    //console.log(newFiles);
    setFiles([...files , ...newFiles.map( (file) => ( URL.createObjectURL(file) ) )   ]);
    setData('pictures', [...data.pictures, ...newFiles] );
    //console.log(data.pictures);
  }

  const deletePicture = (pictureIndex) => {
    const newFiles = files.filter((file ,index)=> ( index != pictureIndex) );
    setFiles([...newFiles]);
    const newPictures = data.pictures.filter( (picture , index)=> ( index != pictureIndex)  )
    setData('pictures', [...newPictures]);
   // console.log(data.pictures);
  }

  const deleteSavedPicture = (picture) => {
    console.log(picture)
    inertiaDelete(route('admin.itemPictures.destroy', picture.id ), {
        //@ts-ignore
        onBefore: () =>
            confirm('Are you sure you want to delete this Picture'),
    });
  }

  const handleCheckboxColors = (e)=>{
    const newColors = colorsData.map( (color)=> {
      if(color.key === e.target.id){
        color.checked = !color.checked;
      }
      return color;
    })
    setColorsData(newColors);
    //console.log(colorsData);
  }

  const handleItemsViaColors = (e) => {
    const splitedID = e.target.id.split('_');
    const newColorsAmounts = data.colorsAmounts.map( (color) => {
      if(color.key === splitedID[0] && color.checked)
        color.value = Number(e.target.value);

      if(! color.checked)
        color.value = 0;
      return color;
    });
    setColorsData(newColorsAmounts);
    setData('colorsAmounts',newColorsAmounts);
   // console.log(colorsData);
  }




  const submit = (e)=>{
    e.preventDefault();
   // console.log(data);
    post(route(`${props.routeBaseName}.update`, props.item.id), {
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
        <div className='grid md:grid-cols-2'>
          <div className='p-2'>
            <label htmlFor="description" className="text-gray-900 font-medium">
              Select Sub Group
            </label>
            <select className="form-select form-select-lg mb-3 appearance-none block w-full px-4 py-2 text-xl font-normal text-gray-700
              bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition  ease-in-out m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label=".form-select-lg example"
              onChange={(e) => {
                  setData('sub_group_id', e.target.value);
              }}
              >
                {props.subGroups.map((subGroup) => (
                  <option key={subGroup.id} value={subGroup.id} >{subGroup.en_name}</option>
                ))}
            </select>
            {errors.sub_group_id && (
              <div className="mb-3 text-normal text-red-500 ">
                {errors.sub_group_id}
              </div>
            )}
          </div>
          <div className='p-2'>
              <label htmlFor="price" className="text-gray-900 font-medium">
                Price
              </label>
              <input
                className='border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700 hover:border-gray-500 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-non'
                id="price"
                name="price"
                value={data.price}
                onChange={(e) => {
                    setData('price', Number(e.target.value));
                }}
                type="number"
                autoComplete="Price"
                placeholder="Item Price"
              />
              {errors.price && (
                <div className="mb-3 text-normal text-red-500 ">
                  {errors.price}
                </div>
              )}

          </div>
        </div>
        <div className='p-2 mt-3'>
            <span className='text-gray-900 font-medium'>Choose Item's colors</span>
            <div className='grid md:grid-cols-4'>
              {props.colors.map( (color)=> {
                return (
                  <div className='flex flex-col' key={color.id}>
                    <div className='p-2 w-full'>
                      <input type="checkbox"
                             id={color.en_name}
                             value=""
                             className="hidden peer"
                             checked={colorsData.find((colorData) =>(colorData.key === color.en_name)).checked}
                             onChange={(e)=>{handleCheckboxColors(e)}} />
                      <label
                        htmlFor={color.en_name}
                        className="inline-flex justify-between items-center py-2 px-4  text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                        >
                          <div className="block">
                              <div className="w-full text-lg font-semibold">{color.en_name}</div>
                          </div>
                      </label>
                    </div>

                    {colorsData.find((colorData) =>(colorData.key === color.en_name)).checked &&
                      <div className='p-2 '>
                        <label htmlFor="colorValue" className="sr-only">
                          Color
                        </label>
                        <input
                          className='border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700 hover:border-gray-500 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-non'
                          id={`${color.en_name}_amount`}
                          value={colorsData.find((colorData) =>(colorData.key === color.en_name)).value}
                          onChange={(e)=>{handleItemsViaColors(e)}}
                          name="colorValue"
                          type="number"
                          autoComplete="colorValue"
                          placeholder="Amount"
                        />
                      </div>
                    }

                  </div>
                )
              })}

            </div>
        </div>

        <div className='p-2 mt-3'>
          <span className='text-gray-900 font-medium'>Choose Item's colors</span>

          <div className='grid md:grid-cols-4'>
              <div className='p-2 w-full'>
                <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col w-full h-52 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
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
                    <input
                      type="file"
                      id="picture"
                      name="picture"
                      multiple
                      onChange={handleChange}
                      className="opacity-0" />
                    </label>
                </div>
                {errors.pictures && (
                  <div className="mb-3 text-normal text-red-500 ">
                    {errors.pictures}
                  </div>
                )}
              </div>

              {files && files.map( (file , index) => (
                <div key={index} className='p-2 w-full flex flex-col '>
                  <span
                    className='rounded-xl bg-gray-300 text-black absolute px-2 py-1 m-1 font-semibold hover:bg-gray-500  hover:cursor-pointer'
                    onClick={()=>deletePicture(index)} >X</span>
                  <img src={file} className="rounded border-gray-500 h-52 w-full" />
                </div>
              ) )
              }

              {props.item.pictures.length > 0 && props.item.pictures.map ( (pic , index)=> (
                <div key={index} className='p-2 w-full flex flex-col '>
                  <span
                    className='rounded-xl bg-gray-300 text-black absolute px-2 py-1 m-1 font-semibold hover:bg-gray-500  hover:cursor-pointer'
                    onClick={()=>deleteSavedPicture(pic)}
                    >X</span>
                  <img
                    //src={pic.name}
                    src = 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg'
                    className="rounded border-gray-500 h-52 w-full" />
                </div>
              ))}
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