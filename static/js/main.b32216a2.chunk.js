(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(3),s=t.n(o),i=(t(13),t(1)),u={unit:"fahrenheit",size:"m"};var l=function(e,a){var t=Object(i.a)(e,2),n=(t[0],t[1]),o=Object(i.a)(a,2),s=(o[0],o[1]);function l(e){var a=e.target.value;u.size=a,n(a)}function c(e){var a=e.target.value;u.unit=a,s(a)}function m(e){return e===u.unit}function d(e){return e===u.size}return r.a.createElement("div",{className:"options"},r.a.createElement("div",{className:"options-unit"},"How do you like",r.a.createElement("br",null),"your weather?",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:m("fahrenheit")?"unit active":"unit"},r.a.createElement("button",{value:"fahrenheit",className:"unit-button",onClick:c},"fahrenheit")),r.a.createElement("div",{className:m("celsius")?"unit active":"unit"},r.a.createElement("button",{value:"celsius",className:"unit-button",onClick:c},"celsius")),r.a.createElement("br",null)),r.a.createElement("div",{className:"options-size"},"What size body",r.a.createElement("br",null),"do you wear?",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:d("s")?"size active":"size"},r.a.createElement("button",{value:"s",className:"size-button",onClick:l},"small")),r.a.createElement("div",{className:d("m")?"size active":"size"},r.a.createElement("button",{value:"m",className:"size-button",onClick:l},"medium")),r.a.createElement("div",{className:d("l")?"size active":"size"},r.a.createElement("button",{value:"l",className:"size-button",onClick:l},"large"))))},c=t(4),m=t(5),d=t(7),h=t(6);function b(e,a,t){return"celsius"===a&&(t=function(e,a){return Math.round(1.8*a+32)}(0,t)),"s"===e?function(e){if(e<=59)return"cold";if(e<=69&&e>=60)return"meh";if(e<=77&&e>=70)return"perfect";if(e<=87&&e>=78)return"warm";if(e>=88)return"hot"}(t):"m"===e?function(e){if(e<=58)return"cold";if(e<=66&&e>=59)return"meh";if(e<=78&&e>=67)return"perfect";if(e<=87&&e>=79)return"warm";if(e>=88)return"hot"}(t):function(e){if(e<=55)return"cold";if(e<=65&&e>=56)return"meh";if(e<=82&&e>=66)return"perfect";if(e<=88&&e>=83)return"warm";if(e>=89)return"hot"}(t)}r.a.Component;var w="3c886625921753ac0c0f5abd142bbbb8",f="https://api.openweathermap.org/data/2.5/";var y=function(){var e=Object(n.useState)("fahrenheit"),a=Object(i.a)(e,2),t=a[0],o=a[1],s=Object(n.useState)("m"),c=Object(i.a)(s,2),m=c[0],d=c[1],h=Object(n.useState)(""),y=Object(i.a)(h,2),v=y[0],p=y[1],g=Object(n.useState)({}),E=Object(i.a)(g,2),N=E[0],k=E[1];return r.a.createElement("div",{className:"undefined"!=typeof N.main?"app "+b(u.size,u.unit,Math.round(N.main.temp)):"app"},r.a.createElement("main",null,r.a.createElement("div",{className:"search-box"},r.a.createElement("input",{type:"text",className:"search-bar",placeholder:"Enter a city...",onChange:function(e){return p(e.target.value)},value:v,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(f,"weather?q=").concat(v,"&units=").concat("fahrenheit"===u.unit?"imperial":"metric","&APPID=").concat(w)).then((function(e){return e.json()})).then((function(e){k(e),p(""),console.log(e)}))}})),"undefined"!=typeof N.main?r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",{className:"location-box"},r.a.createElement("div",{className:"location"}," ",N.name,", ",N.sys.country," "),r.a.createElement("div",{className:"date"}," ",function(e){var a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],t=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],r=e.getFullYear();return"".concat(a," ").concat(t,", ").concat(n," ").concat(r)}(new Date)," "))),r.a.createElement("div",{className:"weather-box"},r.a.createElement("div",{className:"temp"},Math.round(N.main.temp),"\xb0","celsius"===u.unit?"C":"F"),r.a.createElement("div",{className:"weather"},N.weather[0].description),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"rec"},function(e,a,t,n){var r=b(e,a,t);return"cold"===r?function(e){switch(e){case"Clear":return"You should wear a jacket or coat!";case"Clouds":return"You should wear a jacket and carry an umbrella with you!";case"Rain":return"You should wear a rainjacket, sweater, and probably bring an umbrella! \nMaybe add some boots for aesthetic too.";case"Thunderstorm":return"You should wear a rainjacket, sweater, and bring an umbrella! \nOh and also some rainboots would be nice.";case"Snow":return"You should stay home. But if you need to leave then wear ALOT of layers and some Boots!";default:return"Yea wear a jacket and some shoes!"}}(n):"meh"===r?function(e){switch(e){case"Clear":return"Its meh outside right now, like maybe a long sleeve or pants would be good!";case"Clouds":return"Its meh outside right now, like maybe a long sleeve or pants would be good. \nRemember to keep an umbrella on you though!";case"Rain":return"Its meh outside. You should wear a rainjacket and some type of pants, I recommend some corduroys!";case"Thunderstorm":return"Its meh outside. You should wear a rainjacket and some boots, I recommend Dr.Martins!";case"Snow":return"Yea its meh but also like its snowing, so isnt that beautiful?";default:return"Yea wear a jacket or coat with some shoes!"}}(n):"perfect"===r?function(e){switch(e){case"Clear":return"It is perfect outside, wear LITERALLY anything you want. \nEnjoy your life (if you want)";case"Clouds":return"It is perfect outside, wear whatever youre comfortable in. \nALSO bring an umbrella, or dont!";case"Rain":return"It feels great, but its raining so please bring an umbrella or rain jacket! \nlove mom<3";case"Thunderstorm":return"You should wear a rainjacket and an umbrella. It feels great outside!";case"Snow":return"Impossible! where do you live??";default:return"Yea wear a shirt and some shoes, you should be fine!"}}(n):"warm"===r?function(e){switch(e){case"Clear":return"Ooh its warm outside, You should wear something light. \nWatch for armpit stains, keep an AXE can on you.";case"Clouds":return"Its warm and it might rain, wow. Wear something light and bring an umbrella or rain jacket.";case"Rain":return"You should wear a rainjacket but like also its so hot. Maybe just an umbrella? Its on you";case"Thunderstorm":return"Its warm and a storm is coming, I would just relax inside with the AC. \nBring a raincoat if you need to go somewhere";case"Snow":return"It cant be warm and snowing at the same time. Nice try corporate america!!";default:return"Dont wear too many clothes, thats how you end up sweating through your whole shirt"}}(n):function(e){switch(e){case"Clear":return"You should wear nothing, its so hot outside oh my god please dont go out there!";case"Clouds":return"Wear as little as possible, its so hot. just remember to bring an umbrella with you incase it rains!";case"Rain":return"Yea you should wear as little as possible but also take a rain pancho and umbrella!";case"Thunderstorm":return"yea its super hot outside but also you might get hit by lightning so... maybe dont go outside";case"Snow":return"Yea impossible to be this hot and snow at the same time so maybe escape the snowglobe you are trapped in!";default:return"Yea wear as little as possible, dont wear anything"}}(n)}(u.size,u.unit,Math.round(N.main.temp),N.weather[0].main)))):r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",{className:"location-box"},r.a.createElement("div",{className:"location"}),r.a.createElement("div",{className:"date"}))),r.a.createElement("div",{className:"weather-box"},r.a.createElement("div",{className:"temp",id:"mainTing"},"whatFIT"),r.a.createElement("div",{className:"options"},l([m,d],[t,o])),r.a.createElement("div",{className:"weather",id:"landing"},"made by ahmed")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,a,t){e.exports=t(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.b32216a2.chunk.js.map