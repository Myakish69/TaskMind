import Layout from "@/components/Layout";
import MetricCard from "@/components/MetricCard";
import { Target, TrendingUp, DollarSign, BarChart3, Users } from "lucide-react";
import { getKeyMetrics } from "@/lib/data";

export default function Home() {
  const metrics = getKeyMetrics();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              Внедрение AI для МСБ{" "}
              <span className="text-primary">в России</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Инвестиции 700-800 тыс ₽ • Выход на прибыль с 7-го месяца • 
              Положительный cash-flow в 9-м месяце • ROMI ~620%
            </p>
          </div>
          
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <MetricCard
              icon={Target}
              label="Раунд инвестиций"
              value={metrics.investmentRound}
              unit="тыс ₽"
            />
            <MetricCard
              icon={TrendingUp}
              label="Прибыль с месяца"
              value={metrics.profitMonth.toString()}
              unit="месяц"
            />
            <MetricCard
              icon={DollarSign}
              label="Cash-flow+"
              value={metrics.cashflowPositiveMonth.toString()}
              unit="месяц"
            />
            <MetricCard
              icon={BarChart3}
              label="Выручка за год"
              value={metrics.yearRevenue}
              unit="млн ₽"
            />
            <MetricCard
              icon={Users}
              label="Клиентов в год"
              value={metrics.clientsTotal.toString()}
              unit="компаний"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
