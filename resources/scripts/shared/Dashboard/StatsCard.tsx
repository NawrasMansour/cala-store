import React from 'react';
import Carousel from '../Carousel';

const StatsCard = ({ data = {}, title }) => {
    const entries = Object.entries(data);
    const stats = entries.map(([key, value]) => (
        <div className="w-full" key={key}>
            <h4 className="font-medium text-base text-dark-500 uppercase">
                {key}
            </h4>
            <div className="flex items-center space-x-3 text-[#0bb783] mt-5 capitalize">
                <span className="font-bold text-3xl">{value}</span>
                {/* <span className="font-semibold text-xl">{title}</span> */}
            </div>
        </div>
    ));
    return entries.length > 0 ? (
        <Carousel title={title}>{stats}</Carousel>
    ) : null;
};

export default StatsCard;