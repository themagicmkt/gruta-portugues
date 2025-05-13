
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Mail, HeartPulse, Gift } from "lucide-react";
import { Link } from "react-router-dom";

const Confirmation = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-[#333333]">
      {/* Header Section */}
      <header className="bg-gradient-to-b from-white to-blue-50 py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo placeholder */}
          <div className="w-20 h-20 mx-auto mb-6 bg-[#5f9ea0]/10 rounded-full flex items-center justify-center">
            <HeartPulse className="text-[#5f9ea0]" size={40} />
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-semibold mb-6 text-[#333333] leading-tight">
            Seu Pedido de Oração foi Recebido para a Sagrada Gruta de Lourdes
          </h1>
        </div>
      </header>
      
      {/* Personal Greeting Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 text-[#5f9ea0]">
            Querido(a) Irmão(ã) em Cristo,
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-2/3">
              <p className="text-lg mb-4">
                Aqui é Matthew Miller, e escrevo a você hoje com grande alegria e esperança no coração. Por muitos anos, minha esposa e eu fomos abençoados por servir como voluntários na Gruta de Lourdes – um lugar onde milagres de cura acontecem todos os dias.
              </p>
              <p className="text-lg mb-4">
                Sempre que estou diante da Gruta, fico comovido com os testemunhos de pessoas que encontraram cura, paz e restauração no corpo e no espírito. Esse local sagrado, onde a Santíssima Virgem Maria apareceu, é conhecido em todo o mundo por seu poder divino de curar. Pela graça de Deus, temos o privilégio de levar suas orações até esse lugar milagroso.
              </p>
            </div>
            
            <div className="md:w-1/3 w-full">
              <div className="aspect-[9/16] rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1473177104440-ffee2f376098" 
                  alt="Gruta de Lourdes" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Lourdes: A Place of Miracles */}
      <section className="py-12 px-4 bg-blue-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 text-[#5f9ea0]">
            Lourdes: Um Lugar de Milagres
          </h2>
          
          <p className="text-lg mb-4">
            Amigo(a), eu pessoalmente testemunhei o poder curador da oração em Lourdes. Vi pessoas encontrarem alívio de doenças crônicas, se recuperarem fisicamente e alcançarem uma paz interior que só Deus pode oferecer. É como se o Céu tocasse a Terra em Lourdes — e cada oração elevada ali é acolhida com compaixão e misericórdia divina.
          </p>
          
          <p className="text-lg">
            A cura em Lourdes não é apenas física — é espiritual e emocional também. Milhares de peregrinos buscam a intervenção divina e, pela intercessão da Virgem Maria, recebem milagres que superam tudo o que poderiam imaginar.
          </p>
        </div>
      </section>
      
      {/* Prayer Journey Steps */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-playfair font-semibold mb-10 text-center text-[#5f9ea0]">
            A Jornada da Sua Oração
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5f9ea0]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-[#5f9ea0]" size={32} />
              </div>
              <h3 className="font-playfair font-semibold text-xl mb-2">Passo 1</h3>
              <p>Sua oração é impressa com respeito e carinho.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5f9ea0]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartPulse className="text-[#5f9ea0]" size={32} />
              </div>
              <h3 className="font-playfair font-semibold text-xl mb-2">Passo 2</h3>
              <p>Sua oração é entregue pessoalmente na Gruta de Lourdes, colocada em um local sagrado onde milagres já aconteceram. Também realizamos uma bênção especial por você.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5f9ea0]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="text-[#5f9ea0]" size={32} />
              </div>
              <h3 className="font-playfair font-semibold text-xl mb-2">Passo 3</h3>
              <p>Você receberá por e-mail as fotos da sua oração colocada na Gruta assim que chegarmos ao local sagrado, na visita mensal.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* What Makes Lourdes Extraordinary */}
      <section className="py-12 px-4 bg-blue-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 text-[#5f9ea0]">
            O Que Torna Lourdes Tão Extraordinária?
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-2/3">
              <p className="text-lg mb-4">
                Lourdes é reconhecida no mundo inteiro como um santuário de cura, onde os doentes buscam alívio e restauração. Todos os dias, vejo a fé transformar vidas neste lugar. Seja por cura física, paz interior ou renovação espiritual, a presença da Virgem Maria pode ser sentida em cada canto deste sagrado local.
              </p>
              
              <p className="text-lg">
                Há mais de 160 anos, milhões de pessoas buscaram cura aqui — e muitas foram agraciadas com recuperações milagrosas. Corações restaurados, corpos curados, esperanças renovadas. Parece que o véu entre o Céu e a Terra se torna mais fino em Lourdes, permitindo que nossas orações cheguem rapidamente aos ouvidos do Pai.
              </p>
            </div>
            
            <div className="md:w-1/3 w-full">
              <div className="aspect-[9/16] rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb" 
                  alt="Rio entre montanhas" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join the Healing Chain */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 text-[#5f9ea0]">
            Una-se a Esta Corrente de Cura e Fé
          </h2>
          
          <p className="text-lg mb-4">
            Você tem a oportunidade preciosa de enviar sua oração à Gruta de Lourdes — um local sagrado conhecido por milagres de cura. Imagine seus pedidos mais profundos sendo levados com fé até esse solo abençoado. Seja por você ou por alguém querido, esse ato de fé é mais que um pedido — é uma conexão direta com nosso Senhor e com todos que já foram tocados pela graça de Lourdes.
          </p>
        </div>
      </section>
      
      {/* Ready to Feel Lourdes' Healing Power */}
      <section className="py-12 px-4 bg-blue-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 text-[#5f9ea0]">
            Está Pronto para Sentir o Poder Curador de Lourdes?
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3 w-full">
              <div className="aspect-[9/16] rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9" 
                  alt="Árvores de pinheiro" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="md:w-2/3">
              <p className="text-lg">
                Não há nada como a paz e a cura que tomam conta do coração quando confiamos nossas preces a Lourdes. Seja por cura física, restauração espiritual ou alívio emocional, este local santo tem o poder de renovar pela graça de Deus.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contribution Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 text-[#5f9ea0] text-center">
            Envie Seu Pedido de Oração Agora
          </h2>
          
          <p className="text-lg mb-8 text-center">
            Sabemos que nem todos têm a chance de deixar suas orações em um dos locais mais sagrados do mundo — especialmente em tempos difíceis financeiramente. Por isso, decidimos ajudar outras pessoas a enviarem suas orações e receberem as bênçãos que merecem.
          </p>
          
          <p className="text-lg mb-10 text-center font-semibold">
            Como devotos, jamais queremos que o dinheiro seja um obstáculo para suas preces sinceras.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Option 1 */}
            <Card className="border-[#5f9ea0]/30 shadow-md hover:shadow-lg transition-all">
              <CardContent className="pt-6 px-4 pb-6">
                <div className="flex justify-center mb-4">
                  <Gift className="text-[#5f9ea0]" size={32} />
                </div>
                
                <h3 className="font-playfair font-semibold text-xl mb-2 text-center">R$ 28</h3>
                <h4 className="font-sans text-lg mb-4 text-center">Preciso de um Pequeno Apoio</h4>
                
                <p className="text-sm mb-6 text-center italic">
                  "Por favor, levem minha oração até Lourdes. No momento, não consigo arcar com o valor completo, mas desejo participar deste ato sagrado."
                </p>
                
                <Button 
                  className="w-full bg-[#5f9ea0] hover:bg-[#4e8a8c] text-white"
                >
                  Incluir minha oração por R$28
                </Button>
                
                <p className="text-xs mt-3 text-center text-gray-500">
                  É uma honra incluir sua oração.
                </p>
              </CardContent>
            </Card>
            
            {/* Option 2 */}
            <Card className="border-[#5f9ea0] shadow-lg hover:shadow-xl transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#5f9ea0] text-white text-xs py-1 px-3 rounded-bl-lg">
                Recomendado
              </div>
              <CardContent className="pt-6 px-4 pb-6">
                <div className="flex justify-center mb-4">
                  <HeartPulse className="text-[#5f9ea0]" size={32} />
                </div>
                
                <h3 className="font-playfair font-semibold text-xl mb-2 text-center">R$ 35</h3>
                <h4 className="font-sans text-lg mb-4 text-center">Custo Real da Entrega</h4>
                
                <p className="text-sm mb-6 text-center italic">
                  "Estou cobrindo o custo total para levar minha oração à Gruta. Obrigado por tornar isso possível."
                </p>
                
                <Button 
                  className="w-full bg-[#5f9ea0] hover:bg-[#4e8a8c] text-white"
                >
                  Entrega Completa da Oração por R$35
                </Button>
                
                <p className="text-xs mt-3 text-center text-gray-500">
                  Este é o custo real da missão de entrega.
                </p>
              </CardContent>
            </Card>
            
            {/* Option 3 */}
            <Card className="border-[#f4d58d] shadow-md hover:shadow-lg transition-all">
              <CardContent className="pt-6 px-4 pb-6">
                <div className="flex justify-center mb-4">
                  <Gift className="text-[#f4d58d]" size={32} />
                </div>
                
                <h3 className="font-playfair font-semibold text-xl mb-2 text-center">R$ 55</h3>
                <h4 className="font-sans text-lg mb-4 text-center">Leve Minha Oração + Apoie Outro Devoto</h4>
                
                <p className="text-sm mb-6 text-center italic">
                  "Quero contribuir um pouco mais para ajudar outra pessoa que talvez não possa. Que minha oração e minha doação tragam bênçãos a quem precisa."
                </p>
                
                <Button 
                  className="w-full bg-[#f4d58d] hover:bg-[#e3c47c] text-[#333333]"
                >
                  Enviar e Ajudar por R$55
                </Button>
                
                <p className="text-xs mt-3 text-center text-gray-500">
                  Obrigado por sua generosidade.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-lg font-playfair italic">
              "Levai as cargas uns dos outros e, assim, cumprireis a lei de Cristo."
            </p>
            <p className="text-sm">– Gálatas 6:2</p>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-10 px-4 bg-gray-100 text-sm">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center gap-6 mb-6">
            <Link to="/termos" className="text-[#5f9ea0] hover:underline">Termos e Condições</Link>
            <Link to="/privacidade" className="text-[#5f9ea0] hover:underline">Política de Privacidade</Link>
            <Link to="/contato" className="text-[#5f9ea0] hover:underline">Contato</Link>
          </div>
          
          <p className="text-xs text-center text-gray-500 max-w-2xl mx-auto">
            Aviso Legal: Voluntários de Lourdes fazem parte do MinistryofDevotions.org, dedicados à fé e ao serviço. Não somos representantes oficiais do Santuário de Lourdes. Todo conteúdo oferecido (e-mails, ebooks e materiais diversos) é para fins inspiracionais. Para questões médicas, legais ou psicológicas, procure profissionais qualificados. Use seu bom senso.
          </p>
          
          <div className="mt-8 text-center">
            <Button 
              asChild
              variant="outline"
              className="text-[#5f9ea0] border-[#5f9ea0] hover:bg-[#5f9ea0]/5"
            >
              <Link to="/">
                Voltar para a Página Inicial
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Confirmation;
