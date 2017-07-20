$(document).ready(function() {
    var circles = $(".b-hover-layer.b-circle");
    for (var i = circles.length - 1; i >= 0; i--) {
    	width = $(circles[i]).width();
    	height = $(circles[i]).height();

    	square = 0;

    	if(width > height) {
    		square = height;
    	} else {
    		square = width;
    	}

    	$(circles[i]).width(square);
    	$(circles[i]).height(square);
    };

    var items = $(".b-effect.b-animate2");
    for (var y = items.length - 1; y >= 0; y--) {
        var childrens = $(items[y]).children();
        zindex = 0;
        for (var z = childrens.length - 1; z >= 0; z--) {
            $(childrens[z]).css("z-index", zindex);
            zindex++;
        };
    };
});