({
    init : function(component, event, helper) {
        helper.onSearch(component, event, helper);
        //<aura:attribute name = "IdSelectedBoat" type = "String" default = "" /> 
    },
    
    
    doSearch : function(component, event, helper) {
        var param = event.getParam('arguments');
        if(param){
            component.set("v.boatTypeId" , params.boatTypeId);
            helper.onSearch(component, event, helper);
        }
    },
    
    
    onBoatSelect : function(component, event, helper) {
        var boatID = event.getParam("boatId");
        component.set("v.selectedBoatId " , boatID); 
    },
})
