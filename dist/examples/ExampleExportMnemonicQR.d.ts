import { Example } from './Example';
declare class ExampleExportMnemonicQR extends Example {
    /**
     * The `execute()` method should run the underlying
     * example business flow.
     *
     * This example uses an encryption password value of `password`
     * and following 24-words mnemonic pass phrase:
     *
     *    stumble shoot spawn bitter forest waste attitude chest
     *    square kite dawn photo twice message bargain trap
     *    spin vote lamp wire also either else pupil
     *
     * @return {number}
     */
    execute(): Promise<number>;
}
export { ExampleExportMnemonicQR };
