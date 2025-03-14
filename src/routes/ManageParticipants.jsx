import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ManageParticipants() {
  const location = useLocation();
  const navigate = useNavigate();
  const { participants } = location.state || { participants: 2 };

  const [names, setNames] = useState([]);

  useEffect(() => {
    setNames(Array.from({ length: participants }, (_, i) => `Participante ${i + 1}`));
  }, [participants]);

  const handleNameChange = (index, newName) => {
    const updatedNames = [...names];
    updatedNames[index] = newName;
    setNames(updatedNames);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <h1 className="text-2xl font-bold text-center">Gestión de Participantes</h1>
      <div className="mt-4 w-full max-w-md">
        {names.map((name, index) => (
          <div key={index} className="flex items-center gap-2 mb-2">
            <span className="font-semibold">{index + 1}.</span>
            <input
              type="text"
              value={name}
              onChange={(e) => handleNameChange(index, e.target.value)}
              className="border p-2 rounded w-full"
            />
          </div>
        ))}
      </div>
      <div className="flex gap-4 mt-6">
        <button
          className="bg-gray-500 text-white px-6 py-3 rounded-lg"
          onClick={() => navigate(-1)}
        >
          Volver
        </button>
        <button
          className="bg-green-500 text-white px-6 py-3 rounded-lg"
          onClick={() => navigate("/set-total", { state: { names } })}
        >
          Continuar
        </button>
      </div>
    </div>
  );
}

export default ManageParticipants;
