// Check off todos by clicking
$("ul").on("click", "li", function(){ // add a listener for clicks to the UL, this checks if an LI was clicked
    $(this).toggleClass("completed");
});

// click on X to delete todo
$("ul").on("click", "span", function(event){ // add listener to ul to check if a span was clicked
    // Fade out parent of X - the li
    $(this).parent().fadeOut(500, function(){
        // after fade, remove the li
        $(this).remove();
    });
    // stops event bubbling
    event.stopPropagation();
});

// checks if enter was press on the text input
$("input[type=text]").keypress(function(event){
    if(event.which === 13){
        // get new todo text from input
        var todoText = $(this).val();
        // create a new li and add to ul
        $("ul").append(`<li><span><i class="fa fa-trash"></i></span> ${todoText}</li>`);
        $(this).val("");
    }
});

$(".fa-plus").click(function() {
    $("input[type=text]").fadeToggle();
});