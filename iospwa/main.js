scrollTop = window.pageYOffset || document.documentElement.scrollTop;
scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
window.onscroll = function() {
	window.scrollTo(scrollLeft, scrollTop);
};

brickd.style.visibility = 'hidden';

function chc() {
  var meta = document.createElement('meta');
  meta.httpEquiv = "theme-color";
  meta.content = "#ff0000";
  document.getElementsByTagName('head')[0].appendChild(meta);
}