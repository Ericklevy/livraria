import S from './QueroDoar.module.scss';
import FORM_LIVRO from '../../assets/form-livro.png';

export default function QueroDoar() {
    return (
        <section className={S.principal}>
            <section className={S.container}>
                <h2>Por favor, preencha o formulário 
                    com suas informações e as informações do Livro</h2>
                <form action="" className={S.forms}>
                    <div>
                        <img src={FORM_LIVRO} alt="icone do livro do forms" />
                        <h3>Informações do Livro</h3>
                    </div>
                    <input type="text" placeholder='Titulo'/>
                    <input type="text" placeholder='Categoria'/>
                    <input type="text" placeholder='Autor'/>
                    <input type="text" placeholder='Link da Imagem'/>
                    <input type="submit" value="Doar" />

                </form>    
            </section>
        </section>
    );

}