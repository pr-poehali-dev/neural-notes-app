import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-20 px-4">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent animate-fade-in">
            StudyPredict
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
            AI-платформа для анализа успеваемости и прогнозирования результатов
            экзаменов с помощью нейросетей
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-white text-purple-600 hover:bg-purple-50 hover:scale-105 transition-all duration-200 px-8 py-3"
            onClick={() => (window.location.href = "/register")}
          >
            <Icon name="TrendingUp" className="mr-2" size={20} />
            Начать анализ
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-purple-600 transition-all duration-200 px-8 py-3"
            onClick={() => (window.location.href = "/login")}
          >
            <Icon name="LogIn" className="mr-2" size={20} />
            Войти в аккаунт
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
            <Icon
              name="BarChart3"
              className="mx-auto mb-4 text-purple-200"
              size={32}
            />
            <h3 className="text-lg font-semibold mb-2">Анализ успеваемости</h3>
            <p className="text-purple-100 text-sm">
              На основе истории экзаменов
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
            <Icon
              name="Brain"
              className="mx-auto mb-4 text-purple-200"
              size={32}
            />
            <h3 className="text-lg font-semibold mb-2">Прогноз оценок</h3>
            <p className="text-purple-100 text-sm">Предсказание с помощью AI</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
            <Icon
              name="AlertTriangle"
              className="mx-auto mb-4 text-purple-200"
              size={32}
            />
            <h3 className="text-lg font-semibold mb-2">Оценка рисков</h3>
            <p className="text-purple-100 text-sm">
              Предупреждение о проблемах
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
