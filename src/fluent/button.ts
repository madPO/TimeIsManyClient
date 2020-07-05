// @ts-ignore
import {LitElement, html, customElement, property, css} from 'lit-element';
import { ThemeSettings } from './theme';

/**
 * Кнопка
 */
@customElement('fluent-button')
export class Button extends LitElement {
    static styles = css`
        a, button {
            font-size: 14px;
            font-weight: 600;
            box-sizing: border-box;
            display: inline-block;
            text-align: center;
            cursor: pointer;
            padding: 8px 16px;
            min-width: 80px;
            height: 32px;
            background-color: hsl(0, 100%, 100%);
            color: ${ThemeSettings.colors.text};
            user-select: none;
            outline: transparent;
            border-width: 1px;
            border-style: solid;
            border-color: rgb(138, 136, 134);
            border-image: initial;
            text-decoration: none;
            border-radius: 2px;
        }
        :host(:hover) a, :host(:hover) button {
            background-color: rgb(243, 242, 241);
            color: rgb(32, 31, 30);
        }
        :host(:active) a, :host(:active) button {
            background-color: rgb(237, 235, 233);
            color: rgb(32, 31, 30);
        }
        .primary{
            background-color: ${ThemeSettings.colors.primary};
            color: white;
            border-color: ${ThemeSettings.colors.primary};
        }
        :host(:hover) .primary {
            background-color: rgb(16, 110, 190);
            border-color: rgb(16, 110, 190);
            color: white;
        }
        :host(:active) .primary {
            background-color: rgb(0, 90, 158);
            border-color: rgb(0, 90, 158);
            color: white;
        }
    `;

    @property({type: String})
    href = null;
    
    @property({type: Boolean})
    primary = false;
    
    render() {
        let template = null;
        if(this.href){
            template = html`<a href="${this.href}" class="${this.primary?'primary':''}" ><slot></slot></a>`;                        
        } else {
            template = html`<button><slot></slot></button>`;    
        }
        
        return template;
    }
}