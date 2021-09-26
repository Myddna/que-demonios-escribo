import { Link } from "gatsby"
import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => {
  return (
    <Layout>
      <Seo title="Qué es esto" />
      <article>
        <h1>Esto es un seleccionador de frases aleatorias</h1>
        <p>
          Este mini proyecto en{" "}
          <a href="https://v4.gatsbyjs.com" target="_blank" rel="noreferrer">
            Gatsby 4
          </a>{" "}
          se ha realizado entre los días 25 y 26 de septiembre de 2021, en plan
          sprint loco porque sí.
        </p>
        <p>
          Las fuentes podrían estar equivocadas. Si sabes el autor correcto,
          escríbeme.
        </p>
        <p>
          También puedes enviarme citas nuevas para incluir desde el enlace de
          arriba a la derecha 😁
        </p>
        <p>
          El código fuente está disponible para su cotilleo en{" "}
          <a
            href="https://github.com/Myddna/que-demonios-escribo"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>{" "}
        </p>
        <p>Recursos utilizados: </p>
        <ul>
          <li>
            <a
              href="https://www.youtube.com/watch?v=RaTpreA0v7Q"
              target="_blank"
              rel="noreferrer"
            >
              Tutorial de Gatsby 3
            </a>{" "}
          </li>
          <li>
            <a
              href="https://v4.gatsbyjs.com/docs/"
              target="_blank"
              rel="noreferrer"
            >
              Documentación de Gatsby
            </a>{" "}
          </li>
          <li>
            Foto de fondo:{" "}
            <a
              href="https://www.pexels.com/es-es/@matreding"
              target="_blank"
              rel="noreferrer"
            >
              Mathias P.R. Reding
            </a>
          </li>
        </ul>
      </article>
    </Layout>
  )
}

export default About
