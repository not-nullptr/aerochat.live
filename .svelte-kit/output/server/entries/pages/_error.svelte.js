import { g as getContext, c as create_ssr_component, d as subscribe, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { C as CommandLink } from "../../chunks/CommandLink.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const css = {
  code: ".content.svelte-1dz3tlq{width:calc(100vw);display:flex;justify-content:center}.error.svelte-1dz3tlq{max-width:450px;width:100%;box-sizing:border-box;padding:12px}.error__info.svelte-1dz3tlq{white-space:pre-line;outline:solid thin rgba(0, 0, 0, 0.5);box-shadow:inset 0px 0px 0px 1px rgba(255, 255, 255, 0.5);background:linear-gradient(to bottom, #edfff9 0%, #e2eeeb 100%);width:fit-content;padding:4px 8px;border-radius:2px;color:rgb(0, 0, 0);text-shadow:0px 0px 2px rgb(255, 255, 255, 0.5),\n			0px 0px 4px rgb(255, 255, 255, 0.5),\n			0px 0px 6px rgb(255, 255, 255, 0.5),\n			0px 0px 8px rgb(255, 255, 255, 0.5)}",
  map: null
};
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="content svelte-1dz3tlq"><div class="error svelte-1dz3tlq"><h1 data-svelte-h="svelte-10th5ak">An error has occured</h1> <p data-svelte-h="svelte-1eafemo">Unfortunately, an error was encountered whilst trying to process your request.</p> <p data-svelte-h="svelte-100iek0">If you believe this is a mistake, please contact us on our <a href="https://discord.gg/nP9SxVQGnu" target="_blank">Discord server</a>.</p> <p class="error__info svelte-1dz3tlq">Error code: ${escape($page.status)}
			Error message: ${escape($page.error?.message)}
			Route: ${escape($page.url.pathname)}</p> ${validate_component(CommandLink, "CommandLink").$$render($$result, { title: "Go home" }, {}, {})}</div> </div>`;
});
export {
  Error$1 as default
};
