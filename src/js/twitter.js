//main textarea
var	clicktext = document.getElementById('sending'),
	func = document.getElementById('funcdiv');
	clicktext.onfocus = function(){
		func.style.display="block";
	};
	clicktext.onblur = function(){
		func.style.display="none";
	};

//top-right tweet button
var topt = document.getElementById('top-button'),
	write = document.getElementById('write-tweet'),
	body = document.getElementsByTagName('body')[0],
	writing = document.getElementById('writing'),
	close = document.getElementById('close');
	topt.onclick = function(){
		write.style.display="block";
		body.style.overflow="hidden";
	};	
	close.onclick=function(){
		write.style.display="none";
		body.style.overflow="visible";
	};

//count numbers
var typing = document.getElementById('sending'),
	countnum = document.getElementById('countnum');
	typing.onkeydown= function(){
	countnum.innerHTML = 140 - typing.value.length;
	};
	typing.onkeyup = function(){
	countnum.innerHTML = 140 - typing.value.length;
	};

//button's color change when start typing
// var maintwi= document.getElementById('maintwi');
// 	if (send.length >= 0 ){
// 		maintwi.style.opacity="1";
// 	}
// 	else {
// 		maintwi.style.opacity="0.5";
// 	};


//follow button
var follow0 = document.getElementById('follow0');
	follow0.onclick=function(){
		follow0.innerHTML = "正在关注";
		follow0.style.background="#58ACE9 none repeat scroll 0% 0%";
		follow0.style.color="white";
	};

var follow1 = document.getElementById('follow1');
	follow1.onclick = function(){
		follow1.innerHTML = "正在关注";
		follow1.style.background="#58ACE9 none repeat scroll 0% 0%";
		follow1.style.color="white";
	};

var follow2 = document.getElementById('follow2');
	follow2.onclick = function(){
		follow2.innerHTML = "正在关注";
		follow2.style.background="#58ACE9 none repeat scroll 0% 0%";
		follow2.style.color="white";
	};

