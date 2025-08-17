import { Card, CardContent } from "@/components/ui/card";
import { RiskItem } from "@shared/schema";
import { AlertTriangle, TrendingDown, Clock, Target } from "lucide-react";

interface RiskMatrixProps {
  data: RiskItem[];
}

const getRiskIcon = (index: number) => {
  const icons = [AlertTriangle, TrendingDown, Clock, Target];
  return icons[index % icons.length];
};

const getRiskColor = (index: number) => {
  const colors = ['text-red-400', 'text-orange-400', 'text-yellow-400', 'text-blue-400'];
  return colors[index % colors.length];
};

export default function RiskMatrix({ data }: RiskMatrixProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {data.map((risk, index) => {
        const Icon = getRiskIcon(index);
        const colorClass = getRiskColor(index);
        
        return (
          <Card key={index} className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-start mb-4">
                <Icon className={`w-6 h-6 ${colorClass} mr-4 mt-1`} />
                <div>
                  <h3 className={`text-lg font-semibold ${colorClass} mb-2`}>
                    {risk.risk}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {risk.risk === "Зависимость от почасового специалиста" && 
                      "Привлечение технических специалистов на почасовой основе создает риск срыва сроков"}
                    {risk.risk === "'Ползучесть рамок' проекта (Scope Creep)" && 
                      "Расширение рамок проекта без дополнительной оплаты"}
                    {risk.risk === "Длинный цикл сделки и задержки оплат" && 
                      "Задержки в принятии решений и оплате со стороны клиентов"}
                    {risk.risk === "Низкая эффективность маркетинга" && 
                      "Низкая конверсия рекламных каналов может увеличить CPL и CAC"}
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-medium text-primary mb-2">Митигация:</h4>
                    <p className="text-sm text-muted-foreground">{risk.mitigation}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
