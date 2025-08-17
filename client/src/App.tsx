import { QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Switch, Route } from "wouter";
import { queryClient } from "@/lib/queryClient";
import HomePage from "@/pages/HomePage";
import MarketPage from "@/pages/MarketPage";
import ProductPage from "@/pages/ProductPage";
import FinancialsPage from "@/pages/FinancialsPage";
import MarketingPage from "@/pages/MarketingPage";
import RisksPage from "@/pages/RisksPage";
import InvestmentPage from "@/pages/InvestmentPage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/market" component={MarketPage} />
      <Route path="/product" component={ProductPage} />
      <Route path="/financials" component={FinancialsPage} />
      <Route path="/marketing" component={MarketingPage} />
      <Route path="/risks" component={RisksPage} />
      <Route path="/investment" component={InvestmentPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-gray-50">
          <Toaster />
          <Router />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;