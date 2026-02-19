let employees = [
    {name: "John", hourlyRate: 30, hoursWorked: 37},
    {name: "Stacy", hourlyRate: 25, hoursWorked: 44},
    {name: "Katherine", hourlyRate: 35, hoursWorked: 51}
]

function calculateBasePay(rate, hours) {
    let regularHours = Math.min(hours, 40)
    return regularHours * rate
}

function calculateOvertimePay(rate, hours) {
    if (hours > 40) {
        let overtimeHours = hours - 40
        return overtimeHours * rate * 1.5
    }
    else {
        return 0
    }
}

