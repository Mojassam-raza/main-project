import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, MoreVertical, KeyRound } from "lucide-react";


export default function ManageApiKey() {
  const [copiedId, setCopiedId] = useState(null);
  const navigate = useNavigate();
  const [keys, setKeys] = useState([
    {
      id: 1,
      key: "…H90A",
      project: "My First Project",
      projectId: "round-runner-475306-n5",
      created: "Dec 13, 2025",
      quota: "Unavailable",
    },
  ]);

  const createKey = () => {
    const newKey = {
      id: Date.now(),
      key: `…${Math.random().toString(36).slice(2, 6).toUpperCase()}`,
      project: "New Project",
      projectId: `proj-${Math.floor(Math.random() * 10000)}`,
      created: new Date().toDateString(),
      quota: "Unavailable",
    };
    setKeys([...keys, newKey]);
  };

  const deleteKey = (id) => {
    setKeys(keys.filter((k) => k.id !== id));
  };

  const copyKey = async (id, key) => {
    try {
      await navigator.clipboard.writeText(key);
      setCopiedId(id);

      setTimeout(() => setCopiedId(null), 1500);
    } catch (err) {
      alert("Failed to copy API key");
    }
  };


  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-6">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => navigate("/")}
          className="mb-4 text-sm text-zinc-400 hover:text-white"
        >
          ← Back to Chat
        </button>


        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">API Keys</h1>

          <button
            onClick={createKey}
            className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-xl text-sm"
          >
            <Plus size={16} /> Create API key
          </button>
        </div>

        {/* Table */}
        <div className="bg-zinc-900 rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-zinc-800 text-zinc-400">
              <tr>
                <th className="text-left px-4 py-3">Key</th>
                <th className="text-left px-4 py-3">Project</th>
                <th className="text-left px-4 py-3">Created on</th>
                <th className="text-left px-4 py-3">Quota tier</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>

            <tbody>
              {keys.map((k) => (
                <tr
                  key={k.id}
                  className="border-b border-zinc-800 hover:bg-zinc-800"
                >
                  <td className="px-4 py-3 flex items-center gap-3">
                    <KeyRound size={14} className="text-zinc-400" />
                    <span>{k.key}</span>

                    <button
                      onClick={() => copyKey(k.id, k.key)}
                      className="text-xs text-blue-400 hover:underline"
                    >
                      {copiedId === k.id ? "Copied!" : "Copy"}
                    </button>
                  </td>


                  <td className="px-4 py-3">
                    <div className="text-blue-400 font-medium">
                      {k.project}
                    </div>
                    <div className="text-xs text-zinc-500">
                      {k.projectId}
                    </div>
                  </td>

                  <td className="px-4 py-3">{k.created}</td>

                  <td className="px-4 py-3">
                    <span className="text-blue-400 cursor-pointer">
                      Set up billing
                    </span>
                    <div className="text-xs text-zinc-500">{k.quota}</div>
                  </td>

                  <td className="px-4 py-3 text-right">
                    <button
                      onClick={() => deleteKey(k.id)}
                      className="text-zinc-400 hover:text-red-400"
                    >
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <p className="text-center text-zinc-500 text-sm mt-8">
          Can’t find your API keys here? This page shows keys for imported
          projects only.
        </p>
      </div>
    </div>
  );
}
