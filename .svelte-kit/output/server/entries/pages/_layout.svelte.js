import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../chunks/ssr.js";
const css$2 = {
  code: ".nav__item.svelte-1hje3ou.svelte-1hje3ou{cursor:default;display:flex;text-align:center;vertical-align:middle;line-height:23px;height:24px;padding:0px 12px;border-radius:2px;background:transparent;border:none;color:white;-webkit-user-drag:none}.nav__item.svelte-1hje3ou.svelte-1hje3ou:hover{background:linear-gradient(\n			to bottom,\n			rgba(255, 255, 255, 0.25) 0%,\n			rgba(255, 255, 255, 0.4) 50%,\n			rgba(255, 255, 255, 0.25) 50%,\n			rgba(255, 255, 255, 0.1) 100%\n		);text-decoration:none;outline:solid thin rgba(0, 0, 0, 0.5);box-shadow:inset 0px 0px 0px 1px rgba(255, 255, 255, 0.5)}.nav__item.svelte-1hje3ou.svelte-1hje3ou:active{outline:solid thin rgba(0, 0, 0, 0.75);box-shadow:inset 0px 0px 8px 0px rgb(0, 87, 91),\n			inset 0px 0px 0px 1px rgba(255, 255, 255, 0.75);background:rgba(234, 234, 234, 0.298)}.nav__item.svelte-1hje3ou:active>span.svelte-1hje3ou{transform:translate(1px, 1px)}.nav__item.svelte-1hje3ou.svelte-1hje3ou{margin-left:2px;margin-right:2px}",
  map: null
};
const Navitem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href = "/" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  $$result.css.add(css$2);
  return `<a draggable="false" class="nav__item svelte-1hje3ou"${add_attribute("href", href, 0)}><span class="svelte-1hje3ou">${slots.default ? slots.default({}) : ``}</span> </a>`;
});
const css$1 = {
  code: ".nav.svelte-157so0h{position:fixed;width:calc(100% - 2px);margin-left:1px;height:32px;background:linear-gradient(to bottom, #87b2c0 0%, #468a9e 50%, #105c77 50%, #529cab 100%);outline:solid thin rgba(0, 0, 0, 0.5);box-shadow:inset 0px 0px 0px 1px rgba(255, 255, 255, 0.5),\n			0px 0px 16px 0px rgb(1, 92, 95);color:white;display:flex;align-items:center;z-index:9}.nav__left.svelte-157so0h,.nav__right.svelte-157so0h{display:flex;box-sizing:border-box;padding:0px 4px}.nav__left.svelte-157so0h{flex-grow:1}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="nav svelte-157so0h"><div class="nav__left svelte-157so0h">${validate_component(Navitem, "Navitem").$$render($$result, { href: "/" }, {}, {
    default: () => {
      return `Home`;
    }
  })} ${validate_component(Navitem, "Navitem").$$render($$result, { href: "/download" }, {}, {
    default: () => {
      return `Download`;
    }
  })} ${validate_component(Navitem, "Navitem").$$render($$result, { href: "/faq" }, {}, {
    default: () => {
      return `FAQ`;
    }
  })}</div> <div class="nav__right svelte-157so0h">${validate_component(Navitem, "Navitem").$$render($$result, {}, {}, {
    default: () => {
      return `Discord Server`;
    }
  })}</div> </div>`;
});
const embed = "/_app/immutable/assets/embed.DBgECO0J.png";
const css = {
  code: ".content.svelte-x103n5{box-sizing:border-box;padding-top:60px}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-5km9qj_START --><meta${add_attribute("content", embed, 0)} property="og:image"><!-- HEAD_svelte-5km9qj_END -->`, ""} ${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <div class="content svelte-x103n5">${slots.default ? slots.default({}) : ``} </div>`;
});
export {
  Layout as default
};
