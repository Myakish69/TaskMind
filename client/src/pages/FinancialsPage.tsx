import PageLayout from "@/components/layout/PageLayout";
import SimpleChart from "@/components/charts/SimpleChart";
import { Card } from "@/components/ui/card";
import { getFinancialProjections, getKeyMetrics } from "@/lib/businessData";
import { TrendingUp, DollarSign, PiggyBank, Target } from "lucide-react";

export default function FinancialsPage() {
  const financialData = getFinancialProjections();
  const keyMetrics = getKeyMetrics();
  
  // Prepare different chart datasets
  const revenueData = financialData.map(item => ({ month: item.month, value: item.revenue }));
  const profitData = financialData.map(item => ({ month: item.month, value: item.profit }));
  const cashFlowData = financialData.map(item => ({ month: item.month, value: item.cashFlow }));
  const expensesData = financialData.map(item => ({ month: item.month, value: item.expenses }));

  // Calculate key metrics
  const totalRevenue = financialData.reduce((sum, item) => sum + item.revenue, 0);
  const finalProfit = financialData[financialData.length - 1].profit;
  const breakEvenMonth = financialData.findIndex(item => item.profit > 0) + 1;
  const positiveFlowMonth = Number(
    keyMetrics.find((m) => m.label === "Положительный Cash Flow")?.value ?? 0
  );
  return (
    <PageLayout>
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Финансовая модель</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            12-месячный прогноз с выходом на прибыль в 7-м месяце и положительным cash flow в 9-м месяце
          </p>
        </div>

        {/* Key Financial Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="p-6 text-center">
            <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">
              {(totalRevenue / 1000000).toFixed(1)}М
            </div>
            <div className="text-sm text-gray-600">Выручка за год</div>
          </Card>
          <Card className="p-6 text-center">
            <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">{breakEvenMonth}</div>
            <div className="text-sm text-gray-600">Месяц выхода на прибыль</div>
          </Card>
          <Card className="p-6 text-center">
            <PiggyBank className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">{positiveFlowMonth}</div>
            <div className="text-sm text-gray-600">Положительный Cash Flow</div>
          </Card>
          <Card className="p-6 text-center">
            <Target className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">
              {(finalProfit / 1000).toFixed(0)}К
            </div>
            <div className="text-sm text-gray-600">Прибыль в декабре</div>
          </Card>
        </div>

        {/* Main Financial Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <SimpleChart
              data={revenueData}
              type="bar"
              xKey="month"
              yKey="value"
              title="Выручка по месяцам"
              height={350}
            />
          </Card>
          <Card className="p-6">
            <SimpleChart
              data={profitData}
              type="line"
              xKey="month"
              yKey="value"
              title="Чистая прибыль"
              height={350}
            />
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <SimpleChart
              data={cashFlowData}
              type="line"
              xKey="month"
              yKey="value"
              title="Накопленный Cash Flow"
              height={350}
            />
          </Card>
          <Card className="p-6">
            <SimpleChart
              data={expensesData}
              type="bar"
              xKey="month"
              yKey="value"
              title="Операционные расходы"
              height={350}
            />
          </Card>
        </div>

        {/* Financial Details Table */}
        <Card className="p-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Детальный прогноз по месяцам</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Месяц</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-900">Выручка</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-900">Расходы</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-900">Прибыль</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-900">Cash Flow</th>
                </tr>
              </thead>
              <tbody>
                {financialData.map((item) => (
                  <tr key={item.month} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{item.month}</td>
                    <td className="py-3 px-4 text-right">
                      {(item.revenue / 1000).toLocaleString('ru-RU')} К
                    </td>
                    <td className="py-3 px-4 text-right">
                      {(item.expenses / 1000).toLocaleString('ru-RU')} К
                    </td>
                    <td className={`py-3 px-4 text-right font-semibold ${
                      item.profit >= 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {(item.profit / 1000).toLocaleString('ru-RU')} К
                    </td>
                    <td className={`py-3 px-4 text-right font-semibold ${
                      item.cashFlow >= 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {(item.cashFlow / 1000).toLocaleString('ru-RU')} К
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Key Assumptions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Основные предположения</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-700">Средний чек аудита</span>
                <span className="font-semibold">60 000 ₽</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-700">Средний чек внедрения</span>
                <span className="font-semibold">190 000 ₽</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-700">Конверсия аудит → внедрение</span>
                <span className="font-semibold">60%</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-700">Ежемесячная поддержка</span>
                <span className="font-semibold">13 500 ₽</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-700">Маржинальность</span>
                <span className="font-semibold text-green-600">75%</span>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Структура расходов</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-700">ФОТ основателя</span>
                <span className="font-semibold">200 000 ₽/мес</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-700">Маркетинг</span>
                <span className="font-semibold">40-135 К/мес</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-700">Внешние подрядчики</span>
                <span className="font-semibold">50% от проектов</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-700">Операционные расходы</span>
                <span className="font-semibold">20 000 ₽/мес</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-700">Налоги (УСН 6%)</span>
                <span className="font-semibold">6% с оборота</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
}
