// import React from 'react'
// import Chat from './Chat';

// const App = () => {
//   return (
//     <div>
//       <Chat />
//     </div>
//   )
// }

// export default App;

// --------------------------------------------

// import ChatBox from "./ChatBox";
// import "./style.css";

// export default function App() {
//   return (
//     <div className="app-container">
//       <h1 className="title">Real Time Chat App</h1>
//       <ChatBox />
//     </div>
//   );
// }

// --------------------------------------------

import ChatBox from "./ChatBox";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-blue-950 flex flex-col items-center pt-10">
      <h1 className="text-white text-3xl font-bold mb-6">
        Real Time Chat App
      </h1>

      <ChatBox />
    </div>
  );
}
