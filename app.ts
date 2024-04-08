// import inquirer from 'inquirer';


// type ansType = {
//     userGuesser: number
// }

// const sysGenNo = Math.floor(Math.random() * 7); 


// const answers : ansType = await  inquirer.prompt([
// {
//     type:"number",
//     name:"usergusser",
//     message:"write your gusess b/w 1 t0 7",
// }

// ])

// const {userGuesser} = answers;

// if(userGuesser === sysGenNo){

//     console.log(userGuesser, "userGuesser", sysGenNo, 'Sys');
//     console.log("yeap your answer is rigth \n you win!")
// } else{
//     console.log("please try your again Better luck nest time!")
// }



import inquirer from "inquirer";

// Interface to define the user's guess type
interface Guess {
  userGuesser: number;
}

async function main() {
  const sysGenNo = Math.floor(Math.random() * 7) + 1; // Generate random number between 1 and 7 (inclusive)

  const answers: Guess = await inquirer.prompt([
    {
      type: "number",
      name: "userGuesser",
      message: "Guess a number between 1 and 7:",
      validate: (value) => {
        if (isNaN(value) || value < 1 || value > 7) {
          return "Invalid guess. Please enter a number between 1 and 7.";
        }
        return true;
      },
    },
  ]);

  const { userGuesser } = answers;

  if (userGuesser === sysGenNo) {
    console.log(`Congratulations! You guessed the number: ${sysGenNo}`);
  } else {
    console.log(`Sorry, the correct number was: ${sysGenNo}. Try again next time!`);
  }
}

main();
