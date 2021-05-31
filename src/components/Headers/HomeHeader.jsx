import logo from '../assets/logo.svg'

const HomeHeader = () => {
    return(
        <header>
            <img src={logo} alt="logo marvel" />
            <h1>EXPLORE O UNIVERSO</h1>
            <span>Mergulhe no dominío deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!</span>
        </header>
    )
}

export default HomeHeader;