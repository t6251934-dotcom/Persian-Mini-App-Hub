# صفحه ۳: منطق کسب‌وکار و ادغام بلاکچین
# Page 3: Business Logic & Blockchain Integration

## 💰 مدل درآمدی (Revenue Model)

### **جریان‌های درآمدی اصلی**

#### 1. کمیسیون از فروش Stars
```typescript
interface CommissionStructure {
  platformFee: number; // 15% از تمام پرداخت‌های Stars
  developerShare: number; // 70% باقی‌مانده برای توسعه‌دهنده
  persianTokenReward: number; // 15% به صورت توکن $PERSIAN
}

const COMMISSION_RATES = {
  PLATFORM_FEE: 0.15,
  DEVELOPER_SHARE: 0.70,
  TOKEN_REWARD: 0.15
} as const;
```

#### 2. تبلیغات و پروموشن
- **Hero Carousel Ads**: 500-2000 تومان روزانه
- **Category Banner Ads**: 200-800 تومان روزانه  
- **Sponsored App Listings**: 100-500 تومان روزانه
- **Premium Developer Features**: 50,000 تومان ماهانه

#### 3. خدمات Premium
```typescript
interface PremiumTiers {
  BASIC_DEVELOPER: {
    price: 50000; // تومان/ماه
    features: ['Analytics Dashboard', 'Priority Support'];
  };
  PRO_DEVELOPER: {
    price: 150000; // تومان/ماه
    features: ['Advanced Analytics', 'A/B Testing', 'Custom Branding'];
  };
  ENTERPRISE: {
    price: 500000; // تومان/ماه
    features: ['White Label', 'Dedicated Support', 'Custom Integration'];
  };
}
```

## 🪙 اقتصاد توکنی (Token Economy)

### **توکن $PERSIAN - ویژگی‌ها و کاربرد**

#### Smart Contract Architecture
```solidity
// PERSIAN Token Contract (Solidity for TON)
pragma ton-solidity >= 0.35.0;

contract PersianToken {
    string public name = "Persian Mini-App Token";
    string public symbol = "PERSIAN";
    uint8 public decimals = 9;
    uint256 public totalSupply = 1_000_000_000 * 10**9; // 1 billion tokens
    
    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;
    
    // Reward pools
    uint256 public userRewardPool = 300_000_000 * 10**9;     // 30%
    uint256 public developerRewardPool = 200_000_000 * 10**9; // 20%
    uint256 public stakingRewardPool = 150_000_000 * 10**9;  // 15%
    uint256 public teamReserve = 150_000_000 * 10**9;       // 15%
    uint256 public publicSale = 200_000_000 * 10**9;        // 20%
    
    event RewardDistributed(address indexed user, uint256 amount, string rewardType);
    
    function distributeUserReward(
        address user, 
        uint256 amount, 
        string rewardType
    ) external onlyAuthorized {
        require(userRewardPool >= amount, "Insufficient reward pool");
        
        balanceOf[user] += amount;
        userRewardPool -= amount;
        
        emit RewardDistributed(user, amount, rewardType);
    }
}
```

### **سیستم پاداش جامع (Comprehensive Reward System)**

#### پاداش‌های کاربران
```typescript
interface UserRewards {
  MINI_APP_START: {
    amount: 10; // PERSIAN tokens
    description: "اولین استفاده از مینی‌اپ";
    cooldown: "once_per_app";
  };
  
  REVIEW_WRITING: {
    basic: 5;     // نظر ساده
    detailed: 25; // نظر تخصصی با حداقل 100 کلمه
    expert: 50;   // نظر فنی تایید شده
    description: "نوشتن نظر کیفی";
  };
  
  SOCIAL_ENGAGEMENT: {
    GROUP_JOIN: 3;
    CHANNEL_SUBSCRIBE: 2;
    BOT_START: 1;
    RECOMMENDATION: 15; // توصیه اپ در پروفایل
  };
  
  FINANCIAL_ACTIVITY: {
    TRANSACTION_BONUS: 0.001; // درصد تراکنش
    STAKING_REWARD: 0.0001;   // روزانه برای staking
    PREMIUM_BONUS: 100;       // اعضای پرمیوم تلگرام
  };
}

// پیاده‌سازی سیستم پاداش
class RewardSystem {
  async distributeReward(
    userId: string, 
    rewardType: keyof UserRewards, 
    metadata?: any
  ): Promise<void> {
    const user = await this.getUserById(userId);
    const rewardConfig = UserRewards[rewardType];
    
    // محاسبه مقدار پاداش
    let amount = this.calculateRewardAmount(rewardType, metadata);
    
    // اعمال multiplier برای کاربران VIP
    if (user.isPremium) {
      amount *= 1.5; // 50% bonus for premium users
    }
    
    // توزیع توکن
    await this.persianToken.distributeUserReward(
      user.walletAddress, 
      amount,
      rewardType
    );
    
    // ثبت در دیتابیس
    await this.recordRewardTransaction(userId, amount, rewardType);
  }
}
```

### **استراتژی Staking و DeFi**

#### Staking Pools
```typescript
interface StakingPool {
  FLEXIBLE: {
    minAmount: 100; // PERSIAN
    apy: 0.08;     // 8% سالانه
    withdrawTime: 0; // بدون قفل
  };
  
  LOCKED_30_DAYS: {
    minAmount: 500;
    apy: 0.15;     // 15% سالانه
    withdrawTime: 30 * 24 * 60 * 60; // 30 روز
  };
  
  LOCKED_90_DAYS: {
    minAmount: 1000;
    apy: 0.25;     // 25% سالانه
    withdrawTime: 90 * 24 * 60 * 60; // 90 روز
  };
}

// Smart Contract for Staking
contract PersianStaking {
    struct StakeInfo {
        uint256 amount;
        uint256 startTime;
        uint256 lockPeriod;
        uint256 apy;
        bool isActive;
    }
    
    mapping(address => StakeInfo[]) public userStakes;
    
    function stake(
        uint256 amount, 
        uint256 lockPeriod
    ) external {
        require(amount >= getMinStakeAmount(lockPeriod), "Amount too low");
        
        // Transfer tokens to contract
        persianToken.transferFrom(msg.sender, address(this), amount);
        
        // Create stake record
        userStakes[msg.sender].push(StakeInfo({
            amount: amount,
            startTime: block.timestamp,
            lockPeriod: lockPeriod,
            apy: getAPY(lockPeriod),
            isActive: true
        }));
    }
    
    function calculateReward(
        address user, 
        uint256 stakeIndex
    ) public view returns (uint256) {
        StakeInfo memory stake = userStakes[user][stakeIndex];
        
        if (!stake.isActive) return 0;
        
        uint256 timeStaked = block.timestamp - stake.startTime;
        uint256 yearInSeconds = 365 * 24 * 60 * 60;
        
        return (stake.amount * stake.apy * timeStaked) / yearInSeconds;
    }
}
```

## 🔗 ادغام TON Blockchain

### **ساختار کیف پول‌ها**

#### Custodial Wallet (برای مبتدیان)
```typescript
class CustodialWalletService {
  async createUserWallet(telegramId: number): Promise<WalletInfo> {
    // تولید کیف پول جدید
    const wallet = await TonWeb.wallet.create({
      publicKey: await this.generateKeyPair()
    });
    
    // ذخیره در دیتابیس
    await this.database.saveWallet({
      telegramId,
      address: wallet.address.toString(),
      isCustomodial: true,
      createdAt: new Date()
    });
    
    return {
      address: wallet.address.toString(),
      type: 'custodial'
    };
  }
  
  async sendTransaction(
    fromTelegramId: number, 
    toAddress: string, 
    amount: string,
    tokenType: 'TON' | 'PERSIAN'
  ): Promise<string> {
    const userWallet = await this.getUserWallet(fromTelegramId);
    
    if (tokenType === 'PERSIAN') {
      return await this.sendPersianTokens(userWallet, toAddress, amount);
    } else {
      return await this.sendTON(userWallet, toAddress, amount);
    }
  }
}
```

#### Non-Custodial Integration (TON Connect)
```typescript
import { TonConnect } from '@tonconnect/sdk';

class TonConnectService {
  private tonConnect: TonConnect;
  
  constructor() {
    this.tonConnect = new TonConnect({
      manifestUrl: 'https://persian-miniapp.center/tonconnect-manifest.json'
    });
  }
  
  async connectExternalWallet(): Promise<ConnectedWallet> {
    const walletConnectionSource = {
      universalLink: 'https://wallet.ton.org/ton-connect',
      bridgeUrl: 'https://bridge.tonapi.io/bridge'
    };
    
    const connectedWallet = await this.tonConnect.connect(walletConnectionSource);
    
    // ذخیره اتصال در دیتابیس
    await this.database.linkExternalWallet({
      telegramId: this.currentUser.telegramId,
      walletAddress: connectedWallet.account.address,
      walletType: connectedWallet.device.appName
    });
    
    return connectedWallet;
  }
}
```

### **پرداخت با Telegram Stars**

#### Stars to Persian Token Exchange
```typescript
class StarsExchangeService {
  private readonly EXCHANGE_RATE = 1; // 1 Star = 1 PERSIAN (initial rate)
  
  async exchangeStarsToPersian(
    telegramId: number, 
    starsAmount: number
  ): Promise<ExchangeResult> {
    // تایید موجودی Stars کاربر
    const userStars = await this.telegramAPI.getUserStarsBalance(telegramId);
    if (userStars < starsAmount) {
      throw new Error('Insufficient stars balance');
    }
    
    // محاسبه Persian tokens
    const persianAmount = starsAmount * this.EXCHANGE_RATE;
    
    // برداشت Stars از حساب کاربر
    await this.telegramAPI.deductStars(telegramId, starsAmount);
    
    // اعطای Persian tokens
    await this.persianToken.distributeUserReward(
      await this.getUserWalletAddress(telegramId),
      persianAmount,
      'STARS_EXCHANGE'
    );
    
    return {
      starsDeducted: starsAmount,
      persianReceived: persianAmount,
      exchangeRate: this.EXCHANGE_RATE,
      timestamp: new Date()
    };
  }
}
```

### **پرداخت‌های داخلی و خرید Stars**

#### Iranian Payment Gateway Integration
```typescript
interface PaymentGateway {
  name: string;
  supportedMethods: ('card' | 'wallet' | 'bank')[];
  feePercentage: number;
  minimumAmount: number;
}

const IRANIAN_GATEWAYS: PaymentGateway[] = [
  {
    name: 'zarinpal',
    supportedMethods: ['card', 'wallet'],
    feePercentage: 0.015, // 1.5%
    minimumAmount: 10000   // 10,000 تومان
  },
  {
    name: 'idpay',
    supportedMethods: ['card', 'bank'],
    feePercentage: 0.020, // 2%
    minimumAmount: 5000    // 5,000 تومان
  }
];

class IranianPaymentService {
  async buyStarsWithToman(
    telegramId: number,
    tomanAmount: number,
    gateway: string
  ): Promise<PurchaseResult> {
    const STARS_PRICE_TOMAN = 1500; // 1 Star = 1500 تومان
    const starsAmount = Math.floor(tomanAmount / STARS_PRICE_TOMAN);
    
    // ایجاد تراکنش پرداخت
    const payment = await this.createPayment({
      amount: tomanAmount,
      gateway,
      description: `خرید ${starsAmount} Telegram Stars`,
      callbackUrl: `${process.env.API_URL}/payment/callback`
    });
    
    return {
      paymentUrl: payment.paymentUrl,
      starsAmount,
      tomanAmount,
      transactionId: payment.transactionId
    };
  }
  
  async handlePaymentCallback(transactionId: string): Promise<void> {
    const transaction = await this.getTransaction(transactionId);
    
    if (transaction.status === 'success') {
      // اعطای Stars به کاربر
      await this.telegramAPI.grantStars(
        transaction.telegramId, 
        transaction.starsAmount
      );
      
      // ثبت تراکنش موفق
      await this.database.recordSuccessfulPurchase(transaction);
    }
  }
}
```

## 👥 نقش‌های کاربری و دسترسی‌ها

### **سطوح دسترسی**

```typescript
enum UserRole {
  SUPER_ADMIN = 'super_admin',
  DEVELOPER = 'developer',
  BUSINESS_OWNER = 'business_owner',
  PREMIUM_BUSINESS = 'premium_business',
  USER = 'user'
}

interface RolePermissions {
  [UserRole.SUPER_ADMIN]: {
    access: ['all_data', 'contract_room', 'payment_control', 'user_management'];
    restrictions: [];
  };
  
  [UserRole.DEVELOPER]: {
    access: ['developer_dashboard', 'app_management', 'analytics', 'earnings'];
    restrictions: ['requires_admin_approval'];
  };
  
  [UserRole.BUSINESS_OWNER]: {
    access: ['basic_business_features', 'customer_support'];
    restrictions: ['limited_analytics'];
  };
  
  [UserRole.PREMIUM_BUSINESS]: {
    access: ['advanced_business_features', 'priority_support', 'advanced_analytics'];
    restrictions: [];
  };
  
  [UserRole.USER]: {
    access: ['browse_apps', 'earn_rewards', 'basic_wallet'];
    restrictions: ['no_developer_features'];
  };
}
```

### **سیستم تایید و کنترل کیفیت**

```typescript
class AppApprovalSystem {
  async submitAppForReview(
    developerId: string, 
    appData: AppSubmission
  ): Promise<string> {
    // ایجاد درخواست بررسی
    const reviewRequest = await this.database.createReviewRequest({
      developerId,
      appData,
      status: 'pending',
      submittedAt: new Date()
    });
    
    // اعلان به ادمین‌ها
    await this.notificationService.notifyAdmins(
      'new_app_submission',
      { appName: appData.name, developer: developerId }
    );
    
    return reviewRequest.id;
  }
  
  async approveApp(reviewId: string, adminId: string): Promise<void> {
    const review = await this.getReviewRequest(reviewId);
    
    // به‌روزرسانی وضعیت
    await this.database.updateReviewStatus(reviewId, 'approved');
    
    // انتشار اپ
    await this.publishApp(review.appData);
    
    // پاداش به توسعه‌دهنده
    await this.rewardSystem.distributeReward(
      review.developerId,
      'APP_APPROVED',
      { appId: review.appData.id }
    );
  }
}
```

## 🤖 AI Agent برای تبدیل Instagram

### **Instagram to Telegram Mini-App Converter**

```typescript
class InstagramConverterAI {
  async analyzeInstagramPage(instagramUrl: string): Promise<PageAnalysis> {
    // استخراج اطلاعات از پیج اینستاگرام
    const pageData = await this.scrapeInstagramData(instagramUrl);
    
    // تحلیل محتوا با AI
    const analysis = await this.aiService.analyzeContent({
      posts: pageData.posts,
      bio: pageData.bio,
      highlights: pageData.highlights,
      businessCategory: pageData.businessCategory
    });
    
    return {
      businessType: analysis.detectedBusinessType,
      recommendedFeatures: analysis.suggestedMiniAppFeatures,
      contentStructure: analysis.contentMapping,
      designSuggestions: analysis.uiRecommendations
    };
  }
  
  async generateMiniAppStructure(
    analysis: PageAnalysis
  ): Promise<MiniAppBlueprint> {
    const template = this.selectTemplate(analysis.businessType);
    
    return {
      name: analysis.businessName,
      category: analysis.businessType,
      pages: await this.generatePages(analysis),
      features: this.mapFeatures(analysis.recommendedFeatures),
      styling: this.generateStyling(analysis.designSuggestions),
      products: await this.extractProducts(analysis.contentStructure)
    };
  }
  
  private async generatePages(analysis: PageAnalysis): Promise<PageStructure[]> {
    const basePages = ['home', 'products', 'about', 'contact'];
    
    if (analysis.businessType === 'restaurant') {
      basePages.push('menu', 'reservations');
    } else if (analysis.businessType === 'fashion') {
      basePages.push('catalog', 'size-guide');
    }
    
    return basePages.map(page => ({
      name: page,
      components: this.generatePageComponents(page, analysis),
      layout: this.getOptimalLayout(page)
    }));
  }
}
```

این سیستم کسب‌وکار جامع قابلیت پشتیبانی از هزاران توسعه‌دهنده و میلیون‌ها کاربر را دارد و با رویکرد اقتصاد توکنی پایدار طراحی شده است.