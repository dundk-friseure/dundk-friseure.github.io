!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function e(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{ElqU:function(n,o,i){"use strict";i.r(o),i.d(o,"StaticPagesModule",function(){return X});var c=i("ofXK"),r=(i("R1ws"),i("fXoL"));i("XNiG"),i("quSY"),i("LRne");var a=i("vkgz"),s=(i("Kj3r"),i("pLZG")),d=(i("lJxs"),i("IzEk"),i("8LU1"),i("nLfN"));i("HDdC"),"undefined"!=typeof Element&&Element;var u,l,h=((l=function(){function n(e,o){t(this,n),this._platform=e,this._document=o}return e(n,[{key:"getHighContrastMode",value:function(){if(!this._platform.isBrowser)return 0;var t=this._document.createElement("div");t.style.backgroundColor="rgb(1,2,3)",t.style.position="absolute",this._document.body.appendChild(t);var n=this._document.defaultView||window,e=n&&n.getComputedStyle?n.getComputedStyle(t):null,o=(e&&e.backgroundColor||"").replace(/ /g,"");switch(this._document.body.removeChild(t),o){case"rgb(0,0,0)":return 2;case"rgb(255,255,255)":return 1}return 0}},{key:"_applyBodyHighContrastModeCssClasses",value:function(){if(this._platform.isBrowser&&this._document.body){var t=this._document.body.classList;t.remove("cdk-high-contrast-active"),t.remove("cdk-high-contrast-black-on-white"),t.remove("cdk-high-contrast-white-on-black");var n=this.getHighContrastMode();1===n?(t.add("cdk-high-contrast-active"),t.add("cdk-high-contrast-black-on-white")):2===n&&(t.add("cdk-high-contrast-active"),t.add("cdk-high-contrast-white-on-black"))}}}]),n}()).\u0275fac=function(t){return new(t||l)(r.ec(d.a),r.ec(c.d))},l.\u0275prov=Object(r.Ob)({factory:function(){return new l(Object(r.ec)(d.a),Object(r.ec)(c.d))},token:l,providedIn:"root"}),l),p=((u=function n(){t(this,n)}).\u0275mod=r.Qb({type:u}),u.\u0275inj=r.Pb({factory:function(t){return new(t||u)}}),u),g=new r.S("11.1.1");i("JX91");var m,b=new r.S("11.1.1"),f=new r.t("mat-sanity-checks",{providedIn:"root",factory:function(){return!0}}),y=((m=function(){function n(e,o,i){t(this,n),this._hasDoneGlobalChecks=!1,this._document=i,e._applyBodyHighContrastModeCssClasses(),this._sanityChecks=o,this._hasDoneGlobalChecks||(this._checkDoctypeIsDefined(),this._checkThemeIsPresent(),this._checkCdkVersionMatch(),this._hasDoneGlobalChecks=!0)}return e(n,[{key:"_getWindow",value:function(){var t=this._document.defaultView||window;return"object"==typeof t&&t?t:null}},{key:"_checksAreEnabled",value:function(){return Object(r.ab)()&&!this._isTestEnv()}},{key:"_isTestEnv",value:function(){var t=this._getWindow();return t&&(t.__karma__||t.jasmine)}},{key:"_checkDoctypeIsDefined",value:function(){this._checksAreEnabled()&&(!0===this._sanityChecks||this._sanityChecks.doctype)&&!this._document.doctype&&console.warn("Current document does not have a doctype. This may cause some Angular Material components not to behave as expected.")}},{key:"_checkThemeIsPresent",value:function(){if(this._checksAreEnabled()&&!1!==this._sanityChecks&&this._sanityChecks.theme&&this._document.body&&"function"==typeof getComputedStyle){var t=this._document.createElement("div");t.classList.add("mat-theme-loaded-marker"),this._document.body.appendChild(t);var n=getComputedStyle(t);n&&"none"!==n.display&&console.warn("Could not find Angular Material core theme. Most Material components may not work as expected. For more info refer to the theming guide: https://material.angular.io/guide/theming"),this._document.body.removeChild(t)}}},{key:"_checkCdkVersionMatch",value:function(){this._checksAreEnabled()&&(!0===this._sanityChecks||this._sanityChecks.version)&&b.full!==g.full&&console.warn("The Angular Material version ("+b.full+") does not match the Angular CDK version ("+g.full+").\nPlease ensure the versions of these two packages exactly match.")}}]),n}()).\u0275mod=r.Qb({type:m}),m.\u0275inj=r.Pb({factory:function(t){return new(t||m)(r.ec(h),r.ec(f,8),r.ec(c.d))},imports:[[p],p]}),m);try{"undefined"!=typeof Intl}catch(W){!1}var _,v=((_=function n(){t(this,n)}).\u0275mod=r.Qb({type:_}),_.\u0275inj=r.Pb({factory:function(t){return new(t||_)},imports:[[y],y]}),_),C=i("1kSV"),k=i("sbAP"),w=i("tyNb"),x=i("eIep");function M(t,n){if(1&t&&(r.Gc(0,"\n                "),r.Tb(1,"img",9),r.Gc(2,"\n              ")),2&t){var e=r.jc().$implicit;r.Fb(1),r.oc("alt",e)("src",e,r.Bc)}}function O(t,n){1&t&&(r.Vb(0),r.Gc(1,"\n              "),r.Ec(2,M,3,2,"ng-template",8),r.Gc(3,"\n            "),r.Ub())}var P,G,j,E=[{path:":id",component:(P=function(){function n(e,o,i){var c=this;t(this,n),this.router=e,this.scully=o,this.route=i,this.current$=this.router.events.pipe(Object(s.a)(function(t){return t instanceof w.b}),Object(x.a)(function(t){return c.scully.getCurrent()}),Object(a.a)(console.log))}return e(n,[{key:"ngOnInit",value:function(){var t,n,e;this.gallery=null===(e=null===(n=null===(t=this.route.snapshot)||void 0===t?void 0:t.data)||void 0===n?void 0:n.data)||void 0===e?void 0:e.gallery}}]),n}(),P.\u0275fac=function(t){return new(t||P)(r.Sb(w.d),r.Sb(k.c),r.Sb(w.a))},P.\u0275cmp=r.Mb({type:P,selectors:[["scheibentoenung-schmieder-staticpages"]],decls:30,vars:5,consts:[[1,"section","profile-content"],[1,"container"],[1,"row"],[1,"col-md-12","ml-auto","mr-auto"],[1,"col-md-8","mr-auto","ml-auto"],[1,"card","page-carousel"],[3,"interval"],[4,"ngFor","ngForOf"],["ngbSlide",""],[1,"slider-image",3,"alt","src"]],template:function(t,n){var e;(1&t&&(r.Xb(0,"div",0),r.Gc(1,"\n  "),r.Xb(2,"div",1),r.Gc(3,"\n    "),r.Xb(4,"div",2),r.Gc(5,"\n      "),r.Xb(6,"div",3),r.Gc(7,"\n        "),r.Xb(8,"h1"),r.Gc(9),r.kc(10,"async"),r.Wb(),r.Gc(11,"\n        "),r.Xb(12,"p"),r.Tb(13,"scully-content"),r.Wb(),r.Gc(14,"\n      "),r.Wb(),r.Gc(15,"\n      "),r.Xb(16,"div",4),r.Gc(17,"\n        "),r.Xb(18,"div",5),r.Gc(19,"\n          "),r.Xb(20,"ngb-carousel",6),r.Gc(21,"\n            "),r.Ec(22,O,4,0,"ng-container",7),r.Gc(23,"\n          "),r.Wb(),r.Gc(24,"\n        "),r.Wb(),r.Gc(25,"\n      "),r.Wb(),r.Gc(26,"\n    "),r.Wb(),r.Gc(27,"\n  "),r.Wb(),r.Gc(28,"\n"),r.Wb(),r.Gc(29,"\n")),2&t)&&(r.Fb(9),r.Hc(null==(e=r.lc(10,3,n.current$))?null:e.title),r.Fb(11),r.oc("interval",0),r.Fb(2),r.oc("ngForOf",n.gallery))},directives:[k.a,C.a,c.k,C.d],pipes:[c.b],styles:[".img-rounded[_ngcontent-%COMP%]{border-radius:12px;transition:opacity .5s ease 0s;max-width:100%}.img-details[_ngcontent-%COMP%]{min-height:50px;padding:0 4px .5em}.img-details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50px}.img-details[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]{margin-left:10px;margin-top:-21px;width:40px}.img-circle[_ngcontent-%COMP%]{background-color:#fff;margin-bottom:10px;padding:4px;border-radius:50%!important;max-width:100%}.img-thumbnail[_ngcontent-%COMP%], img[_ngcontent-%COMP%]{border:0;border-radius:12px;box-shadow:0 1px 2px rgba(164,158,147,.6);margin-bottom:10px}.img-no-padding[_ngcontent-%COMP%]{padding:0}.example-page[_ngcontent-%COMP%]   .img-rounded[_ngcontent-%COMP%]{margin:50px 0 20px}.img-shadow[_ngcontent-%COMP%]{box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.2)}.images-title[_ngcontent-%COMP%]{margin-bottom:20px;height:50px}.nav-link[_ngcontent-%COMP%]   .profile-photo-small[_ngcontent-%COMP%]{width:40px;height:30px;margin:-10px 0 0 -15px}.profile-picture[_ngcontent-%COMP%]{margin:0 auto}.profile-picture[_ngcontent-%COMP%]   .fileinput-new[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:150px;height:150px;border-radius:50%;margin-bottom:10px}.profile-picture[_ngcontent-%COMP%]   .fileinput-exists[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:150px;max-height:150px;border-radius:50%;margin-bottom:10px}img[_ngcontent-%COMP%]{width:100vw}@media (min-width:992px){img[_ngcontent-%COMP%]{width:400px}}.profile-content[_ngcontent-%COMP%]{background-color:transparent}.slider-image[_ngcontent-%COMP%]{-o-object-fit:contain;object-fit:contain}.description[_ngcontent-%COMP%]{margin-bottom:20px}"]}),P),data:{markdown:!0}}],S=((j=function n(){t(this,n)}).\u0275mod=r.Qb({type:j}),j.\u0275inj=r.Pb({factory:function(t){return new(t||j)},imports:[[w.f.forChild(E)],w.f]}),j),X=((G=function n(){t(this,n)}).\u0275mod=r.Qb({type:G}),G.\u0275inj=r.Pb({factory:function(t){return new(t||G)},imports:[[c.c,S,k.b,v,C.b]]}),G)}}])}();