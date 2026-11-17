---
title: လေဝင်၊ ငလျင်နေရာနှင့် ASCE 7 ပေါင်းစပ်မှုများ
summary: အပိတ်ခံထားသော တင်းမာသော အဆောက်အအုံအတွက် လေဝင် load case များ ဖန်တီးခြင်း၊ နေရာတစ်ခု၏ ငလျင် ဒီဇိုင်းတန်ဖိုးများ ရယူခြင်းနှင့် ASCE 7 ပေါင်းစပ်မှုများ ဖန်တီးခြင်း၊ Analysis tab တွင်။
keywords: လေဝင်, လေဝင်ဝန်, asce 7, directional procedure, exposure, enclosure, ငလျင်, site class, ss, s1, sds, sd1, usgs, design spectrum, ဝန်ပေါင်းစပ်မှုများ, lrfd, asd, kzt, kd, gust
from: 676fcbf3
---

ဤ Analysis tab ရှိ block သုံးခုသည် frame တစ်ခု၏ လေနှင့် ငလျင် input များကို ဖန်တီးပြီး ပေါင်းစပ်သည်: {{ui:Wind loads (ASCE 7 directional procedure)}}၊ {{ui:Seismic site and system (ASCE 7)}} နှင့် {{ui:ASCE 7 load combinations}}။ ၎င်းတို့သည် အကူအညီများဖြစ်သည်: **ကုဒ်စစ်ဆေးမှု မဟုတ်ပါ; သင့်အင်ဂျင်နီယာက ရလဒ်များကို သုံးသပ်ရမည်။**

## သင်လုပ်မည့်အရာ

အပိတ်ခံထားသော၊ တင်းမာသော အဆောက်အအုံအတွက် လေဝင် load case များ ဖန်တီးပါ၊ နေရာတစ်ခု၏ ငလျင်တန်ဖိုးများ ယူပါ၊ ၎င်းတို့ကို သုံးသော ပေါင်းစပ်မှုများ ဖန်တီးပါ။ မော်ဒယ်တွင် floor များ လိုအပ်သည်၊ ထို့ကြောင့် ဦးစွာ analysis ကို လုပ်ဆောင်ပါ ([အားများ၊ ဓာတ်ပြန်များနှင့် အကွေးများ](topic:frame-analysis) ကို ကြည့်ပါ)။

## အဆင့်များ

1. {{ui:Analysis}} tab ကိုဖွင့်ပြီး {{ui:Run}} ကို ရွေးပါ၊ ထို့ကြောင့် floor များနှင့် အဆောက်အအုံ၏ အရွယ်အစား သိရှိမည်။ block တစ်ခုက floor မရှိဟု ပြောပါက ၎င်းတွင် {{ui:Find floors}} ကို ရွေးပါ။
2. {{ui:Wind loads (ASCE 7 directional procedure)}} တွင် {{ui:Edition}} ကို ရွေးပါ၊ လေမြေပုံမှ {{ui:Basic wind speed V}} ကို ရိုက်ပြီး {{ui:Speed unit}} ကို ရွေးပါ၊ ထို့နောက် {{ui:Exposure}} နှင့် {{ui:Enclosure}}။ Kzt၊ Kd၊ G၊ ကြမ်းပြင်အမြင့်၊ leeward Cp၊ eccentricity နှင့် ဦးတည်ချက်များလည်း ရှိသည်။
3. ဇယားတွင် floor တိုင်းရှိ ဖိအားနှင့် floor တစ်ခုစီရှိ အား ကိုဖတ်ပြီး {{ui:Make wind cases}} ကို ရွေးပါ။ Case များမှာ +X၊ -X၊ +Y နှင့် -Y ဖြစ်သည်။
4. {{ui:Seismic site and system (ASCE 7)}} တွင် edition ကို ရွေးပြီး Ss နှင့် S1 (ASCE 7-22 အတွက် SMS၊ SM1 နှင့် S1)၊ site class A မှ D၊ risk category နှင့် seismic force-resisting system ကို ရိုက်ပါ။ သို့မဟုတ် latitude နှင့် longitude ကို ရိုက်ပြီး {{ui:Look up from USGS (online)}} ကို ရွေးပါ; ၎င်းသည် သင်နှိပ်သည့်အချိန်တွင်သာ အွန်လိုင်းဝန်ဆောင်မှုကို မေးသည်။
5. Fa၊ Fv၊ SDS နှင့် SD1၊ R၊ Cd နှင့် Omega0 နှင့် design spectrum ကို ဖတ်ပြီး {{ui:Use in the Seismic block}} ကို ရွေးပါ။ ငလျင် block တွင် {{ui:Make seismic cases}} ကို နှိပ်ပါ ([ကွန်ကရစ်အစိတ်အပိုင်းများ စစ်ခြင်းနှင့် ငလျင် load များ ပြုလုပ်ခြင်း](topic:concrete-and-seismic) ကို ကြည့်ပါ)။
6. {{ui:ASCE 7 load combinations}} တွင် {{ui:Method}} (LRFD သို့မဟုတ် ASD) ကို ရွေးပြီး {{ui:Make ASCE 7 combinations}} ကို ရွေးပါ။ Analysis ကို ထပ်မံ လုပ်ဆောင်ပါ။

## သိထားရန်

- လေ: အပိတ်ခံထားသော တင်းမာသော အဆောက်အအုံအတွက်သာ၊ directional procedure ဖြင့်။ ပြောင်းလွယ်သော အဆောက်အအုံအတွက် စံနှုန်းမှ gust factor လိုအပ်ပြီး DetailCraft က မပြုလုပ်ပါ။
- Site class E နှင့် F ကို site လေ့လာမှု လိုအပ်ပြီး မတည်ဆောက်ရသေးပါ။
- Block များ၏ အောက်ခြေရှိ source စာရင်းသည် ဂဏန်းတစ်ခုစီ မည်သည့်နေရာမှ ရသလဲနှင့် ဘာကို ချန်ထားသလဲ ပြောပြသည်။
- USGS ရှာဖွေမှုကို live ဝန်ဆောင်မှုမဟုတ်ဘဲ တုပ ဝန်ဆောင်မှုပေါ်တွင် စမ်းသပ်ခဲ့သည်။
