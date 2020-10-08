public with sharing class BoatSearchResults {
    @AuraEnabled
    public static List<Boat__c> getBoats(String BoatTypeId){
        if(BoatTypeId != null && BoatTypeId.length() > 0) return [SELECT BoatType__c, Id , picture__c, name, contact__r.Name FROM Boat__c WHERE BoatType__c =:BoatTypeId];  
        else return [SELECT BoatType__c, Id , picture__c, name, contact__r.Name FROM Boat__c ];
    }

}
