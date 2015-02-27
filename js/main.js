var beingUsed = false;

function switchPerson(person)
{
	if(!beingUsed)
    {
    	beingUsed = true;

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
	            console.log("Error: Invalid person given to switchPerson()");
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

//Could merge this with the previous but seems kinda pointless for this small amount
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
