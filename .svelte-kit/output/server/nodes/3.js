

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/download/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.t7yRiUfO.js","_app/immutable/chunks/scheduler.mUDnACJu.js","_app/immutable/chunks/index.ghOtLcqO.js","_app/immutable/chunks/CommandLink.RlnDtkR6.js"];
export const stylesheets = ["_app/immutable/assets/3.PxeUIFr9.css","_app/immutable/assets/CommandLink.HNLm_dZ1.css"];
export const fonts = [];
