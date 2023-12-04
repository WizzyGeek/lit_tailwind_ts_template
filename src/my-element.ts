import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import litLogo from './assets/lit.svg'
import viteLogo from '/vite.svg'
import { unsafeCSS } from 'lit'

import _tcss from './tcss.css?inline';

let tcss = unsafeCSS(_tcss)

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {
  /**
   * Copy for the read the docs hint.
   */
  @property()
  docsHint = 'Click on the Vite and Lit logos to learn more'

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0

  render() {
    return html`
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src=${viteLogo} class="inline h-32 p-6 transition-[filter] duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]" alt="Vite logo" />
        </a>
        <a href="https://lit.dev" target="_blank">
          <img src=${litLogo} class="inline h-32 p-6 transition-[filter] duration-300 hover:drop-shadow-[0_0_2em_#325cffaa]" alt="Lit logo" />
        </a>
      </div>
      <slot class="text-5xl"></slot>
      <div class="p-8">
        <button @click=${this._onClick} class="border-gray-800 border bg-neutral-900 px-4 py-2 rounded-lg hover:bg-neutral-950 transition duration-300" part="button">
          count is ${this.count}
        </button>
      </div>
      <p class="text-gray-500">${this.docsHint}</p>
    `
  }

  private _onClick() {
    this.count++
  }

  static styles = [tcss, css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }
  `]
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
