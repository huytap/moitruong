$(window).load(function () {
    $('.flexslider').flexslider({ directionNav: false });
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