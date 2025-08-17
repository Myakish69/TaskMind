import Layout from "@/components/Layout";
import PieChart from "@/components/charts/PieChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getInvestmentBreakdown, getKeyMetrics } from "@/lib/data";
import { formatCurrency } from "@/lib/format";
import * as LucideIcons from "lucide-react";

export default function Investment() {
  const investmentData = getInvestmentBreakdown();
  const metrics = getKeyMetrics();

  // Transform data for pie chart
  const pieChartData = investmentData.map(item => ({
    name: item.item,
    value: item.amount
  }));

  const totalInvestment = investmentData.reduce((sum, item) => sum + item.amount, 0);

  return (
    <Layout>
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Инвестиционное предложение</h2>
            <p className="text-muted-foreground text-lg">
              Привлечение 700-800 тыс ₽ для запуска и масштабирования агентства
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Investment Breakdown */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Распределение инвестиций</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {investmentData.map((item, index) => {
                    const IconComponent = (LucideIcons as any)[item.icon.charAt(0).toUpperCase() + item.icon.slice(1)];
                    return (
                      <div key={index} className="flex justify-between items-center py-3 border-b border-border">
                        <div className="flex items-center">
                          {IconComponent && <IconComponent className="w-5 h-5 text-primary mr-3" />}
                          <span>{item.item}</span>
                        </div>
                        <span className="font-mono">{formatCurrency(item.amount)}</span>
                      </div>
                    );
                  })}
                  <div className="flex justify-between items-center py-4 border-t-2 border-primary text-xl font-bold">
                    <span>ИТОГО</span>
                    <span className="font-mono text-primary">{formatCurrency(totalInvestment)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Investment Highlights */}
            <div className="space-y-8">
              <Card className="bg-gradient-to-br from-primary/20 to-primary/10 border-primary/30">
                <CardHeader>
                  <CardTitle className="text-primary">Ключевые показатели</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Раунд инвестиций:</span>
                      <span className="font-bold text-foreground">{metrics.investmentRound} тыс ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Первая прибыль:</span>
                      <span className="font-bold text-foreground">{metrics.profitMonth} месяц</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Positive cash-flow:</span>
                      <span className="font-bold text-foreground">{metrics.cashflowPositiveMonth} месяц</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Выручка за год:</span>
                      <span className="font-bold text-primary">{metrics.yearRevenue} млн ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">ROMI маркетинга:</span>
                      <span className="font-bold text-primary">{metrics.romi}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Investment Pie Chart */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Структура инвестиций</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <PieChart data={pieChartData} />
                  </div>
                </CardContent>
              </Card>

              {/* CTA Button */}
              <div className="text-center">
                <Button className="bg-primary hover:bg-primary/90 px-8 py-4 text-lg font-semibold">
                  Обсудить инвестиции
                </Button>
                <p className="text-muted-foreground text-sm mt-3">
                  Готовы предоставить подробный pitch deck и финансовую модель
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
