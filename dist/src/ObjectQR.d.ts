/**
 * Bitxor Community 2022
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { QRCode, QRCodeDataSchema, QRCodeInterface } from '../index';
import { INetworkType } from "./sdk/INetworkType";
declare class ObjectQR extends QRCode implements QRCodeInterface {
    readonly object: object;
    /**
     * The network type.
     * @var {NetworkType}
     */
    readonly networkType: INetworkType;
    /**
     * The network generation hash.
     * @var {string}
     */
    readonly generationHash: string;
    /**
     * Construct a Object QR Code out of the
     * JSON object.
     *
     * @param   object          {Object}
     * @param   networkType     {INetworkType}
     * @param   generationHash         {string}
     */
    constructor(/**
                 * The object to display
                 * @var {Object}
                 */ object: object, 
    /**
     * The network type.
     * @var {NetworkType}
     */
    networkType: INetworkType, 
    /**
     * The network generation hash.
     * @var {string}
     */
    generationHash: string);
    /**
     * Parse a JSON QR code content into a ObjectQR
     * object.
     *
     * @param   json        {string}
     * @return  {ObjectQR}
     * @throws  {Error}     On empty `json` given.
     * @throws  {Error}     On missing `type` field value.
     * @throws  {Error}     On unrecognized QR code `type` field value.
     */
    static fromJSON(json: string): ObjectQR;
    /**
     * The `getTypeNumber()` method should return the
     * version number for QR codes of the underlying class.
     *
     * @see https://en.wikipedia.org/wiki/QR_code#Storage
     * @return {number}
     */
    getTypeNumber(): number;
    /**
     * The `getSchema()` method should return an instance
     * of a sub-class of QRCodeDataSchema which describes
     * the QR Code data.
     *
     * @return {QRCodeDataSchema}
     */
    getSchema(): QRCodeDataSchema;
}
export { ObjectQR };
