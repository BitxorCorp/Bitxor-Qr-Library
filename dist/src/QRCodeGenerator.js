"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
// internal dependencies
var index_1 = require("../index");
/**
 * Class `QRCodeGenerator` describes a NIP-7 compliant QR Code
 * generator (factory).
 *
 * @since 0.2.0
 */
var QRCodeGenerator = /** @class */ (function () {
    /**
     * Factory/Singleton pattern, constructor is private.
     *
     * @access private
     */
    function QRCodeGenerator() {
    }
    /**
     * Create a JSON object QR Code from a JSON object.
     *
     * @see {ObjectQR}
     * @param   object          {Object}
     * @param   networkType     {NetworkType}
     * @param   generationHash         {string}
     */
    QRCodeGenerator.createExportObject = function (object, networkType, generationHash) {
        return new index_1.ObjectQR(object, networkType, generationHash);
    };
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
    QRCodeGenerator.createExportAddress = function (name, address, networkType, generationHash) {
        return new index_1.AddressQR(name, address, networkType, generationHash);
    };
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
    QRCodeGenerator.createAddContact = function (name, accountPublicKey, networkType, generationHash) {
        return new index_1.ContactQR(name, accountPublicKey, networkType, generationHash);
    };
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
    QRCodeGenerator.createExportAccount = function (accountPrivateKey, networkType, generationHash, password) {
        return new index_1.AccountQR(accountPrivateKey, networkType, generationHash, password);
    };
    /**
     * Create a Transaction Request QR Code from a Transaction
     * instance.
     *
     * @see {TransactionQR}
     * @param   transaction     {Transaction}
     * @param   networkType     {NetworkType}
     * @param   generationHash         {string}
     */
    QRCodeGenerator.createTransactionRequest = function (transaction, networkType, generationHash) {
        return new index_1.TransactionQR(transaction, networkType, generationHash);
    };
    /**
     * Create a Mnemonic Export QR Code from a MnemonicPassPhrase
     * instance, encrypted with given password.
     *
     * @see {MnemonicQR}
     * @param   networkType     {NetworkType}
     * @param   generationHash         {string}
     * @param   password        {string=}
     */
    QRCodeGenerator.createExportMnemonic = function (mnemonicPlainText, networkType, generationHash, password) {
        return new index_1.MnemonicQR(mnemonicPlainText, networkType, generationHash, password);
    };
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
    QRCodeGenerator.fromJSON = function (json, transactionCreateFromPayload, password, signedTransactionCreateFromPayload, cosignatureSignedTransactionCreateFromPayload) {
        if (!json.length) {
            throw new Error('JSON argument cannot be empty.');
        }
        var jsonObject;
        try {
            jsonObject = JSON.parse(json);
            if (!jsonObject.type) {
                throw new Error('Missing mandatory field with name "type".');
            }
        }
        catch (e) {
            // Invalid JSON provided, forward error
            throw new Error(e);
        }
        // We will use the `fromJSON` static implementation
        // of specialized QRCode classes (child classes).
        // An error will be thrown if the QRCodeType is not
        // recognized or invalid.
        switch (jsonObject.type) {
            // create a ContactQR from JSON
            case index_1.QRCodeType.AddContact:
                return index_1.ContactQR.fromJSON(json);
            // create a AddressQR from JSON
            case index_1.QRCodeType.ExportAddress:
                return index_1.AddressQR.fromJSON(json);
            // create an AccountQR from JSON
            case index_1.QRCodeType.ExportAccount:
                return index_1.AccountQR.fromJSON(json, password);
            // create a ObjectQR from JSON
            case index_1.QRCodeType.ExportObject:
                return index_1.ObjectQR.fromJSON(json);
            // create a CosignatureQR from JSON
            case index_1.QRCodeType.RequestCosignature:
                return index_1.CosignatureQR.fromJSON(json, transactionCreateFromPayload);
            // create a TransactionQR from JSON
            case index_1.QRCodeType.RequestTransaction:
                return index_1.TransactionQR.fromJSON(json, transactionCreateFromPayload);
            // create an MnemonicQR from JSON
            case index_1.QRCodeType.ExportMnemonic:
                return index_1.MnemonicQR.fromJSON(json, password);
            // create an SignedTransactionQR from JSON
            case index_1.QRCodeType.SignedTransaction:
                return index_1.SignedTransactionQR.fromJSON(json, signedTransactionCreateFromPayload);
            // create an SignedTransactionQR from JSON
            case index_1.QRCodeType.CosignatureSignedTransaction:
                return index_1.CosignatureSignedTransactionQR.fromJSON(json, cosignatureSignedTransactionCreateFromPayload);
            default:
                break;
        }
        throw new Error("Unrecognized QR Code 'type': '" + jsonObject.type + "'.");
    };
    return QRCodeGenerator;
}());
exports.QRCodeGenerator = QRCodeGenerator;
//# sourceMappingURL=QRCodeGenerator.js.map