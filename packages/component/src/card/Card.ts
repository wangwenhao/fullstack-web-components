/*
 * @Author: 王闻昊 wwh27791@ly.com
 * @Date: 2022-11-07 15:16:00
 * @LastEditors: 王闻昊 wwh27791@ly.com
 * @LastEditTime: 2022-11-24 16:20:55
 * @FilePath: /fullstack-web-components/packages/component/src/card/Card.ts
 * @Description: Card Component
 */

import { Component, attachShadow } from "@in/common";

@Component({
    selector: 'in-card',
    style: `
        :host {
            display: block;
            background: var(--color-white);
            border-radius: var(--radius-md);
            box-shadow: var(--shadow);
            overflow: hidden;
            max-width: 320px;
        }
        ::slotted(*) {
            padding-left: var(--padding-lg);
            padding-right: var(--padding-lg);
        }
        ::slotted(a:link), ::slotted(a:visited) {
            display: block;
        }
        ::slotted(:last-child) {
            padding-bottom: var(--margin-lg);
        }
        ::slotted(img) {
            width: 100%;
            padding-left: 0;
            padding-right: 0;
        }`,
    template: `
        <header>
            <slot name="header"></slot>
        </header>
        <section>
            <slot name="content"></slot>
        </section>
        <footer>
            <slot name="footer"></slot>
        </footer>
    `
})
export class CardComponent extends HTMLElement {
    constructor() {
        super();
        attachShadow(this);
    }
}
