import { html } from 'lit';
import '../pressbooks-reorderable-multiselect.js';

export default {
  title: 'PressbooksReorderableMultiselect',
  component: 'pressbooks-reorderable-multiselect',
};

function Template({ slot, styles }) {
  return html`<style>
      body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; } ${styles}
    </style>
    <pressbooks-reorderable-multiselect>
      ${slot}
    </pressbooks-reorderable-multiselect> `;
}

export const Regular = Template.bind({});
Regular.args = {
  slot: html`<label>Dwarves</label>
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
    </select>`,
};
