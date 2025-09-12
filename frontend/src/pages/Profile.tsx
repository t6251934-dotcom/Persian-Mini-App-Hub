import React from 'react';
import { motion } from 'framer-motion';
import { User, Settings, Star, Download, MessageCircle, Gift, LogOut } from 'lucide-react';

export const Profile: React.FC = () => {
  // Mock user data - in real app, this would come from Telegram WebApp
  const user = {
    name: 'علی احمدی',
    username: '@ali_ahmadi',
    level: 'Explorer',
    totalEarned: 2340,
    appsUsed: 15,
    reviewsWritten: 8,
    joinDate: 'اردیبهشت 1402',
    avatar: '👤'
  };

  const stats = [
    { label: 'مینی‌اپ‌های استفاده شده', value: user.appsUsed, icon: '📱' },
    { label: 'نظرات نوشته شده', value: user.reviewsWritten, icon: '💬' },
    { label: 'توکن‌های کسب شده', value: user.totalEarned.toLocaleString(), icon: '💎' },
    { label: 'سطح کاربری', value: user.level, icon: '🏆' }
  ];

  const achievements = [
    { title: 'کاوشگر', description: 'استفاده از 10 مینی‌اپ مختلف', unlocked: true, icon: '🔍' },
    { title: 'نویسنده', description: 'نوشتن 5 نظر کیفی', unlocked: true, icon: '✍️' },
    { title: 'دوست‌داشتنی', description: 'دریافت 50 رای مثبت', unlocked: false, icon: '❤️' },
    { title: 'قهرمان', description: 'کسب 5000 توکن', unlocked: false, icon: '👑' }
  ];

  const recentActivity = [
    { action: 'استفاده از فروشگاه پرشین', time: '2 ساعت پیش', reward: '+10 PERSIAN' },
    { action: 'نوشتن نظر برای اپ آموزشی', time: '1 روز پیش', reward: '+25 PERSIAN' },
    { action: 'عضویت در گروه توسعه‌دهندگان', time: '3 روز پیش', reward: '+5 PERSIAN' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto px-4 py-6"
    >
      {/* Profile Header */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="glass-card p-6 text-center mb-6"
      >
        <div className="text-6xl mb-4">{user.avatar}</div>
        <h1 className="text-2xl font-bold mb-1">{user.name}</h1>
        <p className="text-persian-blue mb-2">{user.username}</p>
        <div className="inline-flex items-center bg-saffron text-black px-3 py-1 rounded-full text-sm font-medium">
          <Star className="w-4 h-4 ml-1" />
          {user.level}
        </div>
        <p className="text-text-secondary text-sm mt-2">
          عضو از {user.joinDate}
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 gap-4 mb-6"
      >
        {stats.map((stat, index) => (
          <div key={index} className="glass-card p-4 text-center">
            <div className="text-2xl mb-2">{stat.icon}</div>
            <div className="text-xl font-bold text-persian-blue mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-text-secondary">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Achievements */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="glass-card p-6 mb-6"
      >
        <h3 className="text-lg font-semibold mb-4">دستاوردها</h3>
        <div className="grid grid-cols-2 gap-3">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border transition-all ${
                achievement.unlocked
                  ? 'border-persian-blue/50 bg-persian-blue/10'
                  : 'border-white/10 bg-white/5 opacity-60'
              }`}
            >
              <div className="text-2xl mb-2">{achievement.icon}</div>
              <div className="font-medium text-sm mb-1">{achievement.title}</div>
              <div className="text-xs text-text-secondary">{achievement.description}</div>
              {achievement.unlocked && (
                <div className="text-xs text-persian-blue mt-2">✓ باز شده</div>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Recent Activity */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="glass-card p-6 mb-6"
      >
        <h3 className="text-lg font-semibold mb-4">فعالیت‌های اخیر</h3>
        <div className="space-y-3">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
              <div>
                <div className="font-medium text-sm">{activity.action}</div>
                <div className="text-xs text-text-secondary">{activity.time}</div>
              </div>
              <div className="text-persian-blue font-semibold text-sm">
                {activity.reward}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Menu Options */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="space-y-3"
      >
        <button className="glass-card p-4 w-full flex items-center justify-between hover:border-persian-blue/50 transition-colors">
          <div className="flex items-center space-x-reverse space-x-3">
            <Settings className="w-5 h-5 text-persian-blue" />
            <span>تنظیمات</span>
          </div>
          <span className="text-text-secondary">←</span>
        </button>

        <button className="glass-card p-4 w-full flex items-center justify-between hover:border-persian-blue/50 transition-colors">
          <div className="flex items-center space-x-reverse space-x-3">
            <Download className="w-5 h-5 text-persian-blue" />
            <span>مینی‌اپ‌های نصب شده</span>
          </div>
          <span className="text-text-secondary">←</span>
        </button>

        <button className="glass-card p-4 w-full flex items-center justify-between hover:border-persian-blue/50 transition-colors">
          <div className="flex items-center space-x-reverse space-x-3">
            <MessageCircle className="w-5 h-5 text-persian-blue" />
            <span>نظرات من</span>
          </div>
          <span className="text-text-secondary">←</span>
        </button>

        <button className="glass-card p-4 w-full flex items-center justify-between hover:border-persian-blue/50 transition-colors">
          <div className="flex items-center space-x-reverse space-x-3">
            <Gift className="w-5 h-5 text-persian-blue" />
            <span>دعوت از دوستان</span>
          </div>
          <span className="text-text-secondary">←</span>
        </button>

        <button className="glass-card p-4 w-full flex items-center justify-between hover:border-red-500/50 transition-colors text-red-400">
          <div className="flex items-center space-x-reverse space-x-3">
            <LogOut className="w-5 h-5" />
            <span>خروج</span>
          </div>
          <span className="text-text-secondary">←</span>
        </button>
      </motion.div>
    </motion.div>
  );
};