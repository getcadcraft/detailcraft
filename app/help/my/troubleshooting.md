---
title: ပြဿနာရှာဖွေခြင်း
summary: DetailCraft ၏ မက်ဆေ့ချ်များ၏ အဓိပ္ပာယ်နှင့် လုပ်ဆောင်ရမည့်အရာ၊ 3D view မပေါ်ခြင်းမှ ချိတ်ဆက်မှု မတည်ဆောက်နိုင်ခြင်းအထိ။
keywords: problem, error, not working, help, fix, message, refused, webgl, blank, warning, cannot, issue, ပြဿနာ, အမှား, မအလုပ်လုပ်, အကူအညီ, သတိပေးချက်
from: f8c3b2b1
---

အများစု ငြင်းပယ်ချက်များကို မျက်နှာပြင် အောက်ခြေရှိ status bar သို့မဟုတ် {{ui:Problems}} tab တွင် ရှင်းပြသည်။ ဤအရာများကို အရင်ဖတ်ပါ။ အောက်ပါ မက်ဆေ့ချ်များကို DetailCraft ပြသသည့်အတိုင်း ကိုးကားထားသည်။

## The 3D view is missing

**"ဤ browser သည် 3D graphics (WebGL) စတင်နိုင်ခြင်း မရှိပါ။ မော်ဒယ်၊ အစီရင်ခံစာများနှင့် ထုတ်ယူမှုများ ဆက်လုပ်နိုင်ပါသည်။"**

browser သည် DetailCraft ဆွဲသော 3D graphics ဖြစ်သည့် WebGL ကို စတင်နိုင်ခြင်း မရှိပါ။

1. browser ကို နောက်ဆုံးဗားရှင်းသို့ အဆင့်မြှင့်ပါ။
2. hardware acceleration ကို ဖွင့်ပြီး browser ကို ပြန်စတင်ပါ (အောက်တွင် ကြည့်ပါ)။
3. graphics driver ကို အဆင့်မြှင့်ပါ၊ သို့မဟုတ် အခြား browser ကို စမ်းကြည့်ပါ။ Remote desktop နှင့် virtual machine များတွင် WebGL မရှိလေ့ရှိသည်။
4. ယခုလည်း ဆက်လုပ်နိုင်သည်: {{ui:Add by grid}} ဖောင်ဖြင့် member များ နေရာချပါ၊ အစီရင်ခံစာများ ဖတ်ပါ၊ ထုတ်ယူပါ။ view ထဲတွင် နှိပ်ခြင်းသာ WebGL လိုသည်။

:::chromium
hardware acceleration ဖွင့်ရန် **Settings, System** ကို ဖွင့်ပြီး **Use graphics acceleration when available** ကို ဖွင့်ပါ၊ ထို့နောက် ပြန်ဖွင့်ပါ။
:::

:::firefox
hardware acceleration ဖွင့်ရန် **Settings, General, Performance** ကို ဖွင့်ပါ၊ **Use recommended performance settings** ကို ဖြုတ်ပြီး **Use hardware acceleration when available** ကို အမှန်ခြစ်ပါ။ Firefox ကို ပြန်စတင်ပါ။
:::

:::safari
Safari တွင် WebGL ကို ပုံမှန်အားဖြင့် ဖွင့်ထားသည်။ view မစသေးပါက macOS ကို အဆင့်မြှင့်ပြီး extension တစ်ခုခုက ပိတ်ထားခြင်း ရှိမရှိ စစ်ပါ။
:::

အသေးစိတ်ကို [Browsers and computers](common:browsers) တွင် ဖတ်ပါ။

## Clicking in the view does nothing

- **နှိပ်ချက်အနီးတွင် ဆုံမှတ် မရှိပါ။** နေရာချသည့် ကိရိယာများသည် grid ဆုံမှတ်များသို့သာ snap လုပ်သည်။ အစက်အားလုံးနှင့် ဝေးသော နေရာကို နှိပ်ပါက ဘာမှ မဖြစ်ပါ။ အစက် မီးလင်းသည်အထိ ပိုနီးအောင် ရွှေ့ပါ။
- **ကိရိယာသည် {{ui:Select}} ဖြစ်ပြီး နေရာလွတ်ကို နှိပ်ထားသည်။** ၎င်းသည် ရွေးချယ်မှုကို ရှင်းသည်။
- **ဆွဲထားသည်။** နှိပ်ထားပြီး လွှတ်ရာတွင် pixel အနည်းငယ်ထက် ပိုကွာလျှင် ဆွဲခြင်း ဖြစ်သည်: view ကို လှည့်သည် သို့မဟုတ် ရွှေ့သည်။
- **အပိုင်းကို ဖြတ်ထားသည်။** {{ui:Plan}} နှင့် {{ui:Elevation}} တွင် ဖြတ်ထားသော အပြင်ဘက်ရှိ သံမဏိကို ဝှက်ထားပြီး နှိပ်၍ မရပါ။ {{ui:3D}} သို့ ပြောင်းပါ။
- **ဆုံမှတ်သည် အဆင့်မှားနေသည်။** {{ui:3D}} တွင် အဆင့်အများအပြားမှ ဆုံမှတ်များ မျက်နှာပြင်ပေါ် ထပ်နိုင်ပြီး နှိပ်ချက်သည် အနီးဆုံးကို ယူသည်။ {{ui:Plan}} သို့မဟုတ် {{ui:Elevation}} ကို သုံးပါ။

## Placing messages

| Message | What to do |
|---|---|
| ကော်လံ ရောက်ရန် Level 2 အထက် level မရှိပါ။ ဦးစွာ level တစ်ခု ထည့်ပါ။ | {{ui:Levels}} တွင် level ထည့်ပါ၊ သို့မဟုတ် အောက်ပိုင်း level ကို နှိပ်ပါ |
| အခြားဘက်အတွက် တခြား ဆုံမှတ်ကို ရွေးပါ။ | တူညီသော အမှတ်ကို နှစ်ကြိမ် နှိပ်ထားသည် |
| အဆုံးနှစ်ခုသည် အမှတ်တူညီသည်။ | {{ui:Add by grid}} တွင် "From" နှင့် "To" ရွေးချယ်မှုများ တူညီသည် |
| member များ နေရာချရန် ဘယ်ဘက်တွင် grid line များ ထည့်ပါ။ | မော်ဒယ်တွင် တစ်ဖက်ညွှန်းသို့ grid line မရှိပါ |
| မသိသော ပရိုဖိုင် "…" | ပရိုဖိုင်သည် catalog သို့မဟုတ် မော်ဒယ်၏ စိတ်ကြိုက်ပရိုဖိုင်များတွင် မရှိပါ။ စာရင်းမှ တစ်ခု ရွေးပါ |
| နံပါတ် ရိုက်ပါ။ | နံပါတ် field ကို ဗလာထားခဲ့သည် သို့မဟုတ် စာသား ပါနေသည် |

## Connections will not build

### "ဤ beam သည် ကော်လံ မျဉ်းနှင့် မဆုံပါ။"

End plate များသည် beam ၏ အဆုံးသည် ဒေါင်လိုက် ကော်လံ၏ မျဉ်းပေါ်တွင် တိကျစွာ ရှိရန် လိုသည်၊ ၎င်း၏ အောက်ခြေနှင့် အထက်ကြား (1 mm အတွင်း)။ beam ၏ {{ui:Ends (x, y, z mm)}} နှင့် ကော်လံ၏ နေရာကို စစ်ပါ။

### "ဤ beam သည် ကော်လံ web ကို ထိ သို့မဟုတ် ထောင့်ဖြင့် ဆုံသည်"

သို့မဟုတ် {{ui:Problems}} တွင်: "ကော်လံ web သို့ ဝင်ရောက်သော beam များကို မတည်ဆောက်ရသေးပါ: ကော်လံကို 90° လှည့်ပါ သို့မဟုတ် အခြား ချိတ်ဆက်မှုကို သုံးပါ။"

beam သည် ကော်လံ web ထဲသို့ ဝင်ရောက်နေသည်။ ကော်လံကို ရွေးပြီး {{ui:Rotation (°)}} ကို 90 ထားကာ ထပ်ကြိုးစားပါ။ ကွေးနေသော ဆက်သွယ်မှုများကို မတည်ဆောက်ရသေးပါ။

### "End plates are built for level beams only (this beam slopes)."

beam ၏ အဆုံးနှစ်ခုစလုံး တူညီသော အမြင့်တွင် ရှိရမည်။

### "End plates need the beam upright (rotation 0)."

beam ၏ {{ui:Rotation (°)}} ကို 0 သို့ ပြန်ထားပါ။

### "End plates need an I-shape beam." / "End plates need an I-shape column."

I-shape များသာ (W, IPE, HEA, HEB သို့မဟုတ် စိတ်ကြိုက် I) end plate ရနိုင်သည်။

### "The beam end is not on the column line any more."

ချိတ်ဆက်မှု ထည့်ပြီးနောက် beam သို့မဟုတ် ကော်လံကို ရွှေ့ခဲ့သည်။ ပြန်ရွှေ့ပါ၊ သို့မဟုတ် ချိတ်ဆက်မှုကို ဖျက်ပါ။

### "Connections cut this member to nothing."

အဆုံးနှစ်ခုရှိ ချိတ်ဆက်မှုများက member ကို ၎င်း၏အရှည်ထက် ပိုဖြတ်သည်၊ ဥပမာ နက်သော ကော်လံနှစ်ခုကြား အလွန်တို beam။ member ၏ အဆုံးများနှင့် ပြား အထူကို စစ်ပါ။

### "No other joints like this one … are without a connection."

{{ui:Similar}} သည် beam ပရိုဖိုင်၊ ကော်လံ ပရိုဖိုင်နှင့် ချိတ်ဆက်မှု အမျိုးအစား တူညီသော၊ ချိတ်ဆက်မှု မရှိသေးသော ဆုံမှတ်များသို့သာ ကူးသည် (beam ကို flange သို့)။

### "Both ends already have connections." / "This column already has a base plate."

ရှိပြီးသား ချိတ်ဆက်မှုကို ရွေးပြီး ပြင်ပါ၊ သို့မဟုတ် ဦးစွာ ဖျက်ပါ။

## Warnings in the Problems tab

သတိပေးချက်များသည် ချိတ်ဆက်မှု သို့မဟုတ် အုတ်မြစ်ကို မတည်ဆောက်ခြင်း မရပ်ဆိုင်းပါ; ၎င်းတို့က စစ်ဆေးရန် တောင်းဆိုသည်။ အနား နှင့် အကွာအဝေး သတိပေးချက်များသည် EN 1993-1-8 Table 3.3 အနည်းဆုံးတန်ဖိုးများကို အသုံးပြုသည် (အနား 1.2 × အပေါက်၊ pitch 2.2 × အပေါက်၊ gauge 2.4 × အပေါက်)။ သင့်စီမံကိန်းသည် အခြားစည်းမျဉ်းများကို သုံးပါက သတိပေးချက်သည် မသက်ဆိုင်နိုင်ပါ; DetailCraft သည် ချိတ်ဆက်မှုများကို ဒီဇိုင်း မလုပ်ပါ။

"a hole is off the end of the part" ဆိုသည်မှာ အပေါက်၏ x သည် 0 ထက်နည်းခြင်း သို့မဟုတ် ဖြတ်ထားသော အရှည်ထက် ပိုခြင်း ဖြစ်သည်။ x သည် ဖြတ်စ ကနေ တိုင်းသည်၊ ချိတ်ဆက်မှုများက အစိတ်အပိုင်းကို ပြန်ဖြတ်ပြီးနောက်ဖြစ်သည်ကို မှတ်ထားပါ။

## Footing changes are refused

| Message | What to do |
|---|---|
| The cover leaves no room for bars in this footing. | အုတ်မြစ်ကို ပိုကြီးအောင် သို့မဟုတ် cover ကို ပိုသေးအောင် လုပ်ပါ |
| The footing is too shallow for two layers of bars inside the cover. | ပိုနက်အောင် လုပ်ပါ သို့မဟုတ် cover ကို လျှော့ပါ |
| The starter bars do not fit inside the footing with 75 mm cover. | starter လျှော့ပါ၊ အကွာအဝေး ပိုနီးအောင် လုပ်ပါ၊ သို့မဟုတ် အုတ်မြစ်ကို ပိုကြီးအောင် လုပ်ပါ |
| Bar spacing must be 50–1000 mm. | ထိုအပိုင်းအခြားအတွင်း အကွာအဝေး ရိုက်ပါ |
| Length must be 300–50000 mm. | အုတ်မြစ် အရွယ်အစားများတွင် ကန့်သတ်ချက်များ ရှိသည်: အလျားနှင့် အကျယ် 300 မှ 50000၊ အနက် 150 မှ 10000 |

## Grids and levels are refused

| Message | What to do |
|---|---|
| Numbered grids: give one spacing between each pair of lines (4). | အကွာအဝေး အကွက်များကို ရေတွက်ပါ: line ငါးခုအတွက် အကွာအဝေး လေးခု လိုသည် |
| Lettered grids: spacings must be positive millimeters. | သုည၊ အနုတ် သို့မဟုတ် စာသား မရှိရ |
| Numbered grids: grid labels must be different. | line နှစ်ခုတွင် label တူနေသည် |
| At most 60 grid lines each way. | မော်ဒယ်ကို ခွဲပါ |
| Keep at least one level. | level အတန်းအားလုံးကို ဖျက်ထားသည် |
| Every level needs a name. / Two levels are called "…". | level တစ်ခုစီကို မတူသော အမည် ပေးပါ |

## Opening a file fails

| Message | Cause |
|---|---|
| DetailCraft opens its own models (.detailcraft.json). IFC import is not built yet. | ဖိုင်သည် `.json` ဖိုင် မဟုတ်ပါ |
| This is not a DetailCraft model (not JSON). | ဖိုင် ပျက်စီးနေသည် သို့မဟုတ် အခြား JSON ဖြစ်သည် |
| This is not a DetailCraft model. | အခြား program မှ JSON ဖိုင် |
| This model was saved by a newer DetailCraft (format 2). | ၎င်းကို သိမ်းခဲ့သော ပိုသစ်သည့် DetailCraft ဖြင့် ဖွင့်ပါ |
| That file is too big to be a DetailCraft model. | 50 MB ထက် ကြီးသည် |

ဖိုင်ဖွင့်ရာတွင် "2 members were not valid and left out." ကဲ့သို့ သတိပေးချက်များ ပါလာလျှင် မော်ဒယ်၏ ကျန်အပိုင်းများ မှန်ကန်သည်။ ဘာများ ချန်ထားခဲ့သည်ကို စစ်ဆေးမချင်း မူရင်းဖိုင်ပေါ်တွင် မသိမ်းပါနှင့်။

## Exports

| Message | Cause |
|---|---|
| ထုတ်ရန် မရှိသေးပါ။ | မော်ဒယ် ဗလာဖြင့် {{ui:IFC}} |
| NC ဖိုင်များ ရေးရန် I-shape သို့မဟုတ် plate အစိတ်အပိုင်း မရှိပါ။ | မော်ဒယ်တွင် channel, angle သို့မဟုတ် tube သာ ရှိသည် |
| Not written (only I-shapes and plates so far): … | ထိုအမှတ်များသည် I-shape သို့မဟုတ် plate မဟုတ်ပါ; အခြားများကို ရေးပြီးပြီ |
| No footings, so no bars to schedule. | အုတ်မြစ် မရှိ၍ စီစဉ်ရန် bar မရှိ၊ {{ui:Bending}} |
| … character(s) outside the PDF font printed as "?". | မော်ဒယ်အမည် သို့မဟုတ် grade တွင် PDF font တွင် မပါသော စာလုံးများ ပါသည် |

{{ui:Shop drawing}} မှိန်နေသည်: မော်ဒယ်တွင် အစိတ်အပိုင်း မရှိသေးပါ။

## Downloads do not appear

သိမ်းခြင်းနှင့် ထုတ်ယူခြင်း တိုင်းသည် browser download ဖြစ်သည်။ browser ၏ downloads စာရင်းကို စစ်ပါ။ browser က ဖိုင်များစွာ ဒေါင်းလုဒ်မလုပ်မီ မေးလျှင် သို့မဟုတ် ဤဆိုက်မှ ဒေါင်းလုဒ်များကို ပိတ်ထားလျှင် ခွင့်ပြုပါ။ Safari တွင် toolbar ရှိ downloads ခလုတ်ကို စစ်ပါ။

## Keys do nothing

- cursor သည် စာသား သို့မဟုတ် နံပါတ် field တွင် ရှိသည်: ထိုနေရာတွင် ကိရိယာ ကီးများနှင့် {{key:Delete}} ကို လျစ်လျူရှုသည်၊ ရိုက်နိုင်စေရန်။ {{key:Tab}} ကို နှိပ်ပါ သို့မဟုတ် view ကို နှိပ်ပါ။
- dialog ဖွင့်ထားသည်: ဦးစွာ ပိတ်ပါ။
- browser က keyboard ကို ကိုင်ထားသည် (ဥပမာ address bar): DetailCraft အတွင်းကို နှိပ်ပါ။
- {{key:Ctrl+Shift+F}} သည် Mac ပေါ်တွင်ပင် Control ကို သုံးသည်။

## Offline problems

app bar ရှိ {{ui:Save for offline}} ခလုတ်သည် offline မိတ္တူ၏ အခြေအနေကို ပြသည်။ သိမ်းပုံ: [Working offline](common:offline)။

| The button reads | What it means | What to do |
|---|---|---|
| {{ui:Save for offline}} | ဤ browser တွင် offline မိတ္တူ မရှိသေး | အွန်လိုင်းရှိစဉ် ရွေးပါ |
| Saving 5 of 20 | သိမ်းနေဆဲ | {{ui:Offline ready}} ကို စောင့်ပါ; tab ကို ဖွင့်ထားပါ |
| {{ui:Offline ready}} | DetailCraft၊ 3D view၊ ထုတ်ယူမှု အားလုံးနှင့် ဤအကူအညီသည် ချိတ်ဆက်မှု မရှိဘဲ အလုပ်လုပ်သည် | ဘာမျှ မလုပ်ပါနှင့်။ နှိပ်ပါက {{ui:Save again (get the newest version)}} သို့မဟုတ် {{ui:Remove the offline copy}} |
| {{ui:Could not save}} | ဖိုင်အချို့ ဒေါင်းလုဒ် မရခဲ့ | ချိတ်ဆက်မှုကို စစ်ပြီး ထပ်ကြိုးစားရန် နှိပ်ပါ |
| {{ui:Offline not available}} | ဤ window သည် offline မိတ္တူ ထိန်းထားနိုင်ခြင်း မရှိ: private window များနှင့် managed computer အချို့က ပိတ်ထားသည် | ပုံမှန် window သုံးပါ၊ သို့မဟုတ် အွန်လိုင်းတွင် လုပ်ပါ |

offline ဖြစ်ပြီး ခလုတ်က {{ui:Offline ready}} မဖတ်ပါက tab ကို reload သို့မဟုတ် ပိတ်ခြင်း မလုပ်ပါနှင့်: ဖွင့်ပြီးသား အရာများ ဆက်အလုပ်လုပ်သည်။ {{key:Mod+S}} ဖြင့် မော်ဒယ်ကို သိမ်းပြီး အွန်လိုင်းပြန်ရောက်သည်အထိ စောင့်ပါ။

## Unsaved work

browser က စာမျက်နှာမှ ထွက်ရန် မေးလျှင် DetailCraft တွင် မသိမ်းရသေးသော ပြောင်းလဲမှုများ ရှိသည်။ ဆက်ရှိနေရန် ရွေးပြီး {{key:Mod+S}} ကို နှိပ်ပါ။ tab ပိတ်ပြီးနောက် DetailCraft သည် မော်ဒယ်ကို ပြန်ယူနိုင်ခြင်း မရှိပါ။

## Still stuck

ဘာလုပ်ခဲ့သည်နှင့် မက်ဆေ့ချ်အတိအကျကို မှတ်ထားပါ၊ ထို့နောက် [support page](https://getcadcraft.com/support) မှတစ်ဆင့် ကျွန်ုပ်တို့ကို အကြောင်းကြားပါ။
