// Arquivo principal que coordena todos os módulos
import { 
  btnLogin,
  btnTransfer,
  btnLoan,
  btnClose,
  btnSort,
  inputLoginUsername,
  inputLoginPin,
  inputTransferTo,
  inputTransferAmount,
  inputLoanAmount,
  inputCloseUsername,
  inputClosePin
} from './dom.js';
import { login, closeAccount, getCurrentAccount } from './auth.js';
import { transferMoney, requestLoan } from './transactions.js';
import { displayMovements } from './ui.js';

// Variável para controle do sort
let sorted = false;

// Event Listeners
btnLogin.addEventListener('click', function(e) {
  e.preventDefault();
  login(inputLoginUsername.value, inputLoginPin.value);
});

btnTransfer.addEventListener('click', function(e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const to = inputTransferTo.value;
  transferMoney(to, amount);
});

btnLoan.addEventListener('click', function(e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  requestLoan(amount);
});

btnClose.addEventListener('click', function(e) {
  e.preventDefault();
  closeAccount(inputCloseUsername.value, inputClosePin.value);
});

btnSort.addEventListener('click', function(e) {
  e.preventDefault();
  const currentAccount = getCurrentAccount();
  if (currentAccount) {
    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted;
  }
});

console.log('Bankist App iniciado com arquitetura modular!');