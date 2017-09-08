import ModalButton  from "./ModalButton"
import Layout       from "./Layout"
import Icon       from "./Icon"
import ElementContent       from "./ElementContent"
import {IconPoper}  from "./IconPoper"


export default class Cover extends IconPoper{
    private body : Layout
    constructor(option:{
        msg         : string
        submsg?     : string
        onopen?     : ()=>void
        onclose?    : ()=>void
        icon?       : string
    }){
        super({
            buttons : [],
            onclose : option.onclose,
            onopen : option.onopen,
            icon : option.icon || Icon.LOADING,
        });
        let self = this;
        this.body = new Layout([
            "msg"   , Layout.MAX_SIZE,
            "submsg", Layout.MAX_SIZE,
        ]);

        this.content.append(this.body.getElement());

        this.body.key("msg")     .addClass("h4")
                            .text(option.msg);
        this.body.key("submsg")  .addClass("text-muted")
                            .text(option.submsg);

    }
    Show():Cover{
        this.modal.show();
        return this;
    }
    Hide():Cover{
        this.modal.hide();
        return this;
    }
    Update(option:{
        msg?         : string
        submsg?     : string
    }):Cover{
        this.body.key("msg").text(option.msg);
        this.body.key("submsg").text(option.submsg);
        return this;
    }
}
