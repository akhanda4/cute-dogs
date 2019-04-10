let x = document.getElementById('xx');
let y = document.createElement("p");
let z = document.getElementsByClassName("ar")[0];
y.innerText="Please wait while the image loads";
function fn(){
	setTimeout(function(){
		z.style.height="350px"
		y.replaceWith(x);
	},1500);
	fetch(`https://dog.ceo/api/breeds/image/random`)
	.then(res => res.json())
	.then(posts => x.setAttribute("src",posts.message));
	x.replaceWith(y);
	z.style.height="180px";
}

