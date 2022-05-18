import React from 'react';
import Foto from '../assets/img/me.jpg';
import '../assets/css/about.css';

const About: React.FC = () => {
    return (
        <main className='about'>
        <h1>Um Pouco Sobre Mim</h1>
        <img className="about__image" src={Foto} alt="me" />
        <section className="about__text">
        <p>Me chamo Gabriel Baldez, sou desenvolvedor web, atualmente estou focando meus estudos em front-end, aprendendo ReactJs e me aprofundando em CSS e TypeScript. Também possuo conhecimento em desenvolvimento back-end, no ano passado estudei NodeJs e me aprofundei em ExpressJs, também estudei Python, bancos de dados e muito mais.</p>
        <p>Meu interesse em desenvolvimento web começou em 2013 quando por curiosidade comecei estudar como se criava sites e então tive meu primeiro contato com HTML e CSS.</p>
        <p>Meu objetivo é me especializar no desenvolvimento front-end e compartilhar conhecimentos.</p>
        <p>Sou uma pessoa que gosta de estudar e procura sempre aprender, portanto estou sempre buscando me desenvolver e melhorar, amo música e animais e adoro cozinhar, praticar esportes e estar em contato com a natureza.</p>
        </section>
        </main>
    );
}

export default About;