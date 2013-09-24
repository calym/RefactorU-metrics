
// Total Distance Scrolled
// Time before clicking Sign Up
// Time spent on page
// Time spent on each section of the page


$(document).ready(function(e) {
	var d = new Date().getTime()

	$("#button").click(function(event){
		clickTime = event.timeStamp;
		if (clickTime){
			clickTime -= d;
			console.log("Milliseconds on the page: " + clickTime);
		}

});  
	var signupTime = 0;
	$("#signup").click(function(event){
		signupTime = event.timeStamp;
		if (signupTime){
			signupTime -= d
			console.log("Milliseconds until signup: " + signupTime);

		}	
});		

    $('#button').click(function() {
        var scrolled = $(window).scrollTop(), //Should these be semi colons??
        wholething = $(document).height(),
        currentview = $(window).height(),
        scrollPercent = (scrolled / (wholething-currentview)) * 100;     

        alert("Current scroll percent: " + scrollPercent + "\nTotal distance scrolled:" 
        +$(document).scrollTop() + "pixels \nMilliseconds spent on the page: "+clickTime+
        "\nMilliseconds until signup: " +signupTime) 
     })

   $('#signup').click(function() {
   		console.log("I clicked sign up.")
   	})

//When we scroll... (use scroll() as an event handler!)
//Get the current vertical scroll position and store in a variable using the method scrollTop
//When we scroll again (scroll() event handler!):
//add the absolute value to the previous value

function isScrolledIntoView(elem){
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    console.log((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));

}


	
	var last_vscroll = 0;
	var total_vscroll = 0;
	var sections = {};
	$(document).scroll(function() {
		total_vscroll += Math.abs($(document).scrollTop() - last_vscroll);
		last_vscroll = $(document).scrollTop();
		// console.log(total_vscroll);
		// console.log($('.section2').offset())
		
		$('.section').each(function(e){
			var el = $(this);
			var key = el.attr("id")

			if(!sections[key]){
				sections[key] = {}
				sections[key].starttime = 0
				sections[key].endtime = 0
				sections[key].totalTime = 0
			}
			console.log(isScrolledIntoView(el))
			if(isScrolledIntoView(el)) {
				if(!sections[key].starttime){
					sections[key].starttime = (new Date()).getTime();
				}
				
			} else {
				sections[key].endtime = (new Date()).getTime();
				sections[key].totalTime = sections[key].endtime - sections[key].starttime
				console.log(sections[key].totalTime)
				sections[key].starttime = 0
				// console.log(sections[key].endtime,sections[key].starttime)
			}
			// console.log(starttime, endtime);
			 

		});
		console.log(sections);

	});
	

	.scrollTop()
	$(window).height()
	$(document)
	.timestamp() or new date time


//Figure out the time spent on each section of the page.
//The section of the page we're on is determined by the viewport - tracking each div's position 
//relative to the document
//.top .offset - how far is a div from the top of the page

//Use the checkvisible function to see if a section is visible
//if yes: do a calculation
//if not: print out what time it left view
//The function will need to tell us what time an element left the viewport - this will be used to 
//calculate time spent on that section
//This will need to happen for each section of the page


	

// $(document).ready(function() {
//     $(thingToClick).event(function() {
//         $(thingToAffect).effect();
//     });
// });



}); //don't remove. This closes $(document).ready



 