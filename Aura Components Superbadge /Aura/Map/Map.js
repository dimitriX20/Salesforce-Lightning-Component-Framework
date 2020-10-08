({
    jsLoaded: function(component) {
        component.set("v.jsLoaded", true);
    } ,
    
    
    onPlotMapMarker: function(component) {
        var loc = component.get("v.location");
        loc.sObjectId = event.getParam("sObjectId");
        loc.label = event.getParam("label");
        loc.lat = event.getParam("lat");
        loc.long = event.getParam("long");

        component.set("v.location", loc);
    } ,
})
