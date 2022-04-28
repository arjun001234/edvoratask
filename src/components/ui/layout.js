import Navbar from "./Navbar"

const Layout = ({children}) => {
    return (
        <div className="layout">
            <Navbar/>
            {children}
        </div>
    )
}

export default Layout