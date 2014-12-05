function isInt(value) {
    var val = value.val();
    if(Math.floor(val) == val && $.isNumeric(val)) {
        return parseInt(val);
    } else {
        return false;
    }
}

$(document).ready(function(){
    $('.ops').on("click",'button',function(){
        var x, y, z;
        x = isInt($('.x'))
        y = isInt($('.y'))
        
        $('.X').text(x);
        $('.Y').text(y);
        
        if(x===false || y===false){
            alert("Error! Check that X and Y are integers!");
        } else {
            if($(this).hasClass("plus")) {
                z = x + y
                $('.Z').text(z);
            } else {
                z = x - y
                $('.Z').text(z);
            }
        }
    });
});