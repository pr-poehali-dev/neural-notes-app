import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      icon: "BarChart3",
      title: "Анализ успеваемости",
      description:
        "Глубокий анализ результатов экзаменов и тестов с выявлением сильных и слабых сторон",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: "TrendingUp",
      title: "Прогнозирование оценок",
      description:
        "AI-алгоритмы предсказывают будущие результаты и дают рекомендации",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "AlertTriangle",
      title: "Оценка рисков",
      description: "Раннее выявление студентов с риском низкой успеваемости",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: "PieChart",
      title: "Визуализация прогресса",
      description:
        "Интерактивные графики и диаграммы для отслеживания академических достижений",
      color: "from-cyan-500 to-blue-500",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Возможности StudyPredict
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мощные инструменты для анализа и прогнозирования академической
            успеваемости
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>
              <div className="relative">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} mb-6`}
                >
                  <Icon name={feature.icon} className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
