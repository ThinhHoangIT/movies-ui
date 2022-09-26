// import PropTypes from 'prop-types';

import Header from '~/layouts/components/header';
import Footer from '~/layouts/components/footer';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default DefaultLayout;
