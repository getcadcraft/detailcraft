---
title: Gửi tệp NC đến xưởng
summary: Xuất tệp NC DSTV cho từng ký hiệu cấu kiện (chữ I, máng, thép góc, HSS, bản), nén thành zip, và kiểm tra trước khi đưa vào máy.
keywords: nc, nc1, dstv, cnc, máy, dây chuyền dầm, dây chuyền khoan, cắt bản, xuất, chế tạo, zip
from: 598b6091
---

DetailCraft ghi một tệp NC DSTV (`.nc1`) cho mỗi ký hiệu cấu kiện, với thép chữ I, máng, thép góc, HSS chữ nhật và tròn, và bản, rồi nén chúng lại với nhau. Dây chuyền dầm và máy cắt bản đọc các tệp này để cưa, khoan và cắt.

## Xuất

1. Xóa thẻ {{ui:Vấn đề}} trước: một kết nối không dựng được sẽ không tạo lỗ nào.
2. Lưu mô hình ({{key:Mod+S}}), để các tệp NC khớp với mô hình đã lưu.
3. Chọn {{ui:Tệp NC}} trong nhóm {{ui:Đầu ra}}.
4. Trình duyệt tải xuống `<name> NC.zip`. Thanh trạng thái cho biết tệp chứa bao nhiêu tệp, và liệt kê các ký hiệu mà nó không ghi (thép góc hoặc ống tròn có cắt góc).

Bên trong tệp zip, mỗi tệp được đặt tên theo ký hiệu cấu kiện: `b1.nc1`, `c1.nc1`, `p1.nc1` … Tệp zip không nén và mở được bằng mọi công cụ zip.

Nếu mô hình không có cấu kiện nào, thanh trạng thái sẽ báo điều đó.

## Mỗi tệp chứa gì

- **Tiêu đề (ST):** tên mô hình làm đơn hàng, ký hiệu cấu kiện làm bản vẽ và số chi tiết, giai đoạn 1 hoặc giai đoạn của cấu kiện, mác thép, số lượng, tiết diện và kích thước, khối lượng trên mét và diện tích sơn trên mét. Các vết cưa đều vuông góc.
- **Đường bao ngoài (AK):** sườn bụng với các cắt góc được khoét ra, và mỗi đường bao cánh được rút ngắn ở chỗ cắt góc loại bỏ nó.
- **Lỗ (BO):** mọi lỗ với mặt, vị trí và đường kính, kể cả các lỗ do bản đầu và bản chân cột tạo ra.

Từng trường một, cùng quy tắc mặt và tọa độ: [Các trường tệp NC](topic:nc1-fields).

## Những gì không được ghi

- Thép góc và ống tròn có cắt góc: không có tệp NC. Ký hiệu của chúng được liệt kê trên thanh trạng thái.
- Lỗ trong ống tròn (DetailCraft không tạo lỗ nào).
- Vát mép, đường bao trong, ký hiệu khắc (scribing) và góc cưa khác góc vuông.
- Lỗ dài (DetailCraft chỉ có lỗ tròn).

## Kiểm tra trước khi gia công

Các tệp NC của DetailCraft được đọc lại bởi bộ kiểm thử riêng của nó, nhưng chúng chưa được chạy trên máy của xưởng bạn.

1. Mở các tệp bằng trình xem NC của xưởng bạn hoặc phần mềm máy, rồi đối chiếu với bản vẽ thi công.
2. Kiểm tra một cấu kiện của mỗi loại trên máy trước khi chạy cả loạt.
3. Kiểm tra cách phần mềm của bạn đọc tọa độ y của cánh và các mặt của máng: DetailCraft đo y của cánh từ mép phía sau, và đặt máng nằm ngửa như bản vẽ tiêu chuẩn thể hiện (xem [Các trường tệp NC](topic:nc1-fields#faces-and-coordinates)).
