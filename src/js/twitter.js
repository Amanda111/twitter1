//main textarea
var	clicktext = document.getElementById('sending'),
	func = document.getElementById('funcdiv');
	
	clicktext.addEventListener("focus",function(){
		func.style.display="block";		
	});
		clicktext.addEventListener("blur",function(){
		func.style.display="none";		
	});



//top-right tweet button
var topt = document.getElementById('top-button'),
	write = document.getElementById('write-tweet'),
	body = document.getElementsByTagName('body')[0],
	writing = document.getElementById('writing'),
	close = document.getElementById('close');
	
	topt.addEventListener("click",function(){
		write.style.display="block";
		body.style.overflow="hidden";	
	});
	close.addEventListener("click",function(){
		write.style.display="none";
		body.style.overflow="visible";
	});

//count numbers 
var typing = document.getElementById('sending'),
	countnum = document.getElementById('countnum'),
	maintwi = document.getElementById('maintwi');
	
	typing.addEventListener("keydown",function(){
		countnum.innerHTML = 140 - typing.value.length;
		//button's color change when start typing	
		if (typing.value.length>0) {
			maintwi.id=""
		}
		else{
			maintwi.id="maintwi"
		};
		if (typing.value.length>=130) {
			countnum.style.color="red";
		}else{
			countnum.style.color="grey";
		};
	});
	typing.addEventListener("keyup",function(){
		countnum.innerHTML = 140 - typing.value.length;
	});

//follow button
var follow0 = document.getElementById('follow0');
	follow0.addEventListener("click",function(){
		follow0.innerHTML = "正在关注";
		follow0.style.background="#58ACE9 none repeat scroll 0% 0%";
		follow0.style.color="white";		
	});

var follow1 = document.getElementById('follow1');
	follow1.addEventListener("click",function(){
		follow1.innerHTML = "正在关注";
		follow1.style.background="#58ACE9 none repeat scroll 0% 0%";
		follow1.style.color="white";		
	});

var follow2 = document.getElementById('follow2');
	follow2.addEventListener("click",function(){
		follow2.innerHTML = "正在关注";
		follow2.style.background="#58ACE9 none repeat scroll 0% 0%";
		follow2.style.color="white";
	});

//recommendation disappear
var close0=document.getElementById('close0'),
	close1=document.getElementById('close1'),
	close2=document.getElementById('close2'),
	amanda0=document.getElementById('amanda0'),
	amanda1=document.getElementById('amanda1'),
	amanda2=document.getElementById('amanda2');
		close0.addEventListener("click",function(){
			amanda0.id="fadeout";
			amanda0.addEventListener("webkitAnimationEnd", function(){
				amanda0.id="amanda0";
			});
			amanda0.addEventListener("animationend", function(){
				amanda0.id="amanda0";
			});
		});
		close1.addEventListener("click",function(){
			amanda1.id="fadeout";
			amanda1.addEventListener("webkitAnimationEnd", function(){
				amanda1.id="amanda1";
			});
			amanda1.addEventListener("animationend", function(){
				amanda1.id="amanda1";
			});
		});
		close2.addEventListener("click",function(){
			amanda2.id="fadeout";
			amanda2.addEventListener("webkitAnimationEnd", function(){
				amanda2.id="amanda2";
			});
			amanda2.addEventListener("animationend", function(){
				amanda2.id="amanda2";
			});
		});