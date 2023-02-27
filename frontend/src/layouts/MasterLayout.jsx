import React from 'react';
// import Footer from '../components/Footer/Footer';
import NavigationBar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const MasterLayer = (props) => {
    return (
        <>
            <NavigationBar />
            {props.children}
            <Footer />
        </>
    )
}

export default MasterLayer