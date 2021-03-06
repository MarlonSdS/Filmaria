import api from '../services/api'
import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css'

function Home() {
  const [filmes, setFilmes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() =>{
    async function loadFilmes(){
      const response = await api.get('/r-api/?api=filmes')
      setFilmes(response.data)
      setLoading(false)
    }

    loadFilmes();
  }, [])

  if(loading){
    return(
        <div className='filme-info'>
            <h1>Carregando filmes...</h1>
        </div>
    )
}

    return (
      <div className='container'>
        <div className='lista-filmes'>
          {filmes.map((filme) =>{
            return(
              <article key={filme.id}>
                <strong>{filme.nome}</strong>
                <img src={filme.foto} />
                <Link to={`/filme/${filme.id}`}>Acessar</Link>
              </article>
            )
          })}
        </div>
      </div>
    );
  }
  
  export default Home;