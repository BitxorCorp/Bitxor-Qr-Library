import { Observable } from 'rxjs';
import { CorrectionLevel, QRCodeDataSchema, QRCodeInterface, QRCodeSettings, QRCodeStreamType, QRCodeType } from "../index";
import { INetworkType } from "./sdk/INetworkType";
declare abstract class QRCode implements QRCodeInterface {
    readonly type: QRCodeType;
    /**
     * The network ID.
     * @var {number}
     */
    readonly networkType: INetworkType;
    /**
     * The network generation hash.
     * @var {string}
     */
    readonly generationHash: string;
    /**
     * Whether the data is encrypted
     * @var {boolean}
     */
    readonly encrypted: boolean;
    /**
     * The base64 representation of the QR Code content.
     * @var {string}
     */
    readonly base64?: string;
    /**
     * Construct a QR Code instance out of its base64
     * representation and type.
     *
     * @param   type    {QRCodeType}
     * @param   base64  {string}
     */
    constructor(/**
                 * The QR Code type.
                 * @var {QRCodeType}
                 */ type: QRCodeType, 
    /**
     * The network ID.
     * @var {number}
     */
    networkType: INetworkType, 
    /**
     * The network generation hash.
     * @var {string}
     */
    generationHash: string, 
    /**
     * Whether the data is encrypted
     * @var {boolean}
     */
    encrypted?: boolean, 
    /**
     * The base64 representation of the QR Code content.
     * @var {string}
     */
    base64?: string);
    /**
     * The `getSchema()` method should return an instance
     * of a sub-class of QRCodeDataSchema which describes
     * the QR Code data.
     *
     * @return {QRCodeDataSchema}
     */
    abstract getSchema(): QRCodeDataSchema;
    /**
     * The `getTypeNumber()` method should return the
     * version number for QR codes of the underlying class.
     *
     * @return {number}
     */
    abstract getTypeNumber(): number;
    /**
     * The `getCorrectionLevel()` method should return the
     * QR Code correction level.
     *
     * Sub-classes may overload this method to provide with
     * a different correction level.
     *
     * @return {number}
     */
    getCorrectionLevel(): CorrectionLevel;
    /**
     * The `toJSON()` method should return the JSON
     * representation of the QR Code content.
     *
     * @return {string}
     */
    toJSON(): string;
    /**
     * Generate QRcode image Base64.
     *
     * The returned string can be put in the `src` attribute
     * of a `<img />` tag directly in HTML. The produced image
     * will be a PNG.
     *
     * @param   {QRCodeSettings}    settings     (Optional) Settings for generation
     * @return  {Observable<string>} Return image data in Base64.
     */
    toBase64(settings?: QRCodeSettings): Observable<string>;
    /**
     * Generate QRCode as a string. This permits to display SVG
     * format, Terminal format or utf-8 format.
     *
     * @see https://www.npmjs.com/package/qrcode
     * @param   {QRCodeSettings}    settings     (Optional) Settings for generation
     * @param   {QRCodeTextType}    streamType   (Optional) The QR Code text type, defaults to "terminal"
     * @return  {Observable<string>}
     */
    toString(settings?: QRCodeSettings, streamType?: QRCodeStreamType): Observable<string>;
    /**
     * Generate QRCode and return object.
     *
     * @see https://www.npmjs.com/package/qrcode
     * @param   {QRCodeSettings}    settings     (Optional) Settings for generation
     * @return  {Observable<string>}
     */
    toObject(settings?: QRCodeSettings): Observable<any>;
    /**
     * Generate QRCode to be printed on a `node-canvas`. This
     * is compatible with the browser and node.
     *
     * @see https://www.npmjs.com/package/qrcode
     * @see https://www.npmjs.com/package/canvas
     * @param   {QRCodeSettings}    settings     (Optional) Settings for generation
     * @return  {Observable<string>}
     */
    toCanvas(settings?: QRCodeSettings): Observable<string>;
}
export { QRCode };
