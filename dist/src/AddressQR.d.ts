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
declare class AddressQR extends QRCode implements QRCodeInterface {
    readonly name: string;
    /**
     * The account address.
     */
    readonly accountAddress: string;
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
     * Construct a Address QR Code out of the
     * symbol public key.
     *
     * @param name the address name.
     * @param   accountPublicKey         the public key
     * @param   networkType     {INetworkType}
     * @param   generationHash         {string}
     */
    constructor(/**
                 * The address name.
                 * @var {string}
                 */ name: string, 
    /**
     * The account address.
     */
    accountAddress: string, 
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
     * Parse a JSON QR code content into an AddressQR
     * object.
     *
     * @param   json        {string}
     * @return  {AddressQR}
     * @throws  {Error}     On empty `json` given.
     * @throws  {Error}     On missing `type` field value.
     * @throws  {Error}     On unrecognized QR code `type` field value.
     */
    static fromJSON(json: string): AddressQR;
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
export { AddressQR };
