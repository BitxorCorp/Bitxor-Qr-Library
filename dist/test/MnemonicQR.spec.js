"use strict";
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
var bitxor_hd_wallets_1 = require("bitxor-hd-wallets");
var bitxor_sdk_1 = require("bitxor-sdk");
// internal dependencies
var index_1 = require("../index");
describe('MnemonicQR -->', function () {
    describe('with password -->', function () {
        describe('toJSON() should', function () {
            it('include mandatory NIP-7 QR Code base fields', function () {
                // Arrange:
                var mnemonic = bitxor_hd_wallets_1.MnemonicPassPhrase.createRandom();
                // Act:
                var exportMnemonic = new index_1.MnemonicQR(mnemonic.plain, bitxor_sdk_1.NetworkType.MIJIN_TEST, 'no-chain-id', 'password');
                var actualJSON = exportMnemonic.toJSON();
                var actualObject = JSON.parse(actualJSON);
                // Assert:
                chai_1.expect(actualObject).to.have.property('v');
                chai_1.expect(actualObject).to.have.property('type');
                chai_1.expect(actualObject).to.have.property('network_id');
                chai_1.expect(actualObject).to.have.property('chain_id');
                chai_1.expect(actualObject).to.have.property('data');
            });
            it('include specialized schema fields', function () {
                // Arrange:
                var mnemonic = bitxor_hd_wallets_1.MnemonicPassPhrase.createRandom();
                // Act:
                var exportMnemonic = new index_1.MnemonicQR(mnemonic.plain, bitxor_sdk_1.NetworkType.MIJIN_TEST, 'no-chain-id', 'password');
                var actualJSON = exportMnemonic.toJSON();
                var actualObject = JSON.parse(actualJSON);
                // Assert:
                chai_1.expect(actualObject.data).to.have.property('ciphertext');
                chai_1.expect(actualObject.data).to.have.property('salt');
            });
        });
        describe('fromJSON() should', function () {
            it('throw error given wrong password', function () {
                // Arrange:
                var mnemonic = bitxor_hd_wallets_1.MnemonicPassPhrase.createRandom();
                // Act:
                var exportMnemonic = new index_1.MnemonicQR(mnemonic.plain, bitxor_sdk_1.NetworkType.MIJIN_TEST, 'no-chain-id', 'password');
                // Act + Assert
                chai_1.expect((function () {
                    var importMnemonic = index_1.MnemonicQR.fromJSON(exportMnemonic.toJSON(), 'wrong-password');
                })).to.throw('Could not parse mnemonic pass phrase.');
            });
            it('throw error given encrypted payload is invalid', function () {
                // Arrange:
                var accountInfo = {
                    v: 3,
                    type: index_1.QRCodeType.ExportMnemonic,
                    network_id: bitxor_sdk_1.NetworkType.MIJIN_TEST,
                    chain_id: '9F1979BEBA29C47E59B40393ABB516801A353CFC0C18BC241FEDE41939C907E7',
                    data: {
                        // 'ciphertext' field for encrypted payload missing
                        salt: "b248953e9ebfa269cd7b940f9c03d2d4b192f90db61638375b5e78296bbe675a",
                    },
                };
                // Act + Assert
                chai_1.expect((function () {
                    var importAccount = index_1.MnemonicQR.fromJSON(JSON.stringify(accountInfo), 'password');
                })).to.throw('Could not parse mnemonic pass phrase.');
            });
            it('reconstruct mnemonic pass phrase given correct password', function () {
                // Arrange:
                var mnemonic = bitxor_hd_wallets_1.MnemonicPassPhrase.createRandom();
                // Act:
                var exportMnemonic = new index_1.MnemonicQR(mnemonic.plain, bitxor_sdk_1.NetworkType.MIJIN_TEST, 'no-chain-id', 'password');
                var importMnemonic = index_1.MnemonicQR.fromJSON(exportMnemonic.toJSON(), 'password');
                // Assert
                chai_1.expect(importMnemonic.mnemonicPlainText).to.be.equal(mnemonic.plain);
            });
            it('reconstruct mnemonic pass phrase given correct ciphertext and password', function () {
                // Arrange:
                var mnemonicInfo = {
                    v: 3,
                    type: index_1.QRCodeType.ExportMnemonic,
                    network_id: bitxor_sdk_1.NetworkType.MIJIN_TEST,
                    chain_id: "9F1979BEBA29C47E59B40393ABB516801A353CFC0C18BC241FEDE41939C907E7",
                    data: {
                        ciphertext: "964322228f401a2ec576ac256cbbdce29YfW+CykqESzGSzDYuKJxJUSpQ4woqMdD8Up7mjbow09I/UYV4e8HEgbhjlLjf30YLlQ+JKLBTf9kUGMnp3tZqYSq3lLZRDp8TVE6GzHiX4V59RTP7BOixwpDWDmfOP0B0i+Q1s0+OPfmyck4p7YZkVNi/HYvQF4kDV27sjRTZKs+uETKA0Ae0rl17d9EMV3eLUVcWEGE/ChgEfmnMlN1g==",
                        salt: "b248953e9ebfa269cd7b940f9c03d2d4b192f90db61638375b5e78296bbe675a",
                    },
                };
                // Act:
                var importMnemonic = index_1.MnemonicQR.fromJSON(JSON.stringify(mnemonicInfo), 'password');
                // Assert
                chai_1.expect(importMnemonic.mnemonicPlainText).to.be.equal('stumble shoot spawn bitter '
                    + 'forest waste attitude chest '
                    + 'square kite dawn photo '
                    + 'twice message bargain trap '
                    + 'spin vote lamp wire '
                    + 'also either else pupil');
            });
        });
    });
    describe('with no password -->', function () {
        describe('toJSON() should', function () {
            it('include mandatory NIP-7 QR Code base fields', function () {
                // Arrange:
                var mnemonic = bitxor_hd_wallets_1.MnemonicPassPhrase.createRandom();
                // Act:
                var exportMnemonic = new index_1.MnemonicQR(mnemonic.plain, bitxor_sdk_1.NetworkType.MIJIN_TEST, 'no-chain-id');
                var actualJSON = exportMnemonic.toJSON();
                var actualObject = JSON.parse(actualJSON);
                // Assert:
                chai_1.expect(actualObject).to.have.property('v');
                chai_1.expect(actualObject).to.have.property('type');
                chai_1.expect(actualObject).to.have.property('network_id');
                chai_1.expect(actualObject).to.have.property('chain_id');
                chai_1.expect(actualObject).to.have.property('data');
            });
            it('include specialized schema fields', function () {
                // Arrange:
                var mnemonic = bitxor_hd_wallets_1.MnemonicPassPhrase.createRandom();
                // Act:
                var exportMnemonic = new index_1.MnemonicQR(mnemonic.plain, bitxor_sdk_1.NetworkType.MIJIN_TEST, 'no-chain-id');
                var actualJSON = exportMnemonic.toJSON();
                var actualObject = JSON.parse(actualJSON);
                // Assert:
                chai_1.expect(actualObject.data).to.have.property('plainMnemonic');
            });
        });
        describe('fromJSON() should', function () {
            it('not throw error given a password when the qr is not encrypted', function () {
                // Arrange:
                var mnemonic = bitxor_hd_wallets_1.MnemonicPassPhrase.createRandom();
                // Act:
                var exportMnemonic = new index_1.MnemonicQR(mnemonic.plain, bitxor_sdk_1.NetworkType.MIJIN_TEST, 'no-chain-id');
                // Act + Assert
                chai_1.expect((function () {
                    var importMnemonic = index_1.MnemonicQR.fromJSON(exportMnemonic.toJSON(), 'password');
                })).not.to.throw('Could not parse mnemonic pass phrase.');
            });
            it('reconstruct mnemonic pass phrase given a correct plainMnemonic data', function () {
                // Arrange:
                var mnemonic = bitxor_hd_wallets_1.MnemonicPassPhrase.createRandom();
                // Act:
                var exportMnemonic = new index_1.MnemonicQR(mnemonic.plain, bitxor_sdk_1.NetworkType.MIJIN_TEST, 'no-chain-id');
                var importMnemonic = index_1.MnemonicQR.fromJSON(exportMnemonic.toJSON());
                // Assert
                chai_1.expect(importMnemonic.mnemonicPlainText).to.be.equal(mnemonic.plain);
            });
        });
    });
});
//# sourceMappingURL=MnemonicQR.spec.js.map