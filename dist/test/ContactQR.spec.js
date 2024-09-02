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
var bitxor_sdk_1 = require("bitxor-sdk");
// internal dependencies
var index_1 = require("../index");
describe('ContactQR -->', function () {
    describe('toJSON() should', function () {
        it('include mandatory NIP-7 QR Code base fields', function () {
            // Arrange:
            var name = 'test-contact-1';
            var account = bitxor_sdk_1.PublicAccount.createFromPublicKey('C5C55181284607954E56CD46DE85F4F3EF4CC713CC2B95000FA741998558D268', bitxor_sdk_1.NetworkType.TEST_NET);
            // Act:
            var addContact = new index_1.ContactQR(name, account.publicKey, bitxor_sdk_1.NetworkType.TEST_NET, '');
            var actualJSON = addContact.toJSON();
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
            var name = 'test-contact-1';
            var account = bitxor_sdk_1.PublicAccount.createFromPublicKey('C5C55181284607954E56CD46DE85F4F3EF4CC713CC2B95000FA741998558D268', bitxor_sdk_1.NetworkType.TEST_NET);
            // Act:
            var addContact = new index_1.ContactQR(name, account.publicKey, bitxor_sdk_1.NetworkType.TEST_NET, '');
            var actualJSON = addContact.toJSON();
            var actualObject = JSON.parse(actualJSON);
            // Assert:
            chai_1.expect(actualObject.data).to.have.property('name');
            chai_1.expect(actualObject.data).to.have.property('publicKey');
        });
    });
    describe('fromJSON() should', function () {
        it('reconstruct contact given ContactQR JSON', function () {
            // Arrange:
            var account = bitxor_sdk_1.PublicAccount.createFromPublicKey('C5C55181284607954E56CD46DE85F4F3EF4CC713CC2B95000FA741998558D268', bitxor_sdk_1.NetworkType.TEST_NET);
            // Act:
            var exportContact = new index_1.ContactQR('bitxorcorp', account.publicKey, bitxor_sdk_1.NetworkType.MIJIN_TEST, 'no-chain-id');
            var importContact = index_1.ContactQR.fromJSON(exportContact.toJSON());
            // Assert
            chai_1.expect(importContact.name).to.be.equal('bitxorcorp');
            chai_1.expect(importContact.accountPublicKey).to.be.equal(exportContact.accountPublicKey);
        });
        it('reconstruct contact given correct JSON structure', function () {
            // Arrange:
            var contactInfo = {
                v: 3,
                type: index_1.QRCodeType.AddContact,
                network_id: bitxor_sdk_1.NetworkType.MIJIN_TEST,
                chain_id: '9F1979BEBA29C47E59B40393ABB516801A353CFC0C18BC241FEDE41939C907E7',
                data: {
                    name: 'bitxorcorp',
                    publicKey: 'C5C55181284607954E56CD46DE85F4F3EF4CC713CC2B95000FA741998558D268',
                },
            };
            // Act:
            var importContact = index_1.ContactQR.fromJSON(JSON.stringify(contactInfo));
            // Assert
            chai_1.expect(importContact.name).to.be.equal('bitxorcorp');
            chai_1.expect(importContact.accountPublicKey).to.be.equal('C5C55181284607954E56CD46DE85F4F3EF4CC713CC2B95000FA741998558D268');
        });
    });
});
//# sourceMappingURL=ContactQR.spec.js.map