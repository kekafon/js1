let money, time;
var appData = {
    budget: 0,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
};


function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM--DD', '');

    while (isNaN(money) || money == '' || money == null) { //true когда попадает строка
        money = +prompt('Ваш бюджет на месяц?', '');
    }

    appData.budget = money;
}
start();


function chooseExpenses() {
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
}
chooseExpenses();


function chooseOptExpenses() {
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
}


function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert('Расход в день ' + appData.moneyPerDay);
}
detectDayBudget();


function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('Минимальный уровень достатка');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Средний уровень достатка');
    } else if (appData.moneyPerDay > 2000) {
        console.log('Высокий уровень достатка');
    } else {
        console.log('Error');
    }
}
detectLevel();


function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений');
        let percent = +prompt('Под какой процент?');
        appData.monthIncome = save / 100 / 12 * percent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
}
checkSavings();