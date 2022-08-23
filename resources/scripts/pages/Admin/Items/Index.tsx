import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import ItemTable from '@/scripts/shared/Item/ItemTable';

const Index = ({
    routeBaseName = 'admin.items',
    items = [],
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
                  Create New Item
                </button>
            </div>
            <ItemTable
                items={items}
                pagination={pagination}
                routeBaseName={routeBaseName}
            />
        </div>
    );
};

export default Index;