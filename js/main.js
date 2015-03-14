//Whether a button has been pressed, stops other buttons being clicked before transition complete
var beingUsed = false;


function switchItem(item)
{
	//Checks if the buttons are currently enabled
	if(!beingUsed)
    {
    	//Disables the other buttons
    	beingUsed = true;

    	//Checks which item was passed in, and sets the relevant css class name
    	switch(item)
	    {
	        case 1:
	            className = ".item1Content";
	        break;
	        case 2:
	            className = ".item2Content";
	        break;
	        case 3:
	            className = ".item3Content";
	        break;
	        default:
	        	//Unhandled parameter, exit function
	            console.log("Error: Invalid item given to switchItem()");
	            beingUsed = false;
	            return -1;
	        break;
	    }

	    //Checks if the item's content is already displayed
	    if($(className).hasClass('jqueryChosenItem'))
	    {
	        //This item is already displayed so no switch needed
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