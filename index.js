const helpText = "salarycalc is a simple tool to convert between hourly, weekly and yearly salary. \nPass the amount and the units as arguments like so 'salaryCalc (num) (unit)'\nwhere (num) is the dollar amount and (unit) indicates whether (num) is the hourly, 'h', weekly, 'w', or yearly, 'y', salary.\nExample: 'salarycalc 30 h' returns '$62,400.00 per anum, $1,200.00 per week' \nYearly is assumed to be in thousands so '85 y' is the same as '85000 y'\nYou can add an optional third argument for hours worked per week if not the standard 40.\nExample: 'salarycalc 500 w 30' returns '$16.67 per hour, $26,000.00 per anum'"

function calc(args) {

    let weeklyHours = 40

    if (isNaN(args[0])) {
        console.log(helpText)
        return
    }

    if (args[2]) {
        weeklyHours = parseInt(args[2])
    }

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    })

    let num = parseFloat(args[0]).toFixed(2)
    if (num < 0) {
        console.log("Please enter a positive number.\n", helpText)
        return
    }

    hourlyToAnnual = (n) => {
        let week = n * weeklyHours
        let annual = week * 52
        return `${formatter.format(annual)} per anum, ${formatter.format(week)} per week`
    }
    annualToHourly = (n) => {
        let week = n / 52
        let hour = week / weeklyHours
        return `${formatter.format(hour)} per hour, ${formatter.format(week)} per week`
    }

    weeklyToAnnual = (n) => {
        let hour = n / weeklyHours
        let annual = n * 52
        return `${formatter.format(hour)} per hour, ${formatter.format(annual)} per anum`
    }

    let unit = args[1].toLowerCase()

    if (unit == 'y') {
        if (num / 1000 < 1) {
            num = num * 1000
        }
        console.log(annualToHourly(num))
    } else if (unit == 'h') {
        console.log(hourlyToAnnual(num))
    } else if (unit == 'w') {
        console.log(weeklyToAnnual(num))
    } else {
        console.log("Invalid entry\n", helpText)
    }
    return null
}


module.exports = calc