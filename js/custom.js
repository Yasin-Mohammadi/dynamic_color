jQuery(document).ready(function($) {

	var cs = {r: 120, g: 100, b: 150}
	var ce = {r: 100, g: 50, b: 250}
	var iter = 5;
	var step = {r:cunt_step(cs['r'], ce['r'], iter), g:cunt_step(cs['g'], ce['g'], iter), b:cunt_step(cs['b'], ce['b'], iter)};

	/**
	 * 
	 * @param {int} si the start value
	 * @param {int} ei the end value
	 * @param {int} iter the number of iterate between color 1 to color 2
	 */
	function cunt_step(si , ei, iter) {
		var step = (ei - si)/iter;
		step = Math.ceil(step);
		return step;
	}
	
	console.log(cs)
	console.log(ce)
	for (let i = 0; i < iter; i++) {
		cs = {r: cs['r']+step['r'], g: cs['g']+step['g'], b: cs['b']+step['b']};
		console.log(cs)
		

		
	}
	console.log(cs)
	console.log(ce)


		// $('.box').css({
		// 	'color': 'rgb('+currentc["r"]+','+ currentc["g"]+',' +currentc["b"]+')',
		// });




	// var minColor ; var maxColor;var step; var iter= 5;
	// change_color();joinn(minColor, maxColor, iter);colorize();
	// var currentc = minColor;
	// console.log(minColor)

	// function colorize() {
	// 	$('.box').css({
	// 		'color': 'rgb('+currentc["r"]+','+ currentc["g"]+',' +currentc["b"]+')',
	// 	});
	// 	currentc.r = currentc.r + step.r;
	// 	currentc.g = currentc.g + step.g;
	// 	currentc.b = currentc.b + step.b;

	// }


	// $('#btn').click(function (e) { 
	// 	e.preventDefault();
	// 	$('.box').css({
	// 		'color': 'rgb('+currentc.r+','+ currentc.g+',' +currentc.b+')',
	// 		'background-color': 'rgb('+c2.r+','+ c2.g+',' +c2.b+')'
	// 	});
	// });
	// function change_color() {
	// 	var minr = Math.min(c1.r ,c2.r);	
	// 	var ming = Math.min(c1.g ,c2.g);	
	// 	var minb = Math.min(c1.b ,c2.b);
		
	// 	var maxr = Math.max(c1.r ,c2.r);	
	// 	var maxg = Math.max(c1.g ,c2.g);	
	// 	var maxb = Math.max(c1.b ,c2.b);

	// 	minColor = {r: minr, g: ming, b:minb};
	// 	maxColor = {r: maxr, g: maxg, b:maxb};
		
	// }




	// setInterval('colorize()', 5000);

});
