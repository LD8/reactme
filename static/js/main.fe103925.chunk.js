(this.webpackJsonpreact_weather_app=this.webpackJsonpreact_weather_app||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),i=a.n(r),m=a(1),o=(a(9),"861906255adc263b360c4e62669c4bb7"),s="https://api.openweathermap.org/data/2.5/";function l(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)({}),l=Object(m.a)(i,2),u=l[0],d=l[1];return Object(n.useEffect)((function(){r(""),fetch("http://127.0.0.1:8000/api/task-list/?format=json").then((function(e){return e.json()})).then((function(e){return console.log(e)}))}),[u]),c.a.createElement("div",{className:u.avgTemp>16?"app":"app cold"},c.a.createElement("main",null,c.a.createElement("div",{className:"search"},c.a.createElement("input",{type:"text",placeholder:"Search a city...",onChange:function(e){return r(e.target.value)},value:a,onKeyDown:function(e){return function(e){"Enter"===e.key&&fetch("".concat(s,"weather?q=").concat(a,"&units=metric&APPID=").concat(o)).then((function(e){return console.log(e),e.json()})).then((function(e){d({city:e.name,country:e.sys.country,avgTemp:Math.round(e.main.temp),minTemp:Math.round(e.main.temp_min),maxTemp:Math.round(e.main.temp_max),sky:e.weather[0].main,humidity:e.main.humidity})}))}(e)}})),u.city?c.a.createElement("div",{className:"weather-info"},c.a.createElement("div",{className:"city"},u.city,", ",u.country),c.a.createElement("div",{className:"date"},(new Date).toDateString()),c.a.createElement("div",{className:"temperature-box"},c.a.createElement("div",{className:"temperature"},u.avgTemp,"\xb0c"),c.a.createElement("div",{className:"temperature-range"},u.minTemp," - ",u.maxTemp,"\xb0c")),c.a.createElement("div",{className:"sky"},u.sky),c.a.createElement("div",{className:"humidity"},"Humidity: ",u.humidity,"%")):c.a.createElement("div",{className:"weather-info"},c.a.createElement("div",{className:"city"},"City, Country"),c.a.createElement("div",{className:"date"},(new Date).toDateString()),c.a.createElement("div",{className:"temperature-box"},c.a.createElement("div",{className:"temperature"},"0\xb0c"),c.a.createElement("div",{className:"temperature-range"},"0 - 0\xb0c")),c.a.createElement("div",{className:"sky"},"Weather"),c.a.createElement("div",{className:"humidity"},"Humidity(%)"))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(l,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,a){e.exports=a(10)},9:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.fe103925.chunk.js.map