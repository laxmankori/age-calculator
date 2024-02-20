let inputDate = document.getElementById("date");
inputDate.max = new Date().toISOString().split("T")[0];

let year = document.getElementById("year");
let month = document.getElementById("month");
let day = document.getElementById("day");



function getDate() {

    let birtday = new Date(inputDate.value);
    if (inputDate.value === "") {
        alert("Please enter your date of birth");
    }else{
    let d1 = birtday.getDate();
    let m1 = birtday.getMonth() + 1;
    let y1 = birtday.getFullYear();

    let today = new Date();
    
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();
    
    let d3, m3 , y3;

    y3 = y2 - y1;
    
    if (m2 >= m1) {
        m3 = m2 - m1;
    }else{
        y3--;
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonths(y1, m1) + d2 - d1;
    }
    if(m3 < 0){
        m3 = 11;
        y3--;
    }
    year.innerText = y3;
    month.innerText = m3;
    day.innerText = d3;
    document.getElementById("result").style.display = "block"
}
}
    function getDaysInMonths(year, month) {
        return new Date(year , month , 0).getDate();
    }

    