import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">项目列表</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ProjectCard title="示例项目 A" desc="发起金额：1BNB，目标10BNB" />
        <ProjectCard title="示例项目 B" desc="发起金额：1BNB，目标5BNB" />
      </div>
    </div>
  );
}
