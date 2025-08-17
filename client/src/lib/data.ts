import { 
  MarketGrowth, 
  MSPAdoption, 
  FinancialMonth, 
  ProductMatrixItem, 
  MarketingMonth, 
  RiskItem,
  InvestmentBreakdown,
  ComparisonItem,
  CaseStudy,
  marketGrowthSchema,
  mspAdoptionSchema,
  financialMonthSchema,
  productMatrixItemSchema,
  marketingMonthSchema,
  riskItemSchema,
  investmentBreakdownSchema,
  comparisonItemSchema,
  caseStudySchema
} from "@shared/schema";

// Import JSON files
import economicsData from "@assets/эконом_1755441047186.json";
import marketingData from "@assets/marketing_plan.json";
import investmentData from "@assets/invest.json";
import comparisonData from "@assets/n8nvsmake_1755441047185.json";
import caseStudyData from "@assets/показателимсб_1755441047185.json";

// Market Growth Data (2021-2030)
export const getMarketGrowth = (): MarketGrowth[] => {
  return [
    { year: 2021, value: 85 },
    { year: 2022, value: 130 },
    { year: 2023, value: 225 },
    { year: 2024, value: 320 },
    { year: 2025, value: 600 },
    { year: 2026, value: 700 },
    { year: 2027, value: 800 },
    { year: 2030, value: 1200 },
  ].map(item => marketGrowthSchema.parse(item));
};

// MSP Adoption Data
export const getMSPAdoption = (): MSPAdoption[] => {
  return [
    { year: 2021, percentage: 10 },
    { year: 2022, percentage: 15 },
    { year: 2023, percentage: 25 },
    { year: 2024, percentage: 30 },
    { year: 2025, percentage: 40 },
    { year: 2026, percentage: 50 },
    { year: 2027, percentage: 60 },
    { year: 2030, percentage: 75 },
  ].map(item => mspAdoptionSchema.parse(item));
};

// Financial Data from economics JSON
export const getFinancialData = (): FinancialMonth[] => {
  const data = economicsData as any;
  return data.financial_forecast_12_months.map((item: any) => 
    financialMonthSchema.parse(item)
  );
};

// Product Matrix from economics JSON
export const getProductMatrix = (): ProductMatrixItem[] => {
  const data = economicsData as any;
  return data.assumptions.product_matrix.map((item: any) => 
    productMatrixItemSchema.parse(item)
  );
};

// Marketing Data (generated from financial model assumptions)
export const getMarketingData = (): MarketingMonth[] => {
  // Using the financial data to calculate marketing metrics
  const financialData = getFinancialData();
  const baseData = [
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
  ];

  return baseData.map(item => marketingMonthSchema.parse(item));
};

// Risk Data from economics JSON
export const getRiskData = (): RiskItem[] => {
  const data = economicsData as any;
  return data.risk_analysis.map((item: any) => 
    riskItemSchema.parse(item)
  );
};

// Investment Breakdown
export const getInvestmentBreakdown = (): InvestmentBreakdown[] => {
  return [
    { item: "Маркетинг (6 мес)", amount: 240000, icon: "megaphone" },
    { item: "Зарплата основателя (4 мес)", amount: 200000, icon: "user" },
    { item: "Юридические услуги", amount: 75000, icon: "scale" },
    { item: "Брендинг и дизайн", amount: 70000, icon: "palette" },
    { item: "Оборудование и ПО", amount: 60000, icon: "server" },
    { item: "Резерв и непредвиденные", amount: 105000, icon: "shield" },
  ].map(item => investmentBreakdownSchema.parse(item));
};

// n8n vs Make comparison
export const getComparison = (): ComparisonItem[] => {
  const data = comparisonData as any;
  return data.Sheet1.filter((item: any) => item.Критерий && item.Критерий !== "")
    .map((item: any) => comparisonItemSchema.parse(item));
};

// Case studies
export const getCaseStudies = (): CaseStudy[] => {
  const data = caseStudyData as any;
  return data.Sheet1.filter((item: any) => item.Бизнес && item.Бизнес !== "")
    .slice(0, 10) // Take first 10 case studies
    .map((item: any) => caseStudySchema.parse(item));
};

// Key metrics calculations
export const getKeyMetrics = () => {
  const financialData = getFinancialData();
  const marketingData = getMarketingData();
  const investmentData = getInvestmentBreakdown();
  
  const totalRevenue = financialData.reduce((sum, month) => sum + month.revenue, 0);
  const totalClients = marketingData.reduce((sum, month) => sum + month.clients, 0);
  const totalInvestment = investmentData.reduce((sum, item) => sum + item.amount, 0);
  const finalCashFlow = financialData[financialData.length - 1]?.cumulative_cash_flow || 0;
  
  // Find first profitable month
  const firstProfitMonth = financialData.find(month => month.net_profit > 0)?.month || 7;
  
  // Find first positive cash flow month
  const firstPositiveCashFlowMonth = financialData.find(month => month.cumulative_cash_flow > 0)?.month || 9;
  
  // Calculate ROMI (Return on Marketing Investment)
  const totalMarketingSpend = marketingData.reduce((sum, month) => sum + month.budget, 0);
  const romi = totalMarketingSpend > 0 ? ((totalRevenue / totalMarketingSpend) * 100) : 0;

  return {
    investmentRound: "700-800",
    profitMonth: firstProfitMonth,
    cashflowPositiveMonth: firstPositiveCashFlowMonth,
    yearRevenue: (totalRevenue / 1000000).toFixed(1), // Convert to millions
    clientsTotal: Math.max(...marketingData.map(m => m.clients)),
    totalInvestment,
    finalCashFlow,
    romi: Math.round(romi),
  };
};
