import PageLayout from "@/components/layout/PageLayout";
import SimpleChart from "@/components/charts/SimpleChart";
import { Card } from "@/components/ui/card";
import { getMarketGrowth } from "@/lib/businessData";
import { TrendingUp, Users, Globe, Zap } from "lucide-react";

export default function MarketPage() {
  const marketData = getMarketGrowth();
  
  const marketSizeData = marketData.map(item => ({ year: item.year, value: item.marketSize }));
  const adoptionData = marketData.map(item => ({ year: item.year, value: item.adoption }));

  return (
    <PageLayout>
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Анализ рынка</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Российский рынок AI и автоматизации для МСБ показывает устойчивый рост с огромным потенциалом
          </p>
        </div>

        {/* Market Size Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="p-6 text-center">
            <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">320</div>
            <div className="text-sm text-gray-600">млрд ₽ рынок 2024</div>
          </Card>
          <Card className="p-6 text-center">
            <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">600</div>
            <div className="text-sm text-gray-600">млрд ₽ прогноз 2025</div>
          </Card>
          <Card className="p-6 text-center">
            <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">25%</div>
            <div className="text-sm text-gray-600">текущее проникновение</div>
          </Card>
          <Card className="p-6 text-center">
            <Zap className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">87%</div>
            <div className="text-sm text-gray-600">годовой рост</div>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <SimpleChart
              data={marketSizeData}
              type="bar"
              xKey="year"
              yKey="value"
              title="Размер рынка (млрд ₽)"
              height={350}
            />
          </Card>
          <Card className="p-6">
            <SimpleChart
              data={adoptionData}
              type="line"
              xKey="year"
              yKey="value"
              title="Проникновение AI в МСБ (%)"
              height={350}
            />
          </Card>
        </div>

        {/* Market Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Драйверы роста</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Цифровизация экономики</h4>
                <p className="text-gray-600">Государственная поддержка и инициативы по цифровой трансформации бизнеса</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Нехватка кадров</h4>
                <p className="text-gray-600">Дефицит IT-специалистов заставляет компании искать автоматизированные решения</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Доступность технологий</h4>
                <p className="text-gray-600">Развитие no-code/low-code платформ делает AI доступным для МСБ</p>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Конкурентная среда</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-gray-900">Крупные интеграторы</h4>
                  <p className="text-sm text-gray-600">Высокие цены, долгие циклы</p>
                </div>
                <div className="text-sm font-semibold text-red-600">Слабые стороны</div>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-gray-900">Фрилансеры</h4>
                  <p className="text-sm text-gray-600">Нет системности, низкое качество</p>
                </div>
                <div className="text-sm font-semibold text-red-600">Слабые стороны</div>
              </div>
              <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border border-green-200">
                <div>
                  <h4 className="font-semibold text-gray-900">Наша ниша</h4>
                  <p className="text-sm text-gray-600">Специализация, скорость, доступность</p>
                </div>
                <div className="text-sm font-semibold text-green-600">Возможность</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Market Segments */}
        <Card className="p-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Сегменты рынка по отраслям</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">E-commerce</div>
              <div className="text-sm text-gray-600 mb-4">45% рынка</div>
              <p className="text-sm text-gray-700">Автоматизация обработки заказов, управление складом, клиентский сервис</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">Услуги</div>
              <div className="text-sm text-gray-600 mb-4">30% рынка</div>
              <p className="text-sm text-gray-700">CRM, планирование ресурсов, финансовая отчетность</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">Производство</div>
              <div className="text-sm text-gray-600 mb-4">25% рынка</div>
              <p className="text-sm text-gray-700">Управление производством, контроль качества, логистика</p>
            </div>
          </div>
        </Card>
      </div>
    </PageLayout>
  );
}