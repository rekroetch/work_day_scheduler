$("#currentDay").text(moment().format('dddd | LL'));
var now = moment().format('LT')
console.log(now)
// var hour = [9, 10, 11, 12, 13,14,15,16,17,18]



$('.row').each(function() {
    if (parseInt($(this).data('hour')) < now) {
        $(".description").addClass("past")
    } else if (parseInt($(this).data('hour')) > now) {
        $(".description").addClass("future")
    } else {
        $(".description").addClass("present")
    }

})
/*
if ($(".hour").html > moment().format('LT')) {
    $(".description").addClass('future')
    
}
if ($(".hour").innerHTML = moment().startOf('hour')) {
    $(".description").addClass('present')
    
}
if ($(".hour").innerHTML < now) {
    $(".description").addClass("past")
    
} */
// $('textarea').localStorage.setItem('textNode', textNode.value)

var text = document.querySelectorAll('textarea')

$('.saveBtn').on('click', function() {
    localStorage.setItem("textNode", text.value)
    
})

var savedText = localStorage.getItem("textNode")
console.log(localStorage.getItem("textNode"))
text.innerHTML = savedText

