// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function (str = 'go to the office') {
    return `This Monday, I will ${str}.`;
}

function wrapAdjective(flair = `*`) {
    return function (str = `special`) {
        return `You are ` + flair + str + flair + `!`;
    }
}