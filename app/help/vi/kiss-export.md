---
title: Xuất tệp KISS cho phần mềm chế tạo
summary: Gửi bảng kê vật tư sang phần mềm quản lý chế tạo (MIS) dưới dạng tệp KISS 1.1: cụm, cấu kiện, giai đoạn dưới dạng trình tự, lỗ, cắt góc và mối hàn.
keywords: kiss, kss, mis, quản lý chế tạo, kiểm soát sản xuất, dự toán, bảng kê vật tư, bom, xuất, fabtrol, trình tự
from: 30cf3951
---

Trong nhóm {{ui:Output}}, mở {{ui:More}} và chọn {{ui:KISS file for fabrication software}}. DetailCraft tải xuống `<name>.kss`, một tệp KISS ("Keep It Simple, Steel", phiên bản 1.1), định dạng văn bản thuần mà hầu hết các phần mềm quản lý chế tạo dùng để nhập bảng kê vật tư.

## Nội dung của tệp

- Phần đầu: số công việc (tám ký tự đầu gồm chữ và số của tên mô hình), tên mô hình, ngày giờ, và việc kích thước có theo hệ mét hay không.
- Với mỗi ký hiệu cụm: cấu kiện chính (số lượng = số cụm), một dòng bản vẽ (A-B1 và tương tự, số của bản vẽ cụm), một dòng cụm (tên, kiểu, khối lượng, chiều dài tổng, chiều sâu và chiều rộng), một dòng trình tự cho mỗi [giai đoạn](topic:phases) mà cụm thuộc về, và các dòng nhân công: lỗ (số lượng, đường kính, độ dày xuyên qua), cắt góc và mối hàn.
- Sau đó là mỗi cấu kiện gắn vào nó, với số lượng **tổng** (theo cụm × số cụm), như tiêu chuẩn yêu cầu.
- Bulông rời và thanh neo trên bản vẽ BOLTS, cụm FIELD.
- Mỗi dòng ghi loại (W, C, L, HSS, PL, hoặc MI cho tiết diện tùy chỉnh), kích thước, mác thép, chiều dài cắt tính bằng milimét, tên cấu kiện và khối lượng.

## Đơn vị Anh hay mét

Trong [Cài đặt DetailCraft](topic:settings), **Kích thước tệp KISS** chọn:

- **Tự động** (mặc định): đơn vị Anh khi mọi thanh đều là tiết diện AISC, ngược lại là mét.
- **Đơn vị Anh**: tiết diện theo ký hiệu AISC (W 16X26, HSS 4X4X.250); bản và bulông, mà DetailCraft giữ bằng milimét, làm tròn đến 1/16 in; khối lượng tính bằng pound.
- **Mét**: tiết diện châu Âu theo tên (IPE300), bản theo độ dày X chiều rộng tính bằng milimét; khối lượng tính bằng kilôgam.

Chiều dài luôn tính bằng milimét với hai chữ số thập phân, bất kể thiết lập: tiêu chuẩn KISS yêu cầu như vậy và chương trình nhận sẽ tự đổi.

:::note
Mác thép được rút gọn còn tám ký tự theo tiêu chuẩn: A572 Gr 50 thành A572-50. Dấu phẩy trong tên được đổi thành khoảng trắng (định dạng này không có dấu ngoặc kép). Hãy kiểm tra một lần nhập trong chương trình của bạn trước khi dựa vào nó: tệp KISS của DetailCraft được kiểm tra theo tiêu chuẩn tại đây, chưa được kiểm tra trong phần mềm chế tạo nào.
:::
