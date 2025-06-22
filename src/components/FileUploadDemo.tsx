import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const FileUploadDemo = () => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    setUploadedFiles(files.map((file) => file.name));
  };

  const simulateUpload = () => {
    setUploadedFiles([
      "Лекция_1_Математика.pdf",
      "Конспект_Физика.docx",
      "Заметки.txt",
    ]);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Загрузка материалов
          </h2>
          <p className="text-xl text-gray-600">
            Перетащите файлы или выберите их с компьютера
          </p>
        </div>

        <div
          className={`relative border-2 border-dashed rounded-3xl p-12 text-center transition-all duration-300 ${
            isDragOver
              ? "border-purple-500 bg-purple-50"
              : "border-gray-300 bg-white hover:border-purple-400 hover:bg-purple-25"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="mb-8">
            <Icon
              name="Upload"
              className="mx-auto mb-4 text-purple-500"
              size={48}
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Загрузите файлы для обработки
            </h3>
            <p className="text-gray-600">
              Поддерживаемые форматы: PDF, DOCX, TXT, URL
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              onClick={simulateUpload}
              className="bg-purple-600 hover:bg-purple-700"
            >
              <Icon name="FolderOpen" className="mr-2" size={20} />
              Выбрать файлы
            </Button>
            <Button
              variant="outline"
              className="border-purple-300 text-purple-600 hover:bg-purple-50"
            >
              <Icon name="Link" className="mr-2" size={20} />
              Добавить URL
            </Button>
          </div>

          {uploadedFiles.length > 0 && (
            <div className="mt-8 p-6 bg-green-50 rounded-2xl">
              <h4 className="font-semibold text-green-800 mb-4 flex items-center">
                <Icon name="CheckCircle" className="mr-2" size={20} />
                Загруженные файлы:
              </h4>
              <div className="space-y-2">
                {uploadedFiles.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-white p-3 rounded-lg"
                  >
                    <span className="flex items-center text-gray-700">
                      <Icon name="File" className="mr-2" size={16} />
                      {file}
                    </span>
                    <Icon
                      name="X"
                      className="text-gray-400 hover:text-red-500 cursor-pointer"
                      size={16}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FileUploadDemo;
