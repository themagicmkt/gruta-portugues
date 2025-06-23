import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PlanoMensal = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById('cta-button')?.scrollIntoView({ behavior: 'smooth' });
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  const handleUpsellAccept = () => {
    navigate('/checkout-oracao-mensal');
  };

  const handleUpsellDecline = () => {
    navigate('/downsell');
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center px-4 py-10">
      <div className="w-full max-w-4xl space-y-8">
        {/* Título principal */}
        <h1 className="text-4xl font-extrabold text-center text-pink-700">
          Você foi escolhido para essa Oferta Especial...
        </h1>

        {/* Descrição inicial */}
        <p className="text-center text-lg text-gray-700">
          A insistência em levar a oração mais de uma vez <strong>pode fazer toda a diferença.</strong>
        </p>
        <p className="text-center text-lg text-gray-700">
          Muitas pessoas fazem penitências todos os anos, porque sabem que dessa forma estão pedindo
          e agradecendo constantemente — o que <strong>aumenta as chances de receberem o milagre esperado.</strong>
        </p>

        {/* Seção de destaque */}
        <div className="bg-pink-50 border border-pink-200 rounded-lg p-6 shadow-md space-y-4">
          <h2 className="text-2xl font-bold text-pink-700 text-center">
            🌹 Receba todos os meses uma oração poderosa feita por Irmãs da Congregação de Lourdes
          </h2>
          <p className="text-center text-gray-700">
            Além da oração, nós enviaremos o seu pedido para a gruta todos os meses até que ele seja <strong>atendido por Santa Lourdes.</strong>
          </p>
        </div>

        {/* Imagem ilustrativa */}
        <div className="flex justify-center my-4">
          <img
            src="/voluntarios.jpg"
            alt="Irmãs rezando na Gruta de Lourdes"
            className="rounded-lg shadow-md max-h-64 object-cover"
          />
        </div>

        {/* Benefícios */}
        <ul className="space-y-2 text-gray-800">
          <li>✅ Oração mensal pelas suas intenções</li>
          <li>✅ Envio fácil de novos pedidos</li>
          <li>✅ Fortaleça sua fé com essa conexão contínua com Lourdes</li>
        </ul>

        {/* Preço */}
        <div className="text-center">
          
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center space-y-4">
            <a
              id="cta-button"
              href="https://pay.hotmart.com/O96162158H?off=grogj2y9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded shadow-md transition duration-200 w-full max-w-xs flex items-center justify-center text-center"
            >
              Quero receber orações todos os meses 🙏
            </a>

            <button
            onClick={handleUpsellDecline}
            className="text-sm text-gray-500 hover:text-gray-700 underline"
            >
            Não, obrigado. Prefiro não receber orações mensais.
            </button>
        </div>
      </div>
    </div>
  );
};

export default PlanoMensal;

