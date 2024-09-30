/* eslint-disable react/prop-types */
const Header = ({ balance, totalIncome, totalExpense }) => (
    <header className="text-center p-4 bg-blue-600 text-white rounded">
        <h1 className="text-3xl font-bold">Expense Tracker</h1>
        <div className="flex justify-around mt-4">
            <div>
                <h2 className="text-xl">Balance</h2>
                <p className="text-2xl font-bold">${balance.toFixed(2)}</p>
            </div>
            <div>
                <h2 className="text-xl">Total Income</h2>
                <p className="text-green-500">${totalIncome.toFixed(2)}</p>
            </div>
            <div>
                <h2 className="text-xl">Total Expense</h2>
                <p className="text-red-500">${totalExpense.toFixed(2)}</p>
            </div>
        </div>
    </header>
);

export default Header;
