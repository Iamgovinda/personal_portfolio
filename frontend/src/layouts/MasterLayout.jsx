import React from 'react';
// import Footer from '../components/Footer/Footer';
import NavigationBar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { useUserContext } from '../context/UserContext';

const MasterLayer = (props) => {
    const { user } = useUserContext();

    return (
        <>
            <NavigationBar user={user}/>
            {props.children}
            <Footer user={user}/>
        </>
    )
}

export default MasterLayer