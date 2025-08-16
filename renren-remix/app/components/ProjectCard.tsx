interface Props {
  title: string;
  desc: string;
}

export default function ProjectCard({ title, desc }: Props) {
  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow">
      <h3 className="text-xl font-bold text-blue-400">{title}</h3>
      <p className="text-gray-300">{desc}</p>
      <button className="mt-4 px-4 py-2 bg-green-500 rounded">查看详情</button>
    </div>
  );
}
