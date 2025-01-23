(()=>{var Ct=Object.create,he=Object.defineProperty,Ot=Object.getOwnPropertyDescriptor,$t=Object.getOwnPropertyNames,qt=Object.getPrototypeOf,Lt=Object.prototype.hasOwnProperty,jt=e=>he(e,"__esModule",{value:!0}),$=(e,t)=>function(){return t||(0,e[Object.keys(e)[0]])((t={exports:{}}).exports,t),t.exports},Bt=(e,t,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of $t(t))!Lt.call(e,i)&&i!=="default"&&he(e,i,{get:()=>t[i],enumerable:!(n=Ot(t,i))||n.enumerable});return e},qe=e=>Bt(jt(he(e!=null?Ct(qt(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),Nt=$({"node_modules/slugify/slugify.js"(e,t){(function(n,i,s){typeof e=="object"?(t.exports=s(),t.exports.default=s()):typeof define=="function"&&define.amd?define(s):i[n]=s()})("slugify",e,function(){var n=JSON.parse(`{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","\xA2":"cent","\xA3":"pound","\xA4":"currency","\xA5":"yen","\xA9":"(c)","\xAA":"a","\xAE":"(r)","\xBA":"o","\xC0":"A","\xC1":"A","\xC2":"A","\xC3":"A","\xC4":"A","\xC5":"A","\xC6":"AE","\xC7":"C","\xC8":"E","\xC9":"E","\xCA":"E","\xCB":"E","\xCC":"I","\xCD":"I","\xCE":"I","\xCF":"I","\xD0":"D","\xD1":"N","\xD2":"O","\xD3":"O","\xD4":"O","\xD5":"O","\xD6":"O","\xD8":"O","\xD9":"U","\xDA":"U","\xDB":"U","\xDC":"U","\xDD":"Y","\xDE":"TH","\xDF":"ss","\xE0":"a","\xE1":"a","\xE2":"a","\xE3":"a","\xE4":"a","\xE5":"a","\xE6":"ae","\xE7":"c","\xE8":"e","\xE9":"e","\xEA":"e","\xEB":"e","\xEC":"i","\xED":"i","\xEE":"i","\xEF":"i","\xF0":"d","\xF1":"n","\xF2":"o","\xF3":"o","\xF4":"o","\xF5":"o","\xF6":"o","\xF8":"o","\xF9":"u","\xFA":"u","\xFB":"u","\xFC":"u","\xFD":"y","\xFE":"th","\xFF":"y","\u0100":"A","\u0101":"a","\u0102":"A","\u0103":"a","\u0104":"A","\u0105":"a","\u0106":"C","\u0107":"c","\u010C":"C","\u010D":"c","\u010E":"D","\u010F":"d","\u0110":"DJ","\u0111":"dj","\u0112":"E","\u0113":"e","\u0116":"E","\u0117":"e","\u0118":"e","\u0119":"e","\u011A":"E","\u011B":"e","\u011E":"G","\u011F":"g","\u0122":"G","\u0123":"g","\u0128":"I","\u0129":"i","\u012A":"i","\u012B":"i","\u012E":"I","\u012F":"i","\u0130":"I","\u0131":"i","\u0136":"k","\u0137":"k","\u013B":"L","\u013C":"l","\u013D":"L","\u013E":"l","\u0141":"L","\u0142":"l","\u0143":"N","\u0144":"n","\u0145":"N","\u0146":"n","\u0147":"N","\u0148":"n","\u014C":"O","\u014D":"o","\u0150":"O","\u0151":"o","\u0152":"OE","\u0153":"oe","\u0154":"R","\u0155":"r","\u0158":"R","\u0159":"r","\u015A":"S","\u015B":"s","\u015E":"S","\u015F":"s","\u0160":"S","\u0161":"s","\u0162":"T","\u0163":"t","\u0164":"T","\u0165":"t","\u0168":"U","\u0169":"u","\u016A":"u","\u016B":"u","\u016E":"U","\u016F":"u","\u0170":"U","\u0171":"u","\u0172":"U","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017A":"z","\u017B":"Z","\u017C":"z","\u017D":"Z","\u017E":"z","\u018F":"E","\u0192":"f","\u01A0":"O","\u01A1":"o","\u01AF":"U","\u01B0":"u","\u01C8":"LJ","\u01C9":"lj","\u01CB":"NJ","\u01CC":"nj","\u0218":"S","\u0219":"s","\u021A":"T","\u021B":"t","\u0259":"e","\u02DA":"o","\u0386":"A","\u0388":"E","\u0389":"H","\u038A":"I","\u038C":"O","\u038E":"Y","\u038F":"W","\u0390":"i","\u0391":"A","\u0392":"B","\u0393":"G","\u0394":"D","\u0395":"E","\u0396":"Z","\u0397":"H","\u0398":"8","\u0399":"I","\u039A":"K","\u039B":"L","\u039C":"M","\u039D":"N","\u039E":"3","\u039F":"O","\u03A0":"P","\u03A1":"R","\u03A3":"S","\u03A4":"T","\u03A5":"Y","\u03A6":"F","\u03A7":"X","\u03A8":"PS","\u03A9":"W","\u03AA":"I","\u03AB":"Y","\u03AC":"a","\u03AD":"e","\u03AE":"h","\u03AF":"i","\u03B0":"y","\u03B1":"a","\u03B2":"b","\u03B3":"g","\u03B4":"d","\u03B5":"e","\u03B6":"z","\u03B7":"h","\u03B8":"8","\u03B9":"i","\u03BA":"k","\u03BB":"l","\u03BC":"m","\u03BD":"n","\u03BE":"3","\u03BF":"o","\u03C0":"p","\u03C1":"r","\u03C2":"s","\u03C3":"s","\u03C4":"t","\u03C5":"y","\u03C6":"f","\u03C7":"x","\u03C8":"ps","\u03C9":"w","\u03CA":"i","\u03CB":"y","\u03CC":"o","\u03CD":"y","\u03CE":"w","\u0401":"Yo","\u0402":"DJ","\u0404":"Ye","\u0406":"I","\u0407":"Yi","\u0408":"J","\u0409":"LJ","\u040A":"NJ","\u040B":"C","\u040F":"DZ","\u0410":"A","\u0411":"B","\u0412":"V","\u0413":"G","\u0414":"D","\u0415":"E","\u0416":"Zh","\u0417":"Z","\u0418":"I","\u0419":"J","\u041A":"K","\u041B":"L","\u041C":"M","\u041D":"N","\u041E":"O","\u041F":"P","\u0420":"R","\u0421":"S","\u0422":"T","\u0423":"U","\u0424":"F","\u0425":"H","\u0426":"C","\u0427":"Ch","\u0428":"Sh","\u0429":"Sh","\u042A":"U","\u042B":"Y","\u042C":"","\u042D":"E","\u042E":"Yu","\u042F":"Ya","\u0430":"a","\u0431":"b","\u0432":"v","\u0433":"g","\u0434":"d","\u0435":"e","\u0436":"zh","\u0437":"z","\u0438":"i","\u0439":"j","\u043A":"k","\u043B":"l","\u043C":"m","\u043D":"n","\u043E":"o","\u043F":"p","\u0440":"r","\u0441":"s","\u0442":"t","\u0443":"u","\u0444":"f","\u0445":"h","\u0446":"c","\u0447":"ch","\u0448":"sh","\u0449":"sh","\u044A":"u","\u044B":"y","\u044C":"","\u044D":"e","\u044E":"yu","\u044F":"ya","\u0451":"yo","\u0452":"dj","\u0454":"ye","\u0456":"i","\u0457":"yi","\u0458":"j","\u0459":"lj","\u045A":"nj","\u045B":"c","\u045D":"u","\u045F":"dz","\u0490":"G","\u0491":"g","\u0492":"GH","\u0493":"gh","\u049A":"KH","\u049B":"kh","\u04A2":"NG","\u04A3":"ng","\u04AE":"UE","\u04AF":"ue","\u04B0":"U","\u04B1":"u","\u04BA":"H","\u04BB":"h","\u04D8":"AE","\u04D9":"ae","\u04E8":"OE","\u04E9":"oe","\u0531":"A","\u0532":"B","\u0533":"G","\u0534":"D","\u0535":"E","\u0536":"Z","\u0537":"E'","\u0538":"Y'","\u0539":"T'","\u053A":"JH","\u053B":"I","\u053C":"L","\u053D":"X","\u053E":"C'","\u053F":"K","\u0540":"H","\u0541":"D'","\u0542":"GH","\u0543":"TW","\u0544":"M","\u0545":"Y","\u0546":"N","\u0547":"SH","\u0549":"CH","\u054A":"P","\u054B":"J","\u054C":"R'","\u054D":"S","\u054E":"V","\u054F":"T","\u0550":"R","\u0551":"C","\u0553":"P'","\u0554":"Q'","\u0555":"O''","\u0556":"F","\u0587":"EV","\u0621":"a","\u0622":"aa","\u0623":"a","\u0624":"u","\u0625":"i","\u0626":"e","\u0627":"a","\u0628":"b","\u0629":"h","\u062A":"t","\u062B":"th","\u062C":"j","\u062D":"h","\u062E":"kh","\u062F":"d","\u0630":"th","\u0631":"r","\u0632":"z","\u0633":"s","\u0634":"sh","\u0635":"s","\u0636":"dh","\u0637":"t","\u0638":"z","\u0639":"a","\u063A":"gh","\u0641":"f","\u0642":"q","\u0643":"k","\u0644":"l","\u0645":"m","\u0646":"n","\u0647":"h","\u0648":"w","\u0649":"a","\u064A":"y","\u064B":"an","\u064C":"on","\u064D":"en","\u064E":"a","\u064F":"u","\u0650":"e","\u0652":"","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u067E":"p","\u0686":"ch","\u0698":"zh","\u06A9":"k","\u06AF":"g","\u06CC":"y","\u06F0":"0","\u06F1":"1","\u06F2":"2","\u06F3":"3","\u06F4":"4","\u06F5":"5","\u06F6":"6","\u06F7":"7","\u06F8":"8","\u06F9":"9","\u0E3F":"baht","\u10D0":"a","\u10D1":"b","\u10D2":"g","\u10D3":"d","\u10D4":"e","\u10D5":"v","\u10D6":"z","\u10D7":"t","\u10D8":"i","\u10D9":"k","\u10DA":"l","\u10DB":"m","\u10DC":"n","\u10DD":"o","\u10DE":"p","\u10DF":"zh","\u10E0":"r","\u10E1":"s","\u10E2":"t","\u10E3":"u","\u10E4":"f","\u10E5":"k","\u10E6":"gh","\u10E7":"q","\u10E8":"sh","\u10E9":"ch","\u10EA":"ts","\u10EB":"dz","\u10EC":"ts","\u10ED":"ch","\u10EE":"kh","\u10EF":"j","\u10F0":"h","\u1E62":"S","\u1E63":"s","\u1E80":"W","\u1E81":"w","\u1E82":"W","\u1E83":"w","\u1E84":"W","\u1E85":"w","\u1E9E":"SS","\u1EA0":"A","\u1EA1":"a","\u1EA2":"A","\u1EA3":"a","\u1EA4":"A","\u1EA5":"a","\u1EA6":"A","\u1EA7":"a","\u1EA8":"A","\u1EA9":"a","\u1EAA":"A","\u1EAB":"a","\u1EAC":"A","\u1EAD":"a","\u1EAE":"A","\u1EAF":"a","\u1EB0":"A","\u1EB1":"a","\u1EB2":"A","\u1EB3":"a","\u1EB4":"A","\u1EB5":"a","\u1EB6":"A","\u1EB7":"a","\u1EB8":"E","\u1EB9":"e","\u1EBA":"E","\u1EBB":"e","\u1EBC":"E","\u1EBD":"e","\u1EBE":"E","\u1EBF":"e","\u1EC0":"E","\u1EC1":"e","\u1EC2":"E","\u1EC3":"e","\u1EC4":"E","\u1EC5":"e","\u1EC6":"E","\u1EC7":"e","\u1EC8":"I","\u1EC9":"i","\u1ECA":"I","\u1ECB":"i","\u1ECC":"O","\u1ECD":"o","\u1ECE":"O","\u1ECF":"o","\u1ED0":"O","\u1ED1":"o","\u1ED2":"O","\u1ED3":"o","\u1ED4":"O","\u1ED5":"o","\u1ED6":"O","\u1ED7":"o","\u1ED8":"O","\u1ED9":"o","\u1EDA":"O","\u1EDB":"o","\u1EDC":"O","\u1EDD":"o","\u1EDE":"O","\u1EDF":"o","\u1EE0":"O","\u1EE1":"o","\u1EE2":"O","\u1EE3":"o","\u1EE4":"U","\u1EE5":"u","\u1EE6":"U","\u1EE7":"u","\u1EE8":"U","\u1EE9":"u","\u1EEA":"U","\u1EEB":"u","\u1EEC":"U","\u1EED":"u","\u1EEE":"U","\u1EEF":"u","\u1EF0":"U","\u1EF1":"u","\u1EF2":"Y","\u1EF3":"y","\u1EF4":"Y","\u1EF5":"y","\u1EF6":"Y","\u1EF7":"y","\u1EF8":"Y","\u1EF9":"y","\u2013":"-","\u2018":"'","\u2019":"'","\u201C":"\\"","\u201D":"\\"","\u201E":"\\"","\u2020":"+","\u2022":"*","\u2026":"...","\u20A0":"ecu","\u20A2":"cruzeiro","\u20A3":"french franc","\u20A4":"lira","\u20A5":"mill","\u20A6":"naira","\u20A7":"peseta","\u20A8":"rupee","\u20A9":"won","\u20AA":"new shequel","\u20AB":"dong","\u20AC":"euro","\u20AD":"kip","\u20AE":"tugrik","\u20AF":"drachma","\u20B0":"penny","\u20B1":"peso","\u20B2":"guarani","\u20B3":"austral","\u20B4":"hryvnia","\u20B5":"cedi","\u20B8":"kazakhstani tenge","\u20B9":"indian rupee","\u20BA":"turkish lira","\u20BD":"russian ruble","\u20BF":"bitcoin","\u2120":"sm","\u2122":"tm","\u2202":"d","\u2206":"delta","\u2211":"sum","\u221E":"infinity","\u2665":"love","\u5143":"yuan","\u5186":"yen","\uFDFC":"rial","\uFEF5":"laa","\uFEF7":"laa","\uFEF9":"lai","\uFEFB":"la"}`),i=JSON.parse('{"bg":{"\u0419":"Y","\u0426":"Ts","\u0429":"Sht","\u042A":"A","\u042C":"Y","\u0439":"y","\u0446":"ts","\u0449":"sht","\u044A":"a","\u044C":"y"},"de":{"\xC4":"AE","\xE4":"ae","\xD6":"OE","\xF6":"oe","\xDC":"UE","\xFC":"ue","\xDF":"ss","%":"prozent","&":"und","|":"oder","\u2211":"summe","\u221E":"unendlich","\u2665":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","\xA2":"centavos","\xA3":"libras","\xA4":"moneda","\u20A3":"francos","\u2211":"suma","\u221E":"infinito","\u2665":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","\xA2":"centime","\xA3":"livre","\xA4":"devise","\u20A3":"franc","\u2211":"somme","\u221E":"infini","\u2665":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","\xA2":"centavo","\u2211":"soma","\xA3":"libra","\u221E":"infinito","\u2665":"amor"},"uk":{"\u0418":"Y","\u0438":"y","\u0419":"Y","\u0439":"y","\u0426":"Ts","\u0446":"ts","\u0425":"Kh","\u0445":"kh","\u0429":"Shch","\u0449":"shch","\u0413":"H","\u0433":"h"},"vi":{"\u0110":"D","\u0111":"d"},"da":{"\xD8":"OE","\xF8":"oe","\xC5":"AA","\xE5":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"st\xF8rre end"},"nb":{"&":"og","\xC5":"AA","\xC6":"AE","\xD8":"OE","\xE5":"aa","\xE6":"ae","\xF8":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","\xC5":"AA","\xC4":"AE","\xD6":"OE","\xE5":"aa","\xE4":"ae","\xF6":"oe"}}');function s(a,r){if(typeof a!="string")throw new Error("slugify: string argument expected");r=typeof r=="string"?{replacement:r}:r||{};var o=i[r.locale]||{},u=r.replacement===void 0?"-":r.replacement,d=r.trim===void 0?!0:r.trim,l=a.normalize().split("").reduce(function(p,m){var c=o[m];return c===void 0&&(c=n[m]),c===void 0&&(c=m),c===u&&(c=" "),p+c.replace(r.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")},"");return r.strict&&(l=l.replace(/[^A-Za-z0-9\s]/g,"")),d&&(l=l.trim()),l=l.replace(/\s+/g,u),r.lower&&(l=l.toLowerCase()),l}return s.extend=function(a){Object.assign(n,a)},s})}}),Y=$({"node_modules/kramed/lib/utils.js"(e,t){function n(o,u){return o.replace(u?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function i(o){return o.replace(/&([#\w]+);/g,function(u,d){return d=d.toLowerCase(),d==="colon"?":":d.charAt(0)==="#"?d.charAt(1)==="x"?String.fromCharCode(parseInt(d.substring(2),16)):String.fromCharCode(+d.substring(1)):""})}function s(o,u){return o=o.source,u=u||"",function d(l,p){return l?(p=p.source||p,p=p.replace(/(^|[^\[])\^/g,"$1"),o=o.replace(l,p),d):new RegExp(o,u)}}function a(){}a.exec=a;function r(o){for(var u=1,d,l;u<arguments.length;u++){d=arguments[u];for(l in d)Object.prototype.hasOwnProperty.call(d,l)&&(o[l]=d[l])}return o}t.exports={escape:n,unescape:i,replace:s,noop:a,merge:r}}}),Pt=$({"node_modules/kramed/lib/rules/block.js"(e,t){var n=Y(),i=n.replace,s=n.merge,a=n.noop,r={newline:/^\n+/,code:/^((?: {4}|\t)[^\n]+\n*)+/,fences:a,yamlHeader:a,hr:/^( *[-*_]){3,} *(?:\n|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n|$)/,nptable:a,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n|$)/,footnote:/^\[\^([^\]]+)\]: ([^\n]+)/,table:a,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def|math))+)\n*/,text:/^[^\n]+/,math:/^ *(\${2,}) *([\s\S]+?)\s*\1 *(?:\n|$)/};r._bullet=/(?:[*+-]|\d+\.)/,r._item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,r._item=i(r._item,"gm")(/bull/g,r._bullet)(),r.list=i(r.list)(/bull/g,r._bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+r.def.source+")")("footnote",r.footnote)(),r.blockquote=i(r.blockquote)("def",r.def)(),r._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:\\/|[^\\w\\s@]*@)\\b",r.html=i(r.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,r._tag)(),r.paragraph=i(r.paragraph)("hr",r.hr)("heading",r.heading)("lheading",r.lheading)("blockquote",r.blockquote)("tag","<"+r._tag)("def",r.def)("math",r.math)(),r.normal=s({},r),r.gfm=s({},r.normal,{fences:/^ *(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n|$)/,paragraph:/^/,yamlHeader:/^ *(?=```)/}),r.gfm.paragraph=i(r.paragraph)("(?!","(?!"+r.gfm.fences.source.replace("\\1","\\2")+"|"+r.list.source.replace("\\1","\\3")+"|")(),r.tables=s({},r.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/}),t.exports=r}}),Le=$({"node_modules/kramed/lib/lex/options.js"(e,t){t.exports={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!1,mathjax:!0}}}),It=$({"node_modules/kramed/lib/lex/block.js"(e,t){var n=Y(),i=n.noop,s=Pt(),a=Le();function r(o){this.tokens=[],this.tokens.links={},this.options=o||a,this.rules=s.normal,this.options.gfm&&(this.options.tables?this.rules=s.tables:this.rules=s.gfm),this.options.mathjax||(this.rules.math=i)}r.rules=s,r.lex=function(o,u){var d=new r(u);return d.lex(o)},r.prototype.lex=function(o){return o=o.replace(/\r\n|\r/g,`
`).replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,`
`),this.token(o,!0)},r.prototype.token=function(l,u,d){for(var l=l.replace(/^ +$/gm,""),p,m,c,_,h,g,v,f,b;l;){if((c=this.rules.newline.exec(l))&&(l=l.substring(c[0].length),c[0].length>1&&this.tokens.push({type:"space"})),c=this.rules.code.exec(l)){l=l.substring(c[0].length),c=c[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?c:c.replace(/\n+$/,"")});continue}if(c=this.rules.fences.exec(l)){l=l.substring(c[0].length),this.tokens.push({type:"code",lang:c[2],text:c[3]});continue}if(c=this.rules.footnote.exec(l)){l=l.substring(c[0].length),this.tokens.push({type:"footnote",refname:c[1],text:c[2]});continue}if(c=this.rules.math.exec(l)){l=l.substring(c[0].length),this.tokens.push({type:"math",text:c[2]});continue}if(c=this.rules.heading.exec(l)){l=l.substring(c[0].length),this.tokens.push({type:"heading",depth:c[1].length,text:c[2]});continue}if(u&&(c=this.rules.nptable.exec(l))){for(l=l.substring(c[0].length),g={type:"table",header:c[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:c[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:c[3].replace(/\n$/,"").split(`
`)},f=0;f<g.align.length;f++)/^ *-+: *$/.test(g.align[f])?g.align[f]="right":/^ *:-+: *$/.test(g.align[f])?g.align[f]="center":/^ *:-+ *$/.test(g.align[f])?g.align[f]="left":g.align[f]=null;for(f=0;f<g.cells.length;f++)g.cells[f]=g.cells[f].split(/ *\| */);this.tokens.push(g);continue}if(c=this.rules.lheading.exec(l)){l=l.substring(c[0].length),this.tokens.push({type:"heading",depth:c[2]==="="?1:2,text:c[1]});continue}if(c=this.rules.hr.exec(l)){l=l.substring(c[0].length),this.tokens.push({type:"hr"});continue}if(c=this.rules.blockquote.exec(l)){l=l.substring(c[0].length),this.tokens.push({type:"blockquote_start"}),c=c[0].replace(/^ *> ?/gm,""),this.token(c,u,!0),this.tokens.push({type:"blockquote_end"});continue}if(c=this.rules.list.exec(l)){for(l=l.substring(c[0].length),_=c[2],this.tokens.push({type:"list_start",ordered:_.length>1}),c=c[0].match(this.rules._item),p=!1,b=c.length,f=0;f<b;f++)g=c[f],v=g.length,g=g.replace(/^ *([*+-]|\d+\.) +/,""),~g.indexOf(`
 `)&&(v-=g.length,g=this.options.pedantic?g.replace(/^ {1,4}/gm,""):g.replace(new RegExp("^ {1,"+v+"}","gm"),"")),this.options.smartLists&&f!==b-1&&(h=s._bullet.exec(c[f+1])[0],_!==h&&!(_.length>1&&h.length>1)&&(l=c.slice(f+1).join(`
`)+l,f=b-1)),m=p||/\n\n(?!\s*$)/.test(g),f!==b-1&&(p=g.charAt(g.length-1)===`
`,m||(m=p)),this.tokens.push({type:m?"loose_item_start":"list_item_start"}),this.token(g,!1,d),this.tokens.push({type:"list_item_end"});this.tokens.push({type:"list_end"});continue}if(c=this.rules.html.exec(l)){l=l.substring(c[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:c[1]==="pre"||c[1]==="script"||c[1]==="style",text:c[0]});continue}if(!d&&u&&(c=this.rules.def.exec(l))){l=l.substring(c[0].length),this.tokens.links[c[1].toLowerCase()]={href:c[2],title:c[3]};continue}if(u&&(c=this.rules.table.exec(l))){for(l=l.substring(c[0].length),g={type:"table",header:c[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:c[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:c[3].replace(/(?: *\| *)?\n$/,"").split(`
`).slice(0)},f=0;f<g.align.length;f++)/^ *-+: *$/.test(g.align[f])?g.align[f]="right":/^ *:-+: *$/.test(g.align[f])?g.align[f]="center":/^ *:-+ *$/.test(g.align[f])?g.align[f]="left":g.align[f]=null;for(f=0;f<g.cells.length;f++)g.cells[f]=g.cells[f].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);this.tokens.push(g);continue}if(u&&(c=this.rules.paragraph.exec(l))){l=l.substring(c[0].length),this.tokens.push({type:"paragraph",text:c[1].charAt(c[1].length-1)===`
`?c[1].slice(0,-1):c[1]});continue}if(c=this.rules.text.exec(l)){l=l.substring(c[0].length),this.tokens.push({type:"text",text:c[0]});continue}if(l)throw new Error("Infinite loop on byte: "+l.charCodeAt(0))}return this.tokens},t.exports=r}}),Rt=$({"node_modules/kramed/lib/rules/inline.js"(e,t){var n=Y(),i=n.replace,s=n.merge,a=n.noop,r={escape:/^\\([\\`*{}\[\]()#$+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:a,html:/^<!--[\s\S]*?-->|^<(\w+(?!:\/|[^\w\s@]*@)\b)*?(?:"[^"]*"|'[^']*'|[^'">])*?>([\s\S]*?)?<\/\1>|^<(\w+(?!:\/|[^\w\s@]*@)\b)(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,reffn:/^!?\[\^(inside)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:a,text:/^[\s\S]+?(?=[\\<!\[_*`$]| {2,}\n|$)/,math:/^\$\$\s*([\s\S]*?[^\$])\s*\$\$(?!\$)/};r._inside=/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/,r._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,r.link=i(r.link)("inside",r._inside)("href",r._href)(),r.reflink=i(r.reflink)("inside",r._inside)(),r.reffn=i(r.reffn)("inside",r._inside)(),r.normal=s({},r),r.pedantic=s({},r.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),r.gfm=s({},r.normal,{escape:i(r.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:i(r.text)("]|","~]|")("|","|https?://|")()}),r.gitbook=s({},r.gfm,{tplvar:/^{{\s*(.*?)\s*(?=}})}}/,tplexpr:/^{%\s*(.*?)\s*(?=%})%}/}),r.gitbook.text=i(r.gfm.text)("~]|","~]|"+r.gitbook.tplvar.source+"|"+r.gitbook.tplexpr.source+"|")(),r.breaks=s({},r.gfm,{br:i(r.br)("{2,}","*")(),text:i(r.gfm.text)("{2,}","*")()}),t.exports=r}}),pe=$({"node_modules/kramed/lib/renderer.js"(e,t){var n=Y(),i=n.escape,s=n.unescape,a={langPrefix:"lang-",smartypants:!1,headerPrefix:"",headerAutoId:!0,xhtml:!1};function r(o){this.options=o||a}r.prototype.code=function(o,u,d){if(this.options.highlight){var l=this.options.highlight(o,u);l!=null&&l!==o&&(d=!0,o=l)}return u?'<pre><code class="'+this.options.langPrefix+i(u,!0)+'">'+(d?o:i(o,!0))+`
</code></pre>
`:"<pre><code>"+(d?o:i(o,!0))+`
</code></pre>`},r.prototype.blockquote=function(o){return`<blockquote>
`+o+`</blockquote>
`},r.prototype.html=function(o){return o},r.prototype._createId=function(o){o=o.toLowerCase().replace(/[\s\]\[\!\"\#\$\%\&\'\(\)\*\+\,\.\/\:\;\<\=\>\?\@\\\^\_\`\{\|\}\~\-]+/g,"-");try{o=encodeURIComponent(o)}catch{o=o.replace(/[^\w]+/g,"-")}return o.replace(/-$/,"")},r.prototype.heading=function(o,u,d){var l=/({#)(.+)(})/g.exec(d);return l=l?l[2]:null,!l&&this.options.headerAutoId!==!1&&(l=this._createId(d)),"<h"+u+(l?' id="'+l+'"':"")+">"+o.replace(/{#.+}/g,"")+"</h"+u+`>
`},r.prototype.hr=function(){return this.options.xhtml?`<hr/>
`:`<hr>
`},r.prototype.list=function(o,u){var d=u?"ol":"ul";return"<"+d+`>
`+o+"</"+d+`>
`},r.prototype.listitem=function(o){return"<li>"+o+`</li>
`},r.prototype.paragraph=function(o){return"<p>"+o+`</p>
`},r.prototype.table=function(o,u){return`<table>
<thead>
`+o+`</thead>
<tbody>
`+u+`</tbody>
</table>
`},r.prototype.tablerow=function(o){return`<tr>
`+o+`</tr>
`},r.prototype.tablecell=function(o,u){var d=u.header?"th":"td",l=u.align?"<"+d+' style="text-align:'+u.align+'">':"<"+d+">";return l+o+"</"+d+`>
`},r.prototype.math=function(o,u,d){return mode=d?"; mode=display":"",'<script type="'+u+mode+'">'+o+"<\/script>"},r.prototype.strong=function(o){return"<strong>"+o+"</strong>"},r.prototype.em=function(o){return"<em>"+o+"</em>"},r.prototype.codespan=function(o){return"<code>"+o+"</code>"},r.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},r.prototype.del=function(o){return"<del>"+o+"</del>"},r.prototype.reffn=function(o){return'<sup><a href="#fn_'+o+'" id="reffn_'+o+'">'+o+"</a></sup>"},r.prototype.footnote=function(o,u){return'<blockquote id="fn_'+o+`">
<sup>`+o+"</sup>. "+u+'<a href="#reffn_'+o+'" title="Jump back to footnote ['+o+`] in the text."> &#8617;</a>
</blockquote>
`},r.prototype.link=function(o,u,d){if(this.options.sanitize){try{var l=decodeURIComponent(s(o)).replace(/[^\w:]/g,"").toLowerCase()}catch{return""}if(l.indexOf("javascript:")===0)return""}var p='<a href="'+o+'"';return u&&(p+=' title="'+u+'"'),p+=">"+d+"</a>",p},r.prototype.image=function(o,u,d){var l='<img src="'+o+'" alt="'+d+'"';return u&&(l+=' title="'+u+'"'),l+=this.options.xhtml?"/>":">",l},t.exports=r}}),zt=$({"node_modules/kramed/lib/lex/html_blocks.js"(e,t){"use strict";var n=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","meta","nav","noframes","ol","optgroup","option","p","param","pre","script","section","source","title","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],i=n.reduce(function(a,r){return a[r]=!0,a},{});function s(a){if(!a)return!1;var r=a.toLowerCase();return Boolean(i[r])}t.exports=s}}),je=$({"node_modules/kramed/lib/lex/inline.js"(e,t){var n=Y(),i=n.escape,s=n.noop,a=Rt(),r=pe(),o=Le(),u=zt();function d(l,p,m){if(this.options=p||o,this.links=l,this.rules=a.normal,this.renderer=m,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.gfm?this.options.breaks?this.rules=a.breaks:this.rules=a.gfm:this.options.pedantic&&(this.rules=a.pedantic),this.options.mathjax||(this.rules.math=s)}d.rules=a,d.output=function(l,p,m){var c=new d(p,m,new r);return c.output(l)},d.prototype.escape=function(l,p){return this.options&&this.options.escape===!1?l:i(l,p)},d.prototype.output=function(l){for(var p="",m,c,_,h;l;){if(h=this.rules.escape.exec(l)){l=l.substring(h[0].length),p+=h[1];continue}if(h=this.rules.autolink.exec(l)){l=l.substring(h[0].length),h[2]==="@"?(c=h[1].charAt(6)===":"?this.mangle(h[1].substring(7)):this.mangle(h[1]),_=this.mangle("mailto:")+c):(c=this.escape(h[1]),_=c),p+=this.renderer.link(_,null,c);continue}if(!this.inLink&&(h=this.rules.url.exec(l))){l=l.substring(h[0].length),c=this.escape(h[1]),_=c,p+=this.renderer.link(_,null,c);continue}if(h=this.rules.html.exec(l)){if(h[1]==="a"&&h[2]&&!this.inLink){p+=h[0].substring(0,h[0].indexOf(h[2])),this.inLink=!0,p+=this.output(h[2]),this.inLink=!1,p+=h[0].substring(h[0].indexOf(h[2])+h[2].length),l=l.substring(h[0].length);continue}if(h[1]&&!u(h[1])&&h[2]){p+=h[0].substring(0,h[0].indexOf(h[2])),p+=this.output(h[2]),p+=h[0].substring(h[0].indexOf(h[2])+h[2].length),l=l.substring(h[0].length);continue}l=l.substring(h[0].length),p+=h[0];continue}if(h=this.rules.link.exec(l)){l=l.substring(h[0].length),this.inLink=!0,p+=this.outputLink(h,{href:h[2],title:h[3]}),this.inLink=!1;continue}if(h=this.rules.reffn.exec(l)){l=l.substring(h[0].length),p+=this.renderer.reffn(h[1]);continue}if((h=this.rules.reflink.exec(l))||(h=this.rules.nolink.exec(l))){if(l=l.substring(h[0].length),m=(h[2]||h[1]).replace(/\s+/g," "),m=this.links[m.toLowerCase()],!m||!m.href){p+=h[0].charAt(0),l=h[0].substring(1)+l;continue}this.inLink=!0,p+=this.outputLink(h,m),this.inLink=!1;continue}if(h=this.rules.strong.exec(l)){l=l.substring(h[0].length),p+=this.renderer.strong(this.output(h[2]||h[1]));continue}if(h=this.rules.em.exec(l)){l=l.substring(h[0].length),p+=this.renderer.em(this.output(h[2]||h[1]));continue}if(h=this.rules.code.exec(l)){l=l.substring(h[0].length),p+=this.renderer.codespan(this.escape(h[2],!0));continue}if(h=this.rules.math.exec(l)){l=l.substring(h[0].length),p+=this.renderer.math(h[1],"math/tex",!1);continue}if(h=this.rules.br.exec(l)){l=l.substring(h[0].length),p+=this.renderer.br();continue}if(h=this.rules.del.exec(l)){l=l.substring(h[0].length),p+=this.renderer.del(this.output(h[1]));continue}if(h=this.rules.text.exec(l)){l=l.substring(h[0].length),p+=this.escape(this.smartypants(h[0]));continue}if(l)throw new Error("Infinite loop on byte: "+l.charCodeAt(0))}return p},d.prototype.outputLink=function(l,p){var m=this.escape(p.href),c=p.title?this.escape(p.title):null;return l[0].charAt(0)!=="!"?this.renderer.link(m,c,this.output(l[1])):this.renderer.image(m,c,this.escape(l[1]))},d.prototype.smartypants=function(l){return this.options.smartypants?l.replace(/--/g,"\u2014").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026"):l},d.prototype.mangle=function(l){for(var p="",m=l.length,c=0,_;c<m;c++)_=l.charCodeAt(c),Math.random()>.5&&(_="x"+_.toString(16)),p+="&#"+_+";";return p},t.exports=d}}),Mt=$({"node_modules/kramed/lib/parser.js"(e,t){var n=pe(),i=je();function s(a,r){this.tokens=[],this.token=null,this.options=a||null,this.renderer=r||this.options&&this.options.renderer||new n(this.options)}s.parse=function(a,r,o){var u=new s(r,o);return u.parse(a)},s.prototype.parse=function(a){this.inline=new i(a.links,this.options,this.renderer),this.tokens=a.reverse();for(var r="";this.next();)r+=this.tok();return r},s.prototype.next=function(){return this.token=this.tokens.pop()},s.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},s.prototype.parseText=function(){for(var a=this.token.text;this.peek().type==="text";)a+=`
`+this.next().text;return this.inline.output(a)},s.prototype.tok=function(){if(typeof this.token>"u"||!this.token.hasOwnProperty("type"))return"";switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text);case"footnote":return this.renderer.footnote(this.token.refname,this.inline.output(this.token.text));case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"math":return this.renderer.math(this.token.text,"math/tex",!0);case"table":{var a="",r="",o,u,d,l,p;for(d="",o=0;o<this.token.header.length;o++)l={header:!0,align:this.token.align[o]},d+=this.renderer.tablecell(this.inline.output(this.token.header[o]),{header:!0,align:this.token.align[o]});for(a+=this.renderer.tablerow(d),o=0;o<this.token.cells.length;o++){for(u=this.token.cells[o],d="",p=0;p<u.length;p++)d+=this.renderer.tablecell(this.inline.output(u[p]),{header:!1,align:this.token.align[p]});r+=this.renderer.tablerow(d)}return this.renderer.table(a,r)}case"blockquote_start":{for(var r="";this.next().type!=="blockquote_end";)r+=this.tok();return this.renderer.blockquote(r)}case"list_start":{for(var r="",m=this.token.ordered;this.next().type!=="list_end";)r+=this.tok();return this.renderer.list(r,m)}case"list_item_start":{for(var r="";this.next().type!=="list_item_end";)r+=this.token.type==="text"?this.parseText():this.tok();return this.renderer.listitem(r)}case"loose_item_start":{for(var r="";this.next().type!=="list_item_end";)r+=this.tok();return this.renderer.listitem(r)}case"html":return this.renderer.html(this.token.text);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}},t.exports=s}}),Ut=$({"node_modules/kramed/lib/kramed.js"(e,t){var n=Y(),i=n.merge,s=It(),a=je(),r=Mt(),o=pe();function u(d,l,p){if(p||typeof l=="function"){p||(p=l,l=null),l=i({},u.defaults,l||{});var m=l.highlight,c,_,h=0;try{c=s.lex(d,l)}catch(v){return p(v)}_=c.length;var g=function(v){if(v)return l.highlight=m,p(v);var f;try{f=r.parse(c,l)}catch(b){v=b}return l.highlight=m,v?p(v):p(null,f)};if(!m||m.length<3||(delete l.highlight,!_))return g();for(;h<c.length;h++)(function(v){return v.type!=="code"?--_||g():m(v.text,v.lang,function(f,b){if(f)return g(f);if(b==null||b===v.text)return--_||g();v.text=b,v.escaped=!0,--_||g()})})(c[h]);return}try{return l&&(l=i({},u.defaults,l)),r.parse(s.lex(d,l),l)}catch(v){if(v.message+=`
Please report this to https://github.com/GitbookIO/kramed.`,(l||u.defaults).silent)return"<p>An error occured:</p><pre>"+escape(v.message+"",!0)+"</pre>";throw v}}u.options=u.setOptions=function(d){return i(u.defaults,d),u},u.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!1,mathjax:!0,silent:!1,highlight:null,langPrefix:"lang-",smartypants:!1,headerPrefix:"",headerAutoId:!0,xhtml:!1,renderer:new o},u.Parser=r,u.parser=r.parse,u.Renderer=o,u.Lexer=s,u.lexer=s.lex,u.InlineLexer=a,u.inlineLexer=a.output,u.parse=u,t.exports=u}}),S={ASSIGN:/:|=/,DELIM:/"|'|`/,ESCAPE:/\\/,SPACE:/\s|\r|\n/,INSCOPE:/\(/,OUTSCOPE:/\)/,INDEX:/\[/,OUTDEX:/\]/},Ht=class{constructor(e){this.input=e,this.stream=e.split(""),this.state="IDENT",this.deps={},this.output=[]}build(){for(;this.stream.length;)this.process(this.stream.shift());return this.process(" "),this.output}process(e){switch(this.state){case"IDENT":return this.processIDENT(e);case"VALUE":return this.processVALUE(e)}}processIDENT(e){if(!(S.SPACE.test(e)&&!this.deps.started)){if(this.deps.identifier=this.deps.identifier||"",this.deps.started=!0,S.ASSIGN.test(e)&&!this.deps.escape){if(!this.deps.identifier)throw new Error("No identifier provided");this.state="VALUE",this.deps={identifier:this.deps.identifier};return}if(S.ESCAPE.test(e)&&!this.deps.escape)return this.deps.escape=!0;this.deps.identifier+=e,this.deps.escape=!1}}processVALUE(e){if(!(S.SPACE.test(e)&&!this.deps.started)){if(this.deps.value=this.deps.value||"",this.deps.started=!0,this.deps.escape){this.deps.value+=e,this.deps.escape=!1;return}if(S.ESCAPE.test(e)){this.deps.escape=!0;return}if(this.deps.value+=e,!this.deps.delim){if(S.DELIM.test(e))return this.deps.delim=new RegExp(e);if(S.INSCOPE.test(e))return this.deps.delim=S.OUTSCOPE;if(S.INDEX.test(e))return this.deps.delim=S.OUTDEX;if(this.deps.delim=S.SPACE,!S.SPACE.test(e))return}if(this.deps.delimDepth&&this.deps.delim.test(e))return this.deps.delimDepth-=1;if(this.deps.delim===S.SPACE&&this.deps.delim.test(e)){this.deps.value=this.deps.value.replace(/.$/,""),this.deps.value=this.deps.value.replace(/^\(\(+(.+)\)+\)$/,"($1)"),this.deps.value=this.deps.value.replace(/^\((\S+)\)$/,"$1"),this.output.push([this.deps.identifier,this.deps.value]),this.state="IDENT",this.deps={};return}if(this.deps.delim.test(e)){this.deps.delim=null;return}this.deps.delim===S.OUTSCOPE&&S.INSCOPE.test(e)&&(this.deps.delimDepth=this.deps.delimDepth||0,this.deps.delimDepth+=1)}}},B={ESCAPE:/\\/,SPACE:/\s|\r|\n/,INSCOPE:/\(/,OUTSCOPE:/\)/,END:/END/},Vt=class{constructor(e){this.input=e,this.stream=e.split(""),this.state="IDENT",this.deps={},this.output={}}build(){for(;this.stream.length;)this.process(this.stream.shift());return this.process("END"),this.output}process(e){switch(this.state){case"IDENT":return this.processIDENT(e);case"VALUE":return this.processVALUE(e)}}processIDENT(e){if(!(B.SPACE.test(e)&&!this.deps.started)){if(this.deps.identifier=this.deps.identifier||"",this.deps.started=!0,B.END.test(e)){this.deps.identifier&&(this.output[this.deps.identifier]=!0);return}if(B.INSCOPE.test(e)&&!this.deps.escape){if(!this.deps.identifier)throw new Error("No identifier provided");this.state="VALUE",this.deps={identifier:this.deps.identifier};return}if(B.ESCAPE.test(e)&&!this.deps.escape)return this.deps.escape=!0;this.deps.identifier+=e,this.deps.escape=!1}}processVALUE(e){if(!(B.SPACE.test(e)&&!this.deps.started)){if(this.deps.value=this.deps.value||"",this.deps.started=!0,this.deps.escape){this.deps.value+=e,this.deps.escape=!1;return}if(B.OUTSCOPE.test(e)&&!this.deps.delimDepth){this.output[this.deps.identifier]=this.deps.value,this.state="IDENT",this.deps={};return}if(B.ESCAPE.test(e)){this.deps.escape=!0;return}this.deps.value+=e,B.INSCOPE.test(e)&&(this.deps.delimDepth=this.deps.delimDepth||0,this.deps.delimDepth+=1),B.OUTSCOPE.test(e)&&this.deps.delimDepth&&(this.deps.delimDepth-=1)}}},Be=e=>e.replace(/\/[\w-]+\..+$/,"").replace(/\..+$/,""),Z=e=>e?new Ht(e).build():[],Jt=e=>(e.ownerDocument??document).evaluate("//comment()[contains(.,'bookshop-live')]",e,null,XPathResult.ANY_TYPE,null),Yt=e=>new Vt(e.textContent.replace(/^bookshop-live /,"")).build(),Wt=(e,t)=>e&&(e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING)!==0,ie=null;ie="3.4.1";var P=(e,t,n,i)=>{if(typeof t!="string")return;const s=t.replace(/^include\./,"").replace(/\[(\d+)]/g,".$1").split(".");i?.log?.(`Split ${t} info ${JSON.stringify(s)}`);const a=s.shift();if(i?.log?.(`Using base identifier ${a}`),a){const r=fe(a,n);i?.log?.(`Found the existing path ${r}`);const o=r??a;i?.log?.(`Using the prefix ${o}`),n[n.length-1][e]=`${[o,...s].join(".")}`}else{const r=fe(t,n);i?.log?.(`Found the existing path ${r}`);const o=r??t;i?.log?.(`Using the path ${o}`),n[n.length-1][e]=o}i?.log?.(`Stored ${e}: ${n[n.length-1][e]}`)},fe=(e,t)=>{const[n,...i]=e?.split?.(".");if(n)for(let s=t.length-1;s>=0;s--){if(t[s][n])return i.length?`${t[s][n]}.${i.join(".")}`:`${t[s][n]}`;if(t[s]["."]&&t[s]["."]!=="."&&!/^(\$|Params)/.test(e))return`${t[s]["."]}.${e}`}for(let s=t.length-1;s>=0;s--)if(t[s][e])return`${t[s][e]}`;return null},Ne=(e,t)=>typeof t=="string"&&/^\s*['"`]/.test(t)?!1:(typeof t=="string"&&(t=t.replace(/\[(\d+)]/g,".$1").split(".")),e=e[t.shift()],e&&t.length?Ne(e,t):e),Gt=(e,t,n)=>{let i=e.nextSibling;for(;i&&i.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING;){const s=i.nextSibling;i.remove(),i=s}for(;n.childNodes.length;)t.parentNode.insertBefore(n.childNodes[0],t)},ge=async e=>{const{liveInstance:t,documentNode:n,parentPathStack:i,templateBlockHandler:s,isRetry:a,logger:r,processDeepComponents:o=!0}=e,u=[{scope:{}}],d=i||[{}];let l=[],p=[],m={};const c=()=>[t.data,...u.map(v=>v.scope)],_=()=>u[u.length-1],h=Jt(n);let g=h.iterateNext();for(;g;){r?.log?.("Parsing the comment:"),r?.log?.(g.textContent);const v=Yt(g);if(!t.storedMeta){for(const[f,b]of Z(v?.meta)){if(m[f]=b,r?.log?.(`Registered metadata ${f} as ${b}`),f==="version"&&ie){const V=await t.eval(b,c(),r?.nested?.());V!==ie&&console.error([`Your Bookshop SSG plugin is running version ${V}, but @bookshop/live is running version ${ie}.`,"Bookshop follows semantic versioning with regard to your site and components,","but this does not extend to Bookshop packages being compatible with each other across any version jump.",`
Run %cnpx @bookshop/up@latest%c in your root directory to upgrade all Bookshop dependencies.`].join(`
`),"color: #FF4C29; font-family: monospace; font-weight: bold;","color: unset; font-family: unset; font-weight: unset;")}t.storedMeta=!0}await t.storeMeta(m)}for(const[f,b]of Z(v?.context))if(u.length-1==0||o===!0){r?.log?.(`Parsing context ${f}: ${b}`),_().scope[f]=await t.eval(b,c(),r?.nested?.());const E=t.normalize(b,r?.nested?.());typeof E=="object"&&!Array.isArray(E)?Object.values(E).forEach(D=>P(f,D,d,r?.nested?.())):P(f,E,d,r?.nested?.())}else r?.log?.(`Skipping deep context of ${f}: ${b}`);for(const[f,b]of Z(v?.reassign))if(u.length-1==0||o===!0){r?.log?.(`Reassigning ${f} to ${b}`);for(let E=u.length-1;E>=0;E-=1)if(u[E].scope[f]!==void 0){u[E].scope[f]=await t.eval(b,c(),r?.nested?.());break}for(let E=d.length-1;E>=0;E-=1)if(d[E][f]!==void 0){const D=t.normalize(b,r?.nested?.());typeof D=="object"&&!Array.isArray(D)?Object.values(D).forEach(O=>P(f,O,[d[E]])):P(f,D,[d[E]]);break}}else r?.log?.(`Skipping deep reassignment of ${f} to ${b}`);if(v?.end)r?.log?.("Reached the end of a block, handing off to the handler function"),_().endNode=g,await s(u.pop(),r?.nested?.()),d.pop();else if(v.stack){r?.log?.("Stacking a new context");let f={};d.push({}),u.push({pathStack:JSON.parse(JSON.stringify(d)),scope:f})}else if(v.unstack)r?.log?.("Unstacking a context"),u.pop(),d.pop();else if(v&&v?.name==="__bookshop__subsequent")r?.log?.("Stashing parameters for the next bookshop tag"),l.push(g),p=[...p,...Z(v?.params)];else if(v?.name){const f=u.length-1;if(f==0||o===!0){r?.log?.(`Rendering a new component ${v.name}`);let b={};const V=[...p,...Z(v?.params)];d.push({});for(const[E,D]of V)if(E==="bind"){const O=await t.eval(D,c(),r?.nested?.());O&&typeof O=="object"&&(b={...b,...O},Object.keys(O).forEach(J=>P(J,`${D}.${J}`,d)))}else if(E==="."){const O=await t.eval(D,c(),r?.nested?.());O&&typeof O=="object"&&!Array.isArray(O)?b={...b,...O}:b[E]=O;const J=t.normalize(D,r?.nested?.());typeof J=="object"&&!Array.isArray(J)?Object.entries(J).forEach(([ha,pa])=>P(ha,pa,d)):P(E,J,d)}else b[E]=await t.eval(D,c(),r?.nested?.()),P(E,D,d);u.push({startNode:g,name:Be(v?.name),pathStack:JSON.parse(JSON.stringify(d)),scope:b,params:V,stashedNodes:l,depth:f})}else r?.log?.(`Skipping deep render of ${v.name}`),d.push({}),u.push({startNode:g,name:Be(v?.name),depth:f});p=[],l=[]}try{g=h.iterateNext()}catch{if(r?.log?.("Failed to iterate to the next node."),!a)return r?.log?.("Trying to start again..."),await ge(e)}}},Qt=async(e,t,n)=>{const i=document.implementation.createHTMLDocument(),s=[],a=async({startNode:r,endNode:o,name:u,scope:d,pathStack:l,depth:p,stashedNodes:m},c)=>{if(c?.log?.(`Received a template block to render for ${u}`),p){c?.log?.(`Skipping render for nested component ${u}`);return}if(!(d?.live_render??d?.liveRender??d?._live_render??d?._liveRender??!0)){c?.log?.(`Skipping render for ${u} due to false liverender flag`);return}const h=i.createElement("div");await e.renderElement(u,d,h,c?.nested?.()),c?.log?.(`Rendered ${u} block into an update`),s.push({startNode:r,endNode:o,output:h,pathStack:l,scope:d,name:u,stashedNodes:m})};return n?.log?.("Evaluating templates found in a document"),await ge({liveInstance:e,documentNode:t,templateBlockHandler:a,isRetry:!1,logger:n?.nested?.(),processDeepComponents:!1}),n?.log?.("Completed evaluating the document"),s},Pe=(e,t,n,i)=>{i?.log?.(`Finding the data binding for ${e}`);const s=t.normalize(e,i?.nested?.());if(typeof s=="object"){for(const o of Object.values(s)){i?.log?.(`'twas an object \u2014 finding the data binding for ${o}'`);let u=Pe(o,t,n,i?.nested?.());if(u)return u}return null}let a=fe(s,n)??s,r=Ne(t.data,a);if(i?.log?.(`Found the path ${a}, which ${r?"does resolve":"does not resolve"}`),r){let o=a.replace(/^page(\.|$)/,"");return o=o.replace(/^Params(\.|$)/,""),o}},Zt=async(e,t,n,i,s,a,r)=>{r?.log?.("Hydrating data bindings");const o=t.ownerDocument,u=[];t.prepend(i);for(let l of a.reverse())r?.log?.("Adding a stashed node to the top of our document node"),t.prepend(l);t.append(s),o.body.appendChild(t);const d=async(l,p)=>{p?.log?.(`Storing an update for ${l.name}`),u.push(l)};r?.log?.("Evaluating template..."),await ge({liveInstance:e,documentNode:t,pathStack:[{}],templateBlockHandler:d,isRetry:!1,logger:r?.nested?.()});for(let{startNode:l,endNode:p,params:m,pathStack:c,scope:_,name:h}of u){const g=e.resolveComponentType(h)==="component";if(_?.editorLink??_?.editor_link??_?._editorLink??_?._editor_link??_?.dataBinding??_?.data_binding??_?._dataBinding??_?._data_binding??g){let f=null;for(const[,b]of m)if(f=Pe(b,e,c,r?.nested?.()),f)break;if(f){r?.log?.(`Found the data binding ${f} for ${h}`);let b=l.nextElementSibling;for(;b&&b.compareDocumentPosition(p)&Node.DOCUMENT_POSITION_FOLLOWING;)r?.log?.("Setting data-cms-bind on an element"),b.dataset.cmsBind=`#${f}`,b=b.nextElementSibling}else r?.log?.(`Couldn't find a data binding for ${h}`)}else r?.log?.(`${h} opted out of getting a data binding`)}i.remove(),s.remove();for(let l of a)l.remove();t.remove()},Xt=(e,t,n,i)=>{let s=[],a=[...n.childNodes],r=e.nextSibling;for(;Wt(r,t);)s.push(r),r=r.nextSibling;if(s.length!==a.length){i?.log?.("Trees are different lengths, replacing the entire region en-masse"),Gt(e,t,n);return}i?.log?.("Updating the tree...");for(let o=0;o<s.length;o++)Ie(s[o],a[o])},Ie=(e,t)=>{if(e.isEqualNode(t))return;if(!e.cloneNode(!1).isEqualNode(t.cloneNode(!1))){e.replaceWith(t);return}if(e.childNodes.length!==t.childNodes.length){e.replaceWith(t);return}const n=[...e.childNodes],i=[...t.childNodes];for(let s=0;s<n.length;s++)Ie(n[s],i[s])},Re=(e=0)=>new Promise(t=>setTimeout(t,e)),Kt=e=>class{constructor(n){this.engines=e,this.elements=[],this.globalData={},this.data={},this.cloudcannonInfo={},this.renderOptions={},this.renderCount=0,this.renderedAt=0,this.shouldRenderAt=null,this.renderFrequency=1e3,this.renderTimeout=null,this.verbose=!1,this.lastLog=Date.now(),this.storedMeta=!1,this.memo={},this.logFn=this.logger(),this.loadedFn=n?.loadedFn;const i=n?.remoteGlobals?.length||0;this.awaitingDataFetches=i+1,n?.remoteGlobals?.forEach(this.fetchGlobalData.bind(this)),this.fetchInfo()}completeRender(){typeof this.loadedFn=="function"&&(this.loadedFn(),this.loadedFn=null),this.renderCount+=1}logger(n=0){return{log:i=>{(this.verbose||typeof window<"u"&&window?.bookshopLiveVerbose)&&console.log(`+${Date.now()-this.lastLog}ms : ${"|  ".repeat(n)}${i}`),this.lastLog=Date.now()},nested:()=>this.logger(n+1)}}async fetchInfo(){try{this.logFn.log("Trying to load /_cloudcannon/info.json");const n=await fetch("/_cloudcannon/info.json");this.cloudcannonInfo=await n.json(),await this.engines[0].storeInfo?.(this.cloudcannonInfo),this.awaitingDataFetches-=1,this.logFn.log("Loaded /_cloudcannon/info.json")}catch{this.awaitingDataFetches-=1,this.logFn.log("\u274C Failed to load /_cloudcannon/info.json")}}async fetchGlobalData(n){try{const s=await(await fetch(n)).json();Object.assign(this.globalData,s),this.awaitingDataFetches-=1}catch{this.awaitingDataFetches-=1}}readElement(n){return{dom:n,originalHTML:n.innerHTML,componentName:n.dataset.bookshopLive,componentPropSource:n.dataset.bookshopProps}}resolveComponentType(n){return this.engines[0].resolveComponentType(n)}async storeMeta(n){await this.engines[0].storeMeta?.(n)}async renderElement(n,i,s,a){try{a?.log?.(`Rendering ${n}`),await this.engines[0].render(s,n,i,{...this.globalData},a?.nested?.()),a?.log?.(`Rendered ${n}`)}catch(r){a?.log?.(`Error rendering ${n}`),console.warn(`Error rendering bookshop component ${n}`,r.toString()),console.warn("This is expected in certain cases, and may not be an issue, especially when deleting or re-ordering components.")}}async eval(n,i,s){const a=`Evaluating ${n} in ${JSON.stringify(i)}`;if(s?.log?.(a),!this.memo[a]){const r=await this.engines[0].eval(n,i,s);this.memo[a]=r}return s?.log?.(`Evaluated to ${JSON.stringify(this.memo[a])}`),this.memo[a]}normalize(n,i){const s=`Normalizing ${n}`;return i?.log?.(s),typeof this.engines[0].normalize=="function"&&(this.memo[s]?n=this.memo[s]:(n=this.engines[0].normalize(n),this.memo[s]=n),i?.log?.(`Normalized to ${typeof n=="object"?"json: "+JSON.stringify(n):n}`)),n}async update(n,i){this.logFn.log("Received new data to update the page with");const s=Date.now();for(typeof this.engines[0].transformData=="function"&&i?.transformData!==!1?(this.data=this.engines[0].transformData(n),this.logFn.log("Transformed the data using the engine's transform function")):this.data=n,this.renderOptions=i;this.awaitingDataFetches>0;)this.logFn.log("Still fetching remote data, waiting for all fetches to complete..."),await Re(100);if(s-this.renderedAt<this.renderFrequency){const r=this.renderedAt+this.renderFrequency;if(this.shouldRenderAt=r,this.logFn.log(`Throttling this render \u2014 will try to render again in ${r-s}ms`),await Re(r-s),r!==this.shouldRenderAt)return this.logFn.log("A newer render has schedule itself \u2014 throwing away this render attempt"),!1;this.logFn.log("Now running previously throttled render")}const a=Date.now();return this.shouldRenderAt=null,this.renderedAt=Date.now(),this.logFn.log("Rendering the update"),await this.render(),this.logFn.log(`Done rendering in ${Date.now()-a}ms (${Date.now()-s}ms throttled)`),!0}async render(){const n=typeof window>"u"||typeof window<"u"&&window.CloudCannon?.refreshInterface;this.logFn.log(n?"Editor panels are supported":"Editor panels are not supported");const i={dataBindings:n,...this.renderOptions};typeof window<"u"&&(window.bookshopEditorLinks===!1||window.bookshopDataBindings===!1)&&(i.dataBindings=!1),i.editorLinks===!1&&(i.dataBindings=!1),this.logFn.log(i.dataBindings?"Data bindings are enabled":"Data bindings are disabled"),this.logFn.log("Rendering component updates...");const s=await Qt(this,document,this.logFn.nested());this.logFn.log("Individual component updates have been rendered");for(let{startNode:a,endNode:r,output:o,pathStack:u,stashedNodes:d,name:l}of s)this.logFn.log(`Processing a component update for ${l}`),i.dataBindings&&(this.logFn.log(`Hydrating the data bindings for ${l}`),await Zt(this,o,u,a.cloneNode(),r.cloneNode(),d.map(p=>p.cloneNode()),this.logFn.nested())),this.logFn.log(`Grafting ${l}'s update to the DOM tree`),Xt(a,r,o,this.logFn.nested()),this.logFn.log(`Completed grafting ${l}'s update to the DOM tree`);this.completeRender(),this.logFn.log("Finished rendering")}},W=class{valueOf(){}liquidMethodMissing(e){}},me=function(){return me=Object.assign||function(t){for(var n,i=1,s=arguments.length;i<s;i++){n=arguments[i];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},me.apply(this,arguments)},en=Object.prototype.toString,ze=String.prototype.toLowerCase;function I(e){return typeof e=="string"}function N(e){return typeof e=="function"}function x(e){return e=R(e),I(e)?e:G(e)?"":String(e)}function R(e){return e instanceof W?e.valueOf():e}function ve(e){return typeof e=="number"}function Me(e){return e&&N(e.toLiquid)?Me(e.toLiquid()):e}function G(e){return e==null}function q(e){return en.call(e)==="[object Array]"}function Ue(e,t){e=e||{};for(const n in e)if(e.hasOwnProperty(n)&&t(e[n],n,e)===!1)break;return e}function be(e){return e[e.length-1]}function He(e){const t=typeof e;return e!==null&&(t==="object"||t==="function")}function Ve(e,t,n=1){const i=[];for(let s=e;s<t;s+=n)i.push(s);return i}function se(e,t,n=" "){return Je(e,t,n,(i,s)=>s+i)}function tn(e,t,n=" "){return Je(e,t,n,(i,s)=>i+s)}function Je(e,t,n,i){e=String(e);let s=t-e.length;for(;s-- >0;)e=i(e,n);return e}function nn(e){return e}function Ye(e){return e.replace(/(\w?)([A-Z])/g,(t,n,i)=>(n?n+"_":"")+i.toLowerCase())}function sn(e){return[...e].some(n=>n>="a"&&n<="z")?e.toUpperCase():e.toLowerCase()}function rn(e,t){return e.length>t?e.substr(0,t-3)+"...":e}function We(e,t){return e==null&&t==null?0:e==null?1:t==null||(e=ze.call(e),t=ze.call(t),e<t)?-1:e>t?1:0}var _e=class{constructor(e,t,n,i){this.key=e,this.value=t,this.next=n,this.prev=i}},Ge=class{constructor(e,t=0){this.limit=e,this.size=t,this.cache={},this.head=new _e("HEAD",null,null,null),this.tail=new _e("TAIL",null,null,null),this.head.next=this.tail,this.tail.prev=this.head}write(e,t){if(this.cache[e])this.cache[e].value=t;else{const n=new _e(e,t,this.head.next,this.head);this.head.next.prev=n,this.head.next=n,this.cache[e]=n,this.size++,this.ensureLimit()}}read(e){if(!this.cache[e])return;const{value:t}=this.cache[e];return this.remove(e),this.write(e,t),t}remove(e){const t=this.cache[e];t.prev.next=t.next,t.next.prev=t.prev,delete this.cache[e],this.size--}clear(){this.head.next=this.tail,this.tail.prev=this.head,this.size=0,this.cache={}}ensureLimit(){this.size>this.limit&&this.remove(this.tail.prev.key)}};function an(e,t){const n=document.createElement("base");n.href=e;const i=document.getElementsByTagName("head")[0];i.insertBefore(n,i.firstChild);const s=document.createElement("a");s.href=t;const a=s.href;return i.removeChild(n),a}function Qe(e,t,n){return e.length&&be(e)!=="/"&&(e+="/"),an(e,t).replace(/^(\w+:\/\/[^/]+)(\/[^?]+)/,(s,a,r)=>{const o=r.split("/").pop();return/\.\w+$/.test(o)?s:a+r+n})}async function ln(e){return new Promise((t,n)=>{const i=new XMLHttpRequest;i.onload=()=>{i.status>=200&&i.status<300?t(i.responseText):n(new Error(i.statusText))},i.onerror=()=>{n(new Error("An error occurred whilst receiving the response."))},i.open("GET",e),i.send()})}function on(e){const t=new XMLHttpRequest;if(t.open("GET",e,!1),t.send(),t.status<200||t.status>=300)throw new Error(t.statusText);return t.responseText}async function un(e){return!0}function cn(e){return!0}var dn=Object.freeze({resolve:Qe,readFile:ln,readFileSync:on,exists:un,existsSync:cn});function C(e){return e&&N(e.equals)}function z(e,t){return!ye(e,t)}function ye(e,t){return t.opts.jsTruthy?!e:e===!1||e===void 0||e===null}var Ze={"==":(e,t)=>C(e)?e.equals(t):C(t)?t.equals(e):e===t,"!=":(e,t)=>C(e)?!e.equals(t):C(t)?!t.equals(e):e!==t,">":(e,t)=>C(e)?e.gt(t):C(t)?t.lt(e):e>t,"<":(e,t)=>C(e)?e.lt(t):C(t)?t.gt(e):e<t,">=":(e,t)=>C(e)?e.geq(t):C(t)?t.leq(e):e>=t,"<=":(e,t)=>C(e)?e.leq(t):C(t)?t.geq(e):e<=t,contains:(e,t)=>e&&N(e.indexOf)?e.indexOf(t)>-1:!1,and:(e,t,n)=>z(e,n)&&z(t,n),or:(e,t,n)=>z(e,n)||z(t,n)},y=[0,0,0,0,0,0,0,0,0,20,4,4,4,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,2,8,0,0,0,0,8,0,0,0,64,0,65,0,0,33,33,33,33,33,33,33,33,33,33,0,0,2,2,2,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],ke=1,X=4,Xe=8,Ke=16,hn=32,pn=64;y[160]=y[5760]=y[6158]=y[8192]=y[8193]=y[8194]=y[8195]=y[8196]=y[8197]=y[8198]=y[8199]=y[8200]=y[8201]=y[8202]=y[8232]=y[8233]=y[8239]=y[8287]=y[12288]=X;function et(e){const t={};for(const[n,i]of Object.entries(e)){let s=t;for(let a=0;a<n.length;a++){const r=n[a];s[r]=s[r]||{},a===n.length-1&&y[n.charCodeAt(a)]&ke&&(s[r].needBoundary=!0),s=s[r]}s.handler=i,s.end=!0}return t}var M={root:["."],layouts:["."],partials:["."],relativeReference:!0,cache:void 0,extname:"",fs:dn,dynamicPartials:!0,jsTruthy:!1,trimTagRight:!1,trimTagLeft:!1,trimOutputRight:!1,trimOutputLeft:!1,greedy:!0,tagDelimiterLeft:"{%",tagDelimiterRight:"%}",outputDelimiterLeft:"{{",outputDelimiterRight:"}}",preserveTimezones:!1,strictFilters:!1,strictVariables:!1,lenientIf:!1,globals:{},keepOutputType:!1,operators:Ze,operatorsTrie:et(Ze)};function fn(e){if(e=e||{},e.hasOwnProperty("root")&&(e.root=re(e.root)),e.hasOwnProperty("partials")&&(e.partials=re(e.partials)),e.hasOwnProperty("layouts")&&(e.layouts=re(e.layouts)),e.hasOwnProperty("cache")){let t;typeof e.cache=="number"?t=e.cache>0?new Ge(e.cache):void 0:typeof e.cache=="object"?t=e.cache:t=e.cache?new Ge(1024):void 0,e.cache=t}return e.hasOwnProperty("operators")&&(e.operatorsTrie=et(e.operators)),e}function gn(e){const t=Object.assign({},M,e);return t.partials===M.partials&&(t.partials=t.root),t.layouts===M.layouts&&(t.layouts=t.root),t}function re(e){let t=[];return q(e)&&(t=e),I(e)&&(t=[e]),t.map(n=>Qe(n,".","")).map(n=>n[n.length-1]!=="/"?n+"/":n)}var ae=class extends Error{constructor(e,t){super(e.message),this.originalError=e,this.token=t,this.context=""}update(){const e=this.originalError;this.context=yn(this.token),this.message=kn(e.message,this.token),this.stack=this.message+`
`+this.context+`
`+this.stack+`
From `+e.stack}},tt=class extends ae{constructor(e,t){super(new Error(e),t),this.name="TokenizationError",super.update()}},mn=class extends ae{constructor(e,t){super(e,t),this.name="ParseError",this.message=e.message,super.update()}},nt=class extends ae{constructor(e,t){super(e,t.token),this.name="RenderError",this.message=e.message,super.update()}static is(e){return e.name==="RenderError"}},vn=class extends ae{constructor(e,t){super(e,t),this.name="UndefinedVariableError",this.message=e.message,super.update()}},bn=class extends Error{constructor(e){super(`undefined variable: ${e}`),this.name="InternalUndefinedVariableError",this.variableName=e}},_n=class extends Error{constructor(e){super(e),this.name="AssertionError",this.message=e+""}};function yn(e){const[t]=e.getPosition(),n=e.input.split(`
`),i=Math.max(t-2,1),s=Math.min(t+3,n.length);return Ve(i,s+1).map(r=>{const o=r===t?">> ":"   ",u=se(String(r),String(s).length),d=n[r-1];return`${o}${u}| ${d}`}).join(`
`)}function kn(e,t){t.file&&(e+=`, file:${t.file}`);const[n,i]=t.getPosition();return e+=`, line:${n}, col:${i}`,e}var le=class{constructor(e={},t=M,n=!1){this.scopes=[{}],this.registers={},this.sync=n,this.opts=t,this.globals=t.globals,this.environments=e}getRegister(e){return this.registers[e]=this.registers[e]||{}}setRegister(e,t){return this.registers[e]=t}saveRegister(...e){return e.map(t=>[t,this.getRegister(t)])}restoreRegister(e){return e.forEach(([t,n])=>this.setRegister(t,n))}getAll(){return[this.globals,this.environments,...this.scopes].reduce((e,t)=>me(e,t),{})}get(e){const t=this.findScope(e[0]);return this.getFromScope(t,e)}getFromScope(e,t){return typeof t=="string"&&(t=t.split(".")),t.reduce((n,i)=>{if(n=wn(n,i),G(n)&&this.opts.strictVariables)throw new bn(i);return n},e)}push(e){return this.scopes.push(e)}pop(){return this.scopes.pop()}bottom(){return this.scopes[0]}findScope(e){for(let t=this.scopes.length-1;t>=0;t--){const n=this.scopes[t];if(e in n)return n}return e in this.environments?this.environments:this.globals}};function wn(e,t){return G(e)?e:(e=Me(e),N(e[t])?e[t]():e instanceof W?e.hasOwnProperty(t)?e[t]:e.liquidMethodMissing(t):t==="size"?Tn(e):t==="first"?xn(e):t==="last"?En(e):e[t])}function xn(e){return q(e)?e[0]:e.first}function En(e){return q(e)?e[e.length-1]:e.last}function Tn(e){return q(e)||I(e)?e.length:e.size}var U;(function(e){e.Partials="partials",e.Layouts="layouts",e.Root="root"})(U||(U={}));var An=class{constructor(e){this.options=e}*lookup(e,t,n,i){const{fs:s}=this.options,a=this.options[t];for(const r of this.candidates(e,a,i,t!==U.Root))if(n?s.existsSync(r):yield s.exists(r))return r;throw this.lookupError(e,a)}shouldLoadRelative(e){return this.options.relativeReference&&this.isRelativePath(e)}isRelativePath(e){return e.startsWith("./")||e.startsWith("../")}*candidates(e,t,n,i){const{fs:s,extname:a}=this.options;if(this.shouldLoadRelative(e)&&n){const r=s.resolve(this.dirname(n),e,a);for(const o of t)if(!i||r.startsWith(o)){yield r;return}}for(const r of t){const o=s.resolve(r,e,a);(!i||o.startsWith(r))&&(yield o)}if(s.fallback!==void 0){const r=s.fallback(e);r!==void 0&&(yield r)}}dirname(e){const t=e.split("/");return t.pop(),t.join("/")}lookupError(e,t){const n=new Error("ENOENT");return n.message=`ENOENT: Failed to lookup "${e}" in "${t}"`,n.code="ENOENT",n}},Fn=class{constructor(){this.buffer=""}write(e){this.buffer+=x(e)}},Sn=class{constructor(){throw this.buffer="",this.stream=null,new Error("streaming not supported in browser")}};function oe(e){const t={then:n=>n(e),catch:()=>t};return t}function it(e){const t={then:(n,i)=>i?i(e):t,catch:n=>n(e)};return t}function Dn(e){return e&&N(e.then)}function Cn(e){return e&&N(e.next)&&N(e.throw)&&N(e.return)}function ue(e){if(Dn(e))return e;if(Cn(e))return t();return oe(e);function t(n){let i;try{i=e.next(n)}catch(s){return it(s)}return i.done?oe(i.value):ue(i.value).then(t,s=>{let a;try{a=e.throw(s)}catch(r){return it(r)}return a.done?oe(a.value):t(a.value)})}}function ce(e){return Promise.resolve(ue(e))}function de(e){let t;return ue(e).then(n=>(t=n,oe(t))).catch(n=>{throw n}),t}var On=class{constructor(){this.buffer=""}write(e){e=R(e),typeof e!="string"&&this.buffer===""?this.buffer=e:this.buffer=x(this.buffer)+x(e)}},$n=class{renderTemplatesToNodeStream(e,t){const n=new Sn;return Promise.resolve().then(()=>ue(this.renderTemplates(e,t,n))).then(()=>n.end(),i=>n.error(i)),n.stream}*renderTemplates(e,t,n){n||(n=t.opts.keepOutputType?new On:new Fn);for(const i of e)try{const s=yield i.render(t,n);if(s&&n.write(s),n.break||n.continue)break}catch(s){throw nt.is(s)?s:new nt(s,i)}return n.buffer}},w;(function(e){e[e.Number=1]="Number",e[e.Literal=2]="Literal",e[e.Tag=4]="Tag",e[e.Output=8]="Output",e[e.HTML=16]="HTML",e[e.Filter=32]="Filter",e[e.Hash=64]="Hash",e[e.PropertyAccess=128]="PropertyAccess",e[e.Word=256]="Word",e[e.Range=512]="Range",e[e.Quoted=1024]="Quoted",e[e.Operator=2048]="Operator",e[e.Delimited=12]="Delimited"})(w||(w={}));function qn(e){return!!(L(e)&w.Delimited)}function st(e){return L(e)===w.Operator}function we(e){return L(e)===w.HTML}function Ln(e){return L(e)===w.Output}function xe(e){return L(e)===w.Tag}function rt(e){return L(e)===w.Quoted}function jn(e){return L(e)===w.Literal}function Bn(e){return L(e)===w.Number}function Nn(e){return L(e)===w.PropertyAccess}function Pn(e){return L(e)===w.Word}function In(e){return L(e)===w.Range}function L(e){return e?e.kind:-1}var Rn=class{constructor(e,t){this.handlers={},this.stopRequested=!1,this.tokens=e,this.parseToken=t}on(e,t){return this.handlers[e]=t,this}trigger(e,t){const n=this.handlers[e];return n?(n.call(this,t),!0):!1}start(){this.trigger("start");let e;for(;!this.stopRequested&&(e=this.tokens.shift());){if(this.trigger("token",e)||xe(e)&&this.trigger(`tag:${e.name}`,e))continue;const t=this.parseToken(e,this.tokens);this.trigger("template",t)}return this.stopRequested||this.trigger("end"),this}stop(){return this.stopRequested=!0,this}},Ee=class{constructor(e){this.token=e}};function A(e,t){if(!e){const n=t?t():`expect ${e} to be true`;throw new _n(n)}}var zn=class extends W{equals(e){return G(R(e))}gt(){return!1}geq(){return!1}lt(){return!1}leq(){return!1}valueOf(){return null}},Te=class extends W{equals(e){return e instanceof Te?!1:(e=R(e),I(e)||q(e)?e.length===0:He(e)?Object.keys(e).length===0:!1)}gt(){return!1}geq(){return!1}lt(){return!1}leq(){return!1}valueOf(){return""}},Mn=class extends Te{equals(e){return e===!1||G(R(e))?!0:I(e)?/^\s*$/.test(e):super.equals(e)}},at=new zn,lt={true:!0,false:!1,nil:at,null:at,empty:new Te,blank:new Mn},Un=/[\da-fA-F]/,ot=/[0-7]/,ut={b:"\b",f:"\f",n:`
`,r:"\r",t:"	",v:"\v"};function ct(e){const t=e.charCodeAt(0);return t>=97?t-87:t>=65?t-55:t-48}function dt(e){let t="";for(let n=1;n<e.length-1;n++){if(e[n]!=="\\"){t+=e[n];continue}if(ut[e[n+1]]!==void 0)t+=ut[e[++n]];else if(e[n+1]==="u"){let i=0,s=n+2;for(;s<=n+5&&Un.test(e[s]);)i=i*16+ct(e[s++]);n=s-1,t+=String.fromCharCode(i)}else if(!ot.test(e[n+1]))t+=e[++n];else{let i=n+1,s=0;for(;i<=n+3&&ot.test(e[i]);)s=s*8+ct(e[i++]);n=i-1,t+=String.fromCharCode(s)}}return t}var Hn=class{constructor(e){this.postfix=[...Qn(e)]}*evaluate(e,t){A(e,()=>"unable to evaluate: context not defined");const n=[];for(const i of this.postfix)if(st(i)){const s=yield n.pop(),a=yield n.pop(),r=Yn(e.opts.operators,i,a,s,e);n.push(r)}else n.push(yield F(i,e,t&&this.postfix.length===1));return n[0]}};function F(e,t,n=!1){if(Nn(e))return Vn(e,t,n);if(In(e))return Gn(e,t);if(jn(e))return Wn(e);if(Bn(e))return Jn(e);if(Pn(e))return e.getText();if(rt(e))return Ae(e)}function Vn(e,t,n){const i=e.props.map(s=>F(s,t,!1));try{return t.get([e.propertyName,...i])}catch(s){if(n&&s.name==="InternalUndefinedVariableError")return null;throw new vn(s,e)}}function Jn(e){const t=e.whole.content+"."+(e.decimal?e.decimal.content:"");return Number(t)}function Ae(e){return dt(e.getText())}function Yn(e,t,n,i,s){const a=e[t.operator];return a(n,i,s)}function Wn(e){return lt[e.literal]}function Gn(e,t){const n=F(e.lhs,t),i=F(e.rhs,t);return Ve(+n,+i+1)}function*Qn(e){const t=[];for(const n of e)if(st(n)){for(;t.length&&t[t.length-1].getPrecedence()>n.getPrecedence();)yield t.pop();t.push(n)}else yield n;for(;t.length;)yield t.pop()}var j=class{constructor(e,t,n,i,s){this.kind=e,this.input=t,this.begin=n,this.end=i,this.file=s}getText(){return this.input.slice(this.begin,this.end)}getPosition(){let[e,t]=[1,1];for(let n=0;n<this.begin;n++)this.input[n]===`
`?(e++,t=1):t++;return[e,t]}size(){return this.end-this.begin}},ht=class extends j{constructor(e,t,n,i,s,a,r,o){super(e,n,i,s,o),this.trimLeft=!1,this.trimRight=!1,this.content=this.getText();const u=t[0]==="-",d=be(t)==="-";this.content=t.slice(u?1:0,d?-1:t.length).trim(),this.trimLeft=u||a,this.trimRight=d||r}};function Zn(e,t){let n=!1;for(let i=0;i<e.length;i++){const s=e[i];qn(s)&&(!n&&s.trimLeft&&Xn(e[i-1],t.greedy),xe(s)&&(s.name==="raw"?n=!0:s.name==="endraw"&&(n=!1)),!n&&s.trimRight&&Kn(e[i+1],t.greedy))}}function Xn(e,t){if(!e||!we(e))return;const n=t?X:Ke;for(;y[e.input.charCodeAt(e.end-1-e.trimRight)]&n;)e.trimRight++}function Kn(e,t){if(!e||!we(e))return;const n=t?X:Ke;for(;y[e.input.charCodeAt(e.begin+e.trimLeft)]&n;)e.trimLeft++;e.input.charAt(e.begin+e.trimLeft)===`
`&&e.trimLeft++}var ei=class extends j{constructor(e,t){super(w.Number,e.input,e.begin,t?t.end:e.end,e.file),this.whole=e,this.decimal=t}},K=class extends j{constructor(e,t,n,i){super(w.Word,e,t,n,i),this.input=e,this.begin=t,this.end=n,this.file=i,this.content=this.getText()}isNumber(e=!1){const t=e&&y[this.input.charCodeAt(this.begin)]&pn?this.begin+1:this.begin;for(let n=t;n<this.end;n++)if(!(y[this.input.charCodeAt(n)]&hn))return!1;return!0}},ti=class extends j{constructor(e,t,n,i){super(w.Literal,e,t,n,i),this.input=e,this.begin=t,this.end=n,this.file=i,this.literal=this.getText()}},pt={"==":1,"!=":1,">":1,"<":1,">=":1,"<=":1,contains:1,and:0,or:0},ni=class extends j{constructor(e,t,n,i){super(w.Operator,e,t,n,i),this.input=e,this.begin=t,this.end=n,this.file=i,this.operator=this.getText()}getPrecedence(){const e=this.getText();return e in pt?pt[e]:1}},ft=class extends j{constructor(e,t,n){super(w.PropertyAccess,e.input,e.begin,n,e.file),this.variable=e,this.props=t,this.propertyName=this.variable instanceof K?this.variable.getText():dt(this.variable.getText())}},ii=class extends j{constructor(e,t,n,i,s,a){super(w.Filter,n,i,s,a),this.name=e,this.args=t}},si=class extends j{constructor(e,t,n,i,s,a){super(w.Hash,e,t,n,a),this.input=e,this.begin=t,this.end=n,this.name=i,this.value=s,this.file=a}},ri=class extends j{constructor(e,t,n,i){super(w.Quoted,e,t,n,i),this.input=e,this.begin=t,this.end=n,this.file=i}},gt=class extends j{constructor(e,t,n,i){super(w.HTML,e,t,n,i),this.input=e,this.begin=t,this.end=n,this.file=i,this.trimLeft=0,this.trimRight=0}getContent(){return this.input.slice(this.begin+this.trimLeft,this.end-this.trimRight)}},ai=class extends j{constructor(e,t,n,i,s,a){super(w.Range,e,t,n,a),this.input=e,this.begin=t,this.end=n,this.lhs=i,this.rhs=s,this.file=a}},li=class extends ht{constructor(e,t,n,i,s){const{trimOutputLeft:a,trimOutputRight:r,outputDelimiterLeft:o,outputDelimiterRight:u}=i,d=e.slice(t+o.length,n-u.length);super(w.Output,d,e,t,n,a,r,s)}};function oi(e,t,n,i=e.length){let s=n,a=t,r;for(;s[e[a]]&&a<i;)s=s[e[a++]],s.end&&(r=s);return!r||r.needBoundary&&y[e.charCodeAt(a)]&ke?-1:a}var T=class{constructor(e,t,n=""){this.input=e,this.trie=t,this.file=n,this.p=0,this.rawBeginAt=-1,this.N=e.length}readExpression(){return new Hn(this.readExpressionTokens())}*readExpressionTokens(){const e=this.readValue();if(e)for(yield e;this.p<this.N;){const t=this.readOperator();if(!t)return;const n=this.readValue();if(!n)return;yield t,yield n}}readOperator(){this.skipBlank();const e=oi(this.input,this.p,this.trie,this.p+8);if(e!==-1)return new ni(this.input,this.p,this.p=e,this.file)}readFilters(){const e=[];for(;;){const t=this.readFilter();if(!t)return e;e.push(t)}}readFilter(){if(this.skipBlank(),this.end())return null;A(this.peek()==="|",()=>`unexpected token at ${this.snapshot()}`),this.p++;const e=this.p,t=this.readIdentifier();if(!t.size())return null;const n=[];if(this.skipBlank(),this.peek()===":")do{++this.p;const i=this.readFilterArg();for(i&&n.push(i);this.p<this.N&&this.peek()!==","&&this.peek()!=="|";)++this.p}while(this.peek()===",");return new ii(t.getText(),n,this.input,e,this.p,this.file)}readFilterArg(){const e=this.readValue();if(!e)return;if(this.skipBlank(),this.peek()!==":")return e;++this.p;const t=this.readValue();return[e.getText(),t]}readTopLevelTokens(e=M){const t=[];for(;this.p<this.N;){const n=this.readTopLevelToken(e);t.push(n)}return Zn(t,e),t}readTopLevelToken(e){const{tagDelimiterLeft:t,outputDelimiterLeft:n}=e;return this.rawBeginAt>-1?this.readEndrawOrRawContent(e):this.match(t)?this.readTagToken(e):this.match(n)?this.readOutputToken(e):this.readHTMLToken(e)}readHTMLToken(e){const t=this.p;for(;this.p<this.N;){const{tagDelimiterLeft:n,outputDelimiterLeft:i}=e;if(this.match(n)||this.match(i))break;++this.p}return new gt(this.input,t,this.p,this.file)}readTagToken(e=M){const{file:t,input:n}=this,i=this.p;if(this.readToDelimiter(e.tagDelimiterRight)===-1)throw this.mkError(`tag ${this.snapshot(i)} not closed`,i);const s=new mt(n,i,this.p,e,t);return s.name==="raw"&&(this.rawBeginAt=i),s}readToDelimiter(e){for(;this.p<this.N;){if(this.peekType()&Xe){this.readQuoted();continue}if(++this.p,this.rmatch(e))return this.p}return-1}readOutputToken(e=M){const{file:t,input:n}=this,{outputDelimiterRight:i}=e,s=this.p;if(this.readToDelimiter(i)===-1)throw this.mkError(`output ${this.snapshot(s)} not closed`,s);return new li(n,s,this.p,e,t)}readEndrawOrRawContent(e){const{tagDelimiterLeft:t,tagDelimiterRight:n}=e,i=this.p;let s=this.readTo(t)-t.length;for(;this.p<this.N;){if(this.readIdentifier().getText()!=="endraw"){s=this.readTo(t)-t.length;continue}for(;this.p<=this.N;){if(this.rmatch(n)){const a=this.p;return i===s?(this.rawBeginAt=-1,new mt(this.input,i,a,e,this.file)):(this.p=s,new gt(this.input,i,s,this.file))}if(this.rmatch(t))break;this.p++}}throw this.mkError(`raw ${this.snapshot(this.rawBeginAt)} not closed`,i)}mkError(e,t){return new tt(e,new K(this.input,t,this.N,this.file))}snapshot(e=this.p){return JSON.stringify(rn(this.input.slice(e),16))}readWord(){return console.warn("Tokenizer#readWord() will be removed, use #readIdentifier instead"),this.readIdentifier()}readIdentifier(){this.skipBlank();const e=this.p;for(;this.peekType()&ke;)++this.p;return new K(this.input,e,this.p,this.file)}readHashes(){const e=[];for(;;){const t=this.readHash();if(!t)return e;e.push(t)}}readHash(){this.skipBlank(),this.peek()===","&&++this.p;const e=this.p,t=this.readIdentifier();if(!t.size())return;let n;return this.skipBlank(),this.peek()===":"&&(++this.p,n=this.readValue()),new si(this.input,e,this.p,t,n,this.file)}remaining(){return this.input.slice(this.p)}advance(e=1){this.p+=e}end(){return this.p>=this.N}readTo(e){for(;this.p<this.N;)if(++this.p,this.rmatch(e))return this.p;return-1}readValue(){const e=this.readQuoted()||this.readRange();if(e)return e;if(this.peek()==="["){this.p++;const s=this.readQuoted();return!s||this.peek()!=="]"?void 0:(this.p++,new ft(s,[],this.p))}const t=this.readIdentifier();if(!t.size())return;let n=t.isNumber(!0);const i=[];for(;;)if(this.peek()==="["){n=!1,this.p++;const s=this.readValue()||new K(this.input,this.p,this.p,this.file);this.readTo("]"),i.push(s)}else if(this.peek()==="."&&this.peek(1)!=="."){this.p++;const s=this.readIdentifier();if(!s.size())break;s.isNumber()||(n=!1),i.push(s)}else break;return!i.length&&lt.hasOwnProperty(t.content)?new ti(this.input,t.begin,t.end,this.file):n?new ei(t,i[0]):new ft(t,i,this.p)}readRange(){this.skipBlank();const e=this.p;if(this.peek()!=="(")return;++this.p;const t=this.readValueOrThrow();this.p+=2;const n=this.readValueOrThrow();return++this.p,new ai(this.input,e,this.p,t,n,this.file)}readValueOrThrow(){const e=this.readValue();return A(e,()=>`unexpected token ${this.snapshot()}, value expected`),e}readQuoted(){this.skipBlank();const e=this.p;if(!(this.peekType()&Xe))return;++this.p;let t=!1;for(;this.p<this.N&&(++this.p,!(this.input[this.p-1]===this.input[e]&&!t));)t?t=!1:this.input[this.p-1]==="\\"&&(t=!0);return new ri(this.input,e,this.p,this.file)}readFileName(){const e=this.p;for(;!(this.peekType()&X)&&this.peek()!==","&&this.p<this.N;)this.p++;return new K(this.input,e,this.p,this.file)}match(e){for(let t=0;t<e.length;t++)if(e[t]!==this.input[this.p+t])return!1;return!0}rmatch(e){for(let t=0;t<e.length;t++)if(e[e.length-1-t]!==this.input[this.p-1-t])return!1;return!0}peekType(e=0){return y[this.input.charCodeAt(this.p+e)]}peek(e=0){return this.input[this.p+e]}skipBlank(){for(;this.peekType()&X;)++this.p}},mt=class extends ht{constructor(e,t,n,i,s){const{trimTagLeft:a,trimTagRight:r,tagDelimiterLeft:o,tagDelimiterRight:u}=i,d=e.slice(t+o.length,n-u.length);super(w.Tag,d,e,t,n,a,r,s);const l=new T(this.content,i.operatorsTrie);if(this.name=l.readIdentifier().getText(),!this.name)throw new tt("illegal tag syntax",this);l.skipBlank(),this.args=l.remaining()}},Q=class{constructor(e){this.hash={};const t=new T(e,{});for(const n of t.readHashes())this.hash[n.name.content]=n.value}*render(e){const t={};for(const n of Object.keys(this.hash))t[n]=this.hash[n]===void 0?!0:yield F(this.hash[n],e);return t}};function ui(e){return q(e)}var vt=class{constructor(e,t,n,i){this.name=e,this.impl=t||nn,this.args=n,this.liquid=i}render(e,t){const n=[];for(const i of this.args)ui(i)?n.push([i[0],F(i[1],t)]):n.push(F(i,t));return this.impl.apply({context:t,liquid:this.liquid},[e,...n])}},H=class{constructor(e,t){this.filters=[];const n=new T(e,t.options.operatorsTrie);this.initial=n.readExpression(),this.filters=n.readFilters().map(({name:i,args:s})=>new vt(i,t.filters.get(i),s,t))}*value(e,t){t=t||e.opts.lenientIf&&this.filters.length>0&&this.filters[0].name==="default";let n=yield this.initial.evaluate(e,t);for(const i of this.filters)n=yield i.render(n,e);return n}},ci=class extends Ee{constructor(e,t,n){super(e),this.name=e.name;const i=n.tags.get(e.name);this.impl=Object.create(i),this.impl.liquid=n,this.impl.parse&&this.impl.parse(e,t)}*render(e,t){const n=yield new Q(this.token.args).render(e),i=this.impl;if(N(i.render))return yield i.render(e,t,n)}},di=class extends Ee{constructor(e,t){super(e),this.value=new H(e.content,t)}*render(e,t){const n=yield this.value.value(e,!1);t.write(n)}},hi=class extends Ee{constructor(e){super(e),this.str=e.getContent()}*render(e,t){t.write(this.str)}},pi=class{constructor(e){this.liquid=e,this.cache=this.liquid.options.cache,this.fs=this.liquid.options.fs,this.parseFile=this.cache?this._parseFileCached:this._parseFile,this.loader=new An(this.liquid.options)}parse(e,t){const i=new T(e,this.liquid.options.operatorsTrie,t).readTopLevelTokens(this.liquid.options);return this.parseTokens(i)}parseTokens(e){let t;const n=[];for(;t=e.shift();)n.push(this.parseToken(t,e));return n}parseToken(e,t){try{return xe(e)?new ci(e,t,this.liquid):Ln(e)?new di(e,this.liquid):new hi(e)}catch(n){throw new mn(n,e)}}parseStream(e){return new Rn(e,(t,n)=>this.parseToken(t,n))}*_parseFileCached(e,t,n=U.Root,i){const s=this.loader.shouldLoadRelative(e)?i+","+e:n+":"+e;let a=yield this.cache.read(s);return a||(a=yield this._parseFile(e,t,n,i),this.cache.write(s,a),a)}*_parseFile(e,t,n=U.Root,i){const s=yield this.loader.lookup(e,n,t,i);return this.liquid.parse(t?this.fs.readFileSync(s):yield this.fs.readFile(s),s)}},fi={parse:function(e){const t=new T(e.args,this.liquid.options.operatorsTrie);this.key=t.readIdentifier().content,t.skipBlank(),A(t.peek()==="=",()=>`illegal token ${e.getText()}`),t.advance(),this.value=t.remaining()},render:function*(e){e.bottom()[this.key]=yield this.liquid._evalValue(this.value,e)}};function Fe(e){return q(e)?e:I(e)&&e.length>0?[e]:He(e)?Object.keys(e).map(t=>[t,e[t]]):[]}function ee(e){return q(e)?e:[e]}var Se=class extends W{constructor(e,t,n){super(),this.i=0,this.length=e,this.name=`${n}-${t}`}next(){this.i++}index0(){return this.i}index(){return this.i+1}first(){return this.i===0}last(){return this.i===this.length-1}rindex(){return this.length-this.i}rindex0(){return this.length-this.i-1}valueOf(){return JSON.stringify(this)}},bt=["offset","limit","reversed"],gi={type:"block",parse:function(e,t){const n=new T(e.args,this.liquid.options.operatorsTrie),i=n.readIdentifier(),s=n.readIdentifier(),a=n.readValue();A(i.size()&&s.content==="in"&&a,()=>`illegal tag: ${e.getText()}`),this.variable=i.content,this.collection=a,this.hash=new Q(n.remaining()),this.templates=[],this.elseTemplates=[];let r;const o=this.liquid.parser.parseStream(t).on("start",()=>r=this.templates).on("tag:else",()=>r=this.elseTemplates).on("tag:endfor",()=>o.stop()).on("template",u=>r.push(u)).on("end",()=>{throw new Error(`tag ${e.getText()} not closed`)});o.start()},render:function*(e,t){const n=this.liquid.renderer;let i=Fe(yield F(this.collection,e));if(!i.length){yield n.renderTemplates(this.elseTemplates,e,t);return}const s=yield this.hash.render(e);i=(this.liquid.options.orderedFilterParameters?Object.keys(s).filter(o=>bt.includes(o)):bt.filter(o=>s[o]!==void 0)).reduce((o,u)=>u==="offset"?vi(o,s.offset):u==="limit"?bi(o,s.limit):mi(o),i);const r={forloop:new Se(i.length,this.collection.getText(),this.variable)};e.push(r);for(const o of i){if(r[this.variable]=o,yield n.renderTemplates(this.templates,e,t),t.break){t.break=!1;break}t.continue=!1,r.forloop.next()}e.pop()}};function mi(e){return[...e].reverse()}function vi(e,t){return e.slice(t)}function bi(e,t){return e.slice(0,t)}var _i={parse:function(e,t){const n=new T(e.args,this.liquid.options.operatorsTrie);this.variable=yi(n),A(this.variable,()=>`${e.args} not valid identifier`),this.templates=[];const i=this.liquid.parser.parseStream(t);i.on("tag:endcapture",()=>i.stop()).on("template",s=>this.templates.push(s)).on("end",()=>{throw new Error(`tag ${e.getText()} not closed`)}),i.start()},render:function*(e){const n=yield this.liquid.renderer.renderTemplates(this.templates,e);e.bottom()[this.variable]=n}};function yi(e){const t=e.readIdentifier().content;if(t)return t;const n=e.readQuoted();if(n)return Ae(n)}var ki={parse:function(e,t){this.cond=new H(e.args,this.liquid),this.cases=[],this.elseTemplates=[];let n=[];const i=this.liquid.parser.parseStream(t).on("tag:when",s=>{n=[];const a=new T(s.args,this.liquid.options.operatorsTrie);for(;!a.end();){const r=a.readValue();this.cases.push({val:r,templates:n}),a.readTo(",")}}).on("tag:else",()=>n=this.elseTemplates).on("tag:endcase",()=>i.stop()).on("template",s=>n.push(s)).on("end",()=>{throw new Error(`tag ${e.getText()} not closed`)});i.start()},render:function*(e,t){const n=this.liquid.renderer,i=R(yield this.cond.value(e,e.opts.lenientIf));for(const s of this.cases)if(F(s.val,e,e.opts.lenientIf)===i){yield n.renderTemplates(s.templates,e,t);return}yield n.renderTemplates(this.elseTemplates,e,t)}},wi={parse:function(e,t){const n=this.liquid.parser.parseStream(t);n.on("token",i=>{i.name==="endcomment"&&n.stop()}).on("end",()=>{throw new Error(`tag ${e.getText()} not closed`)}),n.start()}},De;(function(e){e[e.OUTPUT=0]="OUTPUT",e[e.STORE=1]="STORE"})(De||(De={}));var te=De,xi={parseFilePath:Ce,renderFilePath:Oe,parse:function(e){const t=e.args,n=new T(t,this.liquid.options.operatorsTrie);for(this.file=this.parseFilePath(n,this.liquid),this.currentFile=e.file;!n.end();){n.skipBlank();const i=n.p,s=n.readIdentifier();if((s.content==="with"||s.content==="for")&&(n.skipBlank(),n.peek()!==":")){const a=n.readValue();if(a){const r=n.p,o=n.readIdentifier();let u;o.content==="as"?u=n.readIdentifier():n.p=r,this[s.content]={value:a,alias:u&&u.content},n.skipBlank(),n.peek()===","&&n.advance();continue}}n.p=i;break}this.hash=new Q(n.remaining())},render:function*(e,t){const{liquid:n,hash:i}=this,s=yield this.renderFilePath(this.file,e,n);A(s,()=>`illegal filename "${s}"`);const a=new le({},e.opts,e.sync),r=yield i.render(e);if(this.with){const{value:o,alias:u}=this.with;r[u||s]=F(o,e)}if(a.push(r),this.for){const{value:o,alias:u}=this.for;let d=F(o,e);d=Fe(d),r.forloop=new Se(d.length,o.getText(),u);for(const l of d){r[u]=l;const p=yield n._parsePartialFile(s,a.sync,this.currentFile);yield n.renderer.renderTemplates(p,a,t),r.forloop.next()}}else{const o=yield n._parsePartialFile(s,a.sync,this.currentFile);yield n.renderer.renderTemplates(o,a,t)}}};function Ce(e,t){if(t.options.dynamicPartials){const i=e.readValue();if(i===void 0)throw new TypeError(`illegal argument "${e.input}"`);if(i.getText()==="none")return null;if(rt(i)){const s=t.parse(Ae(i));return s.length===1&&we(s[0].token)?s[0].token.getContent():s}return i}const n=e.readFileName().getText();return n==="none"?null:n}function Oe(e,t,n){return typeof e=="string"?e:Array.isArray(e)?n.renderer.renderTemplates(e,t):F(e,t)}var Ei={parseFilePath:Ce,renderFilePath:Oe,parse:function(e){const t=e.args,n=new T(t,this.liquid.options.operatorsTrie);this.file=this.parseFilePath(n,this.liquid),this.currentFile=e.file;const i=n.p;n.readIdentifier().content==="with"?(n.skipBlank(),n.peek()!==":"?this.withVar=n.readValue():n.p=i):n.p=i,this.hash=new Q(n.remaining())},render:function*(e,t){const{liquid:n,hash:i,withVar:s}=this,{renderer:a}=n,r=yield this.renderFilePath(this.file,e,n);A(r,()=>`illegal filename "${r}"`);const o=e.saveRegister("blocks","blockMode");e.setRegister("blocks",{}),e.setRegister("blockMode",te.OUTPUT);const u=yield i.render(e);s&&(u[r]=F(s,e));const d=yield n._parsePartialFile(r,e.sync,this.currentFile);e.push(u),yield a.renderTemplates(d,e,t),e.pop(),e.restoreRegister(o)}},Ti={parse:function(e){const t=new T(e.args,this.liquid.options.operatorsTrie);this.variable=t.readIdentifier().content},render:function(e,t){const n=e.environments;ve(n[this.variable])||(n[this.variable]=0),t.write(x(--n[this.variable]))}},Ai={parse:function(e){const t=new T(e.args,this.liquid.options.operatorsTrie),n=t.readValue();for(t.skipBlank(),this.candidates=[],n&&(t.peek()===":"?(this.group=n,t.advance()):this.candidates.push(n));!t.end();){const i=t.readValue();i&&this.candidates.push(i),t.readTo(",")}A(this.candidates.length,()=>`empty candidates: ${e.getText()}`)},render:function(e,t){const i=`cycle:${F(this.group,e)}:`+this.candidates.join(","),s=e.getRegister("cycle");let a=s[i];a===void 0&&(a=s[i]=0);const r=this.candidates[a];a=(a+1)%this.candidates.length,s[i]=a;const o=F(r,e);t.write(o)}},Fi={parse:function(e,t){this.branches=[],this.elseTemplates=[];let n;this.liquid.parser.parseStream(t).on("start",()=>this.branches.push({predicate:new H(e.args,this.liquid),templates:n=[]})).on("tag:elsif",i=>this.branches.push({predicate:new H(i.args,this.liquid),templates:n=[]})).on("tag:else",()=>n=this.elseTemplates).on("tag:endif",function(){this.stop()}).on("template",i=>n.push(i)).on("end",()=>{throw new Error(`tag ${e.getText()} not closed`)}).start()},render:function*(e,t){const n=this.liquid.renderer;for(const{predicate:i,templates:s}of this.branches){const a=yield i.value(e,e.opts.lenientIf);if(z(a,e)){yield n.renderTemplates(s,e,t);return}}yield n.renderTemplates(this.elseTemplates,e,t)}},Si={parse:function(e){const t=new T(e.args,this.liquid.options.operatorsTrie);this.variable=t.readIdentifier().content},render:function(e,t){const n=e.environments;ve(n[this.variable])||(n[this.variable]=0);const i=n[this.variable];n[this.variable]++,t.write(x(i))}},Di={parseFilePath:Ce,renderFilePath:Oe,parse:function(e,t){const n=new T(e.args,this.liquid.options.operatorsTrie);this.file=this.parseFilePath(n,this.liquid),this.currentFile=e.file,this.hash=new Q(n.remaining()),this.tpls=this.liquid.parser.parseTokens(t)},render:function*(e,t){const{liquid:n,hash:i,file:s}=this,{renderer:a}=n;if(s===null){e.setRegister("blockMode",te.OUTPUT),yield a.renderTemplates(this.tpls,e,t);return}const r=yield this.renderFilePath(this.file,e,n);A(r,()=>`illegal filename "${r}"`);const o=yield n._parseLayoutFile(r,e.sync,this.currentFile);e.setRegister("blockMode",te.STORE);const u=yield a.renderTemplates(this.tpls,e),d=e.getRegister("blocks");d[""]===void 0&&(d[""]=(l,p)=>p.write(u)),e.setRegister("blockMode",te.OUTPUT),e.push(yield i.render(e)),yield a.renderTemplates(o,e,t),e.pop()}},_t=class extends W{constructor(e=()=>""){super(),this.superBlockRender=e}super(){return this.superBlockRender()}},Ci={parse(e,t){const n=/\w+/.exec(e.args);this.block=n?n[0]:"",this.tpls=[],this.liquid.parser.parseStream(t).on("tag:endblock",function(){this.stop()}).on("template",i=>this.tpls.push(i)).on("end",()=>{throw new Error(`tag ${e.getText()} not closed`)}).start()},*render(e,t){const n=this.getBlockRender(e);e.getRegister("blockMode")===te.STORE?e.getRegister("blocks")[this.block]=n:yield n(new _t,t)},getBlockRender(e){const{liquid:t,tpls:n}=this,i=e.getRegister("blocks")[this.block],s=function*(a,r){e.push({block:a}),yield t.renderer.renderTemplates(n,e,r),e.pop()};return i?(a,r)=>i(new _t(()=>s(a,r)),r):s}},Oi={parse:function(e,t){this.tokens=[];const n=this.liquid.parser.parseStream(t);n.on("token",i=>{i.name==="endraw"?n.stop():this.tokens.push(i)}).on("end",()=>{throw new Error(`tag ${e.getText()} not closed`)}),n.start()},render:function(){return this.tokens.map(e=>e.getText()).join("")}},$i=class extends Se{constructor(e,t,n,i){super(e,n,i),this.length=e,this.cols=t}row(){return Math.floor(this.i/this.cols)+1}col0(){return this.i%this.cols}col(){return this.col0()+1}col_first(){return this.col0()===0}col_last(){return this.col()===this.cols}},qi={parse:function(e,t){const n=new T(e.args,this.liquid.options.operatorsTrie),i=n.readIdentifier();n.skipBlank();const s=n.readIdentifier();A(s&&s.content==="in",()=>`illegal tag: ${e.getText()}`),this.variable=i.content,this.collection=n.readValue(),this.hash=new Q(n.remaining()),this.templates=[];let a;const r=this.liquid.parser.parseStream(t).on("start",()=>a=this.templates).on("tag:endtablerow",()=>r.stop()).on("template",o=>a.push(o)).on("end",()=>{throw new Error(`tag ${e.getText()} not closed`)});r.start()},render:function*(e,t){let n=Fe(yield F(this.collection,e));const i=yield this.hash.render(e),s=i.offset||0,a=i.limit===void 0?n.length:i.limit;n=n.slice(s,s+a);const r=i.cols||n.length,o=this.liquid.renderer,u=new $i(n.length,r,this.collection.getText(),this.variable),d={tablerowloop:u};e.push(d);for(let l=0;l<n.length;l++,u.next())d[this.variable]=n[l],u.col0()===0&&(u.row()!==1&&t.write("</tr>"),t.write(`<tr class="row${u.row()}">`)),t.write(`<td class="col${u.col()}">`),yield o.renderTemplates(this.templates,e,t),t.write("</td>");n.length&&t.write("</tr>"),e.pop()}},Li={parse:function(e,t){this.branches=[],this.elseTemplates=[];let n;this.liquid.parser.parseStream(t).on("start",()=>this.branches.push({predicate:new H(e.args,this.liquid),test:ye,templates:n=[]})).on("tag:elsif",i=>this.branches.push({predicate:new H(i.args,this.liquid),test:z,templates:n=[]})).on("tag:else",()=>n=this.elseTemplates).on("tag:endunless",function(){this.stop()}).on("template",i=>n.push(i)).on("end",()=>{throw new Error(`tag ${e.getText()} not closed`)}).start()},render:function*(e,t){const n=this.liquid.renderer;for(const{predicate:i,test:s,templates:a}of this.branches){const r=yield i.value(e,e.opts.lenientIf);if(s(r,e)){yield n.renderTemplates(a,e,t);return}}yield n.renderTemplates(this.elseTemplates,e,t)}},ji={render:function(e,t){t.break=!0}},Bi={render:function(e,t){t.continue=!0}},Ni={assign:fi,for:gi,capture:_i,case:ki,comment:wi,include:Ei,render:xi,decrement:Ti,increment:Si,cycle:Ai,if:Fi,layout:Di,block:Ci,raw:Oi,tablerow:qi,unless:Li,break:ji,continue:Bi},Pi={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},Ii={"&amp;":"&","&lt;":"<","&gt;":">","&#34;":'"',"&#39;":"'"};function yt(e){return x(e).replace(/&|<|>|"|'/g,t=>Pi[t])}function Ri(e){return String(e).replace(/&(amp|lt|gt|#34|#39);/g,t=>Ii[t])}function zi(e){return yt(Ri(e))}function Mi(e){return e.replace(/\n/g,`<br />
`)}function Ui(e){return e.replace(/<script.*?<\/script>|<!--.*?-->|<style.*?<\/style>|<.*?>/g,"")}var Hi=Math.abs,Vi=Math.max,Ji=Math.min,Yi=Math.ceil,Wi=(e,t)=>e/t,Gi=Math.floor,Qi=(e,t)=>e-t,Zi=(e,t)=>e%t,Xi=(e,t)=>e*t;function Ki(e,t=0){const n=Math.pow(10,t);return Math.round(e*n)/n}function es(e,t){return Number(e)+Number(t)}function ts(e,t){return!e||!e.sort?[]:t!==void 0?[...e].sort((n,i)=>We(n[t],i[t])):[...e].sort(We)}var ns=e=>e.split("+").map(decodeURIComponent).join(" "),is=e=>e.split(" ").map(encodeURIComponent).join("+"),ss=(e,t)=>e.join(t===void 0?" ":t),rs=e=>q(e)?be(e):"",as=e=>q(e)?e[0]:"",ls=e=>[...e].reverse();function os(e,t){const n=i=>t?this.context.getFromScope(i,t.split(".")):i;return ee(e).sort((i,s)=>(i=n(i),s=n(s),i<s?-1:i>s?1:0))}var us=e=>e&&e.length||0;function cs(e,t){return ee(e).map(n=>this.context.getFromScope(n,t.split(".")))}function ds(e){return ee(e).filter(t=>!G(t))}function hs(e,t){return ee(e).concat(t)}function ps(e,t,n=1){return t=t<0?e.length+t:t,e.slice(t,t+n)}function fs(e,t,n){return ee(e).filter(i=>{const s=this.context.getFromScope(i,String(t).split("."));return n===void 0?z(s,this.context):s===n})}function gs(e){const t={};return(e||[]).filter(n=>t.hasOwnProperty(String(n))?!1:(t[String(n)]=!0,!0))}var ms=/%([-_0^#:]+)?(\d+)?([EO])?(.)/,kt=["January","February","March","April","May","June","July","August","September","October","November","December"],wt=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],vs=kt.map(Et),bs=wt.map(Et),xt={1:"st",2:"nd",3:"rd",default:"th"};function Et(e){return e.slice(0,3)}function _s(e){return[31,ys(e)?29:28,31,30,31,30,31,31,30,31,30,31]}function Tt(e){let t=0;for(let n=0;n<e.getMonth();++n)t+=_s(e)[n];return t+e.getDate()}function At(e,t){const n=Tt(e)+(t-e.getDay()),s=7-new Date(e.getFullYear(),0,1).getDay()+t;return String(Math.floor((n-s)/7)+1)}function ys(e){const t=e.getFullYear();return!!(!(t&3)&&(t%100||t%400===0&&t))}function ks(e){const t=e.getDate().toString(),n=parseInt(t.slice(-1));return xt[n]||xt.default}function ws(e){return parseInt(e.getFullYear().toString().substring(0,2),10)}var xs={d:2,e:2,H:2,I:2,j:3,k:2,l:2,L:3,m:2,M:2,S:2,U:2,W:2},Es={a:" ",A:" ",b:" ",B:" ",c:" ",e:" ",k:" ",l:" ",p:" ",P:" "},$e={a:e=>bs[e.getDay()],A:e=>wt[e.getDay()],b:e=>vs[e.getMonth()],B:e=>kt[e.getMonth()],c:e=>e.toLocaleString(),C:e=>ws(e),d:e=>e.getDate(),e:e=>e.getDate(),H:e=>e.getHours(),I:e=>String(e.getHours()%12||12),j:e=>Tt(e),k:e=>e.getHours(),l:e=>String(e.getHours()%12||12),L:e=>e.getMilliseconds(),m:e=>e.getMonth()+1,M:e=>e.getMinutes(),N:(e,t)=>{const n=Number(t.width)||9,i=String(e.getMilliseconds()).substr(0,n);return tn(i,n,"0")},p:e=>e.getHours()<12?"AM":"PM",P:e=>e.getHours()<12?"am":"pm",q:e=>ks(e),s:e=>Math.round(e.valueOf()/1e3),S:e=>e.getSeconds(),u:e=>e.getDay()||7,U:e=>At(e,0),w:e=>e.getDay(),W:e=>At(e,1),x:e=>e.toLocaleDateString(),X:e=>e.toLocaleTimeString(),y:e=>e.getFullYear().toString().substring(2,4),Y:e=>e.getFullYear(),z:(e,t)=>{const n=Math.abs(e.getTimezoneOffset()),i=Math.floor(n/60),s=n%60;return(e.getTimezoneOffset()>0?"-":"+")+se(i,2,"0")+(t.flags[":"]?":":"")+se(s,2,"0")},t:()=>"	",n:()=>`
`,"%":()=>"%"};$e.h=$e.b;function Ts(e,t){let n="",i=t,s;for(;s=ms.exec(i);)n+=i.slice(0,s.index),i=i.slice(s.index+s[0].length),n+=As(e,s);return n+i}function As(e,t){const[n,i="",s,a,r]=t,o=$e[r];if(!o)return n;const u={};for(const m of i)u[m]=!0;let d=String(o(e,{flags:u,width:s,modifier:a})),l=Es[r]||"0",p=s||xs[r]||0;return u["^"]?d=d.toUpperCase():u["#"]&&(d=sn(d)),u._?l=" ":u[0]&&(l="0"),u["-"]&&(p=0),se(d,p,l)}var Fs=6e4,Ss=new Date().getTimezoneOffset(),Ds=/([zZ]|([+-])(\d{2}):(\d{2}))$/,ne=class extends Date{constructor(e,t){if(e instanceof ne)return e;const n=(Ss-t)*Fs,i=new Date(e).getTime()+n;super(i),this.timezoneOffset=t}getTimezoneOffset(){return this.timezoneOffset}static createDateFixedToTimezone(e){const t=e.match(Ds);if(t&&t[1]==="Z")return new ne(+new Date(e),0);if(t&&t[2]&&t[3]&&t[4]){const[,,n,i,s]=t,a=(n==="+"?-1:1)*(parseInt(i,10)*60+parseInt(s,10));return new ne(+new Date(e),a)}return new Date(e)}};function Cs(e,t){const n=this.context.opts;let i;return e==="now"||e==="today"?i=new Date:ve(e)?i=new Date(e*1e3):I(e)?/^\d+$/.test(e)?i=new Date(+e*1e3):n.preserveTimezones?i=ne.createDateFixedToTimezone(e):i=new Date(e):i=e,Os(i)?(n.hasOwnProperty("timezoneOffset")&&(i=new ne(i,n.timezoneOffset)),Ts(i,t)):e}function Os(e){return e instanceof Date&&!isNaN(e.getTime())}function $s(e,t){return q(e)||I(e)?e.length?e:t:ye(R(e),this.context)?t:e}function qs(e){return JSON.stringify(e)}function Ls(e,t){return A(arguments.length===2,()=>"append expect 2 arguments"),x(e)+x(t)}function js(e,t){return A(arguments.length===2,()=>"prepend expect 2 arguments"),x(t)+x(e)}function Bs(e){return x(e).replace(/^\s+/,"")}function Ns(e){return x(e).toLowerCase()}function Ps(e){return x(e).toUpperCase()}function Is(e,t){return x(e).split(String(t)).join("")}function Rs(e,t){return x(e).replace(String(t),"")}function zs(e){return x(e).replace(/\s+$/,"")}function Ms(e,t){return x(e).split(String(t))}function Us(e){return x(e).trim()}function Hs(e){return x(e).replace(/\n/g,"")}function Vs(e){return e=x(e),e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}function Js(e,t,n){return x(e).split(String(t)).join(n)}function Ys(e,t,n){return x(e).replace(String(t),n)}function Ws(e,t=50,n="..."){return e=x(e),e.length<=t?e:e.substr(0,t-n.length)+n}function Gs(e,t=15,n="..."){const i=e.split(/\s+/);let s=i.slice(0,t).join(" ");return i.length>=t&&(s+=n),s}var Qs=Object.freeze({escape:yt,escapeOnce:zi,newlineToBr:Mi,stripHtml:Ui,abs:Hi,atLeast:Vi,atMost:Ji,ceil:Yi,dividedBy:Wi,floor:Gi,minus:Qi,modulo:Zi,times:Xi,round:Ki,plus:es,sortNatural:ts,urlDecode:ns,urlEncode:is,join:ss,last:rs,first:as,reverse:ls,sort:os,size:us,map:cs,compact:ds,concat:hs,slice:ps,where:fs,uniq:gs,date:Cs,Default:$s,json:qs,append:Ls,prepend:js,lstrip:Bs,downcase:Ns,upcase:Ps,remove:Is,removeFirst:Rs,rstrip:zs,split:Ms,strip:Us,stripNewlines:Hs,capitalize:Vs,replace:Js,replaceFirst:Ys,truncate:Ws,truncatewords:Gs}),Zs=class{constructor(){this.impls={}}get(e){const t=this.impls[e];return A(t,()=>`tag "${e}" not found`),t}set(e,t){this.impls[e]=t}},Xs=class{constructor(e,t){this.strictFilters=e,this.liquid=t,this.impls={}}get(e){const t=this.impls[e];return A(t||!this.strictFilters,()=>`undefined filter: ${e}`),t}set(e,t){this.impls[e]=t}create(e,t){return new vt(e,this.get(e),t,this.liquid)}},Ft=class{constructor(e={}){this.options=gn(fn(e)),this.parser=new pi(this),this.renderer=new $n,this.filters=new Xs(this.options.strictFilters,this),this.tags=new Zs,Ue(Ni,(t,n)=>this.registerTag(Ye(n),t)),Ue(Qs,(t,n)=>this.registerFilter(Ye(n),t))}parse(e,t){return this.parser.parse(e,t)}_render(e,t,n){const i=new le(t,this.options,n);return this.renderer.renderTemplates(e,i)}async render(e,t){return ce(this._render(e,t,!1))}renderSync(e,t){return de(this._render(e,t,!0))}renderToNodeStream(e,t){const n=new le(t,this.options);return this.renderer.renderTemplatesToNodeStream(e,n)}_parseAndRender(e,t,n){const i=this.parse(e);return this._render(i,t,n)}async parseAndRender(e,t){return ce(this._parseAndRender(e,t,!1))}parseAndRenderSync(e,t){return de(this._parseAndRender(e,t,!0))}_parsePartialFile(e,t,n){return this.parser.parseFile(e,t,U.Partials,n)}_parseLayoutFile(e,t,n){return this.parser.parseFile(e,t,U.Layouts,n)}async parseFile(e){return ce(this.parser.parseFile(e,!1))}parseFileSync(e){return de(this.parser.parseFile(e,!0))}async renderFile(e,t){const n=await this.parseFile(e);return this.render(n,t)}renderFileSync(e,t){const n=this.parseFileSync(e);return this.renderSync(n,t)}async renderFileToNodeStream(e,t){const n=await this.parseFile(e);return this.renderToNodeStream(n,t)}_evalValue(e,t){return new H(e,this).value(t,!1)}async evalValue(e,t){return ce(this._evalValue(e,t))}evalValueSync(e,t){return de(this._evalValue(e,t))}registerFilter(e,t){this.filters.set(e,t)}registerTag(e,t){this.tags.set(e,t)}plugin(e){return e.call(this,Ft)}express(){const e=this;let t=!0;return function(n,i,s){t&&(t=!1,e.options.root.unshift(...re(this.root))),e.renderFile(n,i).then(a=>s(null,a),s)}}},Ks=function(e,t,n){let i=e.getText();if(e.kind===16||e.name&&e.name.match(/^end/))return t;if(e.name&&e.name==="include_cached"&&(i=i.replace(/include_cached/,"include")),n&&e.name&&e.name==="for"&&(i=`${i}{% loop_context ${e.args} %}`),n&&e.name&&(e.name==="assign"||e.name==="local")){let[,s,a]=e.args.match(/^[\r\n\s]*([^=]+?)[\r\n\s]*=[\r\n\s]*([\s\S]+?)[\r\n\s]*$/);i=`${i}<!--bookshop-live context(${s}: (${a}))-->`}if(e.name&&e.name==="bookshop_include"){let s;if(e.name="include",i=i.replace(/bookshop_include[\r\n\s]+(\S+)/,(a,r)=>(s=r,`include _bookshop_include_${r}`)),n){let a=e.args.split(" ");a.shift(),i=`<!--bookshop-live name(${s}) params(${a.join(" ").replace(/\binclude\./g,"")})-->${i}<!--bookshop-live end-->`}}if(e.name&&e.name==="bookshop"){let s;if(e.name="include",i=i.replace(/bookshop[\r\n\s]+(\S+)/,(a,r)=>(s=r,`include _bookshop_${r}`)),n){let a=e.args.split(" ");a.shift(),i=`<!--bookshop-live name(${s}) params(${a.join(" ").replace(/\binclude\./g,"")})-->${i}<!--bookshop-live end-->`}}return e.name&&e.name.match(/^include/)&&(i=i.replace(/=/g,": "),i=i.replace(/\%[\r\n\s]+?include[\r\n\s]+([^"'][^\s]+)/gi,'% include "$1"')),[t.substr(0,e.begin),i,t.substr(e.end)].join("")};function St(e,t){t={isInclude:!1,expandBindSyntax:!0,liveMarkup:!0,...t},e=e.toString(),new T(e).readTopLevelTokens().reverse().forEach(r=>{e=Ks(r,e,t.liveMarkup)});const s=t.isInclude?"{% emulate_jekyll %}":"";return`${t.expandBindSyntax?"{% unbind %}":""}${s}${e}`}var er=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"),tr=function(e){this.registerTag("highlight",{parse:function(t,n){this.lang=t.args.split(" ")[0],this.contents=[];const i=this.liquid.parser.parseStream(n).on("tag:endhighlight",()=>i.stop()).on("template",s=>this.contents.push(s)).on("end",()=>{throw new Error(`tag ${t.raw} not closed`)});i.start()},render:function*(t,n){const s=yield this.liquid.renderer.renderTemplates(this.contents,t);return`<figure class="highlight">
    <pre>
        <code${this.lang?` class="language-${this.lang}" data-lang="${this.lang}"`:""}>
            ${er(s)}
        </code>
    </pre>
</figure>`}})};function nr(e){this.registerFilter("jsonify",t=>JSON.stringify(t))}var ir=qe(Nt());function sr(e){this.registerFilter("slugify",t=>t&&typeof t=="string"?(0,ir.default)(t).toLowerCase():t)}function rr(e){this.registerTag("unbind",{parse:function(t){},render:function(t,n){const i=t.scopes.length-1;return typeof t.scopes[i].bind=="object"&&(t.scopes[i]={...t.scopes[i].bind,...t.scopes[i],bind:null}),""}})}function ar(e){this.registerTag("loop_context",{parse:function(t){this.args=t.args},render:function(t,n){return`<!--bookshop-live context(${this.args.replace(/\binclude\./g,"").replace(/\s+in\s+/,"=").split(" ")[0]}[${t.get(["forloop","index0"])}])-->`}})}var lr=qe(Ut());function or(e){this.registerFilter("markdownify",t=>(0,lr.default)(t??""))}function ur(e){this.registerTag("emulate_jekyll",{parse:function(t){},render:function(t,n){const i=t.scopes.length-1;return t.scopes[i]={include:t.scopes[i]},""}})}function cr(e){this.registerTag("local",{parse:function(t){const n=new T(t.args,this.liquid.options.operatorsTrie);this.key=n.readIdentifier().content,n.skipBlank(),A(n.peek()==="=",()=>`illegal token ${t.getText()}`),n.advance(),this.value=n.remaining()},render:function(t){t.scopes[t.scopes.length-1][this.key]=this.liquid.evalValueSync(this.value,t)}})}var dr=e=>function(t){this.registerFilter("relative_url",n=>(n=n||"",n.startsWith("/")&&!n.startsWith("//")?`${e.baseurl||""}${n}`.replace(/\/\//g,"/"):n))},hr=class{constructor(e){e={name:"Jekyll",files:{},...e},this.key="jekyll",this.name=e.name,this.files=e.files,this.plugins=e.plugins||[],this.plugins.push(nr,sr,rr,ur,cr,tr,ar,or),this.meta={},this.info={},this.plugins.push(dr(this.meta)),this.initializeLiquid(),this.applyLiquidPlugins()}initializeLiquid(){const e=this;this.liquid=new Ft({fs:{readFileSync(t){return"LiquidJS readFileSync unimplemented"},async readFile(t){return await e.retrieveInclude(t)},existsSync(){return!0},async exists(){return!0},resolve(t,n,i){return`${t}${n}`}}})}async retrieveInclude(e){let t;return/_bookshop_include_/.test(e)?t=this.getShared(e.replace(/^.*_bookshop_include_/,"")):/_bookshop_/.test(e)?t=this.getComponent(e.replace(/^.*_bookshop_/,"")):t=this.files?.[e],!t&&t!==""?(console.warn(`[jekyll-engine] No file found for ${e}`),""):St(t,{isInclude:!0})}applyLiquidPlugins(){this.plugins.forEach(e=>{this.liquid.plugin(e)})}getShared(e){const t=`shared/jekyll/${e}.jekyll.html`;return this.files?.[t]}getComponentKey(e){const t=e.split("/").reverse()[0];return`components/${e}/${t}.jekyll.html`}getComponent(e){const t=this.getComponentKey(e);return this.files?.[t]}hasComponent(e){const t=this.getComponentKey(e);return!!this.files?.[t]}resolveComponentType(e){return this.getComponent(e)?"component":this.getShared(e)?"shared":!1}transformData(e){let t=Object.keys(e);return t&&t.length===1&&t[0]==="page"?e:{page:e}}injectInfo(e){for(const t of Object.values(this.info.collections||{}))for(const n of t||[])n.content="Content is not available when live editing";return{site:{...this.info.collections||{},data:this.info.data||{},baseurl:this.meta.baseurl||"",title:this.meta.title||""},...e,env_bookshop_live:!0}}async storeMeta(e={}){this.meta.baseurl=e.baseurl?await this.eval(e.baseurl):void 0,this.meta.title=e.title?await this.eval(e.title):void 0}async storeInfo(e={}){this.info=e}async render(e,t,n,i,s){let a=this.getComponent(t);if(a||(a=this.getShared(t)),!a)return console.warn(`[jekyll-engine] No component found for ${t}`),"";s?.log?.(`Going to render ${t}, with source:`),s?.log?.(a),a=St(a,{}),s?.log?.(`Rewritten the template for ${t} to:`),s?.log?.(a),(!i||typeof i!="object")&&(i={}),n=this.injectInfo({...i,include:n}),e.innerHTML=await this.liquid.parseAndRender(a||"",n),s?.log?.(`Rendered ${t} as:`),s?.log?.(e.innerHTML)}async eval(e,t=[{}]){try{/^\([\s\S]+\)$/.test(e)&&(e=e.replace(/^\(|\)$/g,"")),e=e.replace(/\n/g,"");const n=new le;n.push(this.injectInfo({})),Array.isArray(t)?t.forEach(r=>n.push(r)):n.push(t);const[,i,s]=e.match(/^(.*?)(?:\[(\d+)\])?$/);let a=await this.liquid.evalValue(i,n);return s&&typeof a=="object"&&!Array.isArray(a)&&(a=Object.entries(a)),s?a?.[s]:a}catch(n){return console.warn(`Error evaluating \`${e}\` in the Jekyll engine`,n.toString()),""}}loader(){}},pr=`<div class="mt-1 {{ include.background }} has-text-centered">
  <div class="columns pt-5 pb-5 is-horizontally-centered">
    <div class="column is-two-thirds">
      <div class="columns has-background-{{ include.banner_background }} card primary-light-border">
        <div class="column is-two-thirds">
          <b>{{ include.title }}</b>
          {% if include.content %}
            {% bookshop content bind=include.content %}
          {% endif %}
        </div>

        <div class="column is-flex is-horizontally-centered is-vertically-centered">
          <a class="button is-{{ include.call_to_action.style }}" href="{{ include.call_to_action.url | relative_url }}" target="_blank">
            {{ include.call_to_action.text }}
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
`,fr=pr,gr=`<div class="page-hero-image-container is-flex-container is-fully-centered">
  <div
    class="page-hero-image with_blur"
    alt="{{ include.image_alt }}"
    style="background: url('{{ include.image | relative_url }}') center center; background-size: {{ include.image_style }}; background-repeat: no-repeat">
  </div>

  {% assign color = include.title_color | default: '#1B0278' %}
  <div
    class="p-1 has-text-{{ include.title_alignment }}"
    id="page-hero-title"
    style="color: {{ color }}"
  >
    <h1 class="is-size-1 has-text-weight-bold">
      {{ include.title }}
    </h1>
  </div>
</div>`,mr=gr,vr=`<div class="column {{ include.column_size }}">
  <div class="card">
    {% unless include.hide_image %}
      <div class="is-flex-container is-fully-centered">
        <figure class="image pt-2">
          <img
            style="height: 250px; width: auto;"
            src="{{ include.image | relative_url }}"
            alt="{{ include.name }}">
        </figure>
      </div>
    {% endunless %}

    <div class="card-content has-text-centered mb-0">
      <div class="title is-size-5 mb-0">
        {{ include.name }}
      </div>

      {% if include.subtitle %}
        <div>
          <span class="tag is-light mt-1">
            {{ include.subtitle }}
          </span>
        </div>
      {% endif %}

      <hr />

      <div>
        <span class="tag is-{{ include.tag_style }}">
          {{ include.position }}
        </span>
      </div>
    </div>

    {% unless include.hide_reason %}
      <div class="card-content">
        {% if include.background %}
          <p>
            {{ include.background }}
          </p>

          <hr />
        {% endif %}

        {% if include.reason %}
          <b>
            {{ site.data.languages[page.lang].board.reason }}
          </b>

          <blockquote class="mt-1">
            {{ include.reason }}
          </blockquote>
        {% endif %}
      </div>
    {% endunless %}
  </div>
</div>
`,br=vr,_r=`<div class="container content-container">
  {% if include.board_elections_in_progress == true %}
    <p class="is-size-4 is-cursive has-text-centered">
      {{ include.board_elections_explanation }}
    </p>
  {% else %}
    <div class="columns pt-1 is-multiline is-vcentered is-centered">
      {% for person in include.board %}
        {% bookshop board_profile bind=person %}
      {% endfor %}
    </div>
  {% endif %}
</div>
`,yr=_r,kr=`<div class="fluid-container position-relative">
  <div class="is-flex-container is-spaced-between has-text-centered is-hidden-touch" id="controls-container">
    <div class="clickable prev-button">&#8249;</div>
    <div class="clickable next-button">&#8250;</div>
  </div>
  <div id="autoplay-button" data-action="stop"></div>
  <div id="carousel-container">
    {% for item in include.items %}
      {% bookshop carousel_item bind=item %}
    {% endfor %}
  </div>
</div>
`,wr=kr,xr=`<!-- 15768000 is 6 months in seconds -->
{% assign timeframe = 15768000 %}
{% assign six_months_in_seconds = "now" | date: "%s" | minus: timeframe | to_integer  %}
{% assign item_creation_date_in_seconds = include.creation_date | date: "%s" | to_integer %}

{% if item_creation_date_in_seconds < six_months_in_seconds %}
  {% unless include.always_show %}
    <!-- If the highlight is older than 6 months and not marked as always show, we hide it -->
    {% continue %}
  {% endunless %}
{% endif %}

{% if include.hide_from_carousel %}
  {% continue %}
{% else %}
  <div class="carousel-highlight-container {% unless forloop.first %}is-hidden{% endunless %}">
    <div class="columns is-gapless carousel-slide">
      <div
        class="column has-background-white-ter is-flex-container has-text-centered has-text-centered is-fully-centered"
        style="position: relative; overflow: hidden"
      >
        {% if include.image_custom_dimensions %}
          <img
            class="carousel-image"
            src="{{ include.image | relative_url }}"
            style="height: {{ include.image_height }}px; width: {{ include.image_width }}px"
          />
        {% else %}
          <img
            class="carousel-image"
            src="{{ include.image | relative_url }}"
            style="object-fit: {{ include.image_style }};"
          />
        {% endif %}
      </div>

      <div class="column has-background-white-ter is-flex-container is-fully-centered pt-0">
        <div class="container content-container carousel-text is-unselectable">
          <h1 class="is-size-3 is-uppercase is-unselectable">
            {{ include.title }}
          </h1>

          {% if include.content %}
            {% bookshop content bind=include.content %}
          {% endif %}

          {% if include.show_call_to_action %}
            <br />
            {% if include.call_to_action.opens_donate_modal %}
              <a class="button modal-opener is-secondary has-text-white is-medium" data-target="donation-modal" href="#">
                {{ include.call_to_action.text }}
              </a>
            {% else %}
              <a class="button is-secondary has-text-white is-medium" href="{{ include.call_to_action.url | relative_url }}">
                {{ include.call_to_action.text }}
              </a>
            {% endif %}
          {% endif %}
        </div>
      </div>
    </div>
  </div>
{% endif %}`,Er=xr,Tr=`<div class="column {{ include.column_size }}">
  <p class="is-size-4 title is-cursive">
    {{ include.title }}
  </p>
  {% if include.subtitle %}
    <p class="is-size-6 subtitle has-text-grey">
      {{ include.subtitle }}
    </p>
  {% endif %}

  <div class="tags">
    {% for collaborator in include.collaborators %}
      <div>
        <span class="tag is-{{ include.tag_style }} collaborator-tag" style="margin-bottom: 8px; margin-right: 8px;">
          {{ collaborator }}
        </span>
      </div>
    {% endfor %}
  </div>
</div>
`,Ar=Tr,Fr=`{% if include.show_container == true %}
  {% assign container_class = 'container content-container content' %}
{% else %}
  {% assign container_class = 'content' %}
{% endif %}

<div class="{{ container_class }}">
  <div class="columns is-multiline" id="collaborators">
    {% for collaborator_group in include.collaborator_groups %}
      {% bookshop collaborator_group bind=collaborator_group %}
    {% endfor %}
  </div>
</div>
`,Sr=Fr,Dr=`{% if include.show_container == true %}
  {% assign container_class = 'container content-container content' %}
{% else %}
  {% assign container_class = 'content' %}
{% endif %}
<div class="has-background-{{ include.background_color }}">
  <div class="{{ container_class }} editable has-text-{{ include.text_alignment }}" data-cms-source="/component-library/components/content/content.jekyll.html" data-cms-index="0">
    {{ include.content_html }}
  </div>
</div>
`,Cr=Dr,Or=`<div class="column">
  {% assign title_color = include.title_color | default: '#2E333D' %}
  <h3
    class="is-size-3 mb-0 has-text-{{ include.title_alignment }}"
    style="color: {{ title_color }}"
  >
    {{ include.title }}
  </h3>
  <div class="has-text-{{ include.text_alignment }}">
    {{ include.content_html }}
  </div>

  {% unless include.hide_call_to_action == true %}
    {% assign color = include.call_to_action.text_color | default: '#FFFFFF' %}
    {% assign background_color = include.call_to_action.background_color | default: '#1B0278' %}
    <br />

    <div class="has-text-{{ include.text_alignment }}">
      {% if include.call_to_action.opens_donate_modal %}
        <a
          class="button modal-opener"
          style="color: {{ color }}; background-color: {{ background_color }}"
          data-target="donation-modal"
          href="#"
        >
          {{ include.call_to_action.text }}
        </a>
      {% else %}
        <a
          class="button is-{{ include.call_to_action.style }}"
          href="{{ include.call_to_action.url | relative_url }}"
          style="color: {{ color }}; background-color: {{ background_color }}"
        >
          {{ include.call_to_action.text }}
        </a>
      {% endif %}
    </div>
  {% endunless %}
</div>`,$r=Or,qr=`<div class="has-background-{{ include.background_color }}">
  <div class="container content-container">
    <div class="columns">
      {% for highlight in include.highlights %}
        {% bookshop content_highlight bind=highlight %}
      {% endfor %}
    </div>
  </div>
</div>
`,Lr=qr,jr=`<div class="container divider-container">
  <hr/>
</div>
`,Br=jr,Nr=`{% if include.show_container == true %}
  {% assign container_class = 'container content-container content' %}
{% else %}
  {% assign container_class = 'content' %}
{% endif %}
{% assign end_number = include.number_of_posts %}

<div class="{{ container_class }}">
  {% if include.title %}
    <p class="is-size-4 title is-cursive">
      {{ include.title }}
    </p>
  {% endif %}
  {% if include.subtitle %}
    <p class="is-size-6 subtitle has-text-grey">
      {{ include.subtitle }}
    </p>
  {% endif %}

  <div class="columns is-multiline" id="{{ include.posts_container_id }}">
    {% for i in (1..end_number) %}
      <div class="column {{ include.column_size }}">
        <div class="card skeleton-article">
          <div class="card-image has-background-white-ter has-text-centered">
            <img
              style="height: 200px"
            >
          </div>

          <div class="tag news-container-number">
            {{ forloop.index }}
          </div>

          <div class="card-content">
            <div class="content">
              <p class="skeleton-article-text least mb-1"></p>
							<p class="skeleton-article-text less mb-1"></p>
							<p class="skeleton-article-text less mb-1"></p>
							<p class="skeleton-article-text least mb-1"></p>
            </div>
          </div>
        </div>
      </div>
    {% endfor %}
  </div>
</div>

{% include automated_posts/footer.html posts_limit=end_number posts_container_id=include.posts_container_id useCardStyle='true' column_size=include.column_size truncate='true' truncateLength=include.truncate_length %}
`,Pr=Nr,Ir=`<div class="has-background-white-ter">
  <div class="container content-container has-text-centered" id="flyer-layout-container">
    <img
      class="masonry-image flyer-image-modal-image clickable"
      src="{{ include.image }}"
      alt="{{ include.image_alt }}"
      style="height: {{ include.image_height }}px"
    />

    <h2 class="is-size-2 is-uppercase has-text-primary has-text-centered">
      {{ include.title }}
    </h2>
    {% unless include.hide_call_to_action == true %}
      <a
        class="button is-secondary is-medium mb-1"
        href="{{ include.call_to_action.url }}"
        target="_blank"
      >
        {{ include.call_to_action.text }}
      </a>
    {% endunless %}

    {% unless include.hide_date %}
      <h4 class="is-size-4">
        <date>
          {% include day_of_week_helper.html date=include.date %}
        </date>
      </h4>

      <h3 class="is-size-3">
        <date class="post-date has-text-centered">
          <!-- [date_to_string_helper] If we need to change this, make sure we change all occurrences! -->
          {% if env_bookshop_live %}
            {% if page.lang == 'en' %}
              {% assign months = "January, February, March, April, May, June, July, August, September, October, November, December" | split: ", " %}
              {% capture i18n_date %}
                {% assign m = include.date | date: "%-m" | minus: 1 %}
                {{ months[m] }}
                {% assign d = include.date | date: "%-d" %}
                {% case d %}
                {% when '1' or '21' or '31' %}{{ d }}st,
                {% when '2' or '22' %}{{ d }}nd,
                {% when '3' or '23' %}{{ d }}rd,
                {% else %}{{ d }}th
                {% endcase %}
                {{ ', ' }}
                {{ include.date | date: "%Y" }}
              {% endcapture %}
            {% else %}
              {% assign months = "enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre" | split: ", " %}
              {% capture i18n_date %}
                {% assign d = include.date | date: "%-d" %}
                {{ d }}
                {{ ' de ' }}
                {% assign m = include.date | date: "%-m" | minus: 1 %}
                {{ months[m] }}
                {{ ' de ' }}
                {{ include.date | date: "%Y" }}
              {% endcapture %}
            {% endif %}

            {{ i18n_date }}
          {% else %}
            {% include date_to_string_helper.html date=include.date use_year=true %}
          {% endif %}
        </date>
      </h3>
    {% endunless %}

    {% unless include.hide_time %}
      <h4 class="is-size-4">
        <date>
          {{ include.time }}
        </date>
      </h4>
    {% endunless %}

    {% if include.location %}
      <h4 class="is-size-4">
        <div class="tag is-info is-light is-medium">
          <a
            href="{{ include.location.url }}"
            target="_blank"
          >
            {{ include.location.text }}
          </a>
        </div>
      </h4>
    {% endif %}

    {% if page %}
      <div class="has-text-centered">
        {% if page.path contains "_drafts" %}
          <div class="tag is-warning">DRAFT POST</div>
        {% endif %}
        {% if page.published == false %}
          <div class="tag is-info">UNPUBLISHED CHANGES</div>
        {% endif %}

        {% if page.layout != 'upcoming_event' %}
          {% if post_date_to_compare >= current_date %}
            <div class="tag is-info">FUTURE</div>
          {% endif %}
        {% endif %}
      </div>
    {% endif %}
  </div>
</div>

<div class="modal" id="flyer-image-modal">
  <div class="modal-background"></div>

  <div class="modal-content">
    <p class="image is-flex-container is-horizontally-centered">
      <img class="modal-highlight" id="flyer-image-modal-highlight">
    </p>
  </div>

  <button class="modal-close modal-image-close is-large" aria-label="close" id="flyer-image-modal-close"></button>
</div>
`,Rr=Ir,zr=`<form action="{{ include.form_url }}" method="POST">
  <input
    hidden
    name="_page"
    value="{{ include.title }}"
  >
  <input type="hidden" name="_language" value="{{ include.lang }}" />

  {% if include.fields.name.presence %}
    <div class="field">
      <label class="label">
        {{ include.fields.name.label }}
        {% if include.fields.name.required %}
            *
        {% endif %}
      </label>
      <div class="control">
        <input
          name="{{ include.fields.name.label }}"
          class="input"
          type="text"
          {% if include.fields.name.required %}required{% endif %}
        >
      </div>
    </div>
  {% endif %}

  <div class="field is-horizontal">
    <div class="field-body">
      {% if include.fields.email.presence %}
        <div class="field">
          <label class="label">
            {{ include.fields.email.label }}
            {% if include.fields.email.required %}
            *
            {% endif %}
          </label>
          <div class="control">
            <input
              name="{{ include.fields.email.label }}"
              class="input"
              type="email"
              {% if include.fields.email.required %}required{% endif %}
            >
          </div>
        </div>
      {% endif %}

      {% if include.fields.phone.presence %}
        <div class="field">
          <label class="label">
            {{ include.fields.phone.label }}
            {% if include.fields.phone.required %}
            *
            {% endif %}
          </label>
          <div class="control">
            <input
              name="{{ include.fields.phone.label }}"
              class="input"
              type="tel"
              {% if include.fields.phone.required %}required{% endif %}
            >
          </div>
        </div>
      {% endif %}
    </div>
  </div>

  {% if include.fields.sponsorship_type.presence %}
    <div class="field">
      <label class="label">
        {{ include.fields.sponsorship_type.label }}
        {% if include.fields.sponsorship_type.required %}
        *
        {% endif %}
      </label>

      <div class="control">
        {% for type in include.fields.sponsorship_type.types %}
          <div>
            <label class="checkbox">
              <input name="{{ type }}" type="checkbox">
              {{ type }}
            </label>
          </div>
        {% endfor %}
      </div>
    </div>
  {% endif %}

  {% if include.fields.visit_dates.presence %}
    <div class="field">
      <label class="label">
        {{ include.fields.visit_dates.label.first_preference }}
        {% if include.fields.visit_dates.required %}
          *
        {% endif %}
      </label>
      <div class="control">
        <input
          name="{{ include.fields.visit_dates.label.first_preference }}"
          class="input"
          type="date"
          {% if include.fields.visit_dates.required %}required{% endif %}
        >
      </div>
    </div>

    <div class="field">
      <label class="label">
        {{ include.fields.visit_dates.label.second_preference }}
        {% if include.fields.visit_dates.required %}
          *
        {% endif %}
      </label>
      <div class="control">
        <input
          name="{{ include.fields.visit_dates.label.second_preference }}"
          class="input"
          type="date"
          {% if include.fields.visit_dates.required %}required{% endif %}
        >
      </div>
    </div>
  {% endif %}

  {% if include.fields.company.presence %}
    <div class="field">
      <label class="label">
        {{ include.fields.company.label }}
        {% if include.fields.company.required %}
        *
        {% endif %}
      </label>
      <div class="control">
        <input
          name="{{ include.fields.company.label }}"
          class="input"
          type="text"
          {% if include.fields.company.required %}required{% endif %}
        >
      </div>
    </div>
  {% endif %}

  {% if include.fields.questions_and_comments.presence %}
    <div class="field">
      <label class="label">
        {{ include.fields.questions_and_comments.label }}
        {% if include.fields.questions_and_comments.required %}
          *
        {% endif %}
      </label>
      <div class="control">
        <div class="control">
          <textarea
            name="{{ include.fields.questions_and_comments.label }}"
            class="textarea"
            {% if include.fields.questions_and_comments.required %}required{% endif %}
          ></textarea>
        </div>
      </div>
    </div>
  {% endif %}

  {% if include.fields.description.presence %}
    <div class="field">
      <label class="label">
        {{ include.fields.description.label }}
        {% if include.fields.description.required %}
          *
        {% endif %}
      </label>
      <div class="control">
        <div class="control">
          <textarea
            name="{{ include.fields.description.label }}"
            class="textarea"
            {% if include.fields.description.required %}required{% endif %}
          ></textarea>
        </div>
      </div>
    </div>
  {% endif %}

  <div class="control pt-4">
    <input class="button is-secondary" type="submit" value="{{ include.submit.text }}">
  </div>
</form>
`,Mr=zr,Ur=`{% if include.show_container == true %}
  {% assign container_class = 'container content-container content' %}
{% else %}
  {% assign container_class = 'content' %}
{% endif %}

<div class="{{ container_class }}">
  <p class="is-size-4 title is-cursive">
    {{ include.title }}
  </p>
  {% if include.subtitle %}
    <p class="is-size-6 subtitle has-text-grey">
      {{ include.subtitle }}
    </p>
  {% endif %}

  <div class="columns is-multiline">
    {% for logo in include.logos %}
      <div class="column {{ include.column_size }}">
        {% if logo.image %}
          <div class="is-flex-container is-fully-centered">
            <figure class="image pt-2">
              <img
                style="height: {{ include.logo_height }}px; width: auto;"
                src="{{ logo.image | relative_url }}"
                alt="{{ logo.image_alt }}">
            </figure>
          </div>
        {% endif %}
      </div>
    {% endfor %}
  </div>
</div>
`,Hr=Ur,Vr=`<div class="container content-container">
  <div class="mt-2 masonry-grid {% if include.photos.size < 5 %}has-2{% endif %}">
    {% for photo in include.photos %}
      <div class="brick">
        <img class="masonry-image post-image-modal-image clickable" src="{{ photo | relative_url }}" />
      </div>
    {% endfor %}
  </div>
  
  <div class="modal" id="post-image-modal">
    <div class="modal-background"></div>
    <div aria-label="count" class="has-text-white modal-image-count" id="post-image-modal-count"></div>
    <div class="is-flex-container is-spaced-between has-text-centered" id="image-modal-controls">
      <div class="clickable prev-button" id="post-image-modal-prev-button">&#8249;</div>
      <div class="clickable next-button" id="post-image-modal-next-button">&#8250;</div>
    </div>
  
    <div class="modal-content">
      <p class="image is-flex-container is-horizontally-centered">
        <img class="modal-highlight" id="post-image-modal-highlight">
      </p>
    </div>
  
    <button class="modal-close modal-image-close is-large" aria-label="close" id="post-image-modal-close"></button>
    {% if include.photos.first %}
      <div style="background-image: url('{{ include.photos.first | relative_url }}')" class="blur-background" id="post-image-modal-blur-background"></div>
    {% endif %}
  </div>
</div>
`,Jr=Vr,Yr=`{% assign current_date = 'now' | date: '%s' | plus: 0 %}
{% assign post_date_to_compare = include.date | date: '%s' | plus: 0 %}

<div class="columns is-mobile" id="post-side-by-side-layout-container">
  <div
    class="column has-background-white-ter is-flex-container is-vertically-centered is-horizontally-centered"
    id="post-side-by-side-layout-title"
  >
    <section class="hero">
      <div class="hero-body">
        <h1 class="is-size-2 is-uppercase">
          {{ include.title }}
        </h1>

        {% unless include.hide_date %}
          <h4 class="is-size-4">
            <date>
              {% include day_of_week_helper.html date=include.date %}
            </date>
          </h4>

          <h3 class="is-size-3">
            <date class="post-date has-text-centered">
              <!-- [date_to_string_helper] If we need to change this, make sure we change all occurrences! -->
              {% if env_bookshop_live %}
                {% if page.lang == 'en' %}
                  {% assign months = "January, February, March, April, May, June, July, August, September, October, November, December" | split: ", " %}
                  {% capture i18n_date %}
                    {% assign m = include.date | date: "%-m" | minus: 1 %}
                    {{ months[m] }}
                    {% assign d = include.date | date: "%-d" %}
                    {% case d %}
                    {% when '1' or '21' or '31' %}{{ d }}st,
                    {% when '2' or '22' %}{{ d }}nd,
                    {% when '3' or '23' %}{{ d }}rd,
                    {% else %}{{ d }}th
                    {% endcase %}
                    {{ ', ' }}
                    {{ include.date | date: "%Y" }}
                  {% endcapture %}
                {% else %}
                  {% assign months = "enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre" | split: ", " %}
                  {% capture i18n_date %}
                    {% assign d = include.date | date: "%-d" %}
                    {{ d }}
                    {{ ' de ' }}
                    {% assign m = include.date | date: "%-m" | minus: 1 %}
                    {{ months[m] }}
                    {{ ' de ' }}
                    {{ include.date | date: "%Y" }}
                  {% endcapture %}
                {% endif %}

                {{ i18n_date }}
              {% else %}
                {% include date_to_string_helper.html date=include.date use_year=true %}
              {% endif %}
            </date>
          </h3>
        {% endunless %}
        
        <!-- Page specific logic -->
        {% if page %}
          {% if page.path contains "_drafts" %}
            <div class="tag is-warning">DRAFT POST</div>
          {% endif %}
          {% if page.published == false %}
            <div class="tag is-info">UNPUBLISHED CHANGES</div>
          {% endif %}

          {% if page.layout != 'upcoming_event' %}
            {% if post_date_to_compare >= current_date %}
              <div class="tag is-info">FUTURE</div>
            {% endif %}
          {% endif %}
        {% endif %}
      </div>
    </section>
  </div>

  {% if include.image %}
    <div class="column" id="post-side-by-side-layout-image" alt="{{ include.image_alt }}"
      style="background: url('{{ include.image | relative_url }}') center center; background-size: {{ include.image_style }}; background-repeat: no-repeat">
    </div>
  {% endif %}
</div>
`,Wr=Yr,Gr=`{% assign current_date = 'now' | date: '%s' | plus: 0 %}
{% assign post_date_to_compare = include.date | date: '%s' | plus: 0 %}

<div class="has-background-{{ include.background_color }}">
  <div
    class="container content-container {% if include.show_padding_top == false%}pt-0{% endif %} {% if include.show_padding_bottom == false%}pb-0{% endif %}"
    id="central-title-layout-container"
  >
    {% assign color = include.title_color | default: '#1B0278' %}
    <h1
      class="is-size-2 is-uppercase has-text-weight-bold has-text-{{ include.title_alignment }}"
      id="post-title"
      style="color: {{ color }}"
    >
      {{ include.title }}
    </h1>

    {% unless include.hide_date %}
      <div class="has-text-{{ include.title_alignment }}">
        <date class="post-date">
          <!-- [date_to_string_helper] If we need to change this, make sure we change all occurrences! -->
          {% if env_bookshop_live %}
            {% if page.lang == 'en' %}
              {% assign months = "January, February, March, April, May, June, July, August, September, October, November, December" | split: ", " %}
              {% capture i18n_date %}
                {% assign m = include.date | date: "%-m" | minus: 1 %}
                {{ months[m] }}
                {% assign d = include.date | date: "%-d" %}
                {% case d %}
                {% when '1' or '21' or '31' %}{{ d }}st,
                {% when '2' or '22' %}{{ d }}nd,
                {% when '3' or '23' %}{{ d }}rd,
                {% else %}{{ d }}th
                {% endcase %}
                {{ ', ' }}
                {{ include.date | date: "%Y" }}
              {% endcapture %}
            {% else %}
              {% assign months = "enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre" | split: ", " %}
              {% capture i18n_date %}
                {% assign d = include.date | date: "%-d" %}
                {{ d }}
                {{ ' de ' }}
                {% assign m = include.date | date: "%-m" | minus: 1 %}
                {{ months[m] }}
                {{ ' de ' }}
                {{ include.date | date: "%Y" }}
              {% endcapture %}
            {% endif %}

            {{ i18n_date }}
          {% else %}
            {% include date_to_string_helper.html date=include.date use_year=true %}
          {% endif %}
        </date>
      </div>
    {% endunless %}

    <!-- Page specific logic -->
    {% if page %}
      {% if page.path contains "_drafts" %}
        <div class="tag is-warning">DRAFT POST</div>
      {% endif %}
      {% if page.published == false %}
        <div class="tag is-info">UNPUBLISHED CHANGES</div>
      {% endif %}

      {% if page.layout != 'upcoming_event' %}
        {% if post_date_to_compare >= current_date %}
          <div class="tag is-info">FUTURE</div>
        {% endif %}
      {% endif %}
    {% endif %}
  </div>
</div>
`,Qr=Gr,Zr=`<div class="container content-container">
  <div class="columns">
    <div class="column">
      <div class="content">
        {{ include.content_html }}
      </div>
    </div>

    {% if include.form %}
      {% bookshop form bind=include.form %}
    {% endif %}
  </div>
</div>
`,Xr=Zr,Kr=`<div class="has-background-{{ include.background_color }}">
  <div class="container content-container">
    <section class="is-medium">
      <div class="pb-2 content page-content">
        <div class="columns is-align-items-{{ include.content_alignment }}">
          {% if include.layout == 'image_right' %}
            <div class="column">
              <div class="content has-text-{{ include.text_alignment }}">
                {{ include.content_html }}
              </div>
            </div>

            {% if include.image %}
              <div class="column is-one-third">
                <figure class="image">
                  <img
                    src="{{ include.image | relative_url }}"
                    alt="{{ include.image_alt }}"
                  >
                </figure>
              </div>
            {% endif %}
          {% else %}
            {% if include.image %}
              <div class="column is-one-third">
                <figure class="image">
                  <img
                    src="{{ include.image | relative_url }}"
                    alt="{{ include.image_alt }}"
                  >
                </figure>
              </div>
            {% endif %}

            <div class="column">
              <div class="content has-text-{{ include.text_alignment }}">
                {{ include.content_html }}
              </div>
            </div>
          {% endif %}
        </div>
      </div>
    </section>
  </div>
</div>`,ea=Kr,ta=`<span class="c-tag">{{ include.text }}</span>
`,na=ta,ia=`<article class="cell is-vertical {% if include.has_children%}pt-0{% endif %}">
  {% if include.has_children %}
    <div class="fixed-grid has-1-cols is-row-gap-2">
      <div class="grid">
        {% for child in include.children %}
          {% bookshop tile bind=child %}
        {% endfor %}
      </div>
    </div>
  {% else %}
    <div class="has-background-light p-4">
      <p class="is-size-3 is-cursive">
        {{ include.title }}
      </p>
    
      {% if include.content %}
        {% bookshop content bind=include.content %}
      {% endif %}
    
      {% if include.call_to_action %}
        {% if include.call_to_action.image %}
          <div class="donar-box position-relative">
            <div class="donar-photo contain-no-repeat" alt="" style="background-image: url('{{ include.call_to_action.image | relative_url }}')"></div>
            <div class="donar-box-caption has-text-white has-text-centered is-cursive is-flex-container is-fully-centered">
              <div class="donar-box-caption-content">
                <a href="{{ include.call_to_action.url | relative_url }}" class="button is-large is-secondary">
                  {{ include.call_to_action.text }}
                </a>
              </div>
            </div>
          </div>
        {% else %}
          <a
            class="button is-{{ include.call_to_action.style }}"
            href="{{ include.call_to_action.url | relative_url }}"
            target="_blank"
          >
            {{ include.call_to_action.text }}
          </a>
        {% endif %}
      {% endif %}
    </div>
  {% endif %}
</article>
`,sa=ia,ra=`<div class="container content-container">
  <div class="fixed-grid has-2-cols is-row-gap-2">
    <div class="grid">
      {% for tile in include.tiles %}
        {% bookshop tile bind=tile %}
      {% endfor %}
    </div>
  </div>
</div>
`,aa=ra,la=`{% comment %}
  # This this include is used on pages where an array structure
  # is used to build the page on CloudCannon, and you want to enable
  # live previewing of new components as they are added. 
  # This component expects a property "content_blocks"
  # to be passed that is an array of bookshop components.
{% endcomment %}
{% for block in include.content_blocks %}
  {% comment %} 
      # The bind parameter here passes the inner fields of block to the component.
      # Imagine it like the ...spread operator in JavaScript.
  {% endcomment %}
  {% bookshop {{block._bookshop_name}} bind=block %}
{% endfor %}
`,oa=la,k={};k["components/banner/banner.jekyll.html"]=fr,k["components/blur_header/blur_header.jekyll.html"]=mr,k["components/board_profile/board_profile.jekyll.html"]=br,k["components/board_profiles/board_profiles.jekyll.html"]=yr,k["components/carousel/carousel.jekyll.html"]=wr,k["components/carousel_item/carousel_item.jekyll.html"]=Er,k["components/collaborator_group/collaborator_group.jekyll.html"]=Ar,k["components/collaborators/collaborators.jekyll.html"]=Sr,k["components/content/content.jekyll.html"]=Cr,k["components/content_highlight/content_highlight.jekyll.html"]=$r,k["components/content_highlights/content_highlights.jekyll.html"]=Lr,k["components/divider/divider.jekyll.html"]=Br,k["components/facebook_posts_highlights/facebook_posts_highlights.jekyll.html"]=Pr,k["components/flyer_header/flyer_header.jekyll.html"]=Rr,k["components/form/form.jekyll.html"]=Mr,k["components/logos/logos.jekyll.html"]=Hr,k["components/photo_grid/photo_grid.jekyll.html"]=Jr,k["components/side_by_side_header/side_by_side_header.jekyll.html"]=Wr,k["components/simple_header/simple_header.jekyll.html"]=Qr,k["components/split_form_content/split_form_content.jekyll.html"]=Xr,k["components/split_image_content/split_image_content.jekyll.html"]=ea,k["components/tag/tag.jekyll.html"]=na,k["components/tile/tile.jekyll.html"]=sa,k["components/tiles/tiles.jekyll.html"]=aa,k["shared/jekyll/page.jekyll.html"]=oa;var ua=k,Dt=[],ca=[];Dt.push(new hr({plugins:[],files:ua,plugins:ca}));var da=Dt;window.BookshopLive=Kt(da)})();/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
