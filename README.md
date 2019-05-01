Frameworks Used:
Vue.js- Front End Javascript Framework
Google Charts- Data Visualization framework by Google. Used to aid in drawing various charts on the app
Firebase SDK- The Realtime Database provided by Firebase is really simple and fast to use. 
               Additionally, it provides offline caching capabilities as well which was one of the main factors.
Vuetify- A framework for Vue.js that lets you design and incorporate components with material design

Bonus Points:
Used Vue.js in order to create the web app.
	I didn't have much experience with the framework. Just some very basic knowledge. So I thought it'd be helpful if I familiarize
	myself with the framework further and go through the learning curve.
Optimize the loading time
	All static assets are cached by the service worker in order to ensure faster load times. Used lighthouse to test and optimize the performance of the web app.
	Lazy loads the content inside cards to ensure faster load times. Gets data from the LocalStorage while accessing previously loaded data which reduces the number
	of database calls and makes it faster. 
Responsive Design
	I have strived to follow various material design guidelines and used cards to display the metrics and charts. This ensures more clarity and
	a simple design that'll let the user focus on the content more easily irrespective of the device they are using.
Progressive Web App
	I've been a huge fan of PWA's but had never actually got around to building one myself. With this app I managed to build my first PWA that
	can be installed by the user.
Offline Capable
	Used LocalStorage in the browser in order to store the data previously loaded in the browser. Additionally, the service worker caches various static assets
	used by the app in order to load the data offline. However, the Google Charts do not work offline as its against their Terms of Service and do not allow it.
