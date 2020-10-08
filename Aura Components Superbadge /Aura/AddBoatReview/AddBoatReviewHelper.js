({
    onInit : function() {
        var service= component.find();
        service.getNewRecord(
            "BoatReview__c" , null, false, $A.getCallback(function(){
                var boatReview = component.get("v.boatReview");
                var er = component.get("v.recordError");
                if(error || (rec == null)){
                    console.log('error' + er);
                    return;
                }
                boatReview.Boat__c = component.get("v.boat").Id;
                component.set("v.boatReview", boatReview);
                
                
            })
        );
    }
})
