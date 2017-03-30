import { TransferState } from './transfer-state';
export declare function getTransferState(): TransferState;
export declare function noop(): void;
export declare function getTransferInitializer(transferState: TransferState): any;
export declare class BrowserTransferStateModule {
}
export { TransferState, TransferHttp, TransferHttpModule } from './transfer-state';
