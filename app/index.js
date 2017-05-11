var abs = function(p) {
    return Math.sqrt(p.x*p.x+p.y+p.y);
}

var add = function(p1, p2) {
    return {x:p1.x+p2.x, y:p1.y+p2.y};
}

var multiply = function(p1, p2) {
    return {
        x:p1.x*p2.x-p1.y*p2.y, 
        y:p1.x*p2.y+p1.y*p2.x
    };
}

exports.mandelbrot = function (p0, max) {
    var p = {x:p0.x, y:p0.y};
    for( var t = 0; t < max; t++) {
        if (abs(p) > 2.0) return t;
        p = add(p0, multiply(p,p));
    }
}