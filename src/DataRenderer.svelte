<script>
  import { complexComputing } from "./complexComputing.js";

  // This is a Svelte 4 component (no runes mode)

  export let data;

  $: churnedData = complexComputing(data);
</script>

<pre>{JSON.stringify(data)}</pre>

<br />

<pre>{JSON.stringify(churnedData)}</pre>
