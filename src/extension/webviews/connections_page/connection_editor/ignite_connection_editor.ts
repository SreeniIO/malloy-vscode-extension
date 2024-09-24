/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 *  LICENSE file in the root directory of this source tree.
 */

import {LitElement, html} from 'lit';
import {
  provideVSCodeDesignSystem,
  vsCodeTextField,
} from '@vscode/webview-ui-toolkit';
import {IgniteConnectionConfig} from '../../../../common/types/connection_manager_types';
import {customElement, property} from 'lit/decorators.js';
import {styles} from './connection_editor.css';

provideVSCodeDesignSystem().register(vsCodeTextField());

@customElement('ignite-connection-editor')
export class IgniteConnectionEditor extends LitElement {
  static override styles = [styles];

  @property({type: Object})
  config!: IgniteConnectionConfig;
  @property()
  setConfig!: (config: IgniteConnectionConfig) => void;

  override render() {
    return html`<table>
      <tbody>
        <tr>
          <td class="label-cell">
            <label>Name:</label>
          </td>
          <td>
            <vscode-text-field
              input=${this.config.name || ''}
              @input=${({target: {value}}: {target: HTMLInputElement}) => {
                this.setConfig({...this.config, name: value});
              }}
            ></vscode-text-field>
          </td>
        </tr>
        <tr>
          <td class="label-cell">
            <label>End Point:</label>
          </td>
          <td>
            <vscode-text-field
              value=${this.config.endPoint || ''}
              @input=${({target: {value}}: {target: HTMLInputElement}) => {
                this.setConfig({...this.config, endPoint: value});
              }}
            ></vscode-text-field>
          </td>
        </tr>
        <tr>
          <td class="label-cell">
            <label>Default Cache Name:</label>
          </td>
          <td>
            <vscode-text-field
              value=${this.config.defaultCacheName || ''}
              @input=${({target: {value}}: {target: HTMLInputElement}) => {
                this.setConfig({...this.config, defaultCacheName: value});
              }}
            ></vscode-text-field>
          </td>
        </tr>
      </tbody>
    </table>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ignite-connection-editor': IgniteConnectionEditor;
  }
}
