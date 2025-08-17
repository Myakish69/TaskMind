import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  unit: string;
  className?: string;
}

export default function MetricCard({ icon: Icon, label, value, unit, className }: MetricCardProps) {
  return (
    <Card className={cn("metric-card bg-card/50 border-border hover:bg-card/70 transition-all duration-300", className)}>
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <Icon className="w-6 h-6 text-primary mr-3" />
          <span className="text-sm text-muted-foreground">{label}</span>
        </div>
        <div className="text-3xl font-bold text-foreground">{value}</div>
        <div className="text-sm text-muted-foreground mt-1">{unit}</div>
      </CardContent>
    </Card>
  );
}
