import { Example } from './Example';
declare class ExampleAddContactQR extends Example {
    /**
     * The `execute()` method should run the underlying
     * example business flow.
     *
     * @return {number}
     */
    execute(): Promise<number>;
}
export { ExampleAddContactQR };
