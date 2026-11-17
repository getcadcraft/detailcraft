---
title: Kiểm tra va chạm
summary: Tìm các cấu kiện, bản và móng xuyên vào nhau, bỏ qua những phần mà một liên kết cố ý cho chạm nhau, và đi đến từng va chạm.
keywords: va chạm, kiểm tra va chạm, va vào nhau, giao thoa, chồng lấn, cắt nhau, va chạm cứng, phối hợp, kiểm tra mô hình
from: 04d72d3b
---

Mở thẻ {{ui:Va chạm}} dưới khung nhìn và chọn {{ui:Kiểm tra ngay}}. DetailCraft xét mọi cặp cấu kiện trong các giai đoạn đang hiển thị: thép với thép, và thép với móng. Thẻ liệt kê từng va chạm, sâu nhất trước, với:

- hai cấu kiện, theo ký hiệu chi tiết (hoặc ký hiệu móng) và tiết diện;
- **Chồng lấn (mm)**: một điểm của cấu kiện này nằm sâu trong cấu kiện kia bao nhiêu, đến mặt gần nhất;
- **Gần**: giao điểm lưới và cao độ tại đó, hoặc tọa độ của nó;
- {{ui:Hiện}}: chọn cả hai cấu kiện và đưa vị trí đó vào giữa khung nhìn.

Tiêu đề thẻ cho biết lần kiểm tra gần nhất tìm thấy bao nhiêu va chạm. Việc kiểm tra không tự chạy: sau khi bạn thay đổi mô hình, danh sách sẽ báo điều đó, và {{ui:Kiểm tra ngay}} sẽ chạy lại.

## Những gì không phải là va chạm

- Các cấu kiện chỉ chạm nhau: một bản áp vào mặt bích, một bản chân cột trên móng của nó, hai cấu kiện nối đầu với nhau. **Dung sai (mm)** đặt mức hai cấu kiện được xuyên vào nhau bao nhiêu trước khi tính là va chạm (ban đầu là 1 mm; tối đa 50).
- Các cấu kiện mà một liên kết nối với nhau: một bản đầu với dầm của nó và với bản cánh cột mà nó được bắt bulông, dầm và cột của nút đó, một bản chân cột với cột của nó, các bản của mối nối chồng với cả hai đoạn, một thanh giằng với bản tăng cường của nó (khe của ống không được cắt trong mô hình). Liên kết đó xem chúng là phải chạm nhau.
- Gân chống cắt của bản chân cột trong móng bên dưới (nó nằm trong hốc vữa).
- Bulông và thanh neo (chúng xuyên qua lỗ) và thép thanh.
- Các cấu kiện ở giai đoạn ẩn. Xem [Giai đoạn](topic:phases).

Một thanh giằng hay dầm chạy vào một cột mà không có liên kết giữa chúng **là** một va chạm: nút đó vẫn cần một liên kết. Khung mẫu có thanh giằng cho thấy điều này: nó không có bản tăng cường. Chọn nó và chọn {{ui:Bản tăng cường}} ([Bản tăng cường thanh giằng](topic:brace-gussets)) thì các va chạm của nó sẽ mất.

## Cần biết

- Chồng lấn đo độ sâu vào vật liệu, nên một cấu kiện xuyên vào bụng hoặc cánh mỏng của cột chỉ hiện vài milimét ngay cả khi nó đi sâu.
- Các cấu kiện được kiểm tra theo đúng hình dạng đã cắt: cắt góc và phần cắt lùi của dầm tại bản đầu được tính đến. Lỗ thì không.
