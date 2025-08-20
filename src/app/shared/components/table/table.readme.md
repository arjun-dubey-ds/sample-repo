# Table Component

## Introduction 
Table Component is designed to provide a flexible and efficient way to display tabular data in your Angular applications. This component offers a range of customizable features, including optional pagination settings, sorting capabilities, action buttons, and filtering options, making it an ideal solution for a variety of data presentation needs. Whether you're dealing with large datasets or need to provide users with the ability to interact with data through actions and filters, this component is built to handle it all with ease. 

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
```html
<[ideate-table]
  [settings]="tableSettings"
  [records]="records"
>
</[ideate-table]>
```

## Inputs
| Name | Type | Default | Description | 
| -------- | --------- | -------- | -------- | 
| `settings` | [TableSettings[]](https://github.com/uhc-tech-employer-individual/pioneers_pioneers-ideate-ui/blob/dev/src/app/shared/models/table.interface.ts) | `null` | Configuration array for customizing table structure such as columns, table data pipes, and action buttons |
| `records` | `any[]` | `null` | Array of data records to display in the table |
| `paginate` | `boolean` | `false` | Enables pagination if set to true |
| `pageSize` | `number` | `10` | Number of items per page in pagination |
| `rowsPerPageOptions` | `number[]` | `null` | Dropdown options for rows per page |
| `enableSort`| `boolean` | `false` | Enables sort feature if set to true |
| `enableFilter`| `boolean` | `false` | Enables filter feature if set to true |
| `enableGlobalFilter`| `boolean` | `false` | Enables filter feature if set to true |
| `loading` | `boolean` | `false` | Indicates whether table component is loading or not |


## Dependencies
List any dependencies required for the component:
- @angular/core
- @angular/common
- primeng