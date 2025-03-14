import { useNavigate, useLocation } from "react-router-dom";

function FinalSummary() {
    const location = useLocation();
    const navigate = useNavigate();
    const { names, items } = location.state || { names: [], items: [] };

    // Calcular el total de la cuenta
    const totalAmount = items.reduce((sum, item) => sum + item.value, 0).toFixed(2);

    // Calcular el importe total que debe pagar cada participante
    const participantTotals = names.map((name) => {
    const totalForParticipant = items.reduce((sum, item) => {
        if (item.participants.includes(name)) {
        return sum + item.splitValue;
        }
        return sum;
    }, 0);
    return { name, total: totalForParticipant.toFixed(2) };
    });

    return (
    <div className="flex flex-col items-center justify-center h-screen p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Resumen Final</h1>

        {/* Total de la cuenta */}
        <div className="bg-gray-800 shadow-lg rounded-lg p-6 text-center w-3/4 max-w-md mb-6">
        <p className="text-xl font-semibold mb-4">Total de la cuenta:</p>
        <p className="text-4xl font-bold text-green-600">{totalAmount}€</p>
        </div>

        {/* Importe por participante */}
        <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Importe por participante</h2>
        <ul className="border rounded-lg p-4 bg-gray-800">
            {participantTotals.map((participant, index) => (
            <li key={index} className="flex justify-between border-b py-2">
                <span>{participant.name}</span>
                <span className="font-bold text-blue-500">{participant.total}€</span>
            </li>
            ))}
        </ul>
        </div>

        {/* Botón para volver a la pantalla principal */}
        <button
        className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg text-xl"
        onClick={() => navigate("/")}
        >
        Volver a Inicio
        </button>
    </div>
    );
}

export default FinalSummary;
