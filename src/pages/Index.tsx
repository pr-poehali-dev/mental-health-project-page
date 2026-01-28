import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const projects = [
  {
    id: 1,
    title: 'Психологическая помощь онлайн',
    description: 'Бесплатные консультации с квалифицированными психологами',
    url: 'https://mental-health-russia.ru/psychology',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 2,
    title: 'Группы поддержки',
    description: 'Встречи и общение для людей с похожими проблемами',
    url: 'https://mental-health-russia.ru/support-groups',
    gradient: 'from-pink-500 to-blue-500',
  },
  {
    id: 3,
    title: 'Образовательные программы',
    description: 'Курсы и вебинары по психическому здоровью',
    url: 'https://mental-health-russia.ru/education',
    gradient: 'from-blue-500 to-purple-500',
  },
  {
    id: 4,
    title: 'Кризисная линия',
    description: 'Экстренная психологическая помощь 24/7',
    url: 'https://mental-health-russia.ru/crisis',
    gradient: 'from-purple-600 to-blue-600',
  },
  {
    id: 5,
    title: 'Исследования и публикации',
    description: 'Научные работы и статьи о психическом здоровье',
    url: 'https://mental-health-russia.ru/research',
    gradient: 'from-pink-600 to-purple-600',
  },
  {
    id: 6,
    title: 'Волонтёрская программа',
    description: 'Присоединяйтесь к команде помощи людям',
    url: 'https://mental-health-russia.ru/volunteer',
    gradient: 'from-blue-600 to-pink-600',
  },
];

const Index = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: 'Спасибо за подписку!',
        description: 'Вы будете получать новости о наших проектах',
      });
      setEmail('');
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-purple-100">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full gradient-purple-pink flex items-center justify-center">
                <Icon name="Heart" size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">СОЮЗ</span>
            </div>
            <div className="hidden md:flex gap-8">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                Проекты
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                О союзе
              </button>
              <button
                onClick={() => scrollToSection('contacts')}
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                Контакты
              </button>
            </div>
            <Button className="gradient-purple-pink text-white border-0">
              Связаться
            </Button>
          </div>
        </nav>
      </header>

      <section id="hero" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient leading-tight">
              Союз охраны
              <br />
              психического здоровья
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Мы помогаем людям получить качественную психологическую поддержку
              и заботимся о ментальном благополучии общества
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button
                size="lg"
                className="gradient-purple-pink text-white border-0 text-lg px-8"
                onClick={() => scrollToSection('projects')}
              >
                Наши проекты
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-2 border-purple-300 hover:bg-purple-50"
                onClick={() => scrollToSection('about')}
              >
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Наши проекты
            </h2>
            <p className="text-xl text-gray-600">
              Выберите проект, чтобы узнать подробности
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="group cursor-pointer overflow-hidden border-2 border-transparent hover:border-purple-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => window.open(project.url, '_blank')}
              >
                <div
                  className={`h-32 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                >
                  <Icon
                    name="Sparkles"
                    size={48}
                    className="text-white opacity-80 group-hover:scale-110 transition-transform"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex items-center text-purple-600 font-medium">
                    Подробнее
                    <Icon
                      name="ArrowRight"
                      size={18}
                      className="ml-2 group-hover:translate-x-2 transition-transform"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              О союзе
            </h2>
          </div>

          <Card className="p-8 md:p-12 border-2 border-purple-100 shadow-lg">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong className="text-purple-600">
                  Союз охраны психического здоровья
                </strong>{' '}
                — это некоммерческая организация, посвященная улучшению
                психического благополучия людей в России.
              </p>
              <p>
                Мы верим, что психическое здоровье так же важно, как и
                физическое, и каждый человек заслуживает доступа к качественной
                психологической помощи и поддержке.
              </p>
              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-purple-pink flex items-center justify-center">
                    <Icon name="Users" size={32} className="text-white" />
                  </div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    50K+
                  </div>
                  <div className="text-gray-600">Помогли людям</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-pink-100 to-blue-100">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-pink-blue flex items-center justify-center">
                    <Icon name="Award" size={32} className="text-white" />
                  </div>
                  <div className="text-3xl font-bold text-pink-600 mb-2">
                    12+
                  </div>
                  <div className="text-gray-600">Проектов</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-purple-blue flex items-center justify-center">
                    <Icon name="Clock" size={32} className="text-white" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    24/7
                  </div>
                  <div className="text-gray-600">Поддержка</div>
                </div>
              </div>
              <p>
                Наша команда состоит из опытных психологов, социальных
                работников и волонтеров, которые разделяют нашу миссию и готовы
                помогать тем, кто в этом нуждается.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6 bg-white/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Контакты и подписка
            </h2>
            <p className="text-xl text-gray-600">
              Будьте в курсе всех наших проектов и новостей
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-2 border-purple-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Свяжитесь с нами
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full gradient-purple-pink flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Email</div>
                    <div className="text-gray-600">info@mental-health-russia.ru</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full gradient-pink-blue flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Телефон</div>
                    <div className="text-gray-600">8 (800) 555-35-35</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full gradient-purple-blue flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Адрес</div>
                    <div className="text-gray-600">
                      г. Москва, ул. Примерная, д. 1
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-2 border-purple-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Подписаться на новости
              </h3>
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div>
                  <Input
                    type="email"
                    placeholder="Ваш email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 text-lg border-2 border-purple-200 focus:border-purple-400"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full gradient-purple-pink text-white border-0 text-lg"
                >
                  Подписаться
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
                <p className="text-sm text-gray-500 text-center">
                  Мы не передаём ваши данные третьим лицам
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 bg-gradient-to-r from-purple-900 to-pink-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Icon name="Heart" size={20} />
                </div>
                <span className="text-xl font-bold">СОЮЗ</span>
              </div>
              <p className="text-purple-200">
                Заботимся о психическом здоровье людей
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Разделы</h4>
              <div className="space-y-2 text-purple-200">
                <div>Главная</div>
                <div>Проекты</div>
                <div>О союзе</div>
                <div>Контакты</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                  <Icon name="Facebook" size={20} />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                  <Icon name="Twitter" size={20} />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                  <Icon name="Instagram" size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-purple-200">
            © 2024 Союз охраны психического здоровья. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
