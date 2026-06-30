// Este componente representa o rodapé da aplicação.
// Separei o rodapé em um componente próprio para facilitar manutenção
// e para deixar a estrutura visual mais organizada.
function Footer() {
  return (
    <footer className="border-top bg-white mt-5">
      <div className="container py-4">
        {/* Este texto conecta a tarefa ao contexto do TCC e deixa claro o objetivo acadêmico do projeto. */}
        <p className="text-secondary small mb-0">
          <i className="bi bi-mortarboard me-2"></i>
          Projeto desenvolvido para a Tarefa Front-End 04, mantendo relação com o
          TCC sobre análise e disponibilização de dados da Plataforma Nilo Peçanha.
        </p>
      </div>
    </footer>
  );
}

export default Footer;