---
title: DetailCraft ကို AI အကူအညီပေးသူနှင့် အသုံးပြုခြင်း
summary: သင့်ကိုယ်ပိုင် AI အကူအညီပေးသူ သို့မဟုတ် script က မော်ဒယ်၊ အစိတ်အပိုင်းများ၊ ပြဿနာများနှင့် clash များကို ဖတ်ခြင်း၊ member နှင့် ချိတ်ဆက်မှုများ ထည့်ခြင်း၊ သိမ်းခြင်းနှင့် ထုတ်ယူခြင်း (USD အပါအဝင်) ပြုလုပ်နိုင်စေပါ: ခွင့်ပြုချက်များ၊ CadCraft Studio မှ ချိတ်ဆက်ခြင်းနှင့် activity log။
keywords: ai, assistant, agent, mcp, model context protocol, script, automation, parts, clashes, connections, permissions, disconnect, activity, undo, အကူအညီပေးသူ, ခွင့်ပြုချက်, ချိတ်ဆက်ခြင်း, လှုပ်ရှားမှု
from: d624c9a0
---

## What you will learn

AI အကူအညီပေးသူ (သို့မဟုတ် သင်ရေးထားသော script) အား DetailCraft နှင့် အလုပ်လုပ်စေနည်းနှင့် ၎င်း ထိခိုက်ခွင့်ရှိသည့်အရာများကို ဆုံးဖြတ်နည်း။

DetailCraft တွင် **ကိုယ်ပိုင် AI မရှိပါ** နှင့် မည်သည့်နေရာသို့မျှ ဘာမျှ မပို့ပါ။ Model Context Protocol (MCP) ကို နားလည်သော မည်သည့် program ကိုမဆို သင်ယူလာပါ။ DetailCraft သည် ၎င်းအား tool များ ပေးသည်၊ မည်သည့်ဟာ ယူမလဲဆိုတာ သင်ရွေးသည်။

## Turn it on

1. {{ui:Settings}} (app bar ရှိ ဂီယာ၊ သို့မဟုတ် {{key:Mod+,}}) ကို ဖွင့်ပြီး {{ui:DetailCraft}} tab သို့ သွားပါ။
2. {{ui:Assistants}} အောက်တွင် **Let AI assistants and scripts use DetailCraft** ကို အမှန်ခြစ်ပါ။ မခြစ်မချင်း ပိတ်ထားသည်။
3. ၎င်းလုပ်ခွင့်ရှိသည်ကို ရွေးပါ: **Read** ကို အစမှ အမှန်ခြစ်ထားသည်; **Edit**၊ **Save** သို့မဟုတ် **Export** ကို လိုအပ်မှသာ အမှန်ခြစ်ပါ။

ခွင့်ပြုချက်များ အပြင်ဘက်ရှိ tool များကို အကူအညီပေးသူသို့ မပေးပါ၊ ၎င်းက တောင်းလျှင်လည်း DetailCraft က ငြင်းပယ်ပြီး activity log တွင် မှတ်သည်။ switch ကို ပိတ်လျှင် ချိတ်ဆက်မှုအားလုံး တစ်ပြိုင်နက် ပြီးဆုံးသည်။

## Connect your assistant

အကူအညီပေးသူများသည် သင့်ကွန်ပျူတာပေါ်ရှိ **CadCraft Studio** မှတစ်ဆင့် ချိတ်ဆက်သည်: Studio သည် ဤကွန်ပျူတာသာ ချိတ်နိုင်သော အသေးစား server တစ်ခုကို run ပြီး စတင်တိုင်း ပြုလုပ်သော token ဖြင့် ကာကွယ်ထားသည်။ Studio တွင် {{ui:Connect an assistant}} ကို ရွေးပြီး လိပ်စာနှင့် token ကို သင့်အကူအညီပေးသူသို့ ကူးထည့်ပါ (Studio က ထည့်ရမည့် ဆက်တင်များကို အတိအကျ ပြသသည်)။ token ကို ဘယ်တော့မှ မမျှဝေပါနှင့်။

:::note
browser tab သည် အကူအညီပေးသူအတွက် ချိတ်ဆက်မှု ဖွင့်နိုင်ခြင်း မရှိပါ: browser app များတွင် သင့်ကွန်ပျူတာပေါ်ရှိ CadCraft Studio ကို မသုံးမချင်း switch သည် အကျိုးမရှိပါ။
:::

## You stay in charge

- **ပြောင်းလဲမှုတိုင်းသည် undo အဆင့်တစ်ခု** ဖြစ်ပြီး အကူအညီပေးသူ၏ အမည်ဖြင့် အမှတ်အသားပြုသည် (ဥပမာ "Assistant: add beam", "Assistant: add gussets")။ {{key:Mod+Z}} သည် အကူအညီပေးသူ၏ နောက်ဆုံးပြောင်းလဲမှုကို တစ်ခုလုံး ပြန်ယူသည်။ အကူအညီပေးသူ၏ ကိုယ်ပိုင် `undo` သည် ၎င်း၏ကိုယ်ပိုင် အဆင့်များကိုသာ ပြန်ယူသည်၊ သင်၏ အရာများကို ဘယ်တော့မှ မယူပါ၊ ထိုသို့ အထူးတောင်းဆိုမှ မဟုတ်လျှင်။
- **၎င်းသည် သင့်ကို စောင့်သည်။** member တစ်ခု နေရာချနေစဉ်၊ အစိတ်အပိုင်းများ ရွှေ့နေစဉ် သို့မဟုတ် ကူးထည့်နေစဉ် DetailCraft သည် အကူအညီပေးသူ၏ ပြောင်းလဲမှုများကို ငြင်းပယ်ပြီး ထပ်ကြိုးစားရန် ပြောသည်။
- **ချိတ်ဆက်ထားသည်ကို သိနိုင်သည်။** app bar ရှိ ခလုတ်တစ်ခုသည် ချိတ်ဆက်ထားစဉ် အကူအညီပေးသူ၏ အမည်ကို ပြသသည်; နှိပ်ပြီး ၎င်းလုပ်ခွင့်ရှိသည်ကို ကြည့်ပါ၊ သို့မဟုတ် **Disconnect** ပါ။
- **Activity.** {{ui:Settings}} › {{ui:DetailCraft}} › {{ui:Assistants}} › {{ui:Activity}} သည် ခေါ်ဆိုမှုတိုင်းကို စာရင်းပြုသည်: အချိန်၊ tool အမည်၊ ပြီးခဲ့ သို့မဟုတ် ငြင်းပယ်ခဲ့။ {{ui:Save the log}} သည် မိတ္တူတစ်ခု သိမ်းသည်။

## What an assistant can ask for

အတိုင်းအတာအားလုံး မီလီမီတာဖြင့်၊ point များ `[x, y, z]` ဖြင့် z ကို အပေါ်သို့ ညွှန်ပြီး မော်ဒယ်တွင်ကဲ့သို့ပင်ဖြစ်သည်။

| Tool | Permission | What it does |
|---|---|---|
| `app_info`, `model_describe` | Read | ဖွင့်ထားသော မော်ဒယ်: grid များ၊ level များ၊ phase များ၊ type နှင့် ပရိုဖိုင်အလိုက် member များ၊ ချိတ်ဆက်မှုများ၊ အုတ်မြစ်များ၊ လှေကားများ၊ အစိတ်အပိုင်းများ၊ သံမဏိ အလေးချိန်၊ ပြဿနာများ |
| `parts_list` | Read | part mark များနှင့် ပရိုဖိုင်၊ ပစ္စည်း၊ ဖြတ်ထားသော အရှည်၊ အရေအတွက်၊ အလေးချိန်၊ phase နှင့် assembly mark များ; type၊ ပရိုဖိုင်၊ mark သို့မဟုတ် phase အလိုက် |
| `problems_list` | Read | {{ui:Problems}} tab က ဖော်ပြသည့်အရာများ၊ အကြောင်းအရာတစ်ခုစီနှင့်အတူ |
| `clash_check` | Read | [clash check](topic:clash-check)၊ ၎င်း၏ tolerance နှင့် phase များနှင့်အတူ |
| `selection_get` | Read | သင် ရွေးထားသည့်အရာ |
| `selection_set` | Edit | member များ၊ ချိတ်ဆက်မှုများ၊ အုတ်မြစ်များ သို့မဟုတ် လှေကားများကို (id သို့မဟုတ် part mark ဖြင့်) သင့်အား ပြရန် ရွေးပေးသည်; ဘာမျှ မပြောင်းပါ |
| `member_add` | Edit | point နှစ်ခုကြား beam၊ ကော်လံ၊ brace သို့မဟုတ် plate |
| `connection_add` | Edit | ပေးထားသော member များ ဆုံသည့်နေရာတွင် end plate၊ shear tab၊ base plate၊ splice သို့မဟုတ် gusset၊ {{ui:Connect}} ခလုတ်များ လုပ်သကဲ့သို့ |
| `undo` | Edit | အကူအညီပေးသူ၏ နောက်ဆုံး အဆင့်များကို ပြန်ယူသည် |
| `model_save` | Save | DetailCraft ၏ ကိုယ်ပိုင် Save |
| `model_export` | Export | IFC၊ NC ဖိုင်များ၊ BOM၊ bending schedule၊ KISS ဖိုင် သို့မဟုတ် cut list၊ {{ui:Output}} ခလုတ်များ ထုတ်သကဲ့သို့ |
| `usd_export` | Export | သံမဏိ မော်ဒယ်ကို USD (.usda၊ .usdc သို့မဟုတ် .usdz) အဖြစ်၊ {{ui:Output}} › {{ui:USD}} ရေးသကဲ့သို့ (see [Export the steel model as USD](topic:usd)); Studio တွင် သင်ခွင့်ပြုထားသော folder သို့ ဖိုင်ရေးနိုင်သည် |

## If something doesn't work

- **အကူအညီပေးသူသည် DetailCraft tool များ မမြင်ပါ:** ဤ window တွင် switch ဖွင့်ထားခြင်းနှင့် window ကို Studio တွင် ဖွင့်ထားခြင်းကို စစ်ပါ။
- **"needs the edit permission"** (သို့မဟုတ် save၊ export): {{ui:Assistants}} အောက်တွင် အမှန်ခြစ်ပြီး ထပ်မေးပါ။
- **"The person is placing a member":** လုပ်နေသည်ကို ပြီးအောင်လုပ်ပါ (သို့မဟုတ် {{key:Esc}} ကို နှိပ်ပါ)၊ ထို့နောက် အကူအညီပေးသူ ထပ်ကြိုးစားစေပါ။
- **"401" သို့မဟုတ် "token" အမှားများ:** token ပြောင်းသွားသည် (Studio ပြန်စတင်ခဲ့ သို့မဟုတ် {{ui:New token}})။ အသစ်ကို အကူအညီပေးသူ၏ ဆက်တင်များသို့ ကူးထည့်ပါ။

## See also

- [Recipes for AI assistants](common:assistants-recipes): ဥပမာ အလုပ်လုပ်ပုံများ၊ ခေါ်သော tool များနှင့်အတူ။
