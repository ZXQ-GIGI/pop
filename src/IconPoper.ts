import ModalButton  from "./ModalButton"
import Layout       from "./Layout"
import Icon         from "./Icon"
import { Poper , PoperIniter } from "./Poper"
import Element      from "./Element"

export interface IconPoperIniter extends PoperIniter{
    icon?       : string
}

export class IconPoper extends Poper{
    protected icon : Element
    constructor(option:IconPoperIniter){
        super(option);
        var supercontent = this.content;
        let self = this;
        let row = new Layout([
            "icon",3,
            "body",9,
        ]);

        let icon = new Icon({
            style : option.icon || Icon.SUCCESS
        });
        this.icon = row.key("icon");
        this.content = row.key("body");
        this.icon   .append(icon.getElement())
                    .addClass("text-right");

        supercontent.append(row.getElement());
    }
    Show():IconPoper{
        this.modal.show();
        return this;
    }
}
