import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const categories = [
  {
    id: 'education',
    name: 'Образование и наука',
    icon: 'GraduationCap',
    projects: [
      {
        id: 1,
        title: 'Конференции',
        description: 'Международная научно-образовательная программа по формированию профессиональных компетенций по вопросам охраны психического здоровья',
        url: 'https://conf.mental-health-russia.ru/about-2025',
        badge: 'Бесплатно',
      },
      {
        id: 2,
        title: 'Научно-образовательный центр',
        description: 'Программы повышения квалификации и переподготовки для специалистов сферы здоровья и помощи с индивидуальным графиком обучения',
        url: 'https://rosmededucation.ru/',
      },
      {
        id: 3,
        title: 'Школа волонтеров',
        description: 'Объединяем волонтеров для решения ключевых задач охраны психического здоровья: профилактики, реабилитации и преодоления стигматизации',
        url: 'https://volunteers.mental-health-russia.ru/',
        badge: 'Курсы • Бесплатно',
      },
      {
        id: 4,
        title: 'Социальный импакт',
        description: 'От идеи до импакта: образовательный курс и международный конкурс для проектов в сфере психического здоровья',
        url: 'https://rosmededucation.ru/social_impact',
        badge: 'Курс • Бесплатно',
      },
      {
        id: 5,
        title: 'Российская психотерапевтическая ассоциация',
        description: 'Объединение специалистов для развития профессиональных стандартов и повышения доступности качественной психотерапевтической помощи',
        url: 'https://rpa-russia.ru/departments/moskva',
      },
    ],
  },
  {
    id: 'prevention',
    name: 'Профилактика',
    icon: 'Shield',
    projects: [
      {
        id: 6,
        title: 'Я/МЫ психиатр',
        description: 'Цикл видео-интервью, где через откровенные разговоры с легендами профессии передаётся уникальный опыт начинающим специалистам',
        url: 'https://mental-health-russia.ru/ya-my-psihiatr/',
      },
      {
        id: 7,
        title: 'Психология — новая религия?',
        description: 'Спектр-подкаст о роли психологии в современном мире: как она помогает понять себя и справляться с трудностями',
        url: 'https://mental-health-russia.ru/proekty/',
      },
      {
        id: 8,
        title: 'вМесте',
        description: 'Видео-подкаст о взаимодействии, поддержке и важности совместной работы в сфере психического здоровья',
        url: 'https://mental-health-russia.ru/proekty/',
      },
    ],
  },
  {
    id: 'rehabilitation',
    name: 'Реабилитация',
    icon: 'Heart',
    projects: [
      {
        id: 9,
        title: 'Фестиваль реабилитационных программ «Другие?»',
        description: 'Межрегиональная площадка по развитию системы реабилитационной помощи и социальной интеграции людей с психическими особенностями',
        url: 'https://festival.mental-health-russia.ru/',
      },
      {
        id: 10,
        title: 'Интернет-магазин «Другие?»',
        description: 'Онлайн-магазин уникальных товаров ручной работы, созданных людьми с ментальными особенностями',
        url: 'https://drugie.org/',
      },
      {
        id: 11,
        title: 'Малая полиграфия',
        description: 'Производство и печать качественной полиграфической продукции для поддержки реабилитационных программ',
        url: 'https://mental-health-russia.ru/proekty/',
      },
    ],
  },
];

const Index = () => {
  const [email, setEmail] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('education');
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
    <div className="min-h-screen bg-gray-50">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/projects/6a3bb585-a665-439d-ada4-2143ecb50ce5/bucket/cf905e09-b068-4f84-928b-65c53031fab6.png" 
                alt="Логотип СОЮЗ" 
                className="h-12 w-auto"
              />
              <span className="text-xl font-bold text-gray-800">СОЮЗ</span>
            </div>
            <div className="hidden md:flex gap-8">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                Проекты
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                О союзе
              </button>
              <button
                onClick={() => scrollToSection('contacts')}
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                Контакты
              </button>
            </div>
            <Button 
              className="bg-primary hover:bg-primary/90 text-white"
              onClick={() => window.open('https://t.me/katrinmalceva', '_blank')}
            >
              Связаться
            </Button>
          </div>
        </nav>
      </header>

      <section id="hero" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 leading-tight">
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
                className="bg-primary hover:bg-primary/90 text-white text-lg px-8"
                onClick={() => scrollToSection('projects')}
              >
                Наши проекты
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-2 border-gray-300 hover:bg-gray-100"
                onClick={() => scrollToSection('about')}
              >
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Наши проекты
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Выберите направление, чтобы увидеть проекты
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  size="lg"
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`text-lg px-6 ${
                    selectedCategory === category.id
                      ? 'bg-primary text-white'
                      : 'border-2 border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  <Icon name={category.icon} size={20} className="mr-2" />
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories
              .find((cat) => cat.id === selectedCategory)
              ?.projects.map((project, index) => (
                <Card
                  key={project.id}
                  className="group cursor-pointer overflow-hidden border border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => window.open(project.url, '_blank')}
                >
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-start justify-between">
                      <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                        <Icon name="Folder" size={24} className="text-gray-600" />
                      </div>
                      {project.badge && (
                        <span className="text-xs font-semibold px-2 py-1 rounded-full bg-green-100 text-green-700">
                          {project.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 min-h-[3rem]">
                      {project.description}
                    </p>
                    <div className="flex items-center text-primary font-medium">
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

      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              О союзе
            </h2>
          </div>

          <Card className="p-8 md:p-12 border border-gray-200 shadow-md">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong className="text-gray-900">
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
                <div className="text-center p-6 rounded-xl bg-gray-50 border border-gray-200">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
                    <Icon name="Users" size={32} className="text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    50K+
                  </div>
                  <div className="text-gray-600">Помогли людям</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-gray-50 border border-gray-200">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                    <Icon name="Award" size={32} className="text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    12+
                  </div>
                  <div className="text-gray-600">Проектов</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-gray-50 border border-gray-200">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent flex items-center justify-center">
                    <Icon name="Clock" size={32} className="text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
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

      <section id="contacts" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Контакты и подписка
            </h2>
            <p className="text-xl text-gray-600">
              Будьте в курсе всех наших проектов и новостей
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Свяжитесь с нами
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">info@mental-health-russia.ru</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Телефон</div>
                    <div className="text-gray-600">8 (800) 555-35-35</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Адрес</div>
                    <div className="text-gray-600">
                      г. Москва, ул. Примерная, д. 1
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Подписаться на новости
              </h3>
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div>
                  <Input
                    type="email"
                    placeholder="Ваш email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 text-lg border-2 border-gray-300 focus:border-gray-500"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-white text-lg"
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


    </div>
  );
};

export default Index;