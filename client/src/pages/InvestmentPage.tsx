import PageLayout from "@/components/layout/PageLayout";
import SimpleChart from "@/components/charts/SimpleChart";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getInvestmentBreakdown } from "@/lib/businessData";
import { Target, TrendingUp, Shield, Rocket, Mail } from "lucide-react";

export default function InvestmentPage() {
  const investmentData = getInvestmentBreakdown();
  
  // Prepare pie chart data
  const pieData = investmentData.map(item => ({
    name: item.category,
    value: item.amount
  }));

  const totalInvestment = investmentData.reduce((sum, item) => sum + item.amount, 0);

  return (
    <PageLayout>
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Инвестиционное предложение</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Привлечение 700-800 тыс ₽ для запуска и масштабирования агентства по внедрению AI-решений
          </p>
        </div>

        {/* Investment Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="p-6 text-center">
            <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">800К</div>
            <div className="text-sm text-gray-600">Целевая сумма ₽</div>
          </Card>
          <Card className="p-6 text-center">
            <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">620%</div>
            <div className="text-sm text-gray-600">ROMI за год</div>
          </Card>
          <Card className="p-6 text-center">
            <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">9</div>
            <div className="text-sm text-gray-600">Месяцев окупаемости</div>
          </Card>
          <Card className="p-6 text-center">
            <Rocket className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">Seed</div>
            <div className="text-sm text-gray-600">Стадия раунда</div>
          </Card>
        </div>

        {/* Investment Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <SimpleChart
              data={pieData}
              type="pie"
              title="Распределение инвестиций"
              height={350}
            />
          </Card>
          
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Детальное распределение</h3>
            <div className="space-y-4">
              {investmentData.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.category}</h4>
                    <p className="text-sm text-gray-600">{item.percentage}% от общей суммы</p>
                  </div>
                  <div className="text-xl font-bold text-gray-900">
                    {(item.amount / 1000).toLocaleString('ru-RU')}К ₽
                  </div>
                </div>
              ))}
              <div className="border-t-2 border-gray-200 pt-4 mt-4">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900">Итого</span>
                  <span className="text-2xl font-bold text-green-600">
                    {(totalInvestment / 1000).toLocaleString('ru-RU')}К ₽
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Investment Rationale */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Почему инвестировать сейчас?</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Растущий рынок</h4>
                <p className="text-gray-600">Рынок AI для МСБ растет на 87% в год, достигнув 320 млрд ₽ в 2024 году</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Первопроходцы</h4>
                <p className="text-gray-600">Возможность занять лидирующие позиции в нише автоматизации для МСБ</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Проверенная модель</h4>
                <p className="text-gray-600">Финансовая модель основана на реальных проектах и рыночных данных</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Быстрая окупаемость</h4>
                <p className="text-gray-600">Выход на прибыль в 7-м месяце, положительный cash flow в 9-м</p>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Ожидаемые результаты</h3>
            <div className="space-y-6">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">6.3М ₽</div>
                <div className="text-sm text-gray-600">Выручка в первый год</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">42</div>
                <div className="text-sm text-gray-600">Клиента в первый год</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">75%</div>
                <div className="text-sm text-gray-600">Маржинальность бизнеса</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-3xl font-bold text-orange-600 mb-2">3-5x</div>
                <div className="text-sm text-gray-600">Потенциал роста на 2-3 год</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Risk Mitigation */}
        <Card className="p-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Снижение рисков</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900">Операционные риски</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium text-gray-900">Диверсификация подрядчиков</div>
                    <div className="text-sm text-gray-600">Пул из 5+ проверенных специалистов</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium text-gray-900">Стандартизация процессов</div>
                    <div className="text-sm text-gray-600">Готовые шаблоны и методики</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium text-gray-900">Юридическая защита</div>
                    <div className="text-sm text-gray-600">Детальные договоры с четкими рамками</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900">Финансовые риски</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium text-gray-900">Предоплата 50%</div>
                    <div className="text-sm text-gray-600">Снижение кассовых разрывов</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium text-gray-900">Консервативные прогнозы</div>
                    <div className="text-sm text-gray-600">Заложен запас 20% по доходам</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium text-gray-900">Многоканальный маркетинг</div>
                    <div className="text-sm text-gray-600">5+ источников лидов</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Call to Action */}
        <Card className="p-8 text-center bg-gradient-to-r from-green-50 to-blue-50">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Готовы присоединиться?</h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Станьте частью революции в автоматизации российского МСБ. 
            Свяжитесь с нами для обсуждения инвестиционных возможностей.
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            <Mail className="w-4 h-4 mr-2" />
            Связаться с нами
          </Button>
        </Card>
      </div>
    </PageLayout>
  );
}