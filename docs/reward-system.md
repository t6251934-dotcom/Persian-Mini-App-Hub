# سیستم جامع پاداش‌ها و انگیزه‌های کاربری
# Comprehensive Reward System & User Incentives

## 🎯 فلسفه سیستم پاداش

### **اهداف کلی**
- ایجاد انگیزه برای استفاده مداوم از پلتفرم
- تشویق کاربران به تولید محتوای کیفی
- ایجاد اقتصاد گردشی توکن $PERSIAN
- جذب و حفظ کاربران فعال

### **اصول طراحی**
```typescript
interface RewardDesignPrinciples {
  fairness: 'پاداش‌ها بر اساس ارزش واقعی فعالیت';
  sustainability: 'اقتصاد پایدار و قابل‌تداوم';
  engagement: 'ایجاد انگیزه برای فعالیت مداوم';
  quality_over_quantity: 'تشویق کیفیت به جای کمیت';
  transparency: 'شفافیت کامل در نحوه محاسبه پاداش‌ها';
}
```

## 💎 انواع پاداش‌ها

### **۱. پاداش استارت مینی‌اپ**
```typescript
interface MiniAppStartReward {
  base_amount: 10; // PERSIAN tokens
  first_time_bonus: 20; // اولین استفاده از اپ
  daily_usage_bonus: 1; // استفاده روزانه
  weekly_streak: {
    3_days: 15;
    5_days: 30;
    7_days: 50;
  };
  
  // Anti-fraud measures
  cooldown_per_app: '24_hours';
  max_daily_apps: 10;
  verification_required: true;
}

class MiniAppRewardService {
  async processMiniAppStart(
    userId: string, 
    appId: string
  ): Promise<RewardResult> {
    // Check if user already got reward for this app today
    const lastReward = await this.getLastAppReward(userId, appId);
    if (this.isWithinCooldown(lastReward)) {
      throw new Error('Reward cooldown active');
    }
    
    // Calculate reward based on user activity
    const userStats = await this.getUserStats(userId);
    let rewardAmount = MiniAppStartReward.base_amount;
    
    // First time using this specific app
    if (!await this.hasUsedAppBefore(userId, appId)) {
      rewardAmount += MiniAppStartReward.first_time_bonus;
    }
    
    // Streak bonus
    const streak = await this.getUserDailyStreak(userId);
    if (streak >= 7) {
      rewardAmount += MiniAppStartReward.weekly_streak['7_days'];
    } else if (streak >= 5) {
      rewardAmount += MiniAppStartReward.weekly_streak['5_days'];
    } else if (streak >= 3) {
      rewardAmount += MiniAppStartReward.weekly_streak['3_days'];
    }
    
    await this.distributeReward(userId, rewardAmount, 'MINI_APP_START');
    return { amount: rewardAmount, type: 'MINI_APP_START' };
  }
}
```

### **۲. پاداش نظرات و امتیازدهی**
```typescript
interface ReviewRewardSystem {
  basic_review: {
    amount: 5;
    min_length: 20; // characters
    requirements: ['rating', 'text'];
  };
  
  detailed_review: {
    amount: 25;
    min_length: 100;
    requirements: ['rating', 'detailed_text', 'pros_cons'];
    quality_score_threshold: 0.7;
  };
  
  expert_review: {
    amount: 50;
    min_length: 200;
    requirements: ['comprehensive_analysis', 'technical_details', 'recommendations'];
    expert_badge_required: true;
    quality_score_threshold: 0.9;
  };
  
  helpful_votes: {
    amount_per_vote: 2;
    max_daily_earnings: 50;
  };
}

class ReviewQualityAnalyzer {
  async analyzeReviewQuality(review: ReviewContent): Promise<QualityScore> {
    // Persian language sentiment analysis
    const sentiment = await this.persianSentimentAnalyzer.analyze(review.text);
    
    // Check for spam/fake content
    const spamScore = await this.detectSpam(review.text);
    if (spamScore > 0.5) {
      return { score: 0, reason: 'Spam detected' };
    }
    
    // Analyze review depth and usefulness
    const features = {
      length: review.text.length,
      sentiment_balance: this.calculateSentimentBalance(sentiment),
      specific_details: this.countSpecificDetails(review.text),
      helpfulness_indicators: this.findHelpfulnessIndicators(review.text),
      technical_accuracy: await this.assessTechnicalAccuracy(review.text)
    };
    
    // Machine learning model to score quality
    const qualityScore = await this.qualityModel.predict(features);
    
    return {
      score: qualityScore,
      features,
      tier: this.determineRewardTier(qualityScore)
    };
  }
  
  private determineRewardTier(score: number): 'basic' | 'detailed' | 'expert' {
    if (score >= 0.9) return 'expert';
    if (score >= 0.7) return 'detailed';
    return 'basic';
  }
}
```

### **۳. پاداش‌های اجتماعی**
```typescript
interface SocialRewards {
  group_participation: {
    join_group: 3;
    active_participation: 5; // per meaningful message
    helpful_answer: 10;
    moderator_recognition: 20;
  };
  
  channel_engagement: {
    subscribe: 2;
    share_content: 5;
    quality_comment: 8;
    content_creation: 25;
  };
  
  bot_interaction: {
    start_bot: 1;
    complete_bot_task: 5;
    bot_review: 10;
  };
  
  referral_program: {
    successful_referral: 100;
    referee_bonus: 50;
    referrer_lifetime_bonus: 0.02; // 2% of referee's earnings
  };
}

class SocialEngagementTracker {
  async trackGroupParticipation(
    userId: string, 
    groupId: string, 
    action: GroupAction
  ): Promise<void> {
    const participation = await this.getGroupParticipation(userId, groupId);
    
    switch (action.type) {
      case 'JOIN':
        await this.rewardUser(userId, SocialRewards.group_participation.join_group);
        break;
        
      case 'MESSAGE':
        if (await this.isQualityMessage(action.content)) {
          await this.rewardUser(userId, SocialRewards.group_participation.active_participation);
        }
        break;
        
      case 'HELPFUL_ANSWER':
        await this.rewardUser(userId, SocialRewards.group_participation.helpful_answer);
        break;
    }
    
    await this.updateParticipationStats(userId, groupId, action);
  }
  
  private async isQualityMessage(content: string): Promise<boolean> {
    // Prevent spam and low-quality messages
    if (content.length < 10) return false;
    
    // Check for spam patterns
    const spamScore = await this.spamDetector.analyze(content);
    if (spamScore > 0.3) return false;
    
    // Check for meaningful contribution
    const meaningScore = await this.meaningfulnessAnalyzer.analyze(content);
    return meaningScore > 0.6;
  }
}
```

### **۴. پاداش‌های مالی**
```typescript
interface FinancialRewards {
  transaction_bonus: {
    percentage: 0.1; // 0.1% of transaction amount
    min_transaction: 1000; // minimum 1000 toman
    max_daily_bonus: 100; // max 100 PERSIAN per day
  };
  
  staking_rewards: {
    daily_rate: 0.0274; // 10% APY / 365 days
    compound_frequency: 'daily';
    min_stake_amount: 100;
  };
  
  premium_membership_bonus: {
    monthly_bonus: 200;
    exclusive_multiplier: 1.5; // 50% more rewards
    early_access_rewards: 50;
  };
  
  trading_rewards: {
    volume_bonus: 0.05; // 0.05% of trading volume
    market_making: 0.1; // additional for providing liquidity
    referral_trading: 0.02; // from referred users' trading
  };
}

class FinancialRewardManager {
  async processTransactionReward(
    userId: string, 
    transactionAmount: number, 
    currency: 'TOMAN' | 'STARS' | 'TON'
  ): Promise<RewardResult> {
    if (transactionAmount < FinancialRewards.transaction_bonus.min_transaction) {
      return { amount: 0, reason: 'Below minimum threshold' };
    }
    
    // Calculate base reward
    const baseReward = transactionAmount * FinancialRewards.transaction_bonus.percentage;
    
    // Check daily limits
    const dailyEarnings = await this.getDailyTransactionRewards(userId);
    if (dailyEarnings >= FinancialRewards.transaction_bonus.max_daily_bonus) {
      return { amount: 0, reason: 'Daily limit reached' };
    }
    
    // Apply premium multiplier if applicable
    const user = await this.getUser(userId);
    let finalReward = baseReward;
    if (user.isPremium) {
      finalReward *= FinancialRewards.premium_membership_bonus.exclusive_multiplier;
    }
    
    // Ensure we don't exceed daily limit
    finalReward = Math.min(
      finalReward, 
      FinancialRewards.transaction_bonus.max_daily_bonus - dailyEarnings
    );
    
    await this.distributeReward(userId, finalReward, 'TRANSACTION_BONUS');
    return { amount: finalReward, type: 'TRANSACTION_BONUS' };
  }
  
  async calculateStakingRewards(userId: string): Promise<StakingReward[]> {
    const stakes = await this.getUserStakes(userId);
    const rewards = [];
    
    for (const stake of stakes) {
      const daysSinceLastReward = this.getDaysSince(stake.lastRewardDate);
      const dailyReward = stake.amount * FinancialRewards.staking_rewards.daily_rate;
      const totalReward = dailyReward * daysSinceLastReward;
      
      rewards.push({
        stakeId: stake.id,
        amount: totalReward,
        days: daysSinceLastReward
      });
    }
    
    return rewards;
  }
}
```

### **۵. پاداش‌های ویژه**
```typescript
interface SpecialRewards {
  platform_milestones: {
    first_1000_users: 1000;
    beta_tester: 500;
    bug_reporter: 200;
    feature_suggester: 100;
  };
  
  seasonal_events: {
    ramadan_special: {
      daily_bonus: 20;
      iftar_sharing: 50;
      community_challenge: 200;
    };
    nowruz_celebration: {
      new_year_bonus: 1400; // Persian year number
      haft_sin_photo: 100;
      tradition_sharing: 75;
    };
    yalda_night: {
      poetry_sharing: 60;
      pomegranate_photo: 40;
      story_telling: 80;
    };
  };
  
  achievement_badges: {
    app_explorer: { // Used 50+ different apps
      reward: 500;
      badge: 'explorer_gold';
    };
    review_master: { // Written 100+ quality reviews
      reward: 1000;
      badge: 'reviewer_platinum';
    };
    community_leader: { // High engagement in groups
      reward: 800;
      badge: 'leader_diamond';
    };
    early_adopter: { // First 100 users of new features
      reward: 300;
      badge: 'pioneer_silver';
    };
  };
}

class AchievementSystem {
  async checkAndAwardAchievements(userId: string): Promise<Achievement[]> {
    const userStats = await this.getUserComprehensiveStats(userId);
    const currentAchievements = await this.getUserAchievements(userId);
    const newAchievements = [];
    
    // Check app explorer achievement
    if (userStats.uniqueAppsUsed >= 50 && 
        !currentAchievements.includes('app_explorer')) {
      await this.awardAchievement(userId, 'app_explorer');
      newAchievements.push('app_explorer');
    }
    
    // Check review master achievement
    if (userStats.qualityReviews >= 100 && 
        !currentAchievements.includes('review_master')) {
      await this.awardAchievement(userId, 'review_master');
      newAchievements.push('review_master');
    }
    
    // Check community leader achievement
    const communityScore = await this.calculateCommunityScore(userId);
    if (communityScore >= 1000 && 
        !currentAchievements.includes('community_leader')) {
      await this.awardAchievement(userId, 'community_leader');
      newAchievements.push('community_leader');
    }
    
    return newAchievements;
  }
  
  private async calculateCommunityScore(userId: string): Promise<number> {
    const stats = await this.getCommunityStats(userId);
    
    return (
      stats.helpfulAnswers * 10 +
      stats.qualityComments * 5 +
      stats.groupsModerated * 50 +
      stats.usersHelped * 20 +
      stats.contentShares * 3
    );
  }
}
```

## 📊 Gamification & Engagement

### **سیستم سطح‌بندی کاربران**
```typescript
interface UserLevelSystem {
  levels: {
    NEWCOMER: {
      requirement: 0;
      benefits: ['basic_profile', 'standard_rewards'];
      multiplier: 1.0;
    };
    EXPLORER: {
      requirement: 500; // PERSIAN tokens earned
      benefits: ['profile_customization', 'priority_support'];
      multiplier: 1.2;
    };
    CONTRIBUTOR: {
      requirement: 2000;
      benefits: ['beta_features', 'advanced_analytics'];
      multiplier: 1.5;
    };
    EXPERT: {
      requirement: 10000;
      benefits: ['expert_badge', 'consultation_opportunities'];
      multiplier: 2.0;
    };
    CHAMPION: {
      requirement: 50000;
      benefits: ['champion_status', 'exclusive_events', 'revenue_sharing'];
      multiplier: 3.0;
    };
  };
}

class LevelManager {
  async checkLevelUp(userId: string): Promise<LevelUpResult | null> {
    const user = await this.getUser(userId);
    const totalEarned = await this.getUserTotalEarnings(userId);
    
    const nextLevel = this.getNextLevel(user.currentLevel);
    if (!nextLevel) return null;
    
    if (totalEarned >= nextLevel.requirement) {
      await this.promoteUser(userId, nextLevel.name);
      
      // Grant level-up bonus
      const levelUpBonus = this.calculateLevelUpBonus(nextLevel.name);
      await this.distributeReward(userId, levelUpBonus, 'LEVEL_UP');
      
      return {
        newLevel: nextLevel.name,
        bonus: levelUpBonus,
        newBenefits: nextLevel.benefits
      };
    }
    
    return null;
  }
}
```

### **چالش‌های روزانه و هفتگی**
```typescript
interface ChallengeSystem {
  daily_challenges: {
    'mini_app_marathon': {
      goal: 'استفاده از 5 مینی‌اپ مختلف';
      reward: 100;
      difficulty: 'easy';
    };
    'quality_reviewer': {
      goal: 'نوشتن 3 نظر کیفی';
      reward: 150;
      difficulty: 'medium';
    };
    'social_butterfly': {
      goal: 'کمک به 5 نفر در گروه‌ها';
      reward: 200;
      difficulty: 'hard';
    };
  };
  
  weekly_challenges: {
    'app_discoverer': {
      goal: 'کشف و امتحان 20 مینی‌اپ جدید';
      reward: 1000;
      progress_tracking: true;
    };
    'community_champion': {
      goal: 'کسب 100 رای مثبت برای نظرات';
      reward: 800;
      social_verification: true;
    };
    'token_saver': {
      goal: 'جمع‌آوری 500 توکن PERSIAN';
      reward: 250; // bonus tokens
      savings_incentive: true;
    };
  };
}
```

## 💰 اقتصاد توکن و استراتژی توزیع

### **توزیع کلی توکن‌ها**
```typescript
interface TokenDistribution {
  total_supply: 1_000_000_000; // 1 billion PERSIAN tokens
  
  allocation: {
    user_rewards: {
      percentage: 30;
      amount: 300_000_000;
      distribution_period: '5_years';
    };
    developer_incentives: {
      percentage: 20;
      amount: 200_000_000;
      performance_based: true;
    };
    staking_rewards: {
      percentage: 15;
      amount: 150_000_000;
      apy_target: 10;
    };
    team_and_advisors: {
      percentage: 15;
      amount: 150_000_000;
      vesting_period: '4_years';
    };
    ecosystem_development: {
      percentage: 10;
      amount: 100_000_000;
      grants_and_partnerships: true;
    };
    public_sale: {
      percentage: 10;
      amount: 100_000_000;
      initial_liquidity: true;
    };
  };
}

class TokenEconomyManager {
  async calculateDailyRewardBudget(): Promise<number> {
    const totalRewardPool = TokenDistribution.allocation.user_rewards.amount;
    const distributionDays = 5 * 365; // 5 years
    const dailyBase = totalRewardPool / distributionDays;
    
    // Adjust based on active users (more users = more budget)
    const activeUsers = await this.getActiveUsersCount();
    const adjustmentFactor = Math.log(activeUsers + 1) / Math.log(1000); // Scale factor
    
    return dailyBase * Math.min(adjustmentFactor, 3); // Max 3x increase
  }
  
  async preventInflation(): Promise<void> {
    const currentSupply = await this.getCurrentCirculatingSupply();
    const rewardRate = await this.getCurrentRewardRate();
    
    // If inflation rate > 5% annually, reduce rewards
    const annualInflation = (rewardRate * 365) / currentSupply;
    if (annualInflation > 0.05) {
      const reductionFactor = 0.05 / annualInflation;
      await this.adjustRewardRates(reductionFactor);
    }
  }
}
```

## 🔄 Anti-Fraud & Fairness

### **سیستم تشخیص تقلب**
```typescript
class FraudDetectionSystem {
  async detectSuspiciousActivity(userId: string): Promise<FraudAlert[]> {
    const alerts = [];
    
    // Check for bot-like behavior
    const activityPattern = await this.analyzeActivityPattern(userId);
    if (activityPattern.suspicion_score > 0.8) {
      alerts.push({
        type: 'BOT_BEHAVIOR',
        severity: 'HIGH',
        evidence: activityPattern.evidence
      });
    }
    
    // Check for fake reviews
    const reviewPattern = await this.analyzeReviewPattern(userId);
    if (reviewPattern.fake_probability > 0.7) {
      alerts.push({
        type: 'FAKE_REVIEWS',
        severity: 'MEDIUM',
        evidence: reviewPattern.indicators
      });
    }
    
    // Check for reward farming
    const rewardPattern = await this.analyzeRewardPattern(userId);
    if (rewardPattern.farming_score > 0.6) {
      alerts.push({
        type: 'REWARD_FARMING',
        severity: 'HIGH',
        evidence: rewardPattern.patterns
      });
    }
    
    return alerts;
  }
  
  private async analyzeActivityPattern(userId: string): Promise<ActivityAnalysis> {
    const activities = await this.getUserActivities(userId, '7_days');
    
    // Check for inhuman patterns
    const timeIntervals = this.calculateTimeIntervals(activities);
    const suspicionFactors = {
      too_regular: this.checkRegularityScore(timeIntervals),
      too_fast: this.checkSpeedScore(activities),
      unusual_hours: this.checkTimeDistribution(activities),
      duplicate_actions: this.checkDuplicateActions(activities)
    };
    
    const suspicion_score = Object.values(suspicionFactors).reduce((a, b) => a + b) / 4;
    
    return {
      suspicion_score,
      evidence: suspicionFactors
    };
  }
}
```

این سیستم پاداش جامع و متعادل برای ایجاد اقتصادی پایدار و جذاب طراحی شده است.