import { useNavigate, useLocation } from "react-router-dom";

function EqualDivision() {
  const location = useLocation();
  const navigate = useNavigate();
  const { names, total } = location.state || { names: [], total: "0" };

  const totalAmount = parseFloat(total);
  const perPerson = (totalAmount / names.length).toFixed(2);

  return (
    <div className="flex flex-col items-center justify-center h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-6">División en Partes Iguales</h1>
      
      <div className="bg-gray-800 shadow-lg rounded-lg p-6 text-center w-3/4 max-w-md">
        <p className="text-xl font-semibold mb-4">Total a pagar:</p>
        <p className="text-4xl font-bold text-green-600">{totalAmount.toFixed(2)}€</p>

        <div className="border-t mt-4 pt-4">
          <p className="text-lg">Cada participante debe pagar:</p>
          <p className="text-3xl font-bold text-blue-500">{perPerson}€</p>
        </div>
      </div>

      <div className="flex gap-4 mt-6">
        <button
          className="bg-gray-500 text-white px-6 py-3 rounded-lg"
          onClick={() => navigate(-1)}
        >
          Volver
        </button>
      </div>
    </div>
  );
}

export default EqualDivision;
