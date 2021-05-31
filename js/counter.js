var a = 0;
var b = 0;
var c = 0;
var d = 0;



function doCountDown()
{
  setInterval(participants, 10);
  setInterval(teams, 100);
  setInterval(hours, 10);
  setInterval(cols, 100);

  }
function participants()
{
  if (a < 240)
  {
    a += 10
  }
  console.log(a);
  var aa="<h1>"+a+"</h1>";
  document.getElementById('part').innerHTML = aa;
}
// setInterval(participants, 10);
function teams()
{
  if (b < 60)
  {
    b += 4
  }
  var aa="<h1>"+b+"</h1>";
  document.getElementById('team').innerHTML = aa;
}
// setInterval(teams, 100);
function hours()
{
  if (c < 146)
  {
    c += 4
  }
  var aa="<h1>"+c+"</h1>";
  document.getElementById('hour').innerHTML = aa;
}
// setInterval(hours, 1);
function cols()
{
  if (d < 30)
  {
    d += 1
  }
  var aa="<h1>"+d+"</h1>";
  document.getElementById('col').innerHTML = aa;
}
// setInterval(cols, 100);




const elem=document.getElementById("countPeople");
console.log("here tadaaa");

var observer = new IntersectionObserver(function(entries) {
  // isIntersecting is true when element and viewport are overlapping
	// isIntersecting is false when element and viewport don't overlap
	if(entries[0].isIntersecting === true){
  console.log('Element has just become visible in screen');
  doCountDown();
}
  else{
    console.log('Element has just become visible not in screen');
  }
}, { threshold: [0] });

observer.observe(elem);
