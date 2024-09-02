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
/**
 * Class `EncryptedPayload` describes an encrypted payload
 * with salt and ciphertext properties.
 *
 * @since 0.3.0
 */
declare class EncryptedPayload {
    readonly ciphertext: string;
    /**
     * The payload salt.
     *
     * @var {string}
     */
    readonly salt: string;
    constructor(/**
                 * The payload ciphertext.
                 * The first X bytes represent the IV.
                 *
                 * @var {string}
                 */ ciphertext: string, 
    /**
     * The payload salt.
     *
     * @var {string}
     */
    salt: string);
    /**
     * Parse a JSON representation of an encrypted
     * payload into a `EncryptedPayload` instance.
     *
     * The provided JSON must contain fields 'ciphertext'
     * and 'salt'.
     *
     * @param   {string}    json
     * @return  {EncryptedPayload}
     */
    static fromJSON(json: string): EncryptedPayload;
    /**
     * Validates given json string and returns json object
     * @param json
     * @return json object
     * @throws {Error} If validation fails
     */
    private static validateJson;
    /**
     * Checks if the data ojbect is encrypted
     * @param jsonObject
     */
    static isDataEncrypted(jsonObject: any): boolean;
}
export { EncryptedPayload };
