import  ModalHead   from  "./ModalHead";
import  ModalBody   from  "./ModalBody";
import  ModalFoot   from  "./ModalFoot";
import  Element     from  "./Element";

const MODAL_HANDLER_CLASS   = "modal";
const MODAL_HANDLER_FADE    = "fade";
const MODAL_DIALOG_CLASS    = "modal-dialog";
const MODAL_CONTENT_CLASS   = "modal-content";

export default class Modal {

    public static readonly SIZE_MD :string = "";
    public static readonly SIZE_LG :string = "modal-lg";
    public static readonly SIZE_SM :string = "modal-sm";

    private static readonly defaultModalOption = {
        fade : true,
        head : false,
        foot : false,
        size : Modal.SIZE_MD,
    }

    public  head    : ModalHead;
    public  body    : ModalBody;
    public  foot    : ModalFoot;

    private handler : Element;
    private content : Element;
    private dialog  : Element;

    private hideFns : ( ()=>void )[];
    private showFns : ( ()=>void )[];

    constructor( option : {
        fade? : boolean;
        head? : boolean;
        foot? : boolean;
        size? : string;
    } = Modal.defaultModalOption ) {
        let self = this;
        this.handler = new Element({
            className : MODAL_HANDLER_CLASS,
        });

        this.dialog = new Element({
            className : MODAL_DIALOG_CLASS,
        });

        this.content = new Element({
            className : MODAL_CONTENT_CLASS,
        });
        this.head    = new ModalHead();
        this.body    = new ModalBody();
        this.foot    = new ModalFoot();

        this.dialog .appendTo(this.handler)
                    .append(this.content);
        this.content.append(this.head.getElement())
                    .append(this.body.getElement())
                    .append(this.foot.getElement());
        if( option.fade == undefined || option.fade ){
            this.handler.addClass(MODAL_HANDLER_FADE);
        }
        this.dialog.addClass(option.size != undefined ?
                                            option.size :
                                            Modal.defaultModalOption.size );
        if(!option.head){
            this.head.getElement().hide();
        }
        if(!option.foot){
            this.foot.getElement().hide();
        }
        this.handler.on("shown.bs.modal",function(event:any){
            for(let i = 0; i < self.showFns.length; i++){
                self.showFns[i]();
            }
        });
        this.handler.on("hidden.bs.modal",function(event:any){
            for(let i = 0; i < self.hideFns.length; i++){
                self.hideFns[i]();
            }
            self.handler.getQuery().remove();
            self.handler = null;
        });
        self.hideFns = [];
        self.showFns = [];
    }
    getElement():Element{
        return this.handler
    }

    show():Modal{
        this.handler.appendToDocument();
        this.handler.getQuery().modal({
            show : true,
            backdrop : 'static',
            keyboard : false
        });
        return this;
    }
    hide():Modal{
        this.handler.getQuery().modal("hide");
        return this;
    }
    onShow( callback : ()=> void ):Modal{
        if(callback){
            this.showFns.push(callback);
        }
        return this;
    }
    onHide( callback : ()=> void ):Modal{
        if(callback){
            this.hideFns.push(callback);
        }
        return this;

    }

}
