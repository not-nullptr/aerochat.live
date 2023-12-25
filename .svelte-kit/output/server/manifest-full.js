export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["embed.png","favicon.ico","sitemap.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.KHAOhMpm.js","app":"_app/immutable/entry/app.zd1SXCgK.js","imports":["_app/immutable/entry/start.KHAOhMpm.js","_app/immutable/chunks/scheduler.mUDnACJu.js","_app/immutable/chunks/singletons.g80ZrBqI.js","_app/immutable/entry/app.zd1SXCgK.js","_app/immutable/chunks/scheduler.mUDnACJu.js","_app/immutable/chunks/index.ghOtLcqO.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/download",
				pattern: /^\/download\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/faq",
				pattern: /^\/faq\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
