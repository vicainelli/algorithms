const fareEstimator = (ride_time, ride_distance, cost_per_minute, cost_per_mile) => {

  var fares = [];
  var fare;

  for(var i = 0; i < cost_per_mile.length; i++) {
    fare = (ride_time * cost_per_minute[i]) + (ride_distance * cost_per_mile[i]);
    fare = Math.round(fare * 100) / 100;
    fares.push(fare);
  }
  return fares;
}

module.exports = fareEstimator;