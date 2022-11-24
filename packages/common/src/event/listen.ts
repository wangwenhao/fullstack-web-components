/*
 * @Author: 王闻昊 wwh27791@ly.com
 * @Date: 2022-11-24 18:38:48
 * @LastEditors: 王闻昊 wwh27791@ly.com
 * @LastEditTime: 2022-11-24 18:56:59
 * @FilePath: /fullstack-web-components/packages/common/src/event/listen.ts
 * @Description: listen decorator
 */

type MethodDecoratorFactoryFunction = (
    target: any,
    key: string | number,
    descriptor: PropertyDescriptor
) => void;

export function Listen(eventName: string, selector?: string): MethodDecoratorFactoryFunction {
    return function decorator(
        target: any,
        key: string | number,
        descriptor: PropertyDescriptor
    ) {
        const { connectedCallback = () => {}, disconnectedCallback = () => {} } = target;
        const symbolMethod = Symbol(key);

        function getContext(context) {
            const root = context.shadowRoot ? context.shadowRoot : context;
            return selector ? root.querySelector(selector) : context;
        }

        function addListener() {
            const handler = (this[symbolMethod] = (...args) => {
                descriptor.value.apply(this, args);
            });
            getContext(this).addEventListener(eventName, handler);
        }

        function removeListener() {
            getContext(this).removeEventListener(eventName, this[symbolMethod]);
        }

        target.connectedCallback = function connectedCallbackWrapper() {
            connectedCallback.call(this);
            addListener.call(this);
        }

        target.disconnectedCallback = function disconnectedCallbackWrapper() {
            disconnectedCallback.call(this);
            removeListener.call(this);
        }
    };
}