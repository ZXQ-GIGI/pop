import Modal        from "./Modal"
import  Element     from  "./Element";

export default class ElementContent {
    handler : Element;

    constructor(){
    }
    
    getElement():Element{
        return this.handler;
    }
}
