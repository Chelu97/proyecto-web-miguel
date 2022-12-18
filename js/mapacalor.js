// create instance
var heatmapInstance = h337.create({
    container: document.body,
    radius: 25
});
document.body.onmousemove = function(ev) {
    heatmapInstance.addData({
        x: ev.layerX,
        y: ev.layerY,
        value: 1
    });
};
// that's it... yay right? ;)