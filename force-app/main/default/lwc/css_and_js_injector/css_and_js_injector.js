import { LightningElement } from 'lwc';
import getStylesToInjectController from '@salesforce/apex/CSS_And_JS_Injector_Controller.getStylesToInject';
import {ShowToastEvent} from "lightning/platformShowToastEvent";

export default class Css_and_js_injector extends LightningElement {
    static renderMode = "light";
    elementStyles;

    async connectedCallback(){
        await this.getStylesToInject();
        this.injectStyles();
    }

    async getStylesToInject(){
        await getStylesToInjectController().then(styles =>{
            this.elementStyles = styles;
        }).catch(err =>{
            const evt = new ShowToastEvent({
                title: "An error occured when loading page styles",
                message: err.body.message,
                variant: "error",
            });
            this.dispatchEvent(evt);
        })
    }

    injectStyles(){
        let styles = document.createElement('style');
        let rules = ``;
        for(let style of this.elementStyles){
            if(style.Active__c){
                rules += style.Element_Selector__c + style.Element_CSS__c;
            }
        }
        styles.innerHTML = rules;
        document.head.appendChild(styles);
    }
}