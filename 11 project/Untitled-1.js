import BankAccount from "./BankAccount";

function main() {
  const account = new BankAccount(1000);

  console.log("Welcome to MyBank Console App");
  console.log("Initial balance:", account.getBalance());

  while (true) {
    console.log("\nOptions:");
    console.log("1. Deposit");
    console.log("2. Withdraw");
    console.log("3. Check Balance");
    console.log("4. Exit");

    const choice = prompt("Enter your choice: ");

    switch (choice) {
      case "1":
        const depositAmount = parseFloat(prompt("Enter the deposit amount: "));
        account.deposit(depositAmount);
        break;
      case "2":
        const withdrawAmount = parseFloat(prompt("Enter the withdrawal amount: "));
        account.withdraw(withdrawAmount);
        break;
      case "3":
        console.log("Current balance:", account.getBalance());
        break;
      case "4":
        console.log("Thank you for using MyBank Console App.");
        return;
      default:
        console.log("Invalid choice. Please try again.");
    }
  }
}

main();
