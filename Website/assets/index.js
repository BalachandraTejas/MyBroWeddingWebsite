var rightKey, leftKey, topKey, bottomKey;

$(document).ready(function () {

	//Set up the triggers for the arrow keys
	$(document).keydown(function(e){
		if (e.keyCode == 37 && typeof leftKey === 'function') {
			leftKey();
		} else if(e.keyCode == 38 && typeof topKey === 'function') {
			topKey();
		} else if(e.keyCode == 39 && typeof rightKey === 'function') {
			rightKey();
		} else if(e.keyCode == 40 && typeof bottomKey === 'function') {
			bottomKey();
		}
	});

	/*parallax.add($("#features"))
			.add($("#index"))
			.add($("#boo"))
			.add($("#sandbox"))
			.add($("#me"));*/

    parallax.add($("#welcome"))
            .add($("#intro"))
            .add($("#events"))
            .add($("#reachus"));


	parallax.background = $("body");
    parallax.scaling = 0.3; 

	//Clears each page navigation on load
	parallax.preload = function(){
		rightKey = leftKey = topKey = bottomKey = "";
		$(".control").hide();
	};


	//Setting up page navigation


   parallax.welcome.onload=function(){
        setBottom("intro", "Intro..");
        setRight("reachus","Reach Us");
    };

    parallax.intro.onload=function(){
        setRight("events","Events");
        setTop("welcome","Welcome");
    };

    parallax.events.onload=function(){
        setLeft("intro", "Intro..");
        setTop("reachus", "");
    };

    parallax.reachus.onload=function(){
        setLeft("welcome", "Home");
        setBottom("events","Events");
    };



	//Sets the correct triggers for the arrows, plus arrow keys
	function setRight(page, text){
		$("#rightText").text(text);
		$("#rightControl").show().unbind('click').click(function(){
			parallax[page].right();
		});
		rightKey = function(){
			parallax[page].right();
		};
	}

	function setLeft(page, text){
		$("#leftText").text(text);
		$("#leftControl").show().unbind('click').click(function(){
			parallax[page].left();
		});
		leftKey = function(){
			parallax[page].left();
		};
	}

	function setTop(page, text){
		$("#topText").text(text);
		$("#topControl").show().unbind('click').click(function(){
			parallax[page].top();
		});
		topKey = function(){
			parallax[page].top();
		};
	}

	function setBottom(page, text){
		$("#bottomText").text(text);
		$("#bottomControl").show().unbind('click').click(function(){
			parallax[page].bottom();
		});
		bottomKey = function(){
			parallax[page].bottom();
		};
	}

	//The fadey bits
	$("#bottomControl").mouseenter(function(){
		$("#bottomArrow").fadeTo(500,1);
		$("#bottomText").fadeTo(500,1);
	}).mouseleave(function(){
		$("#bottomArrow").stop().fadeTo(500,0.8);
		$("#bottomText").stop().fadeTo(500,0);
	});

	$("#leftControl").mouseenter(function(){
		$("#leftArrow").fadeTo(500,1);
		$("#leftText").fadeTo(500,1);
	}).mouseleave(function(){
		$("#leftArrow").stop().fadeTo(500, 0.8);
		$("#leftText").stop().fadeTo(500,0);
	});

	$("#rightControl").mouseenter(function(){
		$("#rightArrow").fadeTo(500,1);
		$("#rightText").fadeTo(500,1);
	}).mouseleave(function(){
		$("#rightArrow").stop().fadeTo(500, 0.8);
		$("#rightText").stop().fadeTo(500,0);
	});

	$("#topControl").mouseenter(function(){
		$("#topArrow").fadeTo(500,1);
		$("#topText").fadeTo(500,1);
	}).mouseleave(function(){
		$("#topArrow").stop().fadeTo(500, 0.8);
		$("#topText").stop().fadeTo(500,0);
	});


	$(".control").hide();
	//parallax.index.show();
	//parallax.welcome.show();



// initially hide the groom and bride details
   $('#groom').hide(); 
   $('#bride').hide(); 
// on mouse events show them:
$('#dulha').mouseover(function() {
    $('#groom').fadeIn();
});
$('#dulha').mouseout(function() {
    $('#groom').fadeOut();
});
$('#dulhan').mouseover(function() {
    $('#bride').fadeIn();
});
$('#dulhan').mouseout(function() {
    $('#bride').fadeOut();
});




parallax.welcome.show();


});
 /* thanks to : http://tizardsbriefcase.com/563/javascript/google-map-pin-not-centered-when-using-hidden-embedded-iframe*/
$('#gmap', p).show(250, function()
    {

    // this bullshit is because google map pins are not loaded correctly when embedding an iframe that is hidden, and then subsequently made visible.
        var i = $(this).find('iframe');
        var is = $(i).attr('src');
        i.delay(250).attr('src', is);
    });


