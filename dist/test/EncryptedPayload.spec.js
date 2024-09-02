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
// internal dependencies
var index_1 = require("../index");
describe('EncryptedPayload -->', function () {
    describe('fromJSON() should', function () {
        it('throw on empty JSON', function () {
            // Arrange:
            var json = '';
            // Act + Assert
            chai_1.expect((function () {
                var payload = index_1.EncryptedPayload.fromJSON(json);
            })).to.throw('JSON argument cannot be empty.');
        });
        it('throw on missing ciphertext property', function () {
            // Arrange:
            var json = '{"salt": "00"}';
            // Act + Assert
            chai_1.expect((function () {
                var payload = index_1.EncryptedPayload.fromJSON(json);
            })).to.throw('Missing mandatory field \'ciphertext\'.');
        });
        it('throw on missing salt property', function () {
            // Arrange:
            var json = '{"ciphertext": "00"}';
            // Act + Assert
            chai_1.expect((function () {
                var payload = index_1.EncryptedPayload.fromJSON(json);
            })).to.throw('Missing mandatory field \'salt\'.');
        });
        it('create complete object', function () {
            // Arrange:
            var json = {
                ciphertext: "zyFIAqnq8fihaJFqgH9gVKGT1Aa8dbxXqrcWb//Ckv7R/DJDgdXOY8ejc6KNURPGujULpv0fQnN87AQFldmCgkGYq0CBSHwhOhyCvEBK18g=",
                salt: "12345678901234567890123456789012",
            };
            // Act
            var payload = index_1.EncryptedPayload.fromJSON(JSON.stringify(json));
            // Assert
            chai_1.expect(payload.ciphertext).to.not.be.undefined;
            chai_1.expect(payload.ciphertext).to.be.equal(json.ciphertext);
            chai_1.expect(payload.salt).to.not.be.undefined;
            chai_1.expect(payload.salt).to.be.equal(json.salt);
        });
    });
});
//# sourceMappingURL=EncryptedPayload.spec.js.map