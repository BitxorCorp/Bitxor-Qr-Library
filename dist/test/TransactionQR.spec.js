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
describe('TransactionQR -->', function () {
    describe('toJSON() should', function () {
        it('include mandatory NIP-7 QR Code base fields', function () {
            // Arrange:
            var transfer = bitxor_sdk_1.TransferTransaction.create(bitxor_sdk_1.Deadline.create(), bitxor_sdk_1.Address.createFromPublicKey('C5C55181284607954E56CD46DE85F4F3EF4CC713CC2B95000FA741998558D268', bitxor_sdk_1.NetworkType.MIJIN_TEST), [new bitxor_sdk_1.Token(new bitxor_sdk_1.NamespaceId('cat.currency'), bitxor_sdk_1.UInt64.fromUint(10000000))], bitxor_sdk_1.PlainMessage.create('Welcome to Bitxor!'), bitxor_sdk_1.NetworkType.MIJIN_TEST);
            // Act:
            var requestTx = new index_1.TransactionQR(transfer, bitxor_sdk_1.NetworkType.TEST_NET, '');
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
            var transfer = bitxor_sdk_1.TransferTransaction.create(bitxor_sdk_1.Deadline.create(), bitxor_sdk_1.Address.createFromPublicKey('C5C55181284607954E56CD46DE85F4F3EF4CC713CC2B95000FA741998558D268', bitxor_sdk_1.NetworkType.MIJIN_TEST), [new bitxor_sdk_1.Token(new bitxor_sdk_1.NamespaceId('cat.currency'), bitxor_sdk_1.UInt64.fromUint(10000000))], bitxor_sdk_1.PlainMessage.create('Welcome to Bitxor!'), bitxor_sdk_1.NetworkType.MIJIN_TEST);
            // Act:
            var requestTx = new index_1.TransactionQR(transfer, bitxor_sdk_1.NetworkType.TEST_NET, '');
            var actualJSON = requestTx.toJSON();
            var actualObject = JSON.parse(actualJSON);
            // Assert:
            chai_1.expect(actualObject.data).to.have.property('payload');
        });
    });
});
//# sourceMappingURL=TransactionQR.spec.js.map