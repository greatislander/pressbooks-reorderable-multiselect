import { html } from 'lit';
import '../pressbooks-reorderable-multiselect.js';

export default {
  title: 'PressbooksReorderableMultiselect',
  component: 'pressbooks-reorderable-multiselect',
};

function Template({ slot, styles, messages }) {
  return html`<style>
      body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; } ${styles}
    </style>
    <pressbooks-reorderable-multiselect data-messages="${messages ?? '{}'}">
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

export const Localized = Template.bind({});
Localized.args = {
  slot: html`<label>Nains</label>
    <hint>Choisissez des nains.</hint>
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
  messages: JSON.stringify({
    Add: 'Ajouter',
    Remove: 'Retirer',
    'Available options': 'Options disponibles',
    'Move Up': 'Déplacer vers le haut',
    'Move Down': 'Déplacer vers le bas',
    'Moved to position $1': 'Déplacé en position $1',
    'Removed $1 from selection': 'Supprimer $1 de la sélection',
    'Added $1 to selection': 'Ajouté $1 à la sélection',
  }),
};
