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
declare abstract class Example {
    /**
     * Construct an example instance
     *
     */
    constructor();
    /**
     * The `execute()` method should run the underlying
     * example business flow.
     *
     * @return {number}
     */
    abstract execute(): Promise<number>;
    /**
     * Resolve the execution promise.
     *
     * @template T
     * @param   {T}     resp    The execution result
     * @return  {Promise<T>}
     */
    resolve<T>(resp: T): Promise<T>;
    /**
     * Reject the execution promise.
     *
     * @template T
     * @param   {T}     resp    The execution result
     * @return  {Promise<T>}
     */
    reject<T>(resp: T): Promise<T>;
}
export { Example };
