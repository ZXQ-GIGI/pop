import ModalButton  from "./ModalButton"
import Layout       from "./Layout"
import Icon         from "./Icon"
import {IconPoper}  from "./IconPoper"

export default class Confirm extends IconPoper{
    private onclose : ()=>void
    constructor(option:{
        title?      : string
        msg         : string
        submsg?     : string
        okText?     : string
        cancelText? : string
        onok?       : ()=>void
        oncancel?   : ()=>void
        icon?       : string
    }){
        super({
            title : option.title,
            buttons : [{
                button : (new ModalButton({
                    text : option.okText || "确定",
                })),
                onclick : function(){
                    self.onclose = option.onok;
                    self.modal.hide();
                }
            },{
                button : (new ModalButton({
                    text : option.cancelText || "取消",
                    style : ModalButton.STYLE_DEFAULT,
                })),
                onclick : function(){
                    self.onclose = option.oncancel;
                    self.modal.hide();
                }
            }],
            onclose : function(){
                self.onclose && self.onclose();
            },
            icon : option.icon || Icon.QUESTION,
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
    Show():Confirm{
        this.modal.show();
        return this;
    }
}
