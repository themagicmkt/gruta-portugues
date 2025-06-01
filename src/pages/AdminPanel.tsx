import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Card, CardContent } from "@/components/ui/card";

const AdminPanel = () => {
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPedidos = async () => {
      const { data, error } = await supabase
        .from("pedidos_oracao")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Erro ao buscar pedidos:", error.message);
      } else {
        setPedidos(data || []);
      }

      setLoading(false);
    };

    fetchPedidos();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6">📋 Painel de Pedidos de Oração</h1>
      {loading ? (
        <p>Carregando pedidos...</p>
      ) : pedidos.length === 0 ? (
        <p>Nenhum pedido encontrado.</p>
      ) : (
        <div className="space-y-4">
          {pedidos.map((pedido) => (
            <Card key={pedido.id} className="border bg-white">
              <CardContent className="p-4">
                <p className="text-sm text-gray-600">
                  📅 {new Date(pedido.created_at).toLocaleString()}
                </p>
                <h2 className="text-lg font-semibold">{pedido.name}</h2>
                <p className="text-sm text-gray-700 mb-2">{pedido.email}</p>
                <p className="text-gray-900 whitespace-pre-wrap">{pedido.prayer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminPanel;