public class BoatReviews {
	@AuraEnabled
    public static List<BoatReview__c> getAll(Id boatId ){
        return [Select Name, Id, Comment__c, Rating__c, LastModifiedDate, CreatedDate, CreatedBy.Id, CreatedBy.Name,CreatedBy.CompanyName,CreatedBy.SmallPhotoUrl FROM BoatReview__c Where Boat__c =:boatId ];
    }
}
