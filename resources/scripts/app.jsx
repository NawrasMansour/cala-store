
import '../css/app.css';
import '../js/i18n.js'

import { App } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom/client';

import AdminLayout from './shared/AdminLayout';
import MainLayout from './shared/MainLayout';

InertiaProgress.init();

const el = document.getElementById('app');

const root = ReactDOM.createRoot(
  el
);

const resolveComponent = async (name) => {
    const pages = import.meta.glob('./pages/**/*.tsx');
    const page = (await pages[`./pages/${name}.tsx`]()).default;
    if (page.layout === undefined) {
        if (name.startsWith('Admin/')) {
            page.layout = (page) => <AdminLayout children={page} />;
        } else if (name.startsWith('Main/')) {
            page.layout = (page) => <MainLayout children={page} />;
        } else {

        }
    }
    return page;
};

root.render(
    <App
        initialPage={JSON.parse(el.dataset.page)}
        resolveComponent={resolveComponent}
    />,
    // el
);

