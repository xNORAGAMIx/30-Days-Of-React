import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import twitterLight from '../../assets/twitter-light.svg';
import githubIcon from '../../assets/github-light.svg';
import linkedIcon from '../../assets/linkedin-light.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../context/ThemeContext';

function Hero() {

    const { theme,toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'dark' ? twitterDark : twitterLight;


  return (
    <section id='hero'>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroImg} alt="Profile Picture" />
            <img 
                className={styles.colorMode} 
                src={themeIcon} 
                alt="Color Mode"
                onClick={toggleTheme} />
        </div>
        <div className={styles.info}>
            <h1>User Name</h1>
            <h2>Work In Progress</h2>
            <span>
                <a href="" target='_blank'><img src={twitterIcon} alt="" /></a>
                <a href="" target='_blank'><img src={githubIcon} alt="" /></a>
                <a href="" target='_blank'><img src={linkedIcon} alt="" /></a>
            </span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, aliquam.</p>
            <a href={CV} download>
                <button className='hover'>Resume</button>
            </a>
        </div>
    </section>
  )
}

export default Hero
