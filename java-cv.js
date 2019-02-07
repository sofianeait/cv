window.addEventListener("scroll", function(){
	let deplacement=(window.scrollY /(document.body.offsetHeight-window.innerHeight))*100;
document.getElementById('progress_bar').value=deplacement;
console.log(deplacement);
});

function myScroll() {
	var progress_bar = document.getElementById('progress_bar').value;
	var value = (progress_bar * (document.body.offsetHeight - window.innerHeight))/100;
	window.scroll(0,value) ;
}
