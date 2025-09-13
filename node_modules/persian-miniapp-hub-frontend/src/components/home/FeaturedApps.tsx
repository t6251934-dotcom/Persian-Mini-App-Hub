import React from 'react';
import { motion } from 'framer-motion';
import { Star, Download, TrendingUp } from 'lucide-react';

export const FeaturedApps: React.FC = () => {
  const apps = [
    {
      id: 1,
      name: 'فروشگاه آنلاین پرشین',
      developer: 'Persian Team',
      description: 'بهترین محصولات ایرانی با تخفیف‌های باورنکردنی',
      category: 'خرید و فروش',
      rating: 4.8,
      downloads: 15600,
      price: 'رایگان',
      image: '🛍️',
      featured: true,
      trend: '+24%'
    },
    {
      id: 2,
      name: 'کیف پول دیجیتال',
      developer: 'FinTech Iran',
      description: 'مدیریت امن و هوشمند دارایی‌های دیجیتال',
      category: 'مالی',
      rating: 4.9,
      downloads: 8900,
      price: 'رایگان',
      image: '💰',
      featured: false,
      trend: '+18%'
    },
    {
      id: 3,
      name: 'آموزش زبان انگلیسی',
      developer: 'EduPersian',
      description: 'یادگیری زبان انگلیسی با روش‌های نوین و جذاب',
      category: 'آموزشی',
      rating: 4.7,
      downloads: 12300,
      price: '10 Stars',
      image: '📚',
      featured: true,
      trend: '+31%'
    },
    {
      id: 4,
      name: 'بازی پازل فارسی',
      developer: 'Game Studio',
      description: 'بازی جذاب و سرگرم‌کننده برای تمام سنین',
      category: 'سرگرمی',
      rating: 4.6,
      downloads: 23400,
      price: '5 Stars',
      image: '🎮',
      featured: false,
      trend: '+12%'
    }
  ];

  return (
    <div className="space-y-4">
      {apps.map((app, index) => (
        <motion.div
          key={app.id}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 * index }}
          whileHover={{ scale: 1.01 }}
          className="glass-card p-4 cursor-pointer hover:border-persian-blue/50 transition-all"
        >
          <div className="flex items-center space-x-reverse space-x-4">
            {/* App Icon */}
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-persian-blue/20 to-persian-pink/20 rounded-2xl flex items-center justify-center text-2xl">
                {app.image}
              </div>
              {app.featured && (
                <div className="absolute -top-1 -right-1 bg-saffron text-black text-xs px-2 py-0.5 rounded-full font-medium">
                  ویژه
                </div>
              )}
            </div>

            {/* App Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-1">
                <h3 className="font-semibold text-white truncate">{app.name}</h3>
                <div className="flex items-center text-green-400 text-sm">
                  <TrendingUp className="w-3 h-3 ml-1" />
                  {app.trend}
                </div>
              </div>
              
              <p className="text-persian-blue text-sm mb-1">{app.developer}</p>
              <p className="text-text-secondary text-sm mb-2 line-clamp-2">
                {app.description}
              </p>
              
              {/* Stats */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-reverse space-x-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-saffron fill-current" />
                    <span className="text-sm mr-1">{app.rating}</span>
                  </div>
                  <div className="flex items-center text-text-secondary">
                    <Download className="w-4 h-4 ml-1" />
                    <span className="text-sm">{app.downloads.toLocaleString()}</span>
                  </div>
                  <span className="text-xs bg-white/10 px-2 py-1 rounded-full">
                    {app.category}
                  </span>
                </div>
                
                <div className="text-persian-blue font-semibold text-sm">
                  {app.price}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
      
      {/* View More Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full glass-card p-4 text-center hover:border-persian-blue/50 transition-all group"
      >
        <span className="text-persian-blue font-medium group-hover:text-white transition-colors">
          مشاهده همه مینی‌اپ‌ها →
        </span>
      </motion.button>
    </div>
  );
};