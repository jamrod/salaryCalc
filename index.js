function calc(args) {

    let num = parseFloat(args[0])

    hourlyToAnnual = (n) => {
        let week = n * 40
        let annual = week * 52
        return `${annual} per anum, ${week} per week`
    }
    annualToHourly = (n) => {
        let week = n / 52
        let hour = week / 40
        return `${hour} per hour, ${week} per week`
    }

    if (args[1] == 'y') {
        num = num * 1000
        console.log(annualToHourly(num))
    } else if (args[1] == 'h') {
        console.log(hourlyToAnnual(num))
    } else {
        console.log("Invalid entry \nEnter in this format '(num) (unit)'\nwhere (num) is the dollar amount and (unit) is 'h' to indicate num is per hour amount or 'y' indicates num is per anum amount")
    }
}
module.exports = calc