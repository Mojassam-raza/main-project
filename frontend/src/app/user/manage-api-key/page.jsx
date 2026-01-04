'use client';
import { useState, useEffect } from "react";
import { Plus, MoreVertical, KeyRound } from "lucide-react";
import { useRouter } from "next/navigation";

const API_BASE_URL = "http://localhost:5000";

export default function ManageApiKey() {
  const [copiedId, setCopiedId] = useState(null);
  const [showNameModal, setShowNameModal] = useState(false);
  const [keyName, setKeyName] = useState("");
  const [keys, setKeys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  // Fetch API keys on component mount
  useEffect(() => {
    fetchKeys();
  }, []);

  const fetchKeys = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/apikey/getbyuser/user123`);
      if (!response.ok) throw new Error("Failed to fetch keys");
      const data = await response.json();
      setKeys(Array.isArray(data) ? data : [data].filter(k => k._id));
    } catch (err) {
      console.error("Error fetching keys:", err);
      setError("Failed to load API keys");
    } finally {
      setLoading(false);
    }
  };

  const handleCreateKey = () => {
    setShowNameModal(true);
    setKeyName("");
  };

  const confirmCreateKey = async () => {
    if (!keyName.trim()) {
      alert("Please enter an API key name");
      return;
    }

    try {
      const apiKey = Math.random().toString(36).substring(2, 15) + 
                     Math.random().toString(36).substring(2, 15);
      
      const newKey = {
        key: apiKey,
        projectName: keyName,
        projectId: `proj-${Math.floor(Math.random() * 10000)}`,
        quota: "Unavailable",
        isActive: true,
      };

      const response = await fetch(`${API_BASE_URL}/apikey/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newKey),
      });

      if (!response.ok) throw new Error("Failed to create key");
      
      const createdKey = await response.json();
      setKeys([...keys, createdKey]);
      setShowNameModal(false);
      setKeyName("");
    } catch (err) {
      console.error("Error creating key:", err);
      alert("Failed to create API key");
    }
  };

  const deleteKey = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/apikey/delete/${id}`, {
        method: "POST",
      });

      if (!response.ok) throw new Error("Failed to delete key");
      
      setKeys(keys.filter((k) => k._id !== id));
    } catch (err) {
      console.error("Error deleting key:", err);
      alert("Failed to delete API key");
    }
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

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-100 p-6 flex items-center justify-center">
        <p>Loading API keys...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-6">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => router.push("/")}
          className="mb-4 text-sm text-zinc-400 hover:text-white"
        >
          ← Back to Chat
        </button>

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">API Keys</h1>

          <button
            onClick={handleCreateKey}
            className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-xl text-sm"
          >
            <Plus size={16} /> Create API key
          </button>
        </div>

        {error && (
          <div className="bg-red-900 text-red-100 p-4 rounded-lg mb-4">
            {error}
          </div>
        )}

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
              {keys.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-4 py-6 text-center text-zinc-400">
                    No API keys yet. Create one to get started.
                  </td>
                </tr>
              ) : (
                keys.map((k) => (
                  <tr
                    key={k._id}
                    className="border-b border-zinc-800 hover:bg-zinc-800"
                  >
                    <td className="px-4 py-3 flex items-center gap-3">
                      <KeyRound size={14} className="text-zinc-400" />
                      <span>…{k.key.slice(-4)}</span>

                      <button
                        onClick={() => copyKey(k._id, k.key)}
                        className="text-xs text-blue-400 hover:underline"
                      >
                        {copiedId === k._id ? "Copied!" : "Copy"}
                      </button>
                    </td>

                    <td className="px-4 py-3">
                      <div className="text-blue-400 font-medium">
                        {k.projectName}
                      </div>
                      <div className="text-xs text-zinc-500">
                        {k.projectId}
                      </div>
                    </td>

                    <td className="px-4 py-3">
                      {new Date(k.createdAt).toLocaleDateString()}
                    </td>

                    <td className="px-4 py-3">
                      <span className="text-blue-400 cursor-pointer">
                        Set up billing
                      </span>
                      <div className="text-xs text-zinc-500">{k.quota}</div>
                    </td>

                    <td className="px-4 py-3 text-right">
                      <button
                        onClick={() => deleteKey(k._id)}
                        className="text-zinc-400 hover:text-red-400"
                      >
                        <MoreVertical size={16} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <p className="text-center text-zinc-500 text-sm mt-8">
          Can't find your API keys here? This page shows keys for imported
          projects only.
        </p>
      </div>

      {/* Name Input Modal */}
      {showNameModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-zinc-800 rounded-2xl p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Create API Key</h2>
            <input
              type="text"
              placeholder="Enter API key name"
              value={keyName}
              onChange={(e) => setKeyName(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && confirmCreateKey()}
              className="w-full px-4 py-2 bg-zinc-700 text-white rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              autoFocus
            />
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => setShowNameModal(false)}
                className="px-4 py-2 bg-zinc-700 hover:bg-zinc-600 rounded-lg text-sm"
              >
                Cancel
              </button>
              <button
                onClick={confirmCreateKey}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
