---
title: အဖွဲ့ဝင်များ ဆုံသော နေရာရှိ ဂဟေများကို စစ်ဆေးရန်
summary: ဒီဇိုင်းစစ်ဆေးမှု ပြီးနောက် အဖွဲ့ဝင်တစ်ခုစီ အခြားအဖွဲ့ဝင် သို့မဟုတ် support ကို ထိသော နေရာတိုင်း၏ fillet နှင့် butt ဂဟေများကို AISC 360-16 Chapter J သို့မဟုတ် EN 1993-1-8 ဖြင့် စစ်ဆေးပြီး အသုံးအများဆုံး weld group နှင့် ၎င်း၏ combination ကို ကြည့်ရှုနိုင်သည်။ အင်ဂျင်နီယာက ပြန်လည်စစ်ဆေးသည်အထိ အကူအညီသာ ဖြစ်သည်။
keywords: ဂဟေ, welds, weld check, fillet weld, butt weld, full penetration, AISC 360, EN 1993-1-8, weld group, utilisation, utilization, capacity, joint, connection, structural, အင်ဂျင်နီယာ
from: e8eebbe6
---

{{ui:Analysis}} tab ရှိ {{ui:Design checks}} အောက်ရှိ {{ui:Weld checks}} block သည် ဖြေရှင်းပြီးသား frame ၏ အင်အားများနှင့် သင်ပြုလုပ်ထားသော strength combination များကို ယူပြီး joint တိုင်းတွင် အဖွဲ့ဝင်တစ်ခုစီ၏ ပတ်လည်ဂဟေကို စစ်ဆေးသည်- အဖွဲ့ဝင်တစ်ခုသည် အခြားအဖွဲ့ဝင်ကို ထိသည့်နေရာ သို့မဟုတ် support ပေါ်တွင် ရပ်သည့်နေရာ။

:::warning
ဒါဟာ **အင်ဂျင်နီယာက ပြန်လည်စစ်ဆေးသည်အထိ အကူအညီသာ** ဖြစ်သည်။ ၎င်းသည် ပုံဖော်ထားသော section ပတ်လည်ရှိ ဂဟေတစ်ခုကို အုပ်စုတစ်ခုအဖြစ် frame ၏ ကိုယ်ပိုင် end force များမှ စစ်ဆေးသည်။ shop drawing များတွင် သင်ဆွဲထားသော ဂဟေ၏ အရွယ်အစား သို့မဟုတ် အရှည်ကို မဖတ်ပါ၊ bolt၊ plate၊ bearing၊ block shear သို့မဟုတ် prying ကို မစစ်ဆေးပါ။ ရလဒ်များသည် တရားဝင် အတည်ပြုချက် မဟုတ်ပါ။
:::

## လည်ပတ်ရန်

1. {{ui:Analysis}} tab တွင် frame ကို ဖြေရှင်းပြီး {{ui:Design checks}} တွင် {{ui:Design code}} ကို ရွေးကာ {{ui:Make combinations}} ကို နှိပ်ပါ (ဂဟေစစ်ဆေးမှုသည် တူညီသော strength combination များ လိုအပ်သည်)။
2. {{ui:Weld checks}} တွင် {{ui:Fillet leg (mm, 0 = the wall, at most 8)}} ကို သတ်မှတ်ပါ။ 0 ဆိုသည်မှာ leg သည် section ၏ ပါးသောနံရံကို လိုက်ပြီး အများဆုံး 8 mm အထိ ဖြစ်သည်။ AISC ကုဒ်အောက်တွင် {{ui:Weld metal strength F_EXX (MPa)}} သည် ဂဟေသတ္တု၏ အင်အား ဖြစ်သည် (482.6 MPa သည် E70 electrode ဖြစ်သည်)။ EN 1993 အောက်တွင် သံမဏိ grade က ဂဟေသတ္တု၏ အင်အားနှင့် correlation factor ကို ပေးသည်။
3. {{ui:Check welds}} ကို နှိပ်ပါ။

ဇယား၏ လိုင်းတစ်ခုစီသည် weld group တစ်ခု (အဖွဲ့ဝင်၏ joint end တစ်ခု) ဖြစ်သည်။ နံပါတ်များ- ၎င်း၏ အုပ်ချုပ်သော စစ်ဆေးမှု၏ **utilisation**၊ အခြေအနေ (အောင်မြင်/မအောင်မြင်)၊ နှင့် မည်သည့် combination အောက်တွင် မည်သည့်စစ်ဆေးမှုနှင့် clause က အုပ်ချုပ်သလဲ။ စစ်ဆေးမှုက ဆုံးဖြတ်နိုင်သည်မဟုတ်သော အုပ်စုသည် နံပါတ်ပြမည့်အစား အကြောင်းပြသည် (သံမဏိ grade မရှိခြင်း၊ EN 1993-1-8 Table 4.1 တွင် grade အတွက် correlation factor မရှိခြင်း၊ ထို section တွင် ဂဟေမရှိခြင်း)။

leg သို့မဟုတ် ဂဟေသတ္တုကို ပြောင်းလဲခြင်း၊ သို့မဟုတ် မော်ဒယ်ကို တည်းဖြတ်ခြင်းသည် ဇယားကို ရှင်းလင်းသည်- ၎င်းသည် အဟောင်းတန်ဖိုးများအတွက် ဖြစ်သည်။ {{ui:Check welds}} ကို ထပ်မံနှိပ်ပါ။

## စစ်ဆေးသည့်အရာများ

- **ASCE 7 + AISC 360:** fillet ဂဟေသတ္တု (load နှင့် ဂဟေအကြား ထောင့်ကို ရေတွက်သည်၊ J2.4)၊ base metal shear rupture (J4.2) နှင့် full-penetration butt ဂဟေများ (Table J2.5)။
- **EN 1990 + EN 1993:** EN 1993-1-8 4.5.3.3 ၏ simplified နည်းလမ်းဖြင့် fillet ဂဟေများနှင့် 4.7.1 မှ butt ဂဟေများ။
- အနည်းဆုံးနှင့် အများဆုံး leg နှင့် အနည်းဆုံးအရှည်ကို နှိုင်းယှဉ်သော detailing သတိပေးချက်များ၊ နှိုင်းယှဉ်ခဲ့သော တန်ဖိုးနှင့်အတူ။

weld group ကို line section အဖြစ် ယူဆပြီး elastic vector method ဖြင့် load လုပ်သည်- ဂဟေ၏ အပိုင်းတိုင်းသည် အဖွဲ့ဝင်၏ axial force၊ shear နှစ်ခုစလုံး၊ torsion နှင့် bending moment နှစ်ခုစလုံးမှ အင်အားကို vector အဖြစ် ပေါင်းယူသည်။

## စစ်ဆေးခြင်း မရှိသော အရာများ

partial-penetration ဂဟေများ၊ skewed fillet များ၊ plug နှင့် slot ဂဟေများ၊ intermittent ဂဟေများ၊ instantaneous-centre နည်းလမ်း၊ EN directional နည်းလမ်း၊ fatigue နှင့် base metal ၏ block shear တို့ကို မတည်ဆောက်ရသေးပါ။ စံနှုန်းအချို့၏ constant များကို စံနှုန်းမှ ရေးထားသော်လည်း ပုံနှိပ်စာအုပ်နှင့် မနှိုင်းယှဉ်ရသေးပါ; အစီရင်ခံစာက တန်ဖိုးတစ်ခုစီ၏ မူရင်းကို ဖော်ပြသည် ({{ui:Report (PDF)}} တွင် သင်စစ်ဆေးပြီးနောက် ဂဟေဇယားများ ထပ်ထည့်သည်)။ [Check steel members](topic:design-checks) နှင့် [Not built yet](topic:not-built-yet) ကိုလည်း ကြည့်ပါ။
