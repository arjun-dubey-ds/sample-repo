# Page Component

## Introduction 
Page Component serves as a container for displaying specific content or functionality within the application. It encapsulates a cohesive set of UI elements and logic related to a particular page or view.

## Prerequisites 
Make sure your project meets the following requirements:
- Angular version 18.0.0 or higher 

## Usage 
### Importing the Component 
First, you need to import the component into your Angular module. The component is part of the shared module, so you need to import the shared module where you want to use the component: 

```typescript 
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({ 
	declarations: [],
	imports: [ SharedModule ],
	exports: [] 
}) 

export class [YourModuleName] { }
```

### Using the Component 
Now you can use the component in your templates:
```typescript
// foobar.component.ts
import { PrimeIcons } from "primeng/api"

export class FooBarComponent {
 pageTitle: string = "Foo Bar"
 pageIcon: string = PrimeIcons.PLUS
}
```
```html
// foobar.component.html
<[am-page]
  [title]="pageTitle"
  [icon]="pageIcon"
>
	// child components
</[am-page]>
```

## Inputs
| Name | Type | Default | Description | 
| -------- | -------- | -------- | -------- | 
| `title`| `string` | `null` | Title or heading of the page |
| `icon`| `string` | `null` | PrimeIcon constant to display before the page title. Use `null` or empty string for no icon. |
| `actions` | [ActionSettings[]](https://github.com/uhc-tech-employer-individual/pioneers_pioneers-ideate-ui/blob/dev/src/app/shared/models/action.interface.ts) | `null` | Accepts an array of `ActionSettings` objects that represent buttons, dropdown menu items, or other actionable elements associated with the page. These actions typically appear in the page header or toolbar, providing users with options to interact with the content or perform specific tasks related to the page |


## Dependencies
List any dependencies required for the component:
- @angular/core
- @angular/common
- primeng/api
