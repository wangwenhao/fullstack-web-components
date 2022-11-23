/*
 * @Author: 王闻昊 wwh27791@ly.com
 * @Date: 2022-11-10 11:34:07
 * @LastEditors: 王闻昊 wwh27791@ly.com
 * @LastEditTime: 2022-11-23 15:53:19
 * @FilePath: /fullstack-web-components/packages/component/src/input/TextInput.ts
 * @Description: Text Input Component
 */
// import { ElementInternals } from "types/lib.elementInternals"

import { validate, Validator } from "./validator";

export class TextInputComponent extends HTMLElement {
    private internals: ElementInternals;
    private $validator: Validator;
    private $attr = {};

    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        const template = document.createElement("template");

        template.innerHTML = `
            <style>
                :host {
                    display: block;
                    font-family: var(--font-default);
                    font-size: var(--font-body-sm);
                }

                input {
                    height: var(--input-min-dimension);
                    width: 100%;
                    border-radius: var(--radius-sm);
                    border: var(--border-default);
                    font-size: var(--font-body-md);
                    padding-left: var(--padding-sm);
                    outline: none;
                    box-sizing: border-box;
                }
                input:focus,
                input:focus:hover,
                input:active {
                    border: var(--border-focus);
                }

                input.error,
                input.error:hover,
                input.error:focus,
                input.error:active {
                    border: var(--border-error);
                    outline: none;
                    box-shadow: none;
                    color: var(--color-error);
                }

                .message {
                    margin-top: var(--margin-xxs);
                    color: var(--color-error);
                    font-weight: var(--font-weight-default);
                }

                input[disabled] {
                    opacity: var(--color-disable);
                    background: var(--color-disable);
                    border: var(--border-disable);
                }
                input[disabled]:hover,
                input[disabled]:focus,
                input[disabled]:active {
                    border: var(--border-disable);
                    outline: none;
                    box-shadow: none;
                }
            </style>
            <div class="control">
                <input type="text" />
            </div>
            <div class="message"></div>
        `
        shadowRoot.appendChild(template.content.cloneNode(true));
        this.internals = this.attachInternals();
    }

    static get observedAttributes() {
        return [
            "name",
            "type",
            "required",
            "minlength",
            "maxlength",
            "pattern",
            "list",
            "placeholder",
            "readonly",
            "spellcheck",
            "disabled",
            "value",
        ];
    }

    attributeChangedCallback(name, prev, next) {
        this.$attr[name] = next;
        switch (name) {
            case "type":
                this.$input.setAttribute("type", next);
                break;
            case "required":
                this.required = next;
                break;
            case "minlength":
                this.$input.setAttribute("minlength", next);
                break;
            case "maxlength":
                this.$input.setAttribute("maxlength", next);
                break;
            case "pattern":
                this.$input.setAttribute("pattern", next);
                break;
            case "list":
                this.$input.setAttribute("list", next);
                break;
            case "placeholder":
                this.$input.setAttribute("placeholder", next);
                break;
            case "readonly":
                this.$input.setAttribute("readonly", next);
                break;
            case "spellcheck":
                this.$input.setAttribute("spellcheck", next);
                break;
            case "disabled":
                this.disabled = next;
                break;
            case "value":
                this.value = next;
                break;
        }
    }

    static formAssociated = true;

    checkValidity() {
        return this.internals.checkValidity();
    }

    reportValidity() {
        return this.internals.reportValidity();
    }

    get validity() {
        return this.internals.validity
    }

    setValidity(
        flags: ValidityStateFlags,
        message?: string,
        anchor?: HTMLElement
    ): void {
        this.internals.setValidity(flags, message, anchor);
    }

    get validationMessage() {
        return this.internals.validationMessage
    }

    get $input(): HTMLInputElement {
        return this.shadowRoot.querySelector("input");
    }

    get type() {
        return this.$input.type ?? "text";
    }

    set type(type: string) {
        this.$input.setAttribute("type", type);
    }

    get list() {
        return this.$input.list;
    }

    get minLength() {
        return this.$input.minLength;
    }

    set minLength(min: number) {
        this.$input.minLength = min;
    }

    get maxLength() {
        return this.$input.maxLength;
    }

    set maxLength(max: number) {
        this.$input.maxLength = max;
    }

    get readOnly() {
        return this.$input.readOnly;
    }

    get pattern() {
        return this.$input.pattern;
    }

    set pattern(pattern: string) {
        this.$input.pattern = pattern
    }

    get placeholder() {
        return this.$input.placeholder;
    }

    get spellcheck() {
        return this.$input.spellcheck;
    }

    set value(value: string) {
        this.$input.value = value;
    }

    get value(): string {
        return this.$input.value;
    }

    set required(value: boolean | string) {
        if (value === "true" || value === true) {
            this.$input.setAttribute("required", "true");
        }
        if (value === "false" || value === false) {
            this.$input.removeAttribute("required");
        }
    }

    get required(): boolean {
        return this.$input.required;
    }

    set disabled(value: boolean | string) {
        if (value === "true" || value === true) {
            this.$input.setAttribute("disabled", "true");
        }
        if (value === "false" || value === false) {
            this.$input.removeAttribute("disabled");
        }
    }

    get disabled() {
        return this.$input.disabled;
    }

    connectedCallback() {
        this.$input.onblur = () => {
            this.onValidate(true);
        }
        for (let prop in this.$attr) {
            this.$input.setAttribute(prop, this.$attr[prop]);
        }
        this.onValidate(false);
        this.$input.onchange = () => {
            this.onChange();
        }
    }

    onChange() {
        this.shadowRoot.querySelector(".message").innerHTML = "";
        this.$input.classList.remove("error");
        this.internals.setFormValue(this.value, this.value);
    }

    formDisabledCallback(disabled) {
        this.disabled = disabled;
    }

    formStateRestoreCallback(state: string, mode: string) {
        this.value = state;
    }

    formResetCallback(state: string) {
        this.value = this.getAttribute("value") || "";
    }

    onValidate(showError: boolean) {
        validate(this, showError);
    }

    focus() {
        this.$input.focus();
    }

    blur() {
        this.$input.blur();
    }
}

customElements.define("in-text-input", TextInputComponent);
