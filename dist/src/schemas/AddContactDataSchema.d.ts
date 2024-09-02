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
import { ContactQR, QRCodeDataSchema } from '../../index';
/**
 * Class `AddContactDataSchema` describes a contact
 * add QR code data schema.
 *
 * @since 0.3.0
 */
declare class AddContactDataSchema extends QRCodeDataSchema {
    constructor();
    /**
     * The `getData()` method returns an object
     * that will be stored in the `data` field of
     * the underlying QR Code JSON content.
     *
     * @return {any}
     */
    getData(qr: ContactQR): any;
    /**
     * Parse a JSON QR code content into a ContactQR
     * object.
     *
     * @param   json    {string}
     * @return  {ContactQR}
     * @throws  {Error}     On empty `json` given.
     * @throws  {Error}     On missing `type` field value.
     * @throws  {Error}     On unrecognized QR code `type` field value.
     */
    static parse(json: string): ContactQR;
}
export { AddContactDataSchema };
