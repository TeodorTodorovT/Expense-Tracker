import { useState } from 'react';

/* eslint-disable react/prop-types */
const TransactionForm = ({ onAddTransaction }) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('income');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: Math.random().toString(36).substr(2, 9),
            description,
            amount: parseFloat(amount),
            type,
        };
        onAddTransaction(newTransaction);
        setDescription('');
        setAmount('');
    };

    return (
        <div className='flex justify-center'>
            <form
                onSubmit={handleSubmit}
                className="p-4 bg-white shadow-md rounded mt-4 w-96"
            >
                <div className="mb-4">
                    <label className="block text-gray-700">Description</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Amount</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Type</label>
                    <select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className="w-full p-2 border rounded"
                    >
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Add Transaction
                </button>
            </form>
        </div>
    );
};

export default TransactionForm;
