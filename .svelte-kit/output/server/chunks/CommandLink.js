import { c as create_ssr_component, e as escape } from "./ssr.js";
const css = {
  code: '.commandLink.svelte-1ek63pp.svelte-1ek63pp{--hover-enter-length:0.25s;--hover-leave-length:1s;--active-enter-length:0s;--active-leave-length:0.5s;margin:2px 0px;width:calc(100% - 16px);height:fit-content;padding:8px 16px 12px 0px;border-radius:2px;box-shadow:inset 0px 0px 0px 1px rgba(255, 255, 255, 0);color:#151c55;text-shadow:0px 0px 0.5px #151c5552;transition:var(--hover-leave-length) linear;outline:solid thin rgba(255, 255, 255, 0);transition-property:box-shadow, color, text-shadow, outline;z-index:1;position:relative}.commandLink.svelte-1ek63pp.svelte-1ek63pp::before{position:absolute;content:"";top:0;right:0;bottom:0;left:0;background:linear-gradient(to bottom, #fff 0%, #f6f6f6 100%);z-index:-1;transition:opacity linear;transition-duration:var(--hover-enter-length);opacity:0;border-radius:2px}.commandLink.svelte-1ek63pp.svelte-1ek63pp:not(:hover)::before{transition-duration:var(--hover-leave-length)}.commandLink.svelte-1ek63pp.svelte-1ek63pp:not(:disabled):hover::before{opacity:1}.commandLink.svelte-1ek63pp.svelte-1ek63pp::after{box-shadow:inset 0px 0px 2px 2px #ccc;position:absolute;content:"";top:0;right:0;bottom:0;left:0;background:#f2f3f3;z-index:-1;transition:opacity linear;transition-duration:var(--active-leave-length);opacity:0;border-radius:2px}.commandLink.svelte-1ek63pp.svelte-1ek63pp:active::after{transition-duration:var(--active-enter-length)}.commandLink.svelte-1ek63pp.svelte-1ek63pp:not(:disabled):active::after{opacity:1}.commandLink.svelte-1ek63pp.svelte-1ek63pp:hover{outline:solid thin #c6c6c6;transition-duration:var(--hover-enter-length)}.commandLink.svelte-1ek63pp.svelte-1ek63pp:active{outline:solid thin #7a9ecc}.commandLink.svelte-1ek63pp h1.svelte-1ek63pp{margin:0;padding:0;font-size:12pt;font-weight:400;color:unset;padding-left:44px;transform:translateX(-12px)}.commandLinkIcon.svelte-1ek63pp.svelte-1ek63pp{float:left;position:relative;margin-top:3px;margin-right:16px;margin-left:4px;width:20px;height:18px;background-position-y:-3px;background-image:url($lib/assets/arrows.png);transition:var(--hover-leave-length) linear filter;filter:brightness(1)}.commandLink.svelte-1ek63pp.svelte-1ek63pp:hover{color:#074ae5 !important}.commandLink.svelte-1ek63pp:hover>.commandLinkIcon.svelte-1ek63pp{filter:brightness(1.2);transition-duration:var(--hover-enter-length)}.commandLink.svelte-1ek63pp:active>.commandLinkIcon.svelte-1ek63pp{filter:brightness(1);transition-duration:var(--active-enter-length)}.commandLinkDescription.svelte-1ek63pp.svelte-1ek63pp{width:100%;box-sizing:border-box;padding-left:34px;margin-top:2px}',
  map: null
};
const CommandLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { description = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  $$result.css.add(css);
  return `    <div class="commandLink svelte-1ek63pp"><div class="commandLinkIcon svelte-1ek63pp"></div> <div class="commandLinkText"><h1 class="commandLinkTitle svelte-1ek63pp">${escape(title)}</h1> <div class="commandLinkDescription svelte-1ek63pp">${escape(description)}</div></div> </div>`;
});
export {
  CommandLink as C
};
