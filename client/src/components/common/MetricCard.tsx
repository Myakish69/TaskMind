import { Card } from "@/components/ui/card";
import { LucideIcon, Target, TrendingUp, DollarSign, BarChart, Percent } from "lucide-react";

interface MetricCardProps {
  label: string;
  value: string;
  unit: string;
  icon: string;
  className?: string;
}

const iconMap: Record<string, LucideIcon> = {
  target: Target,
  'trending-up': TrendingUp,
  'dollar-sign': DollarSign,
  'bar-chart': BarChart,
  percent: Percent
};

export default function MetricCard({ label, value, unit, icon, className = "" }: MetricCardProps) {
  const IconComponent = iconMap[icon] || Target;
  
  return (
    <Card className={`p-6 bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <IconComponent className="w-8 h-8 text-green-600" />
      </div>
      <div className="space-y-1">
        <p className="text-sm text-gray-600">{label}</p>
        <div className="flex items-baseline space-x-1">
          <span className="text-3xl font-bold text-gray-900">{value}</span>
          <span className="text-sm text-gray-500">{unit}</span>
        </div>
      </div>
    </Card>
  );
}