({
	doInit : function(component, event, helper) {
		helper.onInit(component, event, helper);
	},
    
    onUserInfoClick : function(component, event, helper) {
		    var userId = event.target.getAttribute("data-userid");
        var redirectE = $A.get("e.force:navigateToSObject");
        
        if(redirectE){
            redirectE.setParams({
                "recordId" : userId
            });
            redirectE.fire();
        }   
	},
})
