import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import CategoriesTable from '@/scripts/shared/Categories/CategoriesTable';

const Index = ({
    routeBaseName = 'admin.categories',
    categories = [],
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
                  Create New Category
                </button>
            </div>
            <CategoriesTable
                categories={categories}
                pagination={pagination}
                routeBaseName={routeBaseName}
            />
        </div>
    );
};

export default Index;