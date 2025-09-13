import React from 'react';
import { motion } from 'framer-motion';
import { Star, TrendingUp } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const featuredApps = [
    {
      id: 1,
      name: 'فروشگاه پرشین',
      description: 'بهترین تخفیف‌های امروز',
      image: '🛍️',
      gradient: 'from-persian-blue to-persian-pink'
    },
    {
      id: 2,
      name: 'کیف پول هوشمند',
      description: 'مدیریت امن دارایی‌ها',
      image: '💰',
      gradient: 'from-saffron to-persian-blue'
    },
    {
      id: 3,
      name: 'بازی پازل فارسی',
      description: 'سرگرمی برای همه سنین',
      image: '🎮',
      gradient: 'from-persian-pink to-purple-600'
    }
  ];

  return (
    <motion.section
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="mb-8"
    >
      {/* Main Hero Card */}
      <div className="bg-gradient-to-r from-persian-blue via-persian-pink to-saffron p-1 rounded-2xl mb-6">
        <div className="bg-bg-primary rounded-2xl p-6 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-2 text-gradient">
              به پرشین مینی‌اپ هاب خوش آمدید!
            </h2>
            <p className="text-text-secondary mb-4">
              اولین مارکت‌پلیس جامع مینی‌اپ‌های فارسی در تلگرام
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              شروع کاوش
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Featured Mini Apps Carousel */}
      <div>
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <TrendingUp className="w-5 h-5 text-saffron mr-2" />
          مینی‌اپ‌های منتخب امروز
        </h3>
        
        <div className="flex gap-4 overflow-x-auto pb-2 w-full">
          {featuredApps.map((app, index) => (
            <motion.div
              key={app.id}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.02 }}
              className="flex-shrink-0 w-64 glass-card p-4 cursor-pointer"
            >
              <div className={`bg-gradient-to-r ${app.gradient} p-4 rounded-xl mb-3`}>
                <div className="text-3xl text-center">{app.image}</div>
              </div>
              <h4 className="font-semibold mb-1">{app.name}</h4>
              <p className="text-text-secondary text-sm mb-3">{app.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-saffron fill-current" />
                  <span className="text-sm ml-1">4.8</span>
                </div>
                <button className="text-persian-blue text-sm font-medium">
                  مشاهده →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};