import { mountComponent } from './mountComponent.svelte'
import DataRenderer from './DataRenderer.svelte'

const data = {
  hello: 18,
  whats: "huh",
  up: false
};

const target = document.getElementById('app');
const app = mountComponent(DataRenderer, { target, props: { data } })

export default app
