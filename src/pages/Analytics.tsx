import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";
import Navigation from "@/components/Navigation";

const Analytics = () => {
  const performanceData = [
    { month: "Сентябрь", score: 3.8 },
    { month: "Октябрь", score: 4.1 },
    { month: "Ноябрь", score: 3.9 },
    { month: "Декабрь", score: 4.3 },
    { month: "Январь", score: 4.0 },
    { month: "Февраль", score: 4.2 },
  ];

  const predictions = [
    {
      subject: "Математический анализ",
      currentGrade: 4.2,
      predictedGrade: 4.5,
      confidence: 92,
    },
    {
      subject: "Физика",
      currentGrade: 3.8,
      predictedGrade: 4.0,
      confidence: 78,
    },
    {
      subject: "Программирование",
      currentGrade: 4.8,
      predictedGrade: 4.9,
      confidence: 95,
    },
    {
      subject: "История",
      currentGrade: 3.2,
      predictedGrade: 3.6,
      confidence: 65,
    },
  ];

  const recommendations = [
    {
      subject: "История",
      risk: "high",
      recommendation:
        "Увеличить время на изучение исторических дат и событий. Рекомендуется дополнительная практика.",
      priority: "Высокий",
    },
    {
      subject: "Физика",
      risk: "medium",
      recommendation:
        "Сосредоточиться на решении практических задач. Больше времени уделить лабораторным работам.",
      priority: "Средний",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navigation />

      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Аналитика успеваемости
          </h1>
          <p className="text-gray-600">
            Детальный анализ и прогнозы вашей академической успеваемости
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Динамика успеваемости</CardTitle>
              <CardDescription>
                Изменение среднего балла по месяцам
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {performanceData.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm text-gray-600">{item.month}</span>
                    <div className="flex items-center gap-2">
                      <Progress value={item.score * 20} className="w-20" />
                      <span className="text-sm font-medium w-8">
                        {item.score}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Прогнозы оценок</CardTitle>
              <CardDescription>
                AI-прогнозы итоговых оценок по предметам
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {predictions.map((item, index) => (
                  <div key={index} className="border rounded-lg p-3">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-sm">{item.subject}</h4>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">
                          {item.currentGrade} → {item.predictedGrade}
                        </div>
                        <div className="text-xs text-gray-400">
                          Точность: {item.confidence}%
                        </div>
                      </div>
                    </div>
                    <Progress value={item.confidence} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Рекомендации по улучшению</CardTitle>
            <CardDescription>
              Персонализированные советы на основе анализа данных
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recommendations.map((item, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Icon
                        name={
                          item.risk === "high" ? "AlertTriangle" : "AlertCircle"
                        }
                        className={`h-4 w-4 ${item.risk === "high" ? "text-red-500" : "text-yellow-500"}`}
                      />
                      <h4 className="font-medium">{item.subject}</h4>
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        item.priority === "Высокий"
                          ? "bg-red-100 text-red-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {item.priority}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{item.recommendation}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Посещаемость
              </CardTitle>
              <Icon name="Calendar" className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">92%</div>
              <p className="text-xs text-muted-foreground">
                Средняя посещаемость лекций
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Активность</CardTitle>
              <Icon name="Activity" className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78%</div>
              <p className="text-xs text-muted-foreground">
                Участие в семинарах
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Сданные работы
              </CardTitle>
              <Icon
                name="FileCheck"
                className="h-4 w-4 text-muted-foreground"
              />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24/26</div>
              <p className="text-xs text-muted-foreground">
                Выполненные задания
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
