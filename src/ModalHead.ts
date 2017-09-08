import  Element             from  "./Element";
import  ElementContent      from  "./ElementContent";

const MODAL_HEAD_CLASS      = "modal-header";

const MODAL_TITLE_CLASS     = "modal-title h4";

export default class ModalHead extends ElementContent {
    _title : string;
    title : Element;
    constructor() {
        super();
        this.handler = new Element({
            className : MODAL_HEAD_CLASS,
        });
        this.title = new Element({
            className : MODAL_TITLE_CLASS,
        });
        this.handler.append(this.title);
    }
    getTitle():string{
        return this._title
    }
    setTitle(title:string):ModalHead{
        this._title = title;
        this.title.text(title);
        return this;
    }

}
