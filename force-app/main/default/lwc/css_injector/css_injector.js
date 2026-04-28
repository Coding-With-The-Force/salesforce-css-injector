import { LightningElement } from 'lwc';
import getStylesToInjectController from '@salesforce/apex/CSS_Injector_Controller.getStylesToInject';
import {ShowToastEvent} from "lightning/platformShowToastEvent";

const toastTitle = "An error occured when loading page styles";
const toastVariant = "error";

export default class Css_injector extends LightningElement {
    static renderMode = "light";
    cssToInject;

    async connectedCallback(){
        await this.getStylesToInject();
        this.injectStyles();
    }

    async getStylesToInject(){
        await getStylesToInjectController().then(styles =>{
            this.cssToInject = styles;
        }).catch(err =>{
            this.popToast(this.toastTitle, err.body.message, this.toastVariant);
        })
    }

    injectStyles(){
        let styleElement = document.createElement('style');
        let rules = ``;
        for(let style of this.cssToInject){
            if(style.Active__c){
                rules += style.Element_Selector__c + style.Element_CSS__c;
            }
        }
        styleElement.innerHTML = rules;
        document.head.appendChild(styleElement);
    }

    popToast(title, message, variant){
        const evt = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
        });
        this.dispatchEvent(evt);
    }
}