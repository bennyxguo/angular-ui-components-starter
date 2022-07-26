import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
    <label>Buttons</label>
    <p class="preview-list">
      <ui-button>Neutral</ui-button>
      <ui-button color="primary" label="Primary"></ui-button>
      <ui-button color="secondary" label="Secondary"></ui-button>
      <ui-button color="accent" label="Accent"></ui-button>
      <ui-button color="info" label="Info"></ui-button>
      <ui-button color="warning" label="Warning"></ui-button>
      <ui-button color="error" label="Error"></ui-button>
    </p>

    <label>Outlined Buttons</label>
    <p class="preview-list">
      <ui-button type="outline" label="Neutral"></ui-button>
      <ui-button color="primary" type="outline" label="Primary"> </ui-button>
      <ui-button color="secondary" type="outline" label="Secondary"></ui-button>
      <ui-button color="accent" type="outline" label="Accent"></ui-button>
      <ui-button color="info" type="outline" label="Info"></ui-button>
      <ui-button color="warning" type="outline" label="Warning"></ui-button>
      <ui-button color="error" type="outline" label="Error"></ui-button>
    </p>

    <label>Ghost and Link Buttons</label>
    <p class="preview-list">
      <ui-button type="ghost" label="Ghost"></ui-button>
      <ui-button type="link" label="Link"></ui-button>
    </p>

    <label>Disabled Button</label>
    <p class="preview-list">
      <ui-button [disabled]="true" label="Disabled"></ui-button>
    </p>

    <label>Loading Button</label>
    <p class="preview-list">
      <ui-button [loading]="true" label="Loading"></ui-button>
    </p>

    <label>Icon Button</label>
    <p class="preview-list">
      <ui-button icon="heart" label="Like"></ui-button>
    </p>
  </div>`,
})
export class AppComponent {
  title = 'ui-demo';
}
