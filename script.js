$("#currentDay").text(moment().format('dddd | LL'));
var now = moment().format('H')
console.log(now)



// ADDS COLOR TO TEXTAREA BASED ON CURRENT TIME
$('.description').each(function() {
    if (parseInt($(this).data('hour')) < now) {
        $(this).addClass("past")
    } else if (parseInt($(this).data('hour')) > now) {
        $(this).addClass("future")
    } else {
        $(this).addClass("present")
    }
console.log($(this).data('hour'))
})

// WORKS BUT IS VERY LONG AND UGLY

// EIGHT AM TEXTAREA
var textEight = document.querySelector('.eight')
var savedEight = localStorage.getItem("eight")
textEight.innerHTML = savedEight
$('.saveBtn').on('click', function(e) {
    e.preventDefault()
    localStorage.setItem("eight", textEight.value)
    
})
// NINE AM TEXTAREA
var textNine = document.querySelector('.nine')
var savedNine = localStorage.getItem("nine")
textNine.innerHTML = savedNine
$('.saveBtn').on('click', function(e) {
    e.preventDefault()
    localStorage.setItem("nine", textNine.value)
    
})
// TEN AM TEXTAREA
var textTen = document.querySelector('.ten')
var savedTen = localStorage.getItem("ten")
textTen.innerHTML = savedTen
$('.saveBtn').on('click', function(e) {
    e.preventDefault()
    localStorage.setItem("ten", textTen.value)
    
})
// Eleven AM TEXTAREA
var textEleven = document.querySelector('.eleven')
var savedEleven = localStorage.getItem("Eleven")
textEleven.innerHTML = savedEleven
$('.saveBtn').on('click', function(e) {
    e.preventDefault()
    localStorage.setItem("Eleven", textEleven.value)
    
})
// Twelve PM TEXTAREA
var textTwelve = document.querySelector('.twelve')
var savedTwelve = localStorage.getItem("Twelve")
textTwelve.innerHTML = savedTwelve
$('.saveBtn').on('click', function(e) {
    e.preventDefault()
    localStorage.setItem("Twelve", textTwelve.value)
    
})
// ONE PM TEXTAREA
var textThirteen = document.querySelector('.thirteen')
var savedThirteen = localStorage.getItem("Thirteen")
textThirteen.innerHTML = savedThirteen
$('.saveBtn').on('click', function(e) {
    e.preventDefault()
    localStorage.setItem("Thirteen", textThirteen.value)
    
})
// TWO PM TEXTAREA
var textFourteen = document.querySelector('.fourteen')
var savedFourteen = localStorage.getItem("Fourteen")
textFourteen.innerHTML = savedFourteen
$('.saveBtn').on('click', function(e) {
    e.preventDefault()
    localStorage.setItem("Fourteen", textFourteen.value)
    
})
// THREE PM TEXTAREA
var textFifteen = document.querySelector('.fifteen')
var savedFifteen = localStorage.getItem("Fifteen")
textFifteen.innerHTML = savedFifteen
$('.saveBtn').on('click', function(e) {
    e.preventDefault()
    localStorage.setItem("Fifteen", textFifteen.value)
    
})
// FOUR PM TEXTAREA
var textSixteen = document.querySelector('.sixteen')
var savedSixteen = localStorage.getItem("Sixteen")
textSixteen.innerHTML = savedSixteen
$('.saveBtn').on('click', function(e) {
    e.preventDefault()
    localStorage.setItem("Sixteen", textSixteen.value)
    
})
// FIVE PM TEXTAREA
var textSeventeen = document.querySelector('.seventeen')
var savedSeventeen = localStorage.getItem("Seventeen")
textSeventeen.innerHTML = savedSeventeen
$('.saveBtn').on('click', function(e) {
    e.preventDefault()
    localStorage.setItem("Seventeen", textSeventeen.value)
    
})
// SIX PM TEXTAREA
var textEightteen = document.querySelector('.eightteen')
var savedEightteen = localStorage.getItem("Eightteen")
textEightteen.innerHTML = savedEightteen
$('.saveBtn').on('click', function(e) {
    e.preventDefault()
    localStorage.setItem("Eightteen", textEightteen.value)
    
})


