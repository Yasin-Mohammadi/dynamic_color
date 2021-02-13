jQuery(document).ready(function($) {

	var cs = {r: 250, g: 150, b: 175}
	var ce = {r: 150, g: 80, b: 20}
	var iter = 100;
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
	var ii = 0;
	setInterval(() => {
		cs = {r: cs['r']+step['r'], g: cs['g']+step['g'], b: cs['b']+step['b']};
		$('.box').css({
			'background-color': 'rgb('+cs["r"]+','+ cs["g"]+',' +cs["b"]+')',
		});
		ii++;
		console.log(ii)
		if(ii >= iter){
			step['r'] = -step['r']; 
			step['g'] = -step['g']; 
			step['b'] = -step['b']; 
			ii = 0;
		}

	}, 200);

});
