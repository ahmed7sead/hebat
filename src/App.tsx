import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import BackToTopButton from "./components/BackToTopButton";

import { LanguageProvider, useLanguage } from "./context/LanguageContext";

const queryClient = new QueryClient();

/* --------------------------- Lazy Loaded Pages --------------------------- */
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));

const News = lazy(() => import("./pages/News"));
const RedMuseumNews = lazy(() => import("./pages/news/RedMuseum"));
const RitzCarltonNews = lazy(() => import("./pages/news/RitzCarlton"));
const MinistryNews = lazy(() => import("./pages/news/Ministry"));
const AwardNews = lazy(() => import("./pages/news/Award"));
const Moc = lazy(() => import("./pages/news/Moc"));
const Makarem = lazy(() => import("./pages/news/Makarem"));

const Gallery = lazy(() => import("./pages/Gallery"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const Contact = lazy(() => import("./pages/Contact"));

const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const ProjectSimple = lazy(() => import("./pages/ProjectSimple"));

const NotFound = lazy(() => import("./pages/NotFound"));

/* ------------------------------ Main Content ------------------------------ */
const MainContent = () => {
  const { isTransitioning } = useLanguage();

  return (
    <main
      className={`transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"
        }`}
    >
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />

          {/* News */}
          <Route path="/news" element={<News />} />
          <Route path="/news/red-museum" element={<RedMuseumNews />} />
          <Route path="/news/ritz-carlton" element={<RitzCarltonNews />} />
          <Route
            path="/news/ministry-partnership"
            element={<MinistryNews />}
          />
          <Route path="/news/excellence-award" element={<AwardNews />} />
          <Route path="/news/moc" element={<Moc />} />
<Route path="/news/makarem" element={<Makarem />} />

          {/* Projects */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="/simple-projects/:projectId" element={<ProjectSimple />} />

          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </main>
  );
};

/* ---------------------------------- App ---------------------------------- */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LanguageProvider>
        <BrowserRouter>
          <Navbar />
          <MainContent />
          <Footer />
          <WhatsAppButton />
          <BackToTopButton />
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
