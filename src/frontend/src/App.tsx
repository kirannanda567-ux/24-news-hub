import { Layout } from "@/components/Layout";
import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("@/pages/Home"));
const NewsPage = lazy(() => import("@/pages/News"));
const ArticlePage = lazy(() => import("@/pages/Article"));
const YouTubePage = lazy(() => import("@/pages/YouTube"));
const AboutPage = lazy(() => import("@/pages/About"));

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 1000 * 60 * 5 } },
});

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/news/:id" element={<ArticlePage />} />
              <Route path="/youtube" element={<YouTubePage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
      <Toaster />
    </QueryClientProvider>
  );
}
