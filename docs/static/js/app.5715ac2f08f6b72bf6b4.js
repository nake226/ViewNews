webpackJsonp([1],[,,,,,,,,,function(t,e,a){"use strict";e.a={name:"app"}},function(t,e,a){"use strict";function n(t){return s+t+".json?api-key="+i}var s="https://api.nytimes.com/svc/topstories/v2/",i="d6c24974592e4c28a27e2c7eecc4c5fe";e.a={name:"hello",data:function(){return{results:[],sections:"home, arts, automobiles, books, business, fashion, food, health, insider, magazine, movies, national, nyregion, obituaries, opinion, politics, realestate, science, sports, sundayreview, technology, theater, tmagazine, travel, upshot, world".split(", "),section:"home"}},computed:{processedPosts:function(){var t=this.results;t.map(function(t){var e=t.multimedia.find(function(t){return"superJumbo"===t.format});t.image_url=e?e.url:"http://placehold.it/300x200?text=N/A"});for(var e=[],a=0,n=0;a<t.length;a+=4,n++)e[n]=t.slice(a,a+4);return e}},mounted:function(){this.getPosts(this.section)},methods:{getPosts:function(t){var e=this,a=n(t);axios.get(a).then(function(t){e.results=t.data.results}).catch(function(t){console.log(t)})}}}},function(t,e,a){"use strict";var n=a(4),s=a.n(n);e.a={name:"Login",data:function(){return{email:"",password:""}},methods:{login:function(){var t=this;s.a.auth().signInWithEmailAndPassword(this.email,this.password).then(function(e){t.$router.replace("hello")},function(t){alert(t.message)})}}}},,function(t,e,a){"use strict";var n=a(4),s=a.n(n);e.a={name:"signUp",data:function(){return{email:"",password:""}},methods:{signUp:function(){var t=this;s.a.auth().createUserWithEmailAndPassword(this.email,this.password).then(function(e){t.$router.replace("hello")},function(t){alert(t.message)})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(6),s=a(16),i=a(20),o=a(4),r=a.n(o);n.a.config.productionTip=!1;var c=void 0,u={apiKey:"AIzaSyADC5YYNgsDD1HjwLkhpBRng8jpfek7KEw",authDomain:"vue-firebase-authenticat-c0e25.firebaseapp.com",databaseURL:"https://vue-firebase-authenticat-c0e25.firebaseio.com",projectId:"vue-firebase-authenticat-c0e25",storageBucket:"vue-firebase-authenticat-c0e25.appspot.com",messagingSenderId:"72046001552"};r.a.initializeApp(u),r.a.auth().onAuthStateChanged(function(t){c||(c=new n.a({el:"#app",router:i.a,components:{App:s.a},template:"<App/>"}))})},,function(t,e,a){"use strict";function n(t){a(17)}var s=a(9),i=a(19),o=a(3),r=n,c=o(s.a,i.a,!1,r,null,null);e.a=c.exports},function(t,e){},,function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("main",[a("router-view")],1)])},s=[],i={render:n,staticRenderFns:s};e.a=i},function(t,e,a){"use strict";var n=a(6),s=a(21),i=a(22),o=a(25),r=a(37),c=a(4),u=a.n(c);n.a.use(s.a);var l=new s.a({mode:"history",routes:[{path:"*",redirect:"/"},{path:"/",name:"Hello",component:i.a,meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:o.a},{path:"/sign-up",name:"SignUp",component:r.a}]});l.beforeEach(function(t,e,a){var n=u.a.auth().currentUser,s=t.matched.some(function(t){return t.meta.requiresAuth});s&&!n?a("login"):!s&&n?a("hello"):a()}),e.a=l},,function(t,e,a){"use strict";function n(t){a(23)}var s=a(10),i=a(24),o=a(3),r=n,c=o(s.a,i.a,!1,r,null,null);e.a=c.exports},function(t,e){},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h3",{staticClass:"title text-center"},[t._v("Vue News")]),t._v(" "),a("section",{staticClass:"callout secondary"},[a("form",[a("div",{staticClass:"row text-center"},[a("div",{staticClass:"large-6",staticStyle:{margin:"20px auto 0"}},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.section,expression:"section"}],on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.section=e.target.multiple?a:a[0]},function(e){t.getPosts(t.section)}]}},t._l(t.sections,function(e){return a("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])}))])])])]),t._v(" "),a("section",t._l(t.processedPosts,function(e){return a("div",{key:e,staticClass:"row"},t._l(e,function(e){return a("div",{key:e,staticClass:"columns large-3 medium-6"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-divider"},[t._v("\n            "+t._s(e.title)+"\n          ")]),t._v(" "),a("a",{attrs:{href:e.url,target:"_blank"}},[a("img",{attrs:{src:e.image_url}})]),t._v(" "),a("div",{staticClass:"card-section"},[t._v("\n            "+t._s(e.abstract)+"\n          ")])])])}))}))])},s=[],i={render:n,staticRenderFns:s};e.a=i},function(t,e,a){"use strict";function n(t){a(26)}var s=a(11),i=a(36),o=a(3),r=n,c=o(s.a,i.a,!1,r,null,null);e.a=c.exports},function(t,e){},,,,,,,,,,function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login"},[a("h3",{staticClass:"title title--login"},[t._v("Sign In")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("br"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("br"),t._v(" "),a("button",{on:{click:t.login}},[t._v("Connection")]),t._v(" "),a("p",[t._v("If you don't have an account, You can "),a("router-link",{attrs:{to:"/sign-up"}},[t._v("create one")]),t._v(".")],1)])},s=[],i={render:n,staticRenderFns:s};e.a=i},function(t,e,a){"use strict";function n(t){a(38)}var s=a(13),i=a(39),o=a(3),r=n,c=o(s.a,i.a,!1,r,null,null);e.a=c.exports},function(t,e){},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sign-up"},[a("h3",{staticClass:"title title--signUp"},[t._v("Let's create a new account!")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("br"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("br"),t._v(" "),a("button",{on:{click:t.signUp}},[t._v("Sign Up")]),t._v(" "),a("span",[t._v("or go back to "),a("router-link",{attrs:{to:"/login"}},[t._v("login")]),t._v(".")],1)])},s=[],i={render:n,staticRenderFns:s};e.a=i}],[14]);
//# sourceMappingURL=app.5715ac2f08f6b72bf6b4.js.map