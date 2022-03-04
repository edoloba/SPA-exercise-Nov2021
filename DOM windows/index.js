let randomize = () => {
    let tried = prompt(`Guess a number between 1 -10:`);
    let number = Math.ceil(Math.random() * 10);
    for (let attempts = 1; attempts <= 3; attempts++) {
        if (number === tried) {
            alert `Success, the number was ${number}! Attempts: ${attempts}`;
            return;
        } else if (tried != number && attempts < 3) {
            prompt(`Wrong!!! Try again`);
        } else if (tried != number && attempts >= 3) {
            alert(`Sorry! you falied to guess the number in three attempts. The number was ${number}`)
        }
    }
}
randomize();
