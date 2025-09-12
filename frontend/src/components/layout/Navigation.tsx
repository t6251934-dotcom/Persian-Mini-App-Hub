import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Search, Wallet, User, Compass } from 'lucide-react';

export const Navigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'خانه' },
    { path: '/explore', icon: Compass, label: 'کشف' },
    { path: '/wallet', icon: Wallet, label: 'کیف پول' },
    { path: '/profile', icon: User, label: 'پروفایل' },
  ];

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-0 left-0 right-0 z-50 glass-card border-t border-white/10"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-around py-3">
          {navItems.map(({ path, icon: Icon, label }) => {
            const isActive = location.pathname === path;
            
            return (
              <Link
                key={path}
                to={path}
                className="relative flex flex-col items-center space-y-1 p-2 min-w-0 flex-1"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative p-2 rounded-xl transition-all ${
                    isActive 
                      ? 'bg-persian-blue text-white' 
                      : 'text-text-secondary hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-saffron rounded-full"
                    />
                  )}
                </motion.div>
                
                <span className={`text-xs truncate ${
                  isActive ? 'text-persian-blue font-medium' : 'text-text-secondary'
                }`}>
                  {label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
};