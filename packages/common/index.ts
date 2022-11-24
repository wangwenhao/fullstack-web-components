/*
 * @Author: 王闻昊 wwh27791@ly.com
 * @Date: 2022-11-04 17:08:12
 * @LastEditors: 王闻昊 wwh27791@ly.com
 * @LastEditTime: 2022-11-24 19:00:17
 * @FilePath: /fullstack-web-components/packages/common/index.ts
 * @Description: common index
 */
export { Component } from "./src/decorator";
export type { ElementMeta } from "./src/decorator";

export { attachShadow, attachStyle, attachTemplate, css, html } from "./src/template";

export { Listen } from "./src/event";