<script>
  // This is a Svelte 4 component (no runes mode)

  export let data;

  $: churnedData = structuredClone(data);
</script>

<pre>{JSON.stringify(data)}</pre>

<br />

<pre>{JSON.stringify(churnedData)}</pre>
