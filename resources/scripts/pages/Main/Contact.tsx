import React from 'react'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const [t,i18n] = useTranslation();
  return (
    <section dir={i18n.language == 'ar' ? 'rtl' : 'ltr'} className="bg-white py-20 lg:py-[120px] overflow-hidden relative z-10 mt-10">
      <div className="container">
          <div className="flex flex-wrap lg:justify-between -mx-4">
            <div className="w-full lg:w-1/2 xl:w-6/12 px-4">
                <div className="max-w-[570px] mb-12 lg:mb-0">
                  <span className="block mb-4 text-base text-primary font-semibold">
                  {t('contact.title')}
                  </span>
                  <h2
                      className="
                      text-dark
                      mb-6
                      uppercase
                      font-bold
                      text-[32px]
                      sm:text-[40px]
                      lg:text-[36px]
                      xl:text-[40px]
                      "
                      >
                      {t('contact.subTitle')}
                  </h2>
                  <p className="text-base leading-relaxed mb-9 text-primary-dark-blue">
                    {t('contact.description')}
                  </p>
                  <p className='text-primary-dark-blue text-lg font-semibold flex mb-2 p-2'>
                    <svg
                      className="w-6 h-6 m-1"
                      fill="none" stroke="currentColor"
                      viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                      {t('contact.phone')}
                  </p>
                  <div className="flex items-center">
                    <a href="#" className='p-2'>
                      <svg
                        className="text-gray-600 hover:text-green-400 fill-current cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                      >
                        <title>Facebook</title>
                        <path d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z" />
                      </svg>
                    </a>

                    <a href="#" className='p-2'>
                      <svg
                        className="text-gray-600 hover:text-green-400 fill-current cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="20"
                      >
                        <title>Instagram</title>
                        <path d="M10.333 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.976 1.409 4.1 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.058 4.042-.124 2.687-1.386 3.975-4.099 4.099-1.055.048-1.37.058-4.042.058-2.67 0-2.986-.01-4.04-.058-2.717-.124-3.976-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zm0-1.802C7.618 0 7.278.012 6.211.06 2.579.227.56 2.242.394 5.877.345 6.944.334 7.284.334 10s.011 3.057.06 4.123c.166 3.632 2.181 5.65 5.816 5.817 1.068.048 1.408.06 4.123.06 2.716 0 3.057-.012 4.124-.06 3.628-.167 5.651-2.182 5.816-5.817.049-1.066.06-1.407.06-4.123s-.011-3.056-.06-4.122C20.11 2.249 18.093.228 14.458.06 13.39.01 13.049 0 10.333 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.339-9.87a1.2 1.2 0 10-.001 2.4 1.2 1.2 0 000-2.4z" />
                      </svg>
                    </a>

                    <a href="#" className='p-2'>
                      <svg
                        className="text-gray-600 hover:text-green-400 fill-current cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="18"
                      >
                        <title>Twitter</title>
                        <path d="M20.667 2.797a8.192 8.192 0 01-2.357.646 4.11 4.11 0 001.804-2.27 8.22 8.22 0 01-2.606.996A4.096 4.096 0 0014.513.873c-2.649 0-4.595 2.472-3.997 5.038a11.648 11.648 0 01-8.457-4.287 4.109 4.109 0 001.27 5.478A4.086 4.086 0 011.47 6.59c-.045 1.901 1.317 3.68 3.29 4.075a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.834 2.85 8.25 8.25 0 01-6.075 1.7 11.616 11.616 0 006.29 1.843c7.618 0 11.922-6.434 11.662-12.205a8.354 8.354 0 002.048-2.124z" />
                      </svg>
                    </a>

                    <a href="#" className='p-2'>
                      <svg
                        className="text-gray-600 hover:text-green-400 fill-current cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        width="30"
                        height="25"
                      >
                        <title>Whatsapp </title>
                        <path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                      </svg>
                    </a>
                  </div>

                </div>
            </div>
            <div className="w-full lg:w-1/2 xl:w-5/12 px-4">
                <div className="bg-white relative rounded-lg p-8 sm:p-12 shadow-lg">
                  <form>
                      <div className="mb-6">
                        <input
                            type="text"
                            placeholder={t('contact.form_name')}
                            className="
                            w-full
                            rounded
                            py-3
                            px-[14px]
                            text-body-color text-base
                            border border-[f0f0f0]
                            outline-none
                            focus-visible:shadow-none
                            focus:border-primary
                            "
                            />
                      </div>
                      <div className="mb-6">
                        <input
                            type="email"
                            placeholder={t('contact.form_email')}
                            className="
                            w-full
                            rounded
                            py-3
                            px-[14px]
                            text-body-color text-base
                            border border-[f0f0f0]
                            outline-none
                            focus-visible:shadow-none
                            focus:border-primary
                            "
                            />
                      </div>
                      <div className="mb-6">
                        <input
                            type="text"
                            placeholder={t('contact.form_phone')}
                            className="
                            w-full
                            rounded
                            py-3
                            px-[14px]
                            text-body-color text-base
                            border border-[f0f0f0]
                            outline-none
                            focus-visible:shadow-none
                            focus:border-primary
                            "
                            />
                      </div>
                      <div className="mb-6">
                        <textarea
                            placeholder={t('contact.form_msg')}
                            className="
                            w-full
                            rounded
                            py-3
                            px-[14px]
                            text-body-color text-base
                            border border-[f0f0f0]
                            resize-none
                            outline-none
                            focus-visible:shadow-none
                            focus:border-primary
                            "
                            ></textarea>
                      </div>
                      <div>
                        <button
                            type="submit"
                            className="
                            w-full
                            text-white
                            rounded
                            border border-primary
                            p-3
                            transition
                            hover:bg-opacity-90
                            bg-primary-custom-orange bg-gradient-to-r from-primary-custom-red to-primary-custom-orange hover:button-brightness
                            "
                            >
                        {t('contact.form_submit')}
                        </button>
                      </div>
                  </form>
                  <div>
                      <span className="absolute -top-10 -right-9 z-[-1]">
                        <svg
                            width="100"
                            height="100"
                            viewBox="0 0 100 100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                              fill="#F19200"
                              />
                        </svg>
                      </span>
                      <span className="absolute -right-10 top-[90px] z-[-1]">
                        <svg
                            width="34"
                            height="134"
                            viewBox="0 0 34 134"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <circle
                              cx="31.9993"
                              cy="132"
                              r="1.66667"
                              transform="rotate(180 31.9993 132)"
                              fill="#F19200"
                              />
                            <circle
                              cx="31.9993"
                              cy="117.333"
                              r="1.66667"
                              transform="rotate(180 31.9993 117.333)"
                              fill="#F19200"
                              />
                            <circle
                              cx="31.9993"
                              cy="102.667"
                              r="1.66667"
                              transform="rotate(180 31.9993 102.667)"
                              fill="#F19200"
                              />
                            <circle
                              cx="31.9993"
                              cy="88"
                              r="1.66667"
                              transform="rotate(180 31.9993 88)"
                              fill="#F19200"
                              />
                            <circle
                              cx="31.9993"
                              cy="73.3333"
                              r="1.66667"
                              transform="rotate(180 31.9993 73.3333)"
                              fill="#F19200"
                              />
                            <circle
                              cx="31.9993"
                              cy="45"
                              r="1.66667"
                              transform="rotate(180 31.9993 45)"
                              fill="#F19200"
                              />
                            <circle
                              cx="31.9993"
                              cy="16"
                              r="1.66667"
                              transform="rotate(180 31.9993 16)"
                              fill="#F19200"
                              />
                            <circle
                              cx="31.9993"
                              cy="59"
                              r="1.66667"
                              transform="rotate(180 31.9993 59)"
                              fill="#F19200"
                              />
                            <circle
                              cx="31.9993"
                              cy="30.6666"
                              r="1.66667"
                              transform="rotate(180 31.9993 30.6666)"
                              fill="#F19200"
                              />
                            <circle
                              cx="31.9993"
                              cy="1.66665"
                              r="1.66667"
                              transform="rotate(180 31.9993 1.66665)"
                              fill="#F19200"
                              />
                            <circle
                              cx="17.3333"
                              cy="132"
                              r="1.66667"
                              transform="rotate(180 17.3333 132)"
                              fill="#F19200"
                              />
                            <circle
                              cx="17.3333"
                              cy="117.333"
                              r="1.66667"
                              transform="rotate(180 17.3333 117.333)"
                              fill="#F19200"
                              />
                            <circle
                              cx="17.3333"
                              cy="102.667"
                              r="1.66667"
                              transform="rotate(180 17.3333 102.667)"
                              fill="#F19200"
                              />
                            <circle
                              cx="17.3333"
                              cy="88"
                              r="1.66667"
                              transform="rotate(180 17.3333 88)"
                              fill="#F19200"
                              />
                            <circle
                              cx="17.3333"
                              cy="73.3333"
                              r="1.66667"
                              transform="rotate(180 17.3333 73.3333)"
                              fill="#F19200"
                              />
                            <circle
                              cx="17.3333"
                              cy="45"
                              r="1.66667"
                              transform="rotate(180 17.3333 45)"
                              fill="#F19200"
                              />
                            <circle
                              cx="17.3333"
                              cy="16"
                              r="1.66667"
                              transform="rotate(180 17.3333 16)"
                              fill="#F19200"
                              />
                            <circle
                              cx="17.3333"
                              cy="59"
                              r="1.66667"
                              transform="rotate(180 17.3333 59)"
                              fill="#F19200"
                              />
                            <circle
                              cx="17.3333"
                              cy="30.6666"
                              r="1.66667"
                              transform="rotate(180 17.3333 30.6666)"
                              fill="#F19200"
                              />
                            <circle
                              cx="17.3333"
                              cy="1.66665"
                              r="1.66667"
                              transform="rotate(180 17.3333 1.66665)"
                              fill="#F19200"
                              />
                            <circle
                              cx="2.66536"
                              cy="132"
                              r="1.66667"
                              transform="rotate(180 2.66536 132)"
                              fill="#F19200"
                              />
                            <circle
                              cx="2.66536"
                              cy="117.333"
                              r="1.66667"
                              transform="rotate(180 2.66536 117.333)"
                              fill="#F19200"
                              />
                            <circle
                              cx="2.66536"
                              cy="102.667"
                              r="1.66667"
                              transform="rotate(180 2.66536 102.667)"
                              fill="#F19200"
                              />
                            <circle
                              cx="2.66536"
                              cy="88"
                              r="1.66667"
                              transform="rotate(180 2.66536 88)"
                              fill="#F19200"
                              />
                            <circle
                              cx="2.66536"
                              cy="73.3333"
                              r="1.66667"
                              transform="rotate(180 2.66536 73.3333)"
                              fill="#F19200"
                              />
                            <circle
                              cx="2.66536"
                              cy="45"
                              r="1.66667"
                              transform="rotate(180 2.66536 45)"
                              fill="#F19200"
                              />
                            <circle
                              cx="2.66536"
                              cy="16"
                              r="1.66667"
                              transform="rotate(180 2.66536 16)"
                              fill="#F19200"
                              />
                            <circle
                              cx="2.66536"
                              cy="59"
                              r="1.66667"
                              transform="rotate(180 2.66536 59)"
                              fill="#F19200"
                              />
                            <circle
                              cx="2.66536"
                              cy="30.6666"
                              r="1.66667"
                              transform="rotate(180 2.66536 30.6666)"
                              fill="#F19200"
                              />
                            <circle
                              cx="2.66536"
                              cy="1.66665"
                              r="1.66667"
                              transform="rotate(180 2.66536 1.66665)"
                              fill="#F19200"
                              />
                        </svg>
                      </span>
                      <span className="absolute -left-7 -bottom-7 z-[-1]">
                        <svg
                            width="107"
                            height="134"
                            viewBox="0 0 107 134"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <circle
                              cx="104.999"
                              cy="132"
                              r="1.66667"
                              transform="rotate(180 104.999 132)"
                              fill="#F19200"
                              />
                            <circle
                              cx="104.999"
                              cy="117.333"
                              r="1.66667"
                              transform="rotate(180 104.999 117.333)"
                              fill="#F19200"
                              />
                            <circle
                              cx="104.999"
                              cy="102.667"
                              r="1.66667"
                              transform="rotate(180 104.999 102.667)"
                              fill="#F19200"
                              />
                            <circle
                              cx="104.999"
                              cy="88"
                              r="1.66667"
                              transform="rotate(180 104.999 88)"
                              fill="#F19200"
                              />
                            <circle
                              cx="104.999"
                              cy="73.3333"
                              r="1.66667"
                              transform="rotate(180 104.999 73.3333)"
                              fill="#F19200"
                              />
                            <circle
                              cx="104.999"
                              cy="45"
                              r="1.66667"
                              transform="rotate(180 104.999 45)"
                              fill="#F19200"
                              />
                            <circle
                              cx="104.999"
                              cy="16"
                              r="1.66667"
                              transform="rotate(180 104.999 16)"
                              fill="#F19200"
                              />
                            <circle
                              cx="104.999"
                              cy="59"
                              r="1.66667"
                              transform="rotate(180 104.999 59)"
                              fill="#F19200"
                              />
                            <circle
                              cx="104.999"
                              cy="30.6666"
                              r="1.66667"
                              transform="rotate(180 104.999 30.6666)"
                              fill="#F19200"
                              />
                            <circle
                              cx="104.999"
                              cy="1.66665"
                              r="1.66667"
                              transform="rotate(180 104.999 1.66665)"
                              fill="#F19200"
                              />
                            <circle
                              cx="90.3333"
                              cy="132"
                              r="1.66667"
                              transform="rotate(180 90.3333 132)"
                              fill="#F19200"
                              />
                            <circle
                              cx="90.3333"
                              cy="117.333"
                              r="1.66667"
                              transform="rotate(180 90.3333 117.333)"
                              fill="#F19200"
                              />
                            <circle
                              cx="90.3333"
                              cy="102.667"
                              r="1.66667"
                              transform="rotate(180 90.3333 102.667)"
                              fill="#F19200"
                              />
                            <circle
                              cx="90.3333"
                              cy="88"
                              r="1.66667"
                              transform="rotate(180 90.3333 88)"
                              fill="#F19200"
                              />
                            <circle
                              cx="90.3333"
                              cy="73.3333"
                              r="1.66667"
                              transform="rotate(180 90.3333 73.3333)"
                              fill="#F19200"
                              />
                            <circle
                              cx="90.3333"
                              cy="45"
                              r="1.66667"
                              transform="rotate(180 90.3333 45)"
                              fill="#F19200"
                              />
                            <circle
                              cx="90.3333"
                              cy="16"
                              r="1.66667"
                              transform="rotate(180 90.3333 16)"
                              fill="#F19200"
                              />
                            <circle
                              cx="90.3333"
                              cy="59"
                              r="1.66667"
                              transform="rotate(180 90.3333 59)"
                              fill="#F19200"
                              />
                            <circle
                              cx="90.3333"
                              cy="30.6666"
                              r="1.66667"
                              transform="rotate(180 90.3333 30.6666)"
                              fill="#F19200"
                              />
                            <circle
                              cx="90.3333"
                              cy="1.66665"
                              r="1.66667"
                              transform="rotate(180 90.3333 1.66665)"
                              fill="#F19200"
                              />
                            <circle
                              cx="75.6654"
                              cy="132"
                              r="1.66667"
                              transform="rotate(180 75.6654 132)"
                              fill="#F19200"
                              />
                            <circle
                              cx="31.9993"
                              cy="132"
                              r="1.66667"
                              transform="rotate(180 31.9993 132)"
                              fill="#F19200"
                              />
                            <circle
                              cx="75.6654"
                              cy="117.333"
                              r="1.66667"
                              transform="rotate(180 75.6654 117.333)"
                              fill="#F19200"
                              />
                            <circle
                              cx="31.9993"
                              cy="117.333"
                              r="1.66667"
                              transform="rotate(180 31.9993 117.333)"
                              fill="#F19200"
                              />
                            <circle
                              cx="75.6654"
                              cy="102.667"
                              r="1.66667"
                              transform="rotate(180 75.6654 102.667)"
                              fill="#F19200"
                              />
                            <circle
                              cx="31.9993"
                              cy="102.667"
                              r="1.66667"
                              transform="rotate(180 31.9993 102.667)"
                              fill="#F19200"
                              />
                            <circle
                              cx="75.6654"
                              cy="88"
                              r="1.66667"
                              transform="rotate(180 75.6654 88)"
                              fill="#F19200"
                              />
                            <circle
                              cx="31.9993"
                              cy="88"
                              r="1.66667"
                              transform="rotate(180 31.9993 88)"
                              fill="#F19200"
                              />
                            <circle
                              cx="75.6654"
                              cy="73.3333"
                              r="1.66667"
                              transform="rotate(180 75.6654 73.3333)"
                              fill="#F19200"
                              />
                            <circle
                              cx="31.9993"
                              cy="73.3333"
                              r="1.66667"
                              transform="rotate(180 31.9993 73.3333)"
                              fill="#F19200"
                              />
                            <circle
                              cx="75.6654"
                              cy="45"
                              r="1.66667"
                              transform="rotate(180 75.6654 45)"
                              fill="#F19200"
                              />
                            <circle
                              cx="31.9993"
                              cy="45"
                              r="1.66667"
                              transform="rotate(180 31.9993 45)"
                              fill="#F19200"
                              />
                            <circle
                              cx="75.6654"
                              cy="16"
                              r="1.66667"
                              transform="rotate(180 75.6654 16)"
                              fill="#F19200"
                              />
                            <circle
                              cx="31.9993"
                              cy="16"
                              r="1.66667"
                              transform="rotate(180 31.9993 16)"
                              fill="#F19200"
                              />
                            <circle
                              cx="75.6654"
                              cy="59"
                              r="1.66667"
                              transform="rotate(180 75.6654 59)"
                              fill="#F19200"
                              />
                            <circle
                              cx="31.9993"
                              cy="59"
                              r="1.66667"
                              transform="rotate(180 31.9993 59)"
                              fill="#F19200"
                              />
                            <circle
                              cx="75.6654"
                              cy="30.6666"
                              r="1.66667"
                              transform="rotate(180 75.6654 30.6666)"
                              fill="#F19200"
                              />
                            <circle
                              cx="31.9993"
                              cy="30.6666"
                              r="1.66667"
                              transform="rotate(180 31.9993 30.6666)"
                              fill="#F19200"
                              />
                            <circle
                              cx="75.6654"
                              cy="1.66665"
                              r="1.66667"
                              transform="rotate(180 75.6654 1.66665)"
                              fill="#F19200"
                              />
                            <circle
                              cx="31.9993"
                              cy="1.66665"
                              r="1.66667"
                              transform="rotate(180 31.9993 1.66665)"
                              fill="#F19200"
                              />
                            <circle
                              cx="60.9993"
                              cy="132"
                              r="1.66667"
                              transform="rotate(180 60.9993 132)"
                              fill="#F19200"
                              />
                            <circle
                              cx="17.3333"
                              cy="132"
                              r="1.66667"
                              transform="rotate(180 17.3333 132)"
                              fill="#F19200"
                              />
                            <circle
                              cx="60.9993"
                              cy="117.333"
                              r="1.66667"
                              transform="rotate(180 60.9993 117.333)"
                              fill="#F19200"
                              />
                            <circle
                              cx="17.3333"
                              cy="117.333"
                              r="1.66667"
                              transform="rotate(180 17.3333 117.333)"
                              fill="#F19200"
                              />
                            <circle
                              cx="60.9993"
                              cy="102.667"
                              r="1.66667"
                              transform="rotate(180 60.9993 102.667)"
                              fill="#F19200"
                              />
                            <circle
                              cx="17.3333"
                              cy="102.667"
                              r="1.66667"
                              transform="rotate(180 17.3333 102.667)"
                              fill="#F19200"
                              />
                            <circle
                              cx="60.9993"
                              cy="88"
                              r="1.66667"
                              transform="rotate(180 60.9993 88)"
                              fill="#F19200"
                              />
                            <circle
                              cx="17.3333"
                              cy="88"
                              r="1.66667"
                              transform="rotate(180 17.3333 88)"
                              fill="#F19200"
                              />
                            <circle
                              cx="60.9993"
                              cy="73.3333"
                              r="1.66667"
                              transform="rotate(180 60.9993 73.3333)"
                              fill="#F19200"
                              />
                            <circle
                              cx="17.3333"
                              cy="73.3333"
                              r="1.66667"
                              transform="rotate(180 17.3333 73.3333)"
                              fill="#F19200"
                              />
                            <circle
                              cx="60.9993"
                              cy="45"
                              r="1.66667"
                              transform="rotate(180 60.9993 45)"
                              fill="#F19200"
                              />
                            <circle
                              cx="17.3333"
                              cy="45"
                              r="1.66667"
                              transform="rotate(180 17.3333 45)"
                              fill="#F19200"
                              />
                            <circle
                              cx="60.9993"
                              cy="16"
                              r="1.66667"
                              transform="rotate(180 60.9993 16)"
                              fill="#F19200"
                              />
                            <circle
                              cx="17.3333"
                              cy="16"
                              r="1.66667"
                              transform="rotate(180 17.3333 16)"
                              fill="#F19200"
                              />
                            <circle
                              cx="60.9993"
                              cy="59"
                              r="1.66667"
                              transform="rotate(180 60.9993 59)"
                              fill="#F19200"
                              />
                            <circle
                              cx="17.3333"
                              cy="59"
                              r="1.66667"
                              transform="rotate(180 17.3333 59)"
                              fill="#F19200"
                              />
                            <circle
                              cx="60.9993"
                              cy="30.6666"
                              r="1.66667"
                              transform="rotate(180 60.9993 30.6666)"
                              fill="#F19200"
                              />
                            <circle
                              cx="17.3333"
                              cy="30.6666"
                              r="1.66667"
                              transform="rotate(180 17.3333 30.6666)"
                              fill="#F19200"
                              />
                            <circle
                              cx="60.9993"
                              cy="1.66665"
                              r="1.66667"
                              transform="rotate(180 60.9993 1.66665)"
                              fill="#F19200"
                              />
                            <circle
                              cx="17.3333"
                              cy="1.66665"
                              r="1.66667"
                              transform="rotate(180 17.3333 1.66665)"
                              fill="#F19200"
                              />
                            <circle
                              cx="46.3333"
                              cy="132"
                              r="1.66667"
                              transform="rotate(180 46.3333 132)"
                              fill="#F19200"
                              />
                            <circle
                              cx="2.66536"
                              cy="132"
                              r="1.66667"
                              transform="rotate(180 2.66536 132)"
                              fill="#F19200"
                              />
                            <circle
                              cx="46.3333"
                              cy="117.333"
                              r="1.66667"
                              transform="rotate(180 46.3333 117.333)"
                              fill="#F19200"
                              />
                            <circle
                              cx="2.66536"
                              cy="117.333"
                              r="1.66667"
                              transform="rotate(180 2.66536 117.333)"
                              fill="#F19200"
                              />
                            <circle
                              cx="46.3333"
                              cy="102.667"
                              r="1.66667"
                              transform="rotate(180 46.3333 102.667)"
                              fill="#F19200"
                              />
                            <circle
                              cx="2.66536"
                              cy="102.667"
                              r="1.66667"
                              transform="rotate(180 2.66536 102.667)"
                              fill="#F19200"
                              />
                            <circle
                              cx="46.3333"
                              cy="88"
                              r="1.66667"
                              transform="rotate(180 46.3333 88)"
                              fill="#F19200"
                              />
                            <circle
                              cx="2.66536"
                              cy="88"
                              r="1.66667"
                              transform="rotate(180 2.66536 88)"
                              fill="#F19200"
                              />
                            <circle
                              cx="46.3333"
                              cy="73.3333"
                              r="1.66667"
                              transform="rotate(180 46.3333 73.3333)"
                              fill="#F19200"
                              />
                            <circle
                              cx="2.66536"
                              cy="73.3333"
                              r="1.66667"
                              transform="rotate(180 2.66536 73.3333)"
                              fill="#F19200"
                              />
                            <circle
                              cx="46.3333"
                              cy="45"
                              r="1.66667"
                              transform="rotate(180 46.3333 45)"
                              fill="#F19200"
                              />
                            <circle
                              cx="2.66536"
                              cy="45"
                              r="1.66667"
                              transform="rotate(180 2.66536 45)"
                              fill="#F19200"
                              />
                            <circle
                              cx="46.3333"
                              cy="16"
                              r="1.66667"
                              transform="rotate(180 46.3333 16)"
                              fill="#F19200"
                              />
                            <circle
                              cx="2.66536"
                              cy="16"
                              r="1.66667"
                              transform="rotate(180 2.66536 16)"
                              fill="#F19200"
                              />
                            <circle
                              cx="46.3333"
                              cy="59"
                              r="1.66667"
                              transform="rotate(180 46.3333 59)"
                              fill="#F19200"
                              />
                            <circle
                              cx="2.66536"
                              cy="59"
                              r="1.66667"
                              transform="rotate(180 2.66536 59)"
                              fill="#F19200"
                              />
                            <circle
                              cx="46.3333"
                              cy="30.6666"
                              r="1.66667"
                              transform="rotate(180 46.3333 30.6666)"
                              fill="#F19200"
                              />
                            <circle
                              cx="2.66536"
                              cy="30.6666"
                              r="1.66667"
                              transform="rotate(180 2.66536 30.6666)"
                              fill="#F19200"
                              />
                            <circle
                              cx="46.3333"
                              cy="1.66665"
                              r="1.66667"
                              transform="rotate(180 46.3333 1.66665)"
                              fill="#F19200"
                              />
                            <circle
                              cx="2.66536"
                              cy="1.66665"
                              r="1.66667"
                              transform="rotate(180 2.66536 1.66665)"
                              fill="#F19200"
                              />
                        </svg>
                      </span>
                  </div>
                </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Contact