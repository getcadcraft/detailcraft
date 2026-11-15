---
title: 界面导览
summary: DetailCraft 中的每个栏、面板和选项卡，以及它们的屏幕名称和用途。
keywords: 界面, 布局, 工具栏, 面板, 特性, 状态栏, 报告, ui, 选项卡
from: 94f81073
---

DetailCraft 填满应用栏下方的浏览器窗口。自上而下依次为：工具栏、三列（{{ui:Model}}面板、视图、{{ui:Properties}}面板）、报告选项卡，然后是状态栏。

## 应用栏

位于最顶部的细长栏属于 CadCraft 网站，而非模型。它显示应用名称和版本、{{ui:About DetailCraft}}（关于 DetailCraft）链接、{{ui:Help}}（或 {{key:F1}}）本帮助按钮、{{ui:Save for offline}}、屏幕模式按钮，以及{{ui:Paper}} / {{ui:Model}}切换开关。

- {{ui:Save for offline}}使 DetailCraft、其 3D 视图和本帮助保存在浏览器中，以便无网络时也能打开。保存后显示{{ui:Offline ready}}；此时点击它可选择{{ui:Save again (get the newest version)}}或{{ui:Remove the offline copy}}。参见[离线工作](common:offline)。
- {{ui:Paper}}为浅色界面，{{ui:Model}}为深色界面。3D 视图会立即随之变化；模型中的任何内容都不会改变。
- 屏幕模式按钮和 {{key:Ctrl+Shift+F}} 会在普通、全屏和隐藏栏的全屏三种模式之间循环切换。{{key:Ctrl+Shift+F}} 在所有电脑上都使用 Control 键，包括 Mac。隐藏栏时，将指针移到屏幕顶边（或在触摸屏上轻触顶边）即可再次显示。{{key:Esc}} 退出全屏。

## 工具栏

工具栏分为五组。将指针悬停在按钮上可查看其功能及快捷键。

| 组 | 按钮 | 作用 |
|---|---|---|
| {{ui:File}} | {{ui:New}}、{{ui:Open}}、{{ui:Import IFC}}、{{ui:Save}}、{{ui:Sample}} | 新建模型，打开已保存的 `.detailcraft.json` 或 IFC 文件，保存模型，或打开示例框架 |
| {{ui:Place}} | {{ui:Select}}、{{ui:Beam}}、{{ui:Column}}、{{ui:Brace}}、{{ui:Plate}}、{{ui:Footing}}、{{ui:Stair}} | 视图中下一次点击所使用的工具 |
| {{ui:Connect}} | {{ui:End plates}}、{{ui:Base plate}}，以及{{ui:More}}中的：{{ui:Shear tabs}}、{{ui:Splice}}、{{ui:Gusset}}、{{ui:Similar}} | 为所选梁、柱或支撑添加连接，或将所选连接复制到每个与之相似的节点 |
| {{ui:Edit}} | {{ui:Undo}}、{{ui:Redo}}、{{ui:Copy}}、{{ui:Paste}}、{{ui:More}} | 逐步撤销和重做编辑；复制所选内容并粘贴。{{ui:More}}会打开一个菜单，其中包含{{ui:Cut}}、{{ui:Copy}}、{{ui:Paste}}、{{ui:Paste in place}}、{{ui:Duplicate}}、{{ui:Delete}}、{{ui:Select all}}和{{ui:Select none}}，每项均标有快捷键 |
| {{ui:Output}} | {{ui:IFC}}、{{ui:NC files}}、{{ui:BOM}}、{{ui:Shop drawing}}、{{ui:Drawings}}，以及{{ui:More}}中的：{{ui:Bending}}、{{ui:Weight report by phase}}、{{ui:KISS file for fabrication software}} | 下载导出文件，或打开图纸页面 |

无法执行的按钮和菜单项会显示为灰色，将指针悬停其上即可看到原因。{{ui:End plates}}需要选中一根梁，{{ui:Base plate}}需要选中一根柱，{{ui:Similar}}需要选中一个连接，{{ui:Shop drawing}}需要一个含零件的模型，{{ui:Copy}}需要选中一个杆件或基础，{{ui:Paste}}需要先有复制内容。参见[复制、粘贴与创建副本](topic:copy-paste)。

## 模型面板（左侧）

- {{ui:Model}}：模型的{{ui:Name}}。它为你保存或导出的每个文件命名。
- {{ui:Grids}}：轴网线及其间距，以及{{ui:Apply grids}}。参见[设置轴网和标高](topic:grids-and-levels)。
- {{ui:Levels}}：每个标高一行（名称及标高值，单位为 mm），以及{{ui:Add level}}和{{ui:Apply levels}}。
- {{ui:Custom profile}}：创建自定义的参数化截面。打开前保持折叠。
- {{ui:Part marks}}：模型中的每个零件编号，及其截面、长度和数量。点击某个编号可选中第一个具有该编号的零件。

{{ui:Grids}}、{{ui:Levels}}和{{ui:Custom profile}}可以折叠：点击其标题即可。

## 视图（中间）

视图以 3D 显示模型。视图上方的视图栏有三个按钮和一个列表：

- {{ui:3D}}：可自由绕模型旋转。
- {{ui:Plan}}：俯视某一标高。按钮旁会出现标高列表。高于该标高 1.5 m 以上的部分会被剪切掉，以便清楚地看到并点击该标高。
- {{ui:Elevation}}：正视某一条字母轴网线（轴网 A、轴网 B……）。会出现字母轴网列表。只显示距该轴线 1 m 以内的钢构件。
- 视图栏右端的适合窗口按钮会缩放以显示整个模型。

每个标高的每个轴网交点都有一个小圆点。放置工具开启时，离指针最近的圆点会高亮，状态栏会说明其名称，例如“A/2 位于标高 1”。颜色用于区分构件类型：柱、梁、支撑和钢板各有其颜色，螺栓和锚栓另有一种颜色，基础为半透明，钢筋以管状绘制。孔洞显示为深色塞子，切角则显示为已切除的形状。

如何旋转、平移和缩放：[在 3D 视图中移动](topic:navigate-3d)。

模型为空时，视图会显示一个简短的“开始建模”列表。也可以将已保存的模型文件拖放到视图的任意位置以打开它。

## 特性面板（右侧）

此面板显示的内容取决于你当前的操作，其标题会说明是哪一种："模型"、"放置梁"、"梁 b2"、"端板连接"、"底板"、"基础 F1"、"已选 3 个"或"粘贴"。

- **未选择任何对象：**模型摘要（杆件、连接、基础、零件、编号、螺栓、钢材和钢筋重量、轴网、标高）。
- **放置工具开启时：**下一个构件的选项（截面、材料、位置、旋转；对于柱，还有{{ui:Up to}}）、所选截面的摘要，以及{{ui:Add by grid}}表单，可无需在视图中点击即可放置构件。
- **选中一个杆件时：**其名称、截面、材料、位置、旋转、两端坐标、编号、切割长度和重量、孔洞与切角，以及连接、其加工详图的按钮，和{{ui:Delete}}按钮。
- **选中一个连接时：**每个钢板、螺栓和焊缝的设置、该连接形成的螺栓和焊缝、其警告，以及{{ui:Apply to similar}}（应用到相同节点）。
- **选中一个基础时：**其位置和尺寸、底部网片、插筋，以及所用的钢筋编号。
- **选中多个对象时：**每种类型的杆件、连接和基础的数量、它们的钢材重量，以及{{ui:Copy}}、{{ui:Duplicate}}和{{ui:Delete}}按钮。
- **粘贴时：**剪贴板中的内容，以及按输入的偏移量粘贴，或粘贴到从列表中选择的轴网交点上的表单。

数字输入框在按下 {{key:Enter}} 或离开输入框时生效。每次更改都是一步，可以撤销。

## 报告选项卡（底部）

- {{ui:Problems}}：DetailCraft 无法建立的内容或需要你检查的内容，每行都带有{{ui:Select}}按钮。选项卡会以括号显示数量。
- {{ui:Bill of materials}}：零件、装配体，以及螺栓和锚栓，附重量，并带有{{ui:Download CSV}}链接。点击某个零件编号即可选中该零件。
- {{ui:Bending schedule}}：每个基础中的每个钢筋编号，附{{ui:Download CSV}}链接。

选中某个选项卡后，按 {{key:Left}} 和 {{key:Right}} 可在选项卡之间切换。

## 状态栏

底部的状态栏分为三部分：放置时指针下方的轴网交点、最新消息（刚刚发生的事情，或某项操作被拒绝的原因），以及零件、螺栓、钢材重量和钢筋重量的累计总数。若某个操作似乎没有反应，请先查看此处的消息。

模型有未保存的更改时，浏览器标签页标题会以圆点（•）开头。

## 窄屏

屏幕宽度小于约 760 像素时，各列会上下堆叠：工具栏、视图、状态栏、{{ui:Properties}}、报告选项卡，最后是{{ui:Model}}面板。滚动页面即可找到它们。DetailCraft 为桌面或笔记本电脑屏幕设计；手机适合查看，不适合深化设计。
