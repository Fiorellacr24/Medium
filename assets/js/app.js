window.addEventListener('load',function(event){
	event.preventDefault();

var contenedor = document.getElementsByTagName("body")[0];

var nav, div, logo, imglab,twitter, fb, edit, search, s, user, ico;

	nav = document.createElement("nav");
	right = document.createElement("div");
	logo = document.createElement("img");
	imglab = document.createElement("img");
	twitter = document.createElement("i");
	fb = document.createElement("i");
	left = document.createElement("div");
	edit = document.createElement("span");
	search = document.createElement("i");
	s = document.createElement("span");
	user = document.createElement("img");
	ico = document.createElement("img");

	logo.setAttribute("src", "assets/img/Medium-48.png");
	imglab.setAttribute("src", "assets/img/laboratoria.png");
	twitter.setAttribute("class", "icon-twitter");
	fb.setAttribute("class", "icon-facebook");
	edit.innerText = "Edit";
	search.setAttribute("class", "icon-search");
	s.innerText = "S";
	user.setAttribute("src", "assets/img/user.png");
	ico.setAttribute("src", "assets/img/logo.png")

	contenedor.prepend(nav);
	nav.appendChild(left);
	left.appendChild(logo);
	left.appendChild(imglab);
	left.appendChild(twitter);
	left.appendChild(fb);
	nav.appendChild(right);
	right.appendChild(edit);
	right.appendChild(search);
	right.appendChild(s);
	right.appendChild(user);
	right.appendChild(ico);

	logo.style.width = "50px";

	imglab.style.width = "90px";
	imglab.style.margin = "10px 30px 5px";

	right.style.float = "right";
	left.style.float = "left";

	s.style.backgroundColor = "#02b875";
	s.style.borderRadius = "20px";
	s.style.border = "20px";

	user.style.width = "50px"; 

	ico.style.width = "50px";
	ico.style.marginLeft = "15px";

		/*document.getElementById("contenido").innerHTML =
		"<h1><b> Hazlo con estilo : Tipografías, iconos y sprite" + "</b> </h1>" +
		"<p>Te imaginas el mundo sin tipos de letra, tamaños, colores, o sin iconos , nada, nada sería iguaaaaaal!!!! Pero gracias a muchos desarrolladores y diseñadores, hoy contamos con una inimaginable gama de fuentes para nuestro desarrollos web, pero la pregunta que nos hacemos es, ¿existen reglas, hay una mejor forma de hacerlo, no sé que tipografía usar? Tengo muchas preguntas y pocas respuestas!!" + "</p>";
*/

		/*var div = document.createElement('div');
		var span = document.createElement('span');
		var img = document.createElement('img');
		var url = "assets/img/" + i + ".png";

		img.setAttribute('src', url);
		div.appendChild(img);
		span.innerText = nombres[i];
		div.appendChild(span);
		li.appendChild(div);
		contenedor.appendChild(li);*/
});
