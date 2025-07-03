const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Política de Privacidade</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Coleta de Dados</h2>
        <p>
          Coletamos apenas as informações essenciais para processar sua intenção de oração, como nome, e-mail e intenção enviada. Todos os dados são fornecidos voluntariamente por você no momento da utilização do serviço.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Uso das Informações</h2>
        <p>
          As informações coletadas são utilizadas exclusivamente para fins de envio das intenções de oração à Gruta de Lourdes e comunicação com você sobre o status do serviço. Não utilizamos os dados para fins comerciais ou publicitários sem o seu consentimento.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Compartilhamento de Dados</h2>
        <p>
          Não compartilhamos seus dados pessoais com terceiros, exceto quando necessário para a execução do serviço ou exigido por lei.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Segurança</h2>
        <p>
          Adotamos medidas de segurança técnicas e administrativas para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Direitos do Usuário</h2>
        <p>
          Você pode solicitar a exclusão ou atualização de seus dados a qualquer momento entrando em contato conosco pelo e-mail:{' '}
          <a href="mailto:support@volunteerslourdes.org" className="text-blue-600 underline">
            support@volunteerslourdes.org
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">6. Alterações</h2>
        <p>
          Esta Política de Privacidade pode ser atualizada a qualquer momento sem aviso prévio. Consulte regularmente para estar informado.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
