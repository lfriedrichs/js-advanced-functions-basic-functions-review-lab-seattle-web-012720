// Your code here
function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity='go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(string='*') {
    return function(input='special') {
        return `You are ${string}${input}${string}!`
    }
}

let Calculator = {
    add: function(num1, num2) {
        return num1 + num2
    },
    subtract: function(num1, num2) {
        return num1 - num2
    },
    multiply: function(num1, num2) {
        return num1 * num2
    },
    divide: function(num1, num2) {
        return num1 / num2
    }
};

function actionApplyer(start, array) {
    let output = start;
    if (array[0]) {
        for (const fn of array) {
            output = fn(output);
        }
    }
    return output
}
