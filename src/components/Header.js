import Logo from '../logo.svg'
function Header() {
    return (
        <div className='logo_box'>
            <img src={Logo} alt="logo" className='logo' />
            <p className="heading-primary">The React Quiz</p>
        </div>
    )
}

export default Header

