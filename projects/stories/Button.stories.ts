import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { ButtonComponent, ButtonModule } from '@ui-kit/ui-components/button';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonModule],
    }),
  ],
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
  template: `
    <div class="preview-list">
      <ui-button
        (onClick)="onClick($event)"
        [color]="color"
        [type]="type"
        [disabled]="disabled"
        [loading]="loading"
        [size]="size"
        [shape]="shape"
        [label]="label"
        [icon]="icon"
      >
      </ui-button>
    </div>
  `,
});

export const Button = Template.bind({});
Button.args = {
  label: 'Button',
};
Button.parameters = {
  docs: {
    source: {
      code: '<amp-button label="Button"></amp-button>',
    },
  },
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  disabled: true,
  label: 'Disabled',
};
DisabledButton.parameters = {
  docs: {
    source: {
      code: '<amp-button [disabled]="true" label="Disabled"></amp-button>',
    },
  },
};

export const LoadingButton = Template.bind({});
LoadingButton.args = {
  loading: true,
  label: 'Loading',
};
LoadingButton.parameters = {
  docs: {
    source: {
      code: '<amp-button [loading]="true" label="Loading"></amp-button>',
    },
  },
};

export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args = {
  label: 'Like',
  icon: 'heart',
};
ButtonWithIcon.parameters = {
  docs: {
    source: {
      code: '<amp-button label="Like" svg="heart"></amp-button>',
    },
  },
};

export const IconButton = Template.bind({});
IconButton.args = {
  label: '',
  icon: 'heart',
  shape: 'square',
};
IconButton.parameters = {
  docs: {
    source: {
      code: '<amp-button icon="heart"></amp-button>',
    },
  },
};
