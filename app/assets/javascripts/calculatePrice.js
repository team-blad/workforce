function checkMonth() {
  var d = new Date();

  var month = d.getMonth();
  var hour = d.getHours();

  for (var i = 1; i <= month; i++) {
    document.getElementById("request_date_time_2i").children[(i-1)].style.display="none";
  }

  if (document.getElementById("request_date_time_2i").value == (d.getMonth()+1)) {
    for (var j= 1; j <= d.getDate(); j++) {
      document.getElementById("request_date_time_3i").children[(j-1)].style.display="none";
    }
  } else {
    for( var j = 1; j <= d.getDate(); j++) {
      document.getElementById("request_date_time_3i").children[(j-1)].style.display="block";
    }
  }
}  

// converts value in the bedroom dropdown to integer and returns value on function call
function getBedroomNumber() {
  var bedroomNumber = 0;
  var bedroomNumber = parseInt(document.getElementById("request_bedrooms").value);
  return bedroomNumber;
}

// converts value in the bathroom dropdown to integer and returns value on function call
function getBathroomNumber() {
  var bathroomNumber = 0;
  var bathroomNumber = parseInt(document.getElementById("request_bathrooms").value);
  return bathroomNumber;
}

// converts value in the kitchen dropdown to integer and returns value on function call
function getKitchenNumber() {
  var kitchenNumber = 0;
  var kitchenNumber = parseInt(document.getElementById("request_kitchens").value);
  return kitchenNumber;
}

// converts value in the Hall dropdown to integer and returns value on function call
function getHallNumber() {
  var hallNumber = 0;
  var hallNumber = parseInt(document.getElementById("request_hall").value);
  return hallNumber;
}

function getRoomNumber() {
  var rooms = (getBedroomNumber() + getBathroomNumber() + getKitchenNumber() + getHallNumber());
  if (rooms > 4){
    var extraRooms = parseInt(rooms-4);
    // console.log(extraRooms);
  } else {
    var extraRooms = 0;
  }
    return extraRooms;
}


function getLargeRoomNumber() {
 var rooms = (getBedroomNumber() + getBathroomNumber() + getKitchenNumber() + getHallNumber());
 if (rooms > 8) {
   var extraLargeRooms = parseInt(rooms - 8);
   // console.log(extraLargeRooms);
 } else {
  var extraLargeRooms = 0;
  document.getElementById("roomNumber").innerHTML = rooms;
 }
 return extraLargeRooms;
}


function getExtraServices(){
  var extraServices = [0,0,0,0];

  if (document.getElementById('request_extra_services_150').checked) {
    extraServices[0] = 15;
  } else {
    extraServices[0] = 0;
  }

  if (document.getElementById('request_extra_services_1001').checked) {
    extraServices[1] = 10;
  } else {
    extraServices[1] = 0;
  }

  if (document.getElementById('request_extra_services_100').checked) {
    extraServices[2] = 10;
  } else {
    extraServices[2] = 0;
  }

  if (document.getElementById('request_extra_services_400').checked) {
    extraServices[3] = 40;
  } else {
    extraServices[3] = 0;
  }

  var extraServiceTotal = parseInt(extraServices[0] + extraServices[1] + extraServices[2] + extraServices[3]);
  return extraServiceTotal;
}

function getFrequency(){
  // document.getElementById('request_frequency_60').checked = true;
  var dayFrequency = 0;
  var weekFrequency = 0;
  var monthFrequency = 0;

  if (document.getElementById("request_frequency_1500").checked) {
    document.getElementById("roomNumber").innerHTML = 4;
    dayFrequency = parseInt(document.getElementById("request_frequency_1500").value);
  } else {
    dayFrequency = 0;
  }
                               
  if (document.getElementById("request_frequency_15001").checked) {
    document.getElementById("roomNumber").innerHTML = 4;
    weekFrequency = parseInt(document.getElementById("request_frequency_15001").value);
  } else {
    weekFrequency = 0;  
  }

  if (document.getElementById("request_frequency_5000").checked) {
     document.getElementById("roomNumber").innerHTML = 8;
     monthFrequency = parseInt(document.getElementById("request_frequency_5000").value);
  } else {
     monthFrequency = 0;
  }

  var totalFrequency = (dayFrequency + weekFrequency + monthFrequency);
    return totalFrequency;
}



function checkSchedule() {
  var schedule = document.querySelectorAll("#days > div > .request_weekdays > label")[0];

  var a = document.getElementById('request_frequency_1500');
  if(a.checked == true) {
    schedule.innerHTML = "Schedule " + "&nbsp;<i>(Choose a day)</i>";
  }
  
  var b = document.getElementById('request_frequency_15001');
  if(b.checked == true) {
    schedule.innerHTML = "Schedule " + "&nbsp;<i>(Choose 3 days)</i>";
  }

  var c = document.getElementById('request_frequency_5000');
  if(c.checked == true) {
    schedule.innerHTML = "Schedule " + "&nbsp;<i>(Choose 3 days)</i>";
  }
}

function checkDays() {
  var checkedDays;
  var limit;
  // getFrequency();
  if (getFrequency() == 150){
    checkedDays = 1;
    limit = checkedDays;
  } else if(getFrequency() == 150.01 || getFrequency() == 500.00 ){
    checkedDays = 3;
    limit = checkedDays;
  }

  var listOfDays = document.getElementsByName("request[weekdays][]");

  if(document.getElementById('request_weekdays_monday').checked == true) {
    checkedDays -= 1;
  } else {
    checkedDays +=0;
  }

  if (document.getElementById('request_weekdays_tuesday').checked == true) {
    checkedDays -= 1;
  } else {
    checkedDays += 0;
  }

  if (document.getElementById('request_weekdays_wednesday').checked == true) {
    checkedDays -= 1;
  } else {
    checkedDays += 0;
  }

  if (document.getElementById('request_weekdays_thursday').checked == true) {
    checkedDays -= 1;
  } else {
    checkedDays += 0;
  }
  
  if (document.getElementById('request_weekdays_friday').checked == true) {
    checkedDays -= 1;
  } else {
    checkedDays += 0;
  }
  
  if (document.getElementById('request_weekdays_saturday').checked == true) {
    checkedDays -= 1;
  } else {
    checkedDays += 0;
  }
    
  if (document.getElementById('request_weekdays_sunday').checked == true) {
    checkedDays -= 1;
  } else {
    checkedDays += 0;
  }
  
  if (checkedDays < 0) {
    alert("You can only choose "+limit+" day(s)");
    for (var i = 0; i < listOfDays.length; i++) {
      listOfDays[i].checked = false;
    };
  }
  // console.log(checkedDays);
}


function calculateTotal(){
  var total = getRoomNumber()*5 + getExtraServices(); 
  total = total + (150 || getFrequency());
  document.getElementById("PricingValue").innerHTML = "GHc "+total+".00";
  document.getElementById("navPricingValue").innerHTML = "GHc "+total+".00";
}

// calculates pricing based on number of rooms.

function calculatePricing() {
  document.getElementById("PricingValue").innerHTML = "GHc "+total+".00";
  checkMonth();
  checkDays();
  getLargeRoomNumber();
  getRoomNumber();
  getExtraServices();
  getFrequency();
  calculateTotal();
  checkSchedule();  
    document.getElementById('packagePrice').innerHTML = "GHc "+(150 || getFrequency())+".00";
    document.getElementById('extraServicePrice').innerHTML = "GHc "+getExtraServices()+".00";
    document.getElementById('navExtraServicePrice').innerHTML = "GHc "+getExtraServices()+".00";


  if (getFrequency() == 500) {
    document.getElementById("extraRooms").innerHTML =( 0 || getLargeRoomNumber() );
    document.getElementById("packagePrice").innerHTML = "GHc "+( 500|| getFrequency())+".00";
  } else {
    document.getElementById("extraRooms").innerHTML =( 0 || getRoomNumber() );
  }
   
  if (getFrequency() == 500) {
    document.getElementById("extraRoomPrice").innerHTML = "GHc "+getLargeRoomNumber()*5+".00";
    document.getElementById("navExtraRoomPrice").innerHTML = "GHc "+getLargeRoomNumber()*5+".00";
  } else{
    document.getElementById("extraRoomPrice").innerHTML = "GHc "+getRoomNumber()*5+".00";
    document.getElementById("navExtraRoomPrice").innerHTML = "GHc "+getRoomNumber()*5+".00";
  }

  if (getFrequency() == 150){
    document.getElementById("roomNumber").innerHTML = 4;
    var total = 150 + getRoomNumber()*5 + getExtraServices(); 
    // console.log(total);
    document.getElementById("PricingValue").innerHTML = "GHc "+total+".00";
    document.getElementById("navPricingValue").innerHTML = "GHc "+total+".00";
  }
  else if (getFrequency() == 150.01) {
    document.getElementById("packagePrice").innerHTML = "GHc "+( 150.01|| getFrequency())+".00";
    document.getElementById("roomNumber").innerHTML = 4;
    var total = 150.00001 + getRoomNumber()*5 + getExtraServices();
    // console.log(total);
    document.getElementById("PricingValue").innerHTML = "GHc "+total+".00";
    document.getElementById("navPricingValue").innerHTML = "GHc "+total+".00";
  }
  else if (getFrequency() == 500) {
    var rooms = (getBedroomNumber() + getBathroomNumber() + getKitchenNumber() + getHallNumber());

    var total = 500 + getLargeRoomNumber()*5 + getExtraServices();
    // console.log(total);
    document.getElementById("PricingValue").innerHTML = "GHc "+total+".00";
    document.getElementById("navPricingValue").innerHTML = "GHc "+total+".00";
  }

}

$(document).ready(function() {
  // checks for current month and adds display:none to previous months
  checkMonth();
});
