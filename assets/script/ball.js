$(document).ready(function() {

    $('#joint1 h5').css('color', 'red');
    $('#joint1 hr').css('border-color', 'red');
    
//    $('.1 dash11').css('color','red');
    var currentImage = 1;

    $('#joint1, #joint2, #joint3, #joint4, #joint5').hover(function() {
        var imageId = $(this).index() - 1;
        $('#info1, #info2, #info3, #info4, #info5').hide(); // Hide all images

        // Show the corresponding image based on the hovered element
        $('#info' + imageId).show();
       
        currentHovered = imageId;
        $('#joint' + imageId + ' h5').css('color', 'red');
        $('#joint' + imageId +' hr').css('border-color', 'red');
        // Reset h1 color for other elements
        $('#joint1 h5, #joint2 h5, #joint3 h5, #joint4 h5, #joint5 h5').not('#joint' + imageId + ' h5').css('color', '');
        $('#joint1 hr, #joint2 hr, #joint3 hr, #joint4 hr, #joint5 hr').not('#joint' + imageId + ' hr').css('border-color', '');
       



    }, function() {
        // Do nothing on mouse leave
    });

    // Hide text initially
    $('#info2, #info3,#info4,#info5').hide();
   
});