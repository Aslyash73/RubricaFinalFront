import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/home.css'

const Home = () => {
    return (
        <div className='home'>
            <div className='home__main'>
                <div className="home__content">
                    <h2>PAGINA PRINCIPAL DE LA LISTA POKEMON </h2>

                    <div>
                    <img alt='' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c31f.png" width="100" height="100" />
                    </div>
                </div>
                <div className="home__links">
                    <ul>                   
                        <Link to={'/about'}>
                            <li>
                                <h3><b>pokeApi</b></h3>
                                <p>
                                    Accede a la lista de pokemones
                                </p>
                            </li>
                        </Link>
                        <Link to={'/admin'}>
                            <li>
                                <h3><b>clientePokemon</b></h3>
                                <p>
                                    Clientes registrados de los pokemones
                                </p>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
            <aside className="home__aside">
                <h3>PokemonDongo</h3>
                <p>
                    pagina de los pokemones
                </p>
            </aside>
        </div>
    )
}

export default Home