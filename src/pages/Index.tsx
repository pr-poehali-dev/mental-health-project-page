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
        title: 'Библиотека СОПЗ',
        description: 'Книги издательства Городец, серия Союза охраны психического здоровья',
        url: 'https://mental-health-russia.ru/biblioteka/#tab=438&page=1&sort=DESC',
      },
      {
        id: 6,
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
        id: 7,
        title: 'Я/МЫ психиатр',
        description: 'Цикл видео-интервью, где через откровенные разговоры с легендами профессии передаётся уникальный опыт начинающим специалистам',
        url: 'https://mental-health-russia.ru/ya-my-psihiatr/',
      },
      {
        id: 8,
        title: 'Психология — новая религия?',
        description: 'Спектр-подкаст о роли психологии в современном мире: как она помогает понять себя и справляться с трудностями',
        url: 'https://mental-health-russia.ru/proekty/',
      },
      {
        id: 9,
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
        id: 10,
        title: 'Навигатор помощи',
        description: 'Каталог организаций и специалистов, оказывающих помощь в сфере психического здоровья по всей России',
        url: 'https://mental-health-russia.ru/elkatalog/',
      },
      {
        id: 11,
        title: 'Фестиваль реабилитационных программ «Другие?»',
        description: 'Межрегиональная площадка по развитию системы реабилитационной помощи и социальной интеграции людей с психическими особенностями',
        url: 'https://festival.mental-health-russia.ru/',
      },
      {
        id: 12,
        title: 'Интернет-магазин «Другие?»',
        description: 'Онлайн-магазин уникальных товаров ручной работы, созданных людьми с ментальными особенностями',
        url: 'https://drugie.org/',
      },
      {
        id: 13,
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
                alt="Логотип СОПЗ" 
                className="h-16 w-auto"
              />
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Союз охраны психического здоровья
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-2 max-w-3xl mx-auto">
              <strong className="text-gray-900">Психическое здоровье — ценность и приоритет.</strong>
            </p>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Медиатор между специалистами и организациями. Мы работаем в трёх направлениях: образование и наука, реабилитация, профилактика — чтобы психическое здоровье становилось понятной общественной ценностью и частью системных решений.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white text-lg px-8"
                onClick={() => scrollToSection('projects')}
              >
                Наши проекты
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

      <section id="contacts" className="py-20 px-6 bg-gray-50">
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
                    <div className="text-gray-600">+7 (495) 640-16-37</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Адрес</div>
                    <div className="text-gray-600">
                      129090, г. Москва, ул. Большая Спасская, д. 12, оф. 7, разметка 66
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Подписаться на новости
              </h3>
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" size={20} className="text-primary" />
                    <span className="font-semibold text-gray-900">Образование:</span>
                  </div>
                  <div className="flex flex-wrap gap-3 ml-8">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open('https://vk.com/rosmededucation', '_blank')}
                      className="border-2"
                    >
                      <Icon name="MessageCircle" size={16} className="mr-2" />
                      VK
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open('https://t.me/rosmededucation', '_blank')}
                      className="border-2"
                    >
                      <Icon name="Send" size={16} className="mr-2" />
                      Telegram
                    </Button>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Icon name="Heart" size={20} className="text-primary" />
                    <span className="font-semibold text-gray-900">СОПЗ:</span>
                  </div>
                  <div className="flex flex-wrap gap-3 ml-8">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open('https://vk.com/ssopz', '_blank')}
                      className="border-2"
                    >
                      <Icon name="MessageCircle" size={16} className="mr-2" />
                      VK
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open('https://t.me/sopzofficial', '_blank')}
                      className="border-2"
                    >
                      <Icon name="Send" size={16} className="mr-2" />
                      Telegram
                    </Button>
                  </div>
                </div>

                <p className="text-sm text-gray-500 text-center pt-4">
                  Подпишитесь на наши каналы и будьте в курсе всех новостей
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 bg-white border-t border-gray-200">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col items-center gap-4 text-sm text-gray-600">
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="https://mental-health-russia.ru/politika-obrabotki-personalnyh-dannyh/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gray-900 transition-colors"
              >
                <Icon name="CheckCircle" size={16} className="text-green-600" />
                Политика обработки персональных данных
              </a>
              <a
                href="https://mental-health-russia.ru/soglasie-na-obrabotku-personalnyh-dannyh/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gray-900 transition-colors"
              >
                <Icon name="CheckCircle" size={16} className="text-green-600" />
                Согласие на обработку персональных данных
              </a>
            </div>
            <p className="text-center">
              © 2026 Союз охраны психического здоровья. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;