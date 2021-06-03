import logo from '../../assets/logo.svg'


const HomeHeader = () => {
    return(
        <header className="header-home">
            <div className="logo-maior">
                <img src={logo} alt="logo marvel" />
                <h1>EXPORE O UNIVERSO</h1>
                <span className="header-subtitulo">Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!</span>
            </div>
        </header>
    )
}

export default HomeHeader;