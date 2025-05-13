
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Checkbox } from "@/components/ui/checkbox";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface OrderBumpPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const OrderBumpPopup = ({ open, onOpenChange }: OrderBumpPopupProps) => {
  const [includeCandle, setIncludeCandle] = useState(false);

  const handleContinue = () => {
    // Redirect based on checkbox state
    if (includeCandle) {
      window.location.href = "https://voluntariosdelourdes.online/checkout-com-vela";
    } else {
      window.location.href = "https://voluntariosdelourdes.online/checkout-sem-vela";
    }
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white rounded-xl p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-playfair font-semibold text-[#333333]">
            Gostaria de adicionar uma vela à sua oração?
          </h2>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => onOpenChange(false)}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Fechar</span>
          </Button>
        </div>
        
        <div className="mb-6">
          <AspectRatio ratio={16/9} className="bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="/img03.webp"
              alt="Vela de oração"
              className="w-full h-full object-cover"
            />
          </AspectRatio>
        </div>
        
        <div className="flex items-start space-x-3 mb-6">
          <Checkbox 
            id="include-candle" 
            checked={includeCandle}
            onCheckedChange={(checked) => setIncludeCandle(checked === true)}
            className="mt-1"
          />
          <label 
            htmlFor="include-candle" 
            className="text-lg cursor-pointer"
          >
            Sim, desejo incluir a vela por apenas R$8.
          </label>
        </div>
        
        <Button 
          onClick={handleContinue} 
          className="w-full bg-[#5f9ea0] hover:bg-[#4e8a8c] text-white px-4 py-2 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all"
        >
          Continuar
        </Button>
      </DialogContent>
    </Dialog>
  );
};
