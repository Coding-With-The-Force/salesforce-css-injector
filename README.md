# The Salesforce CSS Injector

This lightning web component allows you to alter the out of the box Salesforce CSS within nearly any element in the page. All you have to do is find a good css selector, write the css, and then create a custom metadata setting record to represent your hawt new style updates. Tutorial video, setup gif, and additional information coming soon.

----

# When you should use the Salesforce CSS Injector and warnings about using it

While you can use the css injector however you want, my suggestion is to only use this LWC when there is absolutely no alternative simple option to have the UI present the way you want it. For instance, if you want to remove the "--None--" option within related lists, Salesforce still has not given you an easy way to remove that option (despite nearly a decade worth of complaints). Unless you fully customize your picklists you cannot remove the option, UNLESS you utilize the Salesforce CSS Injector LWC. So save this for when you absolutely need it to provide a simplistic UI update that would otherwise need a complex custom UI to be built to meet your needs.   

If you decide to use the Salesforce CSS Injector **YOU SHOULD KNOW IT IS A FRAGILE SOLUTION!!!** I have tried to make it less fragile by providing easy to update custom metadata records, however, what we are doing is finding HTML Element selectors within the page via the browser inspector, and using them to assist us in overriding the CSS for that page. Salesforce will inevitably update those HTML Element selectors, and there's nothing you can do to prevent it, and you are very unlikely to receive any warning about it, so your CSS Injector overrides may randomly stop working, at which point you have to update your custom metadata record's "Element Selecor" field (which we will go over more later) to get things working again. However, with all that said, I have done this for dozens of css overrides and they have stayed in place for YEARS with absolutely no updates required during that time, so the CSS selectors are not likely to change any time soon, unless you just get really unlucky. 


----

# Skills Required to Utilize the Salesforce CSS Injector

While the tutorial video for this component will go over both of these skills in some detail, to be able to use the Salesforce CSS Injector well, you will need basic knowledge of how to utilize your web browser's inspector as well as basic knowledge of how to write css. While I wish I could automate the detection of unique css selectors, and automatically write the css for you, that would be significantly more complicated, although these days you may be able to convince you AI tool of choice to assist you with it.   

Skills required (which we cover in detail in the tutorial video):   
1) How to use your browser's inspector
2) How to write basic css

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

# How to Setup CSS Injections via the CSS Injector Custom Metadata Type

To setup the CSS Injections via the CSS Injector Custom Metadata type, you'll need to do two things, first you'll need to find a unique css selector for the HTML element on the page you would like to alter the CSS for (you can do this vai the browser's inspector, which we'll go over more below), and then you will need to create a new record for the CSS Injector Custom Metadata Type and add the selector and the css for the selector to that record.    

