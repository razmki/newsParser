var request = require('request');
var cheerio = require('cheerio');

	var elemDiv = document.createElement("div");
	body = document.querySelector("body");
	body.appendChild(elemDiv);
	elemDiv.setAttribute("class", "main");
	elemDiv.classList.add('col-md-offset-2', 'col-md-8', 'col-lg-offset-2');
	var divMain = document.querySelector(".main");
request('http://www.rbc.ru/', function (error, response, html) {
  if (!error && response.statusCode == 200) {
	var $ = cheerio.load(html);
	$('.main-feed__link').each(function(i, element){
		var name = $(this).text();
		var link = $(this)['0'].attribs['data-ati-url'];
		var spans = document.createElement('span');
		var a = document.createElement('a');
		a.setAttribute('href', link);
		var nameEnd = document.createTextNode(name);
		a.appendChild(nameEnd);
		spans.appendChild(a);
		elemDiv.appendChild(spans);		
		elemDiv.innerHTML += "<br>";
		
	});
  }
});

