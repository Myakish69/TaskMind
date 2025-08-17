import Layout from "@/components/Layout";
import FinancialTable from "@/components/FinancialTable";
import ComboChart from "@/components/charts/ComboChart";
import BarChart from "@/components/charts/BarChart";
import LineChart from "@/components/charts/LineChart";
import { Card, CardContent } from "@/components/ui/card";
import { getFinancialData, getKeyMetrics } from "@/lib/data";
import { formatCompactNumber } from "@/lib/format";

export default function Financials() {
  const financialData = getFinancialData();
  const metrics = getKeyMetrics();

  return (
    <Layout>
      <section className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Финансовая модель</h2>
            <p className="text-muted-foreground text-lg">
              12-месячный план с детализацией доходов, расходов и денежного потока
            </p>
          </div>

          {/* Financial Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary mb-1">
                  {metrics.yearRevenue} млн ₽
                </div>
                <div className="text-sm text-muted-foreground">Выручка за год</div>
              </CardContent>
            </Card>
            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-foreground mb-1">
                  {formatCompactNumber(metrics.finalCashFlow)}
                </div>
                <div className="text-sm text-muted-foreground">Cash-flow (12м)</div>
              </CardContent>
            </Card>
            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-foreground mb-1">
                  {metrics.profitMonth} месяц
                </div>
                <div className="text-sm text-muted-foreground">Первая прибыль</div>
              </CardContent>
            </Card>
            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-foreground mb-1">
                  {metrics.cashflowPositiveMonth} месяц
                </div>
                <div className="text-sm text-muted-foreground">Cash-flow+</div>
              </CardContent>
            </Card>
          </div>

          {/* Financial Chart */}
          <Card className="bg-background border-border mb-12">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6">Динамика доходов и расходов</h3>
              <div className="h-96">
                <ComboChart
                  data={financialData}
                  xAxisKey="month"
                  barKey="revenue"
                  lineKey="expenses"
                  barTitle="Доходы"
                  lineTitle="Расходы"
                  barUnit="₽"
                  lineUnit="₽"
                />
              </div>
            </CardContent>
          </Card>

          {/* Detailed Financial Table */}
          <FinancialTable data={financialData} />
        </div>
      </section>
    </Layout>
  );
}
