
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Confirmation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex items-center justify-center py-12 px-4">
      <Card className="max-w-md w-full border-[#5f9ea0]/30 shadow-lg">
        <CardContent className="pt-8 px-8 pb-8 flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-[#5f9ea0]/10 rounded-full flex items-center justify-center mb-6">
            <Check className="text-[#5f9ea0]" size={40} />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-playfair font-semibold mb-4 text-[#333333]">
            Oração Recebida com Sucesso!
          </h2>
          
          <p className="text-lg mb-6">
            Sua oração será levada à Gruta de Lourdes em nossa próxima peregrinação.
          </p>
          
          <p className="mb-8 text-[#5f9ea0]">
            Você receberá um e-mail com fotos quando sua oração for entregue.
          </p>
          
          <Button 
            asChild
            className="bg-[#5f9ea0] hover:bg-[#4e8a8c] text-white px-6 py-2 rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
          >
            <Link to="/">
              Voltar para a Página Inicial
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Confirmation;
