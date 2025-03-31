import S from './doados.module.scss';
import PROTAGONISTA from '../../assets/protagonista.png';
import { useState,useEffect } from 'react';
import axios from 'axios';


export default function Doados() {

    const [livros, setLivros] = useState([])

    const getLivros = async () => {
        const response = await axios.get("https://testeapiflask-reox.onrender.com/livros")
        setLivros(response.data)
    }

    useEffect(() => {
        getLivros()
    }, [])




    return (
        <section className={S.boxDoados}>
            <h2>Livros Doados</h2>
            <section className={S.Card}>
                <article >
                    <img src={PROTAGONISTA} alt="imagem do livro protagonista" />
                    <div>
                        <h4>O protagonista</h4>
                        <p>Susanne Andrade</p>
                        <p>Ficção</p>
                    </div>
                </article>
                {livros.map((item) => {
                    return (
                        <article key={item.id}>
                            <img src={item.imagem_url} alt="imagem do livro" />
                            <div>
                                <h4>{item.titulo}</h4>
                                <p>{item.autor}</p>
                                <p>{item.categoria}</p>
                            </div>
                        </article>
                    );
                })}

            </section>
        </section>
    );
}