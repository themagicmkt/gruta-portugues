const TermsOfUse = () => {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Termos de Uso</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Aceitação dos Termos</h2>
        <p>
          Ao utilizar este serviço de envio de orações à Gruta de Lourdes, você declara que leu, compreendeu e concorda integralmente com estes Termos de Uso. Se não estiver de acordo, não prossiga.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Natureza do Serviço</h2>
        <p>
          O serviço oferecido pelos <strong>Voluntários de Lourdes</strong> consiste em coletar suas intenções de oração e entregá-las fisicamente na Gruta de Lourdes em datas programadas. Esta é uma iniciativa devocional voluntária, sem vínculo oficial com o Santuário de Lourdes, a Diocese de Tarbes e Lourdes, ou qualquer instituição religiosa.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Resultados e Milagres</h2>
        <p>
          Não garantimos nem prometemos qualquer milagre, cura física, emocional ou espiritual. As orações são entregues com fé e respeito, mas os resultados dependem exclusivamente da providência divina.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Contribuições</h2>
        <p>
          Os valores pagos correspondem à contribuição para viabilizar a execução logística do serviço e não constituem venda de milagres, promessas espirituais ou garantias de resposta às orações.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Cancelamentos e Suporte</h2>
        <p>
          Para cancelamentos ou dúvidas sobre o serviço, entre em contato com nossa equipe pelo e-mail:{' '}
          <a href="mailto:support@volunteerslourdes.org" className="text-blue-600 underline">
            support@volunteerslourdes.org
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">6. Alterações</h2>
        <p>
          Os presentes Termos de Uso podem ser atualizados a qualquer momento, sem aviso prévio. Recomendamos consultá-los periodicamente.
        </p>
      </section>
    </div>
  );
};

export default TermsOfUse;
