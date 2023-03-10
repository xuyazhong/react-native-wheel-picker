/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */
'use strict';

import {requireNativeComponent} from 'react-native';

import type {SyntheticEvent} from 'react-native/Libraries/Types/CoreEventTypes';
import type {TextStyleProp} from 'react-native/Libraries/StyleSheet/StyleSheet';
import type {NativeComponent} from 'react-native/Libraries/Renderer/shims/ReactNative';

type PickerIOSChangeEvent = SyntheticEvent<
    $ReadOnly<{|
    newValue: number | string,
    newIndex: number,
|}>,
>;

type RNWPickerIOSTypeItemType = $ReadOnly<{|
    label: ?Label,
    value: ?(number | string),
    textColor: ?number,
    testID: ?string,
|}>;

type Label = Stringish | number;

type RNWPickerIOSType = Class<
    NativeComponent<
    $ReadOnly<{|
    items: $ReadOnlyArray<RNWPickerIOSTypeItemType>,
    onChange: (event: PickerIOSChangeEvent) => void,
    selectedIndex: number,
    style?: ?TextStyleProp,
    testID?: ?string,
|}>,
>,
>;

module.exports = ((requireNativeComponent('RNWPicker'): any): RNWPickerIOSType);
