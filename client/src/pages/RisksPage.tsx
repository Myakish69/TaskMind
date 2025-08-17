import PageLayout from "@/components/layout/PageLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getRiskAssessment } from "@/lib/businessData";
import { AlertTriangle, Shield, TrendingDown, CheckCircle } from "lucide-react";

export default function RisksPage() {
  const risks = getRiskAssessment();

  const getProbabilityColor = (probability: string) => {
    switch (probability.toLowerCase()) {
      case 'высокая': return 'bg-red-100 text-red-800';
      case 'средняя': return 'bg-yellow-100 text-yellow-800';
      case 'низкая': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact.toLowerCase()) {
      case 'высокий': return 'bg-red-100 text-red-800';
      case 'средний': return 'bg-yellow-100 text-yellow-800';
      case 'низкий': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <PageLayout>
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Анализ рисков</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Комплексная оценка потенциальных рисков и стратегии их минимизации
          </p>
        </div>

        {/* Risk Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="p-6 text-center">
            <AlertTriangle className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">4</div>
            <div className="text-sm text-gray-600">Основных риска</div>
          </Card>
          <Card className="p-6 text-center">
            <TrendingDown className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">Средний</div>
            <div className="text-sm text-gray-600">Уровень рисков</div>
          </Card>
          <Card className="p-6 text-center">
            <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">85%</div>
            <div className="text-sm text-gray-600">Покрытие мерами</div>
          </Card>
          <Card className="p-6 text-center">
            <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">20%</div>
            <div className="text-sm text-gray-600">Резерв средств</div>
          </Card>
        </div>

        {/* Risk Assessment Table */}
        <Card className="p-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Детальная оценка рисков</h3>
          <div className="space-y-6">
            {risks.map((risk, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{risk.risk}</h4>
                  </div>
                  <div className="flex gap-2">
                    <Badge className={getProbabilityColor(risk.probability)}>
                      {risk.probability} вероятность
                    </Badge>
                    <Badge className={getImpactColor(risk.impact)}>
                      {risk.impact} влияние
                    </Badge>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h5 className="font-medium text-gray-900 mb-2">Меры по снижению:</h5>
                  <p className="text-gray-700">{risk.mitigation}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Risk Mitigation Strategy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Превентивные меры</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Диверсификация подрядчиков</h4>
                  <p className="text-gray-600 text-sm">Создание пула из 5+ проверенных специалистов</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Стандартизация процессов</h4>
                  <p className="text-gray-600 text-sm">Детализированные договоры и техзадания</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Финансовая подушка</h4>
                  <p className="text-gray-600 text-sm">Резерв 20% от привлекаемых инвестиций</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Предоплата 50%</h4>
                  <p className="text-gray-600 text-sm">Снижение кассовых разрывов</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Мониторинг рисков</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-1">Еженедельный контроль</h4>
                <p className="text-sm text-gray-600">Отслеживание KPI маркетинга и продаж</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-1">Ежемесячная отчетность</h4>
                <p className="text-sm text-gray-600">P&L, cash flow, план vs факт</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-1">Квартальный ретро</h4>
                <p className="text-sm text-gray-600">Анализ рисков и корректировка стратегии</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-1">Сценарное планирование</h4>
                <p className="text-sm text-gray-600">3 сценария: оптимистичный, базовый, пессимистичный</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Scenario Analysis */}
        <Card className="p-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Сценарный анализ</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Параметр</th>
                  <th className="text-center py-3 px-4 font-semibold text-green-600">Оптимистичный</th>
                  <th className="text-center py-3 px-4 font-semibold text-blue-600">Базовый</th>
                  <th className="text-center py-3 px-4 font-semibold text-red-600">Пессимистичный</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium">Выручка за год</td>
                  <td className="py-3 px-4 text-center text-green-600">8.2М ₽</td>
                  <td className="py-3 px-4 text-center text-blue-600">6.3М ₽</td>
                  <td className="py-3 px-4 text-center text-red-600">4.1М ₽</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium">Выход на прибыль</td>
                  <td className="py-3 px-4 text-center text-green-600">5 месяц</td>
                  <td className="py-3 px-4 text-center text-blue-600">7 месяц</td>
                  <td className="py-3 px-4 text-center text-red-600">10 месяц</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium">Cash Flow+</td>
                  <td className="py-3 px-4 text-center text-green-600">7 месяц</td>
                  <td className="py-3 px-4 text-center text-blue-600">9 месяц</td>
                  <td className="py-3 px-4 text-center text-red-600">12 месяц</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium">Потребность в средствах</td>
                  <td className="py-3 px-4 text-center text-green-600">600К ₽</td>
                  <td className="py-3 px-4 text-center text-blue-600">800К ₽</td>
                  <td className="py-3 px-4 text-center text-red-600">1.2М ₽</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">ROMI</td>
                  <td className="py-3 px-4 text-center text-green-600">950%</td>
                  <td className="py-3 px-4 text-center text-blue-600">620%</td>
                  <td className="py-3 px-4 text-center text-red-600">280%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        {/* Risk Response Plan */}
        <Card className="p-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">План реагирования на риски</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-red-50 rounded-lg border border-red-200">
              <h4 className="text-lg font-semibold text-red-800 mb-4">Критические риски</h4>
              <div className="space-y-2">
                <p className="text-sm text-red-700">• Немедленная эскалация руководству</p>
                <p className="text-sm text-red-700">• Активация плана B в течение 24 часов</p>
                <p className="text-sm text-red-700">• Привлечение дополнительных ресурсов</p>
                <p className="text-sm text-red-700">• Информирование инвесторов</p>
              </div>
            </div>
            
            <div className="p-6 bg-yellow-50 rounded-lg border border-yellow-200">
              <h4 className="text-lg font-semibold text-yellow-800 mb-4">Значимые риски</h4>
              <div className="space-y-2">
                <p className="text-sm text-yellow-700">• Анализ причин в течение недели</p>
                <p className="text-sm text-yellow-700">• Корректировка процессов</p>
                <p className="text-sm text-yellow-700">• Усиление контрольных точек</p>
                <p className="text-sm text-yellow-700">• Отчет в месячном отчете</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </PageLayout>
  );
}