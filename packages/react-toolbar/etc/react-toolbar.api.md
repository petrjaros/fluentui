## API Report File for "@fluentui/react-toolbar"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import type { ComponentProps } from '@fluentui/react-utilities';
import type { ComponentState } from '@fluentui/react-utilities';
import type { ForwardRefComponent } from '@fluentui/react-utilities';
import * as React_2 from 'react';
import type { Slot } from '@fluentui/react-utilities';
import { SlotClassNames } from '@fluentui/react-utilities';

// @public
export const renderToolbar_unstable: (state: ToolbarState) => JSX.Element;

// @public
export const renderToolbarButton_unstable: (state: ToolbarButtonState) => JSX.Element;

// @public
export const renderToolbarDivider_unstable: (state: ToolbarDividerState) => JSX.Element;

// @public
export const Toolbar: ForwardRefComponent<ToolbarProps>;

// @public
export const ToolbarButton: ForwardRefComponent<ToolbarButtonProps>;

// @public (undocumented)
export const toolbarButtonClassNames: SlotClassNames<ToolbarButtonSlots>;

// Warning: (ae-forgotten-export) The symbol "ToolbarButtonCommons" needs to be exported by the entry point index.d.ts
//
// @public
export type ToolbarButtonProps = ComponentProps<ToolbarButtonSlots> & ToolbarButtonCommons;

// @public (undocumented)
export type ToolbarButtonSlots = {
    root: Slot<'div'>;
};

// @public
export type ToolbarButtonState = ComponentState<ToolbarButtonSlots> & ToolbarButtonCommons;

// @public (undocumented)
export const toolbarClassNames: SlotClassNames<ToolbarSlots>;

// @public
export const ToolbarDivider: ForwardRefComponent<ToolbarDividerProps>;

// @public (undocumented)
export const toolbarDividerClassNames: SlotClassNames<ToolbarDividerSlots>;

// Warning: (ae-forgotten-export) The symbol "ToolbarDividerCommons" needs to be exported by the entry point index.d.ts
//
// @public
export type ToolbarDividerProps = ComponentProps<ToolbarDividerSlots> & ToolbarDividerCommons;

// @public (undocumented)
export type ToolbarDividerSlots = {
    root: Slot<'div'>;
};

// @public
export type ToolbarDividerState = ComponentState<ToolbarDividerSlots> & ToolbarDividerCommons;

// Warning: (ae-forgotten-export) The symbol "ToolbarCommons" needs to be exported by the entry point index.d.ts
//
// @public
export type ToolbarProps = ComponentProps<ToolbarSlots> & ToolbarCommons;

// @public (undocumented)
export type ToolbarSlots = {
    root: Slot<'div'>;
};

// @public
export type ToolbarState = ComponentState<ToolbarSlots> & ToolbarCommons;

// @public
export const useToolbar_unstable: (props: ToolbarProps, ref: React_2.Ref<HTMLElement>) => ToolbarState;

// @public
export const useToolbarButton_unstable: (props: ToolbarButtonProps, ref: React_2.Ref<HTMLElement>) => ToolbarButtonState;

// @public
export const useToolbarButtonStyles_unstable: (state: ToolbarButtonState) => ToolbarButtonState;

// @public
export const useToolbarDivider_unstable: (props: ToolbarDividerProps, ref: React_2.Ref<HTMLElement>) => ToolbarDividerState;

// @public
export const useToolbarDividerStyles_unstable: (state: ToolbarDividerState) => ToolbarDividerState;

// @public
export const useToolbarStyles_unstable: (state: ToolbarState) => ToolbarState;

// (No @packageDocumentation comment for this package)

```