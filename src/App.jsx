import { useState, useEffect } from 'react';
import Header from './components/Header';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import BudgetChart from './components/Chart';

const App = () => {
    const [transactions, setTransactions] = useState(() => {
        const storedTransactions = localStorage.getItem('transactions');
        return storedTransactions ? JSON.parse(storedTransactions) : [];
    });

    const totalIncome = transactions
        .filter((transaction) => transaction.type === 'income')
        .reduce((acc, transaction) => acc + transaction.amount, 0);

    const totalExpense = transactions
        .filter((transaction) => transaction.type === 'expense')
        .reduce((acc, transaction) => acc + transaction.amount, 0);

    const balance = totalIncome - totalExpense;

    const addTransaction = (transaction) => {
        setTransactions((prevTransactions) => [
            transaction,
            ...prevTransactions,
        ]);
    };

    const deleteTransaction = (id) => {
        setTransactions((prevTransactions) =>
            prevTransactions.filter((t) => t.id !== id)
        );
    };

    useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(transactions));
    }, [transactions]);

    return (
        <div className="min-h-screen bg-gray-100">
            <Header
                balance={balance}
                totalIncome={totalIncome}
                totalExpense={totalExpense}
            />
            <div className='flex flex-col md:flex-row justify-center items-center'>
                <TransactionForm onAddTransaction={addTransaction} />
                <BudgetChart
                    totalIncome={totalIncome}
                    totalExpense={totalExpense}
                />
            </div>

            <TransactionList
                transactions={transactions}
                onDeleteTransaction={deleteTransaction}
            />
        </div>
    );
};

export default App;
