var backgroundColor = "#";                                                      //Initializes the background css to #

/*
 * Function that returns a random color, represented by a 6 digit hex value
 * RETURN: String "#xxxxxx", where x is 
 */
function randomize() {
    backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);    //Adds 6 numbers, converted to base 16 hexadecimal
    if(backgroundColor.length === 7){                                           //If length is the same value and type as int 7...
        return backgroundColor;                                                     //Return background color successfully
    }
    else{                                                                       //Else...
        randomize()                                                                 //Call the function again
    }
}

document.getElementById("main").style.backgroundColor = randomize();            //Sets main element's style to the result of the randomize() function
document.getElementById("color_displayer").innerHTML = backgroundColor;         //Sets color_displayer to display the background color's value