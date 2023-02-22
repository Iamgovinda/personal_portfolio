import React from 'react';
// import Footer from '../components/Footer/Footer';
import NavigationBar from '../components/Navbar/Navbar';

const MasterLayer = (props) => {
    return (
        <>
            <NavigationBar />
            {props.children}
        </>
    )
}

export default MasterLayer