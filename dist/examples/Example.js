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
var Example = /** @class */ (function () {
    /**
     * Construct an example instance
     *
     */
    function Example() {
    }
    /// end-region Abstract Methods
    /**
     * Resolve the execution promise.
     *
     * @template T
     * @param   {T}     resp    The execution result
     * @return  {Promise<T>}
     */
    Example.prototype.resolve = function (resp) {
        return new Promise(function (resolve, reject) {
            return resolve(resp);
        });
    };
    /**
     * Reject the execution promise.
     *
     * @template T
     * @param   {T}     resp    The execution result
     * @return  {Promise<T>}
     */
    Example.prototype.reject = function (resp) {
        return new Promise(function (resolve, reject) {
            return reject(resp);
        });
    };
    return Example;
}());
exports.Example = Example;
//# sourceMappingURL=Example.js.map