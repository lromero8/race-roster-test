import logo from './Assets/Logo.png'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container-fluid">
                
                <a className="navbar-brand" href="/#"><img src={logo} alt="logo"/></a>

                <div className="d-flex">
                    <a className="loginButton nav-link" href="/#">LOG-IN</a>
                    <input className="signupButton" type="button" value="SIGN UP"/>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;