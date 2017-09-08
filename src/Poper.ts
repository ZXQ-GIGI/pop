import Modal            from "./Modal"
import ModalButton      from "./ModalButton"
import Element          from "./Element"

export interface PoperIniter{
    title?      : string
    buttons?    : {
        button : ModalButton
        onclick : ()=>void
    }[]
    onclose?    : ()=>void
    onopen?     : ()=>void
}

export class Poper{
    protected modal : Modal
    protected content : Element
    constructor(option : PoperIniter){
        let self = this;
        this.modal = new Modal({
            foot : !!option.buttons.length,
            head : !!option.title,
            fade : true,
        });
        if(!!option.title){
            this.modal.head.setTitle(option.title);
        }

        this.modal.onHide(option.onclose);
        this.modal.onShow(option.onopen);
        for(let i = 0 ; i < option.buttons.length; i++){
            this.modal.foot.addButton(option.buttons[i]);
        }
        this.content = this.modal.body.getElement();
    }
    Show():Poper{
        this.modal.show();
        return this;
    }
}
