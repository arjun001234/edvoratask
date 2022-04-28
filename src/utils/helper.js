function difference(date1, date2) {
  const date1utc = Date.UTC(
    date1.getFullYear(),
    date1.getMonth(),
    date1.getDate()
  );
  const date2utc = Date.UTC(
    date2.getFullYear(),
    date2.getMonth(),
    date2.getDate()
  );
  const day = 1000 * 60 * 60 * 24;
  return (date2utc - date1utc) / day;
}

export function getUpcomingRides(data) {
  return data.filter((ride) => {
    const date1 = new Date(ride.date);
    const date2 = new Date();
    return difference(date1, date2) < 0;
  });
}

export function getPastRides(data) {
  return data.filter((ride) => {
    const date1 = new Date(ride.date);
    const date2 = new Date();
    return difference(date1, date2) > 0;
  });
}

export function getCities(data) {
  return data.reduce((prev, curr) => {
    prev.push(curr.city);
    return prev;
  }, []);
}

export function getStates(data) {
  return data.reduce((prev, curr) => {
    prev.push(curr.state);
    return prev;
  }, []);
}

export function addDistanceToData(data,user) {
    data.forEach((ride) => {
      let distance = Number.MAX_SAFE_INTEGER;
      ride.station_path.forEach((path) => {
        const diff = Math.abs(user.station_code - path);
        if (diff < distance) {
          distance = diff;
        }
        ride["distance"] = distance;
      });
    });
    return data
};

export function getNearestRides(data) {
    return data.sort((a,b) => a.distance - b.distance)
}


export function filterRides(rides,state,city) {
    return rides.filter((ride) => {
        if (state && city) {
           return ride.state === state && ride.city === city
        }else if (state){
          return ride.state === state
        }else if (city){
          return ride.city === city
        }else {
          return true
        }
    })
}