declare let jQuery : any

let defaultElementOption = {
    tagName : "div",
    className : ""
}

export default class Element {
    private ele     : HTMLElement;
    private jquery  : any;
    constructor( option:{
        tagName?    : string ;
        className?  : string ;
    } = defaultElementOption ){
        this.ele = window.document.createElement(option.tagName
                                                || defaultElementOption.tagName);
        this.ele.className = option.className
                            || defaultElementOption.className;
        this.jquery = jQuery(this.ele);

    }
    append(child:Element):Element{
        if(child){
            this.jquery.append(child.getQuery());
        }
        return this;

    }
    appendTo(parent:Element):Element{
        if(parent){
            parent.getQuery().append(this.jquery);
        }
        return this;
    }
    appendToDocument():Element{
        jQuery(window.document.body).append(this.jquery);
        return this;
    }
    addClass(className:string):Element{
        this.jquery.addClass(className)
        return this;
    }
    removeClass(className:string):Element{
        this.jquery.removeClass(className)
        return this;
    }
    removeAllClass():Element{
        this.ele.className = "";
        return this;
    }
    hasClass(className:string):boolean{
        return this.jquery.hasClass(className);
    }
    text(text:string):Element{
        text = (text || "").toString()  .replace(/</mg,"&lt;")
                                .replace(/>/mg,"&gt;")
                                .replace(/\n/mg,"<br />");
        this.jquery.html(text);
        return this;
    }
    html(text:string){
        this.jquery.html(text);
        return this;
    }

    getNode ():any{
        return this.ele;
    }

    getQuery():any{
        return this.jquery;
    }
    show():Element{
        this.jquery.show();
        return this;
    }
    hide():Element{
        this.jquery.hide();
        return this;
    }
    on(event:string,callback:(event:any)=>void):Element{
        this.jquery.on(event,callback)
        return this
    }

}
