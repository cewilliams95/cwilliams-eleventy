function checkForEyes(event) {
	var eyes = document.getElementsByClassName('eye');
	var modal = document.getElementById('hiModal');
	const CENTER_THRESH = 100;
	if((Math.abs(event.pageY - window.innerHeight/2) <= CENTER_THRESH) && Math.abs(event.pageX - window.innerWidth/2) <= CENTER_THRESH) {
			[].forEach.call(eyes, function(el) {
					el.classList.remove(...el.classList);
					el.classList.add('eye');
			});
			eyes[0].classList.add('cross-right');
			eyes[1].classList.add('cross-left');
			modal.classList.remove('hide');
			modal.classList.add('show');
	}
	else {
			modal.classList.remove('show');
			modal.classList.add('hide');
			[].forEach.call(eyes, function(el) {
						el.classList.remove('cross-left', 'cross-right');
			});
			if(event.pageY < window.innerHeight/2) { //TOP
				if(event.pageX <  window.innerWidth/2) { // LEFT
					[].forEach.call(eyes, function(el) {
						el.classList.remove('eyeTopRight', 'eyeBotLeft', 'eyeBotRight');
						el.classList.add('eyeTopLeft');
					});
				}
				else { // RIGHT
					[].forEach.call(eyes, function(el) {
						el.classList.remove('eyeTopLeft', 'eyeBotLeft', 'eyeBotRight');
						el.classList.add('eyeTopRight');
					});
				}
			}
			else { // BOT
				if(event.pageX <  window.innerWidth/2) { // LEFT
					[].forEach.call(eyes, function(el) {
						el.classList.remove('eyeTopRight', 'eyeTopLeft', 'eyeBotRight');
						el.classList.add('eyeBotLeft');
					});
				}
				else { // RIGHT
					[].forEach.call(eyes, function(el) {
						el.classList.remove('eyeTopRight', 'eyeBotLeft', 'eyeTopLeft');
						el.classList.add('eyeBotRight');
					});
				}
			}
	}
}
	document.addEventListener('mousemove', (e) => {
		checkForEyes(e);
	});
