import '../styles/filme-info.css'
import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import api from '../services/api';
import { toast } from 'react-toastify';


function Filme(){
    const {id} = useParams();
    const [filme, setFilme] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        async function loadFilme(){
            const response = await api.get(`/r-api/?api=filmes/${id}`)
            setFilme(response.data)
            setLoading(false)
        }

        loadFilme()
    },[id])

    function salvaFilme(){
        const minhaLista = localStorage.getItem('filmes')

        let filmesSalvos = JSON.parse(minhaLista) || []

        const hasFilme = filmesSalvos.some( (filmeSalvo) => filmeSalvo.id == filme.id )

        if(hasFilme){
            toast.info('Você já possui esse filme salvo')
            return
        }

        filmesSalvos.push(filme)
        localStorage.setItem('filmes', JSON.stringify(filmesSalvos))
        toast.success('Filme salvo com sucesso')
    }

    if(loading){
        return(
            <div className='filme-info'>
                <h1>Carregando filme...</h1>
            </div>
        )
    }

    return(
        <div className='filme-info'>
            <h1>{filme.nome}</h1>
            <img src={filme.foto}/>
            <span>{filme.sinopse}</span>
        <div>
            <button onClick={salvaFilme}>Salvar</button>
            <button><a target='_blank' href={`https://youtube.com/results?search_query=${filme.nome} Trailer`}>Trailer</a></button>
        </div>
        </div>
    )
}

export default Filme