import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export const CategoryGrid: React.FC = () => {
  const categories = [
    {
      id: 'ecommerce',
      name: 'خرید و فروش',
      description: 'فروشگاه‌ها و مارکت‌پلیس‌ها',
      icon: '🛍️',
      count: 120,
      color: 'from-persian-blue to-blue-600'
    },
    {
      id: 'finance',
      name: 'خدمات مالی',
      description: 'کیف پول و پرداخت',
      icon: '💰',
      count: 45,
      color: 'from-persian-pink to-pink-600'
    },
    {
      id: 'entertainment',
      name: 'سرگرمی',
      description: 'بازی و تفریح',
      icon: '🎮',
      count: 89,
      color: 'from-saffron to-orange-600'
    },
    {
      id: 'education',
      name: 'آموزشی',
      description: 'دوره‌ها و آموزش',
      icon: '📚',
      count: 67,
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'utilities',
      name: 'ابزارها',
      description: 'ابزارهای کاربردی',
      icon: '🔧',
      count: 156,
      color: 'from-purple-500 to-violet-600'
    },
    {
      id: 'news',
      name: 'اخبار و رسانه',
      description: 'اخبار و محتوا',
      icon: '📰',
      count: 23,
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-2 md:grid-cols-3 gap-4"
    >
      {categories.map((category) => (
        <motion.div
          key={category.id}
          variants={itemVariants}
          whileHover={{ 
            scale: 1.05,
            transition: { type: "spring", stiffness: 400, damping: 10 }
          }}
          whileTap={{ scale: 0.95 }}
          className="glass-card p-4 cursor-pointer group hover:border-white/30 transition-all duration-300"
        >
          {/* Icon with gradient background */}
          <div className={`bg-gradient-to-r ${category.color} p-3 rounded-xl mb-3 w-fit`}>
            <div className="text-2xl">{category.icon}</div>
          </div>
          
          {/* Category info */}
          <div className="mb-3">
            <h3 className="font-semibold text-white mb-1 group-hover:text-persian-blue transition-colors">
              {category.name}
            </h3>
            <p className="text-text-secondary text-sm">{category.description}</p>
          </div>
          
          {/* Stats and action */}
          <div className="flex items-center justify-between">
            <span className="text-xs text-text-secondary">
              {category.count} اپ
            </span>
            <ArrowLeft className="w-4 h-4 text-text-secondary group-hover:text-persian-blue group-hover:translate-x-1 transition-all" />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};