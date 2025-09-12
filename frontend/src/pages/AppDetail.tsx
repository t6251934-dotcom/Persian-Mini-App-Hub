import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Download, Share, Heart, AlertCircle } from 'lucide-react';

export const AppDetail: React.FC = () => {
  const { id } = useParams();

  // Mock data - in real app, this would come from API
  const app = {
    id: 1,
    name: 'فروشگاه آنلاین پرشین',
    developer: 'Persian Dev Team',
    description: 'بهترین و کامل‌ترین فروشگاه آنلاین ایرانی با امکانات پیشرفته و تخفیف‌های ویژه. این مینی‌اپ شامل هزاران محصول در دسته‌بندی‌های مختلف است.',
    longDescription: `
      فروشگاه آنلاین پرشین یکی از پیشرفته‌ترین پلتفرم‌های خرید آنلاین ایران است که با استفاده از جدیدترین تکنولوژی‌ها طراحی شده است.
      
      ویژگی‌های کلیدی:
      • بیش از 10000 محصول در دسته‌بندی‌های مختلف
      • پرداخت امن با تمام کارت‌های بانکی
      • ارسال سریع به سراسر کشور
      • پشتیبانی 24 ساعته
      • گارانتی اصالت کالا
      • امکان مرجوعی آسان
    `,
    category: 'خرید و فروش',
    rating: 4.8,
    reviewCount: 2340,
    downloads: 15600,
    price: 'رایگان',
    version: '2.1.4',
    size: '12 MB',
    screenshots: ['🛍️', '📱', '💳', '🚚', '⭐'],
    features: [
      'رابط کاربری فارسی',
      'پرداخت امن',
      'ارسال سریع',
      'پشتیبانی فعال',
      'تخفیف‌های ویژه'
    ],
    permissions: [
      'دسترسی به اطلاعات کاربری تلگرام',
      'ارسال پیام‌های اعلان',
      'دسترسی به کیف پول'
    ]
  };

  const reviews = [
    {
      id: 1,
      user: 'علی رضایی',
      rating: 5,
      comment: 'عالی بود! خرید خیلی راحت و ارسال سریع.',
      date: '3 روز پیش',
      helpful: 12
    },
    {
      id: 2,
      user: 'مریم احمدی',
      rating: 4,
      comment: 'اپ خوبی است اما می‌تونه بهتر بشه. قیمت‌ها مناسبه.',
      date: '1 هفته پیش',
      helpful: 8
    },
    {
      id: 3,
      user: 'حسین محمدی',
      rating: 5,
      comment: 'بهترین فروشگاه آنلاین که تا حالا استفاده کردم. پیشنهاد می‌کنم.',
      date: '2 هفته پیش',
      helpful: 15
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto px-4 py-6"
    >
      {/* App Header */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="glass-card p-6 mb-6"
      >
        <div className="flex items-start space-x-reverse space-x-4">
          <div className="text-6xl">{app.screenshots[0]}</div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-1">{app.name}</h1>
            <p className="text-persian-blue mb-2">{app.developer}</p>
            <div className="flex items-center space-x-reverse space-x-4 mb-4">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-saffron fill-current" />
                <span className="mr-1 font-semibold">{app.rating}</span>
                <span className="text-text-secondary text-sm mr-1">
                  ({app.reviewCount.toLocaleString()} نظر)
                </span>
              </div>
              <div className="text-text-secondary text-sm">
                <Download className="w-4 h-4 inline ml-1" />
                {app.downloads.toLocaleString()} نصب
              </div>
            </div>
            <div className="flex space-x-reverse space-x-3">
              <button className="btn-primary flex-1">
                نصب ({app.price})
              </button>
              <button className="btn-glass">
                <Heart className="w-5 h-5" />
              </button>
              <button className="btn-glass">
                <Share className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Screenshots */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="mb-6"
      >
        <h3 className="text-lg font-semibold mb-4">تصاویر</h3>
        <div className="flex space-x-reverse space-x-3 overflow-x-auto pb-2">
          {app.screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-24 h-24 glass-card flex items-center justify-center text-3xl cursor-pointer hover:scale-105 transition-transform"
            >
              {screenshot}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Description */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="glass-card p-6 mb-6"
      >
        <h3 className="text-lg font-semibold mb-4">درباره این مینی‌اپ</h3>
        <p className="text-text-secondary leading-relaxed whitespace-pre-line">
          {app.longDescription}
        </p>
      </motion.div>

      {/* Features & Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Features */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-6"
        >
          <h3 className="text-lg font-semibold mb-4">ویژگی‌ها</h3>
          <ul className="space-y-2">
            {app.features.map((feature, index) => (
              <li key={index} className="flex items-center text-text-secondary">
                <div className="w-2 h-2 bg-persian-blue rounded-full ml-3"></div>
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* App Info */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-6"
        >
          <h3 className="text-lg font-semibold mb-4">اطلاعات اپ</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-text-secondary">نسخه:</span>
              <span>{app.version}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">حجم:</span>
              <span>{app.size}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">دسته‌بندی:</span>
              <span>{app.category}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">قیمت:</span>
              <span className="text-persian-blue font-semibold">{app.price}</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Reviews */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="glass-card p-6"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">نظرات کاربران</h3>
          <button className="text-persian-blue text-sm">نوشتن نظر</button>
        </div>
        
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="border-b border-white/10 pb-4 last:border-b-0">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="font-semibold">{review.user}</div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? 'text-saffron fill-current'
                            : 'text-gray-600'
                        }`}
                      />
                    ))}
                    <span className="text-text-secondary text-sm mr-2">{review.date}</span>
                  </div>
                </div>
                <button className="text-text-secondary text-sm hover:text-persian-blue">
                  مفید ({review.helpful})
                </button>
              </div>
              <p className="text-text-secondary">{review.comment}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};