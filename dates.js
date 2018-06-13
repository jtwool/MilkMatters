YEAR = 2018
var date_options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

// Dates go year, month, day
// Months start counting at 0
// So January = 0, February = 1 ... December = 11

evening_dates = [
// January
new Date(YEAR, 0, 17),
// February
new Date(YEAR, 1, 21),
// March
new Date(YEAR, 2, 21),
// April
new Date(YEAR, 3, 18),
// May
new Date(YEAR, 4, 16),
// June
new Date(YEAR, 5, 20),
// July
new Date(YEAR, 6, 18),
// August
new Date(YEAR, 7, 15),
// September
new Date(YEAR, 8, 19),
// October
new Date(YEAR, 9, 17),
// November
new Date(YEAR, 10, 21),
// December
new Date(YEAR, 11, 19),
]

morning_dates = [
// January
new Date(YEAR, 0, 10),
new Date(YEAR, 0, 24),
// February
new Date(YEAR, 1, 14),
new Date(YEAR, 1, 28),
// March
new Date(YEAR, 2, 14),
new Date(YEAR, 2, 28),
// April
new Date(YEAR, 3, 11),
new Date(YEAR, 3, 25),
// May
new Date(YEAR, 4, 13),
new Date(YEAR, 4, 23),
// June
new Date(YEAR, 5, 9),
new Date(YEAR, 5, 27),
// July
new Date(YEAR, 6, 11),
new Date(YEAR, 6, 25),
// August
new Date(YEAR, 7, 8),
new Date(YEAR, 7, 22),
// September
new Date(YEAR, 8, 12),
new Date(YEAR, 8, 26),
// October
new Date(YEAR, 9, 10),
new Date(YEAR, 9, 24),
// November
new Date(YEAR, 10, 14),
new Date(YEAR, 10, 28),
// December
new Date(YEAR, 11, 12),
new Date(YEAR, 11, 26),
]

today = new Date()

next_four_mornings = morning_dates.filter(x=>x>today).slice(0,4)
next_four_evenings = evening_dates.filter(x=>x>today).slice(0,4)

if (next_four_evenings[0] < next_four_mornings[0]){
  next_date = next_four_evenings[0]
  next_loc= '<a href="https://goo.gl/maps/xEkWaSfFatR2" target="_blank">  Banneker Community Center</a> from 9:30am-11:30am'
} else{
  next_date = next_four_mornings[0]
  next_loc = '<a href="https://goo.gl/maps/tQGhVUdfHuo" target="_blank">  City Hall in McCloskey Room 135</a> from 6:30pm-8:00pm'
}

nds = next_date.toLocaleDateString("en-US",date_options)
document.getElementById("next_date").innerHTML = nds
document.getElementById("next_loc").innerHTML = next_loc
