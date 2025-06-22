import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";
import Navigation from "@/components/Navigation";

const Dashboard = () => {
  const subjects = [
    { name: "Математический анализ", grade: 4.2, progress: 85, risk: "low" },
    { name: "Физика", grade: 3.8, progress: 72, risk: "medium" },
    { name: "Программирование", grade: 4.8, progress: 95, risk: "low" },
    { name: "История", grade: 3.2, progress: 58, risk: "high" },
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "low":
        return "text-green-600";
      case "medium":
        return "text-yellow-600";
      case "high":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case "low":
        return "CheckCircle";
      case "medium":
        return "AlertCircle";
      case "high":
        return "AlertTriangle";
      default:
        return "Circle";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navigation />

      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Панель управления
          </h1>
          <p className="text-gray-600">
            Обзор вашей академической успеваемости и прогнозы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Средний балл
              </CardTitle>
              <Icon
                name="TrendingUp"
                className="h-4 w-4 text-muted-foreground"
              />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.0</div>
              <p className="text-xs text-muted-foreground">
                +0.2 с прошлого семестра
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Прогноз на экзамены
              </CardTitle>
              <Icon name="Target" className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87%</div>
              <p className="text-xs text-muted-foreground">
                Вероятность успешной сдачи
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Предметы в зоне риска
              </CardTitle>
              <Icon
                name="AlertTriangle"
                className="h-4 w-4 text-muted-foreground"
              />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1</div>
              <p className="text-xs text-muted-foreground">Требует внимания</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Успеваемость по предметам</CardTitle>
            <CardDescription>
              Текущие оценки и прогресс по каждому предмету
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {subjects.map((subject, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">{subject.name}</h3>
                      <div className="flex items-center gap-2">
                        <Icon
                          name={getRiskIcon(subject.risk)}
                          className={`h-4 w-4 ${getRiskColor(subject.risk)}`}
                        />
                        <span className="text-sm font-medium">
                          {subject.grade.toFixed(1)}
                        </span>
                      </div>
                    </div>
                    <Progress value={subject.progress} className="w-full" />
                    <p className="text-xs text-gray-500 mt-1">
                      Прогресс: {subject.progress}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Button onClick={() => (window.location.href = "/analytics")}>
            <Icon name="BarChart3" className="mr-2" size={16} />
            Подробная аналитика
          </Button>
          <Button
            variant="outline"
            onClick={() => (window.location.href = "/profile")}
          >
            <Icon name="User" className="mr-2" size={16} />
            Профиль
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
