import { InertiaLink, useForm } from '@inertiajs/inertia-react';
import React from 'react';

import { LockClosedIcon } from '@heroicons/react/solid'
import FlashLayout from '@/scripts/shared/Alert/FlashLayout';

const Signup = (props) => {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('signup.attempt'));
    };

  return (
    <>
      <FlashLayout {...props} />
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="/images/logo_header.png"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create new account</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
                <InertiaLink
                    className="font-medium text-primary-custom-brown hover:text-amber-800"
                    href={route('login')}
                >
                    Login.
                </InertiaLink>
            </p>
          </div>
          <form className="form_account mt-8 space-y-6" onSubmit={submit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm">
              <div className='mt-5 mb-10'>
                <label htmlFor="name" className="sr-only" error={errors.name}>
                  username
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={data.name}
                  onChange={(e) => {
                            setData('name', e.target.value);
                        }}

                  className={errors.name ? "border-red-500" : "border-gray-300" }
                  placeholder="Name"
                />
                {errors.name && <div className='text-red-500 font-semibold p-2'>{errors.name}</div>}
              </div>
              <div className='mt-5 mb-10'>
                <label htmlFor="email-address" className="sr-only" error={errors.email}>
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={data.email}
                  onChange={(e) => {
                            setData('email', e.target.value);
                        }}

                  className={errors.email ? "border-red-500" : "border-gray-300" }
                  placeholder="Email address"
                />
                {errors.email && <div className='text-red-500 font-semibold p-2'>{errors.email}</div>}
              </div>
              <div className='mt-5 mb-10'>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={data.password}
                  onChange={(e) => {
                            setData('password', e.target.value);
                        }}

                  className={errors.password ? "border-red-500" : "border-gray-300" }
                  placeholder="Password"
                />
                {errors.password && <div className='text-red-500 font-semibold p-2' >{errors.password}</div>}
              </div>
            </div>

            {/* <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div> */}

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-custom-orange bg-gradient-to-r from-primary-custom-red to-primary-custom-orange hover:button-brightness hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-purple-500 group-hover:text-purple-400" aria-hidden="true" />
                </span>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup