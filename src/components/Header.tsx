// Componente responsável pelo cabeçalho principal da aplicação.
// A estrutura segue o padrão visual usado na Entrega 03, com hero verde,
// badge de protótipo e texto conectando a tarefa ao contexto do TCC.
function Header() {
  return (
    <header className="app-header">
      <div className="container py-5">
        <span className="badge rounded-pill app-header-badge mb-3">
          <i className="bi bi-flask me-2"></i>
          Protótipo experimental
        </span>

        <h1 className="display-5 fw-bold mb-3">
          Formulário de Sugestão de Indicador PNP
        </h1>

        <p className="lead text-accent mb-0">
          Interface experimental para coletar sugestões de indicadores relacionados
          ao projeto de TCC sobre ingestão, tratamento, análise e disponibilização
          de dados da Plataforma Nilo Peçanha.
        </p>
      </div>
    </header>
  );
}

export default Header;