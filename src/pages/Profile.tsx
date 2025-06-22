import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import Navigation from "@/components/Navigation";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    firstName: "Иван",
    lastName: "Иванов",
    email: "ivan.ivanov@university.edu",
    university: "МГУ им. М.В. Ломоносова",
    course: "3",
    faculty: "Факультет вычислительной математики и кибернетики",
  });

  const achievements = [
    {
      title: "Отличник",
      description: "Средний балл выше 4.5",
      icon: "Trophy",
      color: "bg-yellow-100 text-yellow-800",
    },
    {
      title: "Стабильный рост",
      description: "Улучшение на 15% за семестр",
      icon: "TrendingUp",
      color: "bg-green-100 text-green-800",
    },
    {
      title: "Активный студент",
      description: "Посещаемость выше 90%",
      icon: "Users",
      color: "bg-blue-100 text-blue-800",
    },
  ];

  const handleInputChange = (field: string, value: string) => {
    setProfileData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    alert("Профиль успешно обновлен!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navigation />

      <div className="max-w-4xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Профиль студента
          </h1>
          <p className="text-gray-600">
            Управление личной информацией и настройками аккаунта
          </p>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="profile">Профиль</TabsTrigger>
            <TabsTrigger value="achievements">Достижения</TabsTrigger>
            <TabsTrigger value="settings">Настройки</TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="text-center">
                  <Avatar className="h-24 w-24 mx-auto mb-4">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="text-lg">
                      {profileData.firstName[0]}
                      {profileData.lastName[0]}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle>
                    {profileData.firstName} {profileData.lastName}
                  </CardTitle>
                  <CardDescription>{profileData.course} курс</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <Icon
                        name="GraduationCap"
                        size={16}
                        className="text-gray-500"
                      />
                      <span className="text-sm text-gray-600">
                        {profileData.university}
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Icon name="Mail" size={16} className="text-gray-500" />
                      <span className="text-sm text-gray-600">
                        {profileData.email}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Личная информация</CardTitle>
                  <CardDescription>
                    Обновите свои данные для более точного анализа
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Имя</Label>
                      <Input
                        id="firstName"
                        value={profileData.firstName}
                        onChange={(e) =>
                          handleInputChange("firstName", e.target.value)
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Фамилия</Label>
                      <Input
                        id="lastName"
                        value={profileData.lastName}
                        onChange={(e) =>
                          handleInputChange("lastName", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="university">Университет</Label>
                    <Input
                      id="university"
                      value={profileData.university}
                      onChange={(e) =>
                        handleInputChange("university", e.target.value)
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="faculty">Факультет</Label>
                    <Input
                      id="faculty"
                      value={profileData.faculty}
                      onChange={(e) =>
                        handleInputChange("faculty", e.target.value)
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="course">Курс</Label>
                    <Input
                      id="course"
                      value={profileData.course}
                      onChange={(e) =>
                        handleInputChange("course", e.target.value)
                      }
                    />
                  </div>
                  <Button onClick={handleSave} className="w-full">
                    <Icon name="Save" className="mr-2" size={16} />
                    Сохранить изменения
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="achievements">
            <Card>
              <CardHeader>
                <CardTitle>Достижения</CardTitle>
                <CardDescription>
                  Ваши академические достижения и награды
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="border rounded-lg p-4 text-center"
                    >
                      <div className="flex justify-center mb-3">
                        <div
                          className={`p-3 rounded-full ${achievement.color}`}
                        >
                          <Icon name={achievement.icon} size={24} />
                        </div>
                      </div>
                      <h3 className="font-semibold mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {achievement.description}
                      </p>
                      <Badge variant="secondary" className="mt-2">
                        Получено
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Настройки аккаунта</CardTitle>
                <CardDescription>
                  Управление безопасностью и уведомлениями
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Текущий пароль</Label>
                  <Input
                    id="currentPassword"
                    type="password"
                    placeholder="••••••••"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newPassword">Новый пароль</Label>
                  <Input
                    id="newPassword"
                    type="password"
                    placeholder="••••••••"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Подтвердите пароль</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                  />
                </div>
                <Button>
                  <Icon name="Lock" className="mr-2" size={16} />
                  Изменить пароль
                </Button>

                <div className="border-t pt-4 mt-6">
                  <h3 className="font-medium mb-3">Уведомления</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">
                        Email уведомления о низких оценках
                      </span>
                      <Button variant="outline" size="sm">
                        Включено
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">
                        Напоминания о предстоящих экзаменах
                      </span>
                      <Button variant="outline" size="sm">
                        Включено
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">
                        Еженедельные отчеты об успеваемости
                      </span>
                      <Button variant="outline" size="sm">
                        Выключено
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
