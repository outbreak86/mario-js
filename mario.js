
printPyramid(5);


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
   
    // TODO
    // print that pyramid!
    for (i = 0; i < height; i++ )
    {
    	str = "";
    	for(j = 0; j < height-(1*i);j++)
	    {
	    	str +=" ";
	    }
	    for(k = 0; k<i+2; k++)
	    {
	    	str+="#";
	    }
	     console.log(str);
    }

}
