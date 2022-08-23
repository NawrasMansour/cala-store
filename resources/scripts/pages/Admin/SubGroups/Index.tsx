import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import SubGroupTable from '@/scripts/shared/SubGroup/SubGroupTable';

const Index = ({
    routeBaseName = 'admin.subGroups',
    subGroups = [],
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
                  Create New Sub Group
                </button>
            </div>
            <SubGroupTable
                subGroups={subGroups}
                pagination={pagination}
                routeBaseName={routeBaseName}
            />
        </div>
    );
};

export default Index;