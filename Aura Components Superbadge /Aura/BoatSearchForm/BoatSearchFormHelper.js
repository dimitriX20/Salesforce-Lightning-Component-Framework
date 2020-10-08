({
    loadBoats : function() {
        var action = component.get("c.getBoats");
        action.setCallback(this, function(response){
            var s = response.getState();
            s == "SUCCESS" ? component.set("v.BoatTypes" , response.getReturnValue()) : console.log("Fail State" + s); 
        });
        $A.enqueueAction(action);	
    }
})
