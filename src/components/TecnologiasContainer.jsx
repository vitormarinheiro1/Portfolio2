import {
    DiSass,
    DiJava,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact,
    DiAngularSimple,
    DiPython
} from "react-icons/di";

import '../styles/components/tecnologiascontainer.sass'

const technologies = [
    { id: "angular", name: "Angular", icon: <DiAngularSimple />, text: "Tenho conhecimento em Angular e sou capaz de desenvolver aplicações da web interativas e responsivas. Sou capaz de criar componentes reutilizáveis e utilizar recursos avançados do framework para construir interfaces de usuário dinâmicas." },
    { id: "react", name: "React", icon: <DiReact />, text: "Possuo habilidades em React e sou capaz de criar interfaces de usuário modernas e eficientes. Compreendo os conceitos fundamentais do React, como componentes, estado e ciclo de vida, e consigo desenvolver aplicativos de página única (SPA) com facilidade." },
    { id: "python", name: "Python", icon: <DiPython />, text: "Tenho um bom conhecimento em Python e sou capaz de desenvolver uma ampla gama de aplicações. Utilizo Python para escrever scripts, automatizar tarefas, processar dados e criar aplicações web básicas. Estou familiarizado com as principais bibliotecas e frameworks do ecossistema Python." },
    { id: "java", name: "Java", icon: <DiJava />, text: "Possuo habilidades em Java e sou capaz de desenvolver aplicações desktop e web robustas. Tenho conhecimento em programação orientada a objetos e sou capaz de utilizar os recursos avançados do Java para criar soluções escaláveis e eficientes." },
    { id: "js", name: "JavaScript", icon: <DiJsBadge />, text: "Sou proficiente em JavaScript, a linguagem fundamental para o desenvolvimento web. Utilizo JavaScript para adicionar interatividade às páginas da web, manipular DOM, fazer requisições AJAX e desenvolver aplicações web completas. Também estou familiarizado com os principais frameworks e bibliotecas, como jQuery e Vue.js" },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall />, text: "Possuo conhecimentos em Node.js e sou capaz de criar servidores web e aplicações em tempo real. Utilizo o Node.js para desenvolver APIs, realizar operações de E/S assíncronas e construir aplicações escaláveis e de alto desempenho." },
    { id: "mysql", name: "MySQL", icon: <DiMysql />, text: "Tenho experiência com MySQL e sou capaz de criar e gerenciar bancos de dados relacionais. Utilizo SQL para consultar dados, criar tabelas, gerenciar índices e otimizar consultas. Também tenho conhecimentos em modelagem de dados e normalização." },
    { id: "sass", name: "Sass", icon: <DiSass />, text: "Sou habilidoso em Sass e utilizo essa extensão do CSS para escrever estilos mais poderosos e organizados nos meus projetos web. Compreendo os recursos avançados do Sass, como variáveis, mixins e aninhamento, que me ajudam a melhorar a produtividade e a manutenção dos estilos." },
];


const TechnologiesContainer = () => {
    return (
        <section className="technologies-container">
            <h2>Tecnologias</h2>
            <div className="technologies-grid">
                {technologies.map((tech) => (
                    <div className="technology-card" id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className="technology-info">
                            <h3>{tech.name}</h3>
                            <p>{tech.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechnologiesContainer