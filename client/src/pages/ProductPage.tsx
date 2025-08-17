import PageLayout from "@/components/layout/PageLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getProductMatrix, getCaseStudy } from "@/lib/businessData";
import { CheckCircle, Clock, Award, Zap } from "lucide-react";

export default function ProductPage() {
  const productMatrix = getProductMatrix();
  const caseStudy = getCaseStudy();

  const groupedProducts = productMatrix.reduce((acc, product) => {
    if (!acc[product.type]) acc[product.type] = [];
    acc[product.type].push(product);
    return acc;
  }, {} as Record<string, typeof productMatrix>);

  return (
    <PageLayout>
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Продуктовая линейка</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Комплексные решения по автоматизации бизнес-процессов на базе n8n платформы
          </p>
        </div>

        {/* Service Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(groupedProducts).map(([type, products]) => (
            <Card key={type} className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">{type}</h3>
              <div className="space-y-4">
                {products.map((product, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-lg font-semibold text-gray-900">{product.name}</h4>
                      <Badge variant="outline" className="text-green-600 border-green-200">
                        {(product.price / 1000).toLocaleString('ru-RU')}К ₽
                      </Badge>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{product.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Service Process */}
        <Card className="p-8">
          <h3 className="text-2xl font-bold mb-8 text-gray-900 text-center">Процесс работы</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Аудит</h4>
              <p className="text-sm text-gray-600">Анализ текущих процессов и выявление точек автоматизации</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Проектирование</h4>
              <p className="text-sm text-gray-600">Разработка архитектуры решения и технических требований</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Внедрение</h4>
              <p className="text-sm text-gray-600">Настройка и интеграция системы автоматизации</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Поддержка</h4>
              <p className="text-sm text-gray-600">Техническое обслуживание и развитие системы</p>
            </div>
          </div>
        </Card>

        {/* Technology Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Технологический стек</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Zap className="w-6 h-6 text-green-600" />
                <div>
                  <div className="font-semibold text-gray-900">n8n Platform</div>
                  <div className="text-sm text-gray-600">Основа для создания автоматизации</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                <div>
                  <div className="font-semibold text-gray-900">API Интеграции</div>
                  <div className="text-sm text-gray-600">Подключение к CRM, 1C, банкам, маркетплейсам</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="w-6 h-6 text-purple-600" />
                <div>
                  <div className="font-semibold text-gray-900">Облачные решения</div>
                  <div className="text-sm text-gray-600">Развертывание в VPS или облачных платформах</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-orange-600" />
                <div>
                  <div className="font-semibold text-gray-900">Мониторинг 24/7</div>
                  <div className="text-sm text-gray-600">Отслеживание работы и уведомления об ошибках</div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Преимущества n8n</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-1">Низкая стоимость</h4>
                <p className="text-sm text-gray-600">Self-hosted решение без лицензионных платежей</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-1">Гибкость</h4>
                <p className="text-sm text-gray-600">Возможность создания любых интеграций</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-1">Скорость внедрения</h4>
                <p className="text-sm text-gray-600">В 2-3 раза быстрее традиционной разработки</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-1">Масштабируемость</h4>
                <p className="text-sm text-gray-600">От простых задач до сложных бизнес-процессов</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Case Study */}
        <Card className="p-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Кейс клиента</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">{caseStudy.company}</h4>
              <div className="space-y-4">
                <div>
                  <span className="text-sm font-medium text-gray-500">Отрасль:</span>
                  <p className="text-gray-900">{caseStudy.industry}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Проблема:</span>
                  <p className="text-gray-900">{caseStudy.problem}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Решение:</span>
                  <p className="text-gray-900">{caseStudy.solution}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Сроки:</span>
                  <p className="text-gray-900">{caseStudy.timeline}</p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Результаты</h4>
              <div className="space-y-3">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-900">{result}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <span className="text-sm font-medium text-gray-500">Технологии:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {caseStudy.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </PageLayout>
  );
}