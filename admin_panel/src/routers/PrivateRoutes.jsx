import { Navigate, Outlet } from 'react-router-dom'
import MasterLayer from '../layouts/MasterLayer';
const PrivateRoutes = ({ }) => {
    const isAuthed = localStorage.getItem("token");
    return (
        isAuthed ?
            (<MasterLayer><Outlet /></MasterLayer>)
            : (<Navigate to='/login' />)
    )
}
export default PrivateRoutes;