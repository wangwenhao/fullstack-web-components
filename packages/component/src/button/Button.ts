/*
 * @Author: 王闻昊 wwh27791@ly.com
 * @Date: 2022-11-23 16:59:33
 * @LastEditors: 王闻昊 wwh27791@ly.com
 * @LastEditTime: 2022-11-24 17:12:44
 * @FilePath: /fullstack-web-components/packages/component/src/button/Button.ts
 * @Description: Customized Button Component
 */

import { attachStyle, Component } from "@in/common";

const buttonStyles = `
    .in-button.primary {
        background: var(--color-blue-500);
        border: 2px solid var(--color-blue-500);
        box-sizing: border-box;
        border-radius: 12px;
        min-height: 44px;
        min-width: 180px;
        color: var(--color-white);
        font-size: var(--font-body-md);
        font-weight: var(--font-weight-button);
        cursor: pointer;
        padding: 0px;
    }
    .in-button.secondary {
        background: var(--color-white);
        border: 2px solid var(--color-blue-500);
        box-sizing: border-box;
        border-radius: 12px;
        min-height: 44px;
        min-width: 180px;
        color: var(--color-blue-500);
        font-size: var(--font-body-md);
        font-weight: var(--font-weight-button);
        cursor: pointer;
        padding: 0px;
    }
    .in-button.icon {
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--color-white);
        border: 2px solid var(--color-blue-500);
        box-sizing: border-box;
        border-radius: 12px;
        min-height: 44px;
        min-width: 44px;
        color: var(--color-blue-500);
        font-size: var(--font-body-icon);
        font-weight: var(--font-weight-button);
        cursor: pointer;
        padding: var(--padding-xs);
    }
    .icon svg {
        width: 100%;
        height: 100%;
    }
    .icon.icon-close svg {
        transform: rotateZ(45deg);
    }
    .in-button.primary:focus,
    .in-button.secondary:focus,
    .in-button.icon:focus {
        background: var(--color-white);
        color: var(--color-black);
        border: 2px solid var(--color-black);
        outline: none;
    }
    .in-button.primary:active,
    .in-button.secondary:active,
    .in-button.icon:active {
        background: var(--color-white);
        color: var(--color-neutral-500);
        border: 2px solid var(--color-neutral-500);
        outline: none;
    }
    .in-button.primary[disabled],
    .in-button.secondary[disabled],
    .in-button.icon[disabled] {
        opacity: var(--color-disable);
        background: var(--color-disable);
        color: var(--color-neutral-500);
        border:var(--border-disable);
        cursor: default;
    }
    .in-button.primary[disabled]:focus,
    .in-button.secondary[disabled]:focus,
    .in-button.icon[disabled]:focus,
    .in-button.primary[disabled]:active,
    .in-button.secondary[disabled]:active,
    .in-button.icon[disabled]:active {
        border:var(--border-disable);
        outline: none;
        box-shadow: none;
    }
`

@Component({
    custom: { extends: "button" },
    selector: "in-button",
    style: buttonStyles,
})
export class ButtonComponent extends HTMLButtonElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.classList.add("in-button");
        attachStyle(this);
    }
}
