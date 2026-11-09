---
title: 0.8 နှင့် 0.8.1 တွင် ဘာအသစ်ရှိသလဲ
summary: crane ၏ load chart မှ ထောင်ခြင်းဗီဒီယို၊ ချိတ်ဆက်မှု autopilot၊ rebar ကျဉ်းကျပ်မှု မြေပုံ၊ foundation စစ်ဆေးချက်များ၊ သစ်နှင့် light-gauge ဘောင်ဆွဲခြင်း panels၊ ပြုလုပ်နိုင်မှုနှင့် weld access စစ်ဆေးချက်များ၊ ပေးသွင်းသူ stock၊ ဘာ အရင်ကျိုးမလဲ၊ live re-solve၊ ကွန်ကရစ် စစ်ဆေးချက် အများအပြားနှင့် 0.8.1 ပြင်ဆင်ချက်များ။
keywords: ဘာအသစ်ရှိသလဲ, release notes, changelog, ပြောင်းလဲချက်များ, 0.8, 0.8.1, ဗားရှင်း, အသစ်အင်္ဂါရပ်များ, erection, crane, load chart, ဗီဒီယို, autopilot, connections, rebar, congestion, foundation, footing, mat, settlement, framing, timber, light-gauge, cut list, constructability, weld access, supplier, stock, lead time, what breaks first, live, concrete, seismic, slab, languages, assistant
from: 6e33e052
---

ဤသည်မှာ DetailCraft 0.7 နှင့် နှိုင်းယှဉ်၍ 0.8 (2026 နိုဝင်ဘာ 1) နှင့် 0.8.1 (2026 နိုဝင်ဘာ 2) တွင် ပြောင်းလဲသွားသည်များ ဖြစ်သည်။ 0.7 သည် သံမဏိအဖွဲ့ဝင်များကို စစ်ဆေးခဲ့သည်; 0.8 သည် မ lift များကို စီစဉ်ပေးပြီး connections များကို အဆိုပြုကာ foundations နှင့် rebar ကို စစ်ဆေးပြီး သစ်နှင့် light-gauge နံရံ၊ ကြမ်းပြင်နှင့် ခေါင်မိုးများကို ဘောင်ဆွဲပေးသည်။

## အသစ်

### ထောင်ခြင်း

- **ထောင်ခြင်းအစီအစဉ်နှင့် ဗီဒီယို။** {{ui:Erection}} tab တွင် crane ကို ဖော်ပြပါ (ရပ်နေသည့်နေရာ၊ အမြင့်ဆုံး hook၊ chart တွင် မပါသော rigging)၊ ၎င်း၏ load chart အတန်းများကို ရိုက်ထည့်ပါ။ DetailCraft သည် မော်ဒယ်ကို assembly တစ်ခုချင်းစီ၊ phase အစီအစဉ် နှင့် tier တစ်ခုချင်းစီအလိုက် မ lift ပြီး lift တိုင်းကို ၎င်း radius တွင် chart နှင့်၊ သင်သတ်မှတ်ထားသော margin နှင့် စစ်ဆေးသည်။ {{ui:Save movie}} သည် browser မည်သည့်အရာတွင်မဆို၊ ဖုန်းပေါ်တွင်ပင် အော့ဖ်လိုင်းဖွင့်နိုင်သော HTML ဖိုင်တစ်ခု ရေးသည်။ chart ထက်ကျော်၊ ကျော်လွန်၊ သို့မဟုတ် အလွန်မြင့်သော lifts များကို {{ui:Problems}} တွင် ပြသည်။ ၎င်းသည် သင့်နံပါတ်များမှ ပြုလုပ်ထားသော အစီအစဉ်ဖြစ်ပြီး lift plan မဟုတ်ပါ။ [ထောင်ခြင်းအစီအစဉ်နှင့် ဗီဒီယို](topic:erection-movie) ကို ကြည့်ပါ။

### ချိတ်ဆက်မှုများ

- **Connection autopilot။** {{ui:Autopilot}} tab သည် connection မရှိသော joint တိုင်းကို ကြည့်ပြီး ပုံသဏ္ဍာန်များအပေါ် အခြေခံ၍ အဆိုပြုသည်: base plates၊ shear tabs၊ moment beams အဖြစ် သင်အမှတ်အသားပြုထားသော beams အတွက် end plates၊ splices နှင့် gussets။ uniform load သို့မဟုတ် end shear တစ်ခု ပေးလျှင် bolt အရေအတွက်သည် bolt ၏ design strength ကို လိုက်သည်။ {{ui:Add them all}} သည် အဆိုပြုချက်များကို undo step တစ်ခုအဖြစ် ထည့်သည်။ ၎င်းတို့သည် သုံးသပ်ရန် စတင်တန်ဖိုးများ ဖြစ်ပြီး connection design မဟုတ်ပါ။
- **ပြုလုပ်နိုင်မှု စစ်ဆေးချက်များ။** {{ui:Problems}} တွင် wrench မရောက်နိုင်သော bolt၊ socket အတွက် အလွန်နီးသော bolts၊ အရွယ်အစား ကန့်သတ်ချက် ကျော်သော fillet welds နှင့် ရေ ထိန်းထားနိုင်သော hollow sections များ။ Weld access သည် အသစ်ဖြစ်သည်: welder ၏ torch မရောက်နိုင်သော all-round fillet weld ကို ၎င်းကို ပိတ်ဆို့နေသော အစိတ်အပိုင်းနှင့် weld ၏ သက်ရောက်မှု ရာခိုင်နှုန်းတို့ဖြင့် စာရင်းပြုသည်။ [ပြုလုပ်နိုင်မှု စစ်ဆေးချက်များ](topic:constructability) ကို ကြည့်ပါ။

### အုတ်မြစ်နှင့် rebar

- **Foundation စစ်ဆေးချက်များ။** {{ui:Foundation}} tab သည် သင်ဖော်ပြသော မြေပေါ်တွင် footings၊ combined footings နှင့် mats များကို စစ်ဆေးသည်: service loads မှ bearing၊ sliding နှင့် overturning; factored loads မှ flexure၊ shear၊ punching၊ development နှင့် minimum steel (ACI 318-19)။ edge သို့မဟုတ် corner အနီးရှိ ကော်လံကို footing edge က ဖြတ်ထားသော section ဖြင့် စစ်သည်။ Settlement ကို soil ၏ modulus မှ ရယူသည်၊ flexible mat ကို subgrade modulus မှ springs ပေါ်တွင် ဖြေရှင်းသည်၊ pile groups နှင့် retaining walls တွင် ကိုယ်ပိုင် panels ရှိသည်။ Column loads ကို ရိုက်ထည့်နိုင်သည် သို့မဟုတ် {{ui:Analysis}} မှ ယူနိုင်သည်။ [Foundation စစ်ဆေးချက်များ](topic:foundation-checks) ကို ကြည့်ပါ။
- **Rebar ကျဉ်းကျပ်မှု မြေပုံ။** {{ui:Congestion}} tab သည် footing တစ်ခုစီကို အပေါ်မှ ကြည့်သော heat map ဆွဲသည်: bars က ကွန်ကရစ် ဆင်းနိုင်ရန် နေရာ နည်းသည့်နေရာ၊ clear-spacing စည်းမျဉ်းနှင့်၊ ပေးလျှင် အကြီးဆုံး aggregate နှင့် vibrator head တို့နှင့် နှိုင်းယှဉ်သည်။ [Rebar ကျဉ်းကျပ်မှု မြေပုံ](topic:rebar-congestion) ကို ကြည့်ပါ။

### ဘောင်ဆွဲခြင်းနှင့် ပေးသွင်းမှု

- **သစ်နှင့် light-gauge ဘောင်ဆွဲခြင်း။** {{ui:Framing}} tab သည် နံရံ၊ ကြမ်းပြင်နှင့် ခေါင်မိုး panels များကို အစိတ်အပိုင်းတိုင်းနှင့်၊ cut list၊ ဝယ်ရမည့် stock နှင့် scale ဖြင့် shop drawing ဖြင့် ဘောင်ဆွဲသည်။ {{ui:Place as members}} သည် အစိတ်အပိုင်းများကို မော်ဒယ်တွင် ထည့်ပေးပြီး {{ui:PDF sheets}} သည် panel တစ်ခုစီအတွက် စာရွက်တစ်ရွက် သိမ်းသည်။ အရွယ်အစား၊ spacing နှင့် headers တို့သည် သင်၏ ဆုံးဖြတ်ချက် ဖြစ်သည်: DetailCraft သည် ၎င်းတို့က load ကို ထမ်းနိုင်သလား စစ်ဆေးခြင်း မရှိပါ။ [သစ်နှင့် light-gauge ဘောင်ဆွဲ panels](topic:framing-panels) ကို ကြည့်ပါ။
- **ပေးသွင်းသူ stock နှင့် lead times။** {{ui:Supply}} tab သည် ပေးသွင်းသူ၏ stock စာရင်း (CSV) ကို ဖတ်ပြီး ဖြတ်စာရင်းက ဝယ်ရမည့် section တစ်ခုစီအတွက် stock လုံလောက်သလား၊ စောင့်ရမည့်ကာလ ဘယ်လောက်လဲ ပြသည်။ stock မလုံလောက်သော နှင့် နောက်ကျသော sections များကို {{ui:Problems}} တွင် ပြသည်။ ဘာမျှ မှာယူခြင်း မရှိပါ။ [ပေးသွင်းသူ stock နှင့် lead times](topic:supplier-stock) ကို ကြည့်ပါ။

### ခွဲခြမ်းစိတ်ဖြာမှုနှင့် ဒီဇိုင်း

- **ဘာ အရင်ကျိုးမလဲ?** {{ui:Analysis}} tab တွင် ခလုတ်သည် အထိခံဆုံး တွက်ချက်မှု combination၊ အားနည်းဆုံး member၊ ပထမ member တစ်ခု ၎င်း limit သို့ မရောက်မီ loads များ ဘယ်လောက်တိုးနိုင်သလဲ၊ bolts ၏ shear strength သိရှိပါက အားနည်းဆုံး end plate သို့မဟုတ် shear tab ကို ရှာသည်။ combinations နှင့် design code ကို ဦးစွာ လိုအပ်သည်။ Bearing၊ block shear၊ welds နှင့် prying ကို စစ်ဆေးခြင်း မရှိပါ။ ချိတ်ဆက်ထားသော AI assistant သည် အတူတူ မေးနိုင်သည်။
- **Live။** {{ui:Live: solve again after each edit}} ကို အမှန်ခြစ်လျှင် frame ကို edit တိုင်း ပြန်ဖြေရှင်းသည်။
- **ကွန်ကရစ်နှင့် အခြား။** non-sway frame ရှိ slender column ကို magnified moment အတွက် ဒီဇိုင်းဆွဲသည် (ACI 318-19 6.6.4.5)။ seismic period ကို Rayleigh ၏ နည်းလမ်းဖြင့် analysis မှ ယူနိုင်သည်။ plates ဖြင့် ပြုလုပ်ထားသော slab သည် ၎င်း moments မှ layer တစ်ခုစီ လိုအပ်သော steel နှင့် one-way shear ကို ရရှိသည်။ [ကွန်ကရစ် အစိတ်အပိုင်းများ စစ်ခြင်းနှင့် seismic loads ပြုလုပ်ခြင်း](topic:concrete-and-seismic) ကို ကြည့်ပါ။
- **အင်ဂျင်နီယာ စစ်ဆေးရန်။** foundation၊ concrete နှင့် ဘာ အရင်ကျိုးမလဲ ရလဒ်များသည် အကူအညီများသာ ဖြစ်သည်။ Wind loads ကို မတည်ဆောက်ရသေးပါ။

### app တိုင်းတွင်

- **ဘာသာစကားများ။** help သည် ဘာသာစကား 54 မျိုးဖြင့် ရှိသည်။ အင်္ဂလိပ်ကလွဲ၍ အခြားများသည် native speaker က ဖတ်ပြီးမချင်း စက်ဖြင့် ကြိုတင်ရေးထားသော မူကြမ်းများ ဖြစ်သည်; ဆယ်မျိုးသည် အသစ်ဖြစ်သည် (လစ်သူယေးနီးယား၊ လတ်ဗီးယား၊ ဘော့စနီးယား၊ မာရာသီ၊ တီလူဂူ၊ အယ်လ်ဘေးနီးယား၊ အာဖရိကန်ဘာ၊ ဖိလစ်ပိုင်၊ ဆွာဟီလီ၊ ဥဇဘက်)။
- **Toolbar အတန်းများ။** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} တွင် wrap၊ 2 အတန်း သို့မဟုတ် 1 အတန်း ရွေးနိုင်သည်။ ကိုက်ညီနေပြီးသား bar သည် ထိုအတိုင်း ဆက်နေပြီး ကျန်သည်များသည် ဘေးသို့ scroll လုပ်သည်။
- **Property grid။** footing ၏ field များသည် ဘုံ grid ကို သုံးသည်: ခေါက်သိမ်းနိုင်သော အမျိုးအစားများနှင့် compact density။ 2*450 ကဲ့သို့ ရိုက်ထည့်သော arithmetic ကို ဆက်လက် သုံးနိုင်သည်။
- **Input devices။** trackpad၊ pen၊ 3D mouse၊ controller နှင့် MIDI တို့ဖြင့် apps များကို ထိန်းချုပ်နိုင်သည်။ [3D တွင် လှည့်ပတ်ခြင်း](topic:navigate-3d) ကို ကြည့်ပါ။
- **Problems panel။** အထက်ပါ စစ်ဆေးချက်သစ်များ၏ သတိပေးချက်များသည် ယခင်ကဲ့သို့ {{ui:Problems}} panel တစ်ခုတည်းတွင် ပေါ်သည်။
- **သင့် AI ကို ချိတ်ဆက်ရန်။** သင့်ကိုယ်ပိုင် assistant ကို CadCraft Studio မှတစ်ဆင့် ချိတ်ဆက်၍ apps ရှစ်ခုလုံးနှင့် အလုပ်လုပ်ပြီး သင်ခွင့်ပြုသည်များကိုသာ မြင်သည်။ one-click connect၊ hosted connector နှင့် Studio ရှိ သင့် API key တို့ကို ဆက်လက် ထွက်ရှိမည်။ [DetailCraft ကို AI assistant ဖြင့် သုံးခြင်း](topic:use-with-ai-assistants) ကို ကြည့်ပါ။

## 0.8.1 တွင် ပြင်ဆင်ချက်များ

- **Studio တွင် ဘာသာစကား။** Studio နှင့် packed editions များသည် run time တွင် ဘာသာစကား ပြောင်းနိုင်သည်; ယခင်က အင်္ဂလိပ်တစ်ခုတည်း ဖြစ်ခဲ့သည်။ platform အားလုံးတွင် မစမ်းသပ်ရသေးပါ: ဘာသာစကား မပြောင်းပါက ကျွန်ုပ်တို့ကို အသိပေးပါ။
- **ဝင်းဒိုးဖြတ်ရွေးခြင်း။** 0.8.1 installers များသည် 0.8 web build တွင် မှန်ကန်ပြီးသား ဝင်းဒိုးဖြင့် ရွေးခြင်း အပြုအမူကို ပါဝင်သည်; ဟောင်း installer တွင် မပါခဲ့ပါ။
- **Portrait ပုံစံ tablets။** ကျန်နေသော grid အမြင့်သည် canvas သို့ သွားပြီး sheet layout သည် 760 px သို့မဟုတ် ထိုထက်ငယ်သည်နှင့် စတင်သည်။

## ဤဗားရှင်းတွင် မရှိသေးသည်များ

- **Send NC to a machine** ကို မဖြန့်ချိရသေးပါ။
- **Wind loads** ကွန်ကရစ်အတွက် မတည်ဆောက်ရသေးပါ၊ ကွန်ကရစ်နှင့် foundation စစ်ဆေးချက်များကို အင်ဂျင်နီယာက ပြန်သုံးသပ်ရန် ဖြစ်သည်။
- **Code signing။** Windows installers နှင့် macOS .dmg များကို လက်မှတ်မထိုးရသေးပါ၊ ထို့ကြောင့် Windows က သတိပေးနိုင်ပြီး macOS က right-click ပြီး Open ရန် တောင်းဆိုသည်။

ယခင်ပြောင်းလဲမှုများကို [0.7 တွင် ဘာအသစ်ရှိသလဲ](topic:whats-new-0-7) တွင် ကြည့်ပါ။
