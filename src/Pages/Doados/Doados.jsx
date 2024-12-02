import S from './doados.module.scss';
import PROTAGONISTA from '../../assets/protagonista.png';

export default function Doados() {
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
            </section>
        </section>
    );
}