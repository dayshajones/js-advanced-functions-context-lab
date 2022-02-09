/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
 let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(employeeArray){
    
    let employee = {
        firstName: employeeArray[0],
        familyName: employeeArray[1],
        title: employeeArray[2],
        payPerHour: employeeArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employee
}

function createEmployeeRecords(allEmployees){
    return allEmployees.map( (employee) => { 
        return createEmployeeRecord.call(this, employee); 
    });
}

function createTimeInEvent(dateStamp){
    let [date, hour] = dateStamp.split(' ')
  
    this.timeInEvents.push({
         type: "TimeIn",
         hour: parseInt(hour, 10),
         date,
     })
     return this
  };
  
  
function createTimeOutEvent(dateStamp){
    let [date, hour] = dateStamp.split(' ')
    
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })
    return this
};

function  hoursWorkedOnDate(date){
    let inEvent =  this.timeInEvents.find(
        d =>  d.date === date)
    let outEvent =  this.timeOutEvents.find(
        d =>  d.date === date)
    return (outEvent.hour - inEvent.hour)/100
};

function wagesEarnedOnDate(dateStamp) {
    return this.payPerHour * hoursWorkedOnDate.call(this, dateStamp);
};

function findEmployeeByFirstName(employeeRecords, firstName) {
    return employeeRecords.find((record) => record.firstName === firstName)
};

function calculatePayroll(employeeRecords){
    return employeeRecords.reduce((total, wages) => total += allWagesFor.call(wages),0);
};
