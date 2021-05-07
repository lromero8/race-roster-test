import logo from './Assets/Logo.png'

const Navbar = () => {
    return (
        <nav className="navbar">                
            <a className="navbar-brand" href="/#"><img src={logo} alt="logo"/></a>

            <div className="d-flex">
                <a className="loginButton nav-link" href="/#">LOG-IN</a>
                <input className="signupButton" type="button" value="SIGN UP"/>
            </div>
        </nav>
    );
}
 
export default Navbar;