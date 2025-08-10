import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'header.courses': 'Courses',
    'header.about': 'About',
    'header.pricing': 'Pricing',
    'header.contact': 'Contact',
    'header.login': 'Login',
    'header.start_learning': 'Start Learning',
    
    // Hero Section
    'hero.title': 'Master Trading with Expert Guidance',
    'hero.subtitle': 'Learn from professional traders and transform your financial future with our comprehensive trading education platform.',
    'hero.get_started': 'Get Started Today',
    'hero.watch_demo': 'Watch Demo',
    
    // Features
    'features.title': 'Why Choose TradeMaster Academy?',
    'features.expert_instructors': 'Expert Instructors',
    'features.expert_instructors_desc': 'Learn from successful traders with years of market experience',
    'features.live_trading': 'Live Trading Sessions',
    'features.live_trading_desc': 'Join real-time trading sessions and see strategies in action',
    'features.comprehensive_curriculum': 'Comprehensive Curriculum',
    'features.comprehensive_curriculum_desc': 'From basics to advanced strategies, we cover everything',
    'features.community_support': 'Community Support',
    'features.community_support_desc': 'Connect with fellow traders and get ongoing support',
    
    // Registration
    'register.title': 'Create Account',
    'register.subtitle': 'Join our trading community today',
    'register.first_name': 'First Name',
    'register.last_name': 'Last Name',
    'register.email': 'Email',
    'register.phone': 'Phone Number',
    'register.password': 'Password',
    'register.confirm_password': 'Confirm Password',
    'register.create_account': 'Create Account',
    'register.already_have_account': 'Already have an account?',
    'register.sign_in': 'Sign in',
    
    // Login
    'login.title': 'Welcome Back',
    'login.subtitle': 'Sign in to your account',
    'login.email': 'Email',
    'login.password': 'Password',
    'login.forgot_password': 'Forgot password?',
    'login.sign_in': 'Sign In',
    'login.no_account': "Don't have an account?",
    'login.sign_up': 'Sign up',
    
    // Contact Form
    'contact.form.title': 'Get in Touch',
    'contact.form.subtitle': 'Have questions? We\'d love to hear from you.',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    
    // About Page
    'about.title': 'About TradeMaster Academy',
    'about.mission.title': 'Our Mission',
    'about.mission.text': 'To democratize trading education and empower individuals with the knowledge and skills needed to succeed in financial markets.',
    'about.story.title': 'Our Story',
    'about.story.text': 'Founded by experienced traders and educators, TradeMaster Academy was born from the belief that quality trading education should be accessible to everyone. We combine years of market experience with modern teaching methods.',
    'about.values.title': 'Our Values',
    'about.values.education': 'Education First',
    'about.values.education_desc': 'We prioritize comprehensive, practical education over quick fixes.',
    'about.values.transparency': 'Transparency',
    'about.values.transparency_desc': 'Open and honest communication about market realities and risks.',
    'about.values.support': 'Community Support',
    'about.values.support_desc': 'Building a supportive community of traders helping each other succeed.',
    
    // Courses Page
    'courses.title': 'Our Courses',
    'courses.subtitle': 'Comprehensive trading education for all skill levels',
    'courses.beginner.title': 'Trading Fundamentals',
    'courses.beginner.price': '$299',
    'courses.beginner.duration': '4 weeks',
    'courses.beginner.desc': 'Perfect for beginners. Learn market basics, chart reading, and risk management.',
    'courses.intermediate.title': 'Advanced Strategies',
    'courses.intermediate.price': '$599',
    'courses.intermediate.duration': '8 weeks',
    'courses.intermediate.desc': 'Advanced technical analysis, trading psychology, and proven strategies.',
    'courses.professional.title': 'Professional Trading',
    'courses.professional.price': '$999',
    'courses.professional.duration': '12 weeks',
    'courses.professional.desc': 'Master-level course with live trading sessions and personal mentoring.',
    'courses.enroll': 'Enroll Now',
    
    // Pricing Page
    'pricing.title': 'Choose Your Plan',
    'pricing.subtitle': 'Flexible pricing options for every trader',
    'pricing.basic.title': 'Basic',
    'pricing.basic.price': '$99',
    'pricing.basic.period': 'per month',
    'pricing.pro.title': 'Professional',
    'pricing.pro.price': '$199',
    'pricing.pro.period': 'per month',
    'pricing.premium.title': 'Premium',
    'pricing.premium.price': '$299',
    'pricing.premium.period': 'per month',
    'pricing.get_started': 'Get Started',
    
    // Contact Page
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch with our team',
    'contact.info.title': 'Contact Information',
    'contact.info.address': 'Address',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Phone',
    
    // Footer
    'footer.description': 'Professional trading education for the modern trader. Join thousands of successful students.',
    'footer.quick_links': 'Quick Links',
    'footer.courses': 'Courses',
    'footer.about': 'About',
    'footer.pricing': 'Pricing',
    'footer.contact': 'Contact',
    'footer.support': 'Support',
    'footer.help': 'Help Center',
    'footer.faq': 'FAQ',
    'footer.community': 'Community',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.copyright': '© 2024 TradeMaster Academy. All rights reserved.',
  },
  ru: {
    // Header
    'header.courses': 'Курсы',
    'header.about': 'О нас',
    'header.pricing': 'Цены',
    'header.contact': 'Контакты',
    'header.login': 'Войти',
    'header.start_learning': 'Начать обучение',
    
    // Hero Section
    'hero.title': 'Освойте трейдинг с экспертным руководством',
    'hero.subtitle': 'Учитесь у профессиональных трейдеров и трансформируйте свое финансовое будущее с нашей комплексной образовательной платформой.',
    'hero.get_started': 'Начать сегодня',
    'hero.watch_demo': 'Смотреть демо',
    
    // Features
    'features.title': 'Почему TradeMaster Academy?',
    'features.expert_instructors': 'Эксперты-инструкторы',
    'features.expert_instructors_desc': 'Учитесь у успешных трейдеров с многолетним опытом работы на рынке',
    'features.live_trading': 'Торговые сессии в реальном времени',
    'features.live_trading_desc': 'Присоединяйтесь к торговым сессиям в реальном времени и смотрите стратегии в действии',
    'features.comprehensive_curriculum': 'Комплексная программа',
    'features.comprehensive_curriculum_desc': 'От основ до продвинутых стратегий, мы покрываем все',
    'features.community_support': 'Поддержка сообщества',
    'features.community_support_desc': 'Общайтесь с другими трейдерами и получайте постоянную поддержку',
    
    // Registration
    'register.title': 'Создать аккаунт',
    'register.subtitle': 'Присоединяйтесь к нашему торговому сообществу',
    'register.first_name': 'Имя',
    'register.last_name': 'Фамилия',
    'register.email': 'Email',
    'register.phone': 'Номер телефона',
    'register.password': 'Пароль',
    'register.confirm_password': 'Подтвердите пароль',
    'register.create_account': 'Создать аккаунт',
    'register.already_have_account': 'Уже есть аккаунт?',
    'register.sign_in': 'Войти',
    
    // Login
    'login.title': 'Добро пожаловать обратно',
    'login.subtitle': 'Войдите в свой аккаунт',
    'login.email': 'Email',
    'login.password': 'Пароль',
    'login.forgot_password': 'Забыли пароль?',
    'login.sign_in': 'Войти',
    'login.no_account': 'Нет аккаунта?',
    'login.sign_up': 'Зарегистрироваться',
    
    // Contact Form
    'contact.form.title': 'Свяжитесь с нами',
    'contact.form.subtitle': 'Есть вопросы? Мы будем рады вас выслушать.',
    'contact.form.name': 'Полное имя',
    'contact.form.email': 'Email адрес',
    'contact.form.phone': 'Номер телефона',
    'contact.form.message': 'Сообщение',
    'contact.form.send': 'Отправить сообщение',
    
    // About Page
    'about.title': 'О TradeMaster Academy',
    'about.mission.title': 'Наша миссия',
    'about.mission.text': 'Демократизировать торговое образование и дать людям знания и навыки, необходимые для успеха на финансовых рынках.',
    'about.story.title': 'Наша история',
    'about.story.text': 'Основанная опытными трейдерами и преподавателями, TradeMaster Academy была создана из убеждения, что качественное торговое образование должно быть доступно каждому.',
    'about.values.title': 'Наши ценности',
    'about.values.education': 'Образование прежде всего',
    'about.values.education_desc': 'Мы приоритизируем комплексное, практическое образование над быстрыми решениями.',
    'about.values.transparency': 'Прозрачность',
    'about.values.transparency_desc': 'Открытое и честное общение о рыночных реалиях и рисках.',
    'about.values.support': 'Поддержка сообщества',
    'about.values.support_desc': 'Создание поддерживающего сообщества трейдеров, помогающих друг другу преуспеть.',
    
    // Courses Page
    'courses.title': 'Наши курсы',
    'courses.subtitle': 'Комплексное торговое образование для всех уровней',
    'courses.beginner.title': 'Основы трейдинга',
    'courses.beginner.price': '$299',
    'courses.beginner.duration': '4 недели',
    'courses.beginner.desc': 'Идеально для начинающих. Изучите основы рынка, чтение графиков и управление рисками.',
    'courses.intermediate.title': 'Продвинутые стратегии',
    'courses.intermediate.price': '$599',
    'courses.intermediate.duration': '8 недель',
    'courses.intermediate.desc': 'Продвинутый технический анализ, психология торговли и проверенные стратегии.',
    'courses.professional.title': 'Профессиональный трейдинг',
    'courses.professional.price': '$999',
    'courses.professional.duration': '12 недель',
    'courses.professional.desc': 'Мастер-курс с торговыми сессиями в реальном времени и личным наставничеством.',
    'courses.enroll': 'Записаться',
    
    // Pricing Page
    'pricing.title': 'Выберите свой план',
    'pricing.subtitle': 'Гибкие ценовые опции для каждого трейдера',
    'pricing.basic.title': 'Базовый',
    'pricing.basic.price': '$99',
    'pricing.basic.period': 'в месяц',
    'pricing.pro.title': 'Профессиональный',
    'pricing.pro.price': '$199',
    'pricing.pro.period': 'в месяц',
    'pricing.premium.title': 'Премиум',
    'pricing.premium.price': '$299',
    'pricing.premium.period': 'в месяц',
    'pricing.get_started': 'Начать',
    
    // Contact Page
    'contact.title': 'Связаться с нами',
    'contact.subtitle': 'Свяжитесь с нашей командой',
    'contact.info.title': 'Контактная информация',
    'contact.info.address': 'Адрес',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Телефон',
    
    // Footer
    'footer.description': 'Профессиональное торговое образование для современного трейдера. Присоединяйтесь к тысячам успешных студентов.',
    'footer.quick_links': 'Быстрые ссылки',
    'footer.courses': 'Курсы',
    'footer.about': 'О нас',
    'footer.pricing': 'Цены',
    'footer.contact': 'Контакты',
    'footer.support': 'Поддержка',
    'footer.help': 'Центр помощи',
    'footer.faq': 'FAQ',
    'footer.community': 'Сообщество',
    'footer.legal': 'Правовая информация',
    'footer.privacy': 'Политика конфиденциальности',
    'footer.terms': 'Условия использования',
    'footer.copyright': '© 2024 TradeMaster Academy. Все права защищены.',
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}