// Este componente concentra o cabeçalho da aplicação.
// Deixo essa parte separada para manter o App.tsx mais limpo
// seguindo a mesma ideia de modularização usada nas entregas anteriores.
function Header() {
  return (
    <header className="app-header border-bottom bg-white">
      <nav className="container py-3">
        <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
          <div>
            {/* Este badge identifica a atividade e também mostra o uso do Bootstrap Icons. */}
            <span className="badge rounded-pill text-bg-primary mb-2">
              <i className="bi bi-ui-checks-grid me-2"></i>
              Tarefa Front-End 04
            </span>

            <h1 className="h3 fw-bold mb-1">
              Formulário de Sugestão de Indicador PNP
            </h1>

            <p className="text-secondary mb-0">
              Formulário React com comunicação entre componentes, estado e useEffect.
            </p>
          </div>

          {/* Este ícone reforça visualmente o tema de indicadores e análise de dados. */}
          <div className="app-header-icon">
            <i className="bi bi-bar-chart-line"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;