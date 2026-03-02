import style from "./home.module.css"

const Home = () => {
    return(
        <div className={style.mainContainer}>
            <h1 className={style.homeTittle}>
                Bem-vindo ao TIBIAHELP
            </h1>
            <p>
                Sua fonte completa de ajuda para Tibia! Ferramentas, guias e recursos para melhorar sua experiência no jogo.
            </p>
            <nav>
                <button> Explorar Ferramentas </button>
                <button> Ver Guias </button>
            </nav>
        </div>
    )
}

export default Home