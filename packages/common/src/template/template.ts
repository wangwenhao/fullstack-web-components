/*
 * @Author: 王闻昊 wwh27791@ly.com
 * @Date: 2022-11-24 18:01:04
 * @LastEditors: 王闻昊 wwh27791@ly.com
 * @LastEditTime: 2022-11-24 18:15:46
 * @FilePath: /fullstack-web-components/packages/common/src/template/template.ts
 * @Description: template template
 */
export function attachTemplate(context: any): void {
    const template = document.createElement("template");
    template.innerHTML = context.elementMeta.template;
    context.appendChild(template.content.cloneNode(true));
}

export function css(template: TemplateStringsArray, ...rest: any): string {
    let str = "";
    template.forEach((string, i) => {
        str += `${string} ${rest[i] || ""}`;
    });
    return str;
}

export function html(template: TemplateStringsArray, ...rest: any): string {
    let str = "";
    template.forEach((string, i) => {
        str += `${string} ${rest[i] || ""}`;
    });
    return str;
}