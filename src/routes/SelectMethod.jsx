import { useNavigate, useLocation } from "react-router-dom";

function SelectMethod() {
  const location = useLocation();
  const { names, total } = location.state || { names: [], total: "0" };
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <h1 className="text-2xl font-bold text-center">¿Cómo dividir la cuenta?</h1>
      <div className="mt-6 flex flex-col gap-4 w-3/4">
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-lg text-xl"
          onClick={() => navigate("/manual-division", { state: { names, total } })}
        >
          Custom
        </button>
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-lg text-xl"
          onClick={() => navigate("/equal-division", { state: { names, total } })}
        >
          Partes iguales
        </button>
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

export default SelectMethod;
