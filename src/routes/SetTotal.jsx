import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SetTotal() {
    const location = useLocation();
    const navigate = useNavigate();
    const { names } = location.state || { names: [] };

    const [amount, setAmount] = useState("0");

    const handleKeyPress = (key) => {
        if (key === "C") {
            setAmount("0");
            return;
        }

        if ((key === "." && (amount.toString().includes(".") || amount === "0")) || (amount === "0" && key === 0)) {
            return;
        }
        
        if (amount === "0") {
            setAmount(key);
        } else if (amount.toString().includes(".")) { 
            const decimalPart = amount.toString().split(".")[1];
            if (decimalPart.toString().length < 2) {
                setAmount(amount + key);
            }
        } else if (amount.toString().length < 6 || (amount.toString().length == 6) && key === ".") {
            setAmount(amount.toString().concat(key));
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen p-4">
            <h1 className="text-2xl font-bold mb-5 text-center">Total cuenta</h1>
            <div className="w-64 h-16 bg-gray-200 text-4xl font-bold flex items-center justify-center mb-4 rounded-lg text-gray-600">{amount}</div>
            <div className="grid grid-cols-3 gap-2 mt-4">
            {[7, 8, 9, 4, 5, 6, 1, 2, 3, "C", 0, "."].map((key) => (
                <button key={key} className="bg-blue-500 text-white p-4 rounded-lg text-2xl w-16 h-16" onClick={() => handleKeyPress(key)}>
                    {key}
                </button>
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
            disabled={parseFloat(amount) <= 0}
            onClick={() => navigate("/select-method", { state: { names, total: amount } })}
            >
            Continuar
            </button>
        </div>
        </div>
    );
}

export default SetTotal;
