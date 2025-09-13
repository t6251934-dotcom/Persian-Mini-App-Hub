import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wallet as WalletIcon, ArrowUpDown, TrendingUp, Gift, Star, Coins } from 'lucide-react';

export const Wallet: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'balance' | 'exchange' | 'history'>('balance');

  const balances = {
    telegramStars: 150,
    persianTokens: 2340,
    tonCoins: 0.5,
    totalUsd: 45.30
  };

  const transactions = [
    {
      id: 1,
      type: 'reward',
      amount: '+25 PERSIAN',
      description: 'پاداش نوشتن نظر',
      date: '2 ساعت پیش',
      status: 'completed'
    },
    {
      id: 2,
      type: 'purchase',
      amount: '-10 Stars',
      description: 'خرید از فروشگاه پرشین',
      date: '1 روز پیش',
      status: 'completed'
    },
    {
      id: 3,
      type: 'exchange',
      amount: '+100 PERSIAN',
      description: 'تبدیل 50 Stars به Persian',
      date: '3 روز پیش',
      status: 'completed'
    }
  ];

  const rewards = [
    { title: 'استفاده روزانه', amount: '+5 PERSIAN', description: 'هر روز که وارد اپ شوید' },
    { title: 'نوشتن نظر', amount: '+25 PERSIAN', description: 'برای هر نظر کیفی' },
    { title: 'دعوت دوستان', amount: '+100 PERSIAN', description: 'برای هر دوست دعوت شده' },
    { title: 'اولین خرید', amount: '+50 PERSIAN', description: 'پاداش اولین تراکنش' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto px-4 py-6"
    >
      {/* Header */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center mb-6"
      >
        <h1 className="text-2xl font-bold mb-2">کیف پول من</h1>
        <p className="text-text-secondary">مدیریت دارایی‌های دیجیتال شما</p>
      </motion.div>

      {/* Balance Cards */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
      >
        {/* Telegram Stars */}
        <div className="glass-card p-6 text-center">
          <div className="text-3xl mb-2">⭐</div>
          <div className="text-2xl font-bold text-saffron mb-1">
            {balances.telegramStars}
          </div>
          <div className="text-text-secondary text-sm">Telegram Stars</div>
        </div>

        {/* Persian Tokens */}
        <div className="glass-card p-6 text-center">
          <div className="text-3xl mb-2">💎</div>
          <div className="text-2xl font-bold text-persian-blue mb-1">
            {balances.persianTokens.toLocaleString()}
          </div>
          <div className="text-text-secondary text-sm">Persian Tokens</div>
        </div>

        {/* TON */}
        <div className="glass-card p-6 text-center">
          <div className="text-3xl mb-2">💰</div>
          <div className="text-2xl font-bold text-persian-pink mb-1">
            {balances.tonCoins}
          </div>
          <div className="text-text-secondary text-sm">TON</div>
        </div>
      </motion.div>

      {/* Total Value */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="glass-card p-6 text-center mb-6"
      >
        <div className="text-text-secondary mb-1">ارزش کل (تقریبی)</div>
        <div className="text-3xl font-bold text-gradient">
          ${balances.totalUsd}
        </div>
        <div className="text-sm text-green-400 mt-1">
          <TrendingUp className="w-4 h-4 inline ml-1" />
          +2.5% این هفته
        </div>
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex space-x-reverse space-x-1 mb-6 bg-bg-secondary rounded-xl p-1"
      >
        <button
          onClick={() => setSelectedTab('balance')}
          className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
            selectedTab === 'balance'
              ? 'bg-persian-blue text-white'
              : 'text-text-secondary hover:text-white'
          }`}
        >
          موجودی
        </button>
        <button
          onClick={() => setSelectedTab('exchange')}
          className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
            selectedTab === 'exchange'
              ? 'bg-persian-blue text-white'
              : 'text-text-secondary hover:text-white'
          }`}
        >
          تبدیل
        </button>
        <button
          onClick={() => setSelectedTab('history')}
          className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
            selectedTab === 'history'
              ? 'bg-persian-blue text-white'
              : 'text-text-secondary hover:text-white'
          }`}
        >
          تاریخچه
        </button>
      </motion.div>

      {/* Tab Content */}
      <motion.div
        key={selectedTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {selectedTab === 'balance' && (
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-4">عملیات سریع</h3>
              <div className="grid grid-cols-2 gap-3">
                <button className="btn-glass p-4 text-center">
                  <Coins className="w-6 h-6 mx-auto mb-2" />
                  <div className="text-sm">خرید Stars</div>
                </button>
                <button className="btn-glass p-4 text-center">
                  <ArrowUpDown className="w-6 h-6 mx-auto mb-2" />
                  <div className="text-sm">تبدیل ارز</div>
                </button>
                <button className="btn-glass p-4 text-center">
                  <Gift className="w-6 h-6 mx-auto mb-2" />
                  <div className="text-sm">پاداش‌ها</div>
                </button>
                <button className="btn-glass p-4 text-center">
                  <WalletIcon className="w-6 h-6 mx-auto mb-2" />
                  <div className="text-sm">برداشت</div>
                </button>
              </div>
            </div>

            {/* Earning Opportunities */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-4">فرصت‌های کسب درآمد</h3>
              <div className="space-y-3">
                {rewards.map((reward, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <div>
                      <div className="font-medium">{reward.title}</div>
                      <div className="text-sm text-text-secondary">{reward.description}</div>
                    </div>
                    <div className="text-persian-blue font-semibold">{reward.amount}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {selectedTab === 'exchange' && (
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold mb-6">تبدیل ارز</h3>
            
            <div className="space-y-4">
              {/* From */}
              <div>
                <label className="block text-sm font-medium mb-2">از</label>
                <div className="grid grid-cols-3 gap-2">
                  <input
                    type="number"
                    placeholder="0.00"
                    className="col-span-2 bg-transparent border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-persian-blue"
                  />
                  <select className="bg-bg-secondary border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none">
                    <option value="stars">Stars</option>
                    <option value="persian">PERSIAN</option>
                    <option value="ton">TON</option>
                  </select>
                </div>
              </div>

              {/* Exchange Icon */}
              <div className="flex justify-center">
                <button className="p-3 bg-persian-blue rounded-full hover:bg-persian-blue/80 transition-colors">
                  <ArrowUpDown className="w-5 h-5" />
                </button>
              </div>

              {/* To */}
              <div>
                <label className="block text-sm font-medium mb-2">به</label>
                <div className="grid grid-cols-3 gap-2">
                  <input
                    type="number"
                    placeholder="0.00"
                    readOnly
                    className="col-span-2 bg-transparent border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none"
                  />
                  <select className="bg-bg-secondary border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none">
                    <option value="persian">PERSIAN</option>
                    <option value="stars">Stars</option>
                    <option value="ton">TON</option>
                  </select>
                </div>
              </div>

              {/* Exchange Rate */}
              <div className="bg-white/5 rounded-lg p-3 text-center">
                <div className="text-sm text-text-secondary">نرخ تبدیل</div>
                <div className="font-semibold">1 Star = 2 PERSIAN</div>
              </div>

              <button className="btn-primary w-full">
                تبدیل
              </button>
            </div>
          </div>
        )}

        {selectedTab === 'history' && (
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold mb-6">تاریخچه تراکنش‌ها</h3>
            
            <div className="space-y-4">
              {transactions.map((transaction) => (
                <div key={transaction.id} className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                  <div className="flex items-center space-x-reverse space-x-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      transaction.type === 'reward' ? 'bg-green-500/20 text-green-400' :
                      transaction.type === 'purchase' ? 'bg-red-500/20 text-red-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {transaction.type === 'reward' ? '🎁' : 
                       transaction.type === 'purchase' ? '🛒' : '🔄'}
                    </div>
                    <div>
                      <div className="font-medium">{transaction.description}</div>
                      <div className="text-sm text-text-secondary">{transaction.date}</div>
                    </div>
                  </div>
                  <div className={`font-semibold ${
                    transaction.amount.startsWith('+') ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {transaction.amount}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};