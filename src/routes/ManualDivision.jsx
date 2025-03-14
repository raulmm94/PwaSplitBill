import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function ManualDivision() {
  const location = useLocation();
  const { names, total } = location.state || { names: [], total: "0" };
  const navigate = useNavigate();
  const [remaining, setRemaining] = useState(parseFloat(total));
  const [items, setItems] = useState([]);

  const addItem = (value, selectedParticipants) => {
    const valueFloat = parseFloat(value);
    console.log(!valueFloat)
    console.log(valueFloat > remaining)
    console.log(selectedParticipants.length === 0)
    console.log(valueFloat)
    console.log(remaining)
    if (!valueFloat || valueFloat > remaining || selectedParticipants.length === 0) return;
    console.log("pasa")
    const splitValue = valueFloat / selectedParticipants.length;
    const newItem = { value: valueFloat, participants: selectedParticipants, splitValue };
    setItems([...items, newItem]);
    setRemaining(remaining - valueFloat);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <h1 className="text-2xl font-bold">División Manual</h1>
      <div className="mt-4 text-xl font-bold">Total restante: {remaining.toFixed(2)}€</div>
      <button
        className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-lg"
        onClick={() => {
          const value = prompt("Ingrese el monto del ítem:");
          if (!value) return;
          const selectedParticipants = names.filter(() => window.confirm("¿Incluir este participante?"));
          addItem(value, selectedParticipants);
        }}
      >
        + Agregar ítem
      </button>
      <ul className="mt-4 w-3/4">
        {items.map((item, index) => (
          <li key={index} className="border p-2 rounded mt-2">
            {item.value}€ dividido entre {item.participants.length} personas
          </li>
        ))}
      </ul>

      <div className="flex gap-4 mt-6">
        <button
          className="mt-6 bg-gray-500 text-white px-6 py-3 rounded-lg"
          onClick={() => navigate(-1)}
          >
          Volver
        </button>
        <button
          className="mt-6 bg-green-500 text-white px-6 py-3 rounded-lg"
          disabled={remaining !== 0}
          onClick={() => navigate("/final-summary", { state: { names, items } })}
        >
          Continuar
        </button>
      </div>
    </div>
  );
}

export default ManualDivision;
