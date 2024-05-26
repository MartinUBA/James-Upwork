var size = 0;
var placement = 'point';

var style_Wheat_7 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("VALUE Wheat (kTons)");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 75027.000000 && value <= 76643.857143) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(252,253,191,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 76643.857143 && value <= 78783.142857) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(254,175,120,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 78783.142857 && value <= 80684.714286) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(241,96,93,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 80684.714286 && value <= 83440.142857) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(182,54,122,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 83440.142857 && value <= 86261.285714) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(114,31,129,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 86261.285714 && value <= 89130.857143) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(45,17,95,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 89130.857143 && value <= 94912.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,0,4,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
