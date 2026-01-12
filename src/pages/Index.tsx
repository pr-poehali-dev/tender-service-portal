import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-xl font-heading font-bold text-primary">ТендерПро</div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
            <a href="#advantages" className="text-sm font-medium hover:text-primary transition-colors">Преимущества</a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">Вопросы</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button variant="default" className="hidden md:inline-flex">
            <Icon name="Phone" size={16} className="mr-2" />
            Консультация
          </Button>
        </div>
      </header>

      <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Профессиональное участие в тендерах по 44-ФЗ и 223-ФЗ
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Увеличьте свои шансы на победу в государственных закупках с командой экспертов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg">
                <Icon name="FileText" size={20} className="mr-2" />
                Оставить заявку
              </Button>
              <Button size="lg" variant="outline" className="text-lg bg-transparent text-white border-white hover:bg-white/10">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Полный спектр услуг для успешного участия в государственных закупках
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-scale-in">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="FileSearch" size={24} className="text-accent" />
                </div>
                <CardTitle>Поиск тендеров</CardTitle>
                <CardDescription>Анализ и подбор тендеров по вашему профилю деятельности</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="FileEdit" size={24} className="text-accent" />
                </div>
                <CardTitle>Подготовка документов</CardTitle>
                <CardDescription>Комплектация и оформление пакета документов для участия</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Shield" size={24} className="text-accent" />
                </div>
                <CardTitle>Обеспечение заявок</CardTitle>
                <CardDescription>Помощь в получении банковских гарантий и электронных подписей</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Upload" size={24} className="text-accent" />
                </div>
                <CardTitle>Подача заявок</CardTitle>
                <CardDescription>Размещение заявок на электронных площадках 44-ФЗ и 223-ФЗ</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" size={24} className="text-accent" />
                </div>
                <CardTitle>Сопровождение</CardTitle>
                <CardDescription>Полное юридическое сопровождение на всех этапах тендера</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="TrendingUp" size={24} className="text-accent" />
                </div>
                <CardTitle>Аналитика</CardTitle>
                <CardDescription>Анализ результатов и рекомендации по улучшению стратегии</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">Почему выбирают нас</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Award" size={24} className="text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-xl mb-2">Опыт более 10 лет</h3>
                <p className="text-muted-foreground">Работаем с государственными закупками с 2013 года. Более 500 успешных тендеров.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Target" size={24} className="text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-xl mb-2">87% побед</h3>
                <p className="text-muted-foreground">Высокий процент выигранных тендеров благодаря профессиональному подходу.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Clock" size={24} className="text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-xl mb-2">Быстрая подготовка</h3>
                <p className="text-muted-foreground">Готовим пакет документов за 24-48 часов. Работаем со срочными тендерами.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="ShieldCheck" size={24} className="text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-xl mb-2">Юридическая защита</h3>
                <p className="text-muted-foreground">Полное юридическое сопровождение. Защита интересов в ФАС и судах.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Banknote" size={24} className="text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-xl mb-2">Оплата по результату</h3>
                <p className="text-muted-foreground">Гибкая система оплаты. Основная часть вознаграждения — после победы.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Headphones" size={24} className="text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-xl mb-2">Персональный менеджер</h3>
                <p className="text-muted-foreground">Выделенный специалист для каждого клиента. Поддержка 24/7.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">Часто задаваемые вопросы</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ответы на популярные вопросы о работе с тендерами
          </p>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-background rounded-lg px-6 border-none">
                <AccordionTrigger className="font-semibold hover:no-underline">
                  Чем отличается 44-ФЗ от 223-ФЗ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  44-ФЗ регулирует закупки госорганов и муниципалитетов. 223-ФЗ — закупки госкомпаний и естественных монополий. 
                  Каждый закон имеет свои процедуры и требования к участникам.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-background rounded-lg px-6 border-none">
                <AccordionTrigger className="font-semibold hover:no-underline">
                  Сколько стоят ваши услуги?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Стоимость зависит от сложности тендера и объема работ. Базовое сопровождение от 15 000 рублей. 
                  Предлагаем индивидуальные тарифы и оплату по результату.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-background rounded-lg px-6 border-none">
                <AccordionTrigger className="font-semibold hover:no-underline">
                  Какие документы нужны для участия?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Типовой пакет включает: выписку из ЕГРЮЛ, устав, бухгалтерскую отчетность, лицензии (если требуется), 
                  документы на обеспечение заявки. Полный список формируем под конкретный тендер.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-background rounded-lg px-6 border-none">
                <AccordionTrigger className="font-semibold hover:no-underline">
                  Как долго готовится заявка?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Стандартная подготовка занимает 3-5 рабочих дней. Для срочных тендеров готовим за 24-48 часов с доплатой. 
                  Все зависит от сложности конкурсной документации.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-background rounded-lg px-6 border-none">
                <AccordionTrigger className="font-semibold hover:no-underline">
                  Есть ли гарантии победы?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Мы гарантируем качественную подготовку заявки и полное соответствие требованиям. Результат зависит от многих факторов, 
                  но наш процент побед составляет 87% — один из самых высоких на рынке.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-background rounded-lg px-6 border-none">
                <AccordionTrigger className="font-semibold hover:no-underline">
                  Работаете ли вы с новичками?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да, специализируемся на обучении и сопровождении новичков в тендерах. Проводим консультации, 
                  помогаем с регистрацией на площадках, получением ЭЦП и аккредитацией.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-muted-foreground mb-8">
                Оставьте заявку, и наш специалист свяжется с вами в течение 30 минут
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input 
                    placeholder="Ваше имя" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Input 
                    type="tel" 
                    placeholder="Телефон" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Опишите ваш проект или задачу" 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="min-h-[120px]"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="font-heading font-semibold text-xl mb-4">Контактная информация</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" size={20} className="text-accent mt-1" />
                    <div>
                      <p className="font-semibold">+7 (914) 177-39-39</p>
                      <p className="text-sm text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" size={20} className="text-accent mt-1" />
                    <div>
                      <p className="font-semibold">info@tenderpro.ru</p>
                      <p className="text-sm text-muted-foreground">Ответим в течение часа</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" size={20} className="text-accent mt-1" />
                    <div>
                      <p className="font-semibold">Москва, ул. Примерная, д. 1</p>
                      <p className="text-sm text-muted-foreground">Офис 501, БЦ "Столичный"</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/50 rounded-lg p-6">
                <h3 className="font-heading font-semibold text-lg mb-3">Первая консультация бесплатно</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Разберем ваш проект, ответим на вопросы и составим план участия в тендерах
                </p>
                <div className="flex items-center gap-2 text-accent">
                  <Icon name="CheckCircle2" size={20} />
                  <span className="font-semibold">30 минут с экспертом</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-heading font-bold text-xl mb-4">ТендерПро</h3>
              <p className="text-sm opacity-90">
                Профессиональное сопровождение тендеров по 44-ФЗ и 223-ФЗ с 2013 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>Поиск тендеров</li>
                <li>Подготовка документов</li>
                <li>Юридическое сопровождение</li>
                <li>Обучение и консультации</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>+7 (914) 177-39-39</li>
                <li>info@tenderpro.ru</li>
                <li>Москва, ул. Примерная, д. 1</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-75">
            <p>© 2024 ТендерПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;