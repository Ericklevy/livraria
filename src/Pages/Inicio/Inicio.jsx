import S from './inicio.module.scss';
import COMUNITY from '../../assets/community.png';
import LIVRO from '../../assets/livro.png';
import MAO from '../../assets/mao.png';
import JUSTICA from '../../assets/justica.png';


export default function Inicio() {
    return (
        <section>
            <section className={S.post}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO </h2>
            </section>
            <section className={S.devoDoar}>
                <div>
                    <h2 > Por que devo doar?</h2>
                </div>
                <section className={S.boxCard}>
                    <article>
                    <img src={COMUNITY} alt="" />
                    <p>  Oferece livros a quem não tem acesso, ajudando 
                        a reduzir a exclusão social.</p>
                    </article>

                    <article>
                        <img src={LIVRO} alt="" />
                        <p>  Estimula o hábito da leitura e o 
                            aprendizado contínuo.</p>
                    </article>
                    

                    
                    <article>
                        <img src={MAO} alt="" />
                        <p>  Fornece conhecimento e inspiração, permitindo que 
                            indivíduos transformem suas vidas.</p>
                    </article>

                    <article>
                        <img src={JUSTICA} alt="" />
                        <p>  Oferece livros a quem não tem acesso, ajudando 
                            a reduzir a exclusão social.</p>
                    </article>
                    

                    
                    
                </section>
            </section>

        </section>        
        
    );
}