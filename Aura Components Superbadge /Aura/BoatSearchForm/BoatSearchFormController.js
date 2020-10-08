({
    executeInit : function(component, event, helper) {
        helper.loadBoats();
    }, 
    
    
    search : function(component, event, helper) {
        var selectedBoatType= component.get("v.TypeSelected");
    },
    
    
    handleChange : function(component, event, helper) {
        component.set("v.TypeSelected" , component.find("BoatTypes").get("v.value"));
    },
    
    
    createBoat : function(component, event, helper) {
        var BoatTypeId = component.get("v.TypeSelected");
        var reqNewBoat = component.getEvent("launchNewBoat");
        reqNewBoat.setParams({"BoatTypeId" : BoatTypeId});
        reqNewBoat.fire();
    },
    
    
    handleCreatedBoatForm : function(component, event, helper) {
        var BoatTypeId = component.get("v.TypeSelected");
        var createBoat = $A.get("e.force:createRecord");
        createBoat.setParams({
            "entityApiName" : "Boat__c",
        });
        
        if(! BoatTypeId == ""){
            
            creatBoat.setParams({"defaultFieldValues" : {'BoatType__c' : BoatTypeId}})
        }
        createBoat.fire();
    },
    
    
    onFormSubmit : function(component, event, helper) {
        var params = {"formData" : {"BoatType" : component.get("v.BoatType")}};
        var formSubmit  = component.getEvent("formsubmit");
        formSubmit.setParams(params);
        formSubmit.fire();               
    },
})
