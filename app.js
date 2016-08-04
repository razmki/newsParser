var request = require('request');
var cheerio = require('cheerio');

function image(link, callback) {
	request(link, function(error, response, html) {
		 if (!error && response.statusCode == 200) {
	var _ = cheerio.load(html);
	_('.article__main-image__image').each(function(i, element){
		var nameimg = _(this)['0'].attribs.src;
		callback(nameimg);
	})
}
})
};
	
	var mainDiv = document.querySelector(".content");
	mainDiv.classList.add('col-md-offset-1', 'col-lg-offset-1','col-sm-offset-0', 'col-xs-offset-0');
request('http://www.rbc.ru/', function (error, response, html) {
  if (!error && response.statusCode == 200) {
	var $ = cheerio.load(html);
	$('.main-feed__link').each(function(i, element){
		var name = $(this).text();
		var link = $(this)['0'].attribs['data-ati-url'];
		image(link, function(res) {
			var elemDiv = document.createElement("div");
			mainDiv.appendChild(elemDiv);
			elemDiv.classList.add('col-md-5', 'col-lg-5', 'col-sm-12', 'boxShadow', 'marg');
			var a = document.createElement('a');
			var img = document.createElement('img');
			img.setAttribute('src', res);
			img.classList.add('leftimg');
			a.setAttribute('href', link);
			var p = document.createElement('p');
			var nameEnd = document.createTextNode(name);
			var span1 = document.createElement('span');
			var span2 = document.createElement('span');
			p.appendChild(nameEnd);
			span1.appendChild(img);
			span2.appendChild(p);
			
			a.appendChild(span1);
			a.appendChild(span2);	
			elemDiv.appendChild(a);

		});

		}
	);
  }
});




