import { Routes, Route, Link } from "react-router-dom";
import ChatBox from "./ChatBox";
import ManageApiKey from "./user/manage-api-key/page";

export default function App() {
  return (
    <Routes>
      {/* Chat Page */}
      <Route
        path="/"
        element={
          <div className="min-h-screen w-full bg-blue-950 flex flex-col items-center pt-10">
            <h1 className="text-white text-3xl font-bold mb-4">
              Real Time Chat App
            </h1>

            {/* Navigation Button */}
            <Link
              to="/manage-api-keys"
              className="mb-6 bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg text-sm"
            >
              Manage API Keys
            </Link>

            <ChatBox />
          </div>
        }
      />

      {/* API Keys Page */}
      <Route path="/manage-api-keys" element={<ManageApiKey />} />
    </Routes>
  );
}
