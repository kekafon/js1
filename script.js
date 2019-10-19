'use strict';

var money = +prompt('Ваш бюджет на месяц?', '');
var time = prompt('Введите дату в формате YYYY-MM--DD', '');

var stat1 = prompt('Введите обязательную статью расходов?', '');
var moneyMax1 = +prompt('Во сколько обойдётесь?', '');
var stat2 = prompt('Введите обязательную статью расходов?', '');
var moneyMax2 = +prompt('Во сколько обойдётесь?', '');

var appData = {
    budget: money,
    timeData: time,
    expenses: {stat1 : moneyMax1, stat2: moneyMax2},
    optionalExpenses: {},
    income: [],
    savings: false
};

alert('Расход в день ' + (appData.budget  / 30));
