/*
 * @Author: 王闻昊 wwh27791@ly.com
 * @Date: 2022-11-24 16:48:55
 * @LastEditors: 王闻昊 wwh27791@ly.com
 * @LastEditTime: 2022-11-24 17:02:38
 * @FilePath: /fullstack-web-components/packages/common/src/template/style.ts
 * @Description: style template
 */
function closestRoot(base: Element): any {
    if (base.getRootNode() === document) {
        return document.head;
    } else if (base.getRootNode()) {
        return base.getRootNode();
    } else {
        return document.head;
    }
}

export function attachStyle(context: any): void {
    const id = `${context.elementMeta.selector}`;
    const closest = closestRoot(context);
    if (closest.tagName === "HEAD" && document.getElementById(`${id}-in-style`)) {
        return;
    }
    if (closest.getElementById && closest.getElementById(`${id}-in-style`)) {
        return;
    }
    const template = document.createElement("style");
    template.setAttribute("id", `${id}-in-style`);
    template.innerText = context.elementMeta.style;
    closest.appendChild(template);
}
