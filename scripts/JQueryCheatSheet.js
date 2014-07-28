//JavaScript Libraries
	//A library is a bunch of functions and code that someone has written to make a set of tasks easier.
	//By including the library in your code, you'll have access to its functions and methods.
	//To create a JavaScript library, you create a new file known as for instance, my_library.js. When you create this file, you could write functions that can be used in your HTML.
	//Link your JavaScript library in its own <script> block in the head.
	//Occasionally something can go wrong when loading a library.
		//To check if your JavaScript library is working, load the page and open the JavaScript Console.
		//To check to see if a library is loaded, try calling one of its functions or methods.
			//For instance, to make sure jQuery is loaded, just try calling jQuery in the JavaScript Console.

	//jQuery
		//The JQuery libraryis a self described "Write less, do more" library for JavaScript.
		//To include the jQuery library in your HTML, put the following inside of the <head> section of your file:
			<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js> </script>"
		//Selecting elements with jQuery:
			$("element")

		//The $(document).ready snippet
			//This snippet must be included first to ensure that your code doesn't run until it sees this.
				$(document).ready(function(){

				});
		//To show or hide an element:
			$("body").hide();
			$("body").show();
		//To fade in or fade out an element:
			$("body").fadeOut();
			$("body").fadeIn();
		//To fade in or fade out over time
			$("body").fadeOut(1000);
			//fade out over 1 second
			$("body").fadeIn(4000);
			//fade in over four seconds
		//Sliding-Another way of hiding and showing items on the page.
			$("body").slideUp(1000);
			//fade out over 1 second
			$("body").slideDown(4000);
			//fade in over 4 seconds
		//Animating CSS
			//Use JQuery's animate () method to animate most CSS properties that are numeric
			$(".my-element").animate({
				opacity:0.25,
				width: 70%
			}, 2000);
			
		//The Click Event
			//JQuery can also be used to easily monitor events on an element and trigger functionality when an event is fired.
				$("ul li a").click()

