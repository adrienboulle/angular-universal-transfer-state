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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_server_1 = require("@angular/platform-server");
var transfer_state_1 = require("./transfer-state");
function isTag(tagName, node) {
    return node.type === 'tag' && node.name === tagName;
}
exports.isTag = isTag;
var ServerTransferState = (function (_super) {
    __extends(ServerTransferState, _super);
    function ServerTransferState(state, rendererFactory) {
        var _this = _super.call(this) || this;
        _this.state = state;
        _this.rendererFactory = rendererFactory;
        return _this;
    }
    /**
     * Inject the State into the bottom of the <head>
     */
    ServerTransferState.prototype.inject = function (location) {
        try {
            var document_1 = this.state.getDocument();
            var transferStateString = JSON.stringify(this.toJson());
            var renderer = this.rendererFactory.createRenderer(document_1, {
                id: '-1',
                encapsulation: core_1.ViewEncapsulation.None,
                styles: [],
                data: {}
            });
            var rootNode = undefined;
            var bodyNode = undefined;
            var headNode = undefined;
            // let titleNode: any = undefined;
            for (var i = 0; i < document_1.childNodes.length; ++i) {
                var child = document_1.childNodes[i];
                if (isTag('html', child)) {
                    rootNode = child;
                    break;
                }
            }
            if (!rootNode) {
                rootNode = document_1;
            }
            for (var i = 0; i < rootNode.childNodes.length; ++i) {
                var child = rootNode.childNodes[i];
                if (isTag('head', child)) {
                    headNode = child;
                }
                if (isTag('body', child)) {
                    bodyNode = child;
                }
            }
            var body = location === 'head' ? headNode : bodyNode;
            var script = renderer.createElement('script');
            renderer.setValue(script, "\ntry {\n  window['" + transfer_state_1.TransferState.KEY + "'] = " + transferStateString + "\n} catch (e) {\n  console.log('Angular Universal: There was a problem parsing the server data during rehydrate');\n}\n      ");
            renderer.appendChild(body, script);
            renderer.setAttribute(script, 'angular', 'universal');
            rootNode = undefined;
            bodyNode = undefined;
            headNode = undefined;
        }
        catch (e) {
            console.error(e);
        }
    };
    return ServerTransferState;
}(transfer_state_1.TransferState));
ServerTransferState.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
ServerTransferState.ctorParameters = function () { return [
    { type: platform_server_1.PlatformState, },
    { type: core_1.RendererFactory2, },
]; };
exports.ServerTransferState = ServerTransferState;
var ServerTransferStateModule = (function () {
    function ServerTransferStateModule() {
    }
    return ServerTransferStateModule;
}());
ServerTransferStateModule.decorators = [
    { type: core_1.NgModule, args: [{
                providers: [
                    { provide: transfer_state_1.TransferState, useClass: ServerTransferState }
                ]
            },] },
];
/** @nocollapse */
ServerTransferStateModule.ctorParameters = function () { return []; };
exports.ServerTransferStateModule = ServerTransferStateModule;
var transfer_state_2 = require("./transfer-state");
exports.TransferState = transfer_state_2.TransferState;
exports.TransferHttp = transfer_state_2.TransferHttp;
exports.TransferHttpModule = transfer_state_2.TransferHttpModule;
//# sourceMappingURL=server.js.map