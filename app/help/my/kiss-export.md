---
title: fabrication software အတွက် KISS ဖိုင် ထုတ်ယူရန်
summary: ပစ္စည်းစာရင်းကို fabrication management (MIS) program သို့ KISS 1.1 ဖိုင်အဖြစ် ပို့ပါ: assembly များ၊ part များ၊ phase များကို sequence အဖြစ်၊ အပေါက်များ၊ cope များနှင့် weld များ။
keywords: kiss, kss, mis, fabrication management, production control, estimating, ပစ္စည်းစာရင်း, bom, ထုတ်ယူရန်, fabtrol, sequence
from: 30cf3951
---

{{ui:ထုတ်ရန်}} group တွင် {{ui:နောက်ထပ်}} ကို ဖွင့်ပြီး {{ui:ဖဘ်ရီကေးရှင်း ဆော့ဖ်ဝဲအတွက် KISS ဖိုင်}} ကို ရွေးပါ။ DetailCraft သည် `<name>.kss` ကို ဒေါင်းလုဒ်လုပ်သည်။ ၎င်းသည် KISS ဖိုင် ("Keep It Simple, Steel", ဗားရှင်း 1.1) ဖြစ်ပြီး fabrication management program အများစုက ပစ္စည်းစာရင်းကို သွင်းယူသော စာသားပုံစံ ဖြစ်သည်။

## အတွင်းပါဝင်သည်များ

- ခေါင်းစီး: job နံပါတ် (model အမည်၏ ပထမ အက္ခရာ ရှစ်လုံးနှင့် ဂဏန်းများ), model အမည်၊ ရက်စွဲနှင့် အချိန်၊ အရွယ်အစားများ metric ဟုတ်မဟုတ်။
- assembly mark တစ်ခုစီအတွက်: ၎င်း၏ အဓိက part (quantity = assembly ဘယ်နှစ်ခု), drawing line (A-B1 စသည်၊ assembly drawing ၏ နံပါတ်), assembly line (အမည်၊ အမျိုးအစား၊ အလေးချိန်၊ စုစုပေါင်းအလျား၊ အနက်နှင့် အကျယ်), assembly ရောက်ရှိနေသော [phase](topic:phases) တစ်ခုစီအတွက် sequence line တစ်ခု၊ နှင့် labor line များ: အပေါက်များ (အရေအတွက်၊ အချင်း၊ အထူ ဖြတ်သွား), cope များနှင့် weld များ။
- ထို့နောက် ၎င်းနှင့် ချိတ်ဆက်ထားသော part တစ်ခုစီ၊ standard က တောင်းဆိုသည့်အတိုင်း **စုစုပေါင်း** quantity (assembly တစ်ခုစီ × assembly အရေအတွက်) ဖြင့်။
- လွတ်နေသော bolt နှင့် anchor rod များသည် drawing BOLTS၊ assembly FIELD တွင်။
- လိုင်းတိုင်းတွင် အမျိုးအစား (W, C, L, HSS, PL, သို့မဟုတ် စိတ်ကြိုက်ပရိုဖိုင်အတွက် MI), အရွယ်အစား၊ grade၊ millimeter ဖြင့် ဖြတ်အလျား၊ part အမည်နှင့် အလေးချိန် ပါဝင်သည်။

## Imperial သို့မဟုတ် metric

[DetailCraft ဆက်တင်များ](topic:settings) တွင် **KISS file sizes** က ရွေးသည်:

- **အလိုအလျောက်** (စတင်သည့်ပုံစံ): အဖွဲ့ဝင်အားလုံး AISC ပုံသဏ္ဍာန်ဖြစ်လျှင် imperial၊ မဟုတ်လျှင် metric။
- **Imperial**: ပုံသဏ္ဍာန်များကို AISC သတ်မှတ်ချက်ဖြင့် (W 16X26, HSS 4X4X.250); DetailCraft က millimeter ဖြင့် ထားသော plate နှင့် bolt များကို အနီးဆုံး 1/16 in သို့; အလေးချိန်ကို pound ဖြင့်။
- **Metric**: ဥရောပပုံသဏ္ဍာန်များကို ၎င်းတို့အမည် (IPE300) ဖြင့်၊ plate များကို millimeter ဖြင့် အထူ X အကျယ်; အလေးချိန်ကို kilogram ဖြင့်။

အလျားများကို ဆက်တင်မည်သို့ပင်ဖြစ်စေ အမြဲ millimeter ဖြင့် ဒဿမနှစ်နေရာဖြင့် ထားသည်: KISS standard က ထိုသို့ တောင်းဆိုပြီး လက်ခံသော program က ပြောင်းလဲသည်။

:::note
Grade များကို standard ၏ အက္ခရာ ရှစ်လုံးအတွင်း ဖြတ်သည်: A572 Gr 50 သည် A572-50 ဖြစ်သည်။ အမည်များရှိ comma များသည် space ဖြစ်သည် (format တွင် quote မရှိ)။ မှီခိုမီ သင့် program တွင် import တစ်ခုကို စစ်ဆေးပါ: DetailCraft ၏ KISS ဖိုင်များကို ဤနေရာတွင် standard နှင့် စစ်ဆေးထားသည်၊ fabrication program တွင် မစမ်းသေးပါ။
:::
