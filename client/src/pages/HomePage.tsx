import PageLayout from "@/components/layout/PageLayout";
import MetricCard from "@/components/common/MetricCard";
import SimpleChart from "@/components/charts/SimpleChart";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getKeyMetrics, getFinancialProjections, getMarketGrowth } from "@/lib/businessData";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function HomePage() {
  const metrics = getKeyMetrics();
  const financialData = getFinancialProjections();
  const marketData = getMarketGrowth();

  // Prepare chart data
  const revenueData = financialData.map(item => ({ month: item.month, value: item.revenue }));
  const profitData = financialData.map(item => ({ month: item.month, value: item.profit }));

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-br from-green-600 to-green-700 text-white rounded-2xl mb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">
            AI Automation для МСБ
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Инвестиционное предложение: 700-800 тыс ₽ для запуска агентства по внедрению AI-решений
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/investment">
              <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                Смотреть презентацию <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/financials">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Финансовая модель
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Ключевые показатели</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>
      </section>

      {/* Business Model Overview */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Бизнес-модель</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Консалтинг и аудит</h4>
                  <p className="text-gray-600">Анализ бизнес-процессов и выявление точек автоматизации</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Внедрение решений</h4>
                  <p className="text-gray-600">Разработка и настройка AI-систем на базе n8n</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Техническая поддержка</h4>
                  <p className="text-gray-600">Ежемесячное обслуживание и развитие систем</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Целевая аудитория</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Малый и средний бизнес</h4>
                  <p className="text-gray-600">Компании с выручкой 50-500 млн ₽ в год</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Ключевые отрасли</h4>
                  <p className="text-gray-600">E-commerce, услуги, производство, логистика</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">География</h4>
                  <p className="text-gray-600">Россия, СНГ с фокусом на Москву и регионы</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Financial Charts Preview */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Финансовые прогнозы</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <SimpleChart
              data={revenueData}
              type="bar"
              xKey="month"
              yKey="value"
              title="Выручка по месяцам"
              height={300}
            />
          </Card>
          <Card className="p-6">
            <SimpleChart
              data={profitData}
              type="line"
              xKey="month"
              yKey="value"
              title="Прибыль по месяцам"
              height={300}
            />
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-gray-100 rounded-2xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Готовы инвестировать в будущее?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Присоединяйтесь к нам в создании лидирующего агентства по внедрению AI-решений для российского МСБ
        </p>
        <Link href="/investment">
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            Изучить инвестиционное предложение <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </section>
    </PageLayout>
  );
}