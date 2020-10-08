({
    onFormSubmit : function(component, event, helper) {
        var params= event.getParam("formData");
        var Res = component.find("searchResults");
        if(Res) Res.search(params.BoatTypeId);   
    },
})
