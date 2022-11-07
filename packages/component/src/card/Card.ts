/*
 * @Author: 王闻昊 wwh27791@ly.com
 * @Date: 2022-11-07 15:16:00
 * @LastEditors: 王闻昊 wwh27791@ly.com
 * @LastEditTime: 2022-11-07 15:35:56
 * @FilePath: /fullstack-web-components/packages/component/src/card/Card.ts
 * @Description: Card Component
 */
export class CardComponent extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');
        template.innerHTML = `
            <header>
                <slot name="header"></slot>
            </header>
            <section>
                <slot name="content"></slot>
            </section>
            <footer>
                <slot name="footer"></slot>
            </footer>
        `;
        shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('in-card', CardComponent);
