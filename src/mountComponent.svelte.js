import { mount, unmount } from 'svelte';

/**
 * Mounts the given component to the given element. Returns a handle
 * to destroy and unmount the component
 */
export const mountComponent = (component, { target, props }) => {
  // eslint-disable-next-line no-undef
  const reactiveProps = $state(props);

  const handle = mount(component, {
    target,
    props: reactiveProps,
  });

  return {
    destroy() {
      unmount(handle);
    },
    set(newProps) {
      Object.entries(newProps).forEach(([key, value]) => {
        reactiveProps[key] = value;
      });
    },
  };
};
