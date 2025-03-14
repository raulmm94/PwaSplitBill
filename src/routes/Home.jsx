import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [participants, setParticipants] = useState("");

  const handleNumberClick = (num) => {
    const newNumber = participants + num;
    if (parseInt(newNumber, 10) <= 20) {
      setParticipants(newNumber);
    }
  };

  const handleDelete = () => {
    setParticipants(participants.slice(0, -1));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <h1 className="font-bold mb-4 text-center">Número de participantes</h1>
      
      {/* Pantalla de entrada */}
      <div className="w-32 h-16 bg-gray-200 text-4xl font-bold flex items-center justify-center mb-4 rounded-lg text-gray-600">
        {participants || "0"}
      </div>

      {/* Teclado numérico */}
      <div className="grid grid-cols-3 gap-2">
        {[7, 8, 9, 4, 5, 6, 1, 2, 3].map((num) => (
          <button
            key={num}
            className="bg-blue-500 text-white p-4 rounded-lg text-2xl w-16 h-16"
            onClick={() => handleNumberClick(num)}
          >
            {num}
          </button>
        ))}
        {/* Botón de "0" ocupa dos columnas */}
        <button
          className="bg-blue-500 text-white p-4 rounded-lg text-2xl w-34 h-16 col-span-2"
          onClick={() => handleNumberClick(0)}
        >
          0
        </button>
        {/* Botón de borrar */}
        <button
          className="bg-red-500 text-white p-4 rounded-lg text-2xl w-16 h-16"
          onClick={handleDelete}
        >
          ⌫
        </button>
      </div>

      {/* Botón de continuar */}
      <button
        className="mt-6 bg-green-500 text-white px-6 py-3 rounded-lg text-xl disabled:opacity-50"
        onClick={() => navigate("/manage-participants", { state: { participants: parseInt(participants, 10) } })}
        disabled={!participants || parseInt(participants, 10) < 1}
      >
        Continuar
      </button>
    </div>
  );
}

export default Home;
