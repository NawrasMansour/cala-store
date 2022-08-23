import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import ColorTable from '@/scripts/shared/Color/ColorTable';

const Index = ({
    routeBaseName = 'admin.colors',
    colors = [],
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
                  Create New Color
                </button>
            </div>
            <ColorTable
                colors={colors}
                pagination={pagination}
                routeBaseName={routeBaseName}
            />
        </div>
    );
};

export default Index;