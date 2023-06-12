let scrollable = document.getElementById('scrollablebackground');
let scrollablebridge = document.getElementById('scrollablebridge');
let sun = document.getElementById('sun');
let day = document.getElementById('day');
let noon = document.getElementById('noon');
let sunset = document.getElementById('sunset');
let night = document.getElementById('night');
let cloudcontainer = document.getElementById('clouds');

//let test = document.getElementById('statistic');

var starcount = 300;
var cloudcount = 75;

// random generator
function genRanNum(_n1, _n2){
  var ranNum = Math.round((Math.random() * _n2) + _n1);
  // test.textContent = "random = " + ranNum; //test
  return ranNum;
}

//stars generator
function stars(){
  for (loop = 0; loop<starcount; loop++){
    var star = document.createElement("div");
    night.appendChild(star);
    star.classList.add("star");
  
    var size = genRanNum(1, 2)==2;
  
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.top = genRanNum(0, 100) + '%';
    star.style.left = genRanNum(0, 100) + '%';
  
    if(genRanNum(1, 2)==2){
      star.classList.add("twinkle");
      star.style.animationDuration = genRanNum(1, 5) + 's';
    }
}}

// clouds generator
function clouds(){
  for (loop = 0; loop<cloudcount; loop++){
    var c1 = document.createElement("div");
    var c2 = document.createElement("div");
    var c3 = document.createElement("div");
    var c4 = document.createElement("div");
    c1.classList.add("c1");
    c2.classList.add("c2");
    c3.classList.add("c3");
    c4.classList.add("c4");
    var cloud = document.createElement("div");
    cloud.appendChild(c1);
    cloud.appendChild(c2);
    cloud.appendChild(c3);
    cloud.appendChild(c4);
    cloudcontainer.appendChild(cloud);

    var cloudsize = genRanNum(300, 700);
    cloud.style.width = cloudsize + 'px';
    cloud.style.height = 220 - (cloudsize/25) + 'px';
    cloud.style.opacity = (genRanNum(2, 6)/10);
    cloud.style.top = genRanNum(-10, 50) + '%';
    cloud.style.left = genRanNum(-10, 90) + '%';

    if(genRanNum(1,2)==1){
        cloud.classList.add("cloudlinear");
        cloud.style.animationDuration = genRanNum(30, 70) + 's';
    } 
    else {
        cloud.classList.add("cloudinfinite");
        cloud.style.animationDuration = genRanNum(60, 110) + 's';
    }

}
}

window.addEventListener('load',stars());
window.addEventListener('load',clouds());

//parallax scroll
window.addEventListener('scroll', function(){

  let position = window.scrollY;
  scrollable.scrollLeft = position/4;
  scrollablebridge.scrollLeft = position/2;

  //test.textContent = "position = " + position; //test

  sun.style.top = (10 + (Math.pow(((position/1000)),2))) + 'vh';
  sun.style.left = (10 + (position/200)) + 'vw';

  noon.style.opacity = (0.0005*position - 1.5);
  sunset.style.opacity = (0.0005*position - 2.5);
  night.style.opacity = 0;

  if(position>7500){
    day.style.opacity = (-0.0004*position + 4);
    noon.style.opacity = (-0.0004*position + 4);
    sunset.style.opacity = (-0.0004*position + 4);
    night.style.opacity = (0.0004*position - 3);
  }
});

