import  Element     from  "./Element";
import  ElementContent      from  "./ElementContent";

export default class Input extends ElementContent {

    public static readonly TEXT     = "text"
    public static readonly PASSWARD = "password"
    public static readonly EMAIL    = "email"
    public static readonly NUMBER   = "number"

    public static defaultStyle  = "form-control"

    public static defaultType   = Input.TEXT

    constructor(option:{
        type? : string
        className? : string
        placeholder? : string
    }={
        type        : Input.defaultType,
        className   : Input.defaultStyle
    }){
        super();
        this.handler = new Element({
            tagName : "input",
            className : option.className || Input.defaultStyle
        })
        this.handler.getQuery() .prop("type"        , option.type || Input.defaultType)
                                .prop("placeholder" , option.placeholder || "")
    }
    value():string{
        return this.handler.getQuery().val();
    }
    setValue(value:string){
        this.handler.getQuery().val(value);
        return this;
    }
}
