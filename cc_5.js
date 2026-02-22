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

function calculateTaxes(grossPay) {
    return grossPay * 0.15
}

function processPayroll(employee) {
    let basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked)
    let overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked)
    let grossPay = basePay + overtimePay
    let taxes = calculateTaxes(grossPay)
    let netPay = grossPay - taxes

    return {
        name: employee.name,
        basePay: basePay.toFixed(2),
        overtimePay: overtimePay.toFixed(2),
        grossPay: grossPay.toFixed(2),
        netPay: netPay.toFixed(2)
    }
}

for (const employee of employees) {
    let payroll = processPayroll(employee)
    console.log (
        `Employee: ${payroll.name}
        Base Pay: $${payroll.basePay}
        Overtime Pay: $${payroll.overtimePay}
        Gross Pay: $${payroll.grossPay}
        Net Pay: $${payroll.netPay}
        `)
}