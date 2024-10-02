/* eslint-disable react/prop-types */
const Header = ({ balance, totalIncome, totalExpense }) => (
    <header className="text-center p-5 bg-blue-600 text-white">
        <h1 className="text-3xl font-bold">Budget Tracker</h1>
        <div className="flex flex-col justify-around mt-4 md:flex-row">
            <div>
                <h2 className="text-xl">Balance</h2>
                <p className="text-2xl font-bold">${balance.toFixed(2)}</p>
            </div>
            <div>
                <h2 className="text-xl">Total Income</h2>
                <p className="text-green-500 font-semibold text-lg">${totalIncome.toFixed(2)}</p>
            </div>
            <div>
                <h2 className="text-xl">Total Expense</h2>
                <p className="text-red-500 font-semibold text-lg">${totalExpense.toFixed(2)}</p>
            </div>
        </div>
    </header>
);

export default Header;
