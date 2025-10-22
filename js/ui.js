import { containerMovements } from './dom.js';

// Função para exibir movimentações
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  // Código para fazer a classificação de forma Ascendente ou Descendente
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function(mov, i){
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// Função para calcular e exibir o saldo
const calcDisplayBalance = function(account) {
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  return account.balance;
};

// Função para calcular e exibir o resumo
const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  const out = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate)/100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);

  return {
    incomes,
    out: Math.abs(out),
    interest
  };
};

export { displayMovements, calcDisplayBalance, calcDisplaySummary };