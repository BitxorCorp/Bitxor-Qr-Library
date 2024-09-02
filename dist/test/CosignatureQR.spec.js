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
var bondedCreationHelper = function () {
    var account = bitxor_sdk_1.PublicAccount.createFromPublicKey('C5C55181284607954E56CD46DE85F4F3EF4CC713CC2B95000FA741998558D268', bitxor_sdk_1.NetworkType.MIJIN_TEST);
    var transfer = bitxor_sdk_1.TransferTransaction.create(bitxor_sdk_1.Deadline.create(1), bitxor_sdk_1.Address.createFromPublicKey('C5C55181284607954E56CD46DE85F4F3EF4CC713CC2B95000FA741998558D268', bitxor_sdk_1.NetworkType.MIJIN_TEST), [new bitxor_sdk_1.Token(new bitxor_sdk_1.NamespaceId('cat.currency'), bitxor_sdk_1.UInt64.fromUint(10000000))], bitxor_sdk_1.PlainMessage.create('Welcome to Bitxor!'), bitxor_sdk_1.NetworkType.MIJIN_TEST);
    var bonded = bitxor_sdk_1.AggregateTransaction.createBonded(bitxor_sdk_1.Deadline.create(1), [transfer.toAggregate(account)], bitxor_sdk_1.NetworkType.MIJIN_TEST);
    return bonded;
};
describe('CosignatureQR -->', function () {
    describe('toJSON() should', function () {
        it('include mandatory NIP-7 QR Code base fields', function () {
            // Arrange:
            var bonded = bondedCreationHelper();
            // Act:
            var requestTx = new index_1.CosignatureQR(bonded, bitxor_sdk_1.NetworkType.TEST_NET, '');
            var actualJSON = requestTx.toJSON();
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
            var bonded = bondedCreationHelper();
            // Act:
            var requestTx = new index_1.CosignatureQR(bonded, bitxor_sdk_1.NetworkType.TEST_NET, '');
            var actualJSON = requestTx.toJSON();
            var actualObject = JSON.parse(actualJSON);
            // Assert:
            chai_1.expect(actualObject.data).to.have.property('payload');
        });
    });
    describe('fromJSON() should', function () {
        it('reconstruct aggregate bonded given CosignatureQR JSON', function () {
            // Arrange:
            var bonded = bondedCreationHelper();
            // Act:
            var exportCosig = new index_1.CosignatureQR(bonded, bitxor_sdk_1.NetworkType.MIJIN_TEST, 'no-chain-id');
            var importCosig = index_1.CosignatureQR.fromJSON(exportCosig.toJSON(), bitxor_sdk_1.TransactionMapping.createFromPayload);
            // Assert
            chai_1.expect(importCosig.transaction.serialize()).to.be.equal(exportCosig.transaction.serialize());
        });
        it('reconstruct aggregate bonded given correct JSON structure', function () {
            // Arrange:
            var cosigInfo = {
                v: 3,
                type: index_1.QRCodeType.RequestCosignature,
                network_id: bitxor_sdk_1.NetworkType.MIJIN_TEST,
                chain_id: '9F1979BEBA29C47E59B40393ABB516801A353CFC0C18BC241FEDE41939C907E7',
                data: {
                    payload: 'F8000000000000004DD933EBA4A6D891027AFB3924F0C61CD07B5C2FE2A38932'
                        + '606C267E158817F96C984368CDCCDD79AB3C0C8D1324A7B371AB34C17ED0820B'
                        + 'C38E8D7579FAE70BCA623B00FBA6BCB2CF9795101358BA1B78D0C7C6FDAA663D'
                        + '47A293D98E64208D000000000198414240420F000000000082A4BFF204000000'
                        + 'BD0AC0B63BC81EB6E16F83440E0D1FB01B24EFEF0225ED1856D7AEC17317EEFA'
                        + '50000000000000005000000000000000CA623B00FBA6BCB2CF9795101358BA1B'
                        + '78D0C7C6FDAA663D47A293D98E64208D00000000019855410101010000000000'
                        + '982C9D33E132AC60BDD430FAD1A8F818E1F7407AF1D2C642',
                },
            };
            // Act:
            var importCosig = index_1.CosignatureQR.fromJSON(JSON.stringify(cosigInfo), bitxor_sdk_1.TransactionMapping.createFromPayload);
            // Assert:
            chai_1.expect(importCosig.transaction.serialize()).to.be.equal(cosigInfo.data.payload);
        });
    });
});
//# sourceMappingURL=CosignatureQR.spec.js.map