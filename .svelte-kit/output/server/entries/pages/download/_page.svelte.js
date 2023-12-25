import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { C as CommandLink } from "../../../chunks/CommandLink.js";
const screenshot2 = "/_app/immutable/assets/screenshot2.-5TMpdyw.png";
const screenshot3 = "/_app/immutable/assets/screenshot3.1eIVjEgp.png";
const css = {
  code: '@keyframes svelte-18gbid6-fade-in{from{opacity:0}to{opacity:1}}@keyframes svelte-18gbid6-fade-out{from{opacity:1}to{opacity:0}}.content.svelte-18gbid6.svelte-18gbid6{display:flex;position:absolute;top:0;left:0;width:calc(100vw - 2%);height:100vh;align-items:center;justify-content:center}@keyframes svelte-18gbid6-bounce-1{0%{transform:perspective(960px) rotateX(4deg) rotateY(8deg) rotateZ(-3deg)}50%{transform:perspective(750px) translateY(5px) rotateX(6deg) rotateY(10deg)\n				rotateZ(-4deg)}100%{transform:perspective(960px) rotateX(4deg) rotateY(8deg) rotateZ(-3deg)}}@keyframes svelte-18gbid6-bounce-2{0%{transform:perspective(720px) translate3d(0px, 50px, 80px) rotateX(12deg) rotateY(-8deg)\n				rotateZ(3deg)}50%{transform:perspective(720px) translate3d(0px, 42px, 80px) rotateX(8deg) rotateY(-6deg)\n				rotateZ(5deg)}100%{transform:perspective(720px) translate3d(0px, 50px, 80px) rotateX(12deg) rotateY(-8deg)\n				rotateZ(3deg)}}.screenshot2.svelte-18gbid6.svelte-18gbid6{transform:perspective(960px) rotateX(4deg) rotateY(14deg) rotateZ(-3deg);animation:svelte-18gbid6-bounce-1 4s infinite ease-in-out;margin-left:-32px}.screenshot3.svelte-18gbid6.svelte-18gbid6{transform:perspective(720px) translate3d(0px, 50px, 80px) rotateX(12deg) rotateY(-8deg)\n			rotateZ(3deg);margin-top:128px;margin-left:-250px;animation:svelte-18gbid6-bounce-2 7s infinite ease-in-out}.screenshot.svelte-18gbid6.svelte-18gbid6{border-radius:6px;box-shadow:0px 0px 8px 0px rgba(0, 0, 0, 1)}.screenshots.svelte-18gbid6.svelte-18gbid6{width:400px;height:670px;transform-style:preserve-3d}.screenshots.svelte-18gbid6>img.svelte-18gbid6{position:absolute}.because.svelte-18gbid6.svelte-18gbid6{font-size:96px;color:#359aae;text-shadow:0px 0px 24px rgba(49, 183, 220, 0.754);position:relative;width:fit-content}.because.svelte-18gbid6.svelte-18gbid6::after{width:fit-content;content:"oin the club";width:100%;position:absolute;top:-48px;left:23px;transform-origin:bottom center;transform:scaleY(-1);mask-image:linear-gradient(\n			to top,\n			rgba(0, 0, 0, 0.5),\n			rgba(0, 0, 0, 0.1) 30%,\n			rgba(0, 0, 0, 0) 50%\n		);-webkit-mask-image:linear-gradient(\n			to top,\n			rgba(0, 0, 0, 0.5),\n			rgba(0, 0, 0, 0.1) 30%,\n			rgba(0, 0, 0, 0) 50%\n		)}.info.svelte-18gbid6.svelte-18gbid6{margin-left:64px}.why-container.svelte-18gbid6.svelte-18gbid6{margin-left:-12px;display:flex;flex-direction:column}.why-container.svelte-18gbid6>p.svelte-18gbid6{font-size:24px;font-weight:400;color:#014f5e;text-shadow:0px 0px 24px rgba(49, 183, 220, 0.754);box-sizing:border-box;opacity:1;max-width:450px}@media(max-width: 1600px){.screenshots.svelte-18gbid6.svelte-18gbid6{display:none}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-tiunvc_START -->${$$result.title = `<title>Download AeroChat — AeroChat</title>`, ""}<meta name="title" content="Download AeroChat — AeroChat"><meta name="description" content="Download any version of AeroChat here! Currently supports Windows 10 and Windows 11. AeroChat is an open source Discord client inspired by WLM 2009."><!-- HEAD_svelte-tiunvc_END -->`, ""} <div class="content svelte-18gbid6"><div style="display: flex;"><div class="screenshots svelte-18gbid6" data-svelte-h="svelte-1qu4i22"><img class="screenshot screenshot2 svelte-18gbid6"${add_attribute("src", screenshot2, 0)} alt="A screenshot of AeroChat's main window."> <img class="screenshot screenshot3 svelte-18gbid6"${add_attribute("src", screenshot3, 0)} alt="A screenshot of AeroChat's server chat window."></div> <div class="info svelte-18gbid6"><div class="because svelte-18gbid6" data-svelte-h="svelte-i4z9ju">join the club</div> <div class="why-container svelte-18gbid6"><p class="svelte-18gbid6" data-svelte-h="svelte-k6b2tz">Download AeroChat for Windows:</p>  ${validate_component(CommandLink, "CommandLink").$$render(
    $$result,
    {
      title: "Download the latest version of AeroChat",
      description: "This will download the latest tag from AeroChat's GitHub repository directly."
    },
    {},
    {}
  )} ${validate_component(CommandLink, "CommandLink").$$render(
    $$result,
    {
      title: "View all releases",
      description: "This will open AeroChat's GitHub respository and view all public releases."
    },
    {},
    {}
  )}</div></div></div> </div>`;
});
export {
  Page as default
};
