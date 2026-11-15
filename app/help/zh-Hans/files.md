---
title: 打开、保存和导出文件
summary: DetailCraft 的模型文件、它写出的每种导出文件、文件的保存位置，以及不同浏览器和网络连接下的差异。
keywords: 打开, 保存, 导出, 下载, 文件, json, ifc, nc1, dstv, csv, pdf, zip, 格式, 导入
from: 6fbc8e8f
---

DetailCraft 有一个自有文件，即模型文件，另外还有五种导出。每次保存和每次导出都是一次下载。不会上传任何内容，也不会在服务器上保存任何内容。

## 模型文件

DetailCraft 模型保存为 `<name>.detailcraft.json`，其中 `<name>` 是 {{ui:Model}}面板中的模型名称。文件中包含轴网、标高、杆件（及其孔洞和切角）、连接及其设置、基础以及你的自定义截面。

零件、编号、螺栓、焊缝和钢筋不会被保存：DetailCraft 每次打开模型时都会根据模型重新计算这些内容。因此模型文件很小。

### 保存

1. 在{{ui:Model}}面板顶部的{{ui:Name}}输入框中输入名称。
2. 在{{ui:File}}组中选择{{ui:Save}}，或按 {{key:Mod+S}}。
3. 浏览器会下载 `<name>.detailcraft.json`。状态栏显示“已保存…（已下载）”，浏览器标签页标题开头的圆点消失。

每次保存都会生成一次新的下载。浏览器不会覆盖你打开的文件；根据其设置，它会在文件名后添加编号（例如 `Frame (1).detailcraft.json`），或询问保存位置。若要保留各个版本，请为下载的文件重命名。

:::chromium
除非在浏览器的下载设置中开启了**下载前询问每个文件的保存位置**，否则 Chrome 和 Edge 会保存到“下载”文件夹。若想每次都选择文件夹和文件名，请开启此选项。
:::

:::firefox
除非其设置中开启了**总是询问保存文件的位置**，否则 Firefox 会保存到“下载”文件夹，或每次都询问。
:::

:::safari
Safari 会保存到“下载”文件夹。若要更改文件夹，请打开 **Safari、设置、通用、文件下载位置**。
:::

### 打开

1. 在{{ui:File}}组中选择{{ui:Open}}，或按 {{key:Mod+O}}。
2. 选择一个 `.detailcraft.json` 文件。

也可以将文件从{{pick:mac=访达|windows=文件资源管理器|linux=文件管理器}}拖到视图上放下。拖动时，视图会显示“将 DetailCraft 模型拖放到此处以打开”。

如果当前打开的模型有未保存的更改，DetailCraft 会先询问：{{ui:Cancel}}、{{ui:Discard changes}}或{{ui:Save first}}。

DetailCraft 在使用文件之前会检查其中的每个字段。无法使用的内容会被略过，状态栏会说明原因，例如“有 2 个杆件无效，已略过。”由较新版本 DetailCraft 保存的模型会被拒绝打开并显示提示，而不会只打开一半。

### 可打开的内容

可打开其自有模型文件（`.json`，最大50 MB）和 IFC 文件（`.ifc`，IFC2X3或IFC4，最大200 MB）。IFC 文件无论是打开还是通过{{ui:Import IFC}}导入，都会成为一个新模型，包含其梁、柱、杆件、钢板、轴网和标高，并在其中切出孔洞和切角，螺栓则作为独立螺栓；报告会列出被略去的内容。参见 [IFC 导出](topic:ifc-export#import)。目前暂不支持打开 DWG、DXF 或其他深化设计软件的模型：尝试打开时会显示“DetailCraft 可打开其自有模型（.detailcraft.json）和 IFC 文件（.ifc）。”

## 未保存的工作、最近文件和桌面应用

- 模型中有尚未保存的更改时，DetailCraft 会在此浏览器中保留一份副本。若标签页或浏览器在保存前停止运行，下次打开 DetailCraft 时，它会询问**恢复未保存的内容？**：可以恢复该副本，也可以放弃。参见 [恢复未保存的内容](common:recover)。
- 在浏览器允许 DetailCraft 再次打开文件时，最近打开过的模型会列在起始屏幕上；点击即可重新打开。
- 在桌面应用中，{{ui:Save}}会将模型写回打开的文件（在浏览器中则下载一份副本）；双击 DetailCraft 模型或 IFC 文件，即可在 DetailCraft 中打开。

## 导出

所有导出文件都使用模型名称。在{{ui:Output}}组中选择导出项。

| 按钮 | 文件 | 内容 |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4：楼层、轴网、每个钢零件（作为带孔洞和切角的型材拉伸体）、装配体、螺栓和锚栓、基础以及每根钢筋。参见 [导出 IFC](topic:ifc-export)。 |
| {{ui:NC files}} | `<name> NC.zip` | 每个零件编号对应一个 DSTV `.nc1` 文件。参见 [将 NC 文件发送到加工车间](topic:nc-export)。 |
| {{ui:BOM}} | `<name> BOM.csv` | 一个文件中包含三张表：零件、装配体，以及螺栓和锚栓。参见 [编号与材料清单](topic:marks-and-bom)。 |
| {{ui:Bending}} | `<name> bending schedule.csv` | 基础中的每个钢筋编号。参见 [基础与钢筋](topic:footings-and-rebar)。 |
| {{ui:Shop drawing}} | `<name> <mark>.pdf` | `<name> Shop drawings.pdf` 包含每个零件编号的一张图纸；{{ui:Download this sheet}}下载当前显示的那一张（除非你选择了其他尺寸，否则为 A3）。参见 [制作加工详图](topic:shop-drawings)。 |
| {{ui:Drawings}} | `<name> drawings.pdf`、`<name> <sheet>.pdf`；`<name> <sheet>.dwg` 或 `.dxf`，多个文件打包在 `<name> drawings DWG.zip`（或 `DXF.zip`）中 | 所选图纸尺寸上的平面图、立面图和装配图；DWG 和 DXF 以全尺寸输出，图纸上 1 unit = 1 mm。参见 [总体布置图和装配图](topic:drawings)。 |

### 关于 CSV 文件的说明

- 文件以字节顺序标记（BOM）开头，以便电子表格程序正确读取带重音符号的字符。
- 以 `=`、`+`、`-` 或 `@` 开头（且不是纯数字）的单元格，会在前面加上前导撇号，因此电子表格绝不会将其作为公式执行。
- 长度单位为毫米，重量单位为千克。

### 关于 PDF 的说明

PDF 中的文字使用标准 Helvetica 字体。PDF 无法显示的字符（西欧字符集以外的字符）会打印为“?”，状态栏会显示其数量。

## 单位

DetailCraft 全程以毫米为单位：轴网、标高、坐标、型材、孔洞以及所有导出内容均以毫米计。型材名称保持其公布形式（W12x50 是美国标准代号，尽管其尺寸以毫米显示）。目前尚不支持英制输入。

## 在线与离线

打开、保存和导出都在浏览器中完成，因此只要 DetailCraft 已加载，无论是否联网，操作效果都相同。

要在之后无网络连接时使用 DetailCraft，请在联网时于应用栏中选择{{ui:Save for offline}}。按钮会显示进度（“保存中（3 / 20）”），完成后显示为{{ui:Offline ready}}。已保存的副本包含 3D 图形库（约 2.6 MB）和本帮助，因此一旦保存，3D 视图、所有导出和帮助都可以离线使用。详情，以及仍需联网的功能，参见 [离线工作](common:offline)。

:::offline
当前处于离线状态。若应用栏显示{{ui:Offline ready}}，打开、保存和导出照常可用。若未显示，请保持此标签页打开，恢复联网前不要重新加载，并立即保存模型。
:::

云端保存目前尚不可用，桌面版也尚未发布。请像备份其他工作文件一样备份 `.detailcraft.json` 文件。更多信息参见[文件存放位置](common:your-files)。

## 未保存的工作

DetailCraft 只在打开的标签页中保留模型。若在有未保存的更改时关闭或重新加载标签页，浏览器会询问是否离开页面；其措辞由浏览器自行决定。请经常按 {{key:Mod+S}} 保存。
