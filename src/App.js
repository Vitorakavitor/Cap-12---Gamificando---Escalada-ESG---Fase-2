import React from 'react'
import './index.css'

function MainScreen() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/destinations">Destinos</a>
            </li>
            <li>
              <a href="/about">Sobre</a>
            </li>
            <li>
              <a href="/contact">Contato</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Bem-vindo ao EcoTravels</h1>
          <p>
            Explore o mundo sendo responsável com o meio ambiente e as
            comunidades locais.
          </p>
          <button className="btn-primary">Navegue pelos destinos</button>
        </section>

        <section className="features">
          <div>
            <h2>Viagem de Baixo Impacto</h2>
            <p>
              Nossos passeios e atividades são projetados para minimizar seu
              impacto no meio ambiente e nas comunidades locais.
            </p>
          </div>
          <div>
            <h2>Acomodações Sustentáveis</h2>
            <p>
              Nós nos associamos com hotéis e pousadas ecológicos para fornecer
              uma estadia confortável e responsável.
            </p>
          </div>
          <div>
            <h2>Troca Cultural</h2>
            <p>
              Experimente a cultura e as tradições locais enquanto apoia a
              economia local.
            </p>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-container">
          <div className="footer-left">
            <p>&copy; 2023 EcoTravels</p>
          </div>
          <div className="footer-right">
            <ul>
              <li>
                <a href="#">Política de Privacidade</a>
              </li>
              <li>
                <a href="#">Termos e Condições</a>
              </li>
              <li>
                <a href="#">Perguntas Frequentes</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MainScreen
