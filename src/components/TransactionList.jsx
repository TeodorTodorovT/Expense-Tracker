/* eslint-disable react/prop-types */
const TransactionList = ({ transactions, onDeleteTransaction }) => (
    <ul className="mt-4 bg-white shadow-md rounded divide-y">
        {transactions.length > 0 ? (
            transactions.map((transaction) => (
                <li
                    key={transaction.id}
                    className={`p-4 flex justify-between items-center ${
                        transaction.type === 'income'
                            ? 'text-green-500'
                            : 'text-red-500'
                    }`}
                >
                    <span>{transaction.description}</span>
                    <span>${transaction.amount.toFixed(2)}</span>
                    <button
                        onClick={() => onDeleteTransaction(transaction.id)}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        X
                    </button>
                </li>
            ))
        ) : (
            <li className="p-4 text-gray-500 text-center">
                No transactions found
            </li>
        )}
    </ul>
);

export default TransactionList;
