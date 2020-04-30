(this.webpackJsonpmeetup22=this.webpackJsonpmeetup22||[]).push([[0],{21:function(e,t,n){e.exports=n(46)},26:function(e,t,n){},27:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(19),s=n.n(i),o=(n(26),n(1)),c=n(5),l=n(3),u=n(2),h=(n(27),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={showDetails:!1},e.handleShowDetails=function(){!1===e.state.showDetails?e.setState({showDetails:!0}):e.setState({showDetails:!1})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.state.showDetails;return r.a.createElement("div",{className:"event"},r.a.createElement("div",{className:"event__Overview"},r.a.createElement("p",{className:"event__Overview--name"},this.props.event.name),r.a.createElement("p",{className:"event__Overview--localDate"},this.props.event.local_date," | ",this.props.event.local_time),t&&r.a.createElement("button",{className:"details-btn",onClick:function(){return e.handleShowDetails()}},"hide details"),!t&&r.a.createElement("button",{className:"details-btn",onClick:function(){return e.handleShowDetails()}},"show details"),"        "),t&&r.a.createElement("div",{className:"event__Details"},r.a.createElement("h3",null,"About event:"),r.a.createElement("h4",null,r.a.createElement("a",{href:this.props.event.link,target:"_blank"},"GoTo MeetUp")),r.a.createElement("p",{className:"event__Details--description",dangerouslySetInnerHTML:{__html:this.props.event.description}})))}}]),n}(a.Component)),d=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("ul",{className:"EventList"},this.props.events.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(h,{event:e}))})))}}]),n}(a.Component),p=n(6),m=n.n(p),v=n(7),f={city:{id:1007700,city:"M\xfcnchen",lat:48.14,lon:11.58,state:"",country:"de",zip:"meetup3",member_count:1257},events:[{created:1563825339e3,duration:9e6,id:"263370107",name:"Microservices mit dem MicroProfile 3.x",rsvp_limit:80,date_in_series_pattern:!1,status:"upcoming",time:15669252e5,local_date:"2019-08-27",local_time:"19:00",updated:1563825339e3,utc_offset:72e5,waitlist_count:79,yes_rsvp_count:80,venue:{id:26266792,name:"adesso AG",lat:53.54524230957031,lon:9.950983047485352,repinned:!1,address_1:"Gro\xdfe Elbstra\xdfe 36",city:"Hamburg",country:"de",localized_country_name:"Deutschland"},group:{created:1387402147e3,name:"Java User Group Hamburg",id:11500362,join_mode:"open",lat:53.54999923706055,lon:10,urlname:"jug-hamburg",who:"Mitglieder",localized_location:"Hamburg, Deutschland",state:"",country:"de",region:"de_DE",timezone:"Europe/Berlin"},link:"https://www.meetup.com/de-DE/jug-hamburg/events/263370107/",description:"<p>Wer Microservices in Java entwickeln m\xf6chte, muss nicht zwangsl\xe4ufig zu Spring Boot greifen. Es lohnt ein Blick auf alternative Frameworks, die in zunehmender Anzahl verf\xfcgbar sind und bez\xfcglich ihrer Funktionalit\xe4t stark aufholen. So schreitet auch die Entwicklung des MicroProfiles weiter voran. In beeindruckender Geschwindigkeit wurden zahlreiche APIs entwickelt, die (nicht nur) f\xfcr die Entwicklung von Microservices sehr hilfreich sind.<br/>Hierzu z\xe4hlen die Unterst\xfctzung von Metriken, Health Checks, Fault Tolerance und JSON Web Tokens. F\xfcr den Einsatz im Projekt kann aus unterschiedlichen Implementierungen wie TomEE, Thorntail oder OpenLiberty gew\xe4hlt werden. In dieser Live-Coding-Session wird der praktische Einsatz von MicroProfile anhand eines Praxisbeispiels demonstriert.<br/> <br/> <br/>Referent:<br/>Thilo Frotscher arbeitet als freiberuflicher Softwarearchitekt und Trainer. Als Experte f\xfcr Enterprise Java und Systemintegration unterst\xfctzt er seine Kunden \xfcberwiegend durch Entwicklung, Reviews oder die Durchf\xfchrung von Schulungen. Thilo ist (Co-)Autor mehrerer B\xfccher in den Bereichen Java EE, (Web) Services und Systemintegration, hat zahlreiche Fachartikel verfasst und spricht regelm\xe4\xdfig auf Fachkonferenzen und Schulungsveranstaltungen oder bei Java User Groups.</p> ",visibility:"public",member_pay_fee:!1}]},g=n(8),b=n.n(g);function w(e){return y.apply(this,arguments)}function y(){return(y=Object(v.a)(m.a.mark((function e(t){var n,a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",[{city:"Munich",country:"de",localized_country_name:"Germany",name_string:"Munich, Germany",zip:"meetup3",lat:48.14,lon:11.58},{city:"Munich",country:"us",localized_country_name:"USA",state:"ND",name_string:"Munich, North Dakota, USA",zip:"58352",lat:48.66,lon:-98.85}]);case 2:return e.next=4,_();case 4:if(!(n=e.sent)){e.next=11;break}return a="https://api.meetup.com/find/locations?&sign=true&photo-host=public&query="+t+"&access_token="+n,e.next=9,b.a.get(a);case 9:return r=e.sent,e.abrupt("return",r.data);case 11:return e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,t,n){return E.apply(this,arguments)}function E(){return(E=Object(v.a)(m.a.mark((function e(t,n,a){var r,i,s,o,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",f);case 2:if(navigator.onLine){e.next=5;break}return r=localStorage.getItem("lastEvents"),e.abrupt("return",JSON.parse(r));case 5:return e.next=7,_();case 7:if(!(i=e.sent)){e.next=18;break}return s="https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&access_token="+i,t&&n&&(s+="&lat="+t+"&lon="+n),a&&(s+="&page="+a),e.next=14,b.a.get(s);case 14:return o=e.sent,(c=o.data.events).length&&localStorage.setItem("lastEvents",JSON.stringify(c)),e.abrupt("return",c);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){var e=localStorage.getItem("access_token");if(!e){var t=new URLSearchParams(window.location.search).get("code");return t?S("get",t):(window.location.href="https://secure.meetup.com/oauth2/authorize?client_id=agnddpc62mkv02tllq39qastam&response_type=code&redirect_uri=https://tetateuta.github.io/meetup22/",null)}var n=localStorage.getItem("last_saved_time");return e&&Date.now()-n<36e5?e:S("renew",localStorage.getItem("refresh_token"))}function S(e,t){return O.apply(this,arguments)}function O(){return(O=Object(v.a)(m.a.mark((function e(t,n){var a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"get"===t?a="https://c5mxn1sefk.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n:"renew"===t&&(a="https://c5mxn1sefk.execute-api.eu-central-1.amazonaws.com/dev/api/refresh_token/"+n),e.next=3,b.a.get(a);case 3:return r=e.sent,localStorage.setItem("access_token",r.data.access_token),localStorage.setItem("refresh_token",r.data.refresh_token),localStorage.setItem("last_saved_time",Date.now()),e.abrupt("return",r.data.access_token);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var j=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Alert"},r.a.createElement("p",{style:this.getStyle()},this.props.text))}}]),n}(a.Component),x=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(j),C=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(j),z=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[]},e.handleInputChanged=function(t){var n=t.target.value;e.setState({query:n}),w(n).then((function(t){e.setState({suggestions:t}),n&&0===t.length?e.setState({infoText:"We can not find the city you are looking for. Please try another city"}):e.setState({infoText:""})}))},e.handleItemClicked=function(t,n,a){e.setState({query:t,suggestions:[]}),e.props.updateEvents(n,a)},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"CitySearch"},r.a.createElement(x,{text:this.state.infoText}),r.a.createElement("label",null,"City:",r.a.createElement("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,placeholder:this.props.defaultCity})),r.a.createElement("ul",{className:"suggestions"},this.state.suggestions.map((function(t){return r.a.createElement("li",{key:t.name_string,onClick:function(){return e.handleItemClicked(t.name_string,t.lat,t.lon)}},t.name_string)}))))}}]),n}(a.Component),N=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:32},e.handleInputChanged=function(t){var n=t.target.value;e.props.updateEvents(null,null,n),e.setState({numberOfEvents:n}),n<1?e.setState({infoText:"Select number from 1 to 32"}):e.setState({infoText:""})},e}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"numberOfEvents"},r.a.createElement("label",null,"Number of Events: "),r.a.createElement("input",{type:"text",id:"numberOfEvents__input",value:this.state.numberOfEvents,onChange:this.handleInputChanged}),r.a.createElement(C,{text:this.state.infoText}))}}]),n}(a.Component),D=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={events:[],page:null,defaultCity:"",lat:null,lon:null},e.updateEvents=function(t,n,a){t&&n?k(t,n,e.state.page).then((function(t){return e.setState({events:t.events,lat:t.city.lat,lon:t.city.lon})})):a?k(e.state.lat,e.state.lon,a).then((function(t){return e.setState({events:t.events,page:a})})):k(e.state.lat,e.state.lon,e.state.page).then((function(t){return e.setState({events:t.events})}))},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;k().then((function(t){return e.setState({events:t.events})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(z,{updateEvents:this.updateEvents,defaultCity:this.state.defaultCity}),r.a.createElement(N,{updateEvents:this.updateEvents,numberOfEvents:this.state.events.length,lat:this.state.lat,lon:this.state.lon}),r.a.createElement(d,{events:this.state.events}))}}]),n}(a.Component),I=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function A(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var M=n(20);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meetup22",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meetup22","/service-worker.js");I?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):A(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):A(t,e)}))}}(),M.config("cb1063f47ae643848aaf6f0557b612c1").install()}},[[21,1,2]]]);
//# sourceMappingURL=main.59e2422e.chunk.js.map