(()=>{var Ct=Object.create,he=Object.defineProperty,Ot=Object.getOwnPropertyDescriptor,$t=Object.getOwnPropertyNames,qt=Object.getPrototypeOf,Lt=Object.prototype.hasOwnProperty,Bt=e=>he(e,"__esModule",{value:!0}),$=(e,t)=>function(){return t||(0,e[Object.keys(e)[0]])((t={exports:{}}).exports,t),t.exports},Nt=(e,t,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of $t(t))!Lt.call(e,n)&&n!=="default"&&he(e,n,{get:()=>t[n],enumerable:!(i=Ot(t,n))||i.enumerable});return e},qe=e=>Nt(Bt(he(e!=null?Ct(qt(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),Pt=$({"node_modules/slugify/slugify.js"(e,t){(function(i,n,s){typeof e=="object"?(t.exports=s(),t.exports.default=s()):typeof define=="function"&&define.amd?define(s):n[i]=s()})("slugify",e,function(){var i=JSON.parse(`{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","\xA2":"cent","\xA3":"pound","\xA4":"currency","\xA5":"yen","\xA9":"(c)","\xAA":"a","\xAE":"(r)","\xBA":"o","\xC0":"A","\xC1":"A","\xC2":"A","\xC3":"A","\xC4":"A","\xC5":"A","\xC6":"AE","\xC7":"C","\xC8":"E","\xC9":"E","\xCA":"E","\xCB":"E","\xCC":"I","\xCD":"I","\xCE":"I","\xCF":"I","\xD0":"D","\xD1":"N","\xD2":"O","\xD3":"O","\xD4":"O","\xD5":"O","\xD6":"O","\xD8":"O","\xD9":"U","\xDA":"U","\xDB":"U","\xDC":"U","\xDD":"Y","\xDE":"TH","\xDF":"ss","\xE0":"a","\xE1":"a","\xE2":"a","\xE3":"a","\xE4":"a","\xE5":"a","\xE6":"ae","\xE7":"c","\xE8":"e","\xE9":"e","\xEA":"e","\xEB":"e","\xEC":"i","\xED":"i","\xEE":"i","\xEF":"i","\xF0":"d","\xF1":"n","\xF2":"o","\xF3":"o","\xF4":"o","\xF5":"o","\xF6":"o","\xF8":"o","\xF9":"u","\xFA":"u","\xFB":"u","\xFC":"u","\xFD":"y","\xFE":"th","\xFF":"y","\u0100":"A","\u0101":"a","\u0102":"A","\u0103":"a","\u0104":"A","\u0105":"a","\u0106":"C","\u0107":"c","\u010C":"C","\u010D":"c","\u010E":"D","\u010F":"d","\u0110":"DJ","\u0111":"dj","\u0112":"E","\u0113":"e","\u0116":"E","\u0117":"e","\u0118":"e","\u0119":"e","\u011A":"E","\u011B":"e","\u011E":"G","\u011F":"g","\u0122":"G","\u0123":"g","\u0128":"I","\u0129":"i","\u012A":"i","\u012B":"i","\u012E":"I","\u012F":"i","\u0130":"I","\u0131":"i","\u0136":"k","\u0137":"k","\u013B":"L","\u013C":"l","\u013D":"L","\u013E":"l","\u0141":"L","\u0142":"l","\u0143":"N","\u0144":"n","\u0145":"N","\u0146":"n","\u0147":"N","\u0148":"n","\u014C":"O","\u014D":"o","\u0150":"O","\u0151":"o","\u0152":"OE","\u0153":"oe","\u0154":"R","\u0155":"r","\u0158":"R","\u0159":"r","\u015A":"S","\u015B":"s","\u015E":"S","\u015F":"s","\u0160":"S","\u0161":"s","\u0162":"T","\u0163":"t","\u0164":"T","\u0165":"t","\u0168":"U","\u0169":"u","\u016A":"u","\u016B":"u","\u016E":"U","\u016F":"u","\u0170":"U","\u0171":"u","\u0172":"U","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017A":"z","\u017B":"Z","\u017C":"z","\u017D":"Z","\u017E":"z","\u018F":"E","\u0192":"f","\u01A0":"O","\u01A1":"o","\u01AF":"U","\u01B0":"u","\u01C8":"LJ","\u01C9":"lj","\u01CB":"NJ","\u01CC":"nj","\u0218":"S","\u0219":"s","\u021A":"T","\u021B":"t","\u0259":"e","\u02DA":"o","\u0386":"A","\u0388":"E","\u0389":"H","\u038A":"I","\u038C":"O","\u038E":"Y","\u038F":"W","\u0390":"i","\u0391":"A","\u0392":"B","\u0393":"G","\u0394":"D","\u0395":"E","\u0396":"Z","\u0397":"H","\u0398":"8","\u0399":"I","\u039A":"K","\u039B":"L","\u039C":"M","\u039D":"N","\u039E":"3","\u039F":"O","\u03A0":"P","\u03A1":"R","\u03A3":"S","\u03A4":"T","\u03A5":"Y","\u03A6":"F","\u03A7":"X","\u03A8":"PS","\u03A9":"W","\u03AA":"I","\u03AB":"Y","\u03AC":"a","\u03AD":"e","\u03AE":"h","\u03AF":"i","\u03B0":"y","\u03B1":"a","\u03B2":"b","\u03B3":"g","\u03B4":"d","\u03B5":"e","\u03B6":"z","\u03B7":"h","\u03B8":"8","\u03B9":"i","\u03BA":"k","\u03BB":"l","\u03BC":"m","\u03BD":"n","\u03BE":"3","\u03BF":"o","\u03C0":"p","\u03C1":"r","\u03C2":"s","\u03C3":"s","\u03C4":"t","\u03C5":"y","\u03C6":"f","\u03C7":"x","\u03C8":"ps","\u03C9":"w","\u03CA":"i","\u03CB":"y","\u03CC":"o","\u03CD":"y","\u03CE":"w","\u0401":"Yo","\u0402":"DJ","\u0404":"Ye","\u0406":"I","\u0407":"Yi","\u0408":"J","\u0409":"LJ","\u040A":"NJ","\u040B":"C","\u040F":"DZ","\u0410":"A","\u0411":"B","\u0412":"V","\u0413":"G","\u0414":"D","\u0415":"E","\u0416":"Zh","\u0417":"Z","\u0418":"I","\u0419":"J","\u041A":"K","\u041B":"L","\u041C":"M","\u041D":"N","\u041E":"O","\u041F":"P","\u0420":"R","\u0421":"S","\u0422":"T","\u0423":"U","\u0424":"F","\u0425":"H","\u0426":"C","\u0427":"Ch","\u0428":"Sh","\u0429":"Sh","\u042A":"U","\u042B":"Y","\u042C":"","\u042D":"E","\u042E":"Yu","\u042F":"Ya","\u0430":"a","\u0431":"b","\u0432":"v","\u0433":"g","\u0434":"d","\u0435":"e","\u0436":"zh","\u0437":"z","\u0438":"i","\u0439":"j","\u043A":"k","\u043B":"l","\u043C":"m","\u043D":"n","\u043E":"o","\u043F":"p","\u0440":"r","\u0441":"s","\u0442":"t","\u0443":"u","\u0444":"f","\u0445":"h","\u0446":"c","\u0447":"ch","\u0448":"sh","\u0449":"sh","\u044A":"u","\u044B":"y","\u044C":"","\u044D":"e","\u044E":"yu","\u044F":"ya","\u0451":"yo","\u0452":"dj","\u0454":"ye","\u0456":"i","\u0457":"yi","\u0458":"j","\u0459":"lj","\u045A":"nj","\u045B":"c","\u045D":"u","\u045F":"dz","\u0490":"G","\u0491":"g","\u0492":"GH","\u0493":"gh","\u049A":"KH","\u049B":"kh","\u04A2":"NG","\u04A3":"ng","\u04AE":"UE","\u04AF":"ue","\u04B0":"U","\u04B1":"u","\u04BA":"H","\u04BB":"h","\u04D8":"AE","\u04D9":"ae","\u04E8":"OE","\u04E9":"oe","\u0531":"A","\u0532":"B","\u0533":"G","\u0534":"D","\u0535":"E","\u0536":"Z","\u0537":"E'","\u0538":"Y'","\u0539":"T'","\u053A":"JH","\u053B":"I","\u053C":"L","\u053D":"X","\u053E":"C'","\u053F":"K","\u0540":"H","\u0541":"D'","\u0542":"GH","\u0543":"TW","\u0544":"M","\u0545":"Y","\u0546":"N","\u0547":"SH","\u0549":"CH","\u054A":"P","\u054B":"J","\u054C":"R'","\u054D":"S","\u054E":"V","\u054F":"T","\u0550":"R","\u0551":"C","\u0553":"P'","\u0554":"Q'","\u0555":"O''","\u0556":"F","\u0587":"EV","\u0621":"a","\u0622":"aa","\u0623":"a","\u0624":"u","\u0625":"i","\u0626":"e","\u0627":"a","\u0628":"b","\u0629":"h","\u062A":"t","\u062B":"th","\u062C":"j","\u062D":"h","\u062E":"kh","\u062F":"d","\u0630":"th","\u0631":"r","\u0632":"z","\u0633":"s","\u0634":"sh","\u0635":"s","\u0636":"dh","\u0637":"t","\u0638":"z","\u0639":"a","\u063A":"gh","\u0641":"f","\u0642":"q","\u0643":"k","\u0644":"l","\u0645":"m","\u0646":"n","\u0647":"h","\u0648":"w","\u0649":"a","\u064A":"y","\u064B":"an","\u064C":"on","\u064D":"en","\u064E":"a","\u064F":"u","\u0650":"e","\u0652":"","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u067E":"p","\u0686":"ch","\u0698":"zh","\u06A9":"k","\u06AF":"g","\u06CC":"y","\u06F0":"0","\u06F1":"1","\u06F2":"2","\u06F3":"3","\u06F4":"4","\u06F5":"5","\u06F6":"6","\u06F7":"7","\u06F8":"8","\u06F9":"9","\u0E3F":"baht","\u10D0":"a","\u10D1":"b","\u10D2":"g","\u10D3":"d","\u10D4":"e","\u10D5":"v","\u10D6":"z","\u10D7":"t","\u10D8":"i","\u10D9":"k","\u10DA":"l","\u10DB":"m","\u10DC":"n","\u10DD":"o","\u10DE":"p","\u10DF":"zh","\u10E0":"r","\u10E1":"s","\u10E2":"t","\u10E3":"u","\u10E4":"f","\u10E5":"k","\u10E6":"gh","\u10E7":"q","\u10E8":"sh","\u10E9":"ch","\u10EA":"ts","\u10EB":"dz","\u10EC":"ts","\u10ED":"ch","\u10EE":"kh","\u10EF":"j","\u10F0":"h","\u1E62":"S","\u1E63":"s","\u1E80":"W","\u1E81":"w","\u1E82":"W","\u1E83":"w","\u1E84":"W","\u1E85":"w","\u1E9E":"SS","\u1EA0":"A","\u1EA1":"a","\u1EA2":"A","\u1EA3":"a","\u1EA4":"A","\u1EA5":"a","\u1EA6":"A","\u1EA7":"a","\u1EA8":"A","\u1EA9":"a","\u1EAA":"A","\u1EAB":"a","\u1EAC":"A","\u1EAD":"a","\u1EAE":"A","\u1EAF":"a","\u1EB0":"A","\u1EB1":"a","\u1EB2":"A","\u1EB3":"a","\u1EB4":"A","\u1EB5":"a","\u1EB6":"A","\u1EB7":"a","\u1EB8":"E","\u1EB9":"e","\u1EBA":"E","\u1EBB":"e","\u1EBC":"E","\u1EBD":"e","\u1EBE":"E","\u1EBF":"e","\u1EC0":"E","\u1EC1":"e","\u1EC2":"E","\u1EC3":"e","\u1EC4":"E","\u1EC5":"e","\u1EC6":"E","\u1EC7":"e","\u1EC8":"I","\u1EC9":"i","\u1ECA":"I","\u1ECB":"i","\u1ECC":"O","\u1ECD":"o","\u1ECE":"O","\u1ECF":"o","\u1ED0":"O","\u1ED1":"o","\u1ED2":"O","\u1ED3":"o","\u1ED4":"O","\u1ED5":"o","\u1ED6":"O","\u1ED7":"o","\u1ED8":"O","\u1ED9":"o","\u1EDA":"O","\u1EDB":"o","\u1EDC":"O","\u1EDD":"o","\u1EDE":"O","\u1EDF":"o","\u1EE0":"O","\u1EE1":"o","\u1EE2":"O","\u1EE3":"o","\u1EE4":"U","\u1EE5":"u","\u1EE6":"U","\u1EE7":"u","\u1EE8":"U","\u1EE9":"u","\u1EEA":"U","\u1EEB":"u","\u1EEC":"U","\u1EED":"u","\u1EEE":"U","\u1EEF":"u","\u1EF0":"U","\u1EF1":"u","\u1EF2":"Y","\u1EF3":"y","\u1EF4":"Y","\u1EF5":"y","\u1EF6":"Y","\u1EF7":"y","\u1EF8":"Y","\u1EF9":"y","\u2013":"-","\u2018":"'","\u2019":"'","\u201C":"\\"","\u201D":"\\"","\u201E":"\\"","\u2020":"+","\u2022":"*","\u2026":"...","\u20A0":"ecu","\u20A2":"cruzeiro","\u20A3":"french franc","\u20A4":"lira","\u20A5":"mill","\u20A6":"naira","\u20A7":"peseta","\u20A8":"rupee","\u20A9":"won","\u20AA":"new shequel","\u20AB":"dong","\u20AC":"euro","\u20AD":"kip","\u20AE":"tugrik","\u20AF":"drachma","\u20B0":"penny","\u20B1":"peso","\u20B2":"guarani","\u20B3":"austral","\u20B4":"hryvnia","\u20B5":"cedi","\u20B8":"kazakhstani tenge","\u20B9":"indian rupee","\u20BA":"turkish lira","\u20BD":"russian ruble","\u20BF":"bitcoin","\u2120":"sm","\u2122":"tm","\u2202":"d","\u2206":"delta","\u2211":"sum","\u221E":"infinity","\u2665":"love","\u5143":"yuan","\u5186":"yen","\uFDFC":"rial","\uFEF5":"laa","\uFEF7":"laa","\uFEF9":"lai","\uFEFB":"la"}`),n=JSON.parse('{"bg":{"\u0419":"Y","\u0426":"Ts","\u0429":"Sht","\u042A":"A","\u042C":"Y","\u0439":"y","\u0446":"ts","\u0449":"sht","\u044A":"a","\u044C":"y"},"de":{"\xC4":"AE","\xE4":"ae","\xD6":"OE","\xF6":"oe","\xDC":"UE","\xFC":"ue","\xDF":"ss","%":"prozent","&":"und","|":"oder","\u2211":"summe","\u221E":"unendlich","\u2665":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","\xA2":"centavos","\xA3":"libras","\xA4":"moneda","\u20A3":"francos","\u2211":"suma","\u221E":"infinito","\u2665":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","\xA2":"centime","\xA3":"livre","\xA4":"devise","\u20A3":"franc","\u2211":"somme","\u221E":"infini","\u2665":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","\xA2":"centavo","\u2211":"soma","\xA3":"libra","\u221E":"infinito","\u2665":"amor"},"uk":{"\u0418":"Y","\u0438":"y","\u0419":"Y","\u0439":"y","\u0426":"Ts","\u0446":"ts","\u0425":"Kh","\u0445":"kh","\u0429":"Shch","\u0449":"shch","\u0413":"H","\u0433":"h"},"vi":{"\u0110":"D","\u0111":"d"},"da":{"\xD8":"OE","\xF8":"oe","\xC5":"AA","\xE5":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"st\xF8rre end"},"nb":{"&":"og","\xC5":"AA","\xC6":"AE","\xD8":"OE","\xE5":"aa","\xE6":"ae","\xF8":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","\xC5":"AA","\xC4":"AE","\xD6":"OE","\xE5":"aa","\xE4":"ae","\xF6":"oe"}}');function s(a,r){if(typeof a!="string")throw new Error("slugify: string argument expected");r=typeof r=="string"?{replacement:r}:r||{};var l=n[r.locale]||{},u=r.replacement===void 0?"-":r.replacement,d=r.trim===void 0?!0:r.trim,o=a.normalize().split("").reduce(function(p,m){var c=l[m];return c===void 0&&(c=i[m]),c===void 0&&(c=m),c===u&&(c=" "),p+c.replace(r.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")},"");return r.strict&&(o=o.replace(/[^A-Za-z0-9\s]/g,"")),d&&(o=o.trim()),o=o.replace(/\s+/g,u),r.lower&&(o=o.toLowerCase()),o}return s.extend=function(a){Object.assign(i,a)},s})}}),J=$({"node_modules/kramed/lib/utils.js"(e,t){function i(l,u){return l.replace(u?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function n(l){return l.replace(/&([#\w]+);/g,function(u,d){return d=d.toLowerCase(),d==="colon"?":":d.charAt(0)==="#"?d.charAt(1)==="x"?String.fromCharCode(parseInt(d.substring(2),16)):String.fromCharCode(+d.substring(1)):""})}function s(l,u){return l=l.source,u=u||"",function d(o,p){return o?(p=p.source||p,p=p.replace(/(^|[^\[])\^/g,"$1"),l=l.replace(o,p),d):new RegExp(l,u)}}function a(){}a.exec=a;function r(l){for(var u=1,d,o;u<arguments.length;u++){d=arguments[u];for(o in d)Object.prototype.hasOwnProperty.call(d,o)&&(l[o]=d[o])}return l}t.exports={escape:i,unescape:n,replace:s,noop:a,merge:r}}}),Rt=$({"node_modules/kramed/lib/rules/block.js"(e,t){var i=J(),n=i.replace,s=i.merge,a=i.noop,r={newline:/^\n+/,code:/^((?: {4}|\t)[^\n]+\n*)+/,fences:a,yamlHeader:a,hr:/^( *[-*_]){3,} *(?:\n|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n|$)/,nptable:a,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n|$)/,footnote:/^\[\^([^\]]+)\]: ([^\n]+)/,table:a,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def|math))+)\n*/,text:/^[^\n]+/,math:/^ *(\${2,}) *([\s\S]+?)\s*\1 *(?:\n|$)/};r._bullet=/(?:[*+-]|\d+\.)/,r._item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,r._item=n(r._item,"gm")(/bull/g,r._bullet)(),r.list=n(r.list)(/bull/g,r._bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+r.def.source+")")("footnote",r.footnote)(),r.blockquote=n(r.blockquote)("def",r.def)(),r._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:\\/|[^\\w\\s@]*@)\\b",r.html=n(r.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,r._tag)(),r.paragraph=n(r.paragraph)("hr",r.hr)("heading",r.heading)("lheading",r.lheading)("blockquote",r.blockquote)("tag","<"+r._tag)("def",r.def)("math",r.math)(),r.normal=s({},r),r.gfm=s({},r.normal,{fences:/^ *(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n|$)/,paragraph:/^/,yamlHeader:/^ *(?=```)/}),r.gfm.paragraph=n(r.paragraph)("(?!","(?!"+r.gfm.fences.source.replace("\\1","\\2")+"|"+r.list.source.replace("\\1","\\3")+"|")(),r.tables=s({},r.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/}),t.exports=r}}),Le=$({"node_modules/kramed/lib/lex/options.js"(e,t){t.exports={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!1,mathjax:!0}}}),It=$({"node_modules/kramed/lib/lex/block.js"(e,t){var i=J(),n=i.noop,s=Rt(),a=Le();function r(l){this.tokens=[],this.tokens.links={},this.options=l||a,this.rules=s.normal,this.options.gfm&&(this.options.tables?this.rules=s.tables:this.rules=s.gfm),this.options.mathjax||(this.rules.math=n)}r.rules=s,r.lex=function(l,u){var d=new r(u);return d.lex(l)},r.prototype.lex=function(l){return l=l.replace(/\r\n|\r/g,`
`).replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,`
`),this.token(l,!0)},r.prototype.token=function(o,u,d){for(var o=o.replace(/^ +$/gm,""),p,m,c,y,h,g,v,f,b;o;){if((c=this.rules.newline.exec(o))&&(o=o.substring(c[0].length),c[0].length>1&&this.tokens.push({type:"space"})),c=this.rules.code.exec(o)){o=o.substring(c[0].length),c=c[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?c:c.replace(/\n+$/,"")});continue}if(c=this.rules.fences.exec(o)){o=o.substring(c[0].length),this.tokens.push({type:"code",lang:c[2],text:c[3]});continue}if(c=this.rules.footnote.exec(o)){o=o.substring(c[0].length),this.tokens.push({type:"footnote",refname:c[1],text:c[2]});continue}if(c=this.rules.math.exec(o)){o=o.substring(c[0].length),this.tokens.push({type:"math",text:c[2]});continue}if(c=this.rules.heading.exec(o)){o=o.substring(c[0].length),this.tokens.push({type:"heading",depth:c[1].length,text:c[2]});continue}if(u&&(c=this.rules.nptable.exec(o))){for(o=o.substring(c[0].length),g={type:"table",header:c[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:c[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:c[3].replace(/\n$/,"").split(`
`)},f=0;f<g.align.length;f++)/^ *-+: *$/.test(g.align[f])?g.align[f]="right":/^ *:-+: *$/.test(g.align[f])?g.align[f]="center":/^ *:-+ *$/.test(g.align[f])?g.align[f]="left":g.align[f]=null;for(f=0;f<g.cells.length;f++)g.cells[f]=g.cells[f].split(/ *\| */);this.tokens.push(g);continue}if(c=this.rules.lheading.exec(o)){o=o.substring(c[0].length),this.tokens.push({type:"heading",depth:c[2]==="="?1:2,text:c[1]});continue}if(c=this.rules.hr.exec(o)){o=o.substring(c[0].length),this.tokens.push({type:"hr"});continue}if(c=this.rules.blockquote.exec(o)){o=o.substring(c[0].length),this.tokens.push({type:"blockquote_start"}),c=c[0].replace(/^ *> ?/gm,""),this.token(c,u,!0),this.tokens.push({type:"blockquote_end"});continue}if(c=this.rules.list.exec(o)){for(o=o.substring(c[0].length),y=c[2],this.tokens.push({type:"list_start",ordered:y.length>1}),c=c[0].match(this.rules._item),p=!1,b=c.length,f=0;f<b;f++)g=c[f],v=g.length,g=g.replace(/^ *([*+-]|\d+\.) +/,""),~g.indexOf(`
 `)&&(v-=g.length,g=this.options.pedantic?g.replace(/^ {1,4}/gm,""):g.replace(new RegExp("^ {1,"+v+"}","gm"),"")),this.options.smartLists&&f!==b-1&&(h=s._bullet.exec(c[f+1])[0],y!==h&&!(y.length>1&&h.length>1)&&(o=c.slice(f+1).join(`
`)+o,f=b-1)),m=p||/\n\n(?!\s*$)/.test(g),f!==b-1&&(p=g.charAt(g.length-1)===`
`,m||(m=p)),this.tokens.push({type:m?"loose_item_start":"list_item_start"}),this.token(g,!1,d),this.tokens.push({type:"list_item_end"});this.tokens.push({type:"list_end"});continue}if(c=this.rules.html.exec(o)){o=o.substring(c[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:c[1]==="pre"||c[1]==="script"||c[1]==="style",text:c[0]});continue}if(!d&&u&&(c=this.rules.def.exec(o))){o=o.substring(c[0].length),this.tokens.links[c[1].toLowerCase()]={href:c[2],title:c[3]};continue}if(u&&(c=this.rules.table.exec(o))){for(o=o.substring(c[0].length),g={type:"table",header:c[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:c[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:c[3].replace(/(?: *\| *)?\n$/,"").split(`
`).slice(0)},f=0;f<g.align.length;f++)/^ *-+: *$/.test(g.align[f])?g.align[f]="right":/^ *:-+: *$/.test(g.align[f])?g.align[f]="center":/^ *:-+ *$/.test(g.align[f])?g.align[f]="left":g.align[f]=null;for(f=0;f<g.cells.length;f++)g.cells[f]=g.cells[f].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);this.tokens.push(g);continue}if(u&&(c=this.rules.paragraph.exec(o))){o=o.substring(c[0].length),this.tokens.push({type:"paragraph",text:c[1].charAt(c[1].length-1)===`
`?c[1].slice(0,-1):c[1]});continue}if(c=this.rules.text.exec(o)){o=o.substring(c[0].length),this.tokens.push({type:"text",text:c[0]});continue}if(o)throw new Error("Infinite loop on byte: "+o.charCodeAt(0))}return this.tokens},t.exports=r}}),jt=$({"node_modules/kramed/lib/rules/inline.js"(e,t){var i=J(),n=i.replace,s=i.merge,a=i.noop,r={escape:/^\\([\\`*{}\[\]()#$+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:a,html:/^<!--[\s\S]*?-->|^<(\w+(?!:\/|[^\w\s@]*@)\b)*?(?:"[^"]*"|'[^']*'|[^'">])*?>([\s\S]*?)?<\/\1>|^<(\w+(?!:\/|[^\w\s@]*@)\b)(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,reffn:/^!?\[\^(inside)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:a,text:/^[\s\S]+?(?=[\\<!\[_*`$]| {2,}\n|$)/,math:/^\$\$\s*([\s\S]*?[^\$])\s*\$\$(?!\$)/};r._inside=/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/,r._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,r.link=n(r.link)("inside",r._inside)("href",r._href)(),r.reflink=n(r.reflink)("inside",r._inside)(),r.reffn=n(r.reffn)("inside",r._inside)(),r.normal=s({},r),r.pedantic=s({},r.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),r.gfm=s({},r.normal,{escape:n(r.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:n(r.text)("]|","~]|")("|","|https?://|")()}),r.gitbook=s({},r.gfm,{tplvar:/^{{\s*(.*?)\s*(?=}})}}/,tplexpr:/^{%\s*(.*?)\s*(?=%})%}/}),r.gitbook.text=n(r.gfm.text)("~]|","~]|"+r.gitbook.tplvar.source+"|"+r.gitbook.tplexpr.source+"|")(),r.breaks=s({},r.gfm,{br:n(r.br)("{2,}","*")(),text:n(r.gfm.text)("{2,}","*")()}),t.exports=r}}),pe=$({"node_modules/kramed/lib/renderer.js"(e,t){var i=J(),n=i.escape,s=i.unescape,a={langPrefix:"lang-",smartypants:!1,headerPrefix:"",headerAutoId:!0,xhtml:!1};function r(l){this.options=l||a}r.prototype.code=function(l,u,d){if(this.options.highlight){var o=this.options.highlight(l,u);o!=null&&o!==l&&(d=!0,l=o)}return u?'<pre><code class="'+this.options.langPrefix+n(u,!0)+'">'+(d?l:n(l,!0))+`
</code></pre>
`:"<pre><code>"+(d?l:n(l,!0))+`
</code></pre>`},r.prototype.blockquote=function(l){return`<blockquote>
`+l+`</blockquote>
`},r.prototype.html=function(l){return l},r.prototype._createId=function(l){l=l.toLowerCase().replace(/[\s\]\[\!\"\#\$\%\&\'\(\)\*\+\,\.\/\:\;\<\=\>\?\@\\\^\_\`\{\|\}\~\-]+/g,"-");try{l=encodeURIComponent(l)}catch{l=l.replace(/[^\w]+/g,"-")}return l.replace(/-$/,"")},r.prototype.heading=function(l,u,d){var o=/({#)(.+)(})/g.exec(d);return o=o?o[2]:null,!o&&this.options.headerAutoId!==!1&&(o=this._createId(d)),"<h"+u+(o?' id="'+o+'"':"")+">"+l.replace(/{#.+}/g,"")+"</h"+u+`>
`},r.prototype.hr=function(){return this.options.xhtml?`<hr/>
`:`<hr>
`},r.prototype.list=function(l,u){var d=u?"ol":"ul";return"<"+d+`>
`+l+"</"+d+`>
`},r.prototype.listitem=function(l){return"<li>"+l+`</li>
`},r.prototype.paragraph=function(l){return"<p>"+l+`</p>
`},r.prototype.table=function(l,u){return`<table>
<thead>
`+l+`</thead>
<tbody>
`+u+`</tbody>
</table>
`},r.prototype.tablerow=function(l){return`<tr>
`+l+`</tr>
`},r.prototype.tablecell=function(l,u){var d=u.header?"th":"td",o=u.align?"<"+d+' style="text-align:'+u.align+'">':"<"+d+">";return o+l+"</"+d+`>
`},r.prototype.math=function(l,u,d){return mode=d?"; mode=display":"",'<script type="'+u+mode+'">'+l+"<\/script>"},r.prototype.strong=function(l){return"<strong>"+l+"</strong>"},r.prototype.em=function(l){return"<em>"+l+"</em>"},r.prototype.codespan=function(l){return"<code>"+l+"</code>"},r.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},r.prototype.del=function(l){return"<del>"+l+"</del>"},r.prototype.reffn=function(l){return'<sup><a href="#fn_'+l+'" id="reffn_'+l+'">'+l+"</a></sup>"},r.prototype.footnote=function(l,u){return'<blockquote id="fn_'+l+`">
<sup>`+l+"</sup>. "+u+'<a href="#reffn_'+l+'" title="Jump back to footnote ['+l+`] in the text."> &#8617;</a>
</blockquote>
`},r.prototype.link=function(l,u,d){if(this.options.sanitize){try{var o=decodeURIComponent(s(l)).replace(/[^\w:]/g,"").toLowerCase()}catch{return""}if(o.indexOf("javascript:")===0)return""}var p='<a href="'+l+'"';return u&&(p+=' title="'+u+'"'),p+=">"+d+"</a>",p},r.prototype.image=function(l,u,d){var o='<img src="'+l+'" alt="'+d+'"';return u&&(o+=' title="'+u+'"'),o+=this.options.xhtml?"/>":">",o},t.exports=r}}),zt=$({"node_modules/kramed/lib/lex/html_blocks.js"(e,t){"use strict";var i=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","meta","nav","noframes","ol","optgroup","option","p","param","pre","script","section","source","title","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],n=i.reduce(function(a,r){return a[r]=!0,a},{});function s(a){if(!a)return!1;var r=a.toLowerCase();return Boolean(n[r])}t.exports=s}}),Be=$({"node_modules/kramed/lib/lex/inline.js"(e,t){var i=J(),n=i.escape,s=i.noop,a=jt(),r=pe(),l=Le(),u=zt();function d(o,p,m){if(this.options=p||l,this.links=o,this.rules=a.normal,this.renderer=m,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.gfm?this.options.breaks?this.rules=a.breaks:this.rules=a.gfm:this.options.pedantic&&(this.rules=a.pedantic),this.options.mathjax||(this.rules.math=s)}d.rules=a,d.output=function(o,p,m){var c=new d(p,m,new r);return c.output(o)},d.prototype.escape=function(o,p){return this.options&&this.options.escape===!1?o:n(o,p)},d.prototype.output=function(o){for(var p="",m,c,y,h;o;){if(h=this.rules.escape.exec(o)){o=o.substring(h[0].length),p+=h[1];continue}if(h=this.rules.autolink.exec(o)){o=o.substring(h[0].length),h[2]==="@"?(c=h[1].charAt(6)===":"?this.mangle(h[1].substring(7)):this.mangle(h[1]),y=this.mangle("mailto:")+c):(c=this.escape(h[1]),y=c),p+=this.renderer.link(y,null,c);continue}if(!this.inLink&&(h=this.rules.url.exec(o))){o=o.substring(h[0].length),c=this.escape(h[1]),y=c,p+=this.renderer.link(y,null,c);continue}if(h=this.rules.html.exec(o)){if(h[1]==="a"&&h[2]&&!this.inLink){p+=h[0].substring(0,h[0].indexOf(h[2])),this.inLink=!0,p+=this.output(h[2]),this.inLink=!1,p+=h[0].substring(h[0].indexOf(h[2])+h[2].length),o=o.substring(h[0].length);continue}if(h[1]&&!u(h[1])&&h[2]){p+=h[0].substring(0,h[0].indexOf(h[2])),p+=this.output(h[2]),p+=h[0].substring(h[0].indexOf(h[2])+h[2].length),o=o.substring(h[0].length);continue}o=o.substring(h[0].length),p+=h[0];continue}if(h=this.rules.link.exec(o)){o=o.substring(h[0].length),this.inLink=!0,p+=this.outputLink(h,{href:h[2],title:h[3]}),this.inLink=!1;continue}if(h=this.rules.reffn.exec(o)){o=o.substring(h[0].length),p+=this.renderer.reffn(h[1]);continue}if((h=this.rules.reflink.exec(o))||(h=this.rules.nolink.exec(o))){if(o=o.substring(h[0].length),m=(h[2]||h[1]).replace(/\s+/g," "),m=this.links[m.toLowerCase()],!m||!m.href){p+=h[0].charAt(0),o=h[0].substring(1)+o;continue}this.inLink=!0,p+=this.outputLink(h,m),this.inLink=!1;continue}if(h=this.rules.strong.exec(o)){o=o.substring(h[0].length),p+=this.renderer.strong(this.output(h[2]||h[1]));continue}if(h=this.rules.em.exec(o)){o=o.substring(h[0].length),p+=this.renderer.em(this.output(h[2]||h[1]));continue}if(h=this.rules.code.exec(o)){o=o.substring(h[0].length),p+=this.renderer.codespan(this.escape(h[2],!0));continue}if(h=this.rules.math.exec(o)){o=o.substring(h[0].length),p+=this.renderer.math(h[1],"math/tex",!1);continue}if(h=this.rules.br.exec(o)){o=o.substring(h[0].length),p+=this.renderer.br();continue}if(h=this.rules.del.exec(o)){o=o.substring(h[0].length),p+=this.renderer.del(this.output(h[1]));continue}if(h=this.rules.text.exec(o)){o=o.substring(h[0].length),p+=this.escape(this.smartypants(h[0]));continue}if(o)throw new Error("Infinite loop on byte: "+o.charCodeAt(0))}return p},d.prototype.outputLink=function(o,p){var m=this.escape(p.href),c=p.title?this.escape(p.title):null;return o[0].charAt(0)!=="!"?this.renderer.link(m,c,this.output(o[1])):this.renderer.image(m,c,this.escape(o[1]))},d.prototype.smartypants=function(o){return this.options.smartypants?o.replace(/--/g,"\u2014").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026"):o},d.prototype.mangle=function(o){for(var p="",m=o.length,c=0,y;c<m;c++)y=o.charCodeAt(c),Math.random()>.5&&(y="x"+y.toString(16)),p+="&#"+y+";";return p},t.exports=d}}),Ut=$({"node_modules/kramed/lib/parser.js"(e,t){var i=pe(),n=Be();function s(a,r){this.tokens=[],this.token=null,this.options=a||null,this.renderer=r||this.options&&this.options.renderer||new i(this.options)}s.parse=function(a,r,l){var u=new s(r,l);return u.parse(a)},s.prototype.parse=function(a){this.inline=new n(a.links,this.options,this.renderer),this.tokens=a.reverse();for(var r="";this.next();)r+=this.tok();return r},s.prototype.next=function(){return this.token=this.tokens.pop()},s.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},s.prototype.parseText=function(){for(var a=this.token.text;this.peek().type==="text";)a+=`
`+this.next().text;return this.inline.output(a)},s.prototype.tok=function(){if(typeof this.token>"u"||!this.token.hasOwnProperty("type"))return"";switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text);case"footnote":return this.renderer.footnote(this.token.refname,this.inline.output(this.token.text));case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"math":return this.renderer.math(this.token.text,"math/tex",!0);case"table":{var a="",r="",l,u,d,o,p;for(d="",l=0;l<this.token.header.length;l++)o={header:!0,align:this.token.align[l]},d+=this.renderer.tablecell(this.inline.output(this.token.header[l]),{header:!0,align:this.token.align[l]});for(a+=this.renderer.tablerow(d),l=0;l<this.token.cells.length;l++){for(u=this.token.cells[l],d="",p=0;p<u.length;p++)d+=this.renderer.tablecell(this.inline.output(u[p]),{header:!1,align:this.token.align[p]});r+=this.renderer.tablerow(d)}return this.renderer.table(a,r)}case"blockquote_start":{for(var r="";this.next().type!=="blockquote_end";)r+=this.tok();return this.renderer.blockquote(r)}case"list_start":{for(var r="",m=this.token.ordered;this.next().type!=="list_end";)r+=this.tok();return this.renderer.list(r,m)}case"list_item_start":{for(var r="";this.next().type!=="list_item_end";)r+=this.token.type==="text"?this.parseText():this.tok();return this.renderer.listitem(r)}case"loose_item_start":{for(var r="";this.next().type!=="list_item_end";)r+=this.tok();return this.renderer.listitem(r)}case"html":return this.renderer.html(this.token.text);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}},t.exports=s}}),Mt=$({"node_modules/kramed/lib/kramed.js"(e,t){var i=J(),n=i.merge,s=It(),a=Be(),r=Ut(),l=pe();function u(d,o,p){if(p||typeof o=="function"){p||(p=o,o=null),o=n({},u.defaults,o||{});var m=o.highlight,c,y,h=0;try{c=s.lex(d,o)}catch(v){return p(v)}y=c.length;var g=function(v){if(v)return o.highlight=m,p(v);var f;try{f=r.parse(c,o)}catch(b){v=b}return o.highlight=m,v?p(v):p(null,f)};if(!m||m.length<3||(delete o.highlight,!y))return g();for(;h<c.length;h++)(function(v){return v.type!=="code"?--y||g():m(v.text,v.lang,function(f,b){if(f)return g(f);if(b==null||b===v.text)return--y||g();v.text=b,v.escaped=!0,--y||g()})})(c[h]);return}try{return o&&(o=n({},u.defaults,o)),r.parse(s.lex(d,o),o)}catch(v){if(v.message+=`
Please report this to https://github.com/GitbookIO/kramed.`,(o||u.defaults).silent)return"<p>An error occured:</p><pre>"+escape(v.message+"",!0)+"</pre>";throw v}}u.options=u.setOptions=function(d){return n(u.defaults,d),u},u.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!1,mathjax:!0,silent:!1,highlight:null,langPrefix:"lang-",smartypants:!1,headerPrefix:"",headerAutoId:!0,xhtml:!1,renderer:new l},u.Parser=r,u.parser=r.parse,u.Renderer=l,u.Lexer=s,u.lexer=s.lex,u.InlineLexer=a,u.inlineLexer=a.output,u.parse=u,t.exports=u}}),S={ASSIGN:/:|=/,DELIM:/"|'|`/,ESCAPE:/\\/,SPACE:/\s|\r|\n/,INSCOPE:/\(/,OUTSCOPE:/\)/,INDEX:/\[/,OUTDEX:/\]/},Ht=class{constructor(e){this.input=e,this.stream=e.split(""),this.state="IDENT",this.deps={},this.output=[]}build(){for(;this.stream.length;)this.process(this.stream.shift());return this.process(" "),this.output}process(e){switch(this.state){case"IDENT":return this.processIDENT(e);case"VALUE":return this.processVALUE(e)}}processIDENT(e){if(!(S.SPACE.test(e)&&!this.deps.started)){if(this.deps.identifier=this.deps.identifier||"",this.deps.started=!0,S.ASSIGN.test(e)&&!this.deps.escape){if(!this.deps.identifier)throw new Error("No identifier provided");this.state="VALUE",this.deps={identifier:this.deps.identifier};return}if(S.ESCAPE.test(e)&&!this.deps.escape)return this.deps.escape=!0;this.deps.identifier+=e,this.deps.escape=!1}}processVALUE(e){if(!(S.SPACE.test(e)&&!this.deps.started)){if(this.deps.value=this.deps.value||"",this.deps.started=!0,this.deps.escape){this.deps.value+=e,this.deps.escape=!1;return}if(S.ESCAPE.test(e)){this.deps.escape=!0;return}if(this.deps.value+=e,!this.deps.delim){if(S.DELIM.test(e))return this.deps.delim=new RegExp(e);if(S.INSCOPE.test(e))return this.deps.delim=S.OUTSCOPE;if(S.INDEX.test(e))return this.deps.delim=S.OUTDEX;if(this.deps.delim=S.SPACE,!S.SPACE.test(e))return}if(this.deps.delimDepth&&this.deps.delim.test(e))return this.deps.delimDepth-=1;if(this.deps.delim===S.SPACE&&this.deps.delim.test(e)){this.deps.value=this.deps.value.replace(/.$/,""),this.deps.value=this.deps.value.replace(/^\(\(+(.+)\)+\)$/,"($1)"),this.deps.value=this.deps.value.replace(/^\((\S+)\)$/,"$1"),this.output.push([this.deps.identifier,this.deps.value]),this.state="IDENT",this.deps={};return}if(this.deps.delim.test(e)){this.deps.delim=null;return}this.deps.delim===S.OUTSCOPE&&S.INSCOPE.test(e)&&(this.deps.delimDepth=this.deps.delimDepth||0,this.deps.delimDepth+=1)}}},N={ESCAPE:/\\/,SPACE:/\s|\r|\n/,INSCOPE:/\(/,OUTSCOPE:/\)/,END:/END/},Vt=class{constructor(e){this.input=e,this.stream=e.split(""),this.state="IDENT",this.deps={},this.output={}}build(){for(;this.stream.length;)this.process(this.stream.shift());return this.process("END"),this.output}process(e){switch(this.state){case"IDENT":return this.processIDENT(e);case"VALUE":return this.processVALUE(e)}}processIDENT(e){if(!(N.SPACE.test(e)&&!this.deps.started)){if(this.deps.identifier=this.deps.identifier||"",this.deps.started=!0,N.END.test(e)){this.deps.identifier&&(this.output[this.deps.identifier]=!0);return}if(N.INSCOPE.test(e)&&!this.deps.escape){if(!this.deps.identifier)throw new Error("No identifier provided");this.state="VALUE",this.deps={identifier:this.deps.identifier};return}if(N.ESCAPE.test(e)&&!this.deps.escape)return this.deps.escape=!0;this.deps.identifier+=e,this.deps.escape=!1}}processVALUE(e){if(!(N.SPACE.test(e)&&!this.deps.started)){if(this.deps.value=this.deps.value||"",this.deps.started=!0,this.deps.escape){this.deps.value+=e,this.deps.escape=!1;return}if(N.OUTSCOPE.test(e)&&!this.deps.delimDepth){this.output[this.deps.identifier]=this.deps.value,this.state="IDENT",this.deps={};return}if(N.ESCAPE.test(e)){this.deps.escape=!0;return}this.deps.value+=e,N.INSCOPE.test(e)&&(this.deps.delimDepth=this.deps.delimDepth||0,this.deps.delimDepth+=1),N.OUTSCOPE.test(e)&&this.deps.delimDepth&&(this.deps.delimDepth-=1)}}},Ne=e=>e.replace(/\/[\w-]+\..+$/,"").replace(/\..+$/,""),Z=e=>e?new Ht(e).build():[],Yt=e=>(e.ownerDocument??document).evaluate("//comment()[contains(.,'bookshop-live')]",e,null,XPathResult.ANY_TYPE,null),Jt=e=>new Vt(e.textContent.replace(/^bookshop-live /,"")).build(),Wt=(e,t)=>e&&(e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING)!==0,ne=null;ne="3.4.1";var R=(e,t,i,n)=>{if(typeof t!="string")return;const s=t.replace(/^include\./,"").replace(/\[(\d+)]/g,".$1").split(".");n?.log?.(`Split ${t} info ${JSON.stringify(s)}`);const a=s.shift();if(n?.log?.(`Using base identifier ${a}`),a){const r=fe(a,i);n?.log?.(`Found the existing path ${r}`);const l=r??a;n?.log?.(`Using the prefix ${l}`),i[i.length-1][e]=`${[l,...s].join(".")}`}else{const r=fe(t,i);n?.log?.(`Found the existing path ${r}`);const l=r??t;n?.log?.(`Using the path ${l}`),i[i.length-1][e]=l}n?.log?.(`Stored ${e}: ${i[i.length-1][e]}`)},fe=(e,t)=>{const[i,...n]=e?.split?.(".");if(i)for(let s=t.length-1;s>=0;s--){if(t[s][i])return n.length?`${t[s][i]}.${n.join(".")}`:`${t[s][i]}`;if(t[s]["."]&&t[s]["."]!=="."&&!/^(\$|Params)/.test(e))return`${t[s]["."]}.${e}`}for(let s=t.length-1;s>=0;s--)if(t[s][e])return`${t[s][e]}`;return null},Pe=(e,t)=>typeof t=="string"&&/^\s*['"`]/.test(t)?!1:(typeof t=="string"&&(t=t.replace(/\[(\d+)]/g,".$1").split(".")),e=e[t.shift()],e&&t.length?Pe(e,t):e),Gt=(e,t,i)=>{let n=e.nextSibling;for(;n&&n.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING;){const s=n.nextSibling;n.remove(),n=s}for(;i.childNodes.length;)t.parentNode.insertBefore(i.childNodes[0],t)},ge=async e=>{const{liveInstance:t,documentNode:i,parentPathStack:n,templateBlockHandler:s,isRetry:a,logger:r,processDeepComponents:l=!0}=e,u=[{scope:{}}],d=n||[{}];let o=[],p=[],m={};const c=()=>[t.data,...u.map(v=>v.scope)],y=()=>u[u.length-1],h=Yt(i);let g=h.iterateNext();for(;g;){r?.log?.("Parsing the comment:"),r?.log?.(g.textContent);const v=Jt(g);if(!t.storedMeta){for(const[f,b]of Z(v?.meta)){if(m[f]=b,r?.log?.(`Registered metadata ${f} as ${b}`),f==="version"&&ne){const V=await t.eval(b,c(),r?.nested?.());V!==ne&&console.error([`Your Bookshop SSG plugin is running version ${V}, but @bookshop/live is running version ${ne}.`,"Bookshop follows semantic versioning with regard to your site and components,","but this does not extend to Bookshop packages being compatible with each other across any version jump.",`
Run %cnpx @bookshop/up@latest%c in your root directory to upgrade all Bookshop dependencies.`].join(`
`),"color: #FF4C29; font-family: monospace; font-weight: bold;","color: unset; font-family: unset; font-weight: unset;")}t.storedMeta=!0}await t.storeMeta(m)}for(const[f,b]of Z(v?.context))if(u.length-1==0||l===!0){r?.log?.(`Parsing context ${f}: ${b}`),y().scope[f]=await t.eval(b,c(),r?.nested?.());const E=t.normalize(b,r?.nested?.());typeof E=="object"&&!Array.isArray(E)?Object.values(E).forEach(D=>R(f,D,d,r?.nested?.())):R(f,E,d,r?.nested?.())}else r?.log?.(`Skipping deep context of ${f}: ${b}`);for(const[f,b]of Z(v?.reassign))if(u.length-1==0||l===!0){r?.log?.(`Reassigning ${f} to ${b}`);for(let E=u.length-1;E>=0;E-=1)if(u[E].scope[f]!==void 0){u[E].scope[f]=await t.eval(b,c(),r?.nested?.());break}for(let E=d.length-1;E>=0;E-=1)if(d[E][f]!==void 0){const D=t.normalize(b,r?.nested?.());typeof D=="object"&&!Array.isArray(D)?Object.values(D).forEach(O=>R(f,O,[d[E]])):R(f,D,[d[E]]);break}}else r?.log?.(`Skipping deep reassignment of ${f} to ${b}`);if(v?.end)r?.log?.("Reached the end of a block, handing off to the handler function"),y().endNode=g,await s(u.pop(),r?.nested?.()),d.pop();else if(v.stack){r?.log?.("Stacking a new context");let f={};d.push({}),u.push({pathStack:JSON.parse(JSON.stringify(d)),scope:f})}else if(v.unstack)r?.log?.("Unstacking a context"),u.pop(),d.pop();else if(v&&v?.name==="__bookshop__subsequent")r?.log?.("Stashing parameters for the next bookshop tag"),o.push(g),p=[...p,...Z(v?.params)];else if(v?.name){const f=u.length-1;if(f==0||l===!0){r?.log?.(`Rendering a new component ${v.name}`);let b={};const V=[...p,...Z(v?.params)];d.push({});for(const[E,D]of V)if(E==="bind"){const O=await t.eval(D,c(),r?.nested?.());O&&typeof O=="object"&&(b={...b,...O},Object.keys(O).forEach(Y=>R(Y,`${D}.${Y}`,d)))}else if(E==="."){const O=await t.eval(D,c(),r?.nested?.());O&&typeof O=="object"&&!Array.isArray(O)?b={...b,...O}:b[E]=O;const Y=t.normalize(D,r?.nested?.());typeof Y=="object"&&!Array.isArray(Y)?Object.entries(Y).forEach(([ia,na])=>R(ia,na,d)):R(E,Y,d)}else b[E]=await t.eval(D,c(),r?.nested?.()),R(E,D,d);u.push({startNode:g,name:Ne(v?.name),pathStack:JSON.parse(JSON.stringify(d)),scope:b,params:V,stashedNodes:o,depth:f})}else r?.log?.(`Skipping deep render of ${v.name}`),d.push({}),u.push({startNode:g,name:Ne(v?.name),depth:f});p=[],o=[]}try{g=h.iterateNext()}catch{if(r?.log?.("Failed to iterate to the next node."),!a)return r?.log?.("Trying to start again..."),await ge(e)}}},Qt=async(e,t,i)=>{const n=document.implementation.createHTMLDocument(),s=[],a=async({startNode:r,endNode:l,name:u,scope:d,pathStack:o,depth:p,stashedNodes:m},c)=>{if(c?.log?.(`Received a template block to render for ${u}`),p){c?.log?.(`Skipping render for nested component ${u}`);return}if(!(d?.live_render??d?.liveRender??d?._live_render??d?._liveRender??!0)){c?.log?.(`Skipping render for ${u} due to false liverender flag`);return}const h=n.createElement("div");await e.renderElement(u,d,h,c?.nested?.()),c?.log?.(`Rendered ${u} block into an update`),s.push({startNode:r,endNode:l,output:h,pathStack:o,scope:d,name:u,stashedNodes:m})};return i?.log?.("Evaluating templates found in a document"),await ge({liveInstance:e,documentNode:t,templateBlockHandler:a,isRetry:!1,logger:i?.nested?.(),processDeepComponents:!1}),i?.log?.("Completed evaluating the document"),s},Re=(e,t,i,n)=>{n?.log?.(`Finding the data binding for ${e}`);const s=t.normalize(e,n?.nested?.());if(typeof s=="object"){for(const l of Object.values(s)){n?.log?.(`'twas an object \u2014 finding the data binding for ${l}'`);let u=Re(l,t,i,n?.nested?.());if(u)return u}return null}let a=fe(s,i)??s,r=Pe(t.data,a);if(n?.log?.(`Found the path ${a}, which ${r?"does resolve":"does not resolve"}`),r){let l=a.replace(/^page(\.|$)/,"");return l=l.replace(/^Params(\.|$)/,""),l}},Zt=async(e,t,i,n,s,a,r)=>{r?.log?.("Hydrating data bindings");const l=t.ownerDocument,u=[];t.prepend(n);for(let o of a.reverse())r?.log?.("Adding a stashed node to the top of our document node"),t.prepend(o);t.append(s),l.body.appendChild(t);const d=async(o,p)=>{p?.log?.(`Storing an update for ${o.name}`),u.push(o)};r?.log?.("Evaluating template..."),await ge({liveInstance:e,documentNode:t,pathStack:[{}],templateBlockHandler:d,isRetry:!1,logger:r?.nested?.()});for(let{startNode:o,endNode:p,params:m,pathStack:c,scope:y,name:h}of u){const g=e.resolveComponentType(h)==="component";if(y?.editorLink??y?.editor_link??y?._editorLink??y?._editor_link??y?.dataBinding??y?.data_binding??y?._dataBinding??y?._data_binding??g){let f=null;for(const[,b]of m)if(f=Re(b,e,c,r?.nested?.()),f)break;if(f){r?.log?.(`Found the data binding ${f} for ${h}`);let b=o.nextElementSibling;for(;b&&b.compareDocumentPosition(p)&Node.DOCUMENT_POSITION_FOLLOWING;)r?.log?.("Setting data-cms-bind on an element"),b.dataset.cmsBind=`#${f}`,b=b.nextElementSibling}else r?.log?.(`Couldn't find a data binding for ${h}`)}else r?.log?.(`${h} opted out of getting a data binding`)}n.remove(),s.remove();for(let o of a)o.remove();t.remove()},Xt=(e,t,i,n)=>{let s=[],a=[...i.childNodes],r=e.nextSibling;for(;Wt(r,t);)s.push(r),r=r.nextSibling;if(s.length!==a.length){n?.log?.("Trees are different lengths, replacing the entire region en-masse"),Gt(e,t,i);return}n?.log?.("Updating the tree...");for(let l=0;l<s.length;l++)Ie(s[l],a[l])},Ie=(e,t)=>{if(e.isEqualNode(t))return;if(!e.cloneNode(!1).isEqualNode(t.cloneNode(!1))){e.replaceWith(t);return}if(e.childNodes.length!==t.childNodes.length){e.replaceWith(t);return}const i=[...e.childNodes],n=[...t.childNodes];for(let s=0;s<i.length;s++)Ie(i[s],n[s])},je=(e=0)=>new Promise(t=>setTimeout(t,e)),Kt=e=>class{constructor(i){this.engines=e,this.elements=[],this.globalData={},this.data={},this.cloudcannonInfo={},this.renderOptions={},this.renderCount=0,this.renderedAt=0,this.shouldRenderAt=null,this.renderFrequency=1e3,this.renderTimeout=null,this.verbose=!1,this.lastLog=Date.now(),this.storedMeta=!1,this.memo={},this.logFn=this.logger(),this.loadedFn=i?.loadedFn;const n=i?.remoteGlobals?.length||0;this.awaitingDataFetches=n+1,i?.remoteGlobals?.forEach(this.fetchGlobalData.bind(this)),this.fetchInfo()}completeRender(){typeof this.loadedFn=="function"&&(this.loadedFn(),this.loadedFn=null),this.renderCount+=1}logger(i=0){return{log:n=>{(this.verbose||typeof window<"u"&&window?.bookshopLiveVerbose)&&console.log(`+${Date.now()-this.lastLog}ms : ${"|  ".repeat(i)}${n}`),this.lastLog=Date.now()},nested:()=>this.logger(i+1)}}async fetchInfo(){try{this.logFn.log("Trying to load /_cloudcannon/info.json");const i=await fetch("/_cloudcannon/info.json");this.cloudcannonInfo=await i.json(),await this.engines[0].storeInfo?.(this.cloudcannonInfo),this.awaitingDataFetches-=1,this.logFn.log("Loaded /_cloudcannon/info.json")}catch{this.awaitingDataFetches-=1,this.logFn.log("\u274C Failed to load /_cloudcannon/info.json")}}async fetchGlobalData(i){try{const s=await(await fetch(i)).json();Object.assign(this.globalData,s),this.awaitingDataFetches-=1}catch{this.awaitingDataFetches-=1}}readElement(i){return{dom:i,originalHTML:i.innerHTML,componentName:i.dataset.bookshopLive,componentPropSource:i.dataset.bookshopProps}}resolveComponentType(i){return this.engines[0].resolveComponentType(i)}async storeMeta(i){await this.engines[0].storeMeta?.(i)}async renderElement(i,n,s,a){try{a?.log?.(`Rendering ${i}`),await this.engines[0].render(s,i,n,{...this.globalData},a?.nested?.()),a?.log?.(`Rendered ${i}`)}catch(r){a?.log?.(`Error rendering ${i}`),console.warn(`Error rendering bookshop component ${i}`,r.toString()),console.warn("This is expected in certain cases, and may not be an issue, especially when deleting or re-ordering components.")}}async eval(i,n,s){const a=`Evaluating ${i} in ${JSON.stringify(n)}`;if(s?.log?.(a),!this.memo[a]){const r=await this.engines[0].eval(i,n,s);this.memo[a]=r}return s?.log?.(`Evaluated to ${JSON.stringify(this.memo[a])}`),this.memo[a]}normalize(i,n){const s=`Normalizing ${i}`;return n?.log?.(s),typeof this.engines[0].normalize=="function"&&(this.memo[s]?i=this.memo[s]:(i=this.engines[0].normalize(i),this.memo[s]=i),n?.log?.(`Normalized to ${typeof i=="object"?"json: "+JSON.stringify(i):i}`)),i}async update(i,n){this.logFn.log("Received new data to update the page with");const s=Date.now();for(typeof this.engines[0].transformData=="function"&&n?.transformData!==!1?(this.data=this.engines[0].transformData(i),this.logFn.log("Transformed the data using the engine's transform function")):this.data=i,this.renderOptions=n;this.awaitingDataFetches>0;)this.logFn.log("Still fetching remote data, waiting for all fetches to complete..."),await je(100);if(s-this.renderedAt<this.renderFrequency){const r=this.renderedAt+this.renderFrequency;if(this.shouldRenderAt=r,this.logFn.log(`Throttling this render \u2014 will try to render again in ${r-s}ms`),await je(r-s),r!==this.shouldRenderAt)return this.logFn.log("A newer render has schedule itself \u2014 throwing away this render attempt"),!1;this.logFn.log("Now running previously throttled render")}const a=Date.now();return this.shouldRenderAt=null,this.renderedAt=Date.now(),this.logFn.log("Rendering the update"),await this.render(),this.logFn.log(`Done rendering in ${Date.now()-a}ms (${Date.now()-s}ms throttled)`),!0}async render(){const i=typeof window>"u"||typeof window<"u"&&window.CloudCannon?.refreshInterface;this.logFn.log(i?"Editor panels are supported":"Editor panels are not supported");const n={dataBindings:i,...this.renderOptions};typeof window<"u"&&(window.bookshopEditorLinks===!1||window.bookshopDataBindings===!1)&&(n.dataBindings=!1),n.editorLinks===!1&&(n.dataBindings=!1),this.logFn.log(n.dataBindings?"Data bindings are enabled":"Data bindings are disabled"),this.logFn.log("Rendering component updates...");const s=await Qt(this,document,this.logFn.nested());this.logFn.log("Individual component updates have been rendered");for(let{startNode:a,endNode:r,output:l,pathStack:u,stashedNodes:d,name:o}of s)this.logFn.log(`Processing a component update for ${o}`),n.dataBindings&&(this.logFn.log(`Hydrating the data bindings for ${o}`),await Zt(this,l,u,a.cloneNode(),r.cloneNode(),d.map(p=>p.cloneNode()),this.logFn.nested())),this.logFn.log(`Grafting ${o}'s update to the DOM tree`),Xt(a,r,l,this.logFn.nested()),this.logFn.log(`Completed grafting ${o}'s update to the DOM tree`);this.completeRender(),this.logFn.log("Finished rendering")}},W=class{valueOf(){}liquidMethodMissing(e){}},me=function(){return me=Object.assign||function(t){for(var i,n=1,s=arguments.length;n<s;n++){i=arguments[n];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t},me.apply(this,arguments)},ei=Object.prototype.toString,ze=String.prototype.toLowerCase;function I(e){return typeof e=="string"}function P(e){return typeof e=="function"}function k(e){return e=j(e),I(e)?e:G(e)?"":String(e)}function j(e){return e instanceof W?e.valueOf():e}function ve(e){return typeof e=="number"}function Ue(e){return e&&P(e.toLiquid)?Ue(e.toLiquid()):e}function G(e){return e==null}function q(e){return ei.call(e)==="[object Array]"}function Me(e,t){e=e||{};for(const i in e)if(e.hasOwnProperty(i)&&t(e[i],i,e)===!1)break;return e}function be(e){return e[e.length-1]}function He(e){const t=typeof e;return e!==null&&(t==="object"||t==="function")}function Ve(e,t,i=1){const n=[];for(let s=e;s<t;s+=i)n.push(s);return n}function se(e,t,i=" "){return Ye(e,t,i,(n,s)=>s+n)}function ti(e,t,i=" "){return Ye(e,t,i,(n,s)=>n+s)}function Ye(e,t,i,n){e=String(e);let s=t-e.length;for(;s-- >0;)e=n(e,i);return e}function ii(e){return e}function Je(e){return e.replace(/(\w?)([A-Z])/g,(t,i,n)=>(i?i+"_":"")+n.toLowerCase())}function ni(e){return[...e].some(i=>i>="a"&&i<="z")?e.toUpperCase():e.toLowerCase()}function si(e,t){return e.length>t?e.substr(0,t-3)+"...":e}function We(e,t){return e==null&&t==null?0:e==null?1:t==null||(e=ze.call(e),t=ze.call(t),e<t)?-1:e>t?1:0}var ye=class{constructor(e,t,i,n){this.key=e,this.value=t,this.next=i,this.prev=n}},Ge=class{constructor(e,t=0){this.limit=e,this.size=t,this.cache={},this.head=new ye("HEAD",null,null,null),this.tail=new ye("TAIL",null,null,null),this.head.next=this.tail,this.tail.prev=this.head}write(e,t){if(this.cache[e])this.cache[e].value=t;else{const i=new ye(e,t,this.head.next,this.head);this.head.next.prev=i,this.head.next=i,this.cache[e]=i,this.size++,this.ensureLimit()}}read(e){if(!this.cache[e])return;const{value:t}=this.cache[e];return this.remove(e),this.write(e,t),t}remove(e){const t=this.cache[e];t.prev.next=t.next,t.next.prev=t.prev,delete this.cache[e],this.size--}clear(){this.head.next=this.tail,this.tail.prev=this.head,this.size=0,this.cache={}}ensureLimit(){this.size>this.limit&&this.remove(this.tail.prev.key)}};function ri(e,t){const i=document.createElement("base");i.href=e;const n=document.getElementsByTagName("head")[0];n.insertBefore(i,n.firstChild);const s=document.createElement("a");s.href=t;const a=s.href;return n.removeChild(i),a}function Qe(e,t,i){return e.length&&be(e)!=="/"&&(e+="/"),ri(e,t).replace(/^(\w+:\/\/[^/]+)(\/[^?]+)/,(s,a,r)=>{const l=r.split("/").pop();return/\.\w+$/.test(l)?s:a+r+i})}async function ai(e){return new Promise((t,i)=>{const n=new XMLHttpRequest;n.onload=()=>{n.status>=200&&n.status<300?t(n.responseText):i(new Error(n.statusText))},n.onerror=()=>{i(new Error("An error occurred whilst receiving the response."))},n.open("GET",e),n.send()})}function oi(e){const t=new XMLHttpRequest;if(t.open("GET",e,!1),t.send(),t.status<200||t.status>=300)throw new Error(t.statusText);return t.responseText}async function li(e){return!0}function ui(e){return!0}var ci=Object.freeze({resolve:Qe,readFile:ai,readFileSync:oi,exists:li,existsSync:ui});function C(e){return e&&P(e.equals)}function z(e,t){return!_e(e,t)}function _e(e,t){return t.opts.jsTruthy?!e:e===!1||e===void 0||e===null}var Ze={"==":(e,t)=>C(e)?e.equals(t):C(t)?t.equals(e):e===t,"!=":(e,t)=>C(e)?!e.equals(t):C(t)?!t.equals(e):e!==t,">":(e,t)=>C(e)?e.gt(t):C(t)?t.lt(e):e>t,"<":(e,t)=>C(e)?e.lt(t):C(t)?t.gt(e):e<t,">=":(e,t)=>C(e)?e.geq(t):C(t)?t.leq(e):e>=t,"<=":(e,t)=>C(e)?e.leq(t):C(t)?t.geq(e):e<=t,contains:(e,t)=>e&&P(e.indexOf)?e.indexOf(t)>-1:!1,and:(e,t,i)=>z(e,i)&&z(t,i),or:(e,t,i)=>z(e,i)||z(t,i)},_=[0,0,0,0,0,0,0,0,0,20,4,4,4,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,2,8,0,0,0,0,8,0,0,0,64,0,65,0,0,33,33,33,33,33,33,33,33,33,33,0,0,2,2,2,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],we=1,X=4,Xe=8,Ke=16,di=32,hi=64;_[160]=_[5760]=_[6158]=_[8192]=_[8193]=_[8194]=_[8195]=_[8196]=_[8197]=_[8198]=_[8199]=_[8200]=_[8201]=_[8202]=_[8232]=_[8233]=_[8239]=_[8287]=_[12288]=X;function et(e){const t={};for(const[i,n]of Object.entries(e)){let s=t;for(let a=0;a<i.length;a++){const r=i[a];s[r]=s[r]||{},a===i.length-1&&_[i.charCodeAt(a)]&we&&(s[r].needBoundary=!0),s=s[r]}s.handler=n,s.end=!0}return t}var U={root:["."],layouts:["."],partials:["."],relativeReference:!0,cache:void 0,extname:"",fs:ci,dynamicPartials:!0,jsTruthy:!1,trimTagRight:!1,trimTagLeft:!1,trimOutputRight:!1,trimOutputLeft:!1,greedy:!0,tagDelimiterLeft:"{%",tagDelimiterRight:"%}",outputDelimiterLeft:"{{",outputDelimiterRight:"}}",preserveTimezones:!1,strictFilters:!1,strictVariables:!1,lenientIf:!1,globals:{},keepOutputType:!1,operators:Ze,operatorsTrie:et(Ze)};function pi(e){if(e=e||{},e.hasOwnProperty("root")&&(e.root=re(e.root)),e.hasOwnProperty("partials")&&(e.partials=re(e.partials)),e.hasOwnProperty("layouts")&&(e.layouts=re(e.layouts)),e.hasOwnProperty("cache")){let t;typeof e.cache=="number"?t=e.cache>0?new Ge(e.cache):void 0:typeof e.cache=="object"?t=e.cache:t=e.cache?new Ge(1024):void 0,e.cache=t}return e.hasOwnProperty("operators")&&(e.operatorsTrie=et(e.operators)),e}function fi(e){const t=Object.assign({},U,e);return t.partials===U.partials&&(t.partials=t.root),t.layouts===U.layouts&&(t.layouts=t.root),t}function re(e){let t=[];return q(e)&&(t=e),I(e)&&(t=[e]),t.map(i=>Qe(i,".","")).map(i=>i[i.length-1]!=="/"?i+"/":i)}var ae=class extends Error{constructor(e,t){super(e.message),this.originalError=e,this.token=t,this.context=""}update(){const e=this.originalError;this.context=yi(this.token),this.message=_i(e.message,this.token),this.stack=this.message+`
`+this.context+`
`+this.stack+`
From `+e.stack}},tt=class extends ae{constructor(e,t){super(new Error(e),t),this.name="TokenizationError",super.update()}},gi=class extends ae{constructor(e,t){super(e,t),this.name="ParseError",this.message=e.message,super.update()}},it=class extends ae{constructor(e,t){super(e,t.token),this.name="RenderError",this.message=e.message,super.update()}static is(e){return e.name==="RenderError"}},mi=class extends ae{constructor(e,t){super(e,t),this.name="UndefinedVariableError",this.message=e.message,super.update()}},vi=class extends Error{constructor(e){super(`undefined variable: ${e}`),this.name="InternalUndefinedVariableError",this.variableName=e}},bi=class extends Error{constructor(e){super(e),this.name="AssertionError",this.message=e+""}};function yi(e){const[t]=e.getPosition(),i=e.input.split(`
`),n=Math.max(t-2,1),s=Math.min(t+3,i.length);return Ve(n,s+1).map(r=>{const l=r===t?">> ":"   ",u=se(String(r),String(s).length),d=i[r-1];return`${l}${u}| ${d}`}).join(`
`)}function _i(e,t){t.file&&(e+=`, file:${t.file}`);const[i,n]=t.getPosition();return e+=`, line:${i}, col:${n}`,e}var oe=class{constructor(e={},t=U,i=!1){this.scopes=[{}],this.registers={},this.sync=i,this.opts=t,this.globals=t.globals,this.environments=e}getRegister(e){return this.registers[e]=this.registers[e]||{}}setRegister(e,t){return this.registers[e]=t}saveRegister(...e){return e.map(t=>[t,this.getRegister(t)])}restoreRegister(e){return e.forEach(([t,i])=>this.setRegister(t,i))}getAll(){return[this.globals,this.environments,...this.scopes].reduce((e,t)=>me(e,t),{})}get(e){const t=this.findScope(e[0]);return this.getFromScope(t,e)}getFromScope(e,t){return typeof t=="string"&&(t=t.split(".")),t.reduce((i,n)=>{if(i=wi(i,n),G(i)&&this.opts.strictVariables)throw new vi(n);return i},e)}push(e){return this.scopes.push(e)}pop(){return this.scopes.pop()}bottom(){return this.scopes[0]}findScope(e){for(let t=this.scopes.length-1;t>=0;t--){const i=this.scopes[t];if(e in i)return i}return e in this.environments?this.environments:this.globals}};function wi(e,t){return G(e)?e:(e=Ue(e),P(e[t])?e[t]():e instanceof W?e.hasOwnProperty(t)?e[t]:e.liquidMethodMissing(t):t==="size"?xi(e):t==="first"?ki(e):t==="last"?Ei(e):e[t])}function ki(e){return q(e)?e[0]:e.first}function Ei(e){return q(e)?e[e.length-1]:e.last}function xi(e){return q(e)||I(e)?e.length:e.size}var M;(function(e){e.Partials="partials",e.Layouts="layouts",e.Root="root"})(M||(M={}));var Ti=class{constructor(e){this.options=e}*lookup(e,t,i,n){const{fs:s}=this.options,a=this.options[t];for(const r of this.candidates(e,a,n,t!==M.Root))if(i?s.existsSync(r):yield s.exists(r))return r;throw this.lookupError(e,a)}shouldLoadRelative(e){return this.options.relativeReference&&this.isRelativePath(e)}isRelativePath(e){return e.startsWith("./")||e.startsWith("../")}*candidates(e,t,i,n){const{fs:s,extname:a}=this.options;if(this.shouldLoadRelative(e)&&i){const r=s.resolve(this.dirname(i),e,a);for(const l of t)if(!n||r.startsWith(l)){yield r;return}}for(const r of t){const l=s.resolve(r,e,a);(!n||l.startsWith(r))&&(yield l)}if(s.fallback!==void 0){const r=s.fallback(e);r!==void 0&&(yield r)}}dirname(e){const t=e.split("/");return t.pop(),t.join("/")}lookupError(e,t){const i=new Error("ENOENT");return i.message=`ENOENT: Failed to lookup "${e}" in "${t}"`,i.code="ENOENT",i}},Ai=class{constructor(){this.buffer=""}write(e){this.buffer+=k(e)}},Fi=class{constructor(){throw this.buffer="",this.stream=null,new Error("streaming not supported in browser")}};function le(e){const t={then:i=>i(e),catch:()=>t};return t}function nt(e){const t={then:(i,n)=>n?n(e):t,catch:i=>i(e)};return t}function Si(e){return e&&P(e.then)}function Di(e){return e&&P(e.next)&&P(e.throw)&&P(e.return)}function ue(e){if(Si(e))return e;if(Di(e))return t();return le(e);function t(i){let n;try{n=e.next(i)}catch(s){return nt(s)}return n.done?le(n.value):ue(n.value).then(t,s=>{let a;try{a=e.throw(s)}catch(r){return nt(r)}return a.done?le(a.value):t(a.value)})}}function ce(e){return Promise.resolve(ue(e))}function de(e){let t;return ue(e).then(i=>(t=i,le(t))).catch(i=>{throw i}),t}var Ci=class{constructor(){this.buffer=""}write(e){e=j(e),typeof e!="string"&&this.buffer===""?this.buffer=e:this.buffer=k(this.buffer)+k(e)}},Oi=class{renderTemplatesToNodeStream(e,t){const i=new Fi;return Promise.resolve().then(()=>ue(this.renderTemplates(e,t,i))).then(()=>i.end(),n=>i.error(n)),i.stream}*renderTemplates(e,t,i){i||(i=t.opts.keepOutputType?new Ci:new Ai);for(const n of e)try{const s=yield n.render(t,i);if(s&&i.write(s),i.break||i.continue)break}catch(s){throw it.is(s)?s:new it(s,n)}return i.buffer}},w;(function(e){e[e.Number=1]="Number",e[e.Literal=2]="Literal",e[e.Tag=4]="Tag",e[e.Output=8]="Output",e[e.HTML=16]="HTML",e[e.Filter=32]="Filter",e[e.Hash=64]="Hash",e[e.PropertyAccess=128]="PropertyAccess",e[e.Word=256]="Word",e[e.Range=512]="Range",e[e.Quoted=1024]="Quoted",e[e.Operator=2048]="Operator",e[e.Delimited=12]="Delimited"})(w||(w={}));function $i(e){return!!(L(e)&w.Delimited)}function st(e){return L(e)===w.Operator}function ke(e){return L(e)===w.HTML}function qi(e){return L(e)===w.Output}function Ee(e){return L(e)===w.Tag}function rt(e){return L(e)===w.Quoted}function Li(e){return L(e)===w.Literal}function Bi(e){return L(e)===w.Number}function Ni(e){return L(e)===w.PropertyAccess}function Pi(e){return L(e)===w.Word}function Ri(e){return L(e)===w.Range}function L(e){return e?e.kind:-1}var Ii=class{constructor(e,t){this.handlers={},this.stopRequested=!1,this.tokens=e,this.parseToken=t}on(e,t){return this.handlers[e]=t,this}trigger(e,t){const i=this.handlers[e];return i?(i.call(this,t),!0):!1}start(){this.trigger("start");let e;for(;!this.stopRequested&&(e=this.tokens.shift());){if(this.trigger("token",e)||Ee(e)&&this.trigger(`tag:${e.name}`,e))continue;const t=this.parseToken(e,this.tokens);this.trigger("template",t)}return this.stopRequested||this.trigger("end"),this}stop(){return this.stopRequested=!0,this}},xe=class{constructor(e){this.token=e}};function A(e,t){if(!e){const i=t?t():`expect ${e} to be true`;throw new bi(i)}}var ji=class extends W{equals(e){return G(j(e))}gt(){return!1}geq(){return!1}lt(){return!1}leq(){return!1}valueOf(){return null}},Te=class extends W{equals(e){return e instanceof Te?!1:(e=j(e),I(e)||q(e)?e.length===0:He(e)?Object.keys(e).length===0:!1)}gt(){return!1}geq(){return!1}lt(){return!1}leq(){return!1}valueOf(){return""}},zi=class extends Te{equals(e){return e===!1||G(j(e))?!0:I(e)?/^\s*$/.test(e):super.equals(e)}},at=new ji,ot={true:!0,false:!1,nil:at,null:at,empty:new Te,blank:new zi},Ui=/[\da-fA-F]/,lt=/[0-7]/,ut={b:"\b",f:"\f",n:`
`,r:"\r",t:"	",v:"\v"};function ct(e){const t=e.charCodeAt(0);return t>=97?t-87:t>=65?t-55:t-48}function dt(e){let t="";for(let i=1;i<e.length-1;i++){if(e[i]!=="\\"){t+=e[i];continue}if(ut[e[i+1]]!==void 0)t+=ut[e[++i]];else if(e[i+1]==="u"){let n=0,s=i+2;for(;s<=i+5&&Ui.test(e[s]);)n=n*16+ct(e[s++]);i=s-1,t+=String.fromCharCode(n)}else if(!lt.test(e[i+1]))t+=e[++i];else{let n=i+1,s=0;for(;n<=i+3&&lt.test(e[n]);)s=s*8+ct(e[n++]);i=n-1,t+=String.fromCharCode(s)}}return t}var Mi=class{constructor(e){this.postfix=[...Gi(e)]}*evaluate(e,t){A(e,()=>"unable to evaluate: context not defined");const i=[];for(const n of this.postfix)if(st(n)){const s=yield i.pop(),a=yield i.pop(),r=Yi(e.opts.operators,n,a,s,e);i.push(r)}else i.push(yield F(n,e,t&&this.postfix.length===1));return i[0]}};function F(e,t,i=!1){if(Ni(e))return Hi(e,t,i);if(Ri(e))return Wi(e,t);if(Li(e))return Ji(e);if(Bi(e))return Vi(e);if(Pi(e))return e.getText();if(rt(e))return Ae(e)}function Hi(e,t,i){const n=e.props.map(s=>F(s,t,!1));try{return t.get([e.propertyName,...n])}catch(s){if(i&&s.name==="InternalUndefinedVariableError")return null;throw new mi(s,e)}}function Vi(e){const t=e.whole.content+"."+(e.decimal?e.decimal.content:"");return Number(t)}function Ae(e){return dt(e.getText())}function Yi(e,t,i,n,s){const a=e[t.operator];return a(i,n,s)}function Ji(e){return ot[e.literal]}function Wi(e,t){const i=F(e.lhs,t),n=F(e.rhs,t);return Ve(+i,+n+1)}function*Gi(e){const t=[];for(const i of e)if(st(i)){for(;t.length&&t[t.length-1].getPrecedence()>i.getPrecedence();)yield t.pop();t.push(i)}else yield i;for(;t.length;)yield t.pop()}var B=class{constructor(e,t,i,n,s){this.kind=e,this.input=t,this.begin=i,this.end=n,this.file=s}getText(){return this.input.slice(this.begin,this.end)}getPosition(){let[e,t]=[1,1];for(let i=0;i<this.begin;i++)this.input[i]===`
`?(e++,t=1):t++;return[e,t]}size(){return this.end-this.begin}},ht=class extends B{constructor(e,t,i,n,s,a,r,l){super(e,i,n,s,l),this.trimLeft=!1,this.trimRight=!1,this.content=this.getText();const u=t[0]==="-",d=be(t)==="-";this.content=t.slice(u?1:0,d?-1:t.length).trim(),this.trimLeft=u||a,this.trimRight=d||r}};function Qi(e,t){let i=!1;for(let n=0;n<e.length;n++){const s=e[n];$i(s)&&(!i&&s.trimLeft&&Zi(e[n-1],t.greedy),Ee(s)&&(s.name==="raw"?i=!0:s.name==="endraw"&&(i=!1)),!i&&s.trimRight&&Xi(e[n+1],t.greedy))}}function Zi(e,t){if(!e||!ke(e))return;const i=t?X:Ke;for(;_[e.input.charCodeAt(e.end-1-e.trimRight)]&i;)e.trimRight++}function Xi(e,t){if(!e||!ke(e))return;const i=t?X:Ke;for(;_[e.input.charCodeAt(e.begin+e.trimLeft)]&i;)e.trimLeft++;e.input.charAt(e.begin+e.trimLeft)===`
`&&e.trimLeft++}var Ki=class extends B{constructor(e,t){super(w.Number,e.input,e.begin,t?t.end:e.end,e.file),this.whole=e,this.decimal=t}},K=class extends B{constructor(e,t,i,n){super(w.Word,e,t,i,n),this.input=e,this.begin=t,this.end=i,this.file=n,this.content=this.getText()}isNumber(e=!1){const t=e&&_[this.input.charCodeAt(this.begin)]&hi?this.begin+1:this.begin;for(let i=t;i<this.end;i++)if(!(_[this.input.charCodeAt(i)]&di))return!1;return!0}},en=class extends B{constructor(e,t,i,n){super(w.Literal,e,t,i,n),this.input=e,this.begin=t,this.end=i,this.file=n,this.literal=this.getText()}},pt={"==":1,"!=":1,">":1,"<":1,">=":1,"<=":1,contains:1,and:0,or:0},tn=class extends B{constructor(e,t,i,n){super(w.Operator,e,t,i,n),this.input=e,this.begin=t,this.end=i,this.file=n,this.operator=this.getText()}getPrecedence(){const e=this.getText();return e in pt?pt[e]:1}},ft=class extends B{constructor(e,t,i){super(w.PropertyAccess,e.input,e.begin,i,e.file),this.variable=e,this.props=t,this.propertyName=this.variable instanceof K?this.variable.getText():dt(this.variable.getText())}},nn=class extends B{constructor(e,t,i,n,s,a){super(w.Filter,i,n,s,a),this.name=e,this.args=t}},sn=class extends B{constructor(e,t,i,n,s,a){super(w.Hash,e,t,i,a),this.input=e,this.begin=t,this.end=i,this.name=n,this.value=s,this.file=a}},rn=class extends B{constructor(e,t,i,n){super(w.Quoted,e,t,i,n),this.input=e,this.begin=t,this.end=i,this.file=n}},gt=class extends B{constructor(e,t,i,n){super(w.HTML,e,t,i,n),this.input=e,this.begin=t,this.end=i,this.file=n,this.trimLeft=0,this.trimRight=0}getContent(){return this.input.slice(this.begin+this.trimLeft,this.end-this.trimRight)}},an=class extends B{constructor(e,t,i,n,s,a){super(w.Range,e,t,i,a),this.input=e,this.begin=t,this.end=i,this.lhs=n,this.rhs=s,this.file=a}},on=class extends ht{constructor(e,t,i,n,s){const{trimOutputLeft:a,trimOutputRight:r,outputDelimiterLeft:l,outputDelimiterRight:u}=n,d=e.slice(t+l.length,i-u.length);super(w.Output,d,e,t,i,a,r,s)}};function ln(e,t,i,n=e.length){let s=i,a=t,r;for(;s[e[a]]&&a<n;)s=s[e[a++]],s.end&&(r=s);return!r||r.needBoundary&&_[e.charCodeAt(a)]&we?-1:a}var T=class{constructor(e,t,i=""){this.input=e,this.trie=t,this.file=i,this.p=0,this.rawBeginAt=-1,this.N=e.length}readExpression(){return new Mi(this.readExpressionTokens())}*readExpressionTokens(){const e=this.readValue();if(e)for(yield e;this.p<this.N;){const t=this.readOperator();if(!t)return;const i=this.readValue();if(!i)return;yield t,yield i}}readOperator(){this.skipBlank();const e=ln(this.input,this.p,this.trie,this.p+8);if(e!==-1)return new tn(this.input,this.p,this.p=e,this.file)}readFilters(){const e=[];for(;;){const t=this.readFilter();if(!t)return e;e.push(t)}}readFilter(){if(this.skipBlank(),this.end())return null;A(this.peek()==="|",()=>`unexpected token at ${this.snapshot()}`),this.p++;const e=this.p,t=this.readIdentifier();if(!t.size())return null;const i=[];if(this.skipBlank(),this.peek()===":")do{++this.p;const n=this.readFilterArg();for(n&&i.push(n);this.p<this.N&&this.peek()!==","&&this.peek()!=="|";)++this.p}while(this.peek()===",");return new nn(t.getText(),i,this.input,e,this.p,this.file)}readFilterArg(){const e=this.readValue();if(!e)return;if(this.skipBlank(),this.peek()!==":")return e;++this.p;const t=this.readValue();return[e.getText(),t]}readTopLevelTokens(e=U){const t=[];for(;this.p<this.N;){const i=this.readTopLevelToken(e);t.push(i)}return Qi(t,e),t}readTopLevelToken(e){const{tagDelimiterLeft:t,outputDelimiterLeft:i}=e;return this.rawBeginAt>-1?this.readEndrawOrRawContent(e):this.match(t)?this.readTagToken(e):this.match(i)?this.readOutputToken(e):this.readHTMLToken(e)}readHTMLToken(e){const t=this.p;for(;this.p<this.N;){const{tagDelimiterLeft:i,outputDelimiterLeft:n}=e;if(this.match(i)||this.match(n))break;++this.p}return new gt(this.input,t,this.p,this.file)}readTagToken(e=U){const{file:t,input:i}=this,n=this.p;if(this.readToDelimiter(e.tagDelimiterRight)===-1)throw this.mkError(`tag ${this.snapshot(n)} not closed`,n);const s=new mt(i,n,this.p,e,t);return s.name==="raw"&&(this.rawBeginAt=n),s}readToDelimiter(e){for(;this.p<this.N;){if(this.peekType()&Xe){this.readQuoted();continue}if(++this.p,this.rmatch(e))return this.p}return-1}readOutputToken(e=U){const{file:t,input:i}=this,{outputDelimiterRight:n}=e,s=this.p;if(this.readToDelimiter(n)===-1)throw this.mkError(`output ${this.snapshot(s)} not closed`,s);return new on(i,s,this.p,e,t)}readEndrawOrRawContent(e){const{tagDelimiterLeft:t,tagDelimiterRight:i}=e,n=this.p;let s=this.readTo(t)-t.length;for(;this.p<this.N;){if(this.readIdentifier().getText()!=="endraw"){s=this.readTo(t)-t.length;continue}for(;this.p<=this.N;){if(this.rmatch(i)){const a=this.p;return n===s?(this.rawBeginAt=-1,new mt(this.input,n,a,e,this.file)):(this.p=s,new gt(this.input,n,s,this.file))}if(this.rmatch(t))break;this.p++}}throw this.mkError(`raw ${this.snapshot(this.rawBeginAt)} not closed`,n)}mkError(e,t){return new tt(e,new K(this.input,t,this.N,this.file))}snapshot(e=this.p){return JSON.stringify(si(this.input.slice(e),16))}readWord(){return console.warn("Tokenizer#readWord() will be removed, use #readIdentifier instead"),this.readIdentifier()}readIdentifier(){this.skipBlank();const e=this.p;for(;this.peekType()&we;)++this.p;return new K(this.input,e,this.p,this.file)}readHashes(){const e=[];for(;;){const t=this.readHash();if(!t)return e;e.push(t)}}readHash(){this.skipBlank(),this.peek()===","&&++this.p;const e=this.p,t=this.readIdentifier();if(!t.size())return;let i;return this.skipBlank(),this.peek()===":"&&(++this.p,i=this.readValue()),new sn(this.input,e,this.p,t,i,this.file)}remaining(){return this.input.slice(this.p)}advance(e=1){this.p+=e}end(){return this.p>=this.N}readTo(e){for(;this.p<this.N;)if(++this.p,this.rmatch(e))return this.p;return-1}readValue(){const e=this.readQuoted()||this.readRange();if(e)return e;if(this.peek()==="["){this.p++;const s=this.readQuoted();return!s||this.peek()!=="]"?void 0:(this.p++,new ft(s,[],this.p))}const t=this.readIdentifier();if(!t.size())return;let i=t.isNumber(!0);const n=[];for(;;)if(this.peek()==="["){i=!1,this.p++;const s=this.readValue()||new K(this.input,this.p,this.p,this.file);this.readTo("]"),n.push(s)}else if(this.peek()==="."&&this.peek(1)!=="."){this.p++;const s=this.readIdentifier();if(!s.size())break;s.isNumber()||(i=!1),n.push(s)}else break;return!n.length&&ot.hasOwnProperty(t.content)?new en(this.input,t.begin,t.end,this.file):i?new Ki(t,n[0]):new ft(t,n,this.p)}readRange(){this.skipBlank();const e=this.p;if(this.peek()!=="(")return;++this.p;const t=this.readValueOrThrow();this.p+=2;const i=this.readValueOrThrow();return++this.p,new an(this.input,e,this.p,t,i,this.file)}readValueOrThrow(){const e=this.readValue();return A(e,()=>`unexpected token ${this.snapshot()}, value expected`),e}readQuoted(){this.skipBlank();const e=this.p;if(!(this.peekType()&Xe))return;++this.p;let t=!1;for(;this.p<this.N&&(++this.p,!(this.input[this.p-1]===this.input[e]&&!t));)t?t=!1:this.input[this.p-1]==="\\"&&(t=!0);return new rn(this.input,e,this.p,this.file)}readFileName(){const e=this.p;for(;!(this.peekType()&X)&&this.peek()!==","&&this.p<this.N;)this.p++;return new K(this.input,e,this.p,this.file)}match(e){for(let t=0;t<e.length;t++)if(e[t]!==this.input[this.p+t])return!1;return!0}rmatch(e){for(let t=0;t<e.length;t++)if(e[e.length-1-t]!==this.input[this.p-1-t])return!1;return!0}peekType(e=0){return _[this.input.charCodeAt(this.p+e)]}peek(e=0){return this.input[this.p+e]}skipBlank(){for(;this.peekType()&X;)++this.p}},mt=class extends ht{constructor(e,t,i,n,s){const{trimTagLeft:a,trimTagRight:r,tagDelimiterLeft:l,tagDelimiterRight:u}=n,d=e.slice(t+l.length,i-u.length);super(w.Tag,d,e,t,i,a,r,s);const o=new T(this.content,n.operatorsTrie);if(this.name=o.readIdentifier().getText(),!this.name)throw new tt("illegal tag syntax",this);o.skipBlank(),this.args=o.remaining()}},Q=class{constructor(e){this.hash={};const t=new T(e,{});for(const i of t.readHashes())this.hash[i.name.content]=i.value}*render(e){const t={};for(const i of Object.keys(this.hash))t[i]=this.hash[i]===void 0?!0:yield F(this.hash[i],e);return t}};function un(e){return q(e)}var vt=class{constructor(e,t,i,n){this.name=e,this.impl=t||ii,this.args=i,this.liquid=n}render(e,t){const i=[];for(const n of this.args)un(n)?i.push([n[0],F(n[1],t)]):i.push(F(n,t));return this.impl.apply({context:t,liquid:this.liquid},[e,...i])}},H=class{constructor(e,t){this.filters=[];const i=new T(e,t.options.operatorsTrie);this.initial=i.readExpression(),this.filters=i.readFilters().map(({name:n,args:s})=>new vt(n,t.filters.get(n),s,t))}*value(e,t){t=t||e.opts.lenientIf&&this.filters.length>0&&this.filters[0].name==="default";let i=yield this.initial.evaluate(e,t);for(const n of this.filters)i=yield n.render(i,e);return i}},cn=class extends xe{constructor(e,t,i){super(e),this.name=e.name;const n=i.tags.get(e.name);this.impl=Object.create(n),this.impl.liquid=i,this.impl.parse&&this.impl.parse(e,t)}*render(e,t){const i=yield new Q(this.token.args).render(e),n=this.impl;if(P(n.render))return yield n.render(e,t,i)}},dn=class extends xe{constructor(e,t){super(e),this.value=new H(e.content,t)}*render(e,t){const i=yield this.value.value(e,!1);t.write(i)}},hn=class extends xe{constructor(e){super(e),this.str=e.getContent()}*render(e,t){t.write(this.str)}},pn=class{constructor(e){this.liquid=e,this.cache=this.liquid.options.cache,this.fs=this.liquid.options.fs,this.parseFile=this.cache?this._parseFileCached:this._parseFile,this.loader=new Ti(this.liquid.options)}parse(e,t){const n=new T(e,this.liquid.options.operatorsTrie,t).readTopLevelTokens(this.liquid.options);return this.parseTokens(n)}parseTokens(e){let t;const i=[];for(;t=e.shift();)i.push(this.parseToken(t,e));return i}parseToken(e,t){try{return Ee(e)?new cn(e,t,this.liquid):qi(e)?new dn(e,this.liquid):new hn(e)}catch(i){throw new gi(i,e)}}parseStream(e){return new Ii(e,(t,i)=>this.parseToken(t,i))}*_parseFileCached(e,t,i=M.Root,n){const s=this.loader.shouldLoadRelative(e)?n+","+e:i+":"+e;let a=yield this.cache.read(s);return a||(a=yield this._parseFile(e,t,i,n),this.cache.write(s,a),a)}*_parseFile(e,t,i=M.Root,n){const s=yield this.loader.lookup(e,i,t,n);return this.liquid.parse(t?this.fs.readFileSync(s):yield this.fs.readFile(s),s)}},fn={parse:function(e){const t=new T(e.args,this.liquid.options.operatorsTrie);this.key=t.readIdentifier().content,t.skipBlank(),A(t.peek()==="=",()=>`illegal token ${e.getText()}`),t.advance(),this.value=t.remaining()},render:function*(e){e.bottom()[this.key]=yield this.liquid._evalValue(this.value,e)}};function Fe(e){return q(e)?e:I(e)&&e.length>0?[e]:He(e)?Object.keys(e).map(t=>[t,e[t]]):[]}function ee(e){return q(e)?e:[e]}var Se=class extends W{constructor(e,t,i){super(),this.i=0,this.length=e,this.name=`${i}-${t}`}next(){this.i++}index0(){return this.i}index(){return this.i+1}first(){return this.i===0}last(){return this.i===this.length-1}rindex(){return this.length-this.i}rindex0(){return this.length-this.i-1}valueOf(){return JSON.stringify(this)}},bt=["offset","limit","reversed"],gn={type:"block",parse:function(e,t){const i=new T(e.args,this.liquid.options.operatorsTrie),n=i.readIdentifier(),s=i.readIdentifier(),a=i.readValue();A(n.size()&&s.content==="in"&&a,()=>`illegal tag: ${e.getText()}`),this.variable=n.content,this.collection=a,this.hash=new Q(i.remaining()),this.templates=[],this.elseTemplates=[];let r;const l=this.liquid.parser.parseStream(t).on("start",()=>r=this.templates).on("tag:else",()=>r=this.elseTemplates).on("tag:endfor",()=>l.stop()).on("template",u=>r.push(u)).on("end",()=>{throw new Error(`tag ${e.getText()} not closed`)});l.start()},render:function*(e,t){const i=this.liquid.renderer;let n=Fe(yield F(this.collection,e));if(!n.length){yield i.renderTemplates(this.elseTemplates,e,t);return}const s=yield this.hash.render(e);n=(this.liquid.options.orderedFilterParameters?Object.keys(s).filter(l=>bt.includes(l)):bt.filter(l=>s[l]!==void 0)).reduce((l,u)=>u==="offset"?vn(l,s.offset):u==="limit"?bn(l,s.limit):mn(l),n);const r={forloop:new Se(n.length,this.collection.getText(),this.variable)};e.push(r);for(const l of n){if(r[this.variable]=l,yield i.renderTemplates(this.templates,e,t),t.break){t.break=!1;break}t.continue=!1,r.forloop.next()}e.pop()}};function mn(e){return[...e].reverse()}function vn(e,t){return e.slice(t)}function bn(e,t){return e.slice(0,t)}var yn={parse:function(e,t){const i=new T(e.args,this.liquid.options.operatorsTrie);this.variable=_n(i),A(this.variable,()=>`${e.args} not valid identifier`),this.templates=[];const n=this.liquid.parser.parseStream(t);n.on("tag:endcapture",()=>n.stop()).on("template",s=>this.templates.push(s)).on("end",()=>{throw new Error(`tag ${e.getText()} not closed`)}),n.start()},render:function*(e){const i=yield this.liquid.renderer.renderTemplates(this.templates,e);e.bottom()[this.variable]=i}};function _n(e){const t=e.readIdentifier().content;if(t)return t;const i=e.readQuoted();if(i)return Ae(i)}var wn={parse:function(e,t){this.cond=new H(e.args,this.liquid),this.cases=[],this.elseTemplates=[];let i=[];const n=this.liquid.parser.parseStream(t).on("tag:when",s=>{i=[];const a=new T(s.args,this.liquid.options.operatorsTrie);for(;!a.end();){const r=a.readValue();this.cases.push({val:r,templates:i}),a.readTo(",")}}).on("tag:else",()=>i=this.elseTemplates).on("tag:endcase",()=>n.stop()).on("template",s=>i.push(s)).on("end",()=>{throw new Error(`tag ${e.getText()} not closed`)});n.start()},render:function*(e,t){const i=this.liquid.renderer,n=j(yield this.cond.value(e,e.opts.lenientIf));for(const s of this.cases)if(F(s.val,e,e.opts.lenientIf)===n){yield i.renderTemplates(s.templates,e,t);return}yield i.renderTemplates(this.elseTemplates,e,t)}},kn={parse:function(e,t){const i=this.liquid.parser.parseStream(t);i.on("token",n=>{n.name==="endcomment"&&i.stop()}).on("end",()=>{throw new Error(`tag ${e.getText()} not closed`)}),i.start()}},De;(function(e){e[e.OUTPUT=0]="OUTPUT",e[e.STORE=1]="STORE"})(De||(De={}));var te=De,En={parseFilePath:Ce,renderFilePath:Oe,parse:function(e){const t=e.args,i=new T(t,this.liquid.options.operatorsTrie);for(this.file=this.parseFilePath(i,this.liquid),this.currentFile=e.file;!i.end();){i.skipBlank();const n=i.p,s=i.readIdentifier();if((s.content==="with"||s.content==="for")&&(i.skipBlank(),i.peek()!==":")){const a=i.readValue();if(a){const r=i.p,l=i.readIdentifier();let u;l.content==="as"?u=i.readIdentifier():i.p=r,this[s.content]={value:a,alias:u&&u.content},i.skipBlank(),i.peek()===","&&i.advance();continue}}i.p=n;break}this.hash=new Q(i.remaining())},render:function*(e,t){const{liquid:i,hash:n}=this,s=yield this.renderFilePath(this.file,e,i);A(s,()=>`illegal filename "${s}"`);const a=new oe({},e.opts,e.sync),r=yield n.render(e);if(this.with){const{value:l,alias:u}=this.with;r[u||s]=F(l,e)}if(a.push(r),this.for){const{value:l,alias:u}=this.for;let d=F(l,e);d=Fe(d),r.forloop=new Se(d.length,l.getText(),u);for(const o of d){r[u]=o;const p=yield i._parsePartialFile(s,a.sync,this.currentFile);yield i.renderer.renderTemplates(p,a,t),r.forloop.next()}}else{const l=yield i._parsePartialFile(s,a.sync,this.currentFile);yield i.renderer.renderTemplates(l,a,t)}}};function Ce(e,t){if(t.options.dynamicPartials){const n=e.readValue();if(n===void 0)throw new TypeError(`illegal argument "${e.input}"`);if(n.getText()==="none")return null;if(rt(n)){const s=t.parse(Ae(n));return s.length===1&&ke(s[0].token)?s[0].token.getContent():s}return n}const i=e.readFileName().getText();return i==="none"?null:i}function Oe(e,t,i){return typeof e=="string"?e:Array.isArray(e)?i.renderer.renderTemplates(e,t):F(e,t)}var xn={parseFilePath:Ce,renderFilePath:Oe,parse:function(e){const t=e.args,i=new T(t,this.liquid.options.operatorsTrie);this.file=this.parseFilePath(i,this.liquid),this.currentFile=e.file;const n=i.p;i.readIdentifier().content==="with"?(i.skipBlank(),i.peek()!==":"?this.withVar=i.readValue():i.p=n):i.p=n,this.hash=new Q(i.remaining())},render:function*(e,t){const{liquid:i,hash:n,withVar:s}=this,{renderer:a}=i,r=yield this.renderFilePath(this.file,e,i);A(r,()=>`illegal filename "${r}"`);const l=e.saveRegister("blocks","blockMode");e.setRegister("blocks",{}),e.setRegister("blockMode",te.OUTPUT);const u=yield n.render(e);s&&(u[r]=F(s,e));const d=yield i._parsePartialFile(r,e.sync,this.currentFile);e.push(u),yield a.renderTemplates(d,e,t),e.pop(),e.restoreRegister(l)}},Tn={parse:function(e){const t=new T(e.args,this.liquid.options.operatorsTrie);this.variable=t.readIdentifier().content},render:function(e,t){const i=e.environments;ve(i[this.variable])||(i[this.variable]=0),t.write(k(--i[this.variable]))}},An={parse:function(e){const t=new T(e.args,this.liquid.options.operatorsTrie),i=t.readValue();for(t.skipBlank(),this.candidates=[],i&&(t.peek()===":"?(this.group=i,t.advance()):this.candidates.push(i));!t.end();){const n=t.readValue();n&&this.candidates.push(n),t.readTo(",")}A(this.candidates.length,()=>`empty candidates: ${e.getText()}`)},render:function(e,t){const n=`cycle:${F(this.group,e)}:`+this.candidates.join(","),s=e.getRegister("cycle");let a=s[n];a===void 0&&(a=s[n]=0);const r=this.candidates[a];a=(a+1)%this.candidates.length,s[n]=a;const l=F(r,e);t.write(l)}},Fn={parse:function(e,t){this.branches=[],this.elseTemplates=[];let i;this.liquid.parser.parseStream(t).on("start",()=>this.branches.push({predicate:new H(e.args,this.liquid),templates:i=[]})).on("tag:elsif",n=>this.branches.push({predicate:new H(n.args,this.liquid),templates:i=[]})).on("tag:else",()=>i=this.elseTemplates).on("tag:endif",function(){this.stop()}).on("template",n=>i.push(n)).on("end",()=>{throw new Error(`tag ${e.getText()} not closed`)}).start()},render:function*(e,t){const i=this.liquid.renderer;for(const{predicate:n,templates:s}of this.branches){const a=yield n.value(e,e.opts.lenientIf);if(z(a,e)){yield i.renderTemplates(s,e,t);return}}yield i.renderTemplates(this.elseTemplates,e,t)}},Sn={parse:function(e){const t=new T(e.args,this.liquid.options.operatorsTrie);this.variable=t.readIdentifier().content},render:function(e,t){const i=e.environments;ve(i[this.variable])||(i[this.variable]=0);const n=i[this.variable];i[this.variable]++,t.write(k(n))}},Dn={parseFilePath:Ce,renderFilePath:Oe,parse:function(e,t){const i=new T(e.args,this.liquid.options.operatorsTrie);this.file=this.parseFilePath(i,this.liquid),this.currentFile=e.file,this.hash=new Q(i.remaining()),this.tpls=this.liquid.parser.parseTokens(t)},render:function*(e,t){const{liquid:i,hash:n,file:s}=this,{renderer:a}=i;if(s===null){e.setRegister("blockMode",te.OUTPUT),yield a.renderTemplates(this.tpls,e,t);return}const r=yield this.renderFilePath(this.file,e,i);A(r,()=>`illegal filename "${r}"`);const l=yield i._parseLayoutFile(r,e.sync,this.currentFile);e.setRegister("blockMode",te.STORE);const u=yield a.renderTemplates(this.tpls,e),d=e.getRegister("blocks");d[""]===void 0&&(d[""]=(o,p)=>p.write(u)),e.setRegister("blockMode",te.OUTPUT),e.push(yield n.render(e)),yield a.renderTemplates(l,e,t),e.pop()}},yt=class extends W{constructor(e=()=>""){super(),this.superBlockRender=e}super(){return this.superBlockRender()}},Cn={parse(e,t){const i=/\w+/.exec(e.args);this.block=i?i[0]:"",this.tpls=[],this.liquid.parser.parseStream(t).on("tag:endblock",function(){this.stop()}).on("template",n=>this.tpls.push(n)).on("end",()=>{throw new Error(`tag ${e.getText()} not closed`)}).start()},*render(e,t){const i=this.getBlockRender(e);e.getRegister("blockMode")===te.STORE?e.getRegister("blocks")[this.block]=i:yield i(new yt,t)},getBlockRender(e){const{liquid:t,tpls:i}=this,n=e.getRegister("blocks")[this.block],s=function*(a,r){e.push({block:a}),yield t.renderer.renderTemplates(i,e,r),e.pop()};return n?(a,r)=>n(new yt(()=>s(a,r)),r):s}},On={parse:function(e,t){this.tokens=[];const i=this.liquid.parser.parseStream(t);i.on("token",n=>{n.name==="endraw"?i.stop():this.tokens.push(n)}).on("end",()=>{throw new Error(`tag ${e.getText()} not closed`)}),i.start()},render:function(){return this.tokens.map(e=>e.getText()).join("")}},$n=class extends Se{constructor(e,t,i,n){super(e,i,n),this.length=e,this.cols=t}row(){return Math.floor(this.i/this.cols)+1}col0(){return this.i%this.cols}col(){return this.col0()+1}col_first(){return this.col0()===0}col_last(){return this.col()===this.cols}},qn={parse:function(e,t){const i=new T(e.args,this.liquid.options.operatorsTrie),n=i.readIdentifier();i.skipBlank();const s=i.readIdentifier();A(s&&s.content==="in",()=>`illegal tag: ${e.getText()}`),this.variable=n.content,this.collection=i.readValue(),this.hash=new Q(i.remaining()),this.templates=[];let a;const r=this.liquid.parser.parseStream(t).on("start",()=>a=this.templates).on("tag:endtablerow",()=>r.stop()).on("template",l=>a.push(l)).on("end",()=>{throw new Error(`tag ${e.getText()} not closed`)});r.start()},render:function*(e,t){let i=Fe(yield F(this.collection,e));const n=yield this.hash.render(e),s=n.offset||0,a=n.limit===void 0?i.length:n.limit;i=i.slice(s,s+a);const r=n.cols||i.length,l=this.liquid.renderer,u=new $n(i.length,r,this.collection.getText(),this.variable),d={tablerowloop:u};e.push(d);for(let o=0;o<i.length;o++,u.next())d[this.variable]=i[o],u.col0()===0&&(u.row()!==1&&t.write("</tr>"),t.write(`<tr class="row${u.row()}">`)),t.write(`<td class="col${u.col()}">`),yield l.renderTemplates(this.templates,e,t),t.write("</td>");i.length&&t.write("</tr>"),e.pop()}},Ln={parse:function(e,t){this.branches=[],this.elseTemplates=[];let i;this.liquid.parser.parseStream(t).on("start",()=>this.branches.push({predicate:new H(e.args,this.liquid),test:_e,templates:i=[]})).on("tag:elsif",n=>this.branches.push({predicate:new H(n.args,this.liquid),test:z,templates:i=[]})).on("tag:else",()=>i=this.elseTemplates).on("tag:endunless",function(){this.stop()}).on("template",n=>i.push(n)).on("end",()=>{throw new Error(`tag ${e.getText()} not closed`)}).start()},render:function*(e,t){const i=this.liquid.renderer;for(const{predicate:n,test:s,templates:a}of this.branches){const r=yield n.value(e,e.opts.lenientIf);if(s(r,e)){yield i.renderTemplates(a,e,t);return}}yield i.renderTemplates(this.elseTemplates,e,t)}},Bn={render:function(e,t){t.break=!0}},Nn={render:function(e,t){t.continue=!0}},Pn={assign:fn,for:gn,capture:yn,case:wn,comment:kn,include:xn,render:En,decrement:Tn,increment:Sn,cycle:An,if:Fn,layout:Dn,block:Cn,raw:On,tablerow:qn,unless:Ln,break:Bn,continue:Nn},Rn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},In={"&amp;":"&","&lt;":"<","&gt;":">","&#34;":'"',"&#39;":"'"};function _t(e){return k(e).replace(/&|<|>|"|'/g,t=>Rn[t])}function jn(e){return String(e).replace(/&(amp|lt|gt|#34|#39);/g,t=>In[t])}function zn(e){return _t(jn(e))}function Un(e){return e.replace(/\n/g,`<br />
`)}function Mn(e){return e.replace(/<script.*?<\/script>|<!--.*?-->|<style.*?<\/style>|<.*?>/g,"")}var Hn=Math.abs,Vn=Math.max,Yn=Math.min,Jn=Math.ceil,Wn=(e,t)=>e/t,Gn=Math.floor,Qn=(e,t)=>e-t,Zn=(e,t)=>e%t,Xn=(e,t)=>e*t;function Kn(e,t=0){const i=Math.pow(10,t);return Math.round(e*i)/i}function es(e,t){return Number(e)+Number(t)}function ts(e,t){return!e||!e.sort?[]:t!==void 0?[...e].sort((i,n)=>We(i[t],n[t])):[...e].sort(We)}var is=e=>e.split("+").map(decodeURIComponent).join(" "),ns=e=>e.split(" ").map(encodeURIComponent).join("+"),ss=(e,t)=>e.join(t===void 0?" ":t),rs=e=>q(e)?be(e):"",as=e=>q(e)?e[0]:"",os=e=>[...e].reverse();function ls(e,t){const i=n=>t?this.context.getFromScope(n,t.split(".")):n;return ee(e).sort((n,s)=>(n=i(n),s=i(s),n<s?-1:n>s?1:0))}var us=e=>e&&e.length||0;function cs(e,t){return ee(e).map(i=>this.context.getFromScope(i,t.split(".")))}function ds(e){return ee(e).filter(t=>!G(t))}function hs(e,t){return ee(e).concat(t)}function ps(e,t,i=1){return t=t<0?e.length+t:t,e.slice(t,t+i)}function fs(e,t,i){return ee(e).filter(n=>{const s=this.context.getFromScope(n,String(t).split("."));return i===void 0?z(s,this.context):s===i})}function gs(e){const t={};return(e||[]).filter(i=>t.hasOwnProperty(String(i))?!1:(t[String(i)]=!0,!0))}var ms=/%([-_0^#:]+)?(\d+)?([EO])?(.)/,wt=["January","February","March","April","May","June","July","August","September","October","November","December"],kt=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],vs=wt.map(xt),bs=kt.map(xt),Et={1:"st",2:"nd",3:"rd",default:"th"};function xt(e){return e.slice(0,3)}function ys(e){return[31,_s(e)?29:28,31,30,31,30,31,31,30,31,30,31]}function Tt(e){let t=0;for(let i=0;i<e.getMonth();++i)t+=ys(e)[i];return t+e.getDate()}function At(e,t){const i=Tt(e)+(t-e.getDay()),s=7-new Date(e.getFullYear(),0,1).getDay()+t;return String(Math.floor((i-s)/7)+1)}function _s(e){const t=e.getFullYear();return!!(!(t&3)&&(t%100||t%400===0&&t))}function ws(e){const t=e.getDate().toString(),i=parseInt(t.slice(-1));return Et[i]||Et.default}function ks(e){return parseInt(e.getFullYear().toString().substring(0,2),10)}var Es={d:2,e:2,H:2,I:2,j:3,k:2,l:2,L:3,m:2,M:2,S:2,U:2,W:2},xs={a:" ",A:" ",b:" ",B:" ",c:" ",e:" ",k:" ",l:" ",p:" ",P:" "},$e={a:e=>bs[e.getDay()],A:e=>kt[e.getDay()],b:e=>vs[e.getMonth()],B:e=>wt[e.getMonth()],c:e=>e.toLocaleString(),C:e=>ks(e),d:e=>e.getDate(),e:e=>e.getDate(),H:e=>e.getHours(),I:e=>String(e.getHours()%12||12),j:e=>Tt(e),k:e=>e.getHours(),l:e=>String(e.getHours()%12||12),L:e=>e.getMilliseconds(),m:e=>e.getMonth()+1,M:e=>e.getMinutes(),N:(e,t)=>{const i=Number(t.width)||9,n=String(e.getMilliseconds()).substr(0,i);return ti(n,i,"0")},p:e=>e.getHours()<12?"AM":"PM",P:e=>e.getHours()<12?"am":"pm",q:e=>ws(e),s:e=>Math.round(e.valueOf()/1e3),S:e=>e.getSeconds(),u:e=>e.getDay()||7,U:e=>At(e,0),w:e=>e.getDay(),W:e=>At(e,1),x:e=>e.toLocaleDateString(),X:e=>e.toLocaleTimeString(),y:e=>e.getFullYear().toString().substring(2,4),Y:e=>e.getFullYear(),z:(e,t)=>{const i=Math.abs(e.getTimezoneOffset()),n=Math.floor(i/60),s=i%60;return(e.getTimezoneOffset()>0?"-":"+")+se(n,2,"0")+(t.flags[":"]?":":"")+se(s,2,"0")},t:()=>"	",n:()=>`
`,"%":()=>"%"};$e.h=$e.b;function Ts(e,t){let i="",n=t,s;for(;s=ms.exec(n);)i+=n.slice(0,s.index),n=n.slice(s.index+s[0].length),i+=As(e,s);return i+n}function As(e,t){const[i,n="",s,a,r]=t,l=$e[r];if(!l)return i;const u={};for(const m of n)u[m]=!0;let d=String(l(e,{flags:u,width:s,modifier:a})),o=xs[r]||"0",p=s||Es[r]||0;return u["^"]?d=d.toUpperCase():u["#"]&&(d=ni(d)),u._?o=" ":u[0]&&(o="0"),u["-"]&&(p=0),se(d,p,o)}var Fs=6e4,Ss=new Date().getTimezoneOffset(),Ds=/([zZ]|([+-])(\d{2}):(\d{2}))$/,ie=class extends Date{constructor(e,t){if(e instanceof ie)return e;const i=(Ss-t)*Fs,n=new Date(e).getTime()+i;super(n),this.timezoneOffset=t}getTimezoneOffset(){return this.timezoneOffset}static createDateFixedToTimezone(e){const t=e.match(Ds);if(t&&t[1]==="Z")return new ie(+new Date(e),0);if(t&&t[2]&&t[3]&&t[4]){const[,,i,n,s]=t,a=(i==="+"?-1:1)*(parseInt(n,10)*60+parseInt(s,10));return new ie(+new Date(e),a)}return new Date(e)}};function Cs(e,t){const i=this.context.opts;let n;return e==="now"||e==="today"?n=new Date:ve(e)?n=new Date(e*1e3):I(e)?/^\d+$/.test(e)?n=new Date(+e*1e3):i.preserveTimezones?n=ie.createDateFixedToTimezone(e):n=new Date(e):n=e,Os(n)?(i.hasOwnProperty("timezoneOffset")&&(n=new ie(n,i.timezoneOffset)),Ts(n,t)):e}function Os(e){return e instanceof Date&&!isNaN(e.getTime())}function $s(e,t){return q(e)||I(e)?e.length?e:t:_e(j(e),this.context)?t:e}function qs(e){return JSON.stringify(e)}function Ls(e,t){return A(arguments.length===2,()=>"append expect 2 arguments"),k(e)+k(t)}function Bs(e,t){return A(arguments.length===2,()=>"prepend expect 2 arguments"),k(t)+k(e)}function Ns(e){return k(e).replace(/^\s+/,"")}function Ps(e){return k(e).toLowerCase()}function Rs(e){return k(e).toUpperCase()}function Is(e,t){return k(e).split(String(t)).join("")}function js(e,t){return k(e).replace(String(t),"")}function zs(e){return k(e).replace(/\s+$/,"")}function Us(e,t){return k(e).split(String(t))}function Ms(e){return k(e).trim()}function Hs(e){return k(e).replace(/\n/g,"")}function Vs(e){return e=k(e),e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}function Ys(e,t,i){return k(e).split(String(t)).join(i)}function Js(e,t,i){return k(e).replace(String(t),i)}function Ws(e,t=50,i="..."){return e=k(e),e.length<=t?e:e.substr(0,t-i.length)+i}function Gs(e,t=15,i="..."){const n=e.split(/\s+/);let s=n.slice(0,t).join(" ");return n.length>=t&&(s+=i),s}var Qs=Object.freeze({escape:_t,escapeOnce:zn,newlineToBr:Un,stripHtml:Mn,abs:Hn,atLeast:Vn,atMost:Yn,ceil:Jn,dividedBy:Wn,floor:Gn,minus:Qn,modulo:Zn,times:Xn,round:Kn,plus:es,sortNatural:ts,urlDecode:is,urlEncode:ns,join:ss,last:rs,first:as,reverse:os,sort:ls,size:us,map:cs,compact:ds,concat:hs,slice:ps,where:fs,uniq:gs,date:Cs,Default:$s,json:qs,append:Ls,prepend:Bs,lstrip:Ns,downcase:Ps,upcase:Rs,remove:Is,removeFirst:js,rstrip:zs,split:Us,strip:Ms,stripNewlines:Hs,capitalize:Vs,replace:Ys,replaceFirst:Js,truncate:Ws,truncatewords:Gs}),Zs=class{constructor(){this.impls={}}get(e){const t=this.impls[e];return A(t,()=>`tag "${e}" not found`),t}set(e,t){this.impls[e]=t}},Xs=class{constructor(e,t){this.strictFilters=e,this.liquid=t,this.impls={}}get(e){const t=this.impls[e];return A(t||!this.strictFilters,()=>`undefined filter: ${e}`),t}set(e,t){this.impls[e]=t}create(e,t){return new vt(e,this.get(e),t,this.liquid)}},Ft=class{constructor(e={}){this.options=fi(pi(e)),this.parser=new pn(this),this.renderer=new Oi,this.filters=new Xs(this.options.strictFilters,this),this.tags=new Zs,Me(Pn,(t,i)=>this.registerTag(Je(i),t)),Me(Qs,(t,i)=>this.registerFilter(Je(i),t))}parse(e,t){return this.parser.parse(e,t)}_render(e,t,i){const n=new oe(t,this.options,i);return this.renderer.renderTemplates(e,n)}async render(e,t){return ce(this._render(e,t,!1))}renderSync(e,t){return de(this._render(e,t,!0))}renderToNodeStream(e,t){const i=new oe(t,this.options);return this.renderer.renderTemplatesToNodeStream(e,i)}_parseAndRender(e,t,i){const n=this.parse(e);return this._render(n,t,i)}async parseAndRender(e,t){return ce(this._parseAndRender(e,t,!1))}parseAndRenderSync(e,t){return de(this._parseAndRender(e,t,!0))}_parsePartialFile(e,t,i){return this.parser.parseFile(e,t,M.Partials,i)}_parseLayoutFile(e,t,i){return this.parser.parseFile(e,t,M.Layouts,i)}async parseFile(e){return ce(this.parser.parseFile(e,!1))}parseFileSync(e){return de(this.parser.parseFile(e,!0))}async renderFile(e,t){const i=await this.parseFile(e);return this.render(i,t)}renderFileSync(e,t){const i=this.parseFileSync(e);return this.renderSync(i,t)}async renderFileToNodeStream(e,t){const i=await this.parseFile(e);return this.renderToNodeStream(i,t)}_evalValue(e,t){return new H(e,this).value(t,!1)}async evalValue(e,t){return ce(this._evalValue(e,t))}evalValueSync(e,t){return de(this._evalValue(e,t))}registerFilter(e,t){this.filters.set(e,t)}registerTag(e,t){this.tags.set(e,t)}plugin(e){return e.call(this,Ft)}express(){const e=this;let t=!0;return function(i,n,s){t&&(t=!1,e.options.root.unshift(...re(this.root))),e.renderFile(i,n).then(a=>s(null,a),s)}}},Ks=function(e,t,i){let n=e.getText();if(e.kind===16||e.name&&e.name.match(/^end/))return t;if(e.name&&e.name==="include_cached"&&(n=n.replace(/include_cached/,"include")),i&&e.name&&e.name==="for"&&(n=`${n}{% loop_context ${e.args} %}`),i&&e.name&&(e.name==="assign"||e.name==="local")){let[,s,a]=e.args.match(/^[\r\n\s]*([^=]+?)[\r\n\s]*=[\r\n\s]*([\s\S]+?)[\r\n\s]*$/);n=`${n}<!--bookshop-live context(${s}: (${a}))-->`}if(e.name&&e.name==="bookshop_include"){let s;if(e.name="include",n=n.replace(/bookshop_include[\r\n\s]+(\S+)/,(a,r)=>(s=r,`include _bookshop_include_${r}`)),i){let a=e.args.split(" ");a.shift(),n=`<!--bookshop-live name(${s}) params(${a.join(" ").replace(/\binclude\./g,"")})-->${n}<!--bookshop-live end-->`}}if(e.name&&e.name==="bookshop"){let s;if(e.name="include",n=n.replace(/bookshop[\r\n\s]+(\S+)/,(a,r)=>(s=r,`include _bookshop_${r}`)),i){let a=e.args.split(" ");a.shift(),n=`<!--bookshop-live name(${s}) params(${a.join(" ").replace(/\binclude\./g,"")})-->${n}<!--bookshop-live end-->`}}return e.name&&e.name.match(/^include/)&&(n=n.replace(/=/g,": "),n=n.replace(/\%[\r\n\s]+?include[\r\n\s]+([^"'][^\s]+)/gi,'% include "$1"')),[t.substr(0,e.begin),n,t.substr(e.end)].join("")};function St(e,t){t={isInclude:!1,expandBindSyntax:!0,liveMarkup:!0,...t},e=e.toString(),new T(e).readTopLevelTokens().reverse().forEach(r=>{e=Ks(r,e,t.liveMarkup)});const s=t.isInclude?"{% emulate_jekyll %}":"";return`${t.expandBindSyntax?"{% unbind %}":""}${s}${e}`}var er=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"),tr=function(e){this.registerTag("highlight",{parse:function(t,i){this.lang=t.args.split(" ")[0],this.contents=[];const n=this.liquid.parser.parseStream(i).on("tag:endhighlight",()=>n.stop()).on("template",s=>this.contents.push(s)).on("end",()=>{throw new Error(`tag ${t.raw} not closed`)});n.start()},render:function*(t,i){const s=yield this.liquid.renderer.renderTemplates(this.contents,t);return`<figure class="highlight">
    <pre>
        <code${this.lang?` class="language-${this.lang}" data-lang="${this.lang}"`:""}>
            ${er(s)}
        </code>
    </pre>
</figure>`}})};function ir(e){this.registerFilter("jsonify",t=>JSON.stringify(t))}var nr=qe(Pt());function sr(e){this.registerFilter("slugify",t=>t&&typeof t=="string"?(0,nr.default)(t).toLowerCase():t)}function rr(e){this.registerTag("unbind",{parse:function(t){},render:function(t,i){const n=t.scopes.length-1;return typeof t.scopes[n].bind=="object"&&(t.scopes[n]={...t.scopes[n].bind,...t.scopes[n],bind:null}),""}})}function ar(e){this.registerTag("loop_context",{parse:function(t){this.args=t.args},render:function(t,i){return`<!--bookshop-live context(${this.args.replace(/\binclude\./g,"").replace(/\s+in\s+/,"=").split(" ")[0]}[${t.get(["forloop","index0"])}])-->`}})}var or=qe(Mt());function lr(e){this.registerFilter("markdownify",t=>(0,or.default)(t??""))}function ur(e){this.registerTag("emulate_jekyll",{parse:function(t){},render:function(t,i){const n=t.scopes.length-1;return t.scopes[n]={include:t.scopes[n]},""}})}function cr(e){this.registerTag("local",{parse:function(t){const i=new T(t.args,this.liquid.options.operatorsTrie);this.key=i.readIdentifier().content,i.skipBlank(),A(i.peek()==="=",()=>`illegal token ${t.getText()}`),i.advance(),this.value=i.remaining()},render:function(t){t.scopes[t.scopes.length-1][this.key]=this.liquid.evalValueSync(this.value,t)}})}var dr=e=>function(t){this.registerFilter("relative_url",i=>(i=i||"",i.startsWith("/")&&!i.startsWith("//")?`${e.baseurl||""}${i}`.replace(/\/\//g,"/"):i))},hr=class{constructor(e){e={name:"Jekyll",files:{},...e},this.key="jekyll",this.name=e.name,this.files=e.files,this.plugins=e.plugins||[],this.plugins.push(ir,sr,rr,ur,cr,tr,ar,lr),this.meta={},this.info={},this.plugins.push(dr(this.meta)),this.initializeLiquid(),this.applyLiquidPlugins()}initializeLiquid(){const e=this;this.liquid=new Ft({fs:{readFileSync(t){return"LiquidJS readFileSync unimplemented"},async readFile(t){return await e.retrieveInclude(t)},existsSync(){return!0},async exists(){return!0},resolve(t,i,n){return`${t}${i}`}}})}async retrieveInclude(e){let t;return/_bookshop_include_/.test(e)?t=this.getShared(e.replace(/^.*_bookshop_include_/,"")):/_bookshop_/.test(e)?t=this.getComponent(e.replace(/^.*_bookshop_/,"")):t=this.files?.[e],!t&&t!==""?(console.warn(`[jekyll-engine] No file found for ${e}`),""):St(t,{isInclude:!0})}applyLiquidPlugins(){this.plugins.forEach(e=>{this.liquid.plugin(e)})}getShared(e){const t=`shared/jekyll/${e}.jekyll.html`;return this.files?.[t]}getComponentKey(e){const t=e.split("/").reverse()[0];return`components/${e}/${t}.jekyll.html`}getComponent(e){const t=this.getComponentKey(e);return this.files?.[t]}hasComponent(e){const t=this.getComponentKey(e);return!!this.files?.[t]}resolveComponentType(e){return this.getComponent(e)?"component":this.getShared(e)?"shared":!1}transformData(e){let t=Object.keys(e);return t&&t.length===1&&t[0]==="page"?e:{page:e}}injectInfo(e){for(const t of Object.values(this.info.collections||{}))for(const i of t||[])i.content="Content is not available when live editing";return{site:{...this.info.collections||{},data:this.info.data||{},baseurl:this.meta.baseurl||"",title:this.meta.title||""},...e,env_bookshop_live:!0}}async storeMeta(e={}){this.meta.baseurl=e.baseurl?await this.eval(e.baseurl):void 0,this.meta.title=e.title?await this.eval(e.title):void 0}async storeInfo(e={}){this.info=e}async render(e,t,i,n,s){let a=this.getComponent(t);if(a||(a=this.getShared(t)),!a)return console.warn(`[jekyll-engine] No component found for ${t}`),"";s?.log?.(`Going to render ${t}, with source:`),s?.log?.(a),a=St(a,{}),s?.log?.(`Rewritten the template for ${t} to:`),s?.log?.(a),(!n||typeof n!="object")&&(n={}),i=this.injectInfo({...n,include:i}),e.innerHTML=await this.liquid.parseAndRender(a||"",i),s?.log?.(`Rendered ${t} as:`),s?.log?.(e.innerHTML)}async eval(e,t=[{}]){try{/^\([\s\S]+\)$/.test(e)&&(e=e.replace(/^\(|\)$/g,"")),e=e.replace(/\n/g,"");const i=new oe;i.push(this.injectInfo({})),Array.isArray(t)?t.forEach(r=>i.push(r)):i.push(t);const[,n,s]=e.match(/^(.*?)(?:\[(\d+)\])?$/);let a=await this.liquid.evalValue(n,i);return s&&typeof a=="object"&&!Array.isArray(a)&&(a=Object.entries(a)),s?a?.[s]:a}catch(i){return console.warn(`Error evaluating \`${e}\` in the Jekyll engine`,i.toString()),""}}loader(){}},pr=`<div class="mt-1 {{ include.background }} has-text-centered">
  <div class="columns pt-2 pb-2 is-horizontally-centered">
    <div class="column has-background-{{ include.banner_background }} is-two-thirds">
      <div class="columns">
        <div class="column is-two-thirds">
          <b>{{ include.title }}</b>
          {% if include.content %}
            {% bookshop content bind=include.content %}
          {% endif %}
        </div>

        <div class="column is-flex is-horizontally-centered is-vertically-centered">
          <a class="button is-primary" href="{{ include.call_to_action.url | relative_url }}" target="_blank">
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

  <div class="p-1 has-text-{{ include.title_color }} has-text-centered" id="page-hero-title">
    <h1 class="is-size-1 has-text-weight-bold">
      {{ include.title }}
    </h1>
  </div>
</div>`,mr=gr,vr=`<div class="column is-half">
  <div class="card">
    {% if include.image %}
      <div class="card-image">
        <figure class="image pt-2">
          <img
            style="height: 250px; width: auto;"
            src="{{ include.image | relative_url }}"
            alt="{{ include.name }}">
        </figure>
      </div>
    {% endif %}

    <div class="card-content has-text-centered mb-0">
      <div class="title is-size-5 mb-0">
        {{ include.name }}
      </div>

      {% if include.city %}
        <div>
          <span class="tag is-light mt-1">
            {{ include.city }}
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
  </div>
</div>
`,br=vr,yr=`{% if include.board_elections_in_progress == true %}
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
`,_r=yr,wr=`<div class="fluid-container position-relative">
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
`,kr=wr,Er=`<!-- 15768000 is 6 months in seconds -->
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
      {% if include.full_page %}
        {% include full_page_carousel_content.html higlight=highlight %}
      {% else %}
        <div class="column has-background-white-ter is-flex-container has-text-centered has-text-centered is-fully-centered" style="position: relative; overflow: hidden">
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

            {% if include.call_to_action %}
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
      {% endif %}
    </div>
  </div>
{% endif %}`,xr=Er,Tr=`{% if include.show_container == true %}
  {% assign container_class = 'container content-container content' %}
{% else %}
  {% assign container_class = 'content' %}
{% endif %}
<div class="{{ container_class }} editable" data-cms-source="/component-library/components/content/content.jekyll.html" data-cms-index="0">
  {{ include.content_html }}
</div>
`,Ar=Tr,Fr=`<div class="container content-container">
  <div class="columns">
    {% for highlight in include.highlights %}
      <div class="column">
        <h3 class="is-size-3 mb-0">
          {{ highlight.title }}
        </h3>
        {{ highlight.content_html }}
      </div>
    {% endfor %}
  </div>
</div>
`,Sr=Fr,Dr=`<div class="container divider-container">
  <hr/>
</div>
`,Cr=Dr,Or=`<div class="has-background-white-ter">
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
    {% if include.call_to_action %}
      <a
        class="button is-secondary is-medium mb-1"
        href="{{ include.call_to_action.url }}"
        target="_blank"
      >
        {{ include.call_to_action.text }}
      </a>
    {% endif %}

    {% if include.date %}
      <h4 class="is-size-4">
        <date>
          {% include day_of_week_helper.html date=include.date %}
        </date>
      </h4>

      <h3 class="is-size-3">
        <date class="post-date has-text-centered">
          {% include date_to_string_helper.html date=include.date use_year=true %}
        </date>
      </h3>

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

      {% if include.time %}
        <h4 class="is-size-4">
          <date>
            {{ include.time }}
          </date>
        </h4>
      {% endif %}
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
`,$r=Or,qr=`<form action="{{ include.form_url }}" method="POST">
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

  <div class="control">
    <input class="button is-secondary" type="submit" value="{{ include.submit.text }}">
  </div>
</form>
`,Lr=qr,Br=`<div class="container content-container">
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
`,Nr=Br,Pr=`{% assign current_date = 'now' | date: '%s' | plus: 0 %}
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

        {% if include.date %}
          <date class="post-date">
            {% include date_to_string_helper.html date=include.date use_year=true %}
          </date>
        {% endif %}
        
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
`,Rr=Pr,Ir=`{% assign current_date = 'now' | date: '%s' | plus: 0 %}
{% assign post_date_to_compare = include.date | date: '%s' | plus: 0 %}

<div class="has-background-{{ include.background_color }}">
  <div
    class="container content-container {% if include.show_padding_top == false%}pt-0{% endif %} {% if include.show_padding_bottom == false%}pb-0{% endif %}"
    id="central-title-layout-container"
  >
    <h1 class="is-size-2 is-uppercase has-text-primary has-text-weight-bold has-text-{{ include.title_alignment }}" id="post-title">
      {{ include.title }}
    </h1>

    {% if include.date %}
      <div class="has-text-{{ include.title_alignment }}">
        <date class="post-date">
          {% include date_to_string_helper.html date=include.date use_year=true %}
        </date>
      </div>
    {% endif %}

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
`,jr=Ir,zr=`<div class="container content-container">
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
`,Ur=zr,Mr=`<div class="container content-container">
  <section class="is-medium">
    <div class="pb-2 content page-content">
      <div class="columns">
        {% if include.layout == 'image_right' %}
          <div class="column">
            <div class="content">
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
            <div class="content">
              {{ include.content_html }}
            </div>
          </div>
        {% endif %}
      </div>
    </div>
  </section>
</div>
`,Hr=Mr,Vr=`<span class="c-tag">{{ include.text }}</span>
`,Yr=Vr,Jr=`<article class="tile is-parent is-vertical {% if include.has_children%}pt-0{% endif %}">
  {% if include.has_children %}
    {% for child in include.children %}
      {% bookshop tile bind=child %}
    {% endfor %}
  {% else %}
    <div class="has-background-light p-1">
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
`,Wr=Jr,Gr=`<div class="container content-container">
  <div class="tile is-ancestor">
    {% for tile in include.tiles %}
      {% bookshop tile bind=tile %}
    {% endfor %}
  </div>
</div>
`,Qr=Gr,Zr=`{% comment %}
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
`,Xr=Zr,x={};x["components/banner/banner.jekyll.html"]=fr,x["components/blur_header/blur_header.jekyll.html"]=mr,x["components/board_profile/board_profile.jekyll.html"]=br,x["components/board_profiles/board_profiles.jekyll.html"]=_r,x["components/carousel/carousel.jekyll.html"]=kr,x["components/carousel_item/carousel_item.jekyll.html"]=xr,x["components/content/content.jekyll.html"]=Ar,x["components/content_highlights/content_highlights.jekyll.html"]=Sr,x["components/divider/divider.jekyll.html"]=Cr,x["components/flyer_header/flyer_header.jekyll.html"]=$r,x["components/form/form.jekyll.html"]=Lr,x["components/photo_grid/photo_grid.jekyll.html"]=Nr,x["components/side_by_side_header/side_by_side_header.jekyll.html"]=Rr,x["components/simple_header/simple_header.jekyll.html"]=jr,x["components/split_form_content/split_form_content.jekyll.html"]=Ur,x["components/split_image_content/split_image_content.jekyll.html"]=Hr,x["components/tag/tag.jekyll.html"]=Yr,x["components/tile/tile.jekyll.html"]=Wr,x["components/tiles/tiles.jekyll.html"]=Qr,x["shared/jekyll/page.jekyll.html"]=Xr;var Kr=x,Dt=[],ea=[];Dt.push(new hr({plugins:[],files:Kr,plugins:ea}));var ta=Dt;window.BookshopLive=Kt(ta)})();/*! *****************************************************************************
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
