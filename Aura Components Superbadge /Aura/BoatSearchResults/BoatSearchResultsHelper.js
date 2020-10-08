({
	onSearch : function(component, event) {
		var BoatTypeId = component.get("c.BoatTypeId");
        var action = component.get("c.getBoats");
        action.setParams({"BoatTypeId" : BoatTypeId});
        
        action.setCallback(this, function(response){
            var st = response.getState();
            
            if(st === "SUCCESS"){
                var boats = response.getReturnValue();
                component.set("v.boats" , res);
            }
            else{
                console.log("error state" + st);
            }
           });
        
        $A.enqueueAction(action);
        },
})
