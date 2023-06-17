(()=>{var Ct=Object.create,he=Object.defineProperty,Ot=Object.getOwnPropertyDescriptor,$t=Object.getOwnPropertyNames,qt=Object.getPrototypeOf,Lt=Object.prototype.hasOwnProperty,Bt=e=>he(e,"__esModule",{value:!0}),$=(e,t)=>function(){return t||(0,e[Object.keys(e)[0]])((t={exports:{}}).exports,t),t.exports},Nt=(e,t,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of $t(t))!Lt.call(e,i)&&i!=="default"&&he(e,i,{get:()=>t[i],enumerable:!(n=Ot(t,i))||n.enumerable});return e},qe=e=>Nt(Bt(he(e!=null?Ct(qt(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),Pt=$({"node_modules/slugify/slugify.js"(e,t){(function(n,i,s){typeof e=="object"?(t.exports=s(),t.exports.default=s()):typeof define=="function"&&define.amd?define(s):i[n]=s()})("slugify",e,function(){var n=JSON.parse(`{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","\xA2":"cent","\xA3":"pound","\xA4":"currency","\xA5":"yen","\xA9":"(c)","\xAA":"a","\xAE":"(r)","\xBA":"o","\xC0":"A","\xC1":"A","\xC2":"A","\xC3":"A","\xC4":"A","\xC5":"A","\xC6":"AE","\xC7":"C","\xC8":"E","\xC9":"E","\xCA":"E","\xCB":"E","\xCC":"I","\xCD":"I","\xCE":"I","\xCF":"I","\xD0":"D","\xD1":"N","\xD2":"O","\xD3":"O","\xD4":"O","\xD5":"O","\xD6":"O","\xD8":"O","\xD9":"U","\xDA":"U","\xDB":"U","\xDC":"U","\xDD":"Y","\xDE":"TH","\xDF":"ss","\xE0":"a","\xE1":"a","\xE2":"a","\xE3":"a","\xE4":"a","\xE5":"a","\xE6":"ae","\xE7":"c","\xE8":"e","\xE9":"e","\xEA":"e","\xEB":"e","\xEC":"i","\xED":"i","\xEE":"i","\xEF":"i","\xF0":"d","\xF1":"n","\xF2":"o","\xF3":"o","\xF4":"o","\xF5":"o","\xF6":"o","\xF8":"o","\xF9":"u","\xFA":"u","\xFB":"u","\xFC":"u","\xFD":"y","\xFE":"th","\xFF":"y","\u0100":"A","\u0101":"a","\u0102":"A","\u0103":"a","\u0104":"A","\u0105":"a","\u0106":"C","\u0107":"c","\u010C":"C","\u010D":"c","\u010E":"D","\u010F":"d","\u0110":"DJ","\u0111":"dj","\u0112":"E","\u0113":"e","\u0116":"E","\u0117":"e","\u0118":"e","\u0119":"e","\u011A":"E","\u011B":"e","\u011E":"G","\u011F":"g","\u0122":"G","\u0123":"g","\u0128":"I","\u0129":"i","\u012A":"i","\u012B":"i","\u012E":"I","\u012F":"i","\u0130":"I","\u0131":"i","\u0136":"k","\u0137":"k","\u013B":"L","\u013C":"l","\u013D":"L","\u013E":"l","\u0141":"L","\u0142":"l","\u0143":"N","\u0144":"n","\u0145":"N","\u0146":"n","\u0147":"N","\u0148":"n","\u014C":"O","\u014D":"o","\u0150":"O","\u0151":"o","\u0152":"OE","\u0153":"oe","\u0154":"R","\u0155":"r","\u0158":"R","\u0159":"r","\u015A":"S","\u015B":"s","\u015E":"S","\u015F":"s","\u0160":"S","\u0161":"s","\u0162":"T","\u0163":"t","\u0164":"T","\u0165":"t","\u0168":"U","\u0169":"u","\u016A":"u","\u016B":"u","\u016E":"U","\u016F":"u","\u0170":"U","\u0171":"u","\u0172":"U","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017A":"z","\u017B":"Z","\u017C":"z","\u017D":"Z","\u017E":"z","\u018F":"E","\u0192":"f","\u01A0":"O","\u01A1":"o","\u01AF":"U","\u01B0":"u","\u01C8":"LJ","\u01C9":"lj","\u01CB":"NJ","\u01CC":"nj","\u0218":"S","\u0219":"s","\u021A":"T","\u021B":"t","\u0259":"e","\u02DA":"o","\u0386":"A","\u0388":"E","\u0389":"H","\u038A":"I","\u038C":"O","\u038E":"Y","\u038F":"W","\u0390":"i","\u0391":"A","\u0392":"B","\u0393":"G","\u0394":"D","\u0395":"E","\u0396":"Z","\u0397":"H","\u0398":"8","\u0399":"I","\u039A":"K","\u039B":"L","\u039C":"M","\u039D":"N","\u039E":"3","\u039F":"O","\u03A0":"P","\u03A1":"R","\u03A3":"S","\u03A4":"T","\u03A5":"Y","\u03A6":"F","\u03A7":"X","\u03A8":"PS","\u03A9":"W","\u03AA":"I","\u03AB":"Y","\u03AC":"a","\u03AD":"e","\u03AE":"h","\u03AF":"i","\u03B0":"y","\u03B1":"a","\u03B2":"b","\u03B3":"g","\u03B4":"d","\u03B5":"e","\u03B6":"z","\u03B7":"h","\u03B8":"8","\u03B9":"i","\u03BA":"k","\u03BB":"l","\u03BC":"m","\u03BD":"n","\u03BE":"3","\u03BF":"o","\u03C0":"p","\u03C1":"r","\u03C2":"s","\u03C3":"s","\u03C4":"t","\u03C5":"y","\u03C6":"f","\u03C7":"x","\u03C8":"ps","\u03C9":"w","\u03CA":"i","\u03CB":"y","\u03CC":"o","\u03CD":"y","\u03CE":"w","\u0401":"Yo","\u0402":"DJ","\u0404":"Ye","\u0406":"I","\u0407":"Yi","\u0408":"J","\u0409":"LJ","\u040A":"NJ","\u040B":"C","\u040F":"DZ","\u0410":"A","\u0411":"B","\u0412":"V","\u0413":"G","\u0414":"D","\u0415":"E","\u0416":"Zh","\u0417":"Z","\u0418":"I","\u0419":"J","\u041A":"K","\u041B":"L","\u041C":"M","\u041D":"N","\u041E":"O","\u041F":"P","\u0420":"R","\u0421":"S","\u0422":"T","\u0423":"U","\u0424":"F","\u0425":"H","\u0426":"C","\u0427":"Ch","\u0428":"Sh","\u0429":"Sh","\u042A":"U","\u042B":"Y","\u042C":"","\u042D":"E","\u042E":"Yu","\u042F":"Ya","\u0430":"a","\u0431":"b","\u0432":"v","\u0433":"g","\u0434":"d","\u0435":"e","\u0436":"zh","\u0437":"z","\u0438":"i","\u0439":"j","\u043A":"k","\u043B":"l","\u043C":"m","\u043D":"n","\u043E":"o","\u043F":"p","\u0440":"r","\u0441":"s","\u0442":"t","\u0443":"u","\u0444":"f","\u0445":"h","\u0446":"c","\u0447":"ch","\u0448":"sh","\u0449":"sh","\u044A":"u","\u044B":"y","\u044C":"","\u044D":"e","\u044E":"yu","\u044F":"ya","\u0451":"yo","\u0452":"dj","\u0454":"ye","\u0456":"i","\u0457":"yi","\u0458":"j","\u0459":"lj","\u045A":"nj","\u045B":"c","\u045D":"u","\u045F":"dz","\u0490":"G","\u0491":"g","\u0492":"GH","\u0493":"gh","\u049A":"KH","\u049B":"kh","\u04A2":"NG","\u04A3":"ng","\u04AE":"UE","\u04AF":"ue","\u04B0":"U","\u04B1":"u","\u04BA":"H","\u04BB":"h","\u04D8":"AE","\u04D9":"ae","\u04E8":"OE","\u04E9":"oe","\u0531":"A","\u0532":"B","\u0533":"G","\u0534":"D","\u0535":"E","\u0536":"Z","\u0537":"E'","\u0538":"Y'","\u0539":"T'","\u053A":"JH","\u053B":"I","\u053C":"L","\u053D":"X","\u053E":"C'","\u053F":"K","\u0540":"H","\u0541":"D'","\u0542":"GH","\u0543":"TW","\u0544":"M","\u0545":"Y","\u0546":"N","\u0547":"SH","\u0549":"CH","\u054A":"P","\u054B":"J","\u054C":"R'","\u054D":"S","\u054E":"V","\u054F":"T","\u0550":"R","\u0551":"C","\u0553":"P'","\u0554":"Q'","\u0555":"O''","\u0556":"F","\u0587":"EV","\u0621":"a","\u0622":"aa","\u0623":"a","\u0624":"u","\u0625":"i","\u0626":"e","\u0627":"a","\u0628":"b","\u0629":"h","\u062A":"t","\u062B":"th","\u062C":"j","\u062D":"h","\u062E":"kh","\u062F":"d","\u0630":"th","\u0631":"r","\u0632":"z","\u0633":"s","\u0634":"sh","\u0635":"s","\u0636":"dh","\u0637":"t","\u0638":"z","\u0639":"a","\u063A":"gh","\u0641":"f","\u0642":"q","\u0643":"k","\u0644":"l","\u0645":"m","\u0646":"n","\u0647":"h","\u0648":"w","\u0649":"a","\u064A":"y","\u064B":"an","\u064C":"on","\u064D":"en","\u064E":"a","\u064F":"u","\u0650":"e","\u0652":"","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u067E":"p","\u0686":"ch","\u0698":"zh","\u06A9":"k","\u06AF":"g","\u06CC":"y","\u06F0":"0","\u06F1":"1","\u06F2":"2","\u06F3":"3","\u06F4":"4","\u06F5":"5","\u06F6":"6","\u06F7":"7","\u06F8":"8","\u06F9":"9","\u0E3F":"baht","\u10D0":"a","\u10D1":"b","\u10D2":"g","\u10D3":"d","\u10D4":"e","\u10D5":"v","\u10D6":"z","\u10D7":"t","\u10D8":"i","\u10D9":"k","\u10DA":"l","\u10DB":"m","\u10DC":"n","\u10DD":"o","\u10DE":"p","\u10DF":"zh","\u10E0":"r","\u10E1":"s","\u10E2":"t","\u10E3":"u","\u10E4":"f","\u10E5":"k","\u10E6":"gh","\u10E7":"q","\u10E8":"sh","\u10E9":"ch","\u10EA":"ts","\u10EB":"dz","\u10EC":"ts","\u10ED":"ch","\u10EE":"kh","\u10EF":"j","\u10F0":"h","\u1E62":"S","\u1E63":"s","\u1E80":"W","\u1E81":"w","\u1E82":"W","\u1E83":"w","\u1E84":"W","\u1E85":"w","\u1E9E":"SS","\u1EA0":"A","\u1EA1":"a","\u1EA2":"A","\u1EA3":"a","\u1EA4":"A","\u1EA5":"a","\u1EA6":"A","\u1EA7":"a","\u1EA8":"A","\u1EA9":"a","\u1EAA":"A","\u1EAB":"a","\u1EAC":"A","\u1EAD":"a","\u1EAE":"A","\u1EAF":"a","\u1EB0":"A","\u1EB1":"a","\u1EB2":"A","\u1EB3":"a","\u1EB4":"A","\u1EB5":"a","\u1EB6":"A","\u1EB7":"a","\u1EB8":"E","\u1EB9":"e","\u1EBA":"E","\u1EBB":"e","\u1EBC":"E","\u1EBD":"e","\u1EBE":"E","\u1EBF":"e","\u1EC0":"E","\u1EC1":"e","\u1EC2":"E","\u1EC3":"e","\u1EC4":"E","\u1EC5":"e","\u1EC6":"E","\u1EC7":"e","\u1EC8":"I","\u1EC9":"i","\u1ECA":"I","\u1ECB":"i","\u1ECC":"O","\u1ECD":"o","\u1ECE":"O","\u1ECF":"o","\u1ED0":"O","\u1ED1":"o","\u1ED2":"O","\u1ED3":"o","\u1ED4":"O","\u1ED5":"o","\u1ED6":"O","\u1ED7":"o","\u1ED8":"O","\u1ED9":"o","\u1EDA":"O","\u1EDB":"o","\u1EDC":"O","\u1EDD":"o","\u1EDE":"O","\u1EDF":"o","\u1EE0":"O","\u1EE1":"o","\u1EE2":"O","\u1EE3":"o","\u1EE4":"U","\u1EE5":"u","\u1EE6":"U","\u1EE7":"u","\u1EE8":"U","\u1EE9":"u","\u1EEA":"U","\u1EEB":"u","\u1EEC":"U","\u1EED":"u","\u1EEE":"U","\u1EEF":"u","\u1EF0":"U","\u1EF1":"u","\u1EF2":"Y","\u1EF3":"y","\u1EF4":"Y","\u1EF5":"y","\u1EF6":"Y","\u1EF7":"y","\u1EF8":"Y","\u1EF9":"y","\u2013":"-","\u2018":"'","\u2019":"'","\u201C":"\\"","\u201D":"\\"","\u201E":"\\"","\u2020":"+","\u2022":"*","\u2026":"...","\u20A0":"ecu","\u20A2":"cruzeiro","\u20A3":"french franc","\u20A4":"lira","\u20A5":"mill","\u20A6":"naira","\u20A7":"peseta","\u20A8":"rupee","\u20A9":"won","\u20AA":"new shequel","\u20AB":"dong","\u20AC":"euro","\u20AD":"kip","\u20AE":"tugrik","\u20AF":"drachma","\u20B0":"penny","\u20B1":"peso","\u20B2":"guarani","\u20B3":"austral","\u20B4":"hryvnia","\u20B5":"cedi","\u20B8":"kazakhstani tenge","\u20B9":"indian rupee","\u20BA":"turkish lira","\u20BD":"russian ruble","\u20BF":"bitcoin","\u2120":"sm","\u2122":"tm","\u2202":"d","\u2206":"delta","\u2211":"sum","\u221E":"infinity","\u2665":"love","\u5143":"yuan","\u5186":"yen","\uFDFC":"rial","\uFEF5":"laa","\uFEF7":"laa","\uFEF9":"lai","\uFEFB":"la"}`),i=JSON.parse('{"bg":{"\u0419":"Y","\u0426":"Ts","\u0429":"Sht","\u042A":"A","\u042C":"Y","\u0439":"y","\u0446":"ts","\u0449":"sht","\u044A":"a","\u044C":"y"},"de":{"\xC4":"AE","\xE4":"ae","\xD6":"OE","\xF6":"oe","\xDC":"UE","\xFC":"ue","\xDF":"ss","%":"prozent","&":"und","|":"oder","\u2211":"summe","\u221E":"unendlich","\u2665":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","\xA2":"centavos","\xA3":"libras","\xA4":"moneda","\u20A3":"francos","\u2211":"suma","\u221E":"infinito","\u2665":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","\xA2":"centime","\xA3":"livre","\xA4":"devise","\u20A3":"franc","\u2211":"somme","\u221E":"infini","\u2665":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","\xA2":"centavo","\u2211":"soma","\xA3":"libra","\u221E":"infinito","\u2665":"amor"},"uk":{"\u0418":"Y","\u0438":"y","\u0419":"Y","\u0439":"y","\u0426":"Ts","\u0446":"ts","\u0425":"Kh","\u0445":"kh","\u0429":"Shch","\u0449":"shch","\u0413":"H","\u0433":"h"},"vi":{"\u0110":"D","\u0111":"d"},"da":{"\xD8":"OE","\xF8":"oe","\xC5":"AA","\xE5":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"st\xF8rre end"},"nb":{"&":"og","\xC5":"AA","\xC6":"AE","\xD8":"OE","\xE5":"aa","\xE6":"ae","\xF8":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","\xC5":"AA","\xC4":"AE","\xD6":"OE","\xE5":"aa","\xE4":"ae","\xF6":"oe"}}');function s(a,r){if(typeof a!="string")throw new Error("slugify: string argument expected");r=typeof r=="string"?{replacement:r}:r||{};var l=i[r.locale]||{},u=r.replacement===void 0?"-":r.replacement,d=r.trim===void 0?!0:r.trim,o=a.normalize().split("").reduce(function(p,m){var c=l[m];return c===void 0&&(c=n[m]),c===void 0&&(c=m),c===u&&(c=" "),p+c.replace(r.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")},"");return r.strict&&(o=o.replace(/[^A-Za-z0-9\s]/g,"")),d&&(o=o.trim()),o=o.replace(/\s+/g,u),r.lower&&(o=o.toLowerCase()),o}return s.extend=function(a){Object.assign(n,a)},s})}}),J=$({"node_modules/kramed/lib/utils.js"(e,t){function n(l,u){return l.replace(u?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function i(l){return l.replace(/&([#\w]+);/g,function(u,d){return d=d.toLowerCase(),d==="colon"?":":d.charAt(0)==="#"?d.charAt(1)==="x"?String.fromCharCode(parseInt(d.substring(2),16)):String.fromCharCode(+d.substring(1)):""})}function s(l,u){return l=l.source,u=u||"",function d(o,p){return o?(p=p.source||p,p=p.replace(/(^|[^\[])\^/g,"$1"),l=l.replace(o,p),d):new RegExp(l,u)}}function a(){}a.exec=a;function r(l){for(var u=1,d,o;u<arguments.length;u++){d=arguments[u];for(o in d)Object.prototype.hasOwnProperty.call(d,o)&&(l[o]=d[o])}return l}t.exports={escape:n,unescape:i,replace:s,noop:a,merge:r}}}),jt=$({"node_modules/kramed/lib/rules/block.js"(e,t){var n=J(),i=n.replace,s=n.merge,a=n.noop,r={newline:/^\n+/,code:/^((?: {4}|\t)[^\n]+\n*)+/,fences:a,yamlHeader:a,hr:/^( *[-*_]){3,} *(?:\n|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n|$)/,nptable:a,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n|$)/,footnote:/^\[\^([^\]]+)\]: ([^\n]+)/,table:a,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def|math))+)\n*/,text:/^[^\n]+/,math:/^ *(\${2,}) *([\s\S]+?)\s*\1 *(?:\n|$)/};r._bullet=/(?:[*+-]|\d+\.)/,r._item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,r._item=i(r._item,"gm")(/bull/g,r._bullet)(),r.list=i(r.list)(/bull/g,r._bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+r.def.source+")")("footnote",r.footnote)(),r.blockquote=i(r.blockquote)("def",r.def)(),r._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:\\/|[^\\w\\s@]*@)\\b",r.html=i(r.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,r._tag)(),r.paragraph=i(r.paragraph)("hr",r.hr)("heading",r.heading)("lheading",r.lheading)("blockquote",r.blockquote)("tag","<"+r._tag)("def",r.def)("math",r.math)(),r.normal=s({},r),r.gfm=s({},r.normal,{fences:/^ *(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n|$)/,paragraph:/^/,yamlHeader:/^ *(?=```)/}),r.gfm.paragraph=i(r.paragraph)("(?!","(?!"+r.gfm.fences.source.replace("\\1","\\2")+"|"+r.list.source.replace("\\1","\\3")+"|")(),r.tables=s({},r.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/}),t.exports=r}}),Le=$({"node_modules/kramed/lib/lex/options.js"(e,t){t.exports={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!1,mathjax:!0}}}),Rt=$({"node_modules/kramed/lib/lex/block.js"(e,t){var n=J(),i=n.noop,s=jt(),a=Le();function r(l){this.tokens=[],this.tokens.links={},this.options=l||a,this.rules=s.normal,this.options.gfm&&(this.options.tables?this.rules=s.tables:this.rules=s.gfm),this.options.mathjax||(this.rules.math=i)}r.rules=s,r.lex=function(l,u){var d=new r(u);return d.lex(l)},r.prototype.lex=function(l){return l=l.replace(/\r\n|\r/g,`
`).replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,`
`),this.token(l,!0)},r.prototype.token=function(o,u,d){for(var o=o.replace(/^ +$/gm,""),p,m,c,y,h,g,v,f,b;o;){if((c=this.rules.newline.exec(o))&&(o=o.substring(c[0].length),c[0].length>1&&this.tokens.push({type:"space"})),c=this.rules.code.exec(o)){o=o.substring(c[0].length),c=c[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?c:c.replace(/\n+$/,"")});continue}if(c=this.rules.fences.exec(o)){o=o.substring(c[0].length),this.tokens.push({type:"code",lang:c[2],text:c[3]});continue}if(c=this.rules.footnote.exec(o)){o=o.substring(c[0].length),this.tokens.push({type:"footnote",refname:c[1],text:c[2]});continue}if(c=this.rules.math.exec(o)){o=o.substring(c[0].length),this.tokens.push({type:"math",text:c[2]});continue}if(c=this.rules.heading.exec(o)){o=o.substring(c[0].length),this.tokens.push({type:"heading",depth:c[1].length,text:c[2]});continue}if(u&&(c=this.rules.nptable.exec(o))){for(o=o.substring(c[0].length),g={type:"table",header:c[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:c[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:c[3].replace(/\n$/,"").split(`
`)},f=0;f<g.align.length;f++)/^ *-+: *$/.test(g.align[f])?g.align[f]="right":/^ *:-+: *$/.test(g.align[f])?g.align[f]="center":/^ *:-+ *$/.test(g.align[f])?g.align[f]="left":g.align[f]=null;for(f=0;f<g.cells.length;f++)g.cells[f]=g.cells[f].split(/ *\| */);this.tokens.push(g);continue}if(c=this.rules.lheading.exec(o)){o=o.substring(c[0].length),this.tokens.push({type:"heading",depth:c[2]==="="?1:2,text:c[1]});continue}if(c=this.rules.hr.exec(o)){o=o.substring(c[0].length),this.tokens.push({type:"hr"});continue}if(c=this.rules.blockquote.exec(o)){o=o.substring(c[0].length),this.tokens.push({type:"blockquote_start"}),c=c[0].replace(/^ *> ?/gm,""),this.token(c,u,!0),this.tokens.push({type:"blockquote_end"});continue}if(c=this.rules.list.exec(o)){for(o=o.substring(c[0].length),y=c[2],this.tokens.push({type:"list_start",ordered:y.length>1}),c=c[0].match(this.rules._item),p=!1,b=c.length,f=0;f<b;f++)g=c[f],v=g.length,g=g.replace(/^ *([*+-]|\d+\.) +/,""),~g.indexOf(`
 `)&&(v-=g.length,g=this.options.pedantic?g.replace(/^ {1,4}/gm,""):g.replace(new RegExp("^ {1,"+v+"}","gm"),"")),this.options.smartLists&&f!==b-1&&(h=s._bullet.exec(c[f+1])[0],y!==h&&!(y.length>1&&h.length>1)&&(o=c.slice(f+1).join(`
`)+o,f=b-1)),m=p||/\n\n(?!\s*$)/.test(g),f!==b-1&&(p=g.charAt(g.length-1)===`
`,m||(m=p)),this.tokens.push({type:m?"loose_item_start":"list_item_start"}),this.token(g,!1,d),this.tokens.push({type:"list_item_end"});this.tokens.push({type:"list_end"});continue}if(c=this.rules.html.exec(o)){o=o.substring(c[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:c[1]==="pre"||c[1]==="script"||c[1]==="style",text:c[0]});continue}if(!d&&u&&(c=this.rules.def.exec(o))){o=o.substring(c[0].length),this.tokens.links[c[1].toLowerCase()]={href:c[2],title:c[3]};continue}if(u&&(c=this.rules.table.exec(o))){for(o=o.substring(c[0].length),g={type:"table",header:c[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:c[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:c[3].replace(/(?: *\| *)?\n$/,"").split(`
`).slice(0)},f=0;f<g.align.length;f++)/^ *-+: *$/.test(g.align[f])?g.align[f]="right":/^ *:-+: *$/.test(g.align[f])?g.align[f]="center":/^ *:-+ *$/.test(g.align[f])?g.align[f]="left":g.align[f]=null;for(f=0;f<g.cells.length;f++)g.cells[f]=g.cells[f].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);this.tokens.push(g);continue}if(u&&(c=this.rules.paragraph.exec(o))){o=o.substring(c[0].length),this.tokens.push({type:"paragraph",text:c[1].charAt(c[1].length-1)===`
`?c[1].slice(0,-1):c[1]});continue}if(c=this.rules.text.exec(o)){o=o.substring(c[0].length),this.tokens.push({type:"text",text:c[0]});continue}if(o)throw new Error("Infinite loop on byte: "+o.charCodeAt(0))}return this.tokens},t.exports=r}}),It=$({"node_modules/kramed/lib/rules/inline.js"(e,t){var n=J(),i=n.replace,s=n.merge,a=n.noop,r={escape:/^\\([\\`*{}\[\]()#$+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:a,html:/^<!--[\s\S]*?-->|^<(\w+(?!:\/|[^\w\s@]*@)\b)*?(?:"[^"]*"|'[^']*'|[^'">])*?>([\s\S]*?)?<\/\1>|^<(\w+(?!:\/|[^\w\s@]*@)\b)(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,reffn:/^!?\[\^(inside)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:a,text:/^[\s\S]+?(?=[\\<!\[_*`$]| {2,}\n|$)/,math:/^\$\$\s*([\s\S]*?[^\$])\s*\$\$(?!\$)/};r._inside=/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/,r._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,r.link=i(r.link)("inside",r._inside)("href",r._href)(),r.reflink=i(r.reflink)("inside",r._inside)(),r.reffn=i(r.reffn)("inside",r._inside)(),r.normal=s({},r),r.pedantic=s({},r.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),r.gfm=s({},r.normal,{escape:i(r.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:i(r.text)("]|","~]|")("|","|https?://|")()}),r.gitbook=s({},r.gfm,{tplvar:/^{{\s*(.*?)\s*(?=}})}}/,tplexpr:/^{%\s*(.*?)\s*(?=%})%}/}),r.gitbook.text=i(r.gfm.text)("~]|","~]|"+r.gitbook.tplvar.source+"|"+r.gitbook.tplexpr.source+"|")(),r.breaks=s({},r.gfm,{br:i(r.br)("{2,}","*")(),text:i(r.gfm.text)("{2,}","*")()}),t.exports=r}}),pe=$({"node_modules/kramed/lib/renderer.js"(e,t){var n=J(),i=n.escape,s=n.unescape,a={langPrefix:"lang-",smartypants:!1,headerPrefix:"",headerAutoId:!0,xhtml:!1};function r(l){this.options=l||a}r.prototype.code=function(l,u,d){if(this.options.highlight){var o=this.options.highlight(l,u);o!=null&&o!==l&&(d=!0,l=o)}return u?'<pre><code class="'+this.options.langPrefix+i(u,!0)+'">'+(d?l:i(l,!0))+`
</code></pre>
`:"<pre><code>"+(d?l:i(l,!0))+`
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
`},r.prototype.link=function(l,u,d){if(this.options.sanitize){try{var o=decodeURIComponent(s(l)).replace(/[^\w:]/g,"").toLowerCase()}catch{return""}if(o.indexOf("javascript:")===0)return""}var p='<a href="'+l+'"';return u&&(p+=' title="'+u+'"'),p+=">"+d+"</a>",p},r.prototype.image=function(l,u,d){var o='<img src="'+l+'" alt="'+d+'"';return u&&(o+=' title="'+u+'"'),o+=this.options.xhtml?"/>":">",o},t.exports=r}}),zt=$({"node_modules/kramed/lib/lex/html_blocks.js"(e,t){"use strict";var n=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","meta","nav","noframes","ol","optgroup","option","p","param","pre","script","section","source","title","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],i=n.reduce(function(a,r){return a[r]=!0,a},{});function s(a){if(!a)return!1;var r=a.toLowerCase();return Boolean(i[r])}t.exports=s}}),Be=$({"node_modules/kramed/lib/lex/inline.js"(e,t){var n=J(),i=n.escape,s=n.noop,a=It(),r=pe(),l=Le(),u=zt();function d(o,p,m){if(this.options=p||l,this.links=o,this.rules=a.normal,this.renderer=m,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.gfm?this.options.breaks?this.rules=a.breaks:this.rules=a.gfm:this.options.pedantic&&(this.rules=a.pedantic),this.options.mathjax||(this.rules.math=s)}d.rules=a,d.output=function(o,p,m){var c=new d(p,m,new r);return c.output(o)},d.prototype.escape=function(o,p){return this.options&&this.options.escape===!1?o:i(o,p)},d.prototype.output=function(o){for(var p="",m,c,y,h;o;){if(h=this.rules.escape.exec(o)){o=o.substring(h[0].length),p+=h[1];continue}if(h=this.rules.autolink.exec(o)){o=o.substring(h[0].length),h[2]==="@"?(c=h[1].charAt(6)===":"?this.mangle(h[1].substring(7)):this.mangle(h[1]),y=this.mangle("mailto:")+c):(c=this.escape(h[1]),y=c),p+=this.renderer.link(y,null,c);continue}if(!this.inLink&&(h=this.rules.url.exec(o))){o=o.substring(h[0].length),c=this.escape(h[1]),y=c,p+=this.renderer.link(y,null,c);continue}if(h=this.rules.html.exec(o)){if(h[1]==="a"&&h[2]&&!this.inLink){p+=h[0].substring(0,h[0].indexOf(h[2])),this.inLink=!0,p+=this.output(h[2]),this.inLink=!1,p+=h[0].substring(h[0].indexOf(h[2])+h[2].length),o=o.substring(h[0].length);continue}if(h[1]&&!u(h[1])&&h[2]){p+=h[0].substring(0,h[0].indexOf(h[2])),p+=this.output(h[2]),p+=h[0].substring(h[0].indexOf(h[2])+h[2].length),o=o.substring(h[0].length);continue}o=o.substring(h[0].length),p+=h[0];continue}if(h=this.rules.link.exec(o)){o=o.substring(h[0].length),this.inLink=!0,p+=this.outputLink(h,{href:h[2],title:h[3]}),this.inLink=!1;continue}if(h=this.rules.reffn.exec(o)){o=o.substring(h[0].length),p+=this.renderer.reffn(h[1]);continue}if((h=this.rules.reflink.exec(o))||(h=this.rules.nolink.exec(o))){if(o=o.substring(h[0].length),m=(h[2]||h[1]).replace(/\s+/g," "),m=this.links[m.toLowerCase()],!m||!m.href){p+=h[0].charAt(0),o=h[0].substring(1)+o;continue}this.inLink=!0,p+=this.outputLink(h,m),this.inLink=!1;continue}if(h=this.rules.strong.exec(o)){o=o.substring(h[0].length),p+=this.renderer.strong(this.output(h[2]||h[1]));continue}if(h=this.rules.em.exec(o)){o=o.substring(h[0].length),p+=this.renderer.em(this.output(h[2]||h[1]));continue}if(h=this.rules.code.exec(o)){o=o.substring(h[0].length),p+=this.renderer.codespan(this.escape(h[2],!0));continue}if(h=this.rules.math.exec(o)){o=o.substring(h[0].length),p+=this.renderer.math(h[1],"math/tex",!1);continue}if(h=this.rules.br.exec(o)){o=o.substring(h[0].length),p+=this.renderer.br();continue}if(h=this.rules.del.exec(o)){o=o.substring(h[0].length),p+=this.renderer.del(this.output(h[1]));continue}if(h=this.rules.text.exec(o)){o=o.substring(h[0].length),p+=this.escape(this.smartypants(h[0]));continue}if(o)throw new Error("Infinite loop on byte: "+o.charCodeAt(0))}return p},d.prototype.outputLink=function(o,p){var m=this.escape(p.href),c=p.title?this.escape(p.title):null;return o[0].charAt(0)!=="!"?this.renderer.link(m,c,this.output(o[1])):this.renderer.image(m,c,this.escape(o[1]))},d.prototype.smartypants=function(o){return this.options.smartypants?o.replace(/--/g,"\u2014").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026"):o},d.prototype.mangle=function(o){for(var p="",m=o.length,c=0,y;c<m;c++)y=o.charCodeAt(c),Math.random()>.5&&(y="x"+y.toString(16)),p+="&#"+y+";";return p},t.exports=d}}),Ut=$({"node_modules/kramed/lib/parser.js"(e,t){var n=pe(),i=Be();function s(a,r){this.tokens=[],this.token=null,this.options=a||null,this.renderer=r||this.options&&this.options.renderer||new n(this.options)}s.parse=function(a,r,l){var u=new s(r,l);return u.parse(a)},s.prototype.parse=function(a){this.inline=new i(a.links,this.options,this.renderer),this.tokens=a.reverse();for(var r="";this.next();)r+=this.tok();return r},s.prototype.next=function(){return this.token=this.tokens.pop()},s.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},s.prototype.parseText=function(){for(var a=this.token.text;this.peek().type==="text";)a+=`
`+this.next().text;return this.inline.output(a)},s.prototype.tok=function(){if(typeof this.token>"u"||!this.token.hasOwnProperty("type"))return"";switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text);case"footnote":return this.renderer.footnote(this.token.refname,this.inline.output(this.token.text));case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"math":return this.renderer.math(this.token.text,"math/tex",!0);case"table":{var a="",r="",l,u,d,o,p;for(d="",l=0;l<this.token.header.length;l++)o={header:!0,align:this.token.align[l]},d+=this.renderer.tablecell(this.inline.output(this.token.header[l]),{header:!0,align:this.token.align[l]});for(a+=this.renderer.tablerow(d),l=0;l<this.token.cells.length;l++){for(u=this.token.cells[l],d="",p=0;p<u.length;p++)d+=this.renderer.tablecell(this.inline.output(u[p]),{header:!1,align:this.token.align[p]});r+=this.renderer.tablerow(d)}return this.renderer.table(a,r)}case"blockquote_start":{for(var r="";this.next().type!=="blockquote_end";)r+=this.tok();return this.renderer.blockquote(r)}case"list_start":{for(var r="",m=this.token.ordered;this.next().type!=="list_end";)r+=this.tok();return this.renderer.list(r,m)}case"list_item_start":{for(var r="";this.next().type!=="list_item_end";)r+=this.token.type==="text"?this.parseText():this.tok();return this.renderer.listitem(r)}case"loose_item_start":{for(var r="";this.next().type!=="list_item_end";)r+=this.tok();return this.renderer.listitem(r)}case"html":return this.renderer.html(this.token.text);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}},t.exports=s}}),Mt=$({"node_modules/kramed/lib/kramed.js"(e,t){var n=J(),i=n.merge,s=Rt(),a=Be(),r=Ut(),l=pe();function u(d,o,p){if(p||typeof o=="function"){p||(p=o,o=null),o=i({},u.defaults,o||{});var m=o.highlight,c,y,h=0;try{c=s.lex(d,o)}catch(v){return p(v)}y=c.length;var g=function(v){if(v)return o.highlight=m,p(v);var f;try{f=r.parse(c,o)}catch(b){v=b}return o.highlight=m,v?p(v):p(null,f)};if(!m||m.length<3||(delete o.highlight,!y))return g();for(;h<c.length;h++)(function(v){return v.type!=="code"?--y||g():m(v.text,v.lang,function(f,b){if(f)return g(f);if(b==null||b===v.text)return--y||g();v.text=b,v.escaped=!0,--y||g()})})(c[h]);return}try{return o&&(o=i({},u.defaults,o)),r.parse(s.lex(d,o),o)}catch(v){if(v.message+=`
Please report this to https://github.com/GitbookIO/kramed.`,(o||u.defaults).silent)return"<p>An error occured:</p><pre>"+escape(v.message+"",!0)+"</pre>";throw v}}u.options=u.setOptions=function(d){return i(u.defaults,d),u},u.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!1,mathjax:!0,silent:!1,highlight:null,langPrefix:"lang-",smartypants:!1,headerPrefix:"",headerAutoId:!0,xhtml:!1,renderer:new l},u.Parser=r,u.parser=r.parse,u.Renderer=l,u.Lexer=s,u.lexer=s.lex,u.InlineLexer=a,u.inlineLexer=a.output,u.parse=u,t.exports=u}}),S={ASSIGN:/:|=/,DELIM:/"|'|`/,ESCAPE:/\\/,SPACE:/\s|\r|\n/,INSCOPE:/\(/,OUTSCOPE:/\)/,INDEX:/\[/,OUTDEX:/\]/},Ht=class{constructor(e){this.input=e,this.stream=e.split(""),this.state="IDENT",this.deps={},this.output=[]}build(){for(;this.stream.length;)this.process(this.stream.shift());return this.process(" "),this.output}process(e){switch(this.state){case"IDENT":return this.processIDENT(e);case"VALUE":return this.processVALUE(e)}}processIDENT(e){if(!(S.SPACE.test(e)&&!this.deps.started)){if(this.deps.identifier=this.deps.identifier||"",this.deps.started=!0,S.ASSIGN.test(e)&&!this.deps.escape){if(!this.deps.identifier)throw new Error("No identifier provided");this.state="VALUE",this.deps={identifier:this.deps.identifier};return}if(S.ESCAPE.test(e)&&!this.deps.escape)return this.deps.escape=!0;this.deps.identifier+=e,this.deps.escape=!1}}processVALUE(e){if(!(S.SPACE.test(e)&&!this.deps.started)){if(this.deps.value=this.deps.value||"",this.deps.started=!0,this.deps.escape){this.deps.value+=e,this.deps.escape=!1;return}if(S.ESCAPE.test(e)){this.deps.escape=!0;return}if(this.deps.value+=e,!this.deps.delim){if(S.DELIM.test(e))return this.deps.delim=new RegExp(e);if(S.INSCOPE.test(e))return this.deps.delim=S.OUTSCOPE;if(S.INDEX.test(e))return this.deps.delim=S.OUTDEX;if(this.deps.delim=S.SPACE,!S.SPACE.test(e))return}if(this.deps.delimDepth&&this.deps.delim.test(e))return this.deps.delimDepth-=1;if(this.deps.delim===S.SPACE&&this.deps.delim.test(e)){this.deps.value=this.deps.value.replace(/.$/,""),this.deps.value=this.deps.value.replace(/^\(\(+(.+)\)+\)$/,"($1)"),this.deps.value=this.deps.value.replace(/^\((\S+)\)$/,"$1"),this.output.push([this.deps.identifier,this.deps.value]),this.state="IDENT",this.deps={};return}if(this.deps.delim.test(e)){this.deps.delim=null;return}this.deps.delim===S.OUTSCOPE&&S.INSCOPE.test(e)&&(this.deps.delimDepth=this.deps.delimDepth||0,this.deps.delimDepth+=1)}}},N={ESCAPE:/\\/,SPACE:/\s|\r|\n/,INSCOPE:/\(/,OUTSCOPE:/\)/,END:/END/},Vt=class{constructor(e){this.input=e,this.stream=e.split(""),this.state="IDENT",this.deps={},this.output={}}build(){for(;this.stream.length;)this.process(this.stream.shift());return this.process("END"),this.output}process(e){switch(this.state){case"IDENT":return this.processIDENT(e);case"VALUE":return this.processVALUE(e)}}processIDENT(e){if(!(N.SPACE.test(e)&&!this.deps.started)){if(this.deps.identifier=this.deps.identifier||"",this.deps.started=!0,N.END.test(e)){this.deps.identifier&&(this.output[this.deps.identifier]=!0);return}if(N.INSCOPE.test(e)&&!this.deps.escape){if(!this.deps.identifier)throw new Error("No identifier provided");this.state="VALUE",this.deps={identifier:this.deps.identifier};return}if(N.ESCAPE.test(e)&&!this.deps.escape)return this.deps.escape=!0;this.deps.identifier+=e,this.deps.escape=!1}}processVALUE(e){if(!(N.SPACE.test(e)&&!this.deps.started)){if(this.deps.value=this.deps.value||"",this.deps.started=!0,this.deps.escape){this.deps.value+=e,this.deps.escape=!1;return}if(N.OUTSCOPE.test(e)&&!this.deps.delimDepth){this.output[this.deps.identifier]=this.deps.value,this.state="IDENT",this.deps={};return}if(N.ESCAPE.test(e)){this.deps.escape=!0;return}this.deps.value+=e,N.INSCOPE.test(e)&&(this.deps.delimDepth=this.deps.delimDepth||0,this.deps.delimDepth+=1),N.OUTSCOPE.test(e)&&this.deps.delimDepth&&(this.deps.delimDepth-=1)}}},Ne=e=>e.replace(/\/[\w-]+\..+$/,"").replace(/\..+$/,""),Z=e=>e?new Ht(e).build():[],Yt=e=>(e.ownerDocument??document).evaluate("//comment()[contains(.,'bookshop-live')]",e,null,XPathResult.ANY_TYPE,null),Jt=e=>new Vt(e.textContent.replace(/^bookshop-live /,"")).build(),Wt=(e,t)=>e&&(e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING)!==0,ie=null;ie="3.4.1";var j=(e,t,n,i)=>{if(typeof t!="string")return;const s=t.replace(/^include\./,"").replace(/\[(\d+)]/g,".$1").split(".");i?.log?.(`Split ${t} info ${JSON.stringify(s)}`);const a=s.shift();if(i?.log?.(`Using base identifier ${a}`),a){const r=fe(a,n);i?.log?.(`Found the existing path ${r}`);const l=r??a;i?.log?.(`Using the prefix ${l}`),n[n.length-1][e]=`${[l,...s].join(".")}`}else{const r=fe(t,n);i?.log?.(`Found the existing path ${r}`);const l=r??t;i?.log?.(`Using the path ${l}`),n[n.length-1][e]=l}i?.log?.(`Stored ${e}: ${n[n.length-1][e]}`)},fe=(e,t)=>{const[n,...i]=e?.split?.(".");if(n)for(let s=t.length-1;s>=0;s--){if(t[s][n])return i.length?`${t[s][n]}.${i.join(".")}`:`${t[s][n]}`;if(t[s]["."]&&t[s]["."]!=="."&&!/^(\$|Params)/.test(e))return`${t[s]["."]}.${e}`}for(let s=t.length-1;s>=0;s--)if(t[s][e])return`${t[s][e]}`;return null},Pe=(e,t)=>typeof t=="string"&&/^\s*['"`]/.test(t)?!1:(typeof t=="string"&&(t=t.replace(/\[(\d+)]/g,".$1").split(".")),e=e[t.shift()],e&&t.length?Pe(e,t):e),Gt=(e,t,n)=>{let i=e.nextSibling;for(;i&&i.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING;){const s=i.nextSibling;i.remove(),i=s}for(;n.childNodes.length;)t.parentNode.insertBefore(n.childNodes[0],t)},ge=async e=>{const{liveInstance:t,documentNode:n,parentPathStack:i,templateBlockHandler:s,isRetry:a,logger:r,processDeepComponents:l=!0}=e,u=[{scope:{}}],d=i||[{}];let o=[],p=[],m={};const c=()=>[t.data,...u.map(v=>v.scope)],y=()=>u[u.length-1],h=Yt(n);let g=h.iterateNext();for(;g;){r?.log?.("Parsing the comment:"),r?.log?.(g.textContent);const v=Jt(g);if(!t.storedMeta){for(const[f,b]of Z(v?.meta)){if(m[f]=b,r?.log?.(`Registered metadata ${f} as ${b}`),f==="version"&&ie){const V=await t.eval(b,c(),r?.nested?.());V!==ie&&console.error([`Your Bookshop SSG plugin is running version ${V}, but @bookshop/live is running version ${ie}.`,"Bookshop follows semantic versioning with regard to your site and components,","but this does not extend to Bookshop packages being compatible with each other across any version jump.",`
Run %cnpx @bookshop/up@latest%c in your root directory to upgrade all Bookshop dependencies.`].join(`
`),"color: #FF4C29; font-family: monospace; font-weight: bold;","color: unset; font-family: unset; font-weight: unset;")}t.storedMeta=!0}await t.storeMeta(m)}for(const[f,b]of Z(v?.context))if(u.length-1==0||l===!0){r?.log?.(`Parsing context ${f}: ${b}`),y().scope[f]=await t.eval(b,c(),r?.nested?.());const x=t.normalize(b,r?.nested?.());typeof x=="object"&&!Array.isArray(x)?Object.values(x).forEach(D=>j(f,D,d,r?.nested?.())):j(f,x,d,r?.nested?.())}else r?.log?.(`Skipping deep context of ${f}: ${b}`);for(const[f,b]of Z(v?.reassign))if(u.length-1==0||l===!0){r?.log?.(`Reassigning ${f} to ${b}`);for(let x=u.length-1;x>=0;x-=1)if(u[x].scope[f]!==void 0){u[x].scope[f]=await t.eval(b,c(),r?.nested?.());break}for(let x=d.length-1;x>=0;x-=1)if(d[x][f]!==void 0){const D=t.normalize(b,r?.nested?.());typeof D=="object"&&!Array.isArray(D)?Object.values(D).forEach(O=>j(f,O,[d[x]])):j(f,D,[d[x]]);break}}else r?.log?.(`Skipping deep reassignment of ${f} to ${b}`);if(v?.end)r?.log?.("Reached the end of a block, handing off to the handler function"),y().endNode=g,await s(u.pop(),r?.nested?.()),d.pop();else if(v.stack){r?.log?.("Stacking a new context");let f={};d.push({}),u.push({pathStack:JSON.parse(JSON.stringify(d)),scope:f})}else if(v.unstack)r?.log?.("Unstacking a context"),u.pop(),d.pop();else if(v&&v?.name==="__bookshop__subsequent")r?.log?.("Stashing parameters for the next bookshop tag"),o.push(g),p=[...p,...Z(v?.params)];else if(v?.name){const f=u.length-1;if(f==0||l===!0){r?.log?.(`Rendering a new component ${v.name}`);let b={};const V=[...p,...Z(v?.params)];d.push({});for(const[x,D]of V)if(x==="bind"){const O=await t.eval(D,c(),r?.nested?.());O&&typeof O=="object"&&(b={...b,...O},Object.keys(O).forEach(Y=>j(Y,`${D}.${Y}`,d)))}else if(x==="."){const O=await t.eval(D,c(),r?.nested?.());O&&typeof O=="object"&&!Array.isArray(O)?b={...b,...O}:b[x]=O;const Y=t.normalize(D,r?.nested?.());typeof Y=="object"&&!Array.isArray(Y)?Object.entries(Y).forEach(([aa,oa])=>j(aa,oa,d)):j(x,Y,d)}else b[x]=await t.eval(D,c(),r?.nested?.()),j(x,D,d);u.push({startNode:g,name:Ne(v?.name),pathStack:JSON.parse(JSON.stringify(d)),scope:b,params:V,stashedNodes:o,depth:f})}else r?.log?.(`Skipping deep render of ${v.name}`),d.push({}),u.push({startNode:g,name:Ne(v?.name),depth:f});p=[],o=[]}try{g=h.iterateNext()}catch{if(r?.log?.("Failed to iterate to the next node."),!a)return r?.log?.("Trying to start again..."),await ge(e)}}},Qt=async(e,t,n)=>{const i=document.implementation.createHTMLDocument(),s=[],a=async({startNode:r,endNode:l,name:u,scope:d,pathStack:o,depth:p,stashedNodes:m},c)=>{if(c?.log?.(`Received a template block to render for ${u}`),p){c?.log?.(`Skipping render for nested component ${u}`);return}if(!(d?.live_render??d?.liveRender??d?._live_render??d?._liveRender??!0)){c?.log?.(`Skipping render for ${u} due to false liverender flag`);return}const h=i.createElement("div");await e.renderElement(u,d,h,c?.nested?.()),c?.log?.(`Rendered ${u} block into an update`),s.push({startNode:r,endNode:l,output:h,pathStack:o,scope:d,name:u,stashedNodes:m})};return n?.log?.("Evaluating templates found in a document"),await ge({liveInstance:e,documentNode:t,templateBlockHandler:a,isRetry:!1,logger:n?.nested?.(),processDeepComponents:!1}),n?.log?.("Completed evaluating the document"),s},je=(e,t,n,i)=>{i?.log?.(`Finding the data binding for ${e}`);const s=t.normalize(e,i?.nested?.());if(typeof s=="object"){for(const l of Object.values(s)){i?.log?.(`'twas an object \u2014 finding the data binding for ${l}'`);let u=je(l,t,n,i?.nested?.());if(u)return u}return null}let a=fe(s,n)??s,r=Pe(t.data,a);if(i?.log?.(`Found the path ${a}, which ${r?"does resolve":"does not resolve"}`),r){let l=a.replace(/^page(\.|$)/,"");return l=l.replace(/^Params(\.|$)/,""),l}},Zt=async(e,t,n,i,s,a,r)=>{r?.log?.("Hydrating data bindings");const l=t.ownerDocument,u=[];t.prepend(i);for(let o of a.reverse())r?.log?.("Adding a stashed node to the top of our document node"),t.prepend(o);t.append(s),l.body.appendChild(t);const d=async(o,p)=>{p?.log?.(`Storing an update for ${o.name}`),u.push(o)};r?.log?.("Evaluating template..."),await ge({liveInstance:e,documentNode:t,pathStack:[{}],templateBlockHandler:d,isRetry:!1,logger:r?.nested?.()});for(let{startNode:o,endNode:p,params:m,pathStack:c,scope:y,name:h}of u){const g=e.resolveComponentType(h)==="component";if(y?.editorLink??y?.editor_link??y?._editorLink??y?._editor_link??y?.dataBinding??y?.data_binding??y?._dataBinding??y?._data_binding??g){let f=null;for(const[,b]of m)if(f=je(b,e,c,r?.nested?.()),f)break;if(f){r?.log?.(`Found the data binding ${f} for ${h}`);let b=o.nextElementSibling;for(;b&&b.compareDocumentPosition(p)&Node.DOCUMENT_POSITION_FOLLOWING;)r?.log?.("Setting data-cms-bind on an element"),b.dataset.cmsBind=`#${f}`,b=b.nextElementSibling}else r?.log?.(`Couldn't find a data binding for ${h}`)}else r?.log?.(`${h} opted out of getting a data binding`)}i.remove(),s.remove();for(let o of a)o.remove();t.remove()},Xt=(e,t,n,i)=>{let s=[],a=[...n.childNodes],r=e.nextSibling;for(;Wt(r,t);)s.push(r),r=r.nextSibling;if(s.length!==a.length){i?.log?.("Trees are different lengths, replacing the entire region en-masse"),Gt(e,t,n);return}i?.log?.("Updating the tree...");for(let l=0;l<s.length;l++)Re(s[l],a[l])},Re=(e,t)=>{if(e.isEqualNode(t))return;if(!e.cloneNode(!1).isEqualNode(t.cloneNode(!1))){e.replaceWith(t);return}if(e.childNodes.length!==t.childNodes.length){e.replaceWith(t);return}const n=[...e.childNodes],i=[...t.childNodes];for(let s=0;s<n.length;s++)Re(n[s],i[s])},Ie=(e=0)=>new Promise(t=>setTimeout(t,e)),Kt=e=>class{constructor(n){this.engines=e,this.elements=[],this.globalData={},this.data={},this.cloudcannonInfo={},this.renderOptions={},this.renderCount=0,this.renderedAt=0,this.shouldRenderAt=null,this.renderFrequency=1e3,this.renderTimeout=null,this.verbose=!1,this.lastLog=Date.now(),this.storedMeta=!1,this.memo={},this.logFn=this.logger(),this.loadedFn=n?.loadedFn;const i=n?.remoteGlobals?.length||0;this.awaitingDataFetches=i+1,n?.remoteGlobals?.forEach(this.fetchGlobalData.bind(this)),this.fetchInfo()}completeRender(){typeof this.loadedFn=="function"&&(this.loadedFn(),this.loadedFn=null),this.renderCount+=1}logger(n=0){return{log:i=>{(this.verbose||typeof window<"u"&&window?.bookshopLiveVerbose)&&console.log(`+${Date.now()-this.lastLog}ms : ${"|  ".repeat(n)}${i}`),this.lastLog=Date.now()},nested:()=>this.logger(n+1)}}async fetchInfo(){try{this.logFn.log("Trying to load /_cloudcannon/info.json");const n=await fetch("/_cloudcannon/info.json");this.cloudcannonInfo=await n.json(),await this.engines[0].storeInfo?.(this.cloudcannonInfo),this.awaitingDataFetches-=1,this.logFn.log("Loaded /_cloudcannon/info.json")}catch{this.awaitingDataFetches-=1,this.logFn.log("\u274C Failed to load /_cloudcannon/info.json")}}async fetchGlobalData(n){try{const s=await(await fetch(n)).json();Object.assign(this.globalData,s),this.awaitingDataFetches-=1}catch{this.awaitingDataFetches-=1}}readElement(n){return{dom:n,originalHTML:n.innerHTML,componentName:n.dataset.bookshopLive,componentPropSource:n.dataset.bookshopProps}}resolveComponentType(n){return this.engines[0].resolveComponentType(n)}async storeMeta(n){await this.engines[0].storeMeta?.(n)}async renderElement(n,i,s,a){try{a?.log?.(`Rendering ${n}`),await this.engines[0].render(s,n,i,{...this.globalData},a?.nested?.()),a?.log?.(`Rendered ${n}`)}catch(r){a?.log?.(`Error rendering ${n}`),console.warn(`Error rendering bookshop component ${n}`,r.toString()),console.warn("This is expected in certain cases, and may not be an issue, especially when deleting or re-ordering components.")}}async eval(n,i,s){const a=`Evaluating ${n} in ${JSON.stringify(i)}`;if(s?.log?.(a),!this.memo[a]){const r=await this.engines[0].eval(n,i,s);this.memo[a]=r}return s?.log?.(`Evaluated to ${JSON.stringify(this.memo[a])}`),this.memo[a]}normalize(n,i){const s=`Normalizing ${n}`;return i?.log?.(s),typeof this.engines[0].normalize=="function"&&(this.memo[s]?n=this.memo[s]:(n=this.engines[0].normalize(n),this.memo[s]=n),i?.log?.(`Normalized to ${typeof n=="object"?"json: "+JSON.stringify(n):n}`)),n}async update(n,i){this.logFn.log("Received new data to update the page with");const s=Date.now();for(typeof this.engines[0].transformData=="function"&&i?.transformData!==!1?(this.data=this.engines[0].transformData(n),this.logFn.log("Transformed the data using the engine's transform function")):this.data=n,this.renderOptions=i;this.awaitingDataFetches>0;)this.logFn.log("Still fetching remote data, waiting for all fetches to complete..."),await Ie(100);if(s-this.renderedAt<this.renderFrequency){const r=this.renderedAt+this.renderFrequency;if(this.shouldRenderAt=r,this.logFn.log(`Throttling this render \u2014 will try to render again in ${r-s}ms`),await Ie(r-s),r!==this.shouldRenderAt)return this.logFn.log("A newer render has schedule itself \u2014 throwing away this render attempt"),!1;this.logFn.log("Now running previously throttled render")}const a=Date.now();return this.shouldRenderAt=null,this.renderedAt=Date.now(),this.logFn.log("Rendering the update"),await this.render(),this.logFn.log(`Done rendering in ${Date.now()-a}ms (${Date.now()-s}ms throttled)`),!0}async render(){const n=typeof window>"u"||typeof window<"u"&&window.CloudCannon?.refreshInterface;this.logFn.log(n?"Editor panels are supported":"Editor panels are not supported");const i={dataBindings:n,...this.renderOptions};typeof window<"u"&&(window.bookshopEditorLinks===!1||window.bookshopDataBindings===!1)&&(i.dataBindings=!1),i.editorLinks===!1&&(i.dataBindings=!1),this.logFn.log(i.dataBindings?"Data bindings are enabled":"Data bindings are disabled"),this.logFn.log("Rendering component updates...");const s=await Qt(this,document,this.logFn.nested());this.logFn.log("Individual component updates have been rendered");for(let{startNode:a,endNode:r,output:l,pathStack:u,stashedNodes:d,name:o}of s)this.logFn.log(`Processing a component update for ${o}`),i.dataBindings&&(this.logFn.log(`Hydrating the data bindings for ${o}`),await Zt(this,l,u,a.cloneNode(),r.cloneNode(),d.map(p=>p.cloneNode()),this.logFn.nested())),this.logFn.log(`Grafting ${o}'s update to the DOM tree`),Xt(a,r,l,this.logFn.nested()),this.logFn.log(`Completed grafting ${o}'s update to the DOM tree`);this.completeRender(),this.logFn.log("Finished rendering")}},W=class{valueOf(){}liquidMethodMissing(e){}},me=function(){return me=Object.assign||function(t){for(var n,i=1,s=arguments.length;i<s;i++){n=arguments[i];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},me.apply(this,arguments)},en=Object.prototype.toString,ze=String.prototype.toLowerCase;function R(e){return typeof e=="string"}function P(e){return typeof e=="function"}function k(e){return e=I(e),R(e)?e:G(e)?"":String(e)}function I(e){return e instanceof W?e.valueOf():e}function ve(e){return typeof e=="number"}function Ue(e){return e&&P(e.toLiquid)?Ue(e.toLiquid()):e}function G(e){return e==null}function q(e){return en.call(e)==="[object Array]"}function Me(e,t){e=e||{};for(const n in e)if(e.hasOwnProperty(n)&&t(e[n],n,e)===!1)break;return e}function be(e){return e[e.length-1]}function He(e){const t=typeof e;return e!==null&&(t==="object"||t==="function")}function Ve(e,t,n=1){const i=[];for(let s=e;s<t;s+=n)i.push(s);return i}function se(e,t,n=" "){return Ye(e,t,n,(i,s)=>s+i)}function tn(e,t,n=" "){return Ye(e,t,n,(i,s)=>i+s)}function Ye(e,t,n,i){e=String(e);let s=t-e.length;for(;s-- >0;)e=i(e,n);return e}function nn(e){return e}function Je(e){return e.replace(/(\w?)([A-Z])/g,(t,n,i)=>(n?n+"_":"")+i.toLowerCase())}function sn(e){return[...e].some(n=>n>="a"&&n<="z")?e.toUpperCase():e.toLowerCase()}function rn(e,t){return e.length>t?e.substr(0,t-3)+"...":e}function We(e,t){return e==null&&t==null?0:e==null?1:t==null||(e=ze.call(e),t=ze.call(t),e<t)?-1:e>t?1:0}var ye=class{constructor(e,t,n,i){this.key=e,this.value=t,this.next=n,this.prev=i}},Ge=class{constructor(e,t=0){this.limit=e,this.size=t,this.cache={},this.head=new ye("HEAD",null,null,null),this.tail=new ye("TAIL",null,null,null),this.head.next=this.tail,this.tail.prev=this.head}write(e,t){if(this.cache[e])this.cache[e].value=t;else{const n=new ye(e,t,this.head.next,this.head);this.head.next.prev=n,this.head.next=n,this.cache[e]=n,this.size++,this.ensureLimit()}}read(e){if(!this.cache[e])return;const{value:t}=this.cache[e];return this.remove(e),this.write(e,t),t}remove(e){const t=this.cache[e];t.prev.next=t.next,t.next.prev=t.prev,delete this.cache[e],this.size--}clear(){this.head.next=this.tail,this.tail.prev=this.head,this.size=0,this.cache={}}ensureLimit(){this.size>this.limit&&this.remove(this.tail.prev.key)}};function an(e,t){const n=document.createElement("base");n.href=e;const i=document.getElementsByTagName("head")[0];i.insertBefore(n,i.firstChild);const s=document.createElement("a");s.href=t;const a=s.href;return i.removeChild(n),a}function Qe(e,t,n){return e.length&&be(e)!=="/"&&(e+="/"),an(e,t).replace(/^(\w+:\/\/[^/]+)(\/[^?]+)/,(s,a,r)=>{const l=r.split("/").pop();return/\.\w+$/.test(l)?s:a+r+n})}async function on(e){return new Promise((t,n)=>{const i=new XMLHttpRequest;i.onload=()=>{i.status>=200&&i.status<300?t(i.responseText):n(new Error(i.statusText))},i.onerror=()=>{n(new Error("An error occurred whilst receiving the response."))},i.open("GET",e),i.send()})}function ln(e){const t=new XMLHttpRequest;if(t.open("GET",e,!1),t.send(),t.status<200||t.status>=300)throw new Error(t.statusText);return t.responseText}async function un(e){return!0}function cn(e){return!0}var dn=Object.freeze({resolve:Qe,readFile:on,readFileSync:ln,exists:un,existsSync:cn});function C(e){return e&&P(e.equals)}function z(e,t){return!_e(e,t)}function _e(e,t){return t.opts.jsTruthy?!e:e===!1||e===void 0||e===null}var Ze={"==":(e,t)=>C(e)?e.equals(t):C(t)?t.equals(e):e===t,"!=":(e,t)=>C(e)?!e.equals(t):C(t)?!t.equals(e):e!==t,">":(e,t)=>C(e)?e.gt(t):C(t)?t.lt(e):e>t,"<":(e,t)=>C(e)?e.lt(t):C(t)?t.gt(e):e<t,">=":(e,t)=>C(e)?e.geq(t):C(t)?t.leq(e):e>=t,"<=":(e,t)=>C(e)?e.leq(t):C(t)?t.geq(e):e<=t,contains:(e,t)=>e&&P(e.indexOf)?e.indexOf(t)>-1:!1,and:(e,t,n)=>z(e,n)&&z(t,n),or:(e,t,n)=>z(e,n)||z(t,n)},_=[0,0,0,0,0,0,0,0,0,20,4,4,4,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,2,8,0,0,0,0,8,0,0,0,64,0,65,0,0,33,33,33,33,33,33,33,33,33,33,0,0,2,2,2,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],we=1,X=4,Xe=8,Ke=16,hn=32,pn=64;_[160]=_[5760]=_[6158]=_[8192]=_[8193]=_[8194]=_[8195]=_[8196]=_[8197]=_[8198]=_[8199]=_[8200]=_[8201]=_[8202]=_[8232]=_[8233]=_[8239]=_[8287]=_[12288]=X;function et(e){const t={};for(const[n,i]of Object.entries(e)){let s=t;for(let a=0;a<n.length;a++){const r=n[a];s[r]=s[r]||{},a===n.length-1&&_[n.charCodeAt(a)]&we&&(s[r].needBoundary=!0),s=s[r]}s.handler=i,s.end=!0}return t}var U={root:["."],layouts:["."],partials:["."],relativeReference:!0,cache:void 0,extname:"",fs:dn,dynamicPartials:!0,jsTruthy:!1,trimTagRight:!1,trimTagLeft:!1,trimOutputRight:!1,trimOutputLeft:!1,greedy:!0,tagDelimiterLeft:"{%",tagDelimiterRight:"%}",outputDelimiterLeft:"{{",outputDelimiterRight:"}}",preserveTimezones:!1,strictFilters:!1,strictVariables:!1,lenientIf:!1,globals:{},keepOutputType:!1,operators:Ze,operatorsTrie:et(Ze)};function fn(e){if(e=e||{},e.hasOwnProperty("root")&&(e.root=re(e.root)),e.hasOwnProperty("partials")&&(e.partials=re(e.partials)),e.hasOwnProperty("layouts")&&(e.layouts=re(e.layouts)),e.hasOwnProperty("cache")){let t;typeof e.cache=="number"?t=e.cache>0?new Ge(e.cache):void 0:typeof e.cache=="object"?t=e.cache:t=e.cache?new Ge(1024):void 0,e.cache=t}return e.hasOwnProperty("operators")&&(e.operatorsTrie=et(e.operators)),e}function gn(e){const t=Object.assign({},U,e);return t.partials===U.partials&&(t.partials=t.root),t.layouts===U.layouts&&(t.layouts=t.root),t}function re(e){let t=[];return q(e)&&(t=e),R(e)&&(t=[e]),t.map(n=>Qe(n,".","")).map(n=>n[n.length-1]!=="/"?n+"/":n)}var ae=class extends Error{constructor(e,t){super(e.message),this.originalError=e,this.token=t,this.context=""}update(){const e=this.originalError;this.context=_n(this.token),this.message=wn(e.message,this.token),this.stack=this.message+`
`+this.context+`
`+this.stack+`
From `+e.stack}},tt=class extends ae{constructor(e,t){super(new Error(e),t),this.name="TokenizationError",super.update()}},mn=class extends ae{constructor(e,t){super(e,t),this.name="ParseError",this.message=e.message,super.update()}},nt=class extends ae{constructor(e,t){super(e,t.token),this.name="RenderError",this.message=e.message,super.update()}static is(e){return e.name==="RenderError"}},vn=class extends ae{constructor(e,t){super(e,t),this.name="UndefinedVariableError",this.message=e.message,super.update()}},bn=class extends Error{constructor(e){super(`undefined variable: ${e}`),this.name="InternalUndefinedVariableError",this.variableName=e}},yn=class extends Error{constructor(e){super(e),this.name="AssertionError",this.message=e+""}};function _n(e){const[t]=e.getPosition(),n=e.input.split(`
`),i=Math.max(t-2,1),s=Math.min(t+3,n.length);return Ve(i,s+1).map(r=>{const l=r===t?">> ":"   ",u=se(String(r),String(s).length),d=n[r-1];return`${l}${u}| ${d}`}).join(`
`)}function wn(e,t){t.file&&(e+=`, file:${t.file}`);const[n,i]=t.getPosition();return e+=`, line:${n}, col:${i}`,e}var oe=class{constructor(e={},t=U,n=!1){this.scopes=[{}],this.registers={},this.sync=n,this.opts=t,this.globals=t.globals,this.environments=e}getRegister(e){return this.registers[e]=this.registers[e]||{}}setRegister(e,t){return this.registers[e]=t}saveRegister(...e){return e.map(t=>[t,this.getRegister(t)])}restoreRegister(e){return e.forEach(([t,n])=>this.setRegister(t,n))}getAll(){return[this.globals,this.environments,...this.scopes].reduce((e,t)=>me(e,t),{})}get(e){const t=this.findScope(e[0]);return this.getFromScope(t,e)}getFromScope(e,t){return typeof t=="string"&&(t=t.split(".")),t.reduce((n,i)=>{if(n=kn(n,i),G(n)&&this.opts.strictVariables)throw new bn(i);return n},e)}push(e){return this.scopes.push(e)}pop(){return this.scopes.pop()}bottom(){return this.scopes[0]}findScope(e){for(let t=this.scopes.length-1;t>=0;t--){const n=this.scopes[t];if(e in n)return n}return e in this.environments?this.environments:this.globals}};function kn(e,t){return G(e)?e:(e=Ue(e),P(e[t])?e[t]():e instanceof W?e.hasOwnProperty(t)?e[t]:e.liquidMethodMissing(t):t==="size"?Tn(e):t==="first"?En(e):t==="last"?xn(e):e[t])}function En(e){return q(e)?e[0]:e.first}function xn(e){return q(e)?e[e.length-1]:e.last}function Tn(e){return q(e)||R(e)?e.length:e.size}var M;(function(e){e.Partials="partials",e.Layouts="layouts",e.Root="root"})(M||(M={}));var An=class{constructor(e){this.options=e}*lookup(e,t,n,i){const{fs:s}=this.options,a=this.options[t];for(const r of this.candidates(e,a,i,t!==M.Root))if(n?s.existsSync(r):yield s.exists(r))return r;throw this.lookupError(e,a)}shouldLoadRelative(e){return this.options.relativeReference&&this.isRelativePath(e)}isRelativePath(e){return e.startsWith("./")||e.startsWith("../")}*candidates(e,t,n,i){const{fs:s,extname:a}=this.options;if(this.shouldLoadRelative(e)&&n){const r=s.resolve(this.dirname(n),e,a);for(const l of t)if(!i||r.startsWith(l)){yield r;return}}for(const r of t){const l=s.resolve(r,e,a);(!i||l.startsWith(r))&&(yield l)}if(s.fallback!==void 0){const r=s.fallback(e);r!==void 0&&(yield r)}}dirname(e){const t=e.split("/");return t.pop(),t.join("/")}lookupError(e,t){const n=new Error("ENOENT");return n.message=`ENOENT: Failed to lookup "${e}" in "${t}"`,n.code="ENOENT",n}},Fn=class{constructor(){this.buffer=""}write(e){this.buffer+=k(e)}},Sn=class{constructor(){throw this.buffer="",this.stream=null,new Error("streaming not supported in browser")}};function le(e){const t={then:n=>n(e),catch:()=>t};return t}function it(e){const t={then:(n,i)=>i?i(e):t,catch:n=>n(e)};return t}function Dn(e){return e&&P(e.then)}function Cn(e){return e&&P(e.next)&&P(e.throw)&&P(e.return)}function ue(e){if(Dn(e))return e;if(Cn(e))return t();return le(e);function t(n){let i;try{i=e.next(n)}catch(s){return it(s)}return i.done?le(i.value):ue(i.value).then(t,s=>{let a;try{a=e.throw(s)}catch(r){return it(r)}return a.done?le(a.value):t(a.value)})}}function ce(e){return Promise.resolve(ue(e))}function de(e){let t;return ue(e).then(n=>(t=n,le(t))).catch(n=>{throw n}),t}var On=class{constructor(){this.buffer=""}write(e){e=I(e),typeof e!="string"&&this.buffer===""?this.buffer=e:this.buffer=k(this.buffer)+k(e)}},$n=class{renderTemplatesToNodeStream(e,t){const n=new Sn;return Promise.resolve().then(()=>ue(this.renderTemplates(e,t,n))).then(()=>n.end(),i=>n.error(i)),n.stream}*renderTemplates(e,t,n){n||(n=t.opts.keepOutputType?new On:new Fn);for(const i of e)try{const s=yield i.render(t,n);if(s&&n.write(s),n.break||n.continue)break}catch(s){throw nt.is(s)?s:new nt(s,i)}return n.buffer}},w;(function(e){e[e.Number=1]="Number",e[e.Literal=2]="Literal",e[e.Tag=4]="Tag",e[e.Output=8]="Output",e[e.HTML=16]="HTML",e[e.Filter=32]="Filter",e[e.Hash=64]="Hash",e[e.PropertyAccess=128]="PropertyAccess",e[e.Word=256]="Word",e[e.Range=512]="Range",e[e.Quoted=1024]="Quoted",e[e.Operator=2048]="Operator",e[e.Delimited=12]="Delimited"})(w||(w={}));function qn(e){return!!(L(e)&w.Delimited)}function st(e){return L(e)===w.Operator}function ke(e){return L(e)===w.HTML}function Ln(e){return L(e)===w.Output}function Ee(e){return L(e)===w.Tag}function rt(e){return L(e)===w.Quoted}function Bn(e){return L(e)===w.Literal}function Nn(e){return L(e)===w.Number}function Pn(e){return L(e)===w.PropertyAccess}function jn(e){return L(e)===w.Word}function Rn(e){return L(e)===w.Range}function L(e){return e?e.kind:-1}var In=class{constructor(e,t){this.handlers={},this.stopRequested=!1,this.tokens=e,this.parseToken=t}on(e,t){return this.handlers[e]=t,this}trigger(e,t){const n=this.handlers[e];return n?(n.call(this,t),!0):!1}start(){this.trigger("start");let e;for(;!this.stopRequested&&(e=this.tokens.shift());){if(this.trigger("token",e)||Ee(e)&&this.trigger(`tag:${e.name}`,e))continue;const t=this.parseToken(e,this.tokens);this.trigger("template",t)}return this.stopRequested||this.trigger("end"),this}stop(){return this.stopRequested=!0,this}},xe=class{constructor(e){this.token=e}};function A(e,t){if(!e){const n=t?t():`expect ${e} to be true`;throw new yn(n)}}var zn=class extends W{equals(e){return G(I(e))}gt(){return!1}geq(){return!1}lt(){return!1}leq(){return!1}valueOf(){return null}},Te=class extends W{equals(e){return e instanceof Te?!1:(e=I(e),R(e)||q(e)?e.length===0:He(e)?Object.keys(e).length===0:!1)}gt(){return!1}geq(){return!1}lt(){return!1}leq(){return!1}valueOf(){return""}},Un=class extends Te{equals(e){return e===!1||G(I(e))?!0:R(e)?/^\s*$/.test(e):super.equals(e)}},at=new zn,ot={true:!0,false:!1,nil:at,null:at,empty:new Te,blank:new Un},Mn=/[\da-fA-F]/,lt=/[0-7]/,ut={b:"\b",f:"\f",n:`
`,r:"\r",t:"	",v:"\v"};function ct(e){const t=e.charCodeAt(0);return t>=97?t-87:t>=65?t-55:t-48}function dt(e){let t="";for(let n=1;n<e.length-1;n++){if(e[n]!=="\\"){t+=e[n];continue}if(ut[e[n+1]]!==void 0)t+=ut[e[++n]];else if(e[n+1]==="u"){let i=0,s=n+2;for(;s<=n+5&&Mn.test(e[s]);)i=i*16+ct(e[s++]);n=s-1,t+=String.fromCharCode(i)}else if(!lt.test(e[n+1]))t+=e[++n];else{let i=n+1,s=0;for(;i<=n+3&&lt.test(e[i]);)s=s*8+ct(e[i++]);n=i-1,t+=String.fromCharCode(s)}}return t}var Hn=class{constructor(e){this.postfix=[...Qn(e)]}*evaluate(e,t){A(e,()=>"unable to evaluate: context not defined");const n=[];for(const i of this.postfix)if(st(i)){const s=yield n.pop(),a=yield n.pop(),r=Jn(e.opts.operators,i,a,s,e);n.push(r)}else n.push(yield F(i,e,t&&this.postfix.length===1));return n[0]}};function F(e,t,n=!1){if(Pn(e))return Vn(e,t,n);if(Rn(e))return Gn(e,t);if(Bn(e))return Wn(e);if(Nn(e))return Yn(e);if(jn(e))return e.getText();if(rt(e))return Ae(e)}function Vn(e,t,n){const i=e.props.map(s=>F(s,t,!1));try{return t.get([e.propertyName,...i])}catch(s){if(n&&s.name==="InternalUndefinedVariableError")return null;throw new vn(s,e)}}function Yn(e){const t=e.whole.content+"."+(e.decimal?e.decimal.content:"");return Number(t)}function Ae(e){return dt(e.getText())}function Jn(e,t,n,i,s){const a=e[t.operator];return a(n,i,s)}function Wn(e){return ot[e.literal]}function Gn(e,t){const n=F(e.lhs,t),i=F(e.rhs,t);return Ve(+n,+i+1)}function*Qn(e){const t=[];for(const n of e)if(st(n)){for(;t.length&&t[t.length-1].getPrecedence()>n.getPrecedence();)yield t.pop();t.push(n)}else yield n;for(;t.length;)yield t.pop()}var B=class{constructor(e,t,n,i,s){this.kind=e,this.input=t,this.begin=n,this.end=i,this.file=s}getText(){return this.input.slice(this.begin,this.end)}getPosition(){let[e,t]=[1,1];for(let n=0;n<this.begin;n++)this.input[n]===`
`?(e++,t=1):t++;return[e,t]}size(){return this.end-this.begin}},ht=class extends B{constructor(e,t,n,i,s,a,r,l){super(e,n,i,s,l),this.trimLeft=!1,this.trimRight=!1,this.content=this.getText();const u=t[0]==="-",d=be(t)==="-";this.content=t.slice(u?1:0,d?-1:t.length).trim(),this.trimLeft=u||a,this.trimRight=d||r}};function Zn(e,t){let n=!1;for(let i=0;i<e.length;i++){const s=e[i];qn(s)&&(!n&&s.trimLeft&&Xn(e[i-1],t.greedy),Ee(s)&&(s.name==="raw"?n=!0:s.name==="endraw"&&(n=!1)),!n&&s.trimRight&&Kn(e[i+1],t.greedy))}}function Xn(e,t){if(!e||!ke(e))return;const n=t?X:Ke;for(;_[e.input.charCodeAt(e.end-1-e.trimRight)]&n;)e.trimRight++}function Kn(e,t){if(!e||!ke(e))return;const n=t?X:Ke;for(;_[e.input.charCodeAt(e.begin+e.trimLeft)]&n;)e.trimLeft++;e.input.charAt(e.begin+e.trimLeft)===`
`&&e.trimLeft++}var ei=class extends B{constructor(e,t){super(w.Number,e.input,e.begin,t?t.end:e.end,e.file),this.whole=e,this.decimal=t}},K=class extends B{constructor(e,t,n,i){super(w.Word,e,t,n,i),this.input=e,this.begin=t,this.end=n,this.file=i,this.content=this.getText()}isNumber(e=!1){const t=e&&_[this.input.charCodeAt(this.begin)]&pn?this.begin+1:this.begin;for(let n=t;n<this.end;n++)if(!(_[this.input.charCodeAt(n)]&hn))return!1;return!0}},ti=class extends B{constructor(e,t,n,i){super(w.Literal,e,t,n,i),this.input=e,this.begin=t,this.end=n,this.file=i,this.literal=this.getText()}},pt={"==":1,"!=":1,">":1,"<":1,">=":1,"<=":1,contains:1,and:0,or:0},ni=class extends B{constructor(e,t,n,i){super(w.Operator,e,t,n,i),this.input=e,this.begin=t,this.end=n,this.file=i,this.operator=this.getText()}getPrecedence(){const e=this.getText();return e in pt?pt[e]:1}},ft=class extends B{constructor(e,t,n){super(w.PropertyAccess,e.input,e.begin,n,e.file),this.variable=e,this.props=t,this.propertyName=this.variable instanceof K?this.variable.getText():dt(this.variable.getText())}},ii=class extends B{constructor(e,t,n,i,s,a){super(w.Filter,n,i,s,a),this.name=e,this.args=t}},si=class extends B{constructor(e,t,n,i,s,a){super(w.Hash,e,t,n,a),this.input=e,this.begin=t,this.end=n,this.name=i,this.value=s,this.file=a}},ri=class extends B{constructor(e,t,n,i){super(w.Quoted,e,t,n,i),this.input=e,this.begin=t,this.end=n,this.file=i}},gt=class extends B{constructor(e,t,n,i){super(w.HTML,e,t,n,i),this.input=e,this.begin=t,this.end=n,this.file=i,this.trimLeft=0,this.trimRight=0}getContent(){return this.input.slice(this.begin+this.trimLeft,this.end-this.trimRight)}},ai=class extends B{constructor(e,t,n,i,s,a){super(w.Range,e,t,n,a),this.input=e,this.begin=t,this.end=n,this.lhs=i,this.rhs=s,this.file=a}},oi=class extends ht{constructor(e,t,n,i,s){const{trimOutputLeft:a,trimOutputRight:r,outputDelimiterLeft:l,outputDelimiterRight:u}=i,d=e.slice(t+l.length,n-u.length);super(w.Output,d,e,t,n,a,r,s)}};function li(e,t,n,i=e.length){let s=n,a=t,r;for(;s[e[a]]&&a<i;)s=s[e[a++]],s.end&&(r=s);return!r||r.needBoundary&&_[e.charCodeAt(a)]&we?-1:a}var T=class{constructor(e,t,n=""){this.input=e,this.trie=t,this.file=n,this.p=0,this.rawBeginAt=-1,this.N=e.length}readExpression(){return new Hn(this.readExpressionTokens())}*readExpressionTokens(){const e=this.readValue();if(e)for(yield e;this.p<this.N;){const t=this.readOperator();if(!t)return;const n=this.readValue();if(!n)return;yield t,yield n}}readOperator(){this.skipBlank();const e=li(this.input,this.p,this.trie,this.p+8);if(e!==-1)return new ni(this.input,this.p,this.p=e,this.file)}readFilters(){const e=[];for(;;){const t=this.readFilter();if(!t)return e;e.push(t)}}readFilter(){if(this.skipBlank(),this.end())return null;A(this.peek()==="|",()=>`unexpected token at ${this.snapshot()}`),this.p++;const e=this.p,t=this.readIdentifier();if(!t.size())return null;const n=[];if(this.skipBlank(),this.peek()===":")do{++this.p;const i=this.readFilterArg();for(i&&n.push(i);this.p<this.N&&this.peek()!==","&&this.peek()!=="|";)++this.p}while(this.peek()===",");return new ii(t.getText(),n,this.input,e,this.p,this.file)}readFilterArg(){const e=this.readValue();if(!e)return;if(this.skipBlank(),this.peek()!==":")return e;++this.p;const t=this.readValue();return[e.getText(),t]}readTopLevelTokens(e=U){const t=[];for(;this.p<this.N;){const n=this.readTopLevelToken(e);t.push(n)}return Zn(t,e),t}readTopLevelToken(e){const{tagDelimiterLeft:t,outputDelimiterLeft:n}=e;return this.rawBeginAt>-1?this.readEndrawOrRawContent(e):this.match(t)?this.readTagToken(e):this.match(n)?this.readOutputToken(e):this.readHTMLToken(e)}readHTMLToken(e){const t=this.p;for(;this.p<this.N;){const{tagDelimiterLeft:n,outputDelimiterLeft:i}=e;if(this.match(n)||this.match(i))break;++this.p}return new gt(this.input,t,this.p,this.file)}readTagToken(e=U){const{file:t,input:n}=this,i=this.p;if(this.readToDelimiter(e.tagDelimiterRight)===-1)throw this.mkError(`tag ${this.snapshot(i)} not closed`,i);const s=new mt(n,i,this.p,e,t);return s.name==="raw"&&(this.rawBeginAt=i),s}readToDelimiter(e){for(;this.p<this.N;){if(this.peekType()&Xe){this.readQuoted();continue}if(++this.p,this.rmatch(e))return this.p}return-1}readOutputToken(e=U){const{file:t,input:n}=this,{outputDelimiterRight:i}=e,s=this.p;if(this.readToDelimiter(i)===-1)throw this.mkError(`output ${this.snapshot(s)} not closed`,s);return new oi(n,s,this.p,e,t)}readEndrawOrRawContent(e){const{tagDelimiterLeft:t,tagDelimiterRight:n}=e,i=this.p;let s=this.readTo(t)-t.length;for(;this.p<this.N;){if(this.readIdentifier().getText()!=="endraw"){s=this.readTo(t)-t.length;continue}for(;this.p<=this.N;){if(this.rmatch(n)){const a=this.p;return i===s?(this.rawBeginAt=-1,new mt(this.input,i,a,e,this.file)):(this.p=s,new gt(this.input,i,s,this.file))}if(this.rmatch(t))break;this.p++}}throw this.mkError(`raw ${this.snapshot(this.rawBeginAt)} not closed`,i)}mkError(e,t){return new tt(e,new K(this.input,t,this.N,this.file))}snapshot(e=this.p){return JSON.stringify(rn(this.input.slice(e),16))}readWord(){return console.warn("Tokenizer#readWord() will be removed, use #readIdentifier instead"),this.readIdentifier()}readIdentifier(){this.skipBlank();const e=this.p;for(;this.peekType()&we;)++this.p;return new K(this.input,e,this.p,this.file)}readHashes(){const e=[];for(;;){const t=this.readHash();if(!t)return e;e.push(t)}}readHash(){this.skipBlank(),this.peek()===","&&++this.p;const e=this.p,t=this.readIdentifier();if(!t.size())return;let n;return this.skipBlank(),this.peek()===":"&&(++this.p,n=this.readValue()),new si(this.input,e,this.p,t,n,this.file)}remaining(){return this.input.slice(this.p)}advance(e=1){this.p+=e}end(){return this.p>=this.N}readTo(e){for(;this.p<this.N;)if(++this.p,this.rmatch(e))return this.p;return-1}readValue(){const e=this.readQuoted()||this.readRange();if(e)return e;if(this.peek()==="["){this.p++;const s=this.readQuoted();return!s||this.peek()!=="]"?void 0:(this.p++,new ft(s,[],this.p))}const t=this.readIdentifier();if(!t.size())return;let n=t.isNumber(!0);const i=[];for(;;)if(this.peek()==="["){n=!1,this.p++;const s=this.readValue()||new K(this.input,this.p,this.p,this.file);this.readTo("]"),i.push(s)}else if(this.peek()==="."&&this.peek(1)!=="."){this.p++;const s=this.readIdentifier();if(!s.size())break;s.isNumber()||(n=!1),i.push(s)}else break;return!i.length&&ot.hasOwnProperty(t.content)?new ti(this.input,t.begin,t.end,this.file):n?new ei(t,i[0]):new ft(t,i,this.p)}readRange(){this.skipBlank();const e=this.p;if(this.peek()!=="(")return;++this.p;const t=this.readValueOrThrow();this.p+=2;const n=this.readValueOrThrow();return++this.p,new ai(this.input,e,this.p,t,n,this.file)}readValueOrThrow(){const e=this.readValue();return A(e,()=>`unexpected token ${this.snapshot()}, value expected`),e}readQuoted(){this.skipBlank();const e=this.p;if(!(this.peekType()&Xe))return;++this.p;let t=!1;for(;this.p<this.N&&(++this.p,!(this.input[this.p-1]===this.input[e]&&!t));)t?t=!1:this.input[this.p-1]==="\\"&&(t=!0);return new ri(this.input,e,this.p,this.file)}readFileName(){const e=this.p;for(;!(this.peekType()&X)&&this.peek()!==","&&this.p<this.N;)this.p++;return new K(this.input,e,this.p,this.file)}match(e){for(let t=0;t<e.length;t++)if(e[t]!==this.input[this.p+t])return!1;return!0}rmatch(e){for(let t=0;t<e.length;t++)if(e[e.length-1-t]!==this.input[this.p-1-t])return!1;return!0}peekType(e=0){return _[this.input.charCodeAt(this.p+e)]}peek(e=0){return this.input[this.p+e]}skipBlank(){for(;this.peekType()&X;)++this.p}},mt=class extends ht{constructor(e,t,n,i,s){const{trimTagLeft:a,trimTagRight:r,tagDelimiterLeft:l,tagDelimiterRight:u}=i,d=e.slice(t+l.length,n-u.length);super(w.Tag,d,e,t,n,a,r,s);const o=new T(this.content,i.operatorsTrie);if(this.name=o.readIdentifier().getText(),!this.name)throw new tt("illegal tag syntax",this);o.skipBlank(),this.args=o.remaining()}},Q=class{constructor(e){this.hash={};const t=new T(e,{});for(const n of t.readHashes())this.hash[n.name.content]=n.value}*render(e){const t={};for(const n of Object.keys(this.hash))t[n]=this.hash[n]===void 0?!0:yield F(this.hash[n],e);return t}};function ui(e){return q(e)}var vt=class{constructor(e,t,n,i){this.name=e,this.impl=t||nn,this.args=n,this.liquid=i}render(e,t){const n=[];for(const i of this.args)ui(i)?n.push([i[0],F(i[1],t)]):n.push(F(i,t));return this.impl.apply({context:t,liquid:this.liquid},[e,...n])}},H=class{constructor(e,t){this.filters=[];const n=new T(e,t.options.operatorsTrie);this.initial=n.readExpression(),this.filters=n.readFilters().map(({name:i,args:s})=>new vt(i,t.filters.get(i),s,t))}*value(e,t){t=t||e.opts.lenientIf&&this.filters.length>0&&this.filters[0].name==="default";let n=yield this.initial.evaluate(e,t);for(const i of this.filters)n=yield i.render(n,e);return n}},ci=class extends xe{constructor(e,t,n){super(e),this.name=e.name;const i=n.tags.get(e.name);this.impl=Object.create(i),this.impl.liquid=n,this.impl.parse&&this.impl.parse(e,t)}*render(e,t){const n=yield new Q(this.token.args).render(e),i=this.impl;if(P(i.render))return yield i.render(e,t,n)}},di=class extends xe{constructor(e,t){super(e),this.value=new H(e.content,t)}*render(e,t){const n=yield this.value.value(e,!1);t.write(n)}},hi=class extends xe{constructor(e){super(e),this.str=e.getContent()}*render(e,t){t.write(this.str)}},pi=class{constructor(e){this.liquid=e,this.cache=this.liquid.options.cache,this.fs=this.liquid.options.fs,this.parseFile=this.cache?this._parseFileCached:this._parseFile,this.loader=new An(this.liquid.options)}parse(e,t){const i=new T(e,this.liquid.options.operatorsTrie,t).readTopLevelTokens(this.liquid.options);return this.parseTokens(i)}parseTokens(e){let t;const n=[];for(;t=e.shift();)n.push(this.parseToken(t,e));return n}parseToken(e,t){try{return Ee(e)?new ci(e,t,this.liquid):Ln(e)?new di(e,this.liquid):new hi(e)}catch(n){throw new mn(n,e)}}parseStream(e){return new In(e,(t,n)=>this.parseToken(t,n))}*_parseFileCached(e,t,n=M.Root,i){const s=this.loader.shouldLoadRelative(e)?i+","+e:n+":"+e;let a=yield this.cache.read(s);return a||(a=yield this._parseFile(e,t,n,i),this.cache.write(s,a),a)}*_parseFile(e,t,n=M.Root,i){const s=yield this.loader.lookup(e,n,t,i);return this.liquid.parse(t?this.fs.readFileSync(s):yield this.fs.readFile(s),s)}},fi={parse:function(e){const t=new T(e.args,this.liquid.options.operatorsTrie);this.key=t.readIdentifier().content,t.skipBlank(),A(t.peek()==="=",()=>`illegal token ${e.getText()}`),t.advance(),this.value=t.remaining()},render:function*(e){e.bottom()[this.key]=yield this.liquid._evalValue(this.value,e)}};function Fe(e){return q(e)?e:R(e)&&e.length>0?[e]:He(e)?Object.keys(e).map(t=>[t,e[t]]):[]}function ee(e){return q(e)?e:[e]}var Se=class extends W{constructor(e,t,n){super(),this.i=0,this.length=e,this.name=`${n}-${t}`}next(){this.i++}index0(){return this.i}index(){return this.i+1}first(){return this.i===0}last(){return this.i===this.length-1}rindex(){return this.length-this.i}rindex0(){return this.length-this.i-1}valueOf(){return JSON.stringify(this)}},bt=["offset","limit","reversed"],gi={type:"block",parse:function(e,t){const n=new T(e.args,this.liquid.options.operatorsTrie),i=n.readIdentifier(),s=n.readIdentifier(),a=n.readValue();A(i.size()&&s.content==="in"&&a,()=>`illegal tag: ${e.getText()}`),this.variable=i.content,this.collection=a,this.hash=new Q(n.remaining()),this.templates=[],this.elseTemplates=[];let r;const l=this.liquid.parser.parseStream(t).on("start",()=>r=this.templates).on("tag:else",()=>r=this.elseTemplates).on("tag:endfor",()=>l.stop()).on("template",u=>r.push(u)).on("end",()=>{throw new Error(`tag ${e.getText()} not closed`)});l.start()},render:function*(e,t){const n=this.liquid.renderer;let i=Fe(yield F(this.collection,e));if(!i.length){yield n.renderTemplates(this.elseTemplates,e,t);return}const s=yield this.hash.render(e);i=(this.liquid.options.orderedFilterParameters?Object.keys(s).filter(l=>bt.includes(l)):bt.filter(l=>s[l]!==void 0)).reduce((l,u)=>u==="offset"?vi(l,s.offset):u==="limit"?bi(l,s.limit):mi(l),i);const r={forloop:new Se(i.length,this.collection.getText(),this.variable)};e.push(r);for(const l of i){if(r[this.variable]=l,yield n.renderTemplates(this.templates,e,t),t.break){t.break=!1;break}t.continue=!1,r.forloop.next()}e.pop()}};function mi(e){return[...e].reverse()}function vi(e,t){return e.slice(t)}function bi(e,t){return e.slice(0,t)}var yi={parse:function(e,t){const n=new T(e.args,this.liquid.options.operatorsTrie);this.variable=_i(n),A(this.variable,()=>`${e.args} not valid identifier`),this.templates=[];const i=this.liquid.parser.parseStream(t);i.on("tag:endcapture",()=>i.stop()).on("template",s=>this.templates.push(s)).on("end",()=>{throw new Error(`tag ${e.getText()} not closed`)}),i.start()},render:function*(e){const n=yield this.liquid.renderer.renderTemplates(this.templates,e);e.bottom()[this.variable]=n}};function _i(e){const t=e.readIdentifier().content;if(t)return t;const n=e.readQuoted();if(n)return Ae(n)}var wi={parse:function(e,t){this.cond=new H(e.args,this.liquid),this.cases=[],this.elseTemplates=[];let n=[];const i=this.liquid.parser.parseStream(t).on("tag:when",s=>{n=[];const a=new T(s.args,this.liquid.options.operatorsTrie);for(;!a.end();){const r=a.readValue();this.cases.push({val:r,templates:n}),a.readTo(",")}}).on("tag:else",()=>n=this.elseTemplates).on("tag:endcase",()=>i.stop()).on("template",s=>n.push(s)).on("end",()=>{throw new Error(`tag ${e.getText()} not closed`)});i.start()},render:function*(e,t){const n=this.liquid.renderer,i=I(yield this.cond.value(e,e.opts.lenientIf));for(const s of this.cases)if(F(s.val,e,e.opts.lenientIf)===i){yield n.renderTemplates(s.templates,e,t);return}yield n.renderTemplates(this.elseTemplates,e,t)}},ki={parse:function(e,t){const n=this.liquid.parser.parseStream(t);n.on("token",i=>{i.name==="endcomment"&&n.stop()}).on("end",()=>{throw new Error(`tag ${e.getText()} not closed`)}),n.start()}},De;(function(e){e[e.OUTPUT=0]="OUTPUT",e[e.STORE=1]="STORE"})(De||(De={}));var te=De,Ei={parseFilePath:Ce,renderFilePath:Oe,parse:function(e){const t=e.args,n=new T(t,this.liquid.options.operatorsTrie);for(this.file=this.parseFilePath(n,this.liquid),this.currentFile=e.file;!n.end();){n.skipBlank();const i=n.p,s=n.readIdentifier();if((s.content==="with"||s.content==="for")&&(n.skipBlank(),n.peek()!==":")){const a=n.readValue();if(a){const r=n.p,l=n.readIdentifier();let u;l.content==="as"?u=n.readIdentifier():n.p=r,this[s.content]={value:a,alias:u&&u.content},n.skipBlank(),n.peek()===","&&n.advance();continue}}n.p=i;break}this.hash=new Q(n.remaining())},render:function*(e,t){const{liquid:n,hash:i}=this,s=yield this.renderFilePath(this.file,e,n);A(s,()=>`illegal filename "${s}"`);const a=new oe({},e.opts,e.sync),r=yield i.render(e);if(this.with){const{value:l,alias:u}=this.with;r[u||s]=F(l,e)}if(a.push(r),this.for){const{value:l,alias:u}=this.for;let d=F(l,e);d=Fe(d),r.forloop=new Se(d.length,l.getText(),u);for(const o of d){r[u]=o;const p=yield n._parsePartialFile(s,a.sync,this.currentFile);yield n.renderer.renderTemplates(p,a,t),r.forloop.next()}}else{const l=yield n._parsePartialFile(s,a.sync,this.currentFile);yield n.renderer.renderTemplates(l,a,t)}}};function Ce(e,t){if(t.options.dynamicPartials){const i=e.readValue();if(i===void 0)throw new TypeError(`illegal argument "${e.input}"`);if(i.getText()==="none")return null;if(rt(i)){const s=t.parse(Ae(i));return s.length===1&&ke(s[0].token)?s[0].token.getContent():s}return i}const n=e.readFileName().getText();return n==="none"?null:n}function Oe(e,t,n){return typeof e=="string"?e:Array.isArray(e)?n.renderer.renderTemplates(e,t):F(e,t)}var xi={parseFilePath:Ce,renderFilePath:Oe,parse:function(e){const t=e.args,n=new T(t,this.liquid.options.operatorsTrie);this.file=this.parseFilePath(n,this.liquid),this.currentFile=e.file;const i=n.p;n.readIdentifier().content==="with"?(n.skipBlank(),n.peek()!==":"?this.withVar=n.readValue():n.p=i):n.p=i,this.hash=new Q(n.remaining())},render:function*(e,t){const{liquid:n,hash:i,withVar:s}=this,{renderer:a}=n,r=yield this.renderFilePath(this.file,e,n);A(r,()=>`illegal filename "${r}"`);const l=e.saveRegister("blocks","blockMode");e.setRegister("blocks",{}),e.setRegister("blockMode",te.OUTPUT);const u=yield i.render(e);s&&(u[r]=F(s,e));const d=yield n._parsePartialFile(r,e.sync,this.currentFile);e.push(u),yield a.renderTemplates(d,e,t),e.pop(),e.restoreRegister(l)}},Ti={parse:function(e){const t=new T(e.args,this.liquid.options.operatorsTrie);this.variable=t.readIdentifier().content},render:function(e,t){const n=e.environments;ve(n[this.variable])||(n[this.variable]=0),t.write(k(--n[this.variable]))}},Ai={parse:function(e){const t=new T(e.args,this.liquid.options.operatorsTrie),n=t.readValue();for(t.skipBlank(),this.candidates=[],n&&(t.peek()===":"?(this.group=n,t.advance()):this.candidates.push(n));!t.end();){const i=t.readValue();i&&this.candidates.push(i),t.readTo(",")}A(this.candidates.length,()=>`empty candidates: ${e.getText()}`)},render:function(e,t){const i=`cycle:${F(this.group,e)}:`+this.candidates.join(","),s=e.getRegister("cycle");let a=s[i];a===void 0&&(a=s[i]=0);const r=this.candidates[a];a=(a+1)%this.candidates.length,s[i]=a;const l=F(r,e);t.write(l)}},Fi={parse:function(e,t){this.branches=[],this.elseTemplates=[];let n;this.liquid.parser.parseStream(t).on("start",()=>this.branches.push({predicate:new H(e.args,this.liquid),templates:n=[]})).on("tag:elsif",i=>this.branches.push({predicate:new H(i.args,this.liquid),templates:n=[]})).on("tag:else",()=>n=this.elseTemplates).on("tag:endif",function(){this.stop()}).on("template",i=>n.push(i)).on("end",()=>{throw new Error(`tag ${e.getText()} not closed`)}).start()},render:function*(e,t){const n=this.liquid.renderer;for(const{predicate:i,templates:s}of this.branches){const a=yield i.value(e,e.opts.lenientIf);if(z(a,e)){yield n.renderTemplates(s,e,t);return}}yield n.renderTemplates(this.elseTemplates,e,t)}},Si={parse:function(e){const t=new T(e.args,this.liquid.options.operatorsTrie);this.variable=t.readIdentifier().content},render:function(e,t){const n=e.environments;ve(n[this.variable])||(n[this.variable]=0);const i=n[this.variable];n[this.variable]++,t.write(k(i))}},Di={parseFilePath:Ce,renderFilePath:Oe,parse:function(e,t){const n=new T(e.args,this.liquid.options.operatorsTrie);this.file=this.parseFilePath(n,this.liquid),this.currentFile=e.file,this.hash=new Q(n.remaining()),this.tpls=this.liquid.parser.parseTokens(t)},render:function*(e,t){const{liquid:n,hash:i,file:s}=this,{renderer:a}=n;if(s===null){e.setRegister("blockMode",te.OUTPUT),yield a.renderTemplates(this.tpls,e,t);return}const r=yield this.renderFilePath(this.file,e,n);A(r,()=>`illegal filename "${r}"`);const l=yield n._parseLayoutFile(r,e.sync,this.currentFile);e.setRegister("blockMode",te.STORE);const u=yield a.renderTemplates(this.tpls,e),d=e.getRegister("blocks");d[""]===void 0&&(d[""]=(o,p)=>p.write(u)),e.setRegister("blockMode",te.OUTPUT),e.push(yield i.render(e)),yield a.renderTemplates(l,e,t),e.pop()}},yt=class extends W{constructor(e=()=>""){super(),this.superBlockRender=e}super(){return this.superBlockRender()}},Ci={parse(e,t){const n=/\w+/.exec(e.args);this.block=n?n[0]:"",this.tpls=[],this.liquid.parser.parseStream(t).on("tag:endblock",function(){this.stop()}).on("template",i=>this.tpls.push(i)).on("end",()=>{throw new Error(`tag ${e.getText()} not closed`)}).start()},*render(e,t){const n=this.getBlockRender(e);e.getRegister("blockMode")===te.STORE?e.getRegister("blocks")[this.block]=n:yield n(new yt,t)},getBlockRender(e){const{liquid:t,tpls:n}=this,i=e.getRegister("blocks")[this.block],s=function*(a,r){e.push({block:a}),yield t.renderer.renderTemplates(n,e,r),e.pop()};return i?(a,r)=>i(new yt(()=>s(a,r)),r):s}},Oi={parse:function(e,t){this.tokens=[];const n=this.liquid.parser.parseStream(t);n.on("token",i=>{i.name==="endraw"?n.stop():this.tokens.push(i)}).on("end",()=>{throw new Error(`tag ${e.getText()} not closed`)}),n.start()},render:function(){return this.tokens.map(e=>e.getText()).join("")}},$i=class extends Se{constructor(e,t,n,i){super(e,n,i),this.length=e,this.cols=t}row(){return Math.floor(this.i/this.cols)+1}col0(){return this.i%this.cols}col(){return this.col0()+1}col_first(){return this.col0()===0}col_last(){return this.col()===this.cols}},qi={parse:function(e,t){const n=new T(e.args,this.liquid.options.operatorsTrie),i=n.readIdentifier();n.skipBlank();const s=n.readIdentifier();A(s&&s.content==="in",()=>`illegal tag: ${e.getText()}`),this.variable=i.content,this.collection=n.readValue(),this.hash=new Q(n.remaining()),this.templates=[];let a;const r=this.liquid.parser.parseStream(t).on("start",()=>a=this.templates).on("tag:endtablerow",()=>r.stop()).on("template",l=>a.push(l)).on("end",()=>{throw new Error(`tag ${e.getText()} not closed`)});r.start()},render:function*(e,t){let n=Fe(yield F(this.collection,e));const i=yield this.hash.render(e),s=i.offset||0,a=i.limit===void 0?n.length:i.limit;n=n.slice(s,s+a);const r=i.cols||n.length,l=this.liquid.renderer,u=new $i(n.length,r,this.collection.getText(),this.variable),d={tablerowloop:u};e.push(d);for(let o=0;o<n.length;o++,u.next())d[this.variable]=n[o],u.col0()===0&&(u.row()!==1&&t.write("</tr>"),t.write(`<tr class="row${u.row()}">`)),t.write(`<td class="col${u.col()}">`),yield l.renderTemplates(this.templates,e,t),t.write("</td>");n.length&&t.write("</tr>"),e.pop()}},Li={parse:function(e,t){this.branches=[],this.elseTemplates=[];let n;this.liquid.parser.parseStream(t).on("start",()=>this.branches.push({predicate:new H(e.args,this.liquid),test:_e,templates:n=[]})).on("tag:elsif",i=>this.branches.push({predicate:new H(i.args,this.liquid),test:z,templates:n=[]})).on("tag:else",()=>n=this.elseTemplates).on("tag:endunless",function(){this.stop()}).on("template",i=>n.push(i)).on("end",()=>{throw new Error(`tag ${e.getText()} not closed`)}).start()},render:function*(e,t){const n=this.liquid.renderer;for(const{predicate:i,test:s,templates:a}of this.branches){const r=yield i.value(e,e.opts.lenientIf);if(s(r,e)){yield n.renderTemplates(a,e,t);return}}yield n.renderTemplates(this.elseTemplates,e,t)}},Bi={render:function(e,t){t.break=!0}},Ni={render:function(e,t){t.continue=!0}},Pi={assign:fi,for:gi,capture:yi,case:wi,comment:ki,include:xi,render:Ei,decrement:Ti,increment:Si,cycle:Ai,if:Fi,layout:Di,block:Ci,raw:Oi,tablerow:qi,unless:Li,break:Bi,continue:Ni},ji={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},Ri={"&amp;":"&","&lt;":"<","&gt;":">","&#34;":'"',"&#39;":"'"};function _t(e){return k(e).replace(/&|<|>|"|'/g,t=>ji[t])}function Ii(e){return String(e).replace(/&(amp|lt|gt|#34|#39);/g,t=>Ri[t])}function zi(e){return _t(Ii(e))}function Ui(e){return e.replace(/\n/g,`<br />
`)}function Mi(e){return e.replace(/<script.*?<\/script>|<!--.*?-->|<style.*?<\/style>|<.*?>/g,"")}var Hi=Math.abs,Vi=Math.max,Yi=Math.min,Ji=Math.ceil,Wi=(e,t)=>e/t,Gi=Math.floor,Qi=(e,t)=>e-t,Zi=(e,t)=>e%t,Xi=(e,t)=>e*t;function Ki(e,t=0){const n=Math.pow(10,t);return Math.round(e*n)/n}function es(e,t){return Number(e)+Number(t)}function ts(e,t){return!e||!e.sort?[]:t!==void 0?[...e].sort((n,i)=>We(n[t],i[t])):[...e].sort(We)}var ns=e=>e.split("+").map(decodeURIComponent).join(" "),is=e=>e.split(" ").map(encodeURIComponent).join("+"),ss=(e,t)=>e.join(t===void 0?" ":t),rs=e=>q(e)?be(e):"",as=e=>q(e)?e[0]:"",os=e=>[...e].reverse();function ls(e,t){const n=i=>t?this.context.getFromScope(i,t.split(".")):i;return ee(e).sort((i,s)=>(i=n(i),s=n(s),i<s?-1:i>s?1:0))}var us=e=>e&&e.length||0;function cs(e,t){return ee(e).map(n=>this.context.getFromScope(n,t.split(".")))}function ds(e){return ee(e).filter(t=>!G(t))}function hs(e,t){return ee(e).concat(t)}function ps(e,t,n=1){return t=t<0?e.length+t:t,e.slice(t,t+n)}function fs(e,t,n){return ee(e).filter(i=>{const s=this.context.getFromScope(i,String(t).split("."));return n===void 0?z(s,this.context):s===n})}function gs(e){const t={};return(e||[]).filter(n=>t.hasOwnProperty(String(n))?!1:(t[String(n)]=!0,!0))}var ms=/%([-_0^#:]+)?(\d+)?([EO])?(.)/,wt=["January","February","March","April","May","June","July","August","September","October","November","December"],kt=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],vs=wt.map(xt),bs=kt.map(xt),Et={1:"st",2:"nd",3:"rd",default:"th"};function xt(e){return e.slice(0,3)}function ys(e){return[31,_s(e)?29:28,31,30,31,30,31,31,30,31,30,31]}function Tt(e){let t=0;for(let n=0;n<e.getMonth();++n)t+=ys(e)[n];return t+e.getDate()}function At(e,t){const n=Tt(e)+(t-e.getDay()),s=7-new Date(e.getFullYear(),0,1).getDay()+t;return String(Math.floor((n-s)/7)+1)}function _s(e){const t=e.getFullYear();return!!(!(t&3)&&(t%100||t%400===0&&t))}function ws(e){const t=e.getDate().toString(),n=parseInt(t.slice(-1));return Et[n]||Et.default}function ks(e){return parseInt(e.getFullYear().toString().substring(0,2),10)}var Es={d:2,e:2,H:2,I:2,j:3,k:2,l:2,L:3,m:2,M:2,S:2,U:2,W:2},xs={a:" ",A:" ",b:" ",B:" ",c:" ",e:" ",k:" ",l:" ",p:" ",P:" "},$e={a:e=>bs[e.getDay()],A:e=>kt[e.getDay()],b:e=>vs[e.getMonth()],B:e=>wt[e.getMonth()],c:e=>e.toLocaleString(),C:e=>ks(e),d:e=>e.getDate(),e:e=>e.getDate(),H:e=>e.getHours(),I:e=>String(e.getHours()%12||12),j:e=>Tt(e),k:e=>e.getHours(),l:e=>String(e.getHours()%12||12),L:e=>e.getMilliseconds(),m:e=>e.getMonth()+1,M:e=>e.getMinutes(),N:(e,t)=>{const n=Number(t.width)||9,i=String(e.getMilliseconds()).substr(0,n);return tn(i,n,"0")},p:e=>e.getHours()<12?"AM":"PM",P:e=>e.getHours()<12?"am":"pm",q:e=>ws(e),s:e=>Math.round(e.valueOf()/1e3),S:e=>e.getSeconds(),u:e=>e.getDay()||7,U:e=>At(e,0),w:e=>e.getDay(),W:e=>At(e,1),x:e=>e.toLocaleDateString(),X:e=>e.toLocaleTimeString(),y:e=>e.getFullYear().toString().substring(2,4),Y:e=>e.getFullYear(),z:(e,t)=>{const n=Math.abs(e.getTimezoneOffset()),i=Math.floor(n/60),s=n%60;return(e.getTimezoneOffset()>0?"-":"+")+se(i,2,"0")+(t.flags[":"]?":":"")+se(s,2,"0")},t:()=>"	",n:()=>`
`,"%":()=>"%"};$e.h=$e.b;function Ts(e,t){let n="",i=t,s;for(;s=ms.exec(i);)n+=i.slice(0,s.index),i=i.slice(s.index+s[0].length),n+=As(e,s);return n+i}function As(e,t){const[n,i="",s,a,r]=t,l=$e[r];if(!l)return n;const u={};for(const m of i)u[m]=!0;let d=String(l(e,{flags:u,width:s,modifier:a})),o=xs[r]||"0",p=s||Es[r]||0;return u["^"]?d=d.toUpperCase():u["#"]&&(d=sn(d)),u._?o=" ":u[0]&&(o="0"),u["-"]&&(p=0),se(d,p,o)}var Fs=6e4,Ss=new Date().getTimezoneOffset(),Ds=/([zZ]|([+-])(\d{2}):(\d{2}))$/,ne=class extends Date{constructor(e,t){if(e instanceof ne)return e;const n=(Ss-t)*Fs,i=new Date(e).getTime()+n;super(i),this.timezoneOffset=t}getTimezoneOffset(){return this.timezoneOffset}static createDateFixedToTimezone(e){const t=e.match(Ds);if(t&&t[1]==="Z")return new ne(+new Date(e),0);if(t&&t[2]&&t[3]&&t[4]){const[,,n,i,s]=t,a=(n==="+"?-1:1)*(parseInt(i,10)*60+parseInt(s,10));return new ne(+new Date(e),a)}return new Date(e)}};function Cs(e,t){const n=this.context.opts;let i;return e==="now"||e==="today"?i=new Date:ve(e)?i=new Date(e*1e3):R(e)?/^\d+$/.test(e)?i=new Date(+e*1e3):n.preserveTimezones?i=ne.createDateFixedToTimezone(e):i=new Date(e):i=e,Os(i)?(n.hasOwnProperty("timezoneOffset")&&(i=new ne(i,n.timezoneOffset)),Ts(i,t)):e}function Os(e){return e instanceof Date&&!isNaN(e.getTime())}function $s(e,t){return q(e)||R(e)?e.length?e:t:_e(I(e),this.context)?t:e}function qs(e){return JSON.stringify(e)}function Ls(e,t){return A(arguments.length===2,()=>"append expect 2 arguments"),k(e)+k(t)}function Bs(e,t){return A(arguments.length===2,()=>"prepend expect 2 arguments"),k(t)+k(e)}function Ns(e){return k(e).replace(/^\s+/,"")}function Ps(e){return k(e).toLowerCase()}function js(e){return k(e).toUpperCase()}function Rs(e,t){return k(e).split(String(t)).join("")}function Is(e,t){return k(e).replace(String(t),"")}function zs(e){return k(e).replace(/\s+$/,"")}function Us(e,t){return k(e).split(String(t))}function Ms(e){return k(e).trim()}function Hs(e){return k(e).replace(/\n/g,"")}function Vs(e){return e=k(e),e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}function Ys(e,t,n){return k(e).split(String(t)).join(n)}function Js(e,t,n){return k(e).replace(String(t),n)}function Ws(e,t=50,n="..."){return e=k(e),e.length<=t?e:e.substr(0,t-n.length)+n}function Gs(e,t=15,n="..."){const i=e.split(/\s+/);let s=i.slice(0,t).join(" ");return i.length>=t&&(s+=n),s}var Qs=Object.freeze({escape:_t,escapeOnce:zi,newlineToBr:Ui,stripHtml:Mi,abs:Hi,atLeast:Vi,atMost:Yi,ceil:Ji,dividedBy:Wi,floor:Gi,minus:Qi,modulo:Zi,times:Xi,round:Ki,plus:es,sortNatural:ts,urlDecode:ns,urlEncode:is,join:ss,last:rs,first:as,reverse:os,sort:ls,size:us,map:cs,compact:ds,concat:hs,slice:ps,where:fs,uniq:gs,date:Cs,Default:$s,json:qs,append:Ls,prepend:Bs,lstrip:Ns,downcase:Ps,upcase:js,remove:Rs,removeFirst:Is,rstrip:zs,split:Us,strip:Ms,stripNewlines:Hs,capitalize:Vs,replace:Ys,replaceFirst:Js,truncate:Ws,truncatewords:Gs}),Zs=class{constructor(){this.impls={}}get(e){const t=this.impls[e];return A(t,()=>`tag "${e}" not found`),t}set(e,t){this.impls[e]=t}},Xs=class{constructor(e,t){this.strictFilters=e,this.liquid=t,this.impls={}}get(e){const t=this.impls[e];return A(t||!this.strictFilters,()=>`undefined filter: ${e}`),t}set(e,t){this.impls[e]=t}create(e,t){return new vt(e,this.get(e),t,this.liquid)}},Ft=class{constructor(e={}){this.options=gn(fn(e)),this.parser=new pi(this),this.renderer=new $n,this.filters=new Xs(this.options.strictFilters,this),this.tags=new Zs,Me(Pi,(t,n)=>this.registerTag(Je(n),t)),Me(Qs,(t,n)=>this.registerFilter(Je(n),t))}parse(e,t){return this.parser.parse(e,t)}_render(e,t,n){const i=new oe(t,this.options,n);return this.renderer.renderTemplates(e,i)}async render(e,t){return ce(this._render(e,t,!1))}renderSync(e,t){return de(this._render(e,t,!0))}renderToNodeStream(e,t){const n=new oe(t,this.options);return this.renderer.renderTemplatesToNodeStream(e,n)}_parseAndRender(e,t,n){const i=this.parse(e);return this._render(i,t,n)}async parseAndRender(e,t){return ce(this._parseAndRender(e,t,!1))}parseAndRenderSync(e,t){return de(this._parseAndRender(e,t,!0))}_parsePartialFile(e,t,n){return this.parser.parseFile(e,t,M.Partials,n)}_parseLayoutFile(e,t,n){return this.parser.parseFile(e,t,M.Layouts,n)}async parseFile(e){return ce(this.parser.parseFile(e,!1))}parseFileSync(e){return de(this.parser.parseFile(e,!0))}async renderFile(e,t){const n=await this.parseFile(e);return this.render(n,t)}renderFileSync(e,t){const n=this.parseFileSync(e);return this.renderSync(n,t)}async renderFileToNodeStream(e,t){const n=await this.parseFile(e);return this.renderToNodeStream(n,t)}_evalValue(e,t){return new H(e,this).value(t,!1)}async evalValue(e,t){return ce(this._evalValue(e,t))}evalValueSync(e,t){return de(this._evalValue(e,t))}registerFilter(e,t){this.filters.set(e,t)}registerTag(e,t){this.tags.set(e,t)}plugin(e){return e.call(this,Ft)}express(){const e=this;let t=!0;return function(n,i,s){t&&(t=!1,e.options.root.unshift(...re(this.root))),e.renderFile(n,i).then(a=>s(null,a),s)}}},Ks=function(e,t,n){let i=e.getText();if(e.kind===16||e.name&&e.name.match(/^end/))return t;if(e.name&&e.name==="include_cached"&&(i=i.replace(/include_cached/,"include")),n&&e.name&&e.name==="for"&&(i=`${i}{% loop_context ${e.args} %}`),n&&e.name&&(e.name==="assign"||e.name==="local")){let[,s,a]=e.args.match(/^[\r\n\s]*([^=]+?)[\r\n\s]*=[\r\n\s]*([\s\S]+?)[\r\n\s]*$/);i=`${i}<!--bookshop-live context(${s}: (${a}))-->`}if(e.name&&e.name==="bookshop_include"){let s;if(e.name="include",i=i.replace(/bookshop_include[\r\n\s]+(\S+)/,(a,r)=>(s=r,`include _bookshop_include_${r}`)),n){let a=e.args.split(" ");a.shift(),i=`<!--bookshop-live name(${s}) params(${a.join(" ").replace(/\binclude\./g,"")})-->${i}<!--bookshop-live end-->`}}if(e.name&&e.name==="bookshop"){let s;if(e.name="include",i=i.replace(/bookshop[\r\n\s]+(\S+)/,(a,r)=>(s=r,`include _bookshop_${r}`)),n){let a=e.args.split(" ");a.shift(),i=`<!--bookshop-live name(${s}) params(${a.join(" ").replace(/\binclude\./g,"")})-->${i}<!--bookshop-live end-->`}}return e.name&&e.name.match(/^include/)&&(i=i.replace(/=/g,": "),i=i.replace(/\%[\r\n\s]+?include[\r\n\s]+([^"'][^\s]+)/gi,'% include "$1"')),[t.substr(0,e.begin),i,t.substr(e.end)].join("")};function St(e,t){t={isInclude:!1,expandBindSyntax:!0,liveMarkup:!0,...t},e=e.toString(),new T(e).readTopLevelTokens().reverse().forEach(r=>{e=Ks(r,e,t.liveMarkup)});const s=t.isInclude?"{% emulate_jekyll %}":"";return`${t.expandBindSyntax?"{% unbind %}":""}${s}${e}`}var er=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"),tr=function(e){this.registerTag("highlight",{parse:function(t,n){this.lang=t.args.split(" ")[0],this.contents=[];const i=this.liquid.parser.parseStream(n).on("tag:endhighlight",()=>i.stop()).on("template",s=>this.contents.push(s)).on("end",()=>{throw new Error(`tag ${t.raw} not closed`)});i.start()},render:function*(t,n){const s=yield this.liquid.renderer.renderTemplates(this.contents,t);return`<figure class="highlight">
    <pre>
        <code${this.lang?` class="language-${this.lang}" data-lang="${this.lang}"`:""}>
            ${er(s)}
        </code>
    </pre>
</figure>`}})};function nr(e){this.registerFilter("jsonify",t=>JSON.stringify(t))}var ir=qe(Pt());function sr(e){this.registerFilter("slugify",t=>t&&typeof t=="string"?(0,ir.default)(t).toLowerCase():t)}function rr(e){this.registerTag("unbind",{parse:function(t){},render:function(t,n){const i=t.scopes.length-1;return typeof t.scopes[i].bind=="object"&&(t.scopes[i]={...t.scopes[i].bind,...t.scopes[i],bind:null}),""}})}function ar(e){this.registerTag("loop_context",{parse:function(t){this.args=t.args},render:function(t,n){return`<!--bookshop-live context(${this.args.replace(/\binclude\./g,"").replace(/\s+in\s+/,"=").split(" ")[0]}[${t.get(["forloop","index0"])}])-->`}})}var or=qe(Mt());function lr(e){this.registerFilter("markdownify",t=>(0,or.default)(t??""))}function ur(e){this.registerTag("emulate_jekyll",{parse:function(t){},render:function(t,n){const i=t.scopes.length-1;return t.scopes[i]={include:t.scopes[i]},""}})}function cr(e){this.registerTag("local",{parse:function(t){const n=new T(t.args,this.liquid.options.operatorsTrie);this.key=n.readIdentifier().content,n.skipBlank(),A(n.peek()==="=",()=>`illegal token ${t.getText()}`),n.advance(),this.value=n.remaining()},render:function(t){t.scopes[t.scopes.length-1][this.key]=this.liquid.evalValueSync(this.value,t)}})}var dr=e=>function(t){this.registerFilter("relative_url",n=>(n=n||"",n.startsWith("/")&&!n.startsWith("//")?`${e.baseurl||""}${n}`.replace(/\/\//g,"/"):n))},hr=class{constructor(e){e={name:"Jekyll",files:{},...e},this.key="jekyll",this.name=e.name,this.files=e.files,this.plugins=e.plugins||[],this.plugins.push(nr,sr,rr,ur,cr,tr,ar,lr),this.meta={},this.info={},this.plugins.push(dr(this.meta)),this.initializeLiquid(),this.applyLiquidPlugins()}initializeLiquid(){const e=this;this.liquid=new Ft({fs:{readFileSync(t){return"LiquidJS readFileSync unimplemented"},async readFile(t){return await e.retrieveInclude(t)},existsSync(){return!0},async exists(){return!0},resolve(t,n,i){return`${t}${n}`}}})}async retrieveInclude(e){let t;return/_bookshop_include_/.test(e)?t=this.getShared(e.replace(/^.*_bookshop_include_/,"")):/_bookshop_/.test(e)?t=this.getComponent(e.replace(/^.*_bookshop_/,"")):t=this.files?.[e],!t&&t!==""?(console.warn(`[jekyll-engine] No file found for ${e}`),""):St(t,{isInclude:!0})}applyLiquidPlugins(){this.plugins.forEach(e=>{this.liquid.plugin(e)})}getShared(e){const t=`shared/jekyll/${e}.jekyll.html`;return this.files?.[t]}getComponentKey(e){const t=e.split("/").reverse()[0];return`components/${e}/${t}.jekyll.html`}getComponent(e){const t=this.getComponentKey(e);return this.files?.[t]}hasComponent(e){const t=this.getComponentKey(e);return!!this.files?.[t]}resolveComponentType(e){return this.getComponent(e)?"component":this.getShared(e)?"shared":!1}transformData(e){let t=Object.keys(e);return t&&t.length===1&&t[0]==="page"?e:{page:e}}injectInfo(e){for(const t of Object.values(this.info.collections||{}))for(const n of t||[])n.content="Content is not available when live editing";return{site:{...this.info.collections||{},data:this.info.data||{},baseurl:this.meta.baseurl||"",title:this.meta.title||""},...e,env_bookshop_live:!0}}async storeMeta(e={}){this.meta.baseurl=e.baseurl?await this.eval(e.baseurl):void 0,this.meta.title=e.title?await this.eval(e.title):void 0}async storeInfo(e={}){this.info=e}async render(e,t,n,i,s){let a=this.getComponent(t);if(a||(a=this.getShared(t)),!a)return console.warn(`[jekyll-engine] No component found for ${t}`),"";s?.log?.(`Going to render ${t}, with source:`),s?.log?.(a),a=St(a,{}),s?.log?.(`Rewritten the template for ${t} to:`),s?.log?.(a),(!i||typeof i!="object")&&(i={}),n=this.injectInfo({...i,include:n}),e.innerHTML=await this.liquid.parseAndRender(a||"",n),s?.log?.(`Rendered ${t} as:`),s?.log?.(e.innerHTML)}async eval(e,t=[{}]){try{/^\([\s\S]+\)$/.test(e)&&(e=e.replace(/^\(|\)$/g,"")),e=e.replace(/\n/g,"");const n=new oe;n.push(this.injectInfo({})),Array.isArray(t)?t.forEach(r=>n.push(r)):n.push(t);const[,i,s]=e.match(/^(.*?)(?:\[(\d+)\])?$/);let a=await this.liquid.evalValue(i,n);return s&&typeof a=="object"&&!Array.isArray(a)&&(a=Object.entries(a)),s?a?.[s]:a}catch(n){return console.warn(`Error evaluating \`${e}\` in the Jekyll engine`,n.toString()),""}}loader(){}},pr=`<div class="mt-1 {{ include.background }} has-text-centered">
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
      <div class="is-flex-container is-fully-centered">
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
`,br=vr,yr=`<div class="container content-container">
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
{% endif %}`,xr=Er,Tr=`<div class="column {{ include.column_size }}">
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
<div class="{{ container_class }} editable" data-cms-source="/component-library/components/content/content.jekyll.html" data-cms-index="0">
  {{ include.content_html }}
</div>
`,Cr=Dr,Or=`<div class="container content-container">
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
`,$r=Or,qr=`<div class="container divider-container">
  <hr/>
</div>
`,Lr=qr,Br=`<div class="has-background-white-ter">
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
`,Nr=Br,Pr=`<form action="{{ include.form_url }}" method="POST">
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
`,jr=Pr,Rr=`<div class="container content-container">
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
`,Ir=Rr,zr=`{% assign current_date = 'now' | date: '%s' | plus: 0 %}
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
`,Ur=zr,Mr=`{% assign current_date = 'now' | date: '%s' | plus: 0 %}
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
`,Hr=Mr,Vr=`<div class="container content-container">
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
`,Yr=Vr,Jr=`<div class="container content-container">
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
`,Wr=Jr,Gr=`<span class="c-tag">{{ include.text }}</span>
`,Qr=Gr,Zr=`<article class="tile is-parent is-vertical {% if include.has_children%}pt-0{% endif %}">
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
`,Xr=Zr,Kr=`<div class="container content-container">
  <div class="tile is-ancestor">
    {% for tile in include.tiles %}
      {% bookshop tile bind=tile %}
    {% endfor %}
  </div>
</div>
`,ea=Kr,ta=`{% comment %}
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
`,na=ta,E={};E["components/banner/banner.jekyll.html"]=fr,E["components/blur_header/blur_header.jekyll.html"]=mr,E["components/board_profile/board_profile.jekyll.html"]=br,E["components/board_profiles/board_profiles.jekyll.html"]=_r,E["components/carousel/carousel.jekyll.html"]=kr,E["components/carousel_item/carousel_item.jekyll.html"]=xr,E["components/collaborator_group/collaborator_group.jekyll.html"]=Ar,E["components/collaborators/collaborators.jekyll.html"]=Sr,E["components/content/content.jekyll.html"]=Cr,E["components/content_highlights/content_highlights.jekyll.html"]=$r,E["components/divider/divider.jekyll.html"]=Lr,E["components/flyer_header/flyer_header.jekyll.html"]=Nr,E["components/form/form.jekyll.html"]=jr,E["components/photo_grid/photo_grid.jekyll.html"]=Ir,E["components/side_by_side_header/side_by_side_header.jekyll.html"]=Ur,E["components/simple_header/simple_header.jekyll.html"]=Hr,E["components/split_form_content/split_form_content.jekyll.html"]=Yr,E["components/split_image_content/split_image_content.jekyll.html"]=Wr,E["components/tag/tag.jekyll.html"]=Qr,E["components/tile/tile.jekyll.html"]=Xr,E["components/tiles/tiles.jekyll.html"]=ea,E["shared/jekyll/page.jekyll.html"]=na;var ia=E,Dt=[],sa=[];Dt.push(new hr({plugins:[],files:ia,plugins:sa}));var ra=Dt;window.BookshopLive=Kt(ra)})();/*! *****************************************************************************
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
