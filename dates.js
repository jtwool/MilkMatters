YEAR = 2020
var date_options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

// Dates go year, month, day
// Months start counting at 0
// So January = 0, February = 1 ... December = 11

saturday_dates = [
// February
new Date(YEAR, 1, 1),
// March
new Date(YEAR, 2, 7),
// April
new Date(YEAR, 3, 4),
// May
new Date(YEAR, 4, 2),
// June
new Date(YEAR, 5, 6),
// July
// August
new Date(YEAR, 7, 1),
// September
new Date(YEAR, 8, 5),
// October
new Date(YEAR, 9, 3),
// November
new Date(YEAR, 10, 7),
// December
new Date(YEAR, 11, 5),
]

evening_dates = [
// January
new Date(YEAR, 0, 15),
// February
new Date(YEAR, 1, 19),
// March
new Date(YEAR, 2, 18),
// April
new Date(YEAR, 3, 15),
// May
new Date(YEAR, 4, 20),
// June
new Date(YEAR, 5, 17),
// July
new Date(YEAR, 6, 15),
// August
new Date(YEAR, 7, 19),
// September
new Date(YEAR, 8, 16),
// October
new Date(YEAR, 9, 21),
// November
new Date(YEAR, 10, 18),
// December
new Date(YEAR, 11, 16),
]

morning_dates = [
// January
new Date(YEAR, 0, 8),
new Date(YEAR, 0, 22),
// February
new Date(YEAR, 1, 12),
new Date(YEAR, 1, 26),
// March
new Date(YEAR, 2, 11),
new Date(YEAR, 2, 25),
// April
new Date(YEAR, 3, 8),
new Date(YEAR, 3, 22),
// May
new Date(YEAR, 4, 13),
new Date(YEAR, 4, 27),
// June
new Date(YEAR, 5, 10),
new Date(YEAR, 5, 24),
// July
new Date(YEAR, 6, 8),
new Date(YEAR, 6, 22),
// August
new Date(YEAR, 7, 12),
new Date(YEAR, 7, 26),
// September
new Date(YEAR, 8, 9),
new Date(YEAR, 8, 23),
// October
new Date(YEAR, 9, 14),
new Date(YEAR, 9, 28),
// November
new Date(YEAR, 10, 11),
new Date(YEAR, 10, 25),
// December
new Date(YEAR, 11, 9),
new Date(YEAR, 11, 23)
]

var get_yesterday = function(){
  today = new Date();
  today.setDate(today.getDate()-1)
  return today
}


var get_next_days = function(x){
  return x.filter(y=>y>get_yesterday()).slice(0,4);
}

next_four_saturday = get_next_days(saturday_dates)
next_four_mornings = get_next_days(morning_dates)
next_four_evenings = get_next_days(evening_dates)

first_next_days = [next_four_saturday[0],
                   next_four_mornings[0],
                   next_four_evenings[0]]

var next_gathering = Math.min.apply(Math,
                                         first_next_days)

if (next_four_evenings[0].valueOf() ==  next_gathering){
  next_date = next_four_evenings[0]
  next_loc = '<a href="https://goo.gl/maps/tQGhVUdfHuo" target="_blank">  City Hall in McCloskey Room 135</a> from 6:30-8pm'
} else if (next_four_mornings[0].valueOf() == Math.min(next_gathering)){
  next_date = next_four_mornings[0]
  next_loc= '<a href="https://goo.gl/maps/xEkWaSfFatR2" target="_blank">  Banneker Community Center</a> from 9:30-11:30am'
}
  else{
    next_date = next_four_saturday[0]
    next_loc= '<a href="https://goo.gl/maps/LM4CWyKSKn92" target="_blank">  Crestmont Boys &amp; Girls Club</a> from 2:00-4:00pm'
  }

nds = next_date.toLocaleDateString("en-US",date_options)

document.getElementById("next_date").innerHTML = nds
document.getElementById("next_loc").innerHTML = next_loc

n4m = next_four_mornings.map(x=>"<li>"+ x.toLocaleDateString("en-US",date_options) + "</li>").join(" ")
n4e = next_four_evenings.map(x=>"<li>"+ x.toLocaleDateString("en-US",date_options) + "</li>").join(" ")
n4s = next_four_saturday.map(x=>"<li>"+ x.toLocaleDateString("en-US",date_options) + "</li>").join(" ")

document.getElementById("next-four-morning").innerHTML = n4m
document.getElementById("next-four-evening").innerHTML = n4e
document.getElementById("next-four-saturday").innerHTML = n4s
