import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FileUploadDemo from "@/components/FileUploadDemo";
import SubjectTags from "@/components/SubjectTags";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Hero />
      <Features />
      <FileUploadDemo />
      <SubjectTags />
    </div>
  );
};

export default Index;
