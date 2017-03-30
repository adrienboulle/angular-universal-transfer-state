import { RendererFactory2 } from '@angular/core';
import { PlatformState } from '@angular/platform-server';
import { TransferState } from './transfer-state';
export declare function isTag(tagName: string, node: any): boolean;
export declare class ServerTransferState extends TransferState {
    private state;
    private rendererFactory;
    constructor(state: PlatformState, rendererFactory: RendererFactory2);
    /**
     * Inject the State into the bottom of the <head>
     */
    inject(location?: string): void;
}
export declare class ServerTransferStateModule {
}
export { TransferState, TransferHttp, TransferHttpModule } from './transfer-state';
