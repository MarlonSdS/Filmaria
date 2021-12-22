import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './components/Home'
import Header from './components/Header'
import Filme from './components/Filme'
import Favoritos from './components/Favoritos';
import NotFound from './components/NotFound';

const Rotas = () => {
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route ecact path='/filme/:id' element={<Filme />} />
                <Route exact path='/favoritos' element={<Favoritos />}/>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;