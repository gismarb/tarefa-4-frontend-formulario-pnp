// Este componente exibe a tela de carregamento inicial.
// A intenção é simular o comportamento de uma aplicação real,
// onde os dados podem demorar alguns segundos para chegar de uma API.
function Loading() {
  return (
    <main className="container py-5">
      <section className="loading-card card border-0 shadow-sm mx-auto">
        <div className="card-body text-center p-5">
          {/* Este ícone representa visualmente o estado de espera durante o carregamento. */}
          <div className="loading-icon mb-3">
            <i className="bi bi-hourglass-split"></i>
          </div>

          <h2 className="h4 fw-bold mb-2">Carregando indicadores</h2>

          <p className="text-secondary mb-4">
            Estou simulando uma busca inicial de dados, como se a aplicação estivesse
            consultando uma API antes de exibir os indicadores sugeridos.
          </p>

          {/* A barra animada usa classes do Bootstrap para reforçar a ideia de carregamento. */}
          <div className="progress" role="progressbar" aria-label="Carregamento inicial">
            <div className="progress-bar progress-bar-striped progress-bar-animated w-100"></div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Loading;