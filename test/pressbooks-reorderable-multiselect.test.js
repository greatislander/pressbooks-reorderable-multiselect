/* global describe, it */
import { expect, fixture, nextFrame } from '@open-wc/testing';
import { html } from 'lit';

import '../pressbooks-reorderable-multiselect.js';

describe('PressbooksReorderableMultiselect', () => {
  it('renders with minimum requirements', async () => {
    const el = await fixture(
      html`<pressbooks-reorderable-multiselect data-messages='{"Moved to position $1":"Déplacé au poste $1"}'>
        <label>Dwarves</label>
        <hint>Choose some dwarves.</hint>
        <input type="hidden" name="dwarves" value="thorin,bifur,bombur,dwalin" />
        <select name="options">
          <option value="thorin">Thorin</option>
          <option value="dwalin">Dwalin</option>
          <option value="balin">Balin</option>
          <option value="bifur">Bifur</option>
          <option value="bofur">Bofur</option>
          <option value="bombur">Bombur</option>
          <option value="fili">Fili</option>
          <option value="kili">Kili</option>
          <option value="oin">Oin</option>
          <option value="gloin">Gloin</option>
          <option value="nori">Nori</option>
          <option value="dori">Dori</option>
          <option value="ori">Ori</option>
        </select>
      </pressbooks-reorderable-multiselect>`,
    );

    expect(el.hint).to.equal('Choose some dwarves.');
    expect(el.label).to.equal('Dwarves');
  });

  it('announces additions', async () => {
    const el = await fixture(
      html`<pressbooks-reorderable-multiselect>
        <label>Dwarves</label>
        <hint>Choose some dwarves.</hint>
        <input type="hidden" name="dwarves" value="" />
        <select name="options">
          <option value="thorin">Thorin</option>
          <option value="dwalin">Dwalin</option>
          <option value="balin">Balin</option>
          <option value="bifur">Bifur</option>
          <option value="bofur">Bofur</option>
          <option value="bombur">Bombur</option>
          <option value="fili">Fili</option>
          <option value="kili">Kili</option>
          <option value="oin">Oin</option>
          <option value="gloin">Gloin</option>
          <option value="nori">Nori</option>
          <option value="dori">Dori</option>
          <option value="ori">Ori</option>
        </select>
      </pressbooks-reorderable-multiselect>`,
    );

    const addBtn = el.shadowRoot.querySelector('.add');
    const select = el.shadowRoot.querySelector('select');
    const liveRegion = el.shadowRoot.querySelector('[aria-live]');

    select.value = 'thorin';
    addBtn.click();
    await nextFrame();

    expect(liveRegion.innerText).to.equal('Added Thorin to selection');

    select.value = 'dwalin';
    addBtn.click();
    await nextFrame();

    expect(liveRegion.innerText).to.equal('Added Dwalin to selection');

    select.value = 'balin';
    addBtn.click();
    await nextFrame();

    expect(liveRegion.innerText).to.equal('Added Balin to selection');
  });
});
