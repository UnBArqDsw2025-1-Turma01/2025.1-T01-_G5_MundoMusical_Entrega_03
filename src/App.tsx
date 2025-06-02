import React from "react";
import { MundoMusicalComponent } from "./components/MundoMusicalComponent";
import "./index.css";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Mundo Musical</h1>
        <MundoMusicalComponent />
      </div>
    </div>
  );
};

export default App;