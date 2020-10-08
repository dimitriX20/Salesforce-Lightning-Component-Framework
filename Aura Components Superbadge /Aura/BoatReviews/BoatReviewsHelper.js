({
	onInit : function() {
	var boat= component.get("v.boat");
	var ac= component.get("c.getAll");        
        ac.setParams({
            "boatId": boat.Id
        });
        
        ac.setCallback(this,function(response){
            var st = response.getState();
            switch(st){
                case "SUCCESS":
                component.set("v.boatReviews", response.getReturnValue());
                break;
                
                case "ERROR":
                console.log('error' + response.getError());
                break;
                
                case "INCOMPLETE" :
                console.log('INCOMPLETE');
                break;
            }
            
        });        
        
        $A.enqueueAction(ac);
	}
})
