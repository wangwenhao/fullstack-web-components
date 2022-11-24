/*
 * @Author: 王闻昊 wwh27791@ly.com
 * @Date: 2022-11-24 15:09:41
 * @LastEditors: 王闻昊 wwh27791@ly.com
 * @LastEditTime: 2022-11-24 16:43:54
 * @FilePath: /fullstack-web-components/packages/common/src/decorator/component.ts
 * @Description: component decorator
 */
export interface ElementMeta {
    custom?: ElementDefinitionOptions;
    selector?: string;
    style?: string;
    template?: string;
}

export function Component(meta: ElementMeta) {
    if (!meta) {
        console.error("Component must include ElementMeta to compile");
        return;
    }
    return (target: any) => {
        if (!meta.style) {
            meta.style = "";
        }
        if (!meta.template) {
            meta.template = "";
        }
        target.prototype.elementMeta = meta;
        if (meta.selector && !meta.custom) {
            customElements.define(meta.selector, target);
        } else if (meta.selector && meta.custom) {
            customElements.define(meta.selector, target, meta.custom);
        }
        return target;
    };
}