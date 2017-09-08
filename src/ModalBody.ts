import  Element     from  "./Element";
import  ElementContent      from  "./ElementContent";

const MODAL_BODY_CLASS   = "modal-body";

export default class ModalBody extends ElementContent{

    constructor() {
        super();
        this.handler = new Element({
            className : MODAL_BODY_CLASS,
        });
    }

}
