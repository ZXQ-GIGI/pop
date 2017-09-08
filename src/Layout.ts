import  Element             from  "./Element";
import  ElementContent      from  "./ElementContent";

export default class Layout extends ElementContent {
    protected static readonly ROW = "row"

    public static readonly MAX_SIZE = 12

    public static readonly MIN_SIZE = 1


    cells   : Element[]
    keys    : {
        [key:string]:Element
    }

    constructor(cells : (string|number)[]){
        super()
        this.handler = new Element({
            className : Layout.ROW
        });
        this.cells = [];
        this.keys = {};
        let key:string = undefined
        for(let i = 0 ; i < cells.length ; i++ ){
            let cell = cells[i]
            if( typeof cell === "string"){
                key = cell;
            }else{
                let ele = this.createCell(cell);
                this.handler.append(ele);
                this.cells.push(ele);
                if( key ){
                    this.keys[key] = ele;
                    key = undefined;
                }
            }
        }
    }

    private static readonly CELL_CLASS_PREV = "col-xs-"

    private createCell(width:number):Element{
        let ele = new Element();
        let className = Layout.CELL_CLASS_PREV + width;
        ele.addClass(className);
        return ele;
    }

    index(index:number):Element{
        return this.cells[index];
    }

    key(key:string):Element{
        return this.keys[key];
    }

}
