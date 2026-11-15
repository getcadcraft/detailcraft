---
title: DetailCraft ကို စတင်ခြင်း
summary: DetailCraft ယခု လုပ်ဆောင်နိုင်သည်များ၊ ဖွင့်နည်းနှင့် မိနစ် ၁၀ အတွင်း grid များမှ shop drawing အထိ ပထမဆုံး မော်ဒယ်။
keywords: စတင်ခြင်း, ပထမဆုံး မော်ဒယ်, နိဒါန်း, steel detailing, rebar, အမြန်စတင်ခြင်း, သင်ခန်းစာ, အနှစ်ချုပ်
from: e4f16bbe
---

DetailCraft သည် CadCraft မိသားစုရှိ steel နှင့် rebar detailing app ဖြစ်သည်။ Grid နှင့် level များပေါ်တွင် steel frame ၏ 3D မော်ဒယ် တစ်ခု တည်ဆောက်ပြီး ချိတ်ဆက်ကာ shop လိုအပ်သည်များကို ရယူနိုင်သည်: အစိတ်အပိုင်းနှင့် assembly အမှတ်အသားများ၊ ပစ္စည်းစာရင်း၊ အစိတ်အပိုင်းတစ်ခုချင်းစီ၏ shop drawing များ၊ DSTV NC ဖိုင်များ၊ IFC မော်ဒယ်နှင့် အုတ်မြစ်များအတွက် bending schedule။

ဤသည်မှာ အစောပိုင်း build ဖြစ်သည်။ အရာအားလုံးကို တစ်ပြိုင်နက် မလုပ်ဘဲ အချို့အရာများကို ဂရုတစိုက် လုပ်ဆောင်သည်။ အလုပ်အမှန် စီစဉ်မီ [What is not built yet](topic:not-built-yet) ကို ဖတ်ပါ။

## ယခု လုပ်ဆောင်နိုင်သည်များ

- မီလီမီတာဖြင့် သင်ရိုက်ထည့်သော grid များနှင့် level များ။
- ထုတ်ပြန်ထားသော ပရိုဖိုင် catalog များမှ ကော်လံများ၊ beam များ၊ ထောက်တိုင်များနှင့် plate များ (AISC W, S, C, L, HSS နှင့် Pipe; European IPE, HEA, HEB နှင့် UPN; UK UB, UC, PFC, EA, UEA, SHS, RHS နှင့် CHS)၊ ထို့အပြင် သင့်ကိုယ်ပိုင် parametric ပရိုဖိုင်များ။
- ချိတ်ဆက်မှု နှစ်မျိုး: beam မှ ကော်လံ flange သို့ bolt ဖြင့် ချိတ်သည့် end plate၊ နှင့် anchor rod လေးခုပါသော ကော်လံ base plate။ ၎င်းတို့ကို ဆင်တူ joint အားလုံးသို့ ကူးနိုင်သည်။
- နေရာဖြင့် ရိုက်ထည့်သော အပေါက်များနှင့် cope များ။
- Bottom mat နှင့် starter bar များပါသော စတုဂံ pad အုတ်မြစ်များ။
- အပြောင်းအလဲတိုင်းပြီးနောက် သူ့ဘာသာ ပြင်ဆင်သော အစိတ်အပိုင်းနှင့် assembly အမှတ်အသားများ။
- ထုတ်ယူမှုများ: IFC4၊ DSTV NC ဖိုင်များ (I-shape နှင့် plate)၊ CSV အဖြစ် ပစ္စည်းစာရင်း၊ CSV အဖြစ် bending schedule၊ နှင့် အစိတ်အပိုင်းတစ်ခု၏ shop drawing PDF။

## DetailCraft ဖွင့်ခြင်း

1. Desktop browser တွင် DetailCraft ကို ဖွင့်ပါ: Chrome, Edge, Firefox သို့မဟုတ် Safari။ [Browsers and computers](common:browsers) ကို ကြည့်ပါ။
2. စခရင် ပြည့်သွားသည်အထိ စောင့်ပါ။ အောက်ဆုံးရှိ status bar က "Ready. Open the Sample, or set grids and levels and start placing members." ဟု ပြသည်။

မော်ဒယ် view သည် 3D graphics (WebGL) လိုအပ်သည်။ စခရင်အလယ်တွင် "This browser could not start 3D graphics (WebGL)" ဟု ပြပါက [Troubleshooting](topic:troubleshooting#the-3d-view-is-missing) ကို ကြည့်ပါ။

:::note
သင့်မော်ဒယ်များသည် သင့်ကွန်ပျူတာတွင်သာ ရှိနေသည်။ မော်ဒယ်ဖွင့်ခြင်းသည် browser တွင် ဖတ်ခြင်းဖြစ်ပြီး သိမ်းခြင်းသည် ဖိုင် ဒေါင်းလုဒ် ဖြစ်သည်။ ဘာမျှ upload မလုပ်ပါ။ Cloud သိမ်းခြင်းကို ယခုအချိန်တွင် မရနိုင်သေးပါ။ [Where your files go](common:your-files) ကို ကြည့်ပါ။ နောက်ပိုင်း ချိတ်ဆက်မှုမရှိဘဲ သုံးလိုပါက အွန်လိုင်းရှိစဉ် app bar တွင် {{ui:Save for offline}} ကို တစ်ကြိမ် ရွေးပါ; [Working offline](common:offline) ကို ကြည့်ပါ။
:::

:::offline
သင် အော့ဖ်လိုင်းတွင် ရှိသည်။ DetailCraft သည် ချိတ်ဆက်မှုမရှိဘဲ လုပ်ဆောင်နိုင်ရန် ရှေ့ဦးစွာ အော့ဖ်လိုင်းအသုံးပြုရန် သိမ်းထားမှသာ ဖြစ်သည်: app bar ရှိ {{ui:Save for offline}} ခလုတ်သည် {{ui:Offline ready}} ဟု ဖတ်ရမည်။ [Working offline](common:offline) ကို ကြည့်ပါ။
:::

## နမူနာကို အရင် ကြည့်ပါ

DetailCraft ဘာတွေ ဖန်တီးနိုင်သည်ကို အမြန်ဆုံး မြင်ရန် နမူနာ frame ကို ကြည့်ပါ။

1. Toolbar ရှိ {{ui:File}} အုပ်စုတွင် {{ui:Sample}} ကို ရွေးပါ။
2. View တွင် bay နှစ်ခုပါသော frame ကို ပြသည်: base plate ပါသော ကော်လံ ခြောက်ခု၊ end plate ပါသော beam လေးခု၊ ထောက်တိုင် တစ်ခုနှင့် rebar ပါသော အုတ်မြစ်ခုနစ်ခု။
3. Beam တစ်ခုကို နှိပ်ပါ။ ညာဘက်ရှိ {{ui:Properties}} panel က ၎င်း၏ အစိတ်အပိုင်း အမှတ်အသား၊ ဖြတ်ထားသော အရှည်၊ အလေးချိန်နှင့် end plate များ ဖောက်ထားသော အပေါက်များကို ပြသည်။
4. အောက်ဆုံးရှိ {{ui:Bill of materials}} tab ကို ဖွင့်ပါ၊ အစိတ်အပိုင်း အမှတ်အသား တိုင်းကို အရေအတွက်နှင့် အလေးချိန်ဖြင့် ကြည့်ပါ။

[Explore the sample frame](topic:sample-model) လမ်းညွှန်တွင် အစိတ်အပိုင်းတစ်ခုချင်းစီကို ရှင်းပြထားသည်။

## သင့်ပထမ မော်ဒယ်

မော်ဒယ်အသစ်တွင် grid 1 မှ 3 အထိ A မှ B အထိ 6000 mm ဖြင့် နှင့် level နှစ်ခု ရှိပြီးသား ဖြစ်သည်: Level 1 ကို 0 တွင်၊ Level 2 ကို 4000 တွင်။

1. {{ui:New}} ကို ရွေးပါ။ လက်ရှိ မော်ဒယ်တွင် ပြောင်းလဲမှု ရှိပါက DetailCraft က ပထမဆုံး သိမ်းမလား မေးသည်။
2. View အပေါ်ရှိ {{ui:Plan}} ကို ရွေးပါ။ ၎င်းဘေးရှိ level list က Level 1 ကို ရွေးထားသည်။
3. Toolbar ရှိ {{ui:Column}} ကို ရွေးပါ၊ သို့မဟုတ် {{key:C}} ကို နှိပ်ပါ။
4. Grid ဆုံမှတ် A/1 ကို နှိပ်ပါ။ Level 1 မှ Level 2 အထိ W12x50 ကော်လံ ပေါ်လာသည်။ Status bar က ၎င်း ရောက်သွားသည့်နေရာကို ပြသည်။
5. B/1၊ A/2 နှင့် B/2 ကို နှိပ်၍ ကော်လံ နောက်ထပ် သုံးခု ထည့်ပါ။
6. Level list တွင် Level 2 ကို ရွေးပြီး {{ui:Beam}} သို့မဟုတ် {{key:B}} ကို ရွေးပါ။
7. A/1 ကို နှိပ်ပြီးနောက် A/2 ကို နှိပ်ပါ။ W16x26 beam က ကော်လံ ထိပ်နှစ်ခုကို ချိတ်ပေးသည်၊ ၎င်း၏ steel အပေါ်ပိုင်းသည် level ပေါ်တွင် ရှိသည်။
8. {{key:Esc}} ကို နှိပ်၍ {{ui:Select}} သို့ ပြန်သွားပြီး beam ကို နှိပ်ပါ။
9. {{ui:Connect}} အုပ်စုရှိ {{ui:End plates}} ကို ရွေးပါ။ အဆုံးနှစ်ခုစလုံးတွင် bolt ဖြင့် end plate ရောက်သည်၊ beam ကို ကိုက်ညီရန် ဖြတ်သည်၊ ပထမ end plate ကို ယခု ရွေးထားသည်။
10. Beam ကို ထပ်နှိပ်ပါ။
11. {{ui:Output}} အုပ်စုရှိ {{ui:Shop drawing}} ကို ရွေးပါ။ Beam ၏ shop drawing ကြိုတင်ကြည့်ရှုမှု ဖွင့်လာသည်။ {{ui:Download PDF}} ကို ရွေးပါ။
12. မော်ဒယ်ကို သိမ်းရန် {{key:Mod+S}} ကို နှိပ်ပါ။ Browser က `Untitled.detailcraft.json` ကို ဒေါင်းလုဒ် လုပ်သည်။

သိမ်းမီ ဘယ်ဘက်ထိပ်ရှိ {{ui:Name}} အကွက်တွင် မော်ဒယ်ကို အမည်ပြောင်းပါ၊ ထို့ကြောင့် ဖိုင်နှင့် ထုတ်ယူမှု အားလုံးတွင် ၎င်း၏ အမည် ပါလာမည်။

## နောက်တစ်ဆင့်

- [A tour of the screen](topic:workspace)
- [Set up grids and levels](topic:grids-and-levels)
- [Move around the 3D view](topic:navigate-3d)၊ mouse, trackpad သို့မဟုတ် touch screen ဖြင့်
- [Coming from other detailing software](topic:coming-from)၊ အကြီးစား detailing package တစ်ခုမှ လာပါက
- [Using this help](common:help)
