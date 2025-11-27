import { Switch, Route, Router } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import AIConversationalBot from "@/pages/projects/ai-conversational-bot";
import RealTimeMonitoring from "@/pages/projects/real-time-monitoring";
import TTSPipeline from "@/pages/projects/tts-pipeline";
import MultimodalRAG from "@/pages/projects/multimodal-rag";
import LexGuard from "@/pages/projects/lex-guard";
import TechDetail from "@/pages/tech-detail";

const base = import.meta.env.BASE_URL;

import ScrollToTop from "@/components/scroll-to-top";

function Routes() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects/ai-conversational-bot" component={AIConversationalBot} />
        <Route path="/projects/real-time-monitoring" component={RealTimeMonitoring} />
        <Route path="/projects/tts-pipeline" component={TTSPipeline} />
        <Route path="/projects/multimodal-rag" component={MultimodalRAG} />
        <Route path="/projects/lex-guard" component={LexGuard} />
        <Route path="/tech/:slug" component={TechDetail} />
        <Route component={NotFound} />
      </Switch>
    </>
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
