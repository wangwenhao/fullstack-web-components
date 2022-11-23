/*
 * @Author: 王闻昊 wwh27791@ly.com
 * @Date: 2022-11-10 13:50:02
 * @LastEditors: 王闻昊 wwh27791@ly.com
 * @LastEditTime: 2022-11-23 15:41:50
 * @FilePath: /fullstack-web-components/packages/component/src/input/TextInput.stories.js
 * @Description: Text Input Component story
 */
import { TextInputComponent } from "./TextInput";
import { html } from 'lit-html';

export default {
    title: "Components/Inputs/TextInput",
    component: "in-text-input"
}

const PrimaryTemplate = ({ onValidate, validators }) => {
    setTimeout(() => {
        const input = document.querySelector('[name="username"]');
        input.$validator = validators["username"];
    }, 0);
    return html`<form @validate="${onValidate}">
        <in-text-input name="username" required></in-text-input>
    </form>`
}

export const Primary = PrimaryTemplate.bind({});

const validators = {
    username: {
        validations: [
            {
                flag: { valueMissing: true },
                message: "Error: Required, please enter a username.",
                condition: (input) => input.required && input.value.length <= 0,
            },
            {
                flag: { tooShort: true },
                message: "Error: Minimum length not met, please supply a value with at least 8 characters.",
                condition: (input) => input.minLength && input.value.length < input.minLength,
            }
        ],
    },
    password: {
        validations: [
            {
                flag: { valueMissing: true },
                message: "Error: Required, please enter a password.",
                condition: (input) => input.required && input.value.length <= 0,
            },
            {
                flag: { tooShort: true },
                message: "Error: Minimum length not met, please supply a value with at least 8 characters.",
                condition: (input) => input.minLength && input.value.length < input.minLength,
            },
            {
                flag: { patternMismatch: true },
                message: "Please use at least one uppercase, uppercase letter, special character, and number.",
                condition: (input) => input.pattern && input.value.match(new RegExp(input.pattern)) === null,
            }
        ],
    },
};

Primary.args = {
    validators,
    onValidate: (ev) => {
        if (!document.querySelector('[name="username"]').validity.valid) {
            console.warn("INVALID");
        } else {
            console.log("VALID");
        }
    }
}

const DisabledTemplate = ({}) =>
    html`<in-text-input
        value="disabled input"
        disabled
        name="test-input"
    ></in-text-input>`

export const Disabled = DisabledTemplate.bind({});
DisabledTemplate.args = {};

const ErrorTemplate = ({}) => {
    setTimeout(() => {
        const input = document.querySelector('[name="username"]');
        input.$validator = validators["username"];
        input.focus();
        input.blur();
    }, 0);
    return html`<in-text-input
        type="text"
        id="username"
        name="username"
        required
        class="form-control"
    ></in-text-input>`
}

export const Error = ErrorTemplate.bind({});
ErrorTemplate.args = {};

const FormTemplate = ({ headline, onSubmit, onValidate, onFormData }) => {

    setTimeout(() => {
        for (let prop in validators) {
            document.querySelector(`[name="${prop}"]`).$validator = validators[prop];
        }
    }, 0);

    return html`
    <h4 slot="header">${headline}</h4>
    <form
        name="foo"
        slot="content"
        @formdata="${onFormData}"
        @validate="${onValidate}"
        @submit="${onSubmit}"
    >
        <fieldset>
            <legend>Login Form</legend>
            <label for="username">Username</label>
            <in-text-input
                type="text"
                id="username"
                name="username"
                required
                minlength="8"
                class="form-control"
            ></in-text-input>
            <label for="password">Password</label>
            <in-text-input
                type="password"
                id="password"
                name="password"
                required
                minlength="8"
                pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
                class="form-control"
            ></in-text-input>
            <input class="submit" type="submit" value="Submit" />
        </fieldset>
    </form>`;
}

export const Form = FormTemplate.bind({})

Form.args = {
    headline: "Login",
    onSubmit: (ev) => {
        console.log(new FormData(ev.target));
        ev.preventDefault();
    },
    onFormData: (ev) => {
        for (let value of ev.formData.values()) {
            console.log(value)
        }
    },
    onValidate: (ev) => {
        const validations = [];
        for (let prop in validators) {
            validations.push(document.querySelector(`[name="${prop}"]`).validity.valid);
        }
        console.log(validations)
        if (validations.filter((val) => val == false).length) {
            console.warn("INVALID");
        } else {
            console.log("VALID");
        }
    }
}
