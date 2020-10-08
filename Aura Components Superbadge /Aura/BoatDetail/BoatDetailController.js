({
	init  : function(component, event, helper) {
        var ev = $A.get("e.force:navigateToSObject");
        if(ev) component.set("v.showDetailsBtn", true);
	},
    
    onFullDetails  :function(component, event, helper) {
        var ev = $A.get("e.force:navigateToSIbject");
        var boat = component.get("v.boat");
        
        if(ev && boat){
            ev.setParams({
                "recordId": boat.Id  
            });
            ev.fire();
        }
	},
})
