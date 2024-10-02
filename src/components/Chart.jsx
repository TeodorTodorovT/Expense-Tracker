import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Doughnut } from 'react-chartjs-2';

Chart.register(CategoryScale);


const BudgetChart = ({totalIncome, totalExpense}) => {
    console.log(totalIncome);
    

    const data = {
        labels: [
          'Income',
          'Expense',
        ],
        datasets: [{
          label: 'Income and Expense',
          data: [totalIncome, totalExpense],
          backgroundColor: [
            'rgb(0, 128, 0)',
            'rgb(255, 0, 0)',
          ],
          hoverOffset: 4
        }]
      };


    return (
        <div className="w-96">
            <Doughnut data={data}/>
        </div>
    );
};

export default BudgetChart;
