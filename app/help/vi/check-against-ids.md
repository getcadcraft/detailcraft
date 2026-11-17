---
title: Kiểm tra xuất IFC theo IDS của khách hàng
summary: Tải tệp .ids bạn được cung cấp và xem mọi chi tiết xuất ra không đạt trong Vấn đề, trước khi bạn gửi IFC.
keywords: ids, đặc tả bàn giao thông tin, buildingsmart, yêu cầu, bàn giao, kiểm tra, xác thực, qa, xuất ifc, thuộc tính, vật liệu, mua sắm
from: 50d0f785
---

## Bạn sẽ làm gì

IDS (Information Delivery Specification, một tiêu chuẩn của buildingSMART) là danh sách những gì một IFC phải có. DetailCraft kiểm tra IFC mà nó sẽ xuất (cùng tệp mà {{ui:IFC}} ghi ra) theo IDS bạn được cung cấp, và liệt kê mọi chi tiết không đạt.

## Các bước

1. Mở hoặc vẽ mô hình của bạn.
2. Nhấp {{ui:Kiểm tra theo IDS…}} trong nhóm {{ui:Đầu ra}} của thanh công cụ.
3. Nhấp {{ui:Tải một tệp .ids…}} và chọn tệp. Không có gì được tải lên.
4. Đọc kết quả: mỗi đặc tả với {{ui:Đạt}} hoặc {{ui:Không đạt}} và số phần tử nó áp dụng.
5. Mở Vấn đề ({{key:Ctrl+Shift+M}}) và nhấp một lỗi không đạt: cấu kiện, liên kết, cầu thang hoặc móng mà nó xuất phát từ đó sẽ được chọn và khung nhìn phóng to tới nó.

## Bạn sẽ thấy gì

- Một cảnh báo cho mỗi phần tử xuất và mỗi yêu cầu nó không đạt, kèm tên đặc tả, điều IDS yêu cầu và điều bản xuất có.
- Báo cáo kiểm tra (trong Vấn đề) bắt đầu bằng IDS: tiêu đề, phiên bản, tác giả và số đếm của từng đặc tả.

## Cần biết

- IDS được lưu trong tệp mô hình, nên nó được kiểm tra lại khi bạn mở mô hình. Tải hay bỏ IDS đều là một bước có thể hoàn tác.
- Mỗi thay đổi được kiểm tra lại sau một lát; với mô hình lớn, kiểm tra chờ lâu hơn giữa các lần chạy.
- GlobalId của bản xuất được tạo từ tên mô hình và số hiệu chi tiết bên trong DetailCraft, nên chúng giữ nguyên từ lần kiểm tra này sang lần khác. Đổi tên mô hình sẽ cấp GlobalId mới cho mọi phần tử.
- Các số được so sánh theo đơn vị SI (bản xuất tính bằng milimét; các chiều dài được đổi sang mét trước).

- Các mẫu trong IDS được đọc như toàn bộ giá trị. Ký tự `^` ở đầu và `$` ở cuối cũng được coi là "toàn bộ giá trị", như hầu hết các tệp IDS hiểu.

## Tiếp theo

- [Xuất IFC](topic:ifc-export)
