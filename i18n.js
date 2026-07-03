// i18n.js - Internationalization support for TangentVPN Website
const translations = {
  zh: {
    // Common
    'lang.switch': 'English',
    'site.title': 'TangentVPN',

    // Navigation
    'nav.intro': '简介',
    'nav.pricing': '定价',
    'nav.contact': '联系',
    'nav.faq': '答疑',
    'nav.purchase': '购买',
    'nav.download': '下载',
    'nav.tutorial': '教程',

    // Index page - Hero
    'index.hero.title': '人嘛，多看看才能开阔眼界',
    'index.hero.desc': '智能世界，跨国连接',
    'index.hero.cta': '立即购买',

    // Index page - About
    'index.about.title': '服务简介',
    'index.about.desc': '开启无界探索，与时代脉搏同频。我们的代理工具追求极致的便捷性、隐私性与安全性，您只需要下载我们的程序，然后进行购买后即可使用，非常简单，助您跨越地域限制，顺畅访问Google、YouTube、X、Netflix等网站。我们借助Cloudflare多边缘节点进行加速，使得在家用宽带下，网速亦能稳达80Mbps以上，让丝滑的4K视频流与高效办公成为您的日常。',

    // Index page - Pricing
    'index.pricing.title': '定价方案',
    'index.pricing.monthly': '月度计划',
    'index.pricing.monthly.price': '20元/月',
    'index.pricing.monthly.desc': '适合短期使用',
    'index.pricing.yearly': '年度计划',
    'index.pricing.yearly.price': '180元/年',
    'index.pricing.yearly.desc': '节省60元，最受欢迎',
    'index.pricing.permanent': '永久计划',
    'index.pricing.permanent.price': '1600元/永久',
    'index.pricing.permanent.desc': '一次付费，终身使用',
    'index.pricing.buy': '立即购买',
    'index.pricing.popular': '最受欢迎',

    // Index page - Contact
    'index.contact.title': '联系我们',
    'index.contact.email': '邮箱',
    'index.contact.telegram': 'Telegram',
    'index.contact.email.value': 'tangent2533@gmail.com',
    'index.contact.telegram.value': '@tangent_group',
    'index.contact.telegram.url': 'https://t.me/tangent_group',

    // Index page - FAQ
    'index.faq.title': '常见问题',
    'index.faq.q1': '我们与VPN的区别是什么？',
    'index.faq.a1': 'VPN与我们的作用类似，但VPN配置更加复杂且相对容易被封禁，而我们的代理则灵活稳定，在全球拥有数百节点。',
    'index.faq.q2': '使用遇到问题怎么办？',
    'index.faq.a2': '我们的软件在开发时充分考虑了稳定性，所以大概率不会遇到问题，如果您真的遇到了，可以立即联系邮件：tangent2533@gmail.com或Telegram群组：https://t.me/tangent_group',

    // Index page - Footer
    'index.footer.rights': '版权所有',

    // Purchase page
    'purchase.title': '选择您的计划',
    'purchase.desc': '选择适合您的套餐，开始享受高速稳定的代理服务',
    'purchase.monthly': '月度购买',
    'purchase.monthly.price': '20元/月',
    'purchase.monthly.desc': '适合短期使用，灵活方便',
    'purchase.yearly': '年度购买',
    'purchase.yearly.price': '180元/年',
    'purchase.yearly.desc': '平均每月15元，节省60元',
    'purchase.permanent': '永久购买',
    'purchase.permanent.price': '1600元',
    'purchase.permanent.desc': '一次付费，终身使用',
    'purchase.permanent.modal.title': '永久计划购买说明',
    'purchase.permanent.modal.desc': '1600元永久计划不支持线上支付，请通过以下方式联系我们：',
    'purchase.permanent.modal.email': '邮箱：tangent2533@gmail.com',
    'purchase.permanent.modal.telegram': 'Telegram：https://t.me/tangent_group',
    'purchase.permanent.modal.close': '关闭',
    'purchase.back': '返回首页',
    'purchase.select': '选择此计划',

    // Download page
    'download.title': '下载客户端',
    'download.desc': '选择适合您操作系统的版本进行下载',
    'download.compressed': '压缩包版本',
    'download.compressed.desc': '体积更小，需要解压后使用',
    'download.normal': '非压缩包版本',
    'download.normal.desc': '下载后可直接运行',
    'download.darwin': 'macOS',
    'download.darwin.amd64': 'macOS (AMD64)',
    'download.darwin.arm64': 'macOS (ARM64)',
    'download.linux': 'Linux',
    'download.linux.amd64': 'Linux (AMD64)',
    'download.windows': 'Windows',
    'download.windows.amd64': 'Windows (AMD64)',
    'download.github': 'GitHub 下载',
    'download.lanzou': '蓝奏云下载',
    'download.password': '密码：',
    'download.back': '返回首页',
    'download.note': '注意：所有版本的GUI一致，请根据您的系统架构选择对应的版本',
    'download.lanzou.modal.title': '蓝奏云下载',
    'download.lanzou.modal.desc': '请点击下方链接前往蓝奏云下载：',
    'download.lanzou.modal.close': '关闭',

    // Tutorial page
    'tutorial.title': '使用教程',
    'tutorial.subtitle': '以 Windows-AMD64 版本举例（所有版本GUI一致）',
    'tutorial.step1.title': '打开网站',
    'tutorial.step1.desc': '打开网站，点击网站顶部"购买"按钮。如果尚未下载软件，可以点击下载按钮选择合适的版本',
    'tutorial.step2.title': '选择激活码',
    'tutorial.step2.desc': '按照自己需求选择激活码，然后进行支付',
    'tutorial.step3.title': '粘贴激活码',
    'tutorial.step3.desc': '将激活码粘贴进入自己的程序内',
    'tutorial.step4.title': '激活',
    'tutorial.step4.desc': '点击Active Code按钮进行激活',
    'tutorial.step5.title': '开始使用',
    'tutorial.step5.desc': '服务已经启动，现在已经可以访问google.com、youtube.com等网站',
    'tutorial.back': '返回首页',
    'tutorial.download.link': '前往下载页面',
  },
  en: {
    // Common
    'lang.switch': '中文',
    'site.title': 'TangentVPN',

    // Navigation
    'nav.intro': 'About',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    'nav.faq': 'FAQ',
    'nav.purchase': 'Purchase',
    'nav.download': 'Download',
    'nav.tutorial': 'Tutorial',

    // Index page - Hero
    'index.hero.title': 'Open Your Eyes, Broaden Your Horizons',
    'index.hero.desc': 'Intelligent world, transnational connectivity',
    'index.hero.cta': 'Get Started',

    // Index page - About
    'index.about.title': 'About Our Service',
    'index.about.desc': 'Start boundless exploration, staying in sync with the pulse of the times. Our proxy tool pursues ultimate convenience, privacy and security. You just need to download our program and purchase to start using it - very simple! Help you bypass regional restrictions and smoothly access Google, YouTube, X, Netflix and other websites. We leverage Cloudflare\'s multiple edge nodes for acceleration, enabling network speeds to steadily reach over 80Mbps on home broadband, making silky 4K video streaming and efficient office work your daily routine.',

    // Index page - Pricing
    'index.pricing.title': 'Pricing Plans',
    'index.pricing.monthly': 'Monthly Plan',
    'index.pricing.monthly.price': '20 CNY/mo',
    'index.pricing.monthly.desc': 'Perfect for short-term use',
    'index.pricing.yearly': 'Yearly Plan',
    'index.pricing.yearly.price': '180 CNY/yr',
    'index.pricing.yearly.desc': 'Save 60 CNY, most popular',
    'index.pricing.permanent': 'Lifetime Plan',
    'index.pricing.permanent.price': '1600 CNY',
    'index.pricing.permanent.desc': 'One-time payment, lifetime access',
    'index.pricing.buy': 'Buy Now',
    'index.pricing.popular': 'Most Popular',

    // Index page - Contact
    'index.contact.title': 'Contact Us',
    'index.contact.email': 'Email',
    'index.contact.telegram': 'Telegram',
    'index.contact.email.value': 'tangent2533@gmail.com',
    'index.contact.telegram.value': '@tangent_group',
    'index.contact.telegram.url': 'https://t.me/tangent_group',

    // Index page - FAQ
    'index.faq.title': 'Frequently Asked Questions',
    'index.faq.q1': 'What is the difference between you and VPN?',
    'index.faq.a1': 'VPN has a similar function to ours, but VPN is more complex to configure and relatively easier to be blocked. Our proxy is flexible and stable, with hundreds of nodes worldwide.',
    'index.faq.q2': 'What if I encounter problems during use?',
    'index.faq.a2': 'Our software is designed with stability in mind, so you are unlikely to encounter problems. If you do, please contact us immediately via email: tangent2533@gmail.com or Telegram group: https://t.me/tangent_group',

    // Index page - Footer
    'index.footer.rights': 'All rights reserved',

    // Purchase page
    'purchase.title': 'Choose Your Plan',
    'purchase.desc': 'Select the plan that suits you best and start enjoying fast, stable proxy service',
    'purchase.monthly': 'Monthly Purchase',
    'purchase.monthly.price': '20 CNY/mo',
    'purchase.monthly.desc': 'Flexible and convenient for short-term use',
    'purchase.yearly': 'Yearly Purchase',
    'purchase.yearly.price': '180 CNY/yr',
    'purchase.yearly.desc': 'Only 15 CNY/mo, save 60 CNY',
    'purchase.permanent': 'Lifetime Purchase',
    'purchase.permanent.price': '1600 CNY',
    'purchase.permanent.desc': 'One-time payment, lifetime access',
    'purchase.permanent.modal.title': 'Lifetime Plan Purchase',
    'purchase.permanent.modal.desc': 'The 1600 CNY lifetime plan does not support online payment. Please contact us through the following methods:',
    'purchase.permanent.modal.email': 'Email: tangent2533@gmail.com',
    'purchase.permanent.modal.telegram': 'Telegram: https://t.me/tangent_group',
    'purchase.permanent.modal.close': 'Close',
    'purchase.back': 'Back to Home',
    'purchase.select': 'Select Plan',

    // Download page
    'download.title': 'Download Client',
    'download.desc': 'Choose the version suitable for your operating system',
    'download.compressed': 'Compressed Version',
    'download.compressed.desc': 'Smaller size, requires extraction',
    'download.normal': 'Standard Version',
    'download.normal.desc': 'Can be run directly after download',
    'download.darwin': 'macOS',
    'download.darwin.amd64': 'macOS (AMD64)',
    'download.darwin.arm64': 'macOS (ARM64)',
    'download.linux': 'Linux',
    'download.linux.amd64': 'Linux (AMD64)',
    'download.windows': 'Windows',
    'download.windows.amd64': 'Windows (AMD64)',
    'download.github': 'GitHub Download',
    'download.lanzou': 'Lanzou Cloud Download',
    'download.password': 'Password: ',
    'download.back': 'Back to Home',
    'download.note': 'Note: All versions have the same GUI. Please choose the version matching your system architecture.',
    'download.lanzou.modal.title': 'Lanzou Cloud Download',
    'download.lanzou.modal.desc': 'Please click the link below to download from Lanzou Cloud:',
    'download.lanzou.modal.close': 'Close',

    // Tutorial page
    'tutorial.title': 'Tutorial',
    'tutorial.subtitle': 'Using Windows-AMD64 version as an example (all versions have the same GUI)',
    'tutorial.step1.title': 'Open Website',
    'tutorial.step1.desc': 'Open the website and click the "Purchase" button at the top',
    'tutorial.step2.title': 'Select Activation Code',
    'tutorial.step2.desc': 'Choose the activation code according to your needs and proceed with payment',
    'tutorial.step3.title': 'Paste Activation Code',
    'tutorial.step3.desc': 'Paste the activation code into your program',
    'tutorial.step4.title': 'Activate',
    'tutorial.step4.desc': 'Click the Active Code button to activate',
    'tutorial.step5.title': 'Start Using',
    'tutorial.step5.desc': 'Service is now started. You can now access google.com, youtube.com and other websites',
    'tutorial.back': 'Back to Home',
    'tutorial.download.link': 'Go to Download Page',
  }
};

// Get current language from localStorage or default to Chinese
function getCurrentLang() {
  return localStorage.getItem('lang') || 'zh';
}

// Set language
function setLang(lang) {
  localStorage.setItem('lang', lang);
  applyTranslations();
  updateLangSwitchButton();
}

// Toggle language
function switchLang() {
  const current = getCurrentLang();
  const newLang = current === 'zh' ? 'en' : 'zh';
  setLang(newLang);
}

// Update language switch button text
function updateLangSwitchButton() {
  const current = getCurrentLang();
  const btnText = current === 'zh' ? 'English' : '中文';
  document.getElementById('langSwitch').textContent = btnText;
  const langSwitchMobile = document.getElementById('langSwitchMobile');
  if (langSwitchMobile) {
    langSwitchMobile.textContent = btnText;
  }
}

// Apply translations to all elements with data-i18n attribute
function applyTranslations() {
  const lang = getCurrentLang();
  const trans = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (trans[key]) {
      el.textContent = trans[key];
    }
  });

  // Update page title
  document.title = lang === 'zh' ? 'TangentVPN - 代理服务' : 'TangentVPN - Proxy Service';
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  updateLangSwitchButton();
});
