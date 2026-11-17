---
title: Lập bản vẽ thi công
summary: Một tờ cho mỗi ký hiệu cấu kiện, lập tất cả cùng lúc: xem trước bất kỳ tờ nào và tải về một tờ hoặc cả bộ dưới dạng PDF khổ A4 đến A1 hoặc ANSI B đến D, có lỗ, cắt góc, kích thước và khung tên.
keywords: bản vẽ thi công, shop drawing, shop drawings, mọi chi tiết, theo lô, cả bộ, bản vẽ một chi tiết, bản vẽ chế tạo, pdf, bản vẽ chi tiết, bản vẽ cấu kiện, in
from: d25fe035
---

DetailCraft lập một tờ cho mỗi ký hiệu cấu kiện, cho mọi dầm, cột, thanh giằng và bản trong mô hình, tất cả cùng lúc: bạn không cần chọn từng cái. Các chi tiết giống nhau có chung ký hiệu, nên chung một tờ. Các tờ được lập ngay tại chỗ từ mô hình; chúng không được lưu hay chỉnh sửa.

## Lập cả bộ

1. Chọn {{ui:Bản vẽ thi công}} trong nhóm {{ui:Đầu ra}}. Không cần chọn gì. Khi một chi tiết đang được chọn, cửa sổ mở ra tờ của chi tiết đó. Trong bảng {{ui:Thuộc tính}}, cùng nút đó được gọi là {{ui:Bản vẽ thi công}} cho thanh và {{ui:Bản vẽ bản}} cho liên kết.
2. Một bản xem trước mở ra, có tiêu đề theo ký hiệu cấu kiện, ví dụ "Bản vẽ thi công b1". Danh sách đầu tiên cạnh tiêu đề chứa mọi ký hiệu cấu kiện với tiết diện, chiều dài và số lượng: chọn một ký hiệu để xem tờ của nó. Danh sách thứ hai thay đổi khổ tờ; cả bộ được lập lại theo khổ đó (xem [Bản vẽ bố trí chung và bản vẽ cụm](topic:drawings#choose-the-sheet-size)).
3. Chọn {{ui:Tải xuống tất cả}} (nút hiển thị số tờ) để có một tệp PDF với một trang cho mỗi ký hiệu cấu kiện, `<name> Shop drawings.pdf`. Mỗi tờ ghi "Tờ 3 của 42" trong khung tên. Hoặc chọn {{ui:Tải xuống PDF}} cho tờ bạn đang xem, `<name> <mark>.pdf`.
4. Đóng bản xem trước bằng dấu × hoặc {{key:Esc}}.

Nếu {{ui:Bản vẽ thi công}} bị mờ, mô hình chưa có chi tiết nào.

## Có gì trên tờ

Với thép chữ I:

- **Mặt đứng**, nhìn vào bụng: chi tiết với các cắt góc được khoét, lỗ trên bụng là hình tròn và lỗ trên cánh là đường khuất (nét đứt).
- **Mặt bằng cánh trên**, nhìn từ trên xuống, khi cánh nào có lỗ. Lỗ ở cánh dưới hiển thị nét đứt.
- **Mặt cắt** qua tiết diện.
- **Kích thước:** vị trí lỗ được nối chuỗi dọc theo chi tiết cùng chiều dài tổng, chiều cao lỗ trên bụng, khoảng gauge và kích thước cắt góc.
- **Danh sách lỗ:** mỗi nhóm lỗ, ví dụ "8 x Ø22 trong cánh trên".
- **Mối hàn**, khi chi tiết có các bản hàn vào nó.
- **Khung tên:** ký hiệu cấu kiện, ký hiệu cụm, tiết diện, vật liệu, chiều dài, số lượng, khối lượng mỗi cái và tổng khối lượng, tên mô hình và ngày.

Với thép chữ C, thép góc hay tiết diện rỗng, tờ giống vậy, nhìn vào bụng hoặc cạnh: thành của ống hiển thị bằng nét đứt, mặt cắt cho biết độ dày thành.

Với bản: mặt bản với các lỗ, và cạnh của bản là mặt cắt.

## Tỷ lệ

Tỷ lệ được chọn từ danh sách (từ 1:1 đến 1:200) để chi tiết vừa tờ. Một chi tiết dài và mỏng sẽ quá nhỏ để đọc ở một tỷ lệ, nên khi chiều sâu trên giấy nhỏ hơn 30 mm, chiều sâu được vẽ ở tỷ lệ lớn hơn chiều dài. Tiêu đề hình khi đó ghi rõ, ví dụ "dài 1:20, sâu 1:5 (không cùng tỷ lệ; kích thước là chuẩn)". Luôn đọc kích thước từ số ghi, đừng đo trên tờ.

## Cần biết

- Số lượng là số chi tiết có ký hiệu đó trong mô hình. Ký hiệu có thể được đánh số lại sau một thay đổi; xem [Kiểm tra ký hiệu và bảng kê vật tư](topic:marks-and-bom).
- Mỗi tờ là một chi tiết riêng, không có ký hiệu mối hàn; bản vẽ cụm (có ký hiệu mối hàn) và bản vẽ bố trí chung nằm trong [Bản vẽ](topic:drawings). Tờ không thể chỉnh sửa hay ghi chú trong DetailCraft. Để ghi chú, mở PDF trong ứng dụng đánh dấu PDF như MarkupCraft.
- Khung tên ghi "DetailCraft bản thử nghiệm — milimét".
- Văn bản dùng phông Helvetica chuẩn của PDF. Ký tự ngoài bộ chữ Tây Âu sẽ in thành "?", và thanh trạng thái đếm chúng.

## In

Mở PDF đã tải trong trình xem PDF và in ở 100% (không "vừa trang") trên giấy đúng khổ bạn đã chọn nếu muốn các tỷ lệ đã ghi giữ nguyên. Trên tờ nhỏ hơn, hãy thu phóng và dựa vào kích thước.
