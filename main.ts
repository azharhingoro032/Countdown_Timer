#! /usr/bin/env node
import chalk from "chalk"

function count(count:number, milisecond:number ) {
    setTimeout(() => {
       console.log(`Time remaining: ${count} secounds`);
        
    }, milisecond);
}

count(10, 1000)



function count1(count:number, milisecond:number ) {
    setTimeout(() => {
       console.log(`Time remaining: ${count} secounds`);
        
    }, milisecond);
}

count1(9, 2000)


function count2(count:number, milisecond:number ) {
    setTimeout(() => {
       console.log(`Time remaining: ${count} secounds`);
        
    }, milisecond);
}

count2(8, 3000)



function count3(count:number, milisecond:number ) {
    setTimeout(() => {
       console.log(`Time remaining: ${count} secounds`);
        
    }, milisecond);
}

count3(7, 4000)


function count4(count:number, milisecond:number ) {
    setTimeout(() => {
       console.log(`Time remaining: ${count} secounds`);
        
    }, milisecond);
}

count4(6, 5000)



function count5(count:number, milisecond:number ) {
    setTimeout(() => {
       console.log(`Time remaining: ${count} secounds`);
        
    }, milisecond);
}

count5(5, 6000)



function count6(count:number, milisecond:number ) {
    setTimeout(() => {
       console.log(`Time remaining: ${count} secounds`);
        
    }, milisecond);
}

count6(4, 7000)


function count7(count:number, milisecond:number ) {
    setTimeout(() => {
       console.log(`Time remaining: ${count} secounds`);
        
    }, milisecond);
}

count7(3, 8000)



function count8(count:number, milisecond:number ) {
    setTimeout(() => {
       console.log(`Time remaining: ${count} secounds`);
        
    }, milisecond);
}

count8(2, 9000)


function count9(count:number, message: string, milisecond:number ) {
    setTimeout(() => {
       console.log(`Time remaining: ${count} secounds`);
       console.log(chalk.red(message));
       process.exit();
        
    }, milisecond);
}

count9(1, "The countdown has concluded. Your timer session has ended.", 10000)

