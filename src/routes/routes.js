import config from '~/config';

// Pages
import Catalog from '~/pages/Catalog';
import Detail from '~/pages/Detail';
import Home from '~/pages/Home';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.catalog, component: Catalog },
    { path: config.routes.search, component: Catalog },
    { path: config.routes.detail, component: Detail },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
