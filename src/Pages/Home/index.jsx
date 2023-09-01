import React from "react";
import { AiFillGithub , AiFillLinkedin } from "react-icons/ai";


export default function Home() {
  return (
    <>
      <section>
        <p> Olá, sou Vinicius, muito prazer! </p>
        <div>
          <h2>DESENVOLVEDOR</h2>
          <h1> FRONT END </h1>
        </div>
        <div>
          
          <a href="https://github.com/VINICIUSARANDA1" target="_blank">
            <AiFillGithub/>
          </a>
          <a
            href="https://www.linkedin.com/in/vinicius-aranda-18674113b/"
            target="_blank"
          >
            <AiFillLinkedin/>
          </a>
        </div>
      </section>
    </>
  );
}
