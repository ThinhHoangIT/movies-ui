import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import '~/App.scss';
import { DefaultLayout } from '~/layouts';
import Loading from '~/components/loading/Loading';
import { selectLoading } from './redux/userSlice';
import { useSelector } from 'react-redux';
import { publicRoutes, privateRoutes } from '~/routes';
import '~/assets/boxicons-2.0.7/css/boxicons.min.css';
import AuthUser from './features/auth/AuthUser';
import { NotiModal } from './components/MovieCard/MovieCard';

function App() {
    const isLoading = useSelector(selectLoading);

    return (
        <AuthUser>
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
                                        {isLoading && <Loading />}
                                        <NotiModal />
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    </>
                                }
                            />
                        );
                    })}
                    {privateRoutes.map((route, index) => {
                        const Page = route.component;

                        let Layout = DefaultLayout;

                        const ProtectedRoute = route.protected;

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
                                        {isLoading && <Loading />}
                                        <Layout>
                                            <ProtectedRoute>
                                                <Page />
                                            </ProtectedRoute>
                                        </Layout>
                                    </>
                                }
                            />
                        );
                    })}
                </Routes>
            </Router>
        </AuthUser>
    );
}
export default App;
