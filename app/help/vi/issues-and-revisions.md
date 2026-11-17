---
title: Vấn đề, bản sửa đổi và nhật ký thay đổi bản vẽ
summary: Giữ một lịch sử vấn đề chung với mô hình của kiến trúc sư: đọc các vấn đề vào, ghi chỉ thị công trường, bản vẽ thi công xưởng và mô hình liên kết theo một vấn đề, và đọc nhật ký thay đổi bản vẽ.
keywords: vấn đề, bản sửa đổi, các bản sửa đổi, nhật ký thay đổi, nhật ký thay đổi bản vẽ, sổ đăng ký bản vẽ, chỉ thị công trường, bản vẽ thi công xưởng, mô hình liên kết, dự thầu, thi công, lịch sử vấn đề, chế tạo
from: 4b9a1b7b
---

## Bạn sẽ làm gì

Làm việc trên cùng lịch sử vấn đề với phần còn lại của nhóm. Xem các tờ đã được phát hành ở bản sửa đổi nào, và ghi lại những gì xảy ra trên công trường vào đúng vấn đề mà nó thuộc về.

## Các bước

1. Mở **Vấn đề và bản sửa đổi**.
2. Chọn **Đọc lịch sử vấn đề** rồi chọn tệp `.issues.json` đã lưu từ BimCraft hoặc ứng dụng khác. Các vấn đề và bản ghi của tệp được thêm vào của bạn. Không có gì bị thay thế.
3. Chọn **Thêm bản ghi** cho chỉ thị công trường, bản vẽ thi công xưởng, bộ đánh dấu, mô hình liên kết hoặc ghi chú. Chọn vấn đề mà nó thuộc về và trạng thái của nó. Tệp bạn chọn được ghi lại theo tên, kích thước và SHA-256; tệp vẫn ở nguyên vị trí.
4. **Nhật ký thay đổi bản vẽ** hiển thị một hàng cho mỗi tờ và một cột cho mỗi vấn đề. Bản sửa đổi trong ngoặc là bản được phát hành lại mà không thay đổi.
5. **Tải xuống nhật ký thay đổi (CSV)** lưu các vấn đề, bảng tờ và các bản ghi. **Lưu lịch sử vấn đề** ghi một tệp mà các ứng dụng khác đọc được.

## Cần biết

- Các tờ vẫn được phát hành từ Bản vẽ, từng tờ một. Những vấn đề đó xuất hiện ở đây: các tờ được phát hành cùng một ngày với cùng một ghi chú là một vấn đề.
- Bản ghi và vấn đề bạn đọc vào được lưu trong tệp mô hình. Mỗi thay đổi là một lần Hoàn tác.
- Đọc cùng một tệp hai lần sẽ không thêm gì hai lần. Khi hai bản sao có cùng một bản ghi, bản mới hơn được giữ lại.
