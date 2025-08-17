import PageLayout from "@/components/layout/PageLayout";
import SimpleChart from "@/components/charts/SimpleChart";
import { Card } from "@/components/ui/card";
import { getMarketingMetrics } from "@/lib/businessData";
import { Users, Target, TrendingUp, DollarSign } from "lucide-react";

export default function MarketingPage() {
  const marketingData = getMarketingMetrics();
  
  // Prepare chart data
  const budgetData = marketingData.map(item => ({ month: item.month, value: item.budget }));
  const leadsData = marketingData.map(item => ({ month: item.month, value: item.leads }));
  const clientsData = marketingData.map(item => ({ month: item.month, value: item.clients }));
  const romiData = marketingData.map(item => ({ month: item.month, value: item.romi }));

  // Calculate totals
  const totalBudget = marketingData.reduce((sum, item) => sum + item.budget, 0);
  const totalLeads = marketingData.reduce((sum, item) => sum + item.leads, 0);
  const totalClients = marketingData.reduce((sum, item) => sum + item.clients, 0);
  const avgROI = marketingData.reduce((sum, item) => sum + item.romi, 0) / marketingData.length;

  return (
    <PageLayout>
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Маркетинговая стратегия</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Комплексный план привлечения клиентов с ROMI 620% и стоимостью лида от 578 ₽
          </p>
        </div>

        {/* Marketing KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="p-6 text-center">
            <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">
              {(totalBudget / 1000).toLocaleString('ru-RU')}К
            </div>
            <div className="text-sm text-gray-600">Бюджет за год ₽</div>
          </Card>
          <Card className="p-6 text-center">
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">{totalLeads}</div>
            <div className="text-sm text-gray-600">Лидов за год</div>
          </Card>
          <Card className="p-6 text-center">
            <Target className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">{totalClients}</div>
            <div className="text-sm text-gray-600">Клиентов за год</div>
          </Card>
          <Card className="p-6 text-center">
            <TrendingUp className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">{Math.round(avgROI)}%</div>
            <div className="text-sm text-gray-600">Средний ROMI</div>
          </Card>
        </div>

        {/* Marketing Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <SimpleChart
              data={budgetData}
              type="bar"
              xKey="month"
              yKey="value"
              title="Маркетинговый бюджет по месяцам"
              height={350}
            />
          </Card>
          <Card className="p-6">
            <SimpleChart
              data={leadsData}
              type="line"
              xKey="month"
              yKey="value"
              title="Количество лидов"
              height={350}
            />
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <SimpleChart
              data={clientsData}
              type="bar"
              xKey="month"
              yKey="value"
              title="Конверсия в клиентов"
              height={350}
            />
          </Card>
          <Card className="p-6">
            <SimpleChart
              data={romiData}
              type="line"
              xKey="month"
              yKey="value"
              title="ROMI по месяцам (%)"
              height={350}
            />
          </Card>
        </div>

        {/* Marketing Channels */}
        <Card className="p-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Каналы привлечения</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-blue-50 rounded-lg">
              <h4 className="text-xl font-semibold text-blue-600 mb-4">Контекстная реклама</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Доля бюджета:</span>
                  <span className="font-semibold">40%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">CPL:</span>
                  <span className="font-semibold">800-1200 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Конверсия:</span>
                  <span className="font-semibold">8-12%</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">Yandex Direct, Google Ads по ключевым запросам</p>
            </div>

            <div className="p-6 bg-green-50 rounded-lg">
              <h4 className="text-xl font-semibold text-green-600 mb-4">Content Marketing</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Доля бюджета:</span>
                  <span className="font-semibold">30%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">CPL:</span>
                  <span className="font-semibold">500-800 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Конверсия:</span>
                  <span className="font-semibold">15-20%</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">Блог, кейсы, вебинары, экспертные статьи</p>
            </div>

            <div className="p-6 bg-purple-50 rounded-lg">
              <h4 className="text-xl font-semibold text-purple-600 mb-4">Networking</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Доля бюджета:</span>
                  <span className="font-semibold">30%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">CPL:</span>
                  <span className="font-semibold">400-600 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Конверсия:</span>
                  <span className="font-semibold">25-35%</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">Конференции, meetup'ы, партнерские программы</p>
            </div>
          </div>
        </Card>

        {/* Customer Journey */}
        <Card className="p-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Воронка продаж</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1000</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Показы</h4>
              <p className="text-sm text-gray-600">Реклама и контент</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">100</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Лиды</h4>
              <p className="text-sm text-gray-600">Заявки на аудит</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">30</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Встречи</h4>
              <p className="text-sm text-gray-600">Консультации</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">15</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Аудиты</h4>
              <p className="text-sm text-gray-600">Оплаченные</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">9</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Внедрения</h4>
              <p className="text-sm text-gray-600">Основные проекты</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-600">
              <span className="font-semibold text-gray-900">Общая конверсия:</span> 0.9% в клиентов • 
              <span className="font-semibold text-gray-900"> LTV:</span> 430K ₽ • 
              <span className="font-semibold text-gray-900"> CAC:</span> 12-40K ₽
            </p>
          </div>
        </Card>

        {/* Marketing Timeline */}
        <Card className="p-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">План развития маркетинга</h3>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-green-600">Q1</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Запуск и тестирование</h4>
                <p className="text-gray-600">Настройка контекстной рекламы, создание первых кейсов, запуск блога</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-blue-600">Q2</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Масштабирование</h4>
                <p className="text-gray-600">Увеличение бюджетов, запуск content-маркетинга, первые партнерства</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-purple-600">Q3</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Оптимизация</h4>
                <p className="text-gray-600">Анализ и перераспределение бюджетов, автоматизация процессов продаж</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-orange-600">Q4</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Экспансия</h4>
                <p className="text-gray-600">Выход в регионы, запуск партнерской программы, PR-активности</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </PageLayout>
  );
}