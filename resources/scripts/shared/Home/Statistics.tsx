import React from 'react'

import { useTranslation } from 'react-i18next'

const Statistics = ({ title , data} : any) => {
    const [t,i18n] = useTranslation();

  return (
    <div dir={i18n.language == 'ar' ? 'rtl' : 'ltr'} className="bg-white">
      <section className="px-4 py-12 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div className="card">
                <div className="p-5">
                    <p className="mb-2 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">{t('homepage.state.Categories')}</p>
                    <h2 className="text-3xl font-extrabold leading-none text-primary-dark-blue truncate py-2">{data.categories_stats.Category} {t('homepage.state.Category')}</h2>
                </div>
            </div>
            <div className="card">
                <div className="p-5">
                    <p className="mb-2 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">{t('homepage.state.Clusters')}</p>
                    <h2 className="text-3xl font-extrabold leading-none text-primary-dark-blue truncate py-2">{data.clusters_stats.Cluster} {t('homepage.state.Cluster')}</h2>
                </div>
            </div>
            <div className="card">
                <div className="p-5">
                    <p className="mb-2 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">{t('homepage.state.Groups')}</p>
                    <h2 className="text-3xl font-extrabold leading-none text-primary-dark-blue truncate py-2">{data.groups_stats.Group} {t('homepage.state.Group')}</h2>
                </div>
            </div>
            <div className="card">
                <div className="p-5">
                    <p className="mb-2 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">{t('homepage.state.Items')}</p>
                    <h2 className="text-3xl font-extrabold leading-none text-primary-dark-blue truncate py-2">{data.items_stats.Item} {t('homepage.state.Item')}</h2>
                </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default Statistics