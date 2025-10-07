import Header from "./components/Header";
import Knowledge from "./components/Knowledge";
import ProjectsGrid from "./components/Projects";

export default function App() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Knowledge />
      <ProjectsGrid />
    </div>
  );
}
