$("#currentDay").text(moment().format('dddd | LL'));
var now = moment().format('H')
console.log(now)




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




// THIS ONLY WORKS FOR THE FIRST BLOCK, USING QSALL BREAKS IT COMPLETELY
var text = document.querySelector('textarea')

$('.saveBtn').on('click', function() {
    
    localStorage.setItem("text", text.value)
    
})

var savedText = localStorage.getItem("text")
console.log(localStorage.getItem("text"))
text.innerHTML = savedText



