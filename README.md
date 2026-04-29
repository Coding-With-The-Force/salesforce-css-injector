# The Salesforce CSS Injector

<p align="center">
<a href="https://githubsfdeploy.herokuapp.com?owner=Coding-With-The-Force&repo=salesforce-css-injector">
  <img alt="Deploy to Salesforce"
       src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/deploy.png">
</a>
<br/>
<a href="https://test.salesforce.com/packaging/installPackage.apexp?p0=04tg70000007RLFAA2">
<img alt="Deploy Unlocked Package to Prod" src="https://github.com/Coding-With-The-Force/Salesforce_Character_Counting_Component/blob/master/images/btn-install-unlocked-package-sandbox.png?raw=true">
</a>
<a style="padding-left: 10px" href="https://login.salesforce.com/packaging/installPackage.apexp?p0=04tg70000007RLFAA2">
<img alt="Deploy Unlocked Package to Prod" src="https://github.com/Coding-With-The-Force/Salesforce_Character_Counting_Component/blob/master/images/btn-install-unlocked-package-production.png?raw=true">
</a>
</p>


This lightning web component allows you to alter the out of the box Salesforce CSS within nearly any element in the page. All you have to do is find a good css selector, write the css, and then create a custom metadata setting record to represent your hawt new style updates. Tutorial video, setup gif, and additional information coming soon.

----

# When you should use the Salesforce CSS Injector and warnings about using it

While you can use the css injector however you want, my suggestion is to **ONLY use this LWC when there is absolutely no alternative simple option to have the UI present the way you want it.** For instance, if you want to remove the "--None--" option within related lists, Salesforce still has not given you an easy way to remove that option (despite nearly a decade worth of complaints). Unless you fully customize your picklists you cannot remove the option, UNLESS you utilize the Salesforce CSS Injector LWC. So save this for when you absolutely need it to provide a simplistic UI update that would otherwise need a complex custom UI to be built to meet your needs.   

If you decide to use the Salesforce CSS Injector **YOU SHOULD KNOW IT IS A FRAGILE SOLUTION!!!** I have tried to make it less fragile by providing easy to update custom metadata records, however, what we are doing is finding HTML Element selectors within the page via the browser inspector, and using them to assist us in overriding the CSS for that page. Salesforce will inevitably update those HTML Element selectors, and there's nothing you can do to prevent it, and you are very unlikely to receive any warning about it, so your CSS Injector overrides may randomly stop working, at which point you have to update your custom metadata record's "Element Selecor" field (which we will go over more later) to get things working again. However, with all that said, I have done this for dozens of css overrides and they have stayed in place for YEARS with absolutely no updates required during that time, so the CSS selectors are not likely to change any time soon, unless you just get really unlucky. 


----

# Skills Required to Utilize the Salesforce CSS Injector

While the tutorial video for this component will go over both of these skills in some detail, to be able to use the Salesforce CSS Injector well, you will need basic knowledge of how to utilize your web browser's inspector as well as basic knowledge of how to write css. While I wish I could automate the detection of unique css selectors, and automatically write the css for you, that would be significantly more complicated, although these days you may be able to convince you AI tool of choice to assist you with it.   

**Skills required (which we cover in detail in the tutorial video):**    

1) How to use your browser's inspector
2) How to write basic css

----

# How to Setup the CSS Injector LWC in your Salesforce Org

<div align="center">
    
<a href="https://www.youtube.com/watch?v=w3lfTh6y69A">
  <img src="https://img.youtube.com/vi/w3lfTh6y69A/0.jpg" width="100%" alt="How to Setup the CSS Injector - YouTube Tutorial" />
</a>  

<br/>

**Click the image above to watch a Video Tutorial on how to use the Salesforce CSS Injector**   


</div>


After you install the CSS Injector into your org (either via the unlocked package or via the deploy button on this repo), I would suggest placing this component as a hidden option within your Salesforce app's utility bar so that the css injector travels with you on every page in your app. To add this as a hidden utility bar component, you can either follow the steps below, checkout the animated gif, or follow along in the video tutorial linked to this repo.   

**Steps to add this LWC to a utility bar within your Salesforce apps below:**    

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

**Setup gif**   

![How to Setup the CSS Injector](https://github.com/Coding-With-The-Force/salesforce-css-injector/blob/main/instructional-gifs/App_Setup.gif?raw=true)   

----

# How to Setup CSS Injections via the CSS Injector Custom Metadata Type

To setup the CSS Injections via the CSS Injector Custom Metadata type, you'll need to do two things, first you'll need to find a unique css selector for the HTML element on the page you would like to alter the CSS for (you can do this vai the browser's inspector, which we'll go over more below), and then you will need to create a new record for the CSS Injector Custom Metadata Type and add the selector and the css for the selector to that record.    

**How to use the browser inspector to find css selectors**    

Before we get into the step by step instructions on how to do this, **it is IMPERATIVE that you utilize a unique selector to select the HTML element you are overriding the CSS for**. This is often in the form of a data-attribute on the HTML Element, not a class. Many elements in the HTML utilize the exact same class, so if you just override the CSS for an HTML element by using the class assigned to it, you are likely to unintentionally inject css into other HTML elements on the screen as well. So look for data attributes you can leverage, or use nested selections if there are no good data attributes.

**Steps to find a CSS Selector via the Browser Inspector:**   

1) First traverse to the page in your Salesforce org that you would like to update the CSS for   
2) Right click the page and choose the "Inspect" option, this should open a side panel (or potentially a modal) that should default to the "Elements" tab and show you the HTML in your page.   
3) In the top left corner of the Inspector side panel there is an icon that looks like an arrow with a dashed square around it. Click that icon.   
4) After you click that icon, click the area of the page in Salesforce that you would like to update the CSS for. After clicking the area of your salesforce page, the "Elements" tab should now be highlighting the HTML that represents that portion of the page.   
5) Look at that HTML and find attributes that you can use to uniquely identify your HTML element when setting up a CSS selector (this is often data attributes). Write down the names of those attributes.      
6) You can also use the "Styles" tab on the bottom half of your browser inspector to demo CSS changes before you make them. You just need to add the css to the "element.style{}" area of the inspector.    
7) That's it, now we just need to add the selectors and the styles to the CSS_Injector custom metadata type.   

**Steps to add a CSS Injector Custom Metadata Record**  

1) Go to Setup -> Quick Find -> Custom Metadata Types   
2) Click the "Manage Records" link to the left of the "CSS Injector" custom metadata type   
3) Click the "New" button at the top of the page   
4) Fill out the CSS Injector record with the following values:   
     * Set the "Label" field to whatever you want   
     * The "CSS Injector Name" should get auto-filled for you   
     * For the "Element Selector" field you need to add the CSS selectors you found when using the browser inspector. A good example would be the following: [data-target-selection-name="sfdc:RecordField.Case.Priority"] [data-value=""]     
     * For the "Active" field, set this to checked (true), if it is unchecked (false) then the CSS Injection will not be loaded into the page    
     * For the "Element CSS" add the CSS that you want to apply to your Element Selector. A good example would be: {display:none;}   
5) That's it, you're done! As long as your selector was correct, and your CSS is valid, the CSS Injector LWC should now update your page appropriately!    

**How to Create CSS Injectors gif**

![How to Setup the CSS Injector](https://github.com/Coding-With-The-Force/salesforce-css-injector/blob/main/instructional-gifs/How_To_Use.gif?raw=true)


