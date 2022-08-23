import React from 'react'
import { Inertia } from '@inertiajs/inertia';
import Pagination from '@/scripts/templates/Pagination';

const headings = [
    {
        key: 'id',
        text: 'Category ID',
    },
    {
        key: 'category_name',
        text: 'Category Name',
    },
    {
        key: 'created_at',
        text: 'Created At',
    },
    {
        key: 'details',
        text: '',
    },
];

const ClusterTable = ({clusters ,pagination ,routeBaseName}) => {

  const clustersData = clusters?.map((cluster) => ({
        ...cluster,
        details: (
            <button
                  className="
                    border-blue-700
                    hover:bg-blue-200
                    text-blue-700
                    py-3
                    px-3
                    rounded-md
                    font-semibold
                  "
                  onClick={() =>
                    Inertia.get(route(`${routeBaseName}.show`, cluster.id))
                }
                >
                  More
                </button>
        ),
    }));


  return (
    <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow">
                    <table className="min-w-full text-center ">
                        <thead className="border-b bg-blue-100">
                            <tr>
                                {headings.map( (heading)=>(
                                    <th key={heading.key} scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                                        {heading.text}
                                    </th>
                                ))}
                            </tr>
                        </thead >
                        <tbody>
                            {clustersData.map( (clusterData)=>(
                                <tr key={clusterData.id} className="bg-white border-b hover:bg-gray-100">
                                    <td className="px-6 py-2 whitespace-nowrap text-sm font-light text-gray-900">{clusterData.id}</td>
                                    <td className="text-sm text-gray-900 font-medium px-6 py-2 whitespace-nowrap">
                                        {clusterData.en_name}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
                                        {new Date(clusterData.created_at).toLocaleDateString()}
                                    </td>
                                    <td className="text-sm px-6 py-2 whitespace-nowrap">
                                        {clusterData.details}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Pagination paginationObj={pagination} />
            </div>
        </div>
        </div>
  )
}

export default ClusterTable