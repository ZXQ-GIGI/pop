import ModalButton  from "./ModalButton"
import Layout       from "./Layout"
import Icon         from "./Icon"
import Input        from "./Input"
import {IconPoper}  from "./IconPoper"

export default class Prompt extends IconPoper{
    private onclose : ()=>void
    private input : Input
    constructor(option:{
        title?          : string
        msg             : string
        submsg?         : string
        defaultValue?   : string
        placeholder?    : string
        okText?         : string
        cancelText?     : string
        onok?           : (info:string)=>void
        oncancel?       : ()=>void
        icon?           : string
    }){
        super({
            title : option.title,
            buttons : [{
                button : (new ModalButton({
                    text : option.okText || "确定",
                })),
                onclick : function(){
                    let info = self.input.value();
                    self.onclose = function(){
                        option.onok(info);
                    };
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
            icon : option.icon || Icon.WRITE,
        });
        let self = this;
        let body = new Layout([
            "msg"   , Layout.MAX_SIZE,
            "input" , Layout.MAX_SIZE,
            "submsg", Layout.MAX_SIZE,
        ]);

        this.content.append(body.getElement());

        this.input = new Input({
            placeholder : option.placeholder || ""
        });
        this.input.setValue(option.defaultValue || "");

        body.key("msg")     .addClass("h4")
                            .text(option.msg);
        body.key("input")   .append(this.input.getElement());
        body.key("submsg")  .addClass("text-muted")
                            .text(option.submsg);

    }
    Show():Prompt{
        this.modal.show();
        return this;
    }
}
