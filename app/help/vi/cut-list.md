---
title: Danh sách cắt
summary: Xếp dầm, cột, thanh giằng và dầm thang vào các chiều dài thanh có sẵn, có tính rãnh cưa, rồi xem cần mua bao nhiêu thanh và phế liệu.
keywords: danh sách cắt, xếp chỗ, chiều dài thanh có sẵn, thanh, rãnh cưa, cưa, đoạn thừa, phế liệu, ghép, mua, nhiều
from: 81d06ce5
---

Thẻ {{ui:Cut list}}, nằm dưới khung nhìn, tính cách cắt các cấu kiện thẳng của mô hình từ các thanh có sẵn: cần mua bao nhiêu thanh mỗi chiều dài cho từng tiết diện và vật liệu, mỗi thanh chứa những đoạn nào, và phế liệu.

## Thiết lập thanh có sẵn

Ở đầu thẻ:

- **Chiều dài thanh có sẵn (mm):** các chiều dài bạn có thể mua, cách nhau bằng dấu cách, ví dụ `6000 12000`, hoặc thanh 20 ft và 40 ft là `6096 12192`. Tối đa tám.
- **Rãnh cưa (mm):** phần vật liệu mỗi lần cắt mất đi (ban đầu là 3).
- **Cắt đầu (mm):** cắt bỏ đầu mỗi thanh trước đoạn đầu tiên (ban đầu là 0).
- **Giữ đoạn thừa từ (mm):** đoạn thừa dài ít nhất bằng số này sẽ trả về kho; đoạn ngắn hơn là phế liệu (ban đầu là 500).

Các giá trị này được lưu trong trình duyệt này, giống các [cài đặt](topic:settings) khác.

## Cách xếp

- Mọi dầm, cột, thanh giằng và dầm thang, theo ký hiệu cấu kiện và số lượng; tấm được cắt từ tôn và không được xếp ở đây.
- Mỗi tiết diện và vật liệu được xếp riêng.
- Cấu kiện dài nhất xếp trước, mỗi cấu kiện vào thanh đầu tiên đủ chỗ; thanh mới bắt đầu bằng chiều dài thanh có sẵn lớn nhất. Sau đó mỗi thanh được mua với chiều dài thanh có sẵn ngắn nhất vẫn đủ cho các đoạn cắt của nó.
- Mỗi lần cắt mất một rãnh cưa (không mất gì sau lần cắt kết thúc đúng cuối thanh); mỗi thanh mất phần cắt đầu.
- Cấu kiện dài hơn mọi chiều dài thanh có sẵn được liệt kê dưới **Dài hơn mọi thanh có sẵn**, không được xếp: hãy nối nó (xem [Mối nối](topic:splices)) hoặc thêm chiều dài thanh có sẵn dài hơn.

## Đọc kết quả

- **Tóm tắt:** theo tiết diện và vật liệu, các cấu kiện, số thanh cần mua (ví dụ "2 × 12000, 1 × 6000"), số mét mua và đã dùng, và phế liệu.
- **Thanh và các đoạn cắt:** mọi thanh, chiều dài thanh có sẵn, các đoạn cắt theo ký hiệu cấu kiện và chiều dài, và đoạn thừa: giữ lại hay thành phế liệu.

{{ui:Download CSV}} lưu cả hai bảng thành `<name> cut list.csv`.

DetailCraft không xếp tấm vào tôn, và không trộn tiết diện hoặc vật liệu trên cùng một thanh.
