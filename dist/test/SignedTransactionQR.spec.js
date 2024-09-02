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
var SignedTransactionQR_1 = require("../src/SignedTransactionQR");
// internal dependencies
describe('SignedTransactionQR -->', function () {
    describe('toJSON() should', function () {
        it('include mandatory NIP-7 QR Code base fields', function () {
            // Arrange:
            var signedTransaction = new bitxor_sdk_1.SignedTransaction("B0000000000000008002CDB5CD04681FE26FA770968DC5144591BA15B994EBE9B1B6C72A493C3439770C069AF0786026CE271FB28125396606755DC8436DB9BB979080E61CFE4B0BF530A00F5788DC3025E7F7F6000AF50C7A91283AFB1324E0E5D1BB494339EDE2000000000198544120040000000000009DD664810900000098808E6DE3E834FC51CCB1A7F56D20628BD0F5B05265C2A400000100000000009EF30755E803F42C0000000000000000", "443931795E15914146B774AE550762046525AF94E2C8E32F8DDFA9194D89A567", "443931795E15914146B774AE550762046525AF94E2C8E32F8DDFA9194D89A567", bitxor_sdk_1.TransactionType.TRANSFER, bitxor_sdk_1.NetworkType.TEST_NET);
            // Act:
            var signedTx = new SignedTransactionQR_1.SignedTransactionQR(signedTransaction, bitxor_sdk_1.NetworkType.TEST_NET, '');
            var actualJSON = signedTx.toJSON();
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
            var signedTransaction = new bitxor_sdk_1.SignedTransaction("B0000000000000008002CDB5CD04681FE26FA770968DC5144591BA15B994EBE9B1B6C72A493C3439770C069AF0786026CE271FB28125396606755DC8436DB9BB979080E61CFE4B0BF530A00F5788DC3025E7F7F6000AF50C7A91283AFB1324E0E5D1BB494339EDE2000000000198544120040000000000009DD664810900000098808E6DE3E834FC51CCB1A7F56D20628BD0F5B05265C2A400000100000000009EF30755E803F42C0000000000000000", "443931795E15914146B774AE550762046525AF94E2C8E32F8DDFA9194D89A567", "443931795E15914146B774AE550762046525AF94E2C8E32F8DDFA9194D89A567", bitxor_sdk_1.TransactionType.TRANSFER, bitxor_sdk_1.NetworkType.TEST_NET);
            // Act:
            var qr = new SignedTransactionQR_1.SignedTransactionQR(signedTransaction, bitxor_sdk_1.NetworkType.TEST_NET, "443931795E15914146B774AE550762046525AF94E2C8E32F8DDFA9194D89A567");
            var actualJSON = qr.toJSON();
            var actualObject = JSON.parse(actualJSON);
            // Assert:
            chai_1.expect(actualObject.data.payload).to.have.property('payload');
        });
    });
    describe('fromJSON() should', function () {
        it('reconstruct signed transaction', function () {
            // Arrange:
            var signedTransaction = new bitxor_sdk_1.SignedTransaction("B0000000000000008002CDB5CD04681FE26FA770968DC5144591BA15B994EBE9B1B6C72A493C3439770C069AF0786026CE271FB28125396606755DC8436DB9BB979080E61CFE4B0BF530A00F5788DC3025E7F7F6000AF50C7A91283AFB1324E0E5D1BB494339EDE2000000000198544120040000000000009DD664810900000098808E6DE3E834FC51CCB1A7F56D20628BD0F5B05265C2A400000100000000009EF30755E803F42C0000000000000000", "443931795E15914146B774AE550762046525AF94E2C8E32F8DDFA9194D89A567", "443931795E15914146B774AE550762046525AF94E2C8E32F8DDFA9194D89A567", bitxor_sdk_1.TransactionType.TRANSFER, bitxor_sdk_1.NetworkType.TEST_NET);
            var qr = new SignedTransactionQR_1.SignedTransactionQR(signedTransaction, bitxor_sdk_1.NetworkType.TEST_NET, "443931795E15914146B774AE550762046525AF94E2C8E32F8DDFA9194D89A567");
            var mapper = function (dto) { return new bitxor_sdk_1.SignedTransaction(dto.payload, dto.hash, dto.signerPublicKey, dto.type, dto.networkType); };
            // Act:
            var reconstructedQR = SignedTransactionQR_1.SignedTransactionQR.fromJSON(qr.toJSON(), mapper);
            // Assert
            chai_1.expect(qr.singedTransaction.toDTO().payload).to.be.equal(reconstructedQR.singedTransaction.toDTO().payload);
        });
    });
});
//# sourceMappingURL=SignedTransactionQR.spec.js.map