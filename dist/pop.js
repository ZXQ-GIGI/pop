(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var ModalButton_1 = require("./ModalButton");
var Layout_1 = require("./Layout");
var IconPoper_1 = require("./IconPoper");
var Alert = (function (_super) {
    __extends(Alert, _super);
    function Alert(option) {
        var _this = _super.call(this, {
            title: option.title,
            buttons: [{
                    button: (new ModalButton_1["default"]({
                        text: option.okText || "确定"
                    })),
                    onclick: function () {
                        self.modal.hide();
                    }
                }],
            onclose: option.onok,
            icon: option.icon
        }) || this;
        var self = _this;
        var body = new Layout_1["default"]([
            "msg", Layout_1["default"].MAX_SIZE,
            "submsg", Layout_1["default"].MAX_SIZE,
        ]);
        _this.content.append(body.getElement());
        body.key("msg").addClass("h4")
            .text(option.msg);
        body.key("submsg").addClass("text-muted")
            .text(option.submsg);
        return _this;
    }
    Alert.prototype.Show = function () {
        this.modal.show();
        return this;
    };
    return Alert;
}(IconPoper_1.IconPoper));
exports["default"] = Alert;

},{"./IconPoper":7,"./Layout":9,"./ModalButton":12}],2:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var ModalButton_1 = require("./ModalButton");
var Layout_1 = require("./Layout");
var Icon_1 = require("./Icon");
var IconPoper_1 = require("./IconPoper");
var Confirm = (function (_super) {
    __extends(Confirm, _super);
    function Confirm(option) {
        var _this = _super.call(this, {
            title: option.title,
            buttons: [{
                    button: (new ModalButton_1["default"]({
                        text: option.okText || "确定"
                    })),
                    onclick: function () {
                        self.onclose = option.onok;
                        self.modal.hide();
                    }
                }, {
                    button: (new ModalButton_1["default"]({
                        text: option.cancelText || "取消",
                        style: ModalButton_1["default"].STYLE_DEFAULT
                    })),
                    onclick: function () {
                        self.onclose = option.oncancel;
                        self.modal.hide();
                    }
                }],
            onclose: function () {
                self.onclose && self.onclose();
            },
            icon: option.icon || Icon_1["default"].QUESTION
        }) || this;
        var self = _this;
        var body = new Layout_1["default"]([
            "msg", Layout_1["default"].MAX_SIZE,
            "submsg", Layout_1["default"].MAX_SIZE,
        ]);
        _this.content.append(body.getElement());
        body.key("msg").addClass("h4")
            .text(option.msg);
        body.key("submsg").addClass("text-muted")
            .text(option.submsg);
        return _this;
    }
    Confirm.prototype.Show = function () {
        this.modal.show();
        return this;
    };
    return Confirm;
}(IconPoper_1.IconPoper));
exports["default"] = Confirm;

},{"./Icon":6,"./IconPoper":7,"./Layout":9,"./ModalButton":12}],3:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Layout_1 = require("./Layout");
var Icon_1 = require("./Icon");
var IconPoper_1 = require("./IconPoper");
var Cover = (function (_super) {
    __extends(Cover, _super);
    function Cover(option) {
        var _this = _super.call(this, {
            buttons: [],
            onclose: option.onclose,
            onopen: option.onopen,
            icon: option.icon || Icon_1["default"].LOADING
        }) || this;
        var self = _this;
        _this.body = new Layout_1["default"]([
            "msg", Layout_1["default"].MAX_SIZE,
            "submsg", Layout_1["default"].MAX_SIZE,
        ]);
        _this.content.append(_this.body.getElement());
        _this.body.key("msg").addClass("h4")
            .text(option.msg);
        _this.body.key("submsg").addClass("text-muted")
            .text(option.submsg);
        return _this;
    }
    Cover.prototype.Show = function () {
        this.modal.show();
        return this;
    };
    Cover.prototype.Hide = function () {
        this.modal.hide();
        return this;
    };
    Cover.prototype.Update = function (option) {
        this.body.key("msg").text(option.msg);
        this.body.key("submsg").text(option.submsg);
        return this;
    };
    return Cover;
}(IconPoper_1.IconPoper));
exports["default"] = Cover;

},{"./Icon":6,"./IconPoper":7,"./Layout":9}],4:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var defaultElementOption = {
    tagName: "div",
    className: ""
};
var Element = (function () {
    function Element(option) {
        if (option === void 0) { option = defaultElementOption; }
        this.ele = window.document.createElement(option.tagName
            || defaultElementOption.tagName);
        this.ele.className = option.className
            || defaultElementOption.className;
        this.jquery = jQuery(this.ele);
    }
    Element.prototype.append = function (child) {
        if (child) {
            this.jquery.append(child.getQuery());
        }
        return this;
    };
    Element.prototype.appendTo = function (parent) {
        if (parent) {
            parent.getQuery().append(this.jquery);
        }
        return this;
    };
    Element.prototype.appendToDocument = function () {
        jQuery(window.document.body).append(this.jquery);
        return this;
    };
    Element.prototype.addClass = function (className) {
        this.jquery.addClass(className);
        return this;
    };
    Element.prototype.removeClass = function (className) {
        this.jquery.removeClass(className);
        return this;
    };
    Element.prototype.removeAllClass = function () {
        this.ele.className = "";
        return this;
    };
    Element.prototype.hasClass = function (className) {
        return this.jquery.hasClass(className);
    };
    Element.prototype.text = function (text) {
        text = (text || "").toString().replace(/</mg, "&lt;")
            .replace(/>/mg, "&gt;")
            .replace(/\n/mg, "<br />");
        this.jquery.html(text);
        return this;
    };
    Element.prototype.html = function (text) {
        this.jquery.html(text);
        return this;
    };
    Element.prototype.getNode = function () {
        return this.ele;
    };
    Element.prototype.getQuery = function () {
        return this.jquery;
    };
    Element.prototype.show = function () {
        this.jquery.show();
        return this;
    };
    Element.prototype.hide = function () {
        this.jquery.hide();
        return this;
    };
    Element.prototype.on = function (event, callback) {
        this.jquery.on(event, callback);
        return this;
    };
    return Element;
}());
exports["default"] = Element;

},{}],5:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var ElementContent = (function () {
    function ElementContent() {
    }
    ElementContent.prototype.getElement = function () {
        return this.handler;
    };
    return ElementContent;
}());
exports["default"] = ElementContent;

},{}],6:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Element_1 = require("./Element");
var ElementContent_1 = require("./ElementContent");
var Icon = (function (_super) {
    __extends(Icon, _super);
    function Icon(option) {
        if (option === void 0) { option = {
            style: Icon.SUCCESS
        }; }
        var _this = _super.call(this) || this;
        _this.handler = new Element_1["default"]({
            tagName: "i",
            className: option.style || Icon.defaultStyle
        });
        return _this;
    }
    return Icon;
}(ElementContent_1["default"]));
Icon.SUCCESS = "fa fa-3x text-success fa-check-circle-o";
Icon.QUESTION = "fa fa-3x text-warning fa-question-circle-o";
Icon.ERROR = "fa fa-3x text-danger fa-times-circle-o";
Icon.WRITE = "fa fa-3x text-default fa-pencil-square-o";
Icon.LOADING = "fa fa-3x text-success fa-spinner fa-pulse fa-fw";
Icon.defaultStyle = Icon.SUCCESS;
exports["default"] = Icon;

},{"./Element":4,"./ElementContent":5}],7:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Layout_1 = require("./Layout");
var Icon_1 = require("./Icon");
var Poper_1 = require("./Poper");
var IconPoper = (function (_super) {
    __extends(IconPoper, _super);
    function IconPoper(option) {
        var _this = _super.call(this, option) || this;
        var supercontent = _this.content;
        var self = _this;
        var row = new Layout_1["default"]([
            "icon", 3,
            "body", 9,
        ]);
        var icon = new Icon_1["default"]({
            style: option.icon || Icon_1["default"].SUCCESS
        });
        _this.icon = row.key("icon");
        _this.content = row.key("body");
        _this.icon.append(icon.getElement())
            .addClass("text-right");
        supercontent.append(row.getElement());
        return _this;
    }
    IconPoper.prototype.Show = function () {
        this.modal.show();
        return this;
    };
    return IconPoper;
}(Poper_1.Poper));
exports.IconPoper = IconPoper;

},{"./Icon":6,"./Layout":9,"./Poper":15}],8:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Element_1 = require("./Element");
var ElementContent_1 = require("./ElementContent");
var Input = (function (_super) {
    __extends(Input, _super);
    function Input(option) {
        if (option === void 0) { option = {
            type: Input.defaultType,
            className: Input.defaultStyle
        }; }
        var _this = _super.call(this) || this;
        _this.handler = new Element_1["default"]({
            tagName: "input",
            className: option.className || Input.defaultStyle
        });
        _this.handler.getQuery().prop("type", option.type || Input.defaultType)
            .prop("placeholder", option.placeholder || "");
        return _this;
    }
    Input.prototype.value = function () {
        return this.handler.getQuery().val();
    };
    Input.prototype.setValue = function (value) {
        this.handler.getQuery().val(value);
        return this;
    };
    return Input;
}(ElementContent_1["default"]));
Input.TEXT = "text";
Input.PASSWARD = "password";
Input.EMAIL = "email";
Input.NUMBER = "number";
Input.defaultStyle = "form-control";
Input.defaultType = Input.TEXT;
exports["default"] = Input;

},{"./Element":4,"./ElementContent":5}],9:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Element_1 = require("./Element");
var ElementContent_1 = require("./ElementContent");
var Layout = (function (_super) {
    __extends(Layout, _super);
    function Layout(cells) {
        var _this = _super.call(this) || this;
        _this.handler = new Element_1["default"]({
            className: Layout.ROW
        });
        _this.cells = [];
        _this.keys = {};
        var key = undefined;
        for (var i = 0; i < cells.length; i++) {
            var cell = cells[i];
            if (typeof cell === "string") {
                key = cell;
            }
            else {
                var ele = _this.createCell(cell);
                _this.handler.append(ele);
                _this.cells.push(ele);
                if (key) {
                    _this.keys[key] = ele;
                    key = undefined;
                }
            }
        }
        return _this;
    }
    Layout.prototype.createCell = function (width) {
        var ele = new Element_1["default"]();
        var className = Layout.CELL_CLASS_PREV + width;
        ele.addClass(className);
        return ele;
    };
    Layout.prototype.index = function (index) {
        return this.cells[index];
    };
    Layout.prototype.key = function (key) {
        return this.keys[key];
    };
    return Layout;
}(ElementContent_1["default"]));
Layout.ROW = "row";
Layout.MAX_SIZE = 12;
Layout.MIN_SIZE = 1;
Layout.CELL_CLASS_PREV = "col-xs-";
exports["default"] = Layout;

},{"./Element":4,"./ElementContent":5}],10:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var ModalHead_1 = require("./ModalHead");
var ModalBody_1 = require("./ModalBody");
var ModalFoot_1 = require("./ModalFoot");
var Element_1 = require("./Element");
var MODAL_HANDLER_CLASS = "modal";
var MODAL_HANDLER_FADE = "fade";
var MODAL_DIALOG_CLASS = "modal-dialog";
var MODAL_CONTENT_CLASS = "modal-content";
var Modal = (function () {
    function Modal(option) {
        if (option === void 0) { option = Modal.defaultModalOption; }
        var self = this;
        this.handler = new Element_1["default"]({
            className: MODAL_HANDLER_CLASS
        });
        this.dialog = new Element_1["default"]({
            className: MODAL_DIALOG_CLASS
        });
        this.content = new Element_1["default"]({
            className: MODAL_CONTENT_CLASS
        });
        this.head = new ModalHead_1["default"]();
        this.body = new ModalBody_1["default"]();
        this.foot = new ModalFoot_1["default"]();
        this.dialog.appendTo(this.handler)
            .append(this.content);
        this.content.append(this.head.getElement())
            .append(this.body.getElement())
            .append(this.foot.getElement());
        if (option.fade == undefined || option.fade) {
            this.handler.addClass(MODAL_HANDLER_FADE);
        }
        this.dialog.addClass(option.size != undefined ?
            option.size :
            Modal.defaultModalOption.size);
        if (!option.head) {
            this.head.getElement().hide();
        }
        if (!option.foot) {
            this.foot.getElement().hide();
        }
        this.handler.on("shown.bs.modal", function (event) {
            for (var i = 0; i < self.showFns.length; i++) {
                self.showFns[i]();
            }
        });
        this.handler.on("hidden.bs.modal", function (event) {
            for (var i = 0; i < self.hideFns.length; i++) {
                self.hideFns[i]();
            }
            self.handler.getQuery().remove();
            self.handler = null;
        });
        self.hideFns = [];
        self.showFns = [];
    }
    Modal.prototype.getElement = function () {
        return this.handler;
    };
    Modal.prototype.show = function () {
        this.handler.appendToDocument();
        this.handler.getQuery().modal({
            show: true,
            backdrop: 'static',
            keyboard: false
        });
        return this;
    };
    Modal.prototype.hide = function () {
        this.handler.getQuery().modal("hide");
        return this;
    };
    Modal.prototype.onShow = function (callback) {
        if (callback) {
            this.showFns.push(callback);
        }
        return this;
    };
    Modal.prototype.onHide = function (callback) {
        if (callback) {
            this.hideFns.push(callback);
        }
        return this;
    };
    return Modal;
}());
Modal.SIZE_MD = "";
Modal.SIZE_LG = "modal-lg";
Modal.SIZE_SM = "modal-sm";
Modal.defaultModalOption = {
    fade: true,
    head: false,
    foot: false,
    size: Modal.SIZE_MD
};
exports["default"] = Modal;

},{"./Element":4,"./ModalBody":11,"./ModalFoot":13,"./ModalHead":14}],11:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Element_1 = require("./Element");
var ElementContent_1 = require("./ElementContent");
var MODAL_BODY_CLASS = "modal-body";
var ModalBody = (function (_super) {
    __extends(ModalBody, _super);
    function ModalBody() {
        var _this = _super.call(this) || this;
        _this.handler = new Element_1["default"]({
            className: MODAL_BODY_CLASS
        });
        return _this;
    }
    return ModalBody;
}(ElementContent_1["default"]));
exports["default"] = ModalBody;

},{"./Element":4,"./ElementContent":5}],12:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Element_1 = require("./Element");
var ElementContent_1 = require("./ElementContent");
var ModalButton = (function (_super) {
    __extends(ModalButton, _super);
    function ModalButton(option) {
        var _this = _super.call(this) || this;
        _this.handler = new Element_1["default"]();
        _this.handler.addClass(ModalButton.default_class)
            .addClass(option.style != undefined
            ? option.style
            : ModalButton.default_style)
            .addClass(option.size != undefined
            ? option.size
            : ModalButton.default_size);
        _this.handler.text(option.text);
        return _this;
    }
    return ModalButton;
}(ElementContent_1["default"]));
ModalButton.STYLE_INFO = "btn-info ";
ModalButton.STYLE_SUCCESS = "btn-success ";
ModalButton.STYLE_WARNING = "btn-warning ";
ModalButton.STYLE_DANGER = "btn-danger ";
ModalButton.STYLE_PRIMARY = "btn-primary ";
ModalButton.STYLE_DEFAULT = "btn-default ";
ModalButton.STYLE_LINK = "btn-link ";
ModalButton.SIZE_LG = "btn-lg ";
ModalButton.SIZE_MD = "";
ModalButton.SIZE_SM = "btn-sm ";
ModalButton.SIZE_XS = "btn-xs ";
ModalButton.default_class = "btn ";
ModalButton.default_style = ModalButton.STYLE_PRIMARY;
ModalButton.default_size = ModalButton.SIZE_SM;
exports["default"] = ModalButton;

},{"./Element":4,"./ElementContent":5}],13:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Element_1 = require("./Element");
var ElementContent_1 = require("./ElementContent");
var MODAL_FOOT_CLASS = "modal-footer";
var ModalFoot = (function (_super) {
    __extends(ModalFoot, _super);
    function ModalFoot() {
        var _this = _super.call(this) || this;
        _this.handler = new Element_1["default"]({
            className: MODAL_FOOT_CLASS
        });
        return _this;
    }
    ModalFoot.prototype.addButton = function (option) {
        this.handler.append(option.button.getElement());
        if (option.onclick) {
            option.button.getElement().on("click", option.onclick);
        }
        return this;
    };
    return ModalFoot;
}(ElementContent_1["default"]));
exports["default"] = ModalFoot;

},{"./Element":4,"./ElementContent":5}],14:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Element_1 = require("./Element");
var ElementContent_1 = require("./ElementContent");
var MODAL_HEAD_CLASS = "modal-header";
var MODAL_TITLE_CLASS = "modal-title h4";
var ModalHead = (function (_super) {
    __extends(ModalHead, _super);
    function ModalHead() {
        var _this = _super.call(this) || this;
        _this.handler = new Element_1["default"]({
            className: MODAL_HEAD_CLASS
        });
        _this.title = new Element_1["default"]({
            className: MODAL_TITLE_CLASS
        });
        _this.handler.append(_this.title);
        return _this;
    }
    ModalHead.prototype.getTitle = function () {
        return this._title;
    };
    ModalHead.prototype.setTitle = function (title) {
        this._title = title;
        this.title.text(title);
        return this;
    };
    return ModalHead;
}(ElementContent_1["default"]));
exports["default"] = ModalHead;

},{"./Element":4,"./ElementContent":5}],15:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var Modal_1 = require("./Modal");
var Poper = (function () {
    function Poper(option) {
        var self = this;
        this.modal = new Modal_1["default"]({
            foot: !!option.buttons.length,
            head: !!option.title,
            fade: true
        });
        if (!!option.title) {
            this.modal.head.setTitle(option.title);
        }
        this.modal.onHide(option.onclose);
        this.modal.onShow(option.onopen);
        for (var i = 0; i < option.buttons.length; i++) {
            this.modal.foot.addButton(option.buttons[i]);
        }
        this.content = this.modal.body.getElement();
    }
    Poper.prototype.Show = function () {
        this.modal.show();
        return this;
    };
    return Poper;
}());
exports.Poper = Poper;

},{"./Modal":10}],16:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var ModalButton_1 = require("./ModalButton");
var Layout_1 = require("./Layout");
var Icon_1 = require("./Icon");
var Input_1 = require("./Input");
var IconPoper_1 = require("./IconPoper");
var Prompt = (function (_super) {
    __extends(Prompt, _super);
    function Prompt(option) {
        var _this = _super.call(this, {
            title: option.title,
            buttons: [{
                    button: (new ModalButton_1["default"]({
                        text: option.okText || "确定"
                    })),
                    onclick: function () {
                        var info = self.input.value();
                        self.onclose = function () {
                            option.onok(info);
                        };
                        self.modal.hide();
                    }
                }, {
                    button: (new ModalButton_1["default"]({
                        text: option.cancelText || "取消",
                        style: ModalButton_1["default"].STYLE_DEFAULT
                    })),
                    onclick: function () {
                        self.onclose = option.oncancel;
                        self.modal.hide();
                    }
                }],
            onclose: function () {
                self.onclose && self.onclose();
            },
            icon: option.icon || Icon_1["default"].WRITE
        }) || this;
        var self = _this;
        var body = new Layout_1["default"]([
            "msg", Layout_1["default"].MAX_SIZE,
            "input", Layout_1["default"].MAX_SIZE,
            "submsg", Layout_1["default"].MAX_SIZE,
        ]);
        _this.content.append(body.getElement());
        _this.input = new Input_1["default"]({
            placeholder: option.placeholder || ""
        });
        _this.input.setValue(option.defaultValue || "");
        body.key("msg").addClass("h4")
            .text(option.msg);
        body.key("input").append(_this.input.getElement());
        body.key("submsg").addClass("text-muted")
            .text(option.submsg);
        return _this;
    }
    Prompt.prototype.Show = function () {
        this.modal.show();
        return this;
    };
    return Prompt;
}(IconPoper_1.IconPoper));
exports["default"] = Prompt;

},{"./Icon":6,"./IconPoper":7,"./Input":8,"./Layout":9,"./ModalButton":12}],17:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var Alert_1 = require("./Alert");
var Confirm_1 = require("./Confirm");
var Prompt_1 = require("./Prompt");
var Cover_1 = require("./Cover");
var Icon_1 = require("./Icon");
var ModalButton_1 = require("./ModalButton");
var Pop = {
    Icon: Icon_1["default"],
    ModalButton: ModalButton_1["default"],
    Alert: Alert_1["default"],
    Confirm: Confirm_1["default"],
    Prompt: Prompt_1["default"],
    Cover: Cover_1["default"],
    alert: function (opt) {
        return new Alert_1["default"](opt).Show();
    },
    confirm: function (opt) {
        return new Confirm_1["default"](opt).Show();
    },
    prompt: function (opt) {
        return new Prompt_1["default"](opt).Show();
    },
    cover: function (opt) {
        return new Cover_1["default"](opt).Show();
    }
};
if (!window.define) {
    window.pop = Pop;
}
exports["default"] = Pop;

},{"./Alert":1,"./Confirm":2,"./Cover":3,"./Icon":6,"./ModalButton":12,"./Prompt":16}]},{},[17])