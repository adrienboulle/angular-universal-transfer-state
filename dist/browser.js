"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var transfer_state_1 = require("./transfer-state");
function getTransferState() {
    var win = window;
    var transferState = new transfer_state_1.TransferState();
    transferState.initialize(win[transfer_state_1.TransferState.KEY] || {});
    return transferState;
}
exports.getTransferState = getTransferState;
function noop() {
}
exports.noop = noop;
function getTransferInitializer(transferState) {
    return noop;
}
exports.getTransferInitializer = getTransferInitializer;
var BrowserTransferStateModule = (function () {
    function BrowserTransferStateModule() {
    }
    return BrowserTransferStateModule;
}());
BrowserTransferStateModule.decorators = [
    { type: core_1.NgModule, args: [{
                providers: [
                    {
                        provide: transfer_state_1.TransferState,
                        useFactory: getTransferState
                    },
                    {
                        provide: core_1.APP_INITIALIZER,
                        multi: true,
                        useFactory: getTransferInitializer,
                        deps: [transfer_state_1.TransferState]
                    }
                ]
            },] },
];
/** @nocollapse */
BrowserTransferStateModule.ctorParameters = function () { return []; };
exports.BrowserTransferStateModule = BrowserTransferStateModule;
var transfer_state_2 = require("./transfer-state");
exports.TransferState = transfer_state_2.TransferState;
exports.TransferHttp = transfer_state_2.TransferHttp;
exports.TransferHttpModule = transfer_state_2.TransferHttpModule;
//# sourceMappingURL=browser.js.map