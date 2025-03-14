import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AddItemScreen from './AddItemScreen';

function ManualDivision() {
  const location = useLocation();
  const { names, total } = location.state || { names: [], total: "0" };
  const navigate = useNavigate();
  const [remaining, setRemaining] = useState(parseFloat(total));
  const [items, setItems] = useState([]);
  const [showAddItemScreen, setShowAddItemScreen] = useState(false);

  const addItem = (value, selectedParticipants) => {
    const valueFloat = parseFloat(value);
    if (!valueFloat || valueFloat > remaining || selectedParticipants.length === 0) return;
    const splitValue = valueFloat / selectedParticipants.length;
    const newItem = { value: valueFloat, participants: selectedParticipants, splitValue };
    setItems([...items, newItem]);
    setRemaining(remaining - valueFloat);
    setShowAddItemScreen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      {!showAddItemScreen ? (
        <>
          <h1 className="font-bold mb-4 text-center">División Manual</h1>
          <div className="mt-4 text-xl font-bold">Total restante: {remaining.toFixed(2)}€</div>
          <button
            className={`mt-4 px-6 py-3 rounded-lg text-white ${remaining === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500'}`}
            onClick={() => setShowAddItemScreen(true)}
            disabled={remaining === 0}
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
        </>
      ) : (
        <AddItemScreen
          participants={names}
          remaining={remaining}
          onAddItem={addItem}
          onCancel={() => setShowAddItemScreen(false)}
        />
      )}
    </div>
  );
}

export default ManualDivision;
