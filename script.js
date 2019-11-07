let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),
    
    btn = document.getElementsByTagName('button'),
    expensesBtn = btn[0],
    optionalExpensesmBtn = btn[1],
    countBtn = btn[2];

let optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('#sum'),
    percentValue = document.querySelector('#percent'),
    yearValue = document.querySelector('.year'),
    monthValue = document.querySelector('.month'),
    dayValue = document.querySelector('.day');


let money, time;

var appData = {
    budget: 0,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,

    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов', '');
            let b = prompt('Во сколько обойдётесь?', '');
            if (typeof (a) === 'string' && typeof (a) != 'null' && typeof (b) === 'string' && typeof (b) != 'null' && a != '' && b != '' && a.length < 50) {
                console.log('done');
                appData.expenses[a] = b;
            } else {
                console.log('Bad result');
                i--;
            }
        }
    },

    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert('Расход в день ' + appData.moneyPerDay);
    },

    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Error');
        }
    },

    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений');
            let percent = +prompt('Под какой процент?');
            appData.monthIncome = save / 100 / 12 * percent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }
    },

    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            let a = prompt('Введите небязательную статью расходов', '');
            let b = prompt('Во сколько обойдётесь?', '');

            if (typeof (a) === 'string' && typeof (a) != 'null' && typeof (b) === 'string' && typeof (b) != 'null' && a != '' && b != '' && a.length < 50) {
                console.log('done');
                appData.optionalExpenses[a] = b;
            } else {
                console.log('Bad result');
                i--;
            }

        }
    },

    chooseIncome: function () {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        while (items == '' || typeof(items) != 'string' || items == 'null') {
            items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        }

        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-то еще?'));
        appData.income.sort();

        alert('Способы доп. заработка: ');
        appData.income.forEach(function(item, i, mass){
            console.log(i+1 + ') ' + item);
        });
    },

};

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM--DD', '');

    while (isNaN(money) || money == '' || money == null) { //true когда попадает строка
        money = +prompt('Ваш бюджет на месяц?', '');
    }

    appData.budget = money;
}

//console.log('Наша программа включает в себя данные:')
//for (let key in appData) {
    //console.log(key);
//}


