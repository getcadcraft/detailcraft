---
title: 依据客户的 IDS 检查 IFC 导出
summary: 载入客户提供的 .ids 文件，在“问题”中查看每个不符合要求的导出构件，然后再发送 IFC。
keywords: ids, 信息交付规范, information delivery specification, buildingsmart, 要求, requirements, 交付, delivery, 检查, check, 验证, validation, qa, IFC 导出, ifc export, 属性, property, 材料, material, 采购, procurement
from: 50d0f785
---

## 本主题的操作内容

IDS（Information Delivery Specification，即信息交付规范，buildingSMART 标准）列出了 IFC 必须包含的内容。DetailCraft 会将其将要导出的 IFC 文件（与{{ui:IFC}}写出的文件相同）与客户提供的 IDS 进行核对，并列出所有不符合要求的构件。

## 步骤

1. 打开或绘制模型。
2. 在工具栏的{{ui:输出}}组中点击{{ui:依据IDS检查…}}。
3. 点击{{ui:载入.ids文件…}}并选择文件。不会上传任何内容。
4. 查看结果：每条规范均显示{{ui:通过}}或{{ui:未通过}}，以及其适用的构件数量。
5. 打开“问题”（{{key:Ctrl+Shift+M}}）并点击某项未通过的结果：其来源的杆件、连接、楼梯或基础会被选中，视图缩放至该处。

## 结果说明

- 每个导出构件、每项未满足的要求各产生一条警告，内容包括规范名称、IDS 的要求以及导出文件中的实际内容。
- 检查报告（位于“问题”中）开头为 IDS 信息：标题、版本、作者以及每条规范的统计数量。

## 注意事项

- IDS 会保存在模型文件中，因此打开模型时会再次进行检查。载入或移除 IDS 均可作为一步操作撤销。
- 每次更改后会稍后自动再次检查；在大型模型中，两次检查之间的等待时间会略长。
- 导出的 GlobalId 由模型名称和 DetailCraft 内部的零件编号生成，因此每次检查之间保持不变。重命名模型会使每个构件获得新的 GlobalId。
- 数值按国际单位制进行比较（导出文件以毫米为单位；长度先换算为米）。

- IDS 中的模式按整个值进行解读。开头的 `^` 和结尾的 `$` 同样被视为“整个值”，这也是大多数 IDS 文件的本意。

## 下一步

- [导出 IFC](topic:ifc-export)
