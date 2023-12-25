import { c as create_ssr_component, e as escape, b as add_attribute, f as null_to_empty } from "../../chunks/ssr.js";
const screenshot1 = "/_app/immutable/assets/screenshot1.CugIWJFC.png";
const css = {
  code: '@keyframes svelte-mk4y5s-fade-in{from{opacity:0}to{opacity:1}}@keyframes svelte-mk4y5s-fade-out{from{opacity:1}to{opacity:0}}@keyframes svelte-mk4y5s-bounce-2{0%{transform:perspective(960px) rotateX(8deg) rotateY(20deg) rotateZ(-4deg)}50%{transform:perspective(960px) rotateX(12deg) rotateY(25deg) rotateZ(-6deg)\n				translateY(-24px)}}.content.svelte-mk4y5s.svelte-mk4y5s{display:flex;position:absolute;top:0;left:0;width:calc(100vw - 2%);height:100vh;align-items:center;justify-content:center}.screenshot.svelte-mk4y5s.svelte-mk4y5s{animation:svelte-mk4y5s-bounce-2 4s infinite ease-in-out;border-radius:6px;transform:perspective(960px) rotateX(8deg) rotateY(20deg) rotateZ(-4deg);backdrop-filter:blur(1px);filter:drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.5));margin-left:-32px}.because.svelte-mk4y5s.svelte-mk4y5s{font-size:96px;color:#359aae;text-shadow:0px 0px 24px rgba(49, 183, 220, 0.754);position:relative;width:fit-content}.because.svelte-mk4y5s.svelte-mk4y5s::after{width:fit-content;content:"because...";position:absolute;top:-45px;left:0;transform-origin:bottom center;transform:scaleY(-1);mask-image:linear-gradient(\n			to top,\n			rgba(0, 0, 0, 0.5),\n			rgba(0, 0, 0, 0.1) 30%,\n			rgba(0, 0, 0, 0) 50%\n		);-webkit-mask-image:linear-gradient(\n			to top,\n			rgba(0, 0, 0, 0.5),\n			rgba(0, 0, 0, 0.1) 30%,\n			rgba(0, 0, 0, 0) 50%\n		)}.info.svelte-mk4y5s.svelte-mk4y5s{margin-left:64px}.why-container.svelte-mk4y5s>p.svelte-mk4y5s{font-size:24px;font-weight:400;color:#014f5e;text-shadow:0px 0px 24px rgba(49, 183, 220, 0.754);box-sizing:border-box;opacity:1;position:absolute;margin-left:7px}.why.fade-in.svelte-mk4y5s.svelte-mk4y5s{animation:svelte-mk4y5s-fade-in var(--fade-out-delay) ease-in-out forwards}.why.fade-out.svelte-mk4y5s.svelte-mk4y5s{animation:svelte-mk4y5s-fade-out var(--fade-out-delay) ease-in-out forwards}.why.will-fade-in.svelte-mk4y5s.svelte-mk4y5s{opacity:1}.why.will-fade-out.svelte-mk4y5s.svelte-mk4y5s{opacity:0}@media(max-width: 900px){.screenshot.svelte-mk4y5s.svelte-mk4y5s{display:none}.content.svelte-mk4y5s.svelte-mk4y5s{margin-top:-48px;margin-left:-20px;text-align:center}}',
  map: null
};
const fadeOutDelay = 1e3;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let shouldFade = false;
  const text = [
    "AeroChat has the old-school Aero design, straight from Windows 7",
    "AeroChat has functional voice chat (sending and receiving voice data)",
    "AeroChat's free and open source",
    `AeroChat restores nudge functionality which you know and "love" from MSN/WLM '09`,
    "AeroChat's easy to use (most of the time)",
    "You can send files to your friends",
    "You can decide on AeroChat's future by contributing to it or by voting in polls",
    "AeroChat looks and feels just like WLM '09"
  ];
  let currentText = 0;
  let currentText2 = 0;
  let top = 80;
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1g4r29l_START -->${$$result.title = `<title>AeroChat — WLM &#39;09 themed Discord client</title>`, ""}<meta name="title" content="AeroChat — Discord client in the style of Windows Live Messenger 2009"><meta name="description" content="AeroChat is a new open source custom Discord client that looks 1-to-1 like WLM 2009. Download it here!"><!-- HEAD_svelte-1g4r29l_END -->`, ""} <div class="content svelte-mk4y5s" style="${"--fade-out-delay: " + escape(fadeOutDelay / 1e3, true) + "s"}"><div style="display: flex;"><img class="screenshot svelte-mk4y5s"${add_attribute("src", screenshot1, 0)} alt="A screenshot of the main window of the application."> <div class="info svelte-mk4y5s"><div class="because svelte-mk4y5s" data-svelte-h="svelte-6jcie3">because...</div> <div class="why-container svelte-mk4y5s"><p class="${escape(null_to_empty(`why will-fade-out ${shouldFade}`), true) + " svelte-mk4y5s"}">${escape(text[currentText2])}</p> <p id="fade-in" class="${escape(null_to_empty(`why will-fade-in ${shouldFade}`), true) + " svelte-mk4y5s"}">${escape(text[currentText])}</p></div> <article${add_attribute("style", `margin-top: ${top}px; max-width: 550px; margin-left: 5px`, 0)}><p data-svelte-h="svelte-k66yv7">AeroChat (also known as &quot;wlm-09-discord&quot;) is a total conversion for Discord to
					look and feel like Windows Live Messenger or MSN Messenger.</p> <p data-svelte-h="svelte-l8mx5v">It has tons of features you know and love from the official client, such as
					voice chat, file transfers and more. It even restores some old features from
					Windows Live Messenger 2009, such as nudges.</p> <p data-svelte-h="svelte-8g60cz">Furthermore, it&#39;s open source, so you can contribute if a feature you want isn&#39;t
					implemented yet, or if you want to fix a bug. The <a href="https://discord.com/invite/nP9SxVQGnu" target="_blank">Discord server</a>
					is also a great place to hang out and talk about the project, and even vote on future
					features and changes. For example, the name &quot;AeroChat&quot; was voted on by the community
					(it used to be called <code>wlm-09-discord</code>, how boring is that?!). This
					domain name (aerochat.live) was also voted on by the community.</p></article></div></div> </div>`;
});
export {
  Page as default
};
