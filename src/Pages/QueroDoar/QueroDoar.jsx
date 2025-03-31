import S from './queroDoar.module.scss';
import FORM_LIVRO from '../../assets/form-livro.png';
import { useState } from 'react';
import axios from 'axios';


export default function QueroDoar() {
    const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [autor, setAutor] = useState("")
    const [imagem_url, setImagem_url] = useState("")


    const enviarDados = async() => {
        const urlApi = "https://testeapiflask-reox.onrender.com/doar"

        const dadosEnviar = {
            titulo,
            categoria,
            autor,
            imagem_url
        }

        await axios.post(urlApi, dadosEnviar)
        alert("Livro doado com sucesso!")

        setTitulo("")
        setCategoria("")
        setAutor("")
        setImagem_url("")
    }

    const capturaTitutlo = (e) => {
        setTitulo(e.target.value)
    }
    const capturaCategoria = (e) => {
        setCategoria(e.target.value)
    }
    const capturaAutor = (e) => {
        setAutor(e.target.value)
    }
    const capturaImagem = (e) => {
        setImagem_url(e.target.value)
    }

    return (
        <section className={S.principal}>
            <section className={S.container}>
                <h2>Por favor, preencha o formulário 
                    com suas informações e as informações do Livro</h2>
                <form onSubmit={(e)=> e.preventDefault() } className={S.forms}>
                    <div>
                        <img src={FORM_LIVRO} alt="icone do livro do forms" />
                        <h3>Informações do Livro</h3>
                    </div>
                    <input type="text" placeholder='Titulo' onChange={capturaTitutlo} value={titulo}/>
                    <input type="text" placeholder='Categoria' onChange={capturaCategoria} value={categoria}/>
                    <input type="text" placeholder='Autor' onChange={capturaAutor} value={autor}/>
                    <input type="text" placeholder='Link da Imagem' onChange={capturaImagem} value={imagem_url}/>
                    <input type="submit" value="Doar" onClick={enviarDados} />

                </form>    
            </section>
        </section>
    );

}