---
title: Tồn kho nhà cung cấp và thời gian giao hàng
summary: Đối chiếu các thanh thép mà danh sách cắt của bạn mua với danh mục tồn kho của nhà cung cấp: có đủ không, và phải chờ bao lâu?
keywords: nhà cung cấp, tồn kho, thời gian giao hàng, bãi thép, nhà máy, sẵn có, đặt hàng chờ, thanh, mua hàng, nguồn cung
from: 1373f5a3
---

Tab {{ui:Supply}} tra cứu từng tiết diện mà {{ui:Cut list}} mua trong danh mục tồn kho của nhà cung cấp. Tệp vẫn nằm trong mô hình; không có gì được gửi đi đâu cả.

## Thêm tệp của nhà cung cấp

Nhấn {{ui:Add a supplier file}} và chọn một tệp CSV từ nhà cung cấp (phân cách bằng dấu phẩy, dấu chấm phẩy hoặc tab). Tệp cần một cột cho mục hoặc tiết diện (Item, Name, Description, Section, SKU), và một cột cho tồn kho (In stock, Quantity, On hand) hoặc cho thời gian giao hàng. Đơn vị (each, metres, kilograms, tonnes), giá, nhà cung cấp và ngày nhập lại được đọc khi có cột tương ứng. Các cụm từ cũng được nhận diện: "Out of stock", "In stock", "2-3 weeks", "backorder". Có thể giữ tối đa năm tệp; thêm một tệp trùng tên sẽ thay thế tệp cũ.

## Những gì bạn thấy

Với mỗi tiết diện mà danh sách cắt mua, bảng hiển thị lượng mô hình cần, lượng tồn kho, thời gian giao hàng, nhà cung cấp và kết quả:

- **Đủ:** tồn kho đủ.
- **Thiếu:** tồn kho thấp hơn nhu cầu. Nếu tồn kho thấp hơn nhu cầu và bạn đặt thời gian chờ tối đa, thời gian giao hàng cho biết phần còn lại mất bao lâu.
- **Quá muộn:** không có số liệu tồn kho và thời gian giao hàng dài hơn thời gian chờ bạn chấp nhận.
- **Không có số liệu tồn kho:** tệp không ghi.
- **Đơn vị khác:** nhà cung cấp liệt kê tiết diện bằng một đơn vị mà mô hình không tính được.

Nhu cầu của mô hình được tính bằng thanh (từ danh sách cắt đã xếp lồng, theo chiều dài thanh tồn kho của bạn), bằng mét thanh mua vào và bằng kg (trọng lượng trên mét của tiết diện), và dùng đơn vị riêng của tệp. Tiết diện được khớp theo tên ("W16 X 26" và "w16x26" là một). Các tiết diện không có trong tệp sẽ được liệt kê.

Các tiết diện thiếu và giao muộn nằm trong bảng {{ui:Problems}}. Ở đây không có gì đặt hàng cả.

## Giới hạn

Số liệu tồn kho và thời gian giao hàng là của tệp, tính đến ngày tệp được tạo. Bản thép không được xếp lồng nên không được tra cứu. Tệp chỉ được đọc: mọi chỉ dẫn trong tệp chỉ là văn bản.
