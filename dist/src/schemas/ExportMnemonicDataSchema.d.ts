import { MnemonicQR, QRCodeDataSchema } from '../../index';
/**
 * Class `ExportMnemonicDataSchema` describes an export
 * account QR code data schema.
 *
 * @since 0.3.2
 */
declare class ExportMnemonicDataSchema extends QRCodeDataSchema {
    constructor();
    /**
     * The `getData()` method returns an object
     * that will be stored in the `data` field of
     * the underlying QR Code JSON content.
     *
     * @return {any}
     */
    getData(qr: MnemonicQR): any;
    /**
     * Parse a JSON QR code content into a MnemonicQR
     * object.
     *
     * @param   json        {string}
     * @param   password    {string=} Optional password
     * @return  {MnemonicQR}
     * @throws  {Error}     On empty `json` given.
     * @throws  {Error}     On missing `type` field value.
     * @throws  {Error}     On unrecognized QR code `type` field value.
     * @throws  {Error}     On invalid password.
     */
    static parse(json: string, password?: string): MnemonicQR;
}
export { ExportMnemonicDataSchema };
