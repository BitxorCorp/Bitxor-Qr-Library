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
import { AccountQR, AddressQR, ContactQR, MnemonicQR, ObjectQR, QRCode, TransactionQR } from '../index';
import { INetworkType, ITransaction } from "./sdk";
import { ISignedTransaction } from "./sdk/ISignedTransaction";
/**
 * Class `QRCodeGenerator` describes a NIP-7 compliant QR Code
 * generator (factory).
 *
 * @since 0.2.0
 */
declare class QRCodeGenerator {
    /**
     * Factory/Singleton pattern, constructor is private.
     *
     * @access private
     */
    private constructor();
    /**
     * Create a JSON object QR Code from a JSON object.
     *
     * @see {ObjectQR}
     * @param   object          {Object}
     * @param   networkType     {NetworkType}
     * @param   generationHash         {string}
     */
    static createExportObject(object: object, networkType: INetworkType, generationHash: string): ObjectQR;
    /**
     * Create an Address QR Code from a contact name
     * and address.
     *
     * @see {AddressQR}
     * @param   name the name
     * @param   address     the account address
     * @param   networkType     {NetworkType}
     * @param   generationHash         {string}
     */
    static createExportAddress(name: string, address: string, networkType: INetworkType, generationHash: string): AddressQR;
    /**
     * Create a Contact QR Code from a contact name
     * and account.
     *
     * @see {ContactQR}
     * @param   name the name
     * @param   accountPublicKey     the account public key
     * @param   networkType     {NetworkType}
     * @param   generationHash         {string}
     */
    static createAddContact(name: string, accountPublicKey: string, networkType: INetworkType, generationHash: string): ContactQR;
    /**
     * Create an Account Export QR Code from an Account
     * instance, encrypted with given password.
     *
     * @see {AccountQR}
     * @param   accountPrivateKey    the account private key.
     * @param   networkType     {NetworkType}
     * @param   generationHash         {string}
     * @param   password        {string=}
     */
    static createExportAccount(accountPrivateKey: string, networkType: INetworkType, generationHash: string, password?: string): AccountQR;
    /**
     * Create a Transaction Request QR Code from a Transaction
     * instance.
     *
     * @see {TransactionQR}
     * @param   transaction     {Transaction}
     * @param   networkType     {NetworkType}
     * @param   generationHash         {string}
     */
    static createTransactionRequest(transaction: ITransaction, networkType: INetworkType, generationHash: string): TransactionQR;
    /**
     * Create a Mnemonic Export QR Code from a MnemonicPassPhrase
     * instance, encrypted with given password.
     *
     * @see {MnemonicQR}
     * @param   networkType     {NetworkType}
     * @param   generationHash         {string}
     * @param   password        {string=}
     */
    static createExportMnemonic(mnemonicPlainText: string, networkType: INetworkType, generationHash: string, password: string): MnemonicQR;
    /**
     * Parse a JSON QR code content into a sub-class
     * of QRCode.
     *
     * @param   json    {string}
     * @param   transactionCreateFromPayload the transaction factory to create ITransaction from a binary payload if the qr is a transaction based one.
     * @param   password to decrypt private keys.
     * @param signedTransactionCreateFromPayload
     * @param cosignatureSignedTransactionCreateFromPayload
     * @return  {QRCode}
     * @throws  {Error}     On empty `json` given.
     * @throws  {Error}     On missing `type` field value.
     * @throws  {Error}     On unrecognized QR code `type` field value.
     */
    static fromJSON(json: string, transactionCreateFromPayload: (payload: string) => ITransaction, password?: string, signedTransactionCreateFromPayload?: (payload: string) => ISignedTransaction, cosignatureSignedTransactionCreateFromPayload?: (payload: string) => any): QRCode;
}
export { QRCodeGenerator };
