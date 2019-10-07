logDriverNames = (drivers) => {
  drivers.forEach((driver) => {console.log(driver.name)})
}

function logDriversByHometown(drivers,location){
  drivers.forEach((driver)=>{ 
    if (driver.hometown === location)
      console.log(driver.name)
  })
}

function driversByRevenue(drivers) {
  drivers.sort((a,b)=>{a.revenue-b.revenue})
}