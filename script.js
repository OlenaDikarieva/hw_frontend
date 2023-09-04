/* 
    Необходимо создать объект bankAccount(дебет), представляющий банковский счёт со
    следующими свойствами:

    1. accountNumber: 123456789 (для номера счёта);
    2. accountHolderName для имени владельца счёта;
    3. balance для баланса;
    4. deposit() для описания действия по добавлению денег на счёт;
    5. withdraw() для описания действия по снятию денег со счёта;
    6. checkBalance() для проверки баланса.
*/

const bankAccount = {
    accountNumber: 123456789,
    accountHolderName: "John Smit",
    balance: 0,

    deposit(sum) {
        if (sum > 0) {
            this.balance += sum;
            console.log(
                `${this.accountHolderName} added ${sum} on ${this.accountNumber}. New balance is: ${this.balance}`
            );
        } else {
            console.log("Amount must be greater than zero..");
        }
    },

    withdraw(sum) {
        if (sum > 0 && sum <= this.balance) {
            this.balance -= sum;
            console.log(
                `You have withdrawn ${sum} from your account. New balance: ${this.balance}`
            );
        } else if (sum > this.balance) {
            console.log("Insufficient funds on the account..");
        } else {
            console.log("The withdrawal amount must be greater than zero.");
        }
    },

    checkBalance() {
        console.log(`Current balance: ${this.balance}`);
    },
};

bankAccount.checkBalance(); //  Current balance: 0

bankAccount.deposit(700); // John Smit added 700 on 123456789. New balance is: 700
bankAccount.deposit(-50); // Amount must be greater than zero..
bankAccount.withdraw(200); // ou have withdrawn 200 from your account. New balance: 500
bankAccount.withdraw(1500); // Insufficient funds on the account..

bankAccount.checkBalance(); //Current balance: 500
