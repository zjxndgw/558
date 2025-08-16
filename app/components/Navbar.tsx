import { Link } from "@remix-run/react";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 px-4 py-3 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-400">人人互助</Link>
      <div className="space-x-4">
        <Link to="/projects">项目</Link>
        <Link to="/launch">发起</Link>
        <Link to="/admin">后台</Link>
        <Link to="/login">登录</Link>
      </div>
    </nav>
  );
}
