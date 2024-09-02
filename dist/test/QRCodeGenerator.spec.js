"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
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
var chai_1 = require("chai");
var bitxor_sdk_1 = require("bitxor-sdk");
var bitxor_hd_wallets_1 = require("bitxor-hd-wallets");
// internal dependencies
var index_1 = require("../index");
var generationHash = '17FA4747F5014B50413CCF968749604D728D7065DC504291EEE556899A534CBB';
var networkType = bitxor_sdk_1.NetworkType.MIJIN_TEST;
describe('QRCodeGenerator -->', function () {
    describe('createExportObject() should', function () {
        it('use default values for network_id and chain_id', function () {
            // Arrange:
            var object = {};
            // Act:
            var objectQR = index_1.QRCodeGenerator.createExportObject(object, networkType, generationHash);
            // Assert:
            chai_1.expect(objectQR.networkType).to.be.equal(bitxor_sdk_1.NetworkType.MIJIN_TEST);
            chai_1.expect(objectQR.generationHash).to.not.be.undefined;
            chai_1.expect(objectQR.generationHash).to.have.lengthOf(64);
        });
        it('fill object property correctly with {test: test}', function () {
            // Arrange:
            var object = { test: "test" };
            // Act:
            var objectQR = index_1.QRCodeGenerator.createExportObject(object, networkType, generationHash);
            // Assert:
            chai_1.expect(objectQR.object).to.deep.equal(object);
        });
    });
    describe('createTransactionRequest() should', function () {
        it('generate correct Base64 representation for TransferTransaction', function () { return __awaiter(void 0, void 0, void 0, function () {
            var transfer, requestTx, actualBase64;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        transfer = bitxor_sdk_1.TransferTransaction.create(bitxor_sdk_1.Deadline.create(), bitxor_sdk_1.Address.createFromPublicKey('C5C55181284607954E56CD46DE85F4F3EF4CC713CC2B95000FA741998558D268', bitxor_sdk_1.NetworkType.MIJIN_TEST), [new bitxor_sdk_1.Token(new bitxor_sdk_1.NamespaceId('cat.currency'), bitxor_sdk_1.UInt64.fromUint(10000000))], bitxor_sdk_1.PlainMessage.create('Welcome to Bitxor!'), bitxor_sdk_1.NetworkType.MIJIN_TEST);
                        requestTx = index_1.QRCodeGenerator.createTransactionRequest(transfer, networkType, generationHash);
                        return [4 /*yield*/, requestTx.toBase64().toPromise()];
                    case 1:
                        actualBase64 = _a.sent();
                        // Assert:
                        chai_1.expect(actualBase64).to.not.be.equal('');
                        chai_1.expect(actualBase64.length).to.not.be.equal(0);
                        chai_1.expect(requestTx.toJSON()).to.have.lengthOf.below(2953);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('createAddContact() should', function () {
        it('generate correct Base64 representation for AddContact', function () { return __awaiter(void 0, void 0, void 0, function () {
            var name, account, createContact, actualBase64;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = 'test-contact-1';
                        account = bitxor_sdk_1.PublicAccount.createFromPublicKey('C5C55181284607954E56CD46DE85F4F3EF4CC713CC2B95000FA741998558D268', bitxor_sdk_1.NetworkType.MIJIN_TEST);
                        createContact = index_1.QRCodeGenerator.createAddContact(name, account.publicKey, networkType, generationHash);
                        return [4 /*yield*/, createContact.toBase64().toPromise()];
                    case 1:
                        actualBase64 = _a.sent();
                        // Assert:
                        chai_1.expect(actualBase64).to.not.be.equal('');
                        chai_1.expect(actualBase64.length).to.not.be.equal(0);
                        chai_1.expect(createContact.toJSON()).to.have.lengthOf.below(2953);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('createExportAccount() should', function () {
        it('generate correct Base64 representation for ExportAccount', function () { return __awaiter(void 0, void 0, void 0, function () {
            var account, exportAccount, actualBase64;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        account = bitxor_sdk_1.Account.createFromPrivateKey('F97AE23C2A28ECEDE6F8D6C447C0A10B55C92DDE9316CCD36C3177B073906978', bitxor_sdk_1.NetworkType.MIJIN_TEST);
                        exportAccount = index_1.QRCodeGenerator.createExportAccount(account.privateKey, networkType, generationHash, 'password');
                        return [4 /*yield*/, exportAccount.toBase64().toPromise()];
                    case 1:
                        actualBase64 = _a.sent();
                        // Assert:
                        chai_1.expect(actualBase64).to.not.be.equal('');
                        chai_1.expect(actualBase64.length).to.not.be.equal(0);
                        chai_1.expect(exportAccount.toJSON()).to.have.lengthOf.below(2953);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('createExportMnemonic() should', function () {
        it('generate correct Base64 representation for ExportMnemonic', function () { return __awaiter(void 0, void 0, void 0, function () {
            var mnemonic, exportMnemonic, actualBase64;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mnemonic = bitxor_hd_wallets_1.MnemonicPassPhrase.createRandom();
                        exportMnemonic = index_1.QRCodeGenerator.createExportMnemonic(mnemonic.plain, networkType, generationHash, 'password');
                        return [4 /*yield*/, exportMnemonic.toBase64().toPromise()];
                    case 1:
                        actualBase64 = _a.sent();
                        // Assert:
                        chai_1.expect(actualBase64).to.not.be.equal('');
                        chai_1.expect(actualBase64.length).to.not.be.equal(0);
                        chai_1.expect(exportMnemonic.toJSON()).to.have.lengthOf.below(2953);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('fromJSON() should', function () {
        it('Populate transaction data given TransactionQR JSON', function () {
            // Arrange:
            var transfer = bitxor_sdk_1.TransferTransaction.create(bitxor_sdk_1.Deadline.create(), bitxor_sdk_1.Address.createFromPublicKey('C5C55181284607954E56CD46DE85F4F3EF4CC713CC2B95000FA741998558D268', bitxor_sdk_1.NetworkType.MIJIN_TEST), [new bitxor_sdk_1.Token(new bitxor_sdk_1.NamespaceId('cat.currency'), bitxor_sdk_1.UInt64.fromUint(10000000))], bitxor_sdk_1.PlainMessage.create('Welcome to Bitxor!'), bitxor_sdk_1.NetworkType.MIJIN_TEST);
            var requestTx = index_1.QRCodeGenerator.createTransactionRequest(transfer, networkType, generationHash);
            var txJSON = requestTx.toJSON();
            // Act:
            var transactionObj = index_1.QRCodeGenerator.fromJSON(txJSON, bitxor_sdk_1.TransactionMapping.createFromPayload);
            // Assert:
            chai_1.expect(transactionObj.toJSON()).to.not.be.equal('');
            chai_1.expect(transactionObj.type).to.be.equal(index_1.QRCodeType.RequestTransaction);
            chai_1.expect(transactionObj.transaction.serialize()).to.be.equal(transfer.serialize());
        });
        it('Populate contact information given ContactQR JSON', function () {
            // Arrange:
            var name = 'test-contact-1';
            var account = bitxor_sdk_1.PublicAccount.createFromPublicKey('C5C55181284607954E56CD46DE85F4F3EF4CC713CC2B95000FA741998558D268', networkType);
            var createContact = index_1.QRCodeGenerator.createAddContact(name, account.publicKey, networkType, generationHash);
            var contactJSON = createContact.toJSON();
            // Act:
            var contactObj = index_1.QRCodeGenerator.fromJSON(contactJSON, bitxor_sdk_1.TransactionMapping.createFromPayload);
            // Assert:
            chai_1.expect(contactObj.toJSON()).to.not.be.equal('');
            chai_1.expect(contactObj.type).to.be.equal(index_1.QRCodeType.AddContact);
            chai_1.expect(contactObj.accountPublicKey).to.deep.equal(account.publicKey);
            chai_1.expect(contactObj.name).to.be.equal(name);
        });
        it('Populate account information given AccountQR JSON', function () {
            // Arrange:
            var account = bitxor_sdk_1.Account.createFromPrivateKey('F97AE23C2A28ECEDE6F8D6C447C0A10B55C92DDE9316CCD36C3177B073906978', bitxor_sdk_1.NetworkType.MIJIN_TEST);
            var exportAccount = index_1.QRCodeGenerator.createExportAccount(account.privateKey, networkType, generationHash, 'password');
            var actualObj = exportAccount.toJSON();
            // Act:
            var accountObj = index_1.QRCodeGenerator.fromJSON(actualObj, bitxor_sdk_1.TransactionMapping.createFromPayload, 'password');
            // Assert:
            chai_1.expect(accountObj.toJSON()).to.not.be.equal('');
            chai_1.expect(accountObj.type).to.be.equal(index_1.QRCodeType.ExportAccount);
            chai_1.expect(bitxor_sdk_1.Account.createFromPrivateKey(accountObj.accountPrivateKey, networkType)).to.deep.equal(account);
            chai_1.expect(accountObj.accountPrivateKey).to.be.equal('F97AE23C2A28ECEDE6F8D6C447C0A10B55C92DDE9316CCD36C3177B073906978');
        });
        it('Populate object given ObjectQR JSON', function () {
            // Arrange:
            var object = {
                key: "Value1",
                key2: "Value2"
            };
            var exportObject = index_1.QRCodeGenerator.createExportObject(object, networkType, generationHash);
            var actualObj = exportObject.toJSON();
            // Act:
            var objectObj = index_1.QRCodeGenerator.fromJSON(actualObj, bitxor_sdk_1.TransactionMapping.createFromPayload);
            // Assert:
            chai_1.expect(objectObj.toJSON()).to.not.be.equal('');
            chai_1.expect(objectObj.type).to.be.equal(index_1.QRCodeType.ExportObject);
            chai_1.expect(objectObj.object).to.deep.equal(object);
        });
        it('Populate mnemonic pass phrase given MnemonicQR JSON', function () {
            // Arrange:
            var mnemonic = bitxor_hd_wallets_1.MnemonicPassPhrase.createRandom();
            var exportMnemonic = index_1.QRCodeGenerator.createExportMnemonic(mnemonic.plain, networkType, generationHash, 'password');
            var actualObj = exportMnemonic.toJSON();
            // Act:
            var mnemonicObj = index_1.QRCodeGenerator.fromJSON(actualObj, bitxor_sdk_1.TransactionMapping.createFromPayload, 'password');
            // create mnemonic
            var exportedMnemonic = new bitxor_hd_wallets_1.MnemonicPassPhrase(mnemonicObj.mnemonicPlainText);
            // more content validation
            if (!exportedMnemonic.isValid()) {
                throw new Error('Invalid encrypted mnemonic pass phrase.');
            }
            // Assert:
            chai_1.expect(mnemonicObj.toJSON()).to.not.be.equal('');
            chai_1.expect(mnemonicObj.type).to.be.equal(index_1.QRCodeType.ExportMnemonic);
            chai_1.expect(exportedMnemonic).to.deep.equal(mnemonic);
            chai_1.expect(mnemonicObj.mnemonicPlainText).to.be.equal(mnemonic.plain);
        });
        it('Populate signed transaction QR', function () {
            // Arrange:
            var signedTransaction = new bitxor_sdk_1.SignedTransaction("B0000000000000008002CDB5CD04681FE26FA770968DC5144591BA15B994EBE9B1B6C72A493C3439770C069AF0786026CE271FB28125396606755DC8436DB9BB979080E61CFE4B0BF530A00F5788DC3025E7F7F6000AF50C7A91283AFB1324E0E5D1BB494339EDE2000000000198544120040000000000009DD664810900000098808E6DE3E834FC51CCB1A7F56D20628BD0F5B05265C2A400000100000000009EF30755E803F42C0000000000000000", "443931795E15914146B774AE550762046525AF94E2C8E32F8DDFA9194D89A567", "443931795E15914146B774AE550762046525AF94E2C8E32F8DDFA9194D89A567", bitxor_sdk_1.TransactionType.TRANSFER, bitxor_sdk_1.NetworkType.TEST_NET);
            var qr = new index_1.SignedTransactionQR(signedTransaction, bitxor_sdk_1.NetworkType.TEST_NET, "443931795E15914146B774AE550762046525AF94E2C8E32F8DDFA9194D89A567");
            var mapper = function (dto) { return new bitxor_sdk_1.SignedTransaction(dto.payload, dto.hash, dto.signerPublicKey, dto.type, dto.networkType); };
            var actualObj = qr.toJSON();
            // Act:
            var signedObj = index_1.QRCodeGenerator.fromJSON(actualObj, undefined, undefined, mapper);
            // more content validation
            if (!signedObj.singedTransaction) {
                throw new Error('Invalid signed transaction.');
            }
            // Assert:
            chai_1.expect(qr.singedTransaction.toDTO().payload).to.be.equal(signedTransaction.payload);
        });
        it('Populate cosignature signed transaction QR', function () {
            // Arrange:
            var signedTransaction = new bitxor_sdk_1.CosignatureSignedTransaction("BDCBB0E32AAC378AC04FAFE4D341E002E5DC5790F8E0EDFF65FDD8249A65F97D", "0FC21B9AE123CF186318AE312EFDA22634F6CF7D47324FF1731FA12AEF0481A40B449DB1F63814C57BB218496C8210F4561FE62F007139750923CB527A03BC0E", "7271588CCD1EB2F8E2FD70088CEA03D55C9275D7340DC5E5DDC756833CD04DFF");
            var qr = new index_1.CosignatureSignedTransactionQR(signedTransaction, bitxor_sdk_1.NetworkType.TEST_NET, "443931795E15914146B774AE550762046525AF94E2C8E32F8DDFA9194D89A567");
            var mapper = function (dto) { return new bitxor_sdk_1.CosignatureSignedTransaction(dto.parentHash, dto.signature, dto.signerPublicKey); };
            var actualObj = qr.toJSON();
            // Act:
            var signedObj = index_1.QRCodeGenerator.fromJSON(actualObj, undefined, undefined, undefined, mapper);
            // more content validation
            if (!signedObj.singedTransaction) {
                throw new Error('Invalid signed transaction.');
            }
            // Assert:
            chai_1.expect(qr.singedTransaction.signerPublicKey).to.be.equal(signedTransaction.signerPublicKey);
        });
    });
});
//# sourceMappingURL=QRCodeGenerator.spec.js.map