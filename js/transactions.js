import { accounts } from './data.js';
import { 
  inputTransferTo,
  inputTransferAmount,
  inputLoanAmount
} from './dom.js';
import { updateUI, getCurrentAccount } from './auth.js';

// Função para transferir dinheiro
const transferMoney = function(to, amount) {
  const currentAccount = getCurrentAccount();
  const receiverAcc = accounts.find(acc => acc.username === to);

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Fazendo a transferência
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
    return true;
  }
  return false;
};

// Função para solicitar empréstimo
const requestLoan = function(amount) {
  const currentAccount = getCurrentAccount();
  
  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Adicionar movimento
    currentAccount.movements.push(amount);
    
    // Atualizar a interface
    updateUI(currentAccount);
    inputLoanAmount.value = '';
    return true;
  }
  inputLoanAmount.value = '';
  return false;
};

export { transferMoney, requestLoan };