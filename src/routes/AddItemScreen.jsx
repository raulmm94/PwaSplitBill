import React, { useState } from "react";

const AddItemScreen = ({ participants, remaining, onAddItem, onCancel }) => {
    const [itemValue, setItemValue] = useState('');
    const [selectedParticipants, setSelectedParticipants] = useState([]);

    const handleCheckboxChange = (participant) => {
        setSelectedParticipants((prev) =>
            prev.includes(participant)
            ? prev.filter((p) => p !== participant)
            : [...prev, participant]
        );
    };

    const handleContinue = () => {
        if (itemValue > 0 && itemValue <= remaining && selectedParticipants.length > 0) {
            onAddItem(itemValue, selectedParticipants);
        } else {
            alert('Por favor, ingrese un valor válido y seleccione al menos un participante.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen p-4 bg-gray-600">
            <h2 className="text-xl font-bold">Agregar Ítem</h2>
            <div className="mt-4 w-full max-w-md">
            <label className="block text-left mb-2">
                Valor del Ítem (máximo {remaining.toFixed(2)}€):
            </label>
            <input
                type="number"
                value={itemValue}
                onChange={(e) => setItemValue(e.target.value)}
                max={remaining}
                className="w-full border px-3 py-2 rounded"
            />
            </div>
            <div className="mt-4 w-full max-w-md">
            <h3 className="text-left mb-2 font-bold">Seleccionar Participantes</h3>
            {participants.map((participant) => (
                <label key={participant} className="block text-left mb-1">
                <input
                    type="checkbox"
                    checked={selectedParticipants.includes(participant)}
                    onChange={() => handleCheckboxChange(participant)}
                    className="mr-2"
                />
                {participant}
                </label>
            ))}
            </div>

            <div className="flex gap-4 mt-6">
            <button
                className="bg-gray-500 text-white px-6 py-3 rounded-lg"
                onClick={onCancel}
            >
                Volver Atrás
            </button>
            <button
                className="bg-blue-500 text-white px-6 py-3 rounded-lg"
                onClick={handleContinue}
            >
                Continuar
            </button>
            </div>
        </div>
    );
};

export default AddItemScreen;
