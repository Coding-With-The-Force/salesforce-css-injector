@isTest
public with sharing class CSS_Injector_Controller_Test {
    @IsTest
    static void getStylesToInject(){
        List<CSS_Injector__mdt> styles = CSS_Injector_Controller.getStylesToInject();
        System.assertNotEquals(null, styles);
    }
}