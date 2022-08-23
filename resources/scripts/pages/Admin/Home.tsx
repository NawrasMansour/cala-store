import StatsCard from '../../shared/Dashboard/StatsCard';
import React from 'react';

const Home = ({ categories_stats, clusters_stats, groups_stats,items_stats }) => {
    return (
        <div className="w-full py-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <StatsCard title="categories" data={categories_stats} />
                <StatsCard title="clusters" data={clusters_stats} />
                <StatsCard title="groups" data={groups_stats} />
                <StatsCard title="items" data={items_stats} />
            </div>
        </div>
    );
};

export default Home;
