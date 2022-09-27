import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import '~/App.scss';
import { DefaultLayout } from '~/layouts';
import { publicRoutes } from '~/routes';
import '~/assets/boxicons-2.0.7/css/boxicons.min.css';
function App() {
    return (
        <Router>
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.component;
                    let Layout = DefaultLayout;

                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }

                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <>
                                    <Layout>
                                        <Page />
                                    </Layout>
                                </>
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
