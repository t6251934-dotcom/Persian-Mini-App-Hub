import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';

// Pages
import { Home } from './pages/Home';
import { Explore } from './pages/Explore';
import { AppDetail } from './pages/AppDetail';
import { Wallet } from './pages/Wallet';
import { Profile } from './pages/Profile';

// Layout Components
import { Header } from './components/layout/Header';
import { Navigation } from './components/layout/Navigation';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      cacheTime: 1000 * 60 * 10, // 10 minutes
      retry: 1,
    },
  },
});

// Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('App Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-bg-primary text-white flex items-center justify-center p-4">
          <div className="text-center">
            <h2 className="text-xl font-bold mb-4">خطا در بارگذاری اپلیکیشن</h2>
            <p className="text-text-secondary mb-4">لطفاً صفحه را مجدداً بارگذاری کنید</p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-persian-blue px-4 py-2 rounded-lg"
            >
              بارگذاری مجدد
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Router>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-bg-primary text-white font-persian relative overflow-x-hidden w-full"
            dir="rtl"
          >
            <Header />
            
            <main className="pb-20 pt-16 w-full">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/app/:id" element={<AppDetail />} />
                <Route path="/wallet" element={<Wallet />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </main>
            
            <Navigation />
            
            <Toaster 
              position="top-center"
              toastOptions={{
                duration: 3000,
                style: {
                  background: '#1E1E1E',
                  color: '#fff',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '12px',
                },
              }}
            />
          </motion.div>
        </Router>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;