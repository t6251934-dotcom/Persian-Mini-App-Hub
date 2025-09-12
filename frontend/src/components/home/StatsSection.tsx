import React from 'react';
import { motion } from 'framer-motion';
import { Users, Download, Star, TrendingUp } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: Download,
      label: 'کل نصب‌ها',
      value: '150K+',
      change: '+12%',
      color: 'text-persian-blue'
    },
    {
      icon: Users,
      label: 'کاربران فعال',
      value: '25K+',
      change: '+8%',
      color: 'text-persian-pink'
    },
    {
      icon: Star,
      label: 'امتیاز میانگین',
      value: '4.8',
      change: '+0.2',
      color: 'text-saffron'
    },
    {
      icon: TrendingUp,
      label: 'مینی‌اپ‌های فعال',
      value: '500+',
      change: '+15%',
      color: 'text-green-400'
    }
  ];

  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="glass-card p-6 mb-8"
    >
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold mb-2">آمار پلتفرم</h3>
        <p className="text-text-secondary text-sm">
          آخرین آمار از فعالیت‌های پرشین مینی‌اپ سنتر
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 * index }}
            whileHover={{ scale: 1.05 }}
            className="text-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all"
          >
            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 mb-3`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
            
            <div className={`text-2xl font-bold mb-1 ${stat.color}`}>
              {stat.value}
            </div>
            
            <div className="text-sm text-text-secondary mb-1">
              {stat.label}
            </div>
            
            <div className="text-xs text-green-400">
              {stat.change} این ماه
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};