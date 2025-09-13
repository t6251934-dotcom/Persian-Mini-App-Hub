import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-white font-persian p-4" dir="rtl">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4 text-gradient">پرشین مینی‌اپ هاب</h1>
        <p className="text-text-secondary mb-8">مارکت‌پلیس مینی‌اپ‌های فارسی در تلگرام</p>
        
        <div className="space-y-4">
          <div className="glass-card p-6">
            <h2 className="text-xl font-bold mb-2">خوش آمدید!</h2>
            <p>اپلیکیشن با موفقیت بارگذاری شد</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <button className="btn-primary">کاوش</button>
            <button className="btn-secondary">کیف پول</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;