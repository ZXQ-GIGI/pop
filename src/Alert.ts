import ModalButton  from "./ModalButton"
import Layout       from "./Layout"
import {IconPoper}  from "./IconPoper"


export default class Alert extends IconPoper{
    constructor(option:{
        title?      : string
        msg         : string
        submsg?     : string
        okText?  : string
        onok?    : ()=>void
        icon?       : string
    }){
        super({
            title : option.title,
            buttons : [{
                button : (new ModalButton({
                    text : option.okText || "确定",
                })),
                onclick : function(){
                    self.modal.hide()
                }
            }],
            onclose : option.onok,
            icon : option.icon,
        });
        let self = this;
        let body = new Layout([
            "msg"   , Layout.MAX_SIZE,
            "submsg", Layout.MAX_SIZE,
        ]);

        this.content.append(body.getElement());

        body.key("msg")     .addClass("h4")
                            .text(option.msg);
        body.key("submsg")  .addClass("text-muted")
                            .text(option.submsg);

    }
    Show():Alert{
        this.modal.show();
        return this;
    }
}
