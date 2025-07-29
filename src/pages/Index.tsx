import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-chess-green to-chess-brown text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <Icon name="Crown" size={64} className="mx-auto mb-4 text-yellow-300" />
            <h1 className="font-montserrat text-5xl font-bold mb-4">
              Шахматный детский клуб<br/>
              <span className="text-yellow-300">«Интеллект»</span>
            </h1>
            <p className="font-open-sans text-xl text-white/90 max-w-2xl mx-auto">
              Развиваем логическое мышление, память и концентрацию через увлекательную игру в шахматы
            </p>
          </div>
          
          <div className="bg-yellow-300 text-chess-brown p-6 rounded-lg inline-block mb-8">
            <h3 className="font-montserrat text-2xl font-bold mb-2">
              🎉 Бесплатное пробное занятие!
            </h3>
            <p className="font-open-sans text-lg">
              Для всех новичков первый урок абсолютно бесплатно
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-300 text-chess-brown hover:bg-yellow-400 font-montserrat font-semibold">
              Записаться на пробное занятие
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-chess-green font-montserrat">
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-3xl font-bold text-chess-dark mb-4">
              О нашем клубе
            </h2>
            <p className="font-open-sans text-lg text-gray-600 max-w-2xl mx-auto">
              Мы создаем комфортную среду для изучения шахмат, где каждый ребенок может развить свои интеллектуальные способности
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="img/fcf7d9a3-d71a-4672-8a46-7ad7fd961cd6.jpg" 
                alt="Дети играют в шахматы в клубе"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            
            <div className="grid gap-6">
              <Card className="border-l-4 border-l-chess-green">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon name="Brain" className="text-chess-green" size={24} />
                    <h3 className="font-montserrat font-semibold text-lg">Развитие мышления</h3>
                  </div>
                  <p className="font-open-sans text-gray-600">
                    Шахматы развивают логическое мышление, память, внимание и способность к анализу
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-chess-brown">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon name="Users" className="text-chess-brown" size={24} />
                    <h3 className="font-montserrat font-semibold text-lg">Опытные тренеры</h3>
                  </div>
                  <p className="font-open-sans text-gray-600">
                    Наши педагоги имеют спортивные разряды и многолетний опыт работы с детьми
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-yellow-500">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon name="Trophy" className="text-yellow-600" size={24} />
                    <h3 className="font-montserrat font-semibold text-lg">Турниры и соревнования</h3>
                  </div>
                  <p className="font-open-sans text-gray-600">
                    Регулярные турниры внутри клуба и участие в городских соревнованиях
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16 px-4 bg-chess-light-gray">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-3xl font-bold text-chess-dark mb-4">
              Расписание занятий
            </h2>
            <p className="font-open-sans text-lg text-gray-600">
              Группы формируются по возрасту и уровню подготовки
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="font-montserrat text-chess-green">Начинающие</CardTitle>
                <CardDescription className="font-open-sans">5-7 лет</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="font-open-sans">Понедельник</span>
                  <Badge variant="outline">16:00-17:00</Badge>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="font-open-sans">Среда</span>
                  <Badge variant="outline">16:00-17:00</Badge>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-open-sans">Пятница</span>
                  <Badge variant="outline">16:00-17:00</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="font-montserrat text-chess-brown">Продвинутые</CardTitle>
                <CardDescription className="font-open-sans">8-12 лет</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="font-open-sans">Вторник</span>
                  <Badge variant="outline">17:00-18:30</Badge>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="font-open-sans">Четверг</span>
                  <Badge variant="outline">17:00-18:30</Badge>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-open-sans">Суббота</span>
                  <Badge variant="outline">10:00-11:30</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="font-montserrat text-yellow-600">Спортивная группа</CardTitle>
                <CardDescription className="font-open-sans">12+ лет</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="font-open-sans">Понедельник</span>
                  <Badge variant="outline">18:30-20:00</Badge>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="font-open-sans">Среда</span>
                  <Badge variant="outline">18:30-20:00</Badge>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-open-sans">Суббота</span>
                  <Badge variant="outline">11:30-13:00</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-3xl font-bold text-chess-dark mb-4">
              Стоимость занятий
            </h2>
            <p className="font-open-sans text-lg text-gray-600">
              Прозрачные цены без скрытых платежей
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 border-yellow-300 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-yellow-300 text-chess-brown font-montserrat">ПОПУЛЯРНО</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="font-montserrat text-2xl">Пробное занятие</CardTitle>
                <div className="text-4xl font-bold text-chess-green mt-4">
                  <span className="line-through text-gray-400 text-2xl">800₽</span> БЕСПЛАТНО
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 font-open-sans">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-green-500" size={16} />
                    Знакомство с тренером
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-green-500" size={16} />
                    Определение уровня
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-green-500" size={16} />
                    Первые шахматные партии
                  </li>
                </ul>
                <Button className="w-full bg-chess-green hover:bg-chess-green/90 font-montserrat">
                  Записаться бесплатно
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="font-montserrat text-2xl">Разовое занятие</CardTitle>
                <div className="text-4xl font-bold text-chess-brown mt-4">800₽</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 font-open-sans">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-green-500" size={16} />
                    Индивидуальный подход
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-green-500" size={16} />
                    Гибкий график
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-green-500" size={16} />
                    Все материалы включены
                  </li>
                </ul>
                <Button variant="outline" className="w-full font-montserrat">
                  Купить занятие
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="font-montserrat text-2xl">Абонемент на месяц</CardTitle>
                <div className="text-4xl font-bold text-chess-brown mt-4">2800₽</div>
                <p className="text-sm text-gray-500 font-open-sans">700₽ за занятие</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 font-open-sans">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-green-500" size={16} />
                    8 занятий в месяц
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-green-500" size={16} />
                    Экономия 400₽
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-green-500" size={16} />
                    Приоритет в записи
                  </li>
                </ul>
                <Button variant="outline" className="w-full font-montserrat">
                  Купить абонемент
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-chess-light-gray">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-3xl font-bold text-chess-dark mb-4">
              Контакты
            </h2>
            <p className="font-open-sans text-lg text-gray-600">
              Мы всегда рады ответить на ваши вопросы
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" className="text-chess-green mt-1" size={24} />
                    <div>
                      <h3 className="font-montserrat font-semibold text-lg mb-2">Адрес</h3>
                      <p className="font-open-sans text-gray-600">
                        г. Москва, ул. Образования, д. 15<br/>
                        2 этаж, кабинет 205
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" className="text-chess-green mt-1" size={24} />
                    <div>
                      <h3 className="font-montserrat font-semibold text-lg mb-2">Телефон</h3>
                      <p className="font-open-sans text-gray-600">
                        +7 (495) 123-45-67<br/>
                        Ежедневно с 9:00 до 20:00
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Mail" className="text-chess-green mt-1" size={24} />
                    <div>
                      <h3 className="font-montserrat font-semibold text-lg mb-2">Email</h3>
                      <p className="font-open-sans text-gray-600">
                        info@intellect-chess.ru<br/>
                        chess.club.intellect@gmail.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle className="font-montserrat">Записаться на занятие</CardTitle>
                <CardDescription className="font-open-sans">
                  Заполните форму, и мы свяжемся с вами в течение часа
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="font-open-sans font-medium text-sm text-gray-700 mb-2 block">
                    Имя ребенка
                  </label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-lg font-open-sans focus:outline-none focus:ring-2 focus:ring-chess-green"
                    placeholder="Введите имя"
                  />
                </div>
                <div>
                  <label className="font-open-sans font-medium text-sm text-gray-700 mb-2 block">
                    Возраст
                  </label>
                  <input 
                    type="number" 
                    className="w-full p-3 border border-gray-300 rounded-lg font-open-sans focus:outline-none focus:ring-2 focus:ring-chess-green"
                    placeholder="Сколько лет?"
                  />
                </div>
                <div>
                  <label className="font-open-sans font-medium text-sm text-gray-700 mb-2 block">
                    Телефон родителя
                  </label>
                  <input 
                    type="tel" 
                    className="w-full p-3 border border-gray-300 rounded-lg font-open-sans focus:outline-none focus:ring-2 focus:ring-chess-green"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <Button className="w-full bg-chess-green hover:bg-chess-green/90 font-montserrat">
                  Отправить заявку
                </Button>
                <p className="text-xs text-gray-500 font-open-sans text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-chess-dark text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Crown" size={32} className="text-yellow-300" />
            <h3 className="font-montserrat text-xl font-bold">
              Шахматный клуб «Интеллект»
            </h3>
          </div>
          <p className="font-open-sans text-white/80 mb-4">
            Развиваем будущих чемпионов с 2015 года
          </p>
          <div className="flex justify-center gap-6 text-sm font-open-sans text-white/60">
            <span>© 2024 Все права защищены</span>
            <span>•</span>
            <span>Политика конфиденциальности</span>
            <span>•</span>
            <span>Лицензия на образовательную деятельность</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;