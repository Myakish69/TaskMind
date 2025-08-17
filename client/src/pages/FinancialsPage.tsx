diff --git a/client/src/pages/FinancialsPage.tsx b/client/src/pages/FinancialsPage.tsx
index fb45750b0e66b4778bd2b22860f790583694c066..514d1545570f2ce740fd19125fcdf62ee25c0fd9 100644
--- a/client/src/pages/FinancialsPage.tsx
+++ b/client/src/pages/FinancialsPage.tsx
@@ -1,45 +1,48 @@
 import PageLayout from "@/components/layout/PageLayout";
 import SimpleChart from "@/components/charts/SimpleChart";
 import { Card } from "@/components/ui/card";
-import { getFinancialProjections } from "@/lib/businessData";
+import { getFinancialProjections, getKeyMetrics } from "@/lib/businessData";
 import { TrendingUp, DollarSign, PiggyBank, Target } from "lucide-react";
 
 export default function FinancialsPage() {
   const financialData = getFinancialProjections();
+  const keyMetrics = getKeyMetrics();
   
   // Prepare different chart datasets
   const revenueData = financialData.map(item => ({ month: item.month, value: item.revenue }));
   const profitData = financialData.map(item => ({ month: item.month, value: item.profit }));
   const cashFlowData = financialData.map(item => ({ month: item.month, value: item.cashFlow }));
   const expensesData = financialData.map(item => ({ month: item.month, value: item.expenses }));
 
   // Calculate key metrics
   const totalRevenue = financialData.reduce((sum, item) => sum + item.revenue, 0);
   const finalProfit = financialData[financialData.length - 1].profit;
   const breakEvenMonth = financialData.findIndex(item => item.profit > 0) + 1;
-  const positiveFlowMonth = financialData.findIndex(item => item.cashFlow > 0) + 1;
+  const positiveFlowMonth = Number(
+    keyMetrics.find((m) => m.label === "Положительный Cash Flow")?.value ?? 0
+  );
 
   return (
     <PageLayout>
       <div className="space-y-12">
         {/* Header */}
         <div className="text-center">
           <h1 className="text-4xl font-bold text-gray-900 mb-4">Финансовая модель</h1>
           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
             12-месячный прогноз с выходом на прибыль в 7-м месяце и положительным cash flow в 9-м месяце
           </p>
         </div>
 
         {/* Key Financial Metrics */}
         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
           <Card className="p-6 text-center">
             <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-4" />
             <div className="text-3xl font-bold text-gray-900 mb-2">
               {(totalRevenue / 1000000).toFixed(1)}М
             </div>
             <div className="text-sm text-gray-600">Выручка за год</div>
           </Card>
           <Card className="p-6 text-center">
             <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
             <div className="text-3xl font-bold text-gray-900 mb-2">{breakEvenMonth}</div>
             <div className="text-sm text-gray-600">Месяц выхода на прибыль</div>


