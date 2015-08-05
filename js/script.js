

// MENU SCROLL

	
		$('li.topNavItem a').click(function(){
		console.log("clicked");
		   $('html, body').animate({
		        scrollTop: $( $(this).attr('href') ).offset().top
		    }, 500);
		    return false;
		});

	
//END MENU SCROLL

//GREETING SLIDER

		function firstFunction(){
				  var d = $.Deferred();
				   $('#page-wrap').fadeIn(1000);
				    d.resolve();
				  
				  return d.promise();
				}
				function thirdFunction(){
				setTimeout(function() {
				     var d = $.Deferred();
					$('#welcome').fadeIn(1000);
					d.resolve();
					return d.promise();
				   }, 3000);
				}
				function secondFunction(){
					  setTimeout(function() {
	   					var d = $.Deferred();
					   $('#hello').fadeOut(1000);
					    d.resolve();
					    return d.promise();
   				}, 2000);
				}
				  
				
				function fourthFunction(){
				  setTimeout(function() {
    				var d = $.Deferred();
				  $('#featuring').fadeIn(1000); 
				    d.resolve();
				
				  return d.promise();
   				}, 4000);
				}
				
				function fifthFunction(){
				 	setTimeout(function() {
    			 var d = $.Deferred();			
				$('#slider').fadeIn(1000);
				d.resolve();
				return d.promise();
				   }, 5000);		
				}
				
				firstFunction().pipe(secondFunction).pipe(thirdFunction).pipe(fourthFunction).pipe(fifthFunction);
//END GREETING SLIDER

			 $('#slider').cycle({ delay:7000, timeout:500 }); 