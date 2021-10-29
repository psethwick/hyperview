// @flow

/**
 * Copyright (c) Garuda Labs, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { getElements } from 'hyperview/test/helpers';
import HvPickerField from 'hyperview/src/components/hv-picker-field';
import { LOCAL_NAME } from 'hyperview/src/types';


describe('HvPickerField', () => {
  describe('getFormInputValues', () => {
    let elements;
    beforeEach(() => {
      elements = getElements(
        `
          <doc xmlns="https://hyperview.org/hyperview">
            <screen>
              <body>
                <picker-field name="input1" value="0">
                  <picker-item label="Choice 0" value="0" />
                  <picker-item label="Choice 1" value="1" />
                </picker-field>
                <picker-field name="input2">
                  <picker-item label="Choice 2" value="2" />
                  <picker-item label="Choice 3" value="3" />
                </picker-field>
              </body>
            </screen>
          </doc>
        `,
        LOCAL_NAME.PICKER_FIELD,
      );
    });
    it('returns value attr', async () => {
      expect(HvPickerField.getFormInputValues(elements[0])).toEqual(['0']);
    });
    it('returns empty string if no value attr', async () => {
      expect(HvPickerField.getFormInputValues(elements[1])).toEqual(['']);
    });
  });
});
