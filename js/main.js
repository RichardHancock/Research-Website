//Whether a button has been pressed, stops other buttons being clicked before transition complete
var beingUsed = false;


function switchPerson(person)
{
	//Checks if the buttons are currently enabled
	if(!beingUsed)
    {
    	//Disables the other buttons
    	beingUsed = true;

    	//Checks which person was passed in, and sets the relevant css class name
    	switch(person)
	    {
	        case "Harry":
	            className = ".harry";
	        break;
	        case "Jamie":
	            className = ".jamie";
	        break;
	        case "Richard":
	            className = ".richard";
	        break;
	        default:
	        	//Unhandled parameter, exit function
	            console.log("Error: Invalid person given to switchPerson()");
	            beingUsed = false;
	            return -1;
	        break;
	    }

	    //Checks if the person's page is already displayed
	    if($(className).hasClass('jqueryChosenItem'))
	    {
	        //This person is already displayed so no switch needed
	        //console.log("No switch needed");
	        beingUsed = false;
	        return 0;
	    }

	    //Fade out the currently shown item over 400ms
	    $(".jqueryChosenItem").fadeOut('400', function() {
	        //Once fade out complete fade in the selected item over 400ms
	        $(className).fadeIn('400', function() {
	        	//Once fade in complete, it sets this class as chosen item
	        	$(".jqueryChosenItem").removeClass('jqueryChosenItem');
	        	$(className).addClass('jqueryChosenItem');

	        	//Re enable buttons
	        	beingUsed = false;
	        });
	    });
    }
    
}

//Could merge this with the previous but seems kinda pointless for this small amount of code
//Look at previous for documentation
function switchItem(item)
{
	console.log("Test");
	if(!beingUsed)
    {
    	beingUsed = true;

    	switch(item)
	    {
	        case "Keyboard":
	            className = ".keyboard";
	        break;
	        case "Touchscreen":
	            className = ".touchscreen";
	        break;
	        case "Gamepad":
	            className = ".gamepad";
	        break;
	        default:
	            console.log("Error: Invalid item given to switchItem()");
	            beingUsed = false;
	            return -1;
	        break;
	    }

	    if($(className).hasClass('jqueryChosenItem'))
	    {
	        //This person is already displayed so no switch needed
	        console.log("No switch needed");
	        beingUsed = false;
	        return 0;
	    }

	    $(".jqueryChosenItem").fadeOut('400', function() {
	        
	        $(className).fadeIn('400', function() {
	        	$(".jqueryChosenItem").removeClass('jqueryChosenItem');
	        	$(className).addClass('jqueryChosenItem');
	        	beingUsed = false;
	        });
	    });
    }
}
