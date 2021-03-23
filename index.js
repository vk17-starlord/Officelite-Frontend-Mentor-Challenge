AOS.init();
var countDownDate = new Date("Apr 6, 2021 15:37:25").getTime();

var x = setInterval(function() {

var now = new Date().getTime();

var distance = countDownDate - now;

var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById('days').innerHTML = days;
document.getElementById('mins').innerHTML = minutes;
document.getElementById('hours').innerHTML = hours;
document.getElementById('secs').innerHTML = seconds ;

}, 1000);


let arr=[
{name:'Basic Pack' ,price:'Free'},
{name:'Pro Pack' ,price:'$9.99'},
{name:'Ultimate Pack' ,price:'$19.99'},

];

let txt='';
arr.forEach((ele,index) => {
txt+=`<h5 id="selected" onclick="setCurrent('${index}')" >${ele.name} <span>${ele.price}</span></h5>`
document.getElementById('dropme').innerHTML=txt;
})


function setCurrent(index){
document.getElementById('selected').innerHTML=`${arr[index].name} <span>${arr[index].price}</span>`;
}
setCurrent(0)

let isopen=false;
function toggleDropdown(){
    var x = document.getElementById("dropme");
let toggle= document.getElementById('toggle');


if (x.style.display === "none") {
      x.style.display = "block";
      toggle.classList.toggle('fa-caret-up');
    } else {
      x.style.display = "none";
      x.style.minHeight='25vh';
      x.fade;
    }
}
