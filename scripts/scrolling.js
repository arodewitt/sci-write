window.onscroll = function () {

  var y = document.getElementById('featured').offsetTop;
  var scrollPos = window.pageYOffset;
  var q = document.getElementById('hide');

  if (scrollPos >= y) {
    q.classList.remove('disappear');
    q.classList.add('appear');}

  else {
    q.classList.add('disappear');
    q.classList.remove('appear');}
}

window.onload = function changeTop() {

	var length = document.getElementById('news').clientHeight;
	var astro = document.getElementsByClassName('threeColumn');

	astro[0].style.top = length+150+"px";
}
