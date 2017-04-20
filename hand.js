$(document).ready(function() {  

  	document.body.addEventListener('touchstart', function(e){
  		
  		e.preventDefault();
        var initialTouch = (e.changedTouches[0].pageX);

        document.body.addEventListener('touchend', function(e){

  			e.preventDefault();
	        var finalTouch = (e.changedTouches[0].pageX);
	        
	        if (initialTouch < finalTouch) {
	        	e.preventDefault();
	        	$('nav').removeClass('leftHand');
	        	// leaves document with default styles
	        } else{
	        	e.preventDefault();
	        	// adds class leftHand to main Menu
	        	$('nav').addClass('leftHand');
	        };

	    }, false);

    }, false);

});

