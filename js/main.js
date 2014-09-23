$(window).load(function () {
    $('.flexslider').flexslider({ 
    	slideshowSpeed: 3000,
        animationSpeed: 1000,
        directionNav: false 
    });
    $('#galleryView').click(function(){
    	$('#box').show();
    	gallery();
    });
    $('#close').click(function(){
		$('#box').hide();
	})
});


function gallery() {
    $("#gallery").carouFredSel({
		responsive	: true,
		prev        : ".left",
	    next        : ".right"	
	});
	//$("#gallery").imagesLoaded(gallery);	

}