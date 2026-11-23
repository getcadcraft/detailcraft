---
title: 0.9 တွင် အသစ်များ (ယခင်)
summary: UK Blue Book သံမဏိအရွယ်အစားများနှင့် မညီသော angle များ၊ PDF တစ်စုတည်းတွင် အပိုင်းတိုင်းအတွက် shop drawing များ၊ စိတ်ကြိုက် profile အတွက် My profiles၊ P-Delta နှင့် natural frequency များ၊ ASCE 7 လေဝင်ဝန်များ၊ seismic site နှင့် combination များ၊ Follow ဖြင့် တိုက်ရိုက် cursor များ။
keywords: 0.9 အသစ်များ, ယခင် ဗားရှင်း, အသစ်များ, what's new, ထုတ်ပြန်ချက် မှတ်တမ်း, changelog, 0.9, uk steel, blue book, ub, uc, pfc, shs, rhs, chs, unequal angle, shop drawing, shop drawings, sheet set, part mark, pdf, my profiles, custom profile, p-delta, second order, natural frequency, finite elements, modal mass, wind load, asce 7, seismic, site class, usgs, load combinations, lrfd, asd, live, cursors, follow, people, tooltips, whats new, changelog, changes, 0.8, 0.8.1, version, new features, erection, crane, load chart, movie, autopilot, connections, rebar, congestion, foundation, footing, mat, settlement, framing, timber, light-gauge, cut list, constructability, weld access, supplier, stock, lead time, what breaks first, live, concrete, seismic, slab, languages, assistant
from: ab0c7f05
---

ဤသည်မှာ 0.8.1 နှင့် နှိုင်းယှဉ်လျှင် DetailCraft 0.9 တွင် ပြောင်းလဲချက်များ ဖြစ်သည်။ 0.9 တွင် UK သံမဏိ အရွယ်အစားများ၊ အပိုင်းတိုင်းအတွက် shop drawing တစ်ခုတည်းနှင့် frame များအတွက် ပိုကြီးသော {{ui:Analysis}} tab နှင့် အတူ ပူးပေါင်းလုပ်ဆောင်သည့်အခါ တစ်ဦးနှင့်တစ်ဦး cursor များကို မြင်နိုင်ခြင်း ပါဝင်သည်။

## အသစ်

### UK သံမဏိနှင့် shop drawing များ

- **UK သံမဏိ အရွယ်အစားများ။** profile စာရင်းများတွင် Steel for Life Blue Book မှ အရွယ်အစား 976 ခု ပါဝင်သည်- UB၊ UC၊ PFC၊ EA၊ UEA၊ CHS၊ SHS နှင့် RHS၊ cold-formed hollow section များကို (အမည်များသည် CF ဖြင့် စတင်သည်) သီးခြားထားသည်။ အမည်များကို မိသားစုအရင်ဖြင့် ရေးသည်၊ ဥပမာ UB305x165x40 သို့မဟုတ် SHS100x100x5.0၊ ဒီဇိုင်းဆွဲချက်များက ပြောသည့်ပုံစံဖြင့် ရိုက်ထည့်လျှင်လည်း အလုပ်ဖြစ်သည်- 305x165x40 UB၊ L100x100x10၊ SHS100x5။ [Profile catalog](topic:profile-catalog) ကို ကြည့်ပါ။
- **မညီသော angle များ။** UEA angle များသည် IFC ထည့်သွင်း/ထုတ်ယူမှုနှင့် NC ဖိုင်များတွင် ခြေထောက်နှစ်ဖက်စလုံးကို ထိန်းထားပြီး mirror က အစိတ်အပိုင်းကို အဆုံးမှ အဆုံးသို့ လှည့်ပေးသည်။
- **shop drawing အားလုံး တစ်ပြိုင်တည်း။** အစိတ်အပိုင်း မရွေးထားချိန်တွင် {{ui:Output}} အုပ်စုမှ {{ui:Shop drawing}} ကို ရွေးပါ။ ဝင်းဒိုးက part mark အားလုံးကို စာရင်းပြုစုပြီး မည်သည့်တစ်ခုကိုမဆို ကြိုကြည့်နိုင်သည်၊ {{ui:Download all}} သည် mark တစ်ခုလျှင် စာမျက်နှာတစ်ခုပါသော PDF တစ်ခုကို သိမ်းပေးပြီး စာမျက်နှာတိုင်းကို "Sheet 3 of 42" ဟု ခေါင်းစဉ်တပ်သည်။ {{ui:Download this sheet}} သည် သင်ကြည့်နေသော တစ်ခုကို သိမ်းသည်။ channel၊ angle နှင့် hollow section များလည်း ယခု sheet ရကြသည်။ [Make shop drawings](topic:shop-drawings) ကို ကြည့်ပါ။
- **My profiles။** စိတ်ကြိုက် profile ကို မော်ဒယ်အသစ်တိုင်းအတွက် သိမ်းထားနိုင်ပြီဖြစ်သည်။ Custom profile form တွင် {{ui:Keep in My profiles}} ကို ရွေးထားပါ၊ အောက်ရှိ {{ui:My profiles}} စာရင်းတွင် {{ui:Keep}}၊ {{ui:Use here}} နှင့် {{ui:Remove}} ရှိသည်။ စာရင်းကို ဤဘရောက်ဆာတွင် သိမ်းထားသည် (200 အထိ)၊ သင့်အကောင့်တွင် မဟုတ်ပါ။ [Plates and profiles](topic:plates-and-profiles) ကို ကြည့်ပါ။

### ခွဲခြမ်းစိတ်ဖြာမှု

- **ဒုတိယအဆင့် (P-Delta)။** {{ui:Analysis}} tab ရှိ Run ဘေးရှိ {{ui:Second order (P-Delta)}} ကို ရွေးလျှင် axial force များသည် ရွှေ့သွားသော frame ပေါ်တွင် လုပ်ဆောင်သည်။ plate နှင့် rigid floor များသည် ပထမအဆင့်တွင် ဆက်နေပြီး သတိပေးချက်ပါသည်။ [Forces, reactions and deflections](topic:frame-analysis) ကို ကြည့်ပါ။
- **Natural frequency များ။** ရလဒ်များအောက်ရှိ {{ui:Finite elements: natural frequencies}} block သည် မော်ဒယ်တူညီ၏ အနိမ့်ဆုံး mode များကို period နှင့် effective modal mass ဖြင့် ရှာပြီး mode တစ်ခုကို မော်ဒယ်ပေါ်တွင် ပြသည်။ [Forces, reactions and deflections](topic:frame-analysis) ကို ကြည့်ပါ။
- **လေဝင်ဝန်များနှင့် seismic site။** {{ui:Analysis}} tab တွင် block သုံးခုအသစ်- {{ui:Wind loads (ASCE 7 directional procedure)}}၊ {{ui:Seismic site and system (ASCE 7)}} နှင့် {{ui:ASCE 7 load combinations}}။ [Wind, seismic site and ASCE 7 combinations](topic:wind-seismic-combinations) ကို ကြည့်ပါ။

### အတူတကွ လုပ်ဆောင်ခြင်း

- **Cursor နှင့် အမည်များ။** Live session တွင် လူတစ်ဦးစီ၏ pointer ကို အမည်နှင့် အရောင်ဖြင့် မော်ဒယ်ပေါ်တွင် ဆွဲပြပြီး ၎င်းတို့ ရွေးထားသည့်အရာကို ကွက်တစ်ခုဖြင့် ပြသည်။
- **လူတစ်ဦးကို Follow လုပ်ခြင်း။** session ရှိ {{ui:People}} ကို ဖွင့်ပြီး အမည်တစ်ခုပေါ်တွင် {{ui:Follow}} ကို ရွေးပါ၊ သင့်မြင်ကွင်းသည် သူတို့နှင့်အတူ ရွေ့သွားမည်။ host က {{ui:Ask everyone to follow me}} ကို ရွေးနိုင်သည်။ [Follow a person in a Live session](topic:follow-in-live) ကို ကြည့်ပါ။

### အက်ပ်အားလုံးတွင်

- Tooltip များသည် Bootstrap tooltip ဖြစ်ပြီး စတင် tip card တွင် ပိတ်ရန် ခလုတ်ရှိသည်၊ tab အစုများသည် မကိုက်ညီသောအခါ ဘေးသို့ ရွှေ့နိုင်သည်၊ ဘရောက်ဆာ tab အမည်တွင် ဖွင့်ထားသော စာရွက်စာတမ်းအမည်နောက်တွင် DetailCraft နှင့် CadCraft ပါသည်။

## ပြင်ဆင်ပြီး

- စတင်မော်ဒယ်အသစ်တစ်ခုကို စတင်သောအခါ custom profile ပျောက်ဆုံးခဲ့သည်။
- shop-drawing အစုတွင် channel၊ angle နှင့် hollow section များ ပျောက်နေခဲ့သည်။

## ကန့်သတ်ချက် ဝန်ခံချက်များ

- wind၊ seismic နှင့် finite element block များသည် စစ်ဆေးမှု အကူအညီများ ဖြစ်သည်။ သင့်အင်ဂျင်နီယာက ရလဒ်များကို ပြန်လည်စစ်ဆေးသည်၊ ၎င်းတို့သည် ကုဒ်စစ်ဆေးမှု မဟုတ်ပါ။ USGS ရှာဖွေမှုကို တိုက်ရိုက်ဝန်ဆောင်မှုပေါ်တွင် မဟုတ်ဘဲ နေရာခံ တစ်ခုပေါ်တွင် စမ်းသပ်ခဲ့သည်။
- Finite element နှင့် P-Delta ကို လက်ဖြင့်နှင့် closed-form အဖြေများနှင့် စစ်ဆေးခဲ့သည်၊ အမှန်တကယ် အဆောက်အဦတစ်ခုဖြင့် မဟုတ်ပါ။ Buckling analysis ကို မတည်ဆောက်ရသေးပါ။
- UK ပြုလုပ်သူ မည်သူမျှ UK အရွယ်အစားများကို မစမ်းသေးပါ၊ မညီသော angle များအတွက် NC ဖိုင်များကို စက်တစ်လုံးပေါ်တွင် မလည်ပတ်ရသေးပါ။
- shop-drawing အစုသည် PDF သာ ဖြစ်သည်။
- အင်္ဂလိပ်မှ အပ ဘာသာစကားများသည် စက်ဖြင့်ပြုလုပ်ထားသော မူကြမ်းများ ဖြစ်သည်။
- Windows installer များကို code-sign မလုပ်ထားပါ (More info ပြီးမှ Run anyway); macOS disk image ကို notarize မလုပ်ထားပါ (right-click ပြီး Open)။

ယခင် ပြောင်းလဲချက်များကို ဤစာမျက်နှာ၏ အောက်ပိုင်းရှိ 0.8 နှင့် 0.8.1 မှတ်ချက်များတွင် ကြည့်နိုင်သည်။

## ယခင်- 0.8 နှင့် 0.8.1

ဤသည်မှာ 0.7 နှင့် နှိုင်းယှဉ်လျှင် DetailCraft 0.8 (1 November 2026) နှင့် 0.8.1 (2 November 2026) တွင် ပြောင်းလဲချက်များ ဖြစ်သည်။ 0.7 တွင် သံမဏိအဖွဲ့ဝင်များကို စစ်ဆေးခဲ့ပြီး၊ 0.8 တွင် မြှောက်ခြင်းများကို စီစဉ်၊ ချိတ်ဆက်မှုများကို အဆိုပြု၊ အုတ်မြစ်နှင့် rebar များကို စစ်ဆေး၊ သစ်နှင့် light-gauge နံရံ၊ကြမ်းပြင်နှင့် ခေါင်မိုးများကို ဘောင်ဆွဲခဲ့သည်။

### အသစ်

**Erection**

- **Erection plan နှင့် movie။** {{ui:Erection}} tab တွင် crane ကို ဖော်ပြပါ (ရပ်နေရာ၊ အမြင့်ဆုံး hook၊ load chart တွင် မပါသော rigging) ပြီး load chart ၏ အတန်းများကို ရိုက်ထည့်ပါ။ DetailCraft သည် မော်ဒယ်ကို assembly တစ်ခုချင်းစီ၊ phase အစီအစဉ်အလိုက်နှင့် tier အလိုက် မြှောက်ပြီး၊ မြှောက်ချက်တစ်ခုစီကို ၎င်း၏ radius ရှိ chart နှင့် သင်သတ်မှတ်ထားသော margin နှင့် စစ်ဆေးသည်။ {{ui:Save movie}} သည် offline တွင် မည်သည့် ဘရောက်ဆာတွင်မဆို၊ ဖုန်းပေါ်တွင်ပါ ဖွင့်နိုင်သော HTML ဖိုင်တစ်ခုကို ရေးသည်။ chart ထက်ကျော်သော၊ ကျော်လွန်သော သို့မဟုတ် အလွန်မြင့်သော မြှောက်ချက်များကို {{ui:Problems}} တွင် ထားသည်။ ၎င်းသည် သင့်နံပါတ်များမှ ပြုလုပ်ထားသော အစီအစဉ်ဖြစ်ပြီး lift plan မဟုတ်ပါ။ [Erection plan and movie](topic:erection-movie) ကို ကြည့်ပါ။

**ချိတ်ဆက်မှုများ**

- **Connection autopilot။** {{ui:Autopilot}} tab သည် ချိတ်ဆက်မှုမရှိသော joint တိုင်းကို ကြည့်ပြီး ပုံသဏ္ဌာန်များမှ အဆိုပြုသည်- base plate၊ shear tab၊ moment beam အဖြစ် သင်မှတ်ထားသော beam များအတွက် end plate၊ splice နှင့် gusset။ uniform load သို့မဟုတ် end shear တစ်ခုပေးလျှင် bolt အရေအတွက်သည် bolt ၏ design strength ကို လိုက်သည်။ {{ui:Add them all}} သည် အဆိုပြုချက်များကို undo အဆင့်တစ်ခုတည်းအဖြစ် ထည့်သည်။ ၎င်းတို့သည် သုံးသပ်ရန် စတင်တန်ဖိုးများ ဖြစ်ပြီး connection design မဟုတ်ပါ။
- **Constructability စစ်ဆေးမှုများ။** {{ui:Problems}} တွင် ဝရင်ချ်မရောက်နိုင်သော bolt၊ socket အတွက် အလွန်နီးသော bolt များ၊ အရွယ်အစားကန့်သတ်ချက်ပြင်ပ fillet weld များနှင့် ရေထည့်ထားနိုင်သော hollow section များ။ Weld access သည် အသစ်ဖြစ်ပြီး ဂဟေဆော်သူ၏ မီးဘောင်ဖြင့် မရောက်နိုင်သော အဝိုင်းပတ် fillet weld ကို လမ်းကြားရှိ အစိတ်အပိုင်းနှင့် ထိခိုက်သော ဂဟေ၏ ရာခိုင်နှုန်းဖြင့် စာရင်းပြုသည်။ [Constructability checks](topic:constructability) ကို ကြည့်ပါ။

**အုတ်မြစ်နှင့် rebar**

- **Foundation စစ်ဆေးမှုများ။** {{ui:Foundation}} tab သည် သင်ဖော်ပြသော မြေအပေါ် footing၊ combined footing နှင့် mat များကို စစ်ဆေးသည်- service load များမှ bearing၊ sliding နှင့် overturning၊ factored load များမှ flexure၊ shear၊ punching၊ development နှင့် အနည်းဆုံး steel (ACI 318-19)။ အစွန်းသို့မဟုတ် corner အနီးရှိ column ကို footing ၏ အစွန်းဖြတ်ထားသော section ဖြင့် စစ်ဆေးသည်။ Settlement ကို မြေ၏ modulus မှ ယူသည်၊ ပျော့သော mat ကို subgrade modulus မှ spring များပေါ်တွင် ဖြေရှင်းသည်၊ pile group နှင့် retaining wall တွင် ကိုယ်ပိုင် panel များ ရှိသည်။ Column load များကို ရိုက်ထည့်နိုင်သည် သို့မဟုတ် {{ui:Analysis}} မှ ယူနိုင်သည်။ [Foundation checks](topic:foundation-checks) ကို ကြည့်ပါ။
- **Rebar congestion map။** {{ui:Congestion}} tab သည် footing တစ်ခုစီကို အပေါ်မှ မြင်ရသလို heat map ဆွဲသည်- bar များက ကွန်ကရစ် ဆင်းနိုင်ရန် နေရာ နည်းသည့်နေရာ၊ clear-spacing စည်းမျဉ်းနှင့် သင်ပေးပါက အကြီးဆုံး aggregate နှင့် vibrator head နှင့် နှိုင်းယှဉ်သည်။ [Rebar congestion map](topic:rebar-congestion) ကို ကြည့်ပါ။

**Framing နှင့် supply**

- **သစ်နှင့် light-gauge framing။** {{ui:Framing}} tab သည် နံရံ၊ ကြမ်းပြင်နှင့် ခေါင်မိုး panel များကို အစိတ်အပိုင်းအားလုံး၊ cut list၊ ဝယ်ရမည့် stock နှင့် အတိုင်းအတာအတိုင်း shop drawing ဖြင့် ဘောင်ဆွဲသည်။ {{ui:Place as members}} သည် အစိတ်အပိုင်းများကို မော်ဒယ်တွင် ထည့်ပေးပြီး {{ui:PDF sheets}} သည် panel တစ်ခုစီအတွက် sheet တစ်ခုကို သိမ်းသည်။ အရွယ်အစား၊ အကွာအဝေးနှင့် header များသည် သင့်ဆုံးဖြတ်ချက်ဖြစ်သည်- DetailCraft က ၎င်းတို့က load ကို ထမ်းနိုင်သည်ဟု မစစ်ဆေးပါ။ [Timber and light-gauge framing panels](topic:framing-panels) ကို ကြည့်ပါ။
- **Supplier stock နှင့် lead time။** {{ui:Supply}} tab သည် supplier ၏ stock စာရင်း (CSV) ကို ဖတ်ပြီး cut list ဝယ်သော section တစ်ခုစီအတွက် လုံလောက်သော stock ရှိမရှိနှင့် စောင့်ရမည့်ကာလကို ပြသည်။ လိုအပ်ချက်မပြည့်သော နှင့် နောက်ကျသော section များကို {{ui:Problems}} တွင် ထားသည်။ မည်သည့်အရာမျှ မမှာယူပါ။ [Supplier stock and lead times](topic:supplier-stock) ကို ကြည့်ပါ။

**ခွဲခြမ်းစိတ်ဖြာမှုနှင့် ဒီဇိုင်း**

- **ဘာကြောင့် အရင်ပျက်မလဲ?** {{ui:Analysis}} tab ရှိ ခလုတ်သည် အုပ်ချုပ်သော strength combination၊ အားနည်းဆုံး အဖွဲ့ဝင်၊ ပထမအဖွဲ့ဝင်သည် ကန့်သတ်ချက်ကို မရောက်မီ load များ ဘယ်လောက်တိုးနိုင်သလဲ၊ နှင့် bolt ၏ shear strength သိရှိသည့်နေရာတွင် အားနည်းဆုံး end plate သို့မဟုတ် shear tab ကို ရှာသည်။ ၎င်းသည် combination များနှင့် design code ကို အရင်လိုအပ်သည်။ Bearing၊ block shear၊ weld များနှင့် prying ကို မစစ်ဆေးပါ။ ချိတ်ဆက်ထားသော သင့် AI assistant က တူညီသောမေးခွန်းကို မေးနိုင်သည်။
- **Live။** {{ui:Live: solve again after each edit}} ကို ရွေးလျှင် တည်းဖြတ်တိုင်း frame ကို ပြန်ဖြေရှင်းသည်။
- **Concrete နောက်ထပ်။** non-sway frame ရှိ ပါးလွှာသော column ကို ၎င်း၏ magnified moment အတွက် ဒီဇိုင်းလုပ်သည် (ACI 318-19 6.6.4.5)။ seismic period ကို Rayleigh နည်းလမ်းဖြင့် ခွဲခြမ်းစိတ်ဖြာမှုမှ ယူနိုင်သည်။ plate များဖြင့် ပြုလုပ်ထားသော slab သည် ၎င်း၏ moment များမှ layer တစ်ခုစီလိုအပ်သော သံမဏိနှင့် one-way shear ကို ရသည်။ [Check concrete members and make seismic loads](topic:concrete-and-seismic) ကို ကြည့်ပါ။
- **အင်ဂျင်နီယာက စစ်ရန်။** foundation၊ concrete နှင့် What breaks first ရလဒ်များသည် အကူအညီများ ဖြစ်သည်။ လေဝင်ဝန်များကို မတည်ဆောက်ရသေးပါ။

**အက်ပ်အားလုံးတွင်**

- **ဘာသာစကားများ။** အကူအညီသည် ဘာသာစကား 54 ခုဖြင့် ရှိသည်။ အင်္ဂလိပ်မှ အပ ဘာသာစကားများသည် ဘာသာစကားပြောတစ်ဦးက မဖတ်မချင်း စက်ဖြင့်ပြုလုပ်ထားသော မူကြမ်းများ ဖြစ်သည်; ဆယ်ခုသည် အသစ်ဖြစ်သည် (Lithuanian၊ Latvian၊ Bosnian၊ Marathi၊ Telugu၊ Albanian၊ Afrikaans၊ Filipino၊ Swahili၊ Uzbek)။
- **Toolbar အတန်းများ။** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} တွင် wrap၊ 2 အတန်း သို့မဟုတ် 1 အတန်းကို ရွေးနိုင်သည်။ ကိုက်ညီနေပြီးသော bar သည် မူလအတိုင်း ရှိနေပြီး ကျန်သည်များသည် ဘေးသို့ ရွှေ့နိုင်သည်။
- **Property grid။** footing ၏ field များသည် ဘုံ grid ကို အသုံးပြုသည်: ခေါက်သိမ်းနိုင်သော အမျိုးအစားများနှင့် compact density။ 2*450 ကဲ့သို့ ရိုက်ထည့်သော ဂဏန်းတွက်ချက်မှုများ ဆက်လုပ်ဆောင်နိုင်သည်။
- **Input device များ။** Trackpad၊ pen၊ 3D mouse၊ controller နှင့် MIDI တို့ဖြင့် အက်ပ်များကို ထိန်းချုပ်နိုင်သည်။ [Navigate in 3D](topic:navigate-3d) ကို ကြည့်ပါ။
- **Problems panel။** အထက်ပါ စစ်ဆေးမှုအသစ်များ၏ သတိပေးချက်များသည် ယခင်အတိုင်း တူညီသော {{ui:Problems}} panel တွင် ပေါ်သည်။
- **သင့် AI ကို ချိတ်ဆက်ခြင်း။** CadCraft Studio မှတစ်ဆင့် ချိတ်ဆက်ထားသော သင့်ကိုယ်ပိုင် assistant သည် အက်ပ်ရှစ်ခုလုံးနှင့် အလုပ်လုပ်ပြီး သင်ခွင့်ပြုသည်များကိုသာ မြင်သည်။ တစ်ချက်နှိပ်ချိတ်ဆက်ခြင်း၊ hosted connector နှင့် Studio ရှိ သင့်ကိုယ်ပိုင် API key တို့ကို ဆက်လက် ထည့်သွင်းရန် ရှိသေးသည်။ [Use DetailCraft with an AI assistant](topic:use-with-ai-assistants) ကို ကြည့်ပါ။

### 0.8.1 တွင် ပြင်ဆင်ပြီး

- **Studio ရှိ ဘာသာစကားများ။** Studio နှင့် packed edition များသည် run time တွင် ဘာသာစကား ပြောင်းနိုင်ပြီဖြစ်သည်၊ ယခင်က အင်္ဂလိပ်တစ်ခုတည်း ဖြစ်သည်။ ပလက်ဖောင်းအားလုံးတွင် မစမ်းသပ်ရသေးပါ၊ ဘာသာစကား မပြောင်းလျှင် ကျွန်ုပ်တို့အား အကြောင်းကြားပါ။
- **Crossing-window select။** 0.8.1 installer များတွင် window ဖြင့် ရွေးချယ်ခြင်း အပြုအမူကို 0.8 web build တွင် ရှိပြီးသား မှန်ကန်စွာ ပါဝင်သည်; ယခင် installer တွင် မပါခဲ့ပါ။
- **Portrait မှ tablet။** ကျန်နေသော grid အမြင့်သည် canvas သို့ သွားပြီး sheet layout သည် 760 px သို့မဟုတ် ထို့ထက်နိမ့်သောအခါ စတင်သည်။

### ဤဗားရှင်းတွင် မရှိသေးသော အရာများ

- **NC ကို စက်သို့ ပို့ခြင်း** ကို မထုတ်ဝေရသေးပါ။
- **Concrete အတွက် လေဝင်ဝန်များ** ကို မတည်ဆောက်ရသေးပါ၊ concrete နှင့် foundation စစ်ဆေးမှုများကို အင်ဂျင်နီယာက ပြန်လည်စစ်ဆေးရန် ဖြစ်သည်။
- **Code signing။** Windows installer နှင့် macOS .dmg များကို မလက်မှတ်ထိုးထားပါ၊ ထို့ကြောင့် Windows က သတိပေးနိုင်ပြီး macOS က right-click ပြီး Open ကို တောင်းဆိုသည်။

ယခင် ပြောင်းလဲချက်များကို [What's new in 0.7](topic:whats-new-0-7) တွင် ကြည့်ပါ။
