import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Pages
import Home from "@/pages/Home";
import Market from "@/pages/Market";
import Project from "@/pages/Project";
import Financials from "@/pages/Financials";
import Marketing from "@/pages/Marketing";
import Risks from "@/pages/Risks";
import Investment from "@/pages/Investment";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/market" component={Market} />
      <Route path="/project" component={Project} />
      <Route path="/financials" component={Financials} />
      <Route path="/marketing" component={Marketing} />
      <Route path="/risks" component={Risks} />
      <Route path="/investment" component={Investment} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="dark">
          <Toaster />
          <Router />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
