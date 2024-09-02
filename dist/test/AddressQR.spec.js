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
describe('AccountQR -->', function () {
    describe('toJSON() should', function () {
        it('include mandatory NIP-7 QR Code base fields', function () {
            // Arrange:
            var name = 'test-contact-1';
            var address = bitxor_sdk_1.Address.createFromRawAddress('TA6QZTYPOIYQYR5NRY4WQ2WRQUX2FN5UK2DO6DI');
            // Act:
            var addressQR = new index_1.AddressQR(name, address.plain(), bitxor_sdk_1.NetworkType.TEST_NET, '');
            var actualJSON = addressQR.toJSON();
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
            var name = 'test-address-1';
            var address = bitxor_sdk_1.Address.createFromRawAddress('TA6QZTYPOIYQYR5NRY4WQ2WRQUX2FN5UK2DO6DI');
            // Act:
            var addressQR = new index_1.AddressQR(name, address.plain(), bitxor_sdk_1.NetworkType.TEST_NET, '');
            var actualJSON = addressQR.toJSON();
            var actualObject = JSON.parse(actualJSON);
            // Assert:
            chai_1.expect(actualObject.data).to.have.property('name');
            chai_1.expect(actualObject.data).to.have.property('address');
        });
    });
    describe('fromJSON() should', function () {
        it('reconstruct contact given AddressQR JSON', function () {
            // Arrange:
            var address = bitxor_sdk_1.Address.createFromRawAddress('TA6QZTYPOIYQYR5NRY4WQ2WRQUX2FN5UK2DO6DI');
            // Act:
            var exportContact = new index_1.AddressQR('bitxorcorp', address.plain(), bitxor_sdk_1.NetworkType.TEST_NET, 'no-chain-id');
            var importContact = index_1.AddressQR.fromJSON(exportContact.toJSON());
            // Assert
            chai_1.expect(importContact.name).to.be.equal('bitxorcorp');
            chai_1.expect(importContact.accountAddress).to.be.equal(exportContact.accountAddress);
        });
        it('reconstruct contact given correct JSON structure', function () {
            // Arrange:
            var addressInfo = {
                v: 3,
                type: index_1.QRCodeType.ExportAddress,
                network_id: bitxor_sdk_1.NetworkType.TEST_NET,
                chain_id: '9F1979BEBA29C47E59B40393ABB516801A353CFC0C18BC241FEDE41939C907E7',
                data: {
                    name: 'bitxorcorp',
                    address: 'TA6QZTYPOIYQYR5NRY4WQ2WRQUX2FN5UK2DO6DI',
                },
            };
            // Act:
            var addressQR = index_1.AddressQR.fromJSON(JSON.stringify(addressInfo));
            // Assert
            chai_1.expect(addressQR.name).to.be.equal('bitxorcorp');
            chai_1.expect(addressQR.accountAddress).to.be.equal('TA6QZTYPOIYQYR5NRY4WQ2WRQUX2FN5UK2DO6DI');
        });
    });
});
//# sourceMappingURL=AddressQR.spec.js.map