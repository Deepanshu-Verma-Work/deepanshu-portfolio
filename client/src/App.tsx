import { Switch, Route, Router } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import CloudInfrastructure from "@/pages/projects/cloud-infrastructure";
import NeuralNetworkAPI from "@/pages/projects/neural-network-api";
import DataLakehouse from "@/pages/projects/data-lakehouse";
import SecurityProtocol from "@/pages/projects/security-protocol";

const base = import.meta.env.BASE_URL;

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects/cloud-infrastructure" component={CloudInfrastructure} />
      <Route path="/projects/neural-network-api" component={NeuralNetworkAPI} />
      <Route path="/projects/data-lakehouse" component={DataLakehouse} />
      <Route path="/projects/security-protocol" component={SecurityProtocol} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router base={base}>
          <Routes />
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
