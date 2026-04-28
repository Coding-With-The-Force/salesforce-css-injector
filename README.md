# The Salesforce CSS Injector

This lightning web component allows you to alter the out of the box Salesforce CSS within nearly any element in the page. All you have to do is find a good css selector, write the css, and then create a custom metadata setting record to represent your hawt new style updates. Tutorial video, setup gif, and additional information coming soon.

----

# How to Setup the CSS Injector LWC in your Salesforce Org

After you install the CSS Injector into your org (either via the unlocked package or via the deploy button on this repo), I would suggest placing this component as a hidden option within your Salesforce app's utility bar so that the css injector travels with you on every page in your app. To add this as a hidden utility bar component, you can either follow the steps below, checkout the animated gif, or follow along in the video tutorial linked to this repo.   

Steps to add this LWC to a utility bar within your Salesforce apps below:   
1) Setup -> Quick Find -> App Manager   
2) Within the App Manager, find your app (or apps) you would like to update and click the down arrow to the right of your app and then select "Edit" from the drop down menu produced by the arrow
3) After you click "Edit", you will be on the App Settings page, on the app settings page click the "Utility Items (Desktop Only)" on the left
4) On the "Utility Items" page click the "Add Utility Item" button and search for "css_injector"
5) After selecting the "css_injector" you will be presented with a "PROPERTIES" panel. Within the properties panel you'll want to add the following properties:
     * Set the label field to an invisible character, if you are unsure how to create an invisible character using your keyboard, you can just copy one from the site located here <a href="https://www.editpad.org/tool/invisible-character">Invisible Character Tool</a>
     * Click the "x" to the right of the pre-selected icon, so that your "Icon" is set to "No icon selected"
     * Set "Panel Width" to 1   
     * Set "Panel Height" to 1    
     * Check the "Start Automatically" checkbox    
6) Click the "Save" button at the bottom of the page
7) You're done! The css_injector lwc will now automatically start doing its magic

----

# How to Setup CSS Injections via the Custom Metadata Setting

