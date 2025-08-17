// Data loader with proper error handling and fallbacks
import { 
  MarketGrowth, 
  MSPAdoption, 
  FinancialMonth,
  ProductMatrixItem,
  MarketingMonth,
  RiskItem,
  ComparisonItem,
  CaseStudy,
  marketGrowthSchema,
  mspAdoptionSchema,
  financialMonthSchema,
  productMatrixItemSchema,
  marketingMonthSchema,
  riskItemSchema,
  comparisonItemSchema,
  caseStudySchema
} from "@shared/schema";

// Static fallback data
const fallbackData = {
  marketGrowth: [
    { year: 2021, value: 85 },
    { year: 2022, value: 130 },
    { year: 2023, value: 225 },
    { year: 2024, value: 320 },
    { year: 2025, value: 600 },
    { year: 2026, value: 700 },
    { year: 2027, value: 800 },
    { year: 2030, value: 1200 },
  ],
  mspAdoption: [
    { year: 2021, percentage: 10 },
    { year: 2022, percentage: 15 },
    { year: 2023, percentage: 25 },
    { year: 2024, percentage: 30 },
    { year: 2025, percentage: 40 },
    { year: 2026, percentage: 50 },
    { year: 2027, percentage: 60 },
    { year: 2030, percentage: 75 },
  ],
  financial: [
    { month: 1, revenue: 0, expenses: 265000, net_profit: -265000, cumulative_cash_flow: -275000 },
    { month: 2, revenue: 44000, expenses: 265000, net_profit: -223400, cumulative_cash_flow: -498400 },
    { month: 3, revenue: 88000, expenses: 265000, net_profit: -180200, cumulative_cash_flow: -678600 },
    { month: 4, revenue: 159000, expenses: 312500, net_profit: -162980, cumulative_cash_flow: -724080 },
    { month: 5, revenue: 216500, expenses: 312500, net_profit: -108890, cumulative_cash_flow: -582970 },
    { month: 6, revenue: 276500, expenses: 340000, net_profit: -84650, cumulative_cash_flow: -554120 },
    { month: 7, revenue: 434000, expenses: 368500, net_profit: 43250, cumulative_cash_flow: -430870 },
    { month: 8, revenue: 537500, expenses: 393500, net_profit: 114700, cumulative_cash_flow: -160170 },
    { month: 9, revenue: 728000, expenses: 426000, net_profit: 260200, cumulative_cash_flow: 142030 },
    { month: 10, revenue: 725500, expenses: 257500, net_profit: 416870, cumulative_cash_flow: 658800 },
    { month: 11, revenue: 814000, expenses: 293000, net_profit: 470840, cumulative_cash_flow: 1155140 },
    { month: 12, revenue: 882500, expenses: 561000, net_profit: 271250, cumulative_cash_flow: 1582390 }
  ],
  productMatrix: [
    { type: "Аудит", name: "Базовый аудит", price: 44000 },
    { type: "Аудит", name: "Глубокий аудит", price: 75000 },
    { type: "Внедрение", name: "Внедрение 'Стандарт'", price: 115000 },
    { type: "Внедрение", name: "Внедрение 'Бизнес'", price: 190000 },
    { type: "Внедрение", name: "Внедрение 'Энтерпрайз'", price: 265000 },
    { type: "Пакет", name: "Пакет 'Быстрый старт'", price: 175000 },
    { type: "Пакет", name: "Пакет 'Комплексное решение'", price: 275000 },
    { type: "Поддержка", name: "Поддержка (в мес.)", price: 13500 },
    { type: "Поддержка", name: "Пакет 'Годовая поддержка'", price: 140000 }
  ],
  marketing: [
    { month: 1, budget: 40000, leads: 0, clients: 0, cpl: 0, cac: 0, romi: 0 },
    { month: 2, budget: 40000, leads: 24, clients: 1, cpl: 1667, cac: 40000, romi: 1.1 },
    { month: 3, budget: 40000, leads: 50, clients: 2, cpl: 800, cac: 20000, romi: 2.2 },
    { month: 4, budget: 65000, leads: 65, clients: 2, cpl: 1000, cac: 32500, romi: 2.4 },
    { month: 5, budget: 65000, leads: 75, clients: 3, cpl: 867, cac: 21667, romi: 3.3 },
    { month: 6, budget: 65000, leads: 85, clients: 3, cpl: 765, cac: 21667, romi: 4.3 },
    { month: 7, budget: 78000, leads: 95, clients: 4, cpl: 821, cac: 19500, romi: 5.6 },
    { month: 8, budget: 85000, leads: 110, clients: 5, cpl: 773, cac: 17000, romi: 6.3 },
    { month: 9, budget: 98000, leads: 125, clients: 6, cpl: 784, cac: 16333, romi: 7.4 },
    { month: 10, budget: 78000, leads: 135, clients: 7, cpl: 578, cac: 11143, romi: 9.3 },
    { month: 11, budget: 88000, leads: 145, clients: 7, cpl: 607, cac: 12571, romi: 9.3 },
    { month: 12, budget: 135000, leads: 160, clients: 7, cpl: 844, cac: 19286, romi: 6.5 },
  ],
  risks: [
    { 
      risk: "Зависимость от почасового специалиста", 
      mitigation: "Заранее найти и проверить 2-3 кандидатов, создать резервный пул." 
    },
    { 
      risk: "'Ползучесть рамок' проекта (Scope Creep)", 
      mitigation: "Разработать детальный договор с четким определением объема работ и порядком оплаты дополнительных задач." 
    },
    { 
      risk: "Длинный цикл сделки и задержки оплат", 
      mitigation: "Внедрить обязательную 50% предоплату. Увеличить запрашиваемые инвестиции на 20-25% для создания 'подушки безопасности'." 
    },
    { 
      risk: "Низкая эффективность маркетинга", 
      mitigation: "Декомпозировать маркетинговый бюджет по каналам, отслеживать стоимость лида (CPL) и конверсию, быстро перераспределять бюджет." 
    }
  ],
  comparison: [
    { aspect: "Скорость внедрения", n8n: "2-4 недели", make: "4-8 недель" },
    { aspect: "Стоимость лицензии", n8n: "Self-hosted: бесплатно", make: "От $9/мес за пользователя" },
    { aspect: "Кастомизация", n8n: "Полная кастомизация", make: "Ограниченная" },
    { aspect: "Интеграции", n8n: "800+ интеграций", make: "1000+ интеграций" },
    { aspect: "Техподдержка", n8n: "Community + Enterprise", make: "24/7 support" }
  ],
  caseStudy: {
    company: "ООО 'Техносфера'",
    industry: "Розничная торговля",
    problem: "Ручная обработка заказов, дублирование данных между системами",
    solution: "Автоматизация процесса от получения заказа до отгрузки",
    results: [
      "Сокращение времени обработки заказа с 4 часов до 15 минут",
      "Снижение ошибок на 87%",
      "Экономия 2 FTE позиций",
      "ROI 340% за 6 месяцев"
    ]
  }
};

export const getMarketGrowth = (): MarketGrowth[] => {
  return fallbackData.marketGrowth.map(item => marketGrowthSchema.parse(item));
};

export const getMSPAdoption = (): MSPAdoption[] => {
  return fallbackData.mspAdoption.map(item => mspAdoptionSchema.parse(item));
};

export const getFinancialData = (): FinancialMonth[] => {
  return fallbackData.financial.map(item => financialMonthSchema.parse(item));
};

export const getProductMatrix = (): ProductMatrixItem[] => {
  return fallbackData.productMatrix.map(item => productMatrixItemSchema.parse(item));
};

export const getMarketingData = (): MarketingMonth[] => {
  return fallbackData.marketing.map(item => marketingMonthSchema.parse(item));
};

export const getRiskData = (): RiskItem[] => {
  return fallbackData.risks.map(item => riskItemSchema.parse(item));
};

export const getComparisonData = (): ComparisonItem[] => {
  return fallbackData.comparison.map(item => comparisonItemSchema.parse(item));
};

export const getCaseStudyData = (): CaseStudy => {
  return caseStudySchema.parse(fallbackData.caseStudy);
};

export const getInvestmentSummary = () => {
  return {
    targetAmount: 800000,
    currentAmount: 0,
    investorCount: 0,
    fundingStage: "Seed",
    useOfFunds: [
      { category: "Операционные расходы", amount: 400000, percentage: 50 },
      { category: "Маркетинг", amount: 200000, percentage: 25 },
      { category: "Найм персонала", amount: 120000, percentage: 15 },
      { category: "Технологии", amount: 80000, percentage: 10 }
    ]
  };
};

export const getKeyMetrics = () => {
  const financialData = getFinancialData();
  const totalRevenue = financialData.reduce((sum, month) => sum + month.revenue, 0);
  
  return {
    investmentRound: "700-800",
    profitMonth: "7",
    cashflowPositiveMonth: "9", 
    yearRevenue: (Math.round(totalRevenue / 1000000 * 100) / 100).toString(),
    clientsTotal: "42",
    romi: "620%"
  };
};

export const getInvestmentBreakdown = () => {
  return [
    { item: "Операционные расходы", amount: 400000, percentage: 50, icon: "briefcase" },
    { item: "Маркетинг", amount: 200000, percentage: 25, icon: "megaphone" },
    { item: "Найм персонала", amount: 120000, percentage: 15, icon: "users" },
    { item: "Технологии", amount: 80000, percentage: 10, icon: "cpu" }
  ];
};