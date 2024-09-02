import { Example } from './Example';
declare class ExampleRequestTransactionQR extends Example {
    /**
     * The `execute()` method should run the underlying
     * example business flow.
     *
     * This example uses an unsigned transfer transaction
     * with following details:
     *    - Recipient: namespaceId "bitxorcorp"
     *    - Tokens: 1 token with namespaceId "cat.currency" and absolute amount 1
     *    - Message: Empty
     *
     * @return {number}
     */
    execute(): Promise<number>;
}
export { ExampleRequestTransactionQR };
