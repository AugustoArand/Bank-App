import { accounts } from './data.js';
import { 
  labelWelcome, 
  labelBalance, 
  labelSumIn, 
  labelSumOut, 
  labelSumInterest,
  containerApp,
  inputLoginUsername,
  inputLoginPin,
  inputCloseUsername,
  inputClosePin
} from './dom.js';
import { displayMovements, calcDisplayBalance, calcDisplaySummary } from './ui.js';

let currentAccount;

// Função para atualizar a UI
const updateUI = function(acc) {
  // Mostrar os movimentos da conta
  displayMovements(acc.movements);

  // Mostrar o balanço da conta
  const balance = calcDisplayBalance(acc);
  labelBalance.textContent = `${balance} EUR`;

  // Mostrar o sumário da conta
  const summary = calcDisplaySummary(acc);
  labelSumIn.textContent = `${summary.incomes}€`;
  labelSumOut.textContent = `${summary.out}€`;
  labelSumInterest.textContent = `${summary.interest}€`;
};

// Sistema de LOGIN
const login = function(username, pin) {
  currentAccount = accounts.find(acc => acc.username === username);
  
  if(currentAccount?.pin === Number(pin)) {
    // Limpeza dos campos
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Mostrar a mensagem de boas vindas em caso de Sucesso
    labelWelcome.textContent = `Welcome Back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;
    
    // Função criada para chamar a amostragem de informações na conta
    updateUI(currentAccount);
    return true;
  }
  return false;
};

// Função para logout
const logout = function() {
  containerApp.style.opacity = 0;
  labelWelcome.textContent = 'Log in to get started';
  currentAccount = null;
};

// Função para fechar conta
const closeAccount = function(username, pin) {
  if(
    username === currentAccount.username && 
    Number(pin) === currentAccount.pin
  ) {
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    
    // Deletar conta
    accounts.splice(index, 1);
    logout();
    
    inputCloseUsername.value = inputClosePin.value = '';
    return true;
  }
  return false;
};

const getCurrentAccount = () => currentAccount;

export { 
  login, 
  logout, 
  closeAccount, 
  updateUI, 
  getCurrentAccount 
};