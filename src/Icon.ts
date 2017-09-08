import  Element     from  "./Element";
import  ElementContent      from  "./ElementContent";

export default class Icon extends ElementContent {

    public static readonly SUCCESS  = "fa fa-3x text-success fa-check-circle-o"
    public static readonly QUESTION = "fa fa-3x text-warning fa-question-circle-o"
    public static readonly ERROR    = "fa fa-3x text-danger fa-times-circle-o"
    public static readonly WRITE    = "fa fa-3x text-default fa-pencil-square-o"
    public static readonly LOADING  = "fa fa-3x text-success fa-spinner fa-pulse fa-fw"

    public static defaultStyle = Icon.SUCCESS

    constructor(option:{
        style? : string
    }={
        style : Icon.SUCCESS
    }){
        super();
        this.handler = new Element({
            tagName : "i",
            className : option.style || Icon.defaultStyle
        })
    }
}
