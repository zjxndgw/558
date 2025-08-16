import { useState } from "react";

export default function Launch() {
  const [file, setFile] = useState<File | null>(null);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">发起项目</h2>
      <p>上传您的收款二维码（支付宝/微信/币安链）</p>
      <input type="file" onChange={e => setFile(e.target.files?.[0] || null)} />
      {file && <p className="mt-2 text-green-400">已选择：{file.name}</p>}
      <button className="mt-4 px-4 py-2 bg-blue-500 rounded">提交</button>
    </div>
  );
}
