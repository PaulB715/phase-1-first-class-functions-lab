const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }
function returnLastTwoDrivers(drivers) {
    return drivers.slice(2, 4)
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  function fareDoubler(fare) {
       return fare * 2
  }
  function fareTripler(fare) {
    return fare * 3
  }
  function selectDifferentDrivers(arrayOfDrivers, driverSelectorFunction) {
    return driverSelectorFunction(arrayOfDrivers);
  }
  
  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }
  