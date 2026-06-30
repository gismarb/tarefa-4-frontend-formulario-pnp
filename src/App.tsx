import './App.css';

function App() {
  return (
    <div className="app">
      <main className="container py-5">
        <section className="text-center">
          <span className="badge rounded-pill text-bg-primary mb-3">
            <i className="bi bi-ui-checks-grid me-2"></i>
            Tarefa Front-End 04
          </span>

          <h1 className="display-5 fw-bold mb-3">
            Formulário de Sugestão de Indicador PNP
          </h1>

          <p className="lead text-secondary mx-auto app-intro">
            Aplicação React criada para simular o envio de sugestões de indicadores
            relacionados à Plataforma Nilo Peçanha, utilizando formulário controlado,
            comunicação entre componentes e efeitos colaterais com useEffect.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;