---
title: 依客戶的 IDS 檢查 IFC 匯出
summary: 載入你收到的 .ids 檔案，在問題面板中查看每個不符合規定的匯出構件，然後再送出 IFC。
keywords: ids, 資訊交付規範, information delivery specification, buildingsmart, 需求, requirements, 交付, delivery, 檢查, check, 驗證, validation, 品管, qa, IFC 匯出, ifc export, 屬性, property, 材料, material, 採購, procurement
from: 50d0f785
---

## 作業內容

IDS（資訊交付規範，一項 buildingSMART 標準）是 IFC 必須包含的內容清單。DetailCraft 會依你收到的 IDS，檢查它將匯出的 IFC（與 {{ui:IFC}} 寫出的檔案相同），並列出每個未達要求的構件。

## 步驟

1. 開啟或繪製你的模型。
2. 在工具列的 {{ui:輸出}} 群組中，按一下 {{ui:依IDS檢查…}}。
3. 按一下 {{ui:載入 .ids檔案…}}，然後選取該檔案。不會上傳任何內容。
4. 查看結果：每項規範顯示 {{ui:通過}} 或 {{ui:未通過}}，以及它適用的元素數量。
5. 開啟問題面板（{{key:Ctrl+Shift+M}}），按一下某項失敗：產生該失敗的構件、接頭、樓梯或基腳會被選取，視圖會縮放至該處。

## 結果

- 每個匯出元素與每項未達的要求各產生一則警告，包含規範名稱、IDS 的要求內容，以及匯出檔中的實際內容。
- 問題面板中的檢查報告一開頭會列出 IDS：其標題、版本、作者，以及每項規範的計數。

## 注意事項

- IDS 會儲存在模型檔案中，因此開啟模型時會再次檢查。載入或移除 IDS 都是一個可復原的步驟。
- 每次變更後都會稍後再次檢查；在大型模型上，每次檢查之間的等待時間會較長。
- 匯出的 GlobalIds 來自模型名稱與 DetailCraft 內的零件編號，因此每次檢查之間都保持不變。重新命名模型會使每個元素取得新的 GlobalIds。
- 數值以 SI 單位比較（匯出檔以 mm 為單位；長度會先換算為 m）。

- IDS 中的模式會以整個值來讀取。開頭的 `^` 與結尾的 `$` 同樣會被視為「整個值」，與多數 IDS 檔案的意義一致。

## 下一步

- [匯出 IFC](topic:ifc-export)
