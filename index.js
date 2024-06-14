import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
const res = await inquirer.prompt({
    name: "userInput",
    type: "number",
    message: "Please Enter The Amount in Second",
    validate: (input) => {
        if (isNaN(input)) {
            return "Please Enter Valid Number";
        }
        else if (input > 60) {
            return "Seconds Must be in 60";
        }
        else {
            return true;
        }
    }
});
let input = res.userInput;
function startTime(val) {
    const intTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(intTime);
    setInterval((() => {
        const currTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime, currTime);
        if (timeDiff <= 0) {
            console.log("Timer has expired");
            process.exit();
        }
        const min = Math.floor((timeDiff % (3600 * 24)) / 3600);
        const sec = Math.floor((timeDiff % 60));
        console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`);
    }), 1000);
}
startTime(input);