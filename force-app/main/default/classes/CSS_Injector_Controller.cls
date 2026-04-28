public with sharing class CSS_Injector_Controller {
    @AuraEnabled
    public static List<CSS_Injector__mdt> getStylesToInject(){
        try {
            return CSS_Injector__mdt.getAll().values();
        } catch (Exception e) {throw new AuraHandledException('The following issue was encountered when retrieving your CSS Injections: ' + e.getMessage());}
    }
}