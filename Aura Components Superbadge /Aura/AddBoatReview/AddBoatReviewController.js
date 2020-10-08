({
    doInit : function(component, event, helper) {
        helper.onInit(component, event, helper);
    },
    
    
    onSave : function(component, event, helper) {
        component.set("v.boatReview.Boat__c" , component.get("v.boat.Id"));
        var service= component.find("service");
        service.saveRecord(function(response){
            if(saveResult.state === "SUCCESS" || saveResult.state == "DRAFT"){
                var toast = $A.get("e.force:showToast");
                if(toast){
                    toast.setParams({
                        "title" : "Saved",
                        "message" : "The record was saved."
                    });
                    toast.fire();
                }
                else{
                    alert("Record saved!");
                }
                var boat = component.getEvent("BoatReviewAdded");
                boat.fire();
                
                helper.onInit();
            }
            else if(saveResult.state=="ERROR"){
                console.log('error' + JSON.stringify(saveResult.error));
            }
                else if(saveResult.state=="INCOMPLETE"){
                    console.log('user offline');
                }
                    else {
                        console.log('unknown error '+ error);
                    }             
        });
    },
    
    onRecordUpdated : function(component, event, helper) {
        var res = $A.get("e.force:showToast");
        if(res){
            res.setParams({
                "title": "Updated",
                "message": "Record Updated!"
            });
            res.fire();
        }
        else{
            alert("Record Updated!");
        }
        
    }, 
})
