import React from "react";
import './home.css'
import { AiFillGithub , AiFillLinkedin } from "react-icons/ai";


export default function Home() {
  return (
    <>
      <section>
        <p> Olá, sou Vinicius, muito prazer! </p>
        <div className="title">
          <h2>DESENVOLVEDOR</h2>
          <h1> FRONT END </h1>
        </div>
        <div>
          
          <a className="github" href="https://github.com/VINICIUSARANDA1" target="_blank">
            <AiFillGithub className="icons"/>
          </a>
          <a className="linkedin"
            href="https://www.linkedin.com/in/vinicius-aranda-18674113b/"
            target="_blank"
          >
            <AiFillLinkedin className="icons"/>
          </a>
        </div>
      </section>
    </>
  );
}
