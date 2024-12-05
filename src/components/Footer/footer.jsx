
import FACEBOOK from '../../assets/facebook.png';
import INSTAGRAM from '../../assets/instagram.png';
import TWITTER from '../../assets/twitter.png';
import YOUTUBE from '../../assets/youtube.png';
import LINKEDIN from '../../assets/linkedin.png';

import S from './footer.module.scss';

export default function Footer() {
  return (
    <footer>
        <section className={S.boxSocial}>
            <h3>
                4002-8922
            </h3>
            <div>
                <a href=""> <img src={FACEBOOK} alt="" /> </a>
                <a href=""> <img src={TWITTER} alt="" /> </a>
                <a href=""> <img src={YOUTUBE} alt="" /> </a>
                <a href=""> <img src={LINKEDIN} alt="" /> </a>
                <a href=""> <img src={INSTAGRAM} alt="" /> </a>
            </div>
            
        </section>
        <section className={S.direito}>
            <p>
            Layout desenvolvido pela Vai Na Web para fins educativos - 2024
            </p>
        </section>
    </footer>
  );
}