import { z } from "zod";

// Market data schemas
export const marketGrowthSchema = z.object({
  year: z.number(),
  value: z.number(),
});

export const mspAdoptionSchema = z.object({
  year: z.number(),
  percentage: z.number(),
});

// Financial data schemas
export const financialMonthSchema = z.object({
  month: z.number(),
  revenue: z.number(),
  expenses: z.number(),
  net_profit: z.number(),
  cumulative_cash_flow: z.number(),
});

export const productMatrixItemSchema = z.object({
  type: z.string(),
  name: z.string(),
  price: z.number(),
});

// Marketing data schemas
export const marketingMonthSchema = z.object({
  month: z.number(),
  budget: z.number(),
  leads: z.number(),
  clients: z.number(),
  cpl: z.number(),
  cac: z.number(),
  romi: z.number(),
});

// Risk data schemas
export const riskItemSchema = z.object({
  risk: z.string(),
  mitigation: z.string(),
});

// Investment data schemas
export const investmentBreakdownSchema = z.object({
  item: z.string(),
  amount: z.number(),
  icon: z.string(),
});

// Comparison data schemas
export const comparisonItemSchema = z.object({
  Критерий: z.string(),
  "n8n": z.string(),
  "Make": z.string(),
});

export const caseStudySchema = z.object({
  "Бизнес": z.string(),
  "Сценарий": z.string(),
  "Метрика/эффект": z.string(),
  "Источник": z.string(),
});

// Type exports
export type MarketGrowth = z.infer<typeof marketGrowthSchema>;
export type MSPAdoption = z.infer<typeof mspAdoptionSchema>;
export type FinancialMonth = z.infer<typeof financialMonthSchema>;
export type ProductMatrixItem = z.infer<typeof productMatrixItemSchema>;
export type MarketingMonth = z.infer<typeof marketingMonthSchema>;
export type RiskItem = z.infer<typeof riskItemSchema>;
export type InvestmentBreakdown = z.infer<typeof investmentBreakdownSchema>;
export type ComparisonItem = z.infer<typeof comparisonItemSchema>;
export type CaseStudy = z.infer<typeof caseStudySchema>;
