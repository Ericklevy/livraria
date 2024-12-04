import LOGO from '../../assets/logo.png';
import SEARCH from '../../assets/search.png';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom'
import Inicio from '../../Pages/Inicio/Inicio';
import Doados from '../../Pages/Doados/Doados';
import QueroDoar from '../../Pages/QueroDoar/QueroDoar';
import S from './header.module.scss';

export default function Header() {
    return (
        <BrowserRouter>
        

        <header>
            <section className={S.boxLogo}>
                <img src={LOGO} alt="Imagem livro" />
                <h1>Livros Vai na Web</h1>
            </section>
            <nav className={S.boxMenu}>
                <ul>
                    <li> <Link to="/">Inicio</Link> </li>
                    <li> <Link to="/doados"> Livros Doados </Link> </li>
                    <li> <Link to="/queroDoar"> Quero Doar </Link> </li>
                </ul>
            </nav>
            <div className={S.boxInput}>
                <input type="text" placeholder="O que voce procura?" />
                <img src={SEARCH} alt="" />
            </div>
        </header>
            <Routes>
                    <Route path="/" element={<Inicio/>} />
                    <Route path="/doados" element={<Doados/>} />
                    <Route path='/queroDoar' element={<QueroDoar/>}/>
            </Routes>
        </BrowserRouter>
    );
}