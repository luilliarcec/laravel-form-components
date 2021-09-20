(()=>{"use strict";const t=function(t,e){for(var i=t.length;i--;)if(e(t[i],i,t))return i;return-1};function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}var i=function(t){return Array.isArray(t)},n=function(t){return void 0===t},o=function(t){return null===t},s=function(t){return n(t)||o(t)},r=function(t){return null!==t&&"object"===e(t)},l=function(t){return"[object Object]"===Object.prototype.toString.call(t)},u=/\[(\d+)]/g;const c=function(t){return t};var p=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;if(!(e=i(e)?e.join("."):e)||!r(t))return n;if(e in t)return t[e];var l=(e=String(e).replace(u,".$1")).split(".").filter(c);return 0===l.length?n:l.every((function(e){return r(t)&&e in t&&!s(t=t[e])}))?t:o(t)?null:n};const a=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=p(t,e);return s(n)?i:n};function h(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function d(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?h(Object(i),!0).forEach((function(e){f(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):h(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function f(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var v,O=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(l(t)){var s=a(t,e.valueField||"value"),r=a(t,e.textField||"text"),u=a(t,e.optionField||"options");return o(u)?d(d({},t),{},{value:n(s)?i||r:s,text:String(n(r)?i:r),disabled:Boolean(a(t,e.disabledField||"disabled"))}):{label:String(a(t,e.labelField||"label")||r),options:b(u)}}return{value:i||t,text:String(t),disabled:!1}},b=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i(t)?g(t.map((function(t){return O(t,e)}))):[]},g=function(t){var e=[];return t.forEach((function(t){t.hasOwnProperty("label")?(e.push({label:t.label}),e=e.concat(t.options)):e.push(t)})),e};function y(t){return function(t){if(Array.isArray(t))return m(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return m(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function x(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function w(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?x(Object(i),!0).forEach((function(e){j(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):x(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function j(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const I=function(e){return w(w({focusedOptionIndex:null,filterable:!1,data:[],disabled:!1,options:[],open:!1,search:"",wireFilter:!1,wireListeners:[],value:"",selectedOption:null,max:!1,selectId:"",valueField:"value",textField:"text",disabledField:"disabled",labelField:"label",optionsField:"options",popper:null,_wire:null},e),{},{get buttonDisplay(){if(this.multiple){var t;try{t=this.optionDisplay(this.value[0])}catch(e){t=""}return this.value.length>1&&(t+=' <span class="custom-select__select-count">+ '.concat(this.value.length-1,"</span>")),t}try{return this.optionDisplay(this.value)}catch(t){return""}},get fieldNames(){return{valueField:this.valueField,textField:this.textField,disabledField:this.disabledField,labelField:this.labelField,optionsField:this.optionsField}},close:function(){this.open=!1,this.focusedOptionIndex=null,this.search="",this.popper&&(this.popper.destroy(),this.popper=null)},clear:function(){this.value=this.multiple?[]:null,this.open&&(this.close(),this.focusButton())},focusButton:function(){var t=this;this.$nextTick((function(){return t.$refs.button.focus()}))},focusNextOption:function(){var t=this;null===this.focusedOptionIndex&&(this.focusedOptionIndex=-1);var e=this.options.findIndex((function(e,i){return i>t.focusedOptionIndex&&!e.disabled&&!t.isOptgroup(e)}));(-1===e||e+1>this.options.length)&&(e=this.options.findIndex((function(e){return!e.disabled&&!t.isOptgroup(e)}))),this.focusedOptionIndex=e,this.scrollToOption(this.focusedOptionIndex)},focusPreviousOption:function(){var e=this;null===this.focusedOptionIndex&&(this.focusedOptionIndex=this.options.length-1);var i=t(this.options,(function(t,i){return i<e.focusedOptionIndex&&!t.disabled&&!e.isOptgroup(t)}));i<0&&(i=t(this.options,(function(t){return!t.disabled&&!e.isOptgroup(t)}))),this.focusedOptionIndex=i,this.scrollToOption(this.focusedOptionIndex)},onHome:function(){var t=this;if(this.open){var e=this.options.findIndex((function(e){return!e.disabled&&!t.isOptgroup(e)}));e>-1&&(this.focusedOptionIndex=e,this.scrollToOption(this.focusedOptionIndex))}},onEnd:function(){var e=this;if(this.open){var i=t(this.options,(function(t){return!t.disabled&&!e.isOptgroup(t)}));i>-1&&(this.focusedOptionIndex=i,this.scrollToOption(this.focusedOptionIndex))}},isOptgroup:function(t){return(t||{}).hasOwnProperty("label")},isSelected:function(t){return this.multiple?this.value.includes(t):this.value===t},init:function(){var t=this;if("function"!=typeof(v=window.Popper?window.Popper.createPopper:window.createPopper))throw new TypeError("<x-custom-select> requires Popper (https://popper.js.org)");this.data=y(b(this.data,this.fieldNames)),this.options=this.data,this.multiple&&(this.selectedOption=[]),this.multiple&&!i(this.value)&&(this.value=[]),this.multiple&&this.value.length>0?this.selectedOption=this.options.find((function(e){return!t.isOptgroup(e)&&e.value===t.value[0]})):!this.multiple&&this.value&&(this.selectedOption=this.options.find((function(e){return!t.isOptgroup(e)&&e.value===t.value}))),this.$watch("value",(function(e){t.$dispatch("custom-select-value-changed",{id:t.selectId,value:e})})),this.$watch("search",(function(e){if(!t.open)return t.options=t.data;if(t.wireFilter&&t._wire)t._wire[t.wireFilter](e).then((function(e){t.data=b(e,t.fieldNames),t.options=t.data}));else{if(!e)return t.options=t.data;var i=e.toLowerCase();t.options=t.data.filter((function(e){return!t.isOptgroup(e)&&(String(e.value).toLowerCase().includes(i)||e.text.toLowerCase().includes(i))}))}})),this._wire&&this.wireListeners.forEach((function(e){t._wire.on(e,(function(e){t.data=b(e,t.fieldNames),t.options=t.data}))})),this.$dispatch("custom-select-value-changed",{id:this.selectId,value:this.value})},onMouseover:function(t,e){this.isOptgroup(t)||t.disabled||(this.focusedOptionIndex=e)},optionClasses:function(t,e){var i=[];return this.isOptgroup(t)?i.push("custom-select__opt-group"):e===this.focusedOptionIndex&&i.push("custom-select__option--hovered"),this.isSelected((t||{}).value)&&i.push("custom-select__option--selected"),t.disabled&&i.push("custom-select__option--disabled"),i.join(" ")},openMenu:function(){var t=this;if(!this.disabled){var e=this.multiple?this.value[0]:this.value;this.focusedOptionIndex=this.options.findIndex((function(i){return i.value===e&&!t.isOptgroup(i)})),this.focusedOptionIndex<0&&(this.focusedOptionIndex=this.options.findIndex((function(e){return!e.disabled&&!t.isOptgroup(e)}))),this.popper=v(this.$refs.button,this.$refs.container,{placement:"bottom-start",modifiers:[{name:"offset",options:{offset:[0,4]}},{name:"preventOverflow",options:{boundary:"clippingParents"}},{name:"flip",options:{padding:30}}]}),this.open=!0,this.$nextTick((function(){t.filterable&&t.$refs.search.focus({preventScroll:!0}),t.scrollToOption(t.focusedOptionIndex)}))}},optionDisplay:function(t){if(!t)return null;var e=this.options.find((function(e){return e.value===t}));return!e&&this.multiple&&(this.selectedOption||[]).length>0?e=this.selectedOption[0]:!e&&this.selectedOption&&this.selectedOption.value===t&&(e=this.selectedOption),(e||{text:null}).text},onEnter:function(){if(!this.open)return this.openMenu();var t=this.options[this.focusedOptionIndex];t&&this.selectOption(t)},selectOption:function(t){if(t&&!t.disabled){if(this.multiple)return this.selectOptionForMultiple(t);this.value===t.value&&this.optional?(this.value=null,this.selectedOption=null):(this.value=t.value,this.selectedOption=t),this.close(),this.focusButton()}},selectOptionForMultiple:function(t){if(t)return this.value.includes(t.value)?((this.optional||this.value.length>1)&&(this.value.splice(this.value.indexOf(t.value),1),this.selectedOption=y(this.value)),void(0===this.value.length&&(this.selectedOption=[],this.close(),this.focusButton()))):void((!this.max||Number(this.max)>this.value.length)&&(this.value.push(t.value),this.selectedOption=y(this.value)))},hasSelection:function(){return this.multiple?this.value.length>0:Boolean(this.value)},scrollToOption:function(t){0===t&&this.options.length>1&&(t=1);try{var e=this.$refs.listbox.children[t].offsetTop;this.$refs.listbox.scrollTop=e||0,this.$refs.listbox.children[t].focus()}catch(t){}},toggle:function(){if(this.open)return this.close();this.openMenu()}})};document.addEventListener("alpine:init",(function(){Alpine.data("customSelect",I)}))})();