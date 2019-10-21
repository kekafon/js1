var money = +prompt('Ваш бюджет на месяц?', '');
var time = prompt('Введите дату в формате YYYY-MM--DD', '');

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов?', '');
    let b = prompt('Во сколько обойдётесь?', '');

    if (typeof(a) === 'string' && typeof(a) != 'null' && typeof(b) === 'string' && typeof(b) != 'null' && a != '' && b != '' && a.length < 50) {
        console.log('done');
        appData.expenses[a] = b;    
    } else {
        console.log('Bad result');
        i--;
    } 
};

appData.moneyPerDay = (appData.budget / 30);

alert('Расход в день ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
    console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Error');
}
