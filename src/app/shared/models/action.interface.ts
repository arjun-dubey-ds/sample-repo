import { PrimeIcons } from 'primeng/api';

export interface ActionSettings {
  title: Mode;
  showTitle?: boolean;
  icon?: PrimeIcons;
  func: any;
  class?: string[];
  params: object;
  size?: 'small' | 'large' | undefined;
  outlined?: boolean;
  severity?:
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'help'
    | 'primary'
    | 'secondary'
    | 'contrast'
    | null
    | undefined;
  showWhen: (data: any) => boolean;
}

export enum Mode {
  Add = 'Add New',
  AddChild = 'Add Child',
  Edit = 'Edit',
  Error = 'Error',
  Deactivate = 'Deactivate',
  Activate = 'Activate',
  ChangeLog = 'Change Log',
  View = 'View',
  Clone = 'Clone',
  Standard = 'Standard',
  Custom = 'Custom',
}
