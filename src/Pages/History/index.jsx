import React from 'react'
import './history.css'
import {AiFillLinkedin, AiFillInstagram, AiFillGithub} from 'react-icons/ai'

export default function History() {
  return (
    <section className='mainHistory'>
<div>
    <h1>Quem Sou Eu?</h1>
    <h2>Sou Vinicius Aranda Vieira, 26 anos, casado.</h2>
    
    <p>Estou em transição de carreira.
      Durante 7 anos, atuei no setor logístico, e atualmente estou em busca de oportunidades na área de tecnologia.
    Comecei na área de tecnologia em 2022 e estou em constante aprendizado, sempre me atualizando.
    Faço faculdade de Análise e Desenvolvimento de Sistemas e também faço cursos focados na área de tecnologia na Alura.
    No momento, trabalho como voluntário em uma organização sem fins lucrativos, cujo foco principal é a luta contra o Abuso Sexual e o Tráfico Humano.
    Desempenho as funções de Designer Gráfico e Desenvolvedor Front-End.
    Estou em busca de uma nova oportunidade na área e estou disponível para esclarecer qualquer dúvida</p>
    </div>

    <div >
 <h3> Contatos </h3>
 <AiFillLinkedin/>
 <AiFillInstagram/>
 <AiFillGithub/>
    </div>
    </section>
  )
}
