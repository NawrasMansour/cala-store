import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import SubClusterTable from '@/scripts/shared/SubCluster/SubClusterTable';

const Index = ({
    routeBaseName = 'admin.subClusters',
    subClusters = [],
    pagination = null,
    ...props
}) => {
    return (
        <div className="w-full">
            <div className="w-full my-5">
                <button
                  className="
                    bg-green-700
                    hover:bg-green-900
                    text-white
                    py-3
                    px-3
                    rounded-md
                    font-semibold
                  "
                  onClick={() => {
                        Inertia.get(route(`${routeBaseName}.create`));
                    }}
                >
                  Create New Sub Cluster
                </button>
            </div>
            <SubClusterTable
                subclusters={subClusters}
                pagination={pagination}
                routeBaseName={routeBaseName}
            />
        </div>
    );
};

export default Index;