import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const moneyAmount = Number(localStorage.getItem('balance')|| 0);
  const [deposit, setDepositMoney] = useState('');
  const [withdraw, setWithdrawMoney] = useState('');
  const [balance, setBalance] = useState(moneyAmount);

 useEffect(() => {
    localStorage.setItem('balance', balance)
  }, [balance])

  function updateDeposit() {
    setBalance((balance) => balance + parseInt(deposit));
   setDepositMoney('')
  } 

  function updateWithdraw(){
    setBalance((balance) => (balance) - parseInt(withdraw));
    setWithdrawMoney('');
    let difference = 1000 + balance;
    if((balance - parseInt(withdraw)) < -1000) {
      alert(`Credit not sufficient, ${difference} still available`);
      setBalance(balance)
    } 
  }
  
  return (
    <div>
      <h1 className='main'>Your current balance is <span style={balance < 0 ? {color:'tomato'} : {color:'green'}}>{balance}</span> €</h1>
      <div className='form'>
          <input className='inputStyle1' type='number' onChange={e => setDepositMoney(e.target.value)} value={deposit}/>
          <button className='button1' onClick={updateDeposit}>Deposit</button>
          <input className='inputStyle2' type='number' onChange={e => setWithdrawMoney(e.target.value)} value={withdraw} />
          <button className='button2' onClick={updateWithdraw}>Withdraw</button>
      </div>
    </div>
)
}

export default App;
