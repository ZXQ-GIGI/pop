import Element      from "./Element";
import ModalButton  from "./ModalButton"
import  ElementContent      from  "./ElementContent";

const MODAL_FOOT_CLASS   = "modal-footer";

export default class ModalFoot extends ElementContent{

    constructor() {
        super();
        this.handler = new Element({
            className : MODAL_FOOT_CLASS,
        });
    }

    addButton(option:{
        button      : ModalButton ;
        onclick?    : ()=>void ;
    }):ModalFoot{
        this.handler.append(option.button.getElement());
        if(option.onclick){
            option.button.getElement().on("click",option.onclick);
        }
        return this;
    }
}
