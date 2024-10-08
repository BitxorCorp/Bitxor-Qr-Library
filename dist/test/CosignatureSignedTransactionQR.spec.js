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
var CosignatureSignedTransactionQR_1 = require("../src/CosignatureSignedTransactionQR");
// internal dependencies
describe('CosignatureSignedTransactionQR -->', function () {
    describe('toJSON() should', function () {
        it('include mandatory NIP-7 QR Code base fields', function () {
            // Arrange:
            var signedTransaction = new bitxor_sdk_1.CosignatureSignedTransaction("BDCBB0E32AAC378AC04FAFE4D341E002E5DC5790F8E0EDFF65FDD8249A65F97D", "0FC21B9AE123CF186318AE312EFDA22634F6CF7D47324FF1731FA12AEF0481A40B449DB1F63814C57BB218496C8210F4561FE62F007139750923CB527A03BC0E", "7271588CCD1EB2F8E2FD70088CEA03D55C9275D7340DC5E5DDC756833CD04DFF");
            // Act:
            var signedTx = new CosignatureSignedTransactionQR_1.CosignatureSignedTransactionQR(signedTransaction, bitxor_sdk_1.NetworkType.TEST_NET, '');
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
            var signedTransaction = new bitxor_sdk_1.CosignatureSignedTransaction("BDCBB0E32AAC378AC04FAFE4D341E002E5DC5790F8E0EDFF65FDD8249A65F97D", "0FC21B9AE123CF186318AE312EFDA22634F6CF7D47324FF1731FA12AEF0481A40B449DB1F63814C57BB218496C8210F4561FE62F007139750923CB527A03BC0E", "7271588CCD1EB2F8E2FD70088CEA03D55C9275D7340DC5E5DDC756833CD04DFF");
            // Act:
            var qr = new CosignatureSignedTransactionQR_1.CosignatureSignedTransactionQR(signedTransaction, bitxor_sdk_1.NetworkType.TEST_NET, "443931795E15914146B774AE550762046525AF94E2C8E32F8DDFA9194D89A567");
            var actualJSON = qr.toJSON();
            var actualObject = JSON.parse(actualJSON);
            // Assert:
            chai_1.expect(actualObject.data.payload).to.have.property('signature');
        });
    });
    describe('fromJSON() should', function () {
        it('reconstruct signed transaction', function () {
            // Arrange:
            var signedTransaction = new bitxor_sdk_1.CosignatureSignedTransaction("BDCBB0E32AAC378AC04FAFE4D341E002E5DC5790F8E0EDFF65FDD8249A65F97D", "0FC21B9AE123CF186318AE312EFDA22634F6CF7D47324FF1731FA12AEF0481A40B449DB1F63814C57BB218496C8210F4561FE62F007139750923CB527A03BC0E", "7271588CCD1EB2F8E2FD70088CEA03D55C9275D7340DC5E5DDC756833CD04DFF");
            var qr = new CosignatureSignedTransactionQR_1.CosignatureSignedTransactionQR(signedTransaction, bitxor_sdk_1.NetworkType.TEST_NET, "443931795E15914146B774AE550762046525AF94E2C8E32F8DDFA9194D89A567");
            var mapper = function (dto) { return new bitxor_sdk_1.CosignatureSignedTransaction(dto.parentHash, dto.signature, dto.signerPublicKey); };
            // Act:
            var reconstructedQR = CosignatureSignedTransactionQR_1.CosignatureSignedTransactionQR.fromJSON(qr.toJSON(), mapper);
            // Assert
            chai_1.expect(qr.singedTransaction.signature).to.be.equal(reconstructedQR.singedTransaction.signature);
        });
    });
});
//# sourceMappingURL=CosignatureSignedTransactionQR.spec.js.map