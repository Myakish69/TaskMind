// Business data with proper typing and validation
export interface MetricData {
  label: string;
  value: string;
  unit: string;
  icon: string;
}

export interface ChartDataPoint {
  month?: number;
  year?: number;
  value: number;
  label?: string;
}

export interface FinancialData {
  month: number;
  revenue: number;
  expenses: number;
  profit: number;
  cashFlow: number;
}

export interface MarketData {
  year: number;
  marketSize: number;
  adoption: number;
}

// Core business metrics
export const getKeyMetrics = (): MetricData[] => [
  { label: "Инвестиции", value: "700-800", unit: "тыс ₽", icon: "target" },
  { label: "Выход на прибыль", value: "7", unit: "месяц", icon: "trending-up" },
  { label: "Положительный Cash Flow", value: "9", unit: "месяц", icon: "dollar-sign" },
  { label: "Выручка за год", value: "6.3", unit: "млн ₽", icon: "bar-chart" },
  { label: "ROMI", value: "620", unit: "%", icon: "percent" }
];

// Financial projections for 12 months
export const getFinancialProjections = (): FinancialData[] => [
  { month: 1, revenue: 0, expenses: 265000, profit: -265000, cashFlow: -275000 },
  { month: 2, revenue: 44000, expenses: 265000, profit: -221000, cashFlow: -496000 },
  { month: 3, revenue: 88000, expenses: 265000, profit: -177000, cashFlow: -673000 },
  { month: 4, revenue: 159000, expenses: 312500, profit: -153500, cashFlow: -826500 },
  { month: 5, revenue: 216500, expenses: 312500, profit: -96000, cashFlow: -922500 },
  { month: 6, revenue: 276500, expenses: 340000, profit: -63500, cashFlow: -986000 },
  { month: 7, revenue: 434000, expenses: 368500, profit: 65500, cashFlow: -920500 },
  { month: 8, revenue: 537500, expenses: 393500, profit: 144000, cashFlow: -776500 },
  { month: 9, revenue: 728000, expenses: 426000, profit: 302000, cashFlow: -474500 },
  { month: 10, revenue: 725500, expenses: 257500, profit: 468000, cashFlow: -6500 },
  { month: 11, revenue: 814000, expenses: 293000, profit: 521000, cashFlow: 514500 },
  { month: 12, revenue: 882500, expenses: 561000, profit: 321500, cashFlow: 836000 }
];

// Market growth data
export const getMarketGrowth = (): MarketData[] => [
  { year: 2021, marketSize: 85, adoption: 8 },
  { year: 2022, marketSize: 130, adoption: 12 },
  { year: 2023, marketSize: 225, adoption: 18 },
  { year: 2024, marketSize: 320, adoption: 25 },
  { year: 2025, marketSize: 600, adoption: 35 },
  { year: 2026, marketSize: 700, adoption: 45 },
  { year: 2027, marketSize: 800, adoption: 55 },
  { year: 2030, marketSize: 1200, adoption: 75 }
];

// Product pricing matrix
export const getProductMatrix = () => [
  { type: "Аудит", name: "Базовый аудит", price: 44000, duration: "5-7 дней" },
  { type: "Аудит", name: "Глубокий аудит", price: 75000, duration: "10-14 дней" },
  { type: "Внедрение", name: "Стандарт", price: 115000, duration: "2-3 недели" },
  { type: "Внедрение", name: "Бизнес", price: 190000, duration: "3-4 недели" },
  { type: "Внедрение", name: "Энтерпрайз", price: 265000, duration: "4-6 недель" },
  { type: "Пакет", name: "Быстрый старт", price: 175000, duration: "2-3 недели" },
  { type: "Пакет", name: "Комплексное решение", price: 275000, duration: "4-5 недель" },
  { type: "Поддержка", name: "Ежемесячная", price: 13500, duration: "Постоянно" },
  { type: "Поддержка", name: "Годовая", price: 140000, duration: "12 месяцев" }
];

// Marketing metrics
export const getMarketingMetrics = () => [
  { month: 1, budget: 40000, leads: 0, clients: 0, cpl: 0, romi: 0 },
  { month: 2, budget: 40000, leads: 24, clients: 1, cpl: 1667, romi: 110 },
  { month: 3, budget: 40000, leads: 50, clients: 2, cpl: 800, romi: 220 },
  { month: 4, budget: 65000, leads: 65, clients: 2, cpl: 1000, romi: 245 },
  { month: 5, budget: 65000, leads: 75, clients: 3, cpl: 867, romi: 333 },
  { month: 6, budget: 65000, leads: 85, clients: 3, cpl: 765, romi: 425 },
  { month: 7, budget: 78000, leads: 95, clients: 4, cpl: 821, romi: 556 },
  { month: 8, budget: 85000, leads: 110, clients: 5, cpl: 773, romi: 632 },
  { month: 9, budget: 98000, leads: 125, clients: 6, cpl: 784, romi: 743 },
  { month: 10, budget: 78000, leads: 135, clients: 7, cpl: 578, romi: 930 },
  { month: 11, budget: 88000, leads: 145, clients: 7, cpl: 607, romi: 925 },
  { month: 12, budget: 135000, leads: 160, clients: 8, cpl: 844, romi: 654 }
];

// Investment breakdown
export const getInvestmentBreakdown = () => [
  { category: "Операционные расходы", amount: 400000, percentage: 50 },
  { category: "Маркетинг и реклама", amount: 200000, percentage: 25 },
  { category: "Найм персонала", amount: 120000, percentage: 15 },
  { category: "Технологии и ПО", amount: 80000, percentage: 10 }
];

// Risk assessment
export const getRiskAssessment = () => [
  {
    risk: "Зависимость от внешних подрядчиков",
    probability: "Средняя",
    impact: "Высокий",
    mitigation: "Создание пула проверенных специалистов"
  },
  {
    risk: "Длительный цикл продаж",
    probability: "Высокая",
    impact: "Средний", 
    mitigation: "Диверсификация продуктовой линейки"
  },
  {
    risk: "Низкая эффективность маркетинга",
    probability: "Средняя",
    impact: "Высокий",
    mitigation: "A/B тестирование и оптимизация каналов"
  },
  {
    risk: "Задержки платежей от клиентов",
    probability: "Средняя",
    impact: "Средний",
    mitigation: "Предоплата 50% и факторинг"
  }
];

// Case study data
export const getCaseStudy = () => ({
  company: "ООО 'ТехноСфера'",
  industry: "Розничная торговля",
  problem: "Ручная обработка заказов занимала 4 часа, высокий процент ошибок",
  solution: "Внедрение автоматизации полного цикла обработки заказов на базе n8n",
  results: [
    "Сокращение времени обработки с 4 часов до 15 минут",
    "Снижение ошибок на 87%", 
    "Экономия 2 FTE позиций",
    "ROI 340% за 6 месяцев"
  ],
  technologies: ["n8n", "PostgreSQL", "Telegram API", "1C Integration"],
  timeline: "3 недели"
});