import { Outlet } from 'react-router-dom'
import GeneralHeader from '../GeneralHeader'

const Layout = () => {
    return (
        <>
            <GeneralHeader />
            <Outlet />
        </>
    )
}

export default Layout