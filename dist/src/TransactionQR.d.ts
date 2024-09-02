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
import { INetworkType, QRCode, QRCodeDataSchema, QRCodeInterface, QRCodeType } from '../index';
import { ITransaction } from "./sdk";
declare class TransactionQR extends QRCode implements QRCodeInterface {
    readonly transaction: ITransaction;
    /**
     * The network type.
     * @var {NetworkType}
     */
    readonly networkType: INetworkType;
    /**
     * The chain Id.
     * @var {string}
     */
    readonly generationHash: string;
    /**
     * The QR Code Type
     *
     * @var {QRCodeType}
     */
    readonly type: QRCodeType;
    /**
     * Construct a Transaction Request QR Code out of the
     * bitxor-sdk Transaction instance.
     *
     * @param   transaction     {Transaction}
     * @param   networkType     {NetworkType}
     * @param   generationHash         {string}
     */
    constructor(/**
                 * The transaction for the request.
                 * @var {Transaction}
                 */ transaction: ITransaction, 
    /**
     * The network type.
     * @var {NetworkType}
     */
    networkType: INetworkType, 
    /**
     * The chain Id.
     * @var {string}
     */
    generationHash: string, 
    /**
     * The QR Code Type
     *
     * @var {QRCodeType}
     */
    type?: QRCodeType);
    /**
     * Parse a JSON QR code content into a TransactionQR
     * object.
     *
     * @param   json        {string}
     * @param   transactionCreateFromPayload the transaction parser that creates a transaction from a binary payload.
     * @return  {TransactionQR}
     * @throws  {Error}     On empty `json` given.
     * @throws  {Error}     On missing `type` field value.
     * @throws  {Error}     On unrecognized QR code `type` field value.
     */
    static fromJSON(json: string, transactionCreateFromPayload: (payload: string) => ITransaction): TransactionQR;
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
export { TransactionQR };
