public with sharing class CSS_And_JS_Injector_Controller {
    @AuraEnabled
    public static List<CSS_and_JS_Injector__mdt> getStylesToInject(){
        try {
            return CSS_and_JS_Injector__mdt.getAll().values();
        } catch (Exception e) {
            throw new AuraHandledException('The following issue was encountered when retrieving your element styles: ' + e.getMessage());
        }
    }
}