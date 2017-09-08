import  Element     from  "./Element";
import  ElementContent      from  "./ElementContent";

export default class ModalButton  extends ElementContent {

    public static readonly  STYLE_INFO      = "btn-info "
    public static readonly  STYLE_SUCCESS   = "btn-success "
    public static readonly  STYLE_WARNING   = "btn-warning "
    public static readonly  STYLE_DANGER    = "btn-danger "
    public static readonly  STYLE_PRIMARY   = "btn-primary "
    public static readonly  STYLE_DEFAULT   = "btn-default "
    public static readonly  STYLE_LINK      = "btn-link "

    public static readonly  SIZE_LG         = "btn-lg "
    public static readonly  SIZE_MD         = ""
    public static readonly  SIZE_SM         = "btn-sm "
    public static readonly  SIZE_XS         = "btn-xs "

    public static           default_class   = "btn "
    public static           default_style   = ModalButton.STYLE_PRIMARY
    public static           default_size    = ModalButton.SIZE_SM

    constructor(option:{
        text            : string
        style?          : string
        size?           : string
    }){
        super();
        this.handler = new Element();
        this.handler.addClass(ModalButton.default_class)
                    .addClass(option.style != undefined
                                            ? option.style
                                            : ModalButton.default_style)
                    .addClass(option.size  != undefined
                                            ? option.size
                                            : ModalButton.default_size);
        this.handler.text(option.text);
    }

}
