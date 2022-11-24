/*
 * @Author: 王闻昊 wwh27791@ly.com
 * @Date: 2022-11-24 16:07:26
 * @LastEditors: 王闻昊 wwh27791@ly.com
 * @LastEditTime: 2022-11-24 16:15:27
 * @FilePath: /fullstack-web-components/packages/common/src/template/shadow.ts
 * @Description: shadow template
 */
export function attachShadow(context: any, options?: ShadowRootInit) {
    const shadowRoot: ShadowRoot = context.attachShadow(
        options || { mode: "open" }
    );
    const template = document.createElement("template");
    template.innerHTML = `
        <style>
            ${context.elementMeta.style}
        </style>
        ${context.elementMeta.template}
    `;
    shadowRoot.appendChild(template.content.cloneNode(true));
}