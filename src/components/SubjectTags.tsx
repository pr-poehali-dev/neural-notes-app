import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const SubjectTags = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const subjects = [
    { name: "Математика", icon: "Calculator", color: "bg-blue-500" },
    { name: "Физика", icon: "Atom", color: "bg-purple-500" },
    { name: "Химия", icon: "FlaskConical", color: "bg-green-500" },
    { name: "Биология", icon: "Dna", color: "bg-emerald-500" },
    { name: "История", icon: "Clock", color: "bg-orange-500" },
    { name: "Литература", icon: "BookOpen", color: "bg-red-500" },
    { name: "Программирование", icon: "Code", color: "bg-indigo-500" },
    { name: "Экономика", icon: "TrendingUp", color: "bg-yellow-500" },
    { name: "Психология", icon: "Brain", color: "bg-pink-500" },
    { name: "Философия", icon: "Lightbulb", color: "bg-cyan-500" },
  ];

  const toggleTag = (subject: string) => {
    setSelectedTags((prev) =>
      prev.includes(subject)
        ? prev.filter((tag) => tag !== subject)
        : [...prev, subject],
    );
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Система тегов по предметам
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Организуйте свои конспекты по предметам и темам для быстрого поиска
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-12">
          {subjects.map((subject, index) => (
            <button
              key={index}
              onClick={() => toggleTag(subject.name)}
              className={`group relative overflow-hidden rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 ${
                selectedTags.includes(subject.name)
                  ? `${subject.color} text-white shadow-lg`
                  : "bg-gray-50 hover:bg-gray-100 text-gray-700"
              }`}
            >
              <Icon
                name={subject.icon}
                className={`mx-auto mb-3 ${
                  selectedTags.includes(subject.name)
                    ? "text-white"
                    : "text-gray-600"
                }`}
                size={24}
              />
              <p className="font-medium text-sm">{subject.name}</p>
              {selectedTags.includes(subject.name) && (
                <div className="absolute top-2 right-2">
                  <Icon name="Check" className="text-white" size={16} />
                </div>
              )}
            </button>
          ))}
        </div>

        {selectedTags.length > 0 && (
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Выбранные предметы
            </h3>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {selectedTags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium"
                >
                  {tag}
                  <button
                    onClick={() => toggleTag(tag)}
                    className="ml-2 hover:bg-purple-200 rounded-full p-1"
                  >
                    <Icon name="X" size={12} />
                  </button>
                </span>
              ))}
            </div>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              <Icon name="Sparkles" className="mr-2" size={20} />
              Создать конспект для выбранных предметов
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SubjectTags;
