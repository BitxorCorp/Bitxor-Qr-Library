import { Example } from './Example';
declare class ExampleExportAccountQR extends Example {
    /**
     * The `execute()` method should run the underlying
     * example business flow.
     *
     * This example uses an encryption password value of `password`
     * and following account details
     *
     *    Public Key: 9741183860ED711BD986A464004DB9A6D26B25F4CBB51F3B0FF1B220510B86B0
     *    Private Key: 749F1FF1972CD465CAB74566FF0AA021F846FBE3916ABB6A6C1373E962C76331
     *
     * @return {number}
     */
    execute(): Promise<number>;
}
export { ExampleExportAccountQR };
