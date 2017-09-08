import Alert    from "./Alert";
import Confirm  from "./Confirm";
import Prompt   from "./Prompt";
import Cover    from "./Cover";
import Icon     from "./Icon";
import ModalButton     from "./ModalButton";

declare let window:any;

let Pop = {
    Icon : Icon,
    ModalButton : ModalButton,
    Alert   : Alert,
    Confirm : Confirm,
    Prompt  : Prompt,
    Cover   : Cover,

    alert : function(opt:any):Alert{
        return new Alert(opt).Show();
    },
    confirm : function(opt:any):Confirm{
        return new Confirm(opt).Show();
    },
    prompt : function(opt:any):Prompt{
        return new Prompt(opt).Show();
    },
    cover : function(opt:any):Cover{
        return new Cover(opt).Show();
    }
};
if(!window.define){
    window.pop = Pop;
}
export default Pop;
