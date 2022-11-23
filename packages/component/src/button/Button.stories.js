/*
 * @Author: 王闻昊 wwh27791@ly.com
 * @Date: 2022-11-23 17:02:58
 * @LastEditors: 王闻昊 wwh27791@ly.com
 * @LastEditTime: 2022-11-23 18:09:10
 * @FilePath: /fullstack-web-components/packages/component/src/button/Button.stories.js
 * @Description: Button Stories
 */
import { ButtonComponent } from './Button';
import { html } from "lit-html";

export default {
    title: "Components/Inputs/Button",
    component: "in-button",
}

const Template = ({ label, variant }) => html`
    <button
        class="${variant}"
        is="in-button"
    >${label}</button>
`;

export const Primary = Template.bind({});
Primary.args = {
    variant: "primary",
    label: "Button",
}

export const Secondary = Template.bind({});
Secondary.args = {
    variant: "secondary",
    label: "Button",
}

let icon = null;

if (window.FontAwesome) {
    icon = window.FontAwesome.icon({ prefix: "fas", iconName: "plus" });
}

const svg = icon.node[0];

export const Icon = Template.bind({});
Icon.args = {
    variant: "icon icon-close",
    label: svg,
}

const DisabledTemplate = ({ label, variant }) => html`
    <button
        class="${variant}"
        is="in-button"
        disabled
    >
        ${label}
    </button>
`
export const Disabled = DisabledTemplate.bind({});

Disabled.args = {
    variant: "primary",
    label: "Submit",
}