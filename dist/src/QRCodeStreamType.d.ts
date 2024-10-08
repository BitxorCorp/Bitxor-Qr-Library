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
 * The QRCodeStreamType enumeration reflects values
 * that can be set for the `type` option of `qrcode`
 * toString method.
 *
 * @see https://www.npmjs.com/package/qrcode#tostringtext-options-cberror-string
 */
declare enum QRCodeStreamType {
    Terminal = "terminal",
    Svg = "svg",
    Utf8 = "utf8"
}
export { QRCodeStreamType };
