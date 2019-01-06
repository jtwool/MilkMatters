YEAR = 2019
var date_options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

// Dates go year, month, day
// Months start counting at 0
// So January = 0, February = 1 ... December = 11

saturday_dates = [
// January
new Date(YEAR, 0, 16),
// February
new Date(YEAR, 1, 2),
// March
new Date(YEAR, 2, 2),
// April
new Date(YEAR, 3, 6),
// May
new Date(YEAR, 4, 4),
// June
new Date(YEAR, 5, 1),
// July
new Date(YEAR, 6, 6),
// August
new Date(YEAR, 7, 3),
// September
new Date(YEAR, 8, 7),
// October
new Date(YEAR, 9, 5),
// November
new Date(YEAR, 10, 2),
// December
new Date(YEAR, 11, 7),
]

evening_dates = [
// Dec 18
new Date(2018, 11, 19),
// January
new Date(YEAR, 0, 16),
// February
new Date(YEAR, 1, 20),
// March
new Date(YEAR, 2, 20),
// April
new Date(YEAR, 3, 17),
// May
new Date(YEAR, 4, 15),
// June
new Date(YEAR, 5, 19),
// July
new Date(YEAR, 6, 17),
// August
new Date(YEAR, 7, 21),
// September
new Date(YEAR, 8, 18),
// October
new Date(YEAR, 9, 16),
// November
new Date(YEAR, 10, 20),
// December
new Date(YEAR, 11, 18),
]

morning_dates = [
// Dec 18
new Date(2018, 11, 12),
new Date(2018, 11, 26),
// January
new Date(YEAR, 0, 9),
new Date(YEAR, 0, 23),
// February
new Date(YEAR, 1, 13),
new Date(YEAR, 1, 27),
// March
new Date(YEAR, 2, 13),
new Date(YEAR, 2, 27),
// April
new Date(YEAR, 3, 10),
new Date(YEAR, 3, 24),
// May
new Date(YEAR, 4, 8),
new Date(YEAR, 4, 22),
// June
new Date(YEAR, 5, 12),
new Date(YEAR, 5, 26),
// July
new Date(YEAR, 6, 10),
new Date(YEAR, 6, 24),
// August
new Date(YEAR, 7, 14),
new Date(YEAR, 7, 28),
// September
new Date(YEAR, 8, 11),
new Date(YEAR, 8, 25),
// October
new Date(YEAR, 9, 9),
new Date(YEAR, 9, 23),
// November
new Date(YEAR, 10, 13),
new Date(YEAR, 10, 27),
// December
new Date(YEAR, 11, 11),
// new Date(YEAR, 11, 26),
]

var get_next_days = function(x,n=4){
  x.filter(y=>y>new Date()).slice(0,n);
  return x
}

next_four_saturday = get_next_days(saturday_dates)
next_four_mornings = get_next_days(morning_dates)
next_four_evenings = get_next_days(evening_dates)

first_next_days = [next_four_saturday[0],
                   next_four_mornings[0],
                   next_four_evenings[0]]

if (next_four_evenings[0] ==  min(first_next_days)){
  next_date = next_four_evenings[0]
  next_loc = '<a href="https://goo.gl/maps/tQGhVUdfHuo" target="_blank">  City Hall in McCloskey Room 135</a> from 6:30pm-8pm'
} else if (next_four_mornings[0] == min(first_next_days)){
  next_date = next_four_mornings[0]
  next_loc= '<a href="https://goo.gl/maps/xEkWaSfFatR2" target="_blank">  Banneker Community Center</a> from 9:30am-11:30am'
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
