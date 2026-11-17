---
title: Bản cắt
summary: Bắt bulông bụng dầm vào một bản được hàn sẵn trong xưởng vào cánh hoặc bụng cột, cả khi dầm gặp cột theo góc trong mặt bằng hoặc nghiêng.
keywords: bản cắt, bản đơn, bản ghép, liên kết đơn giản, liên kết bụng, xiên, nghiêng, dốc, dầm nghiêng, bulông, nối
from: 18afc8ab
---

Bản cắt (bản đơn, bản ghép) là một bản được hàn vào cột trong xưởng; tại công trường, bụng dầm được bắt bulông vào nó bằng một hàng bulông theo chiều đứng. DetailCraft đặt bản, cắt lùi dầm để thoát khỏi cột, khoan lỗ trong bản và bụng dầm, thêm bulông và mối hàn, rồi cảnh báo về khoảng cách mép và độ khít.

## Nơi nó hoạt động

- Một dầm (tiết diện chữ I hoặc chữ C) có đầu nằm trên đường của một cột chữ I **đứng**, gặp **cánh** hoặc **bụng** của nó.
- **Vuông góc, xiên trong mặt bằng, hoặc nghiêng**: bản đi theo bụng dầm và dầm được cắt lùi để góc gần nhất của nó giữ khe hở với cột. Dầm nâng lên hoặc hạ xuống hơn 60° sẽ bị từ chối.

## Thêm bản cắt

1. Chọn dầm.
2. Trong nhóm {{ui:Liên kết}}, mở {{ui:Thêm}} và chọn {{ui:Bản cắt}} (hoặc chọn {{ui:Thêm bản cắt}} trong bảng {{ui:Thuộc tính}}).
3. Mọi đầu tự do của dầm gặp cột sẽ có một bản. Mỗi đầu dầm nhận một liên kết: một bản cắt hoặc một bản đầu.

Chọn một bản (nhấp vào nó, hoặc một bulông) để xem và đổi thiết lập của nó. {{ui:Áp dụng cho các mục tương tự}} sao chép nó, như một bản cắt, sang mọi mối nối tương tự chưa có liên kết.

## Thiết lập (mm)

| Thiết lập | Bắt đầu từ | Ý nghĩa |
|---|---|---|
| Độ dày bản | 10 | Độ dày của bản |
| Chiều rộng bản | 115 | Bản vươn ra khỏi mặt cột bao xa, dọc theo dầm |
| Đường kính bulông, Đường kính lỗ, Mác bulông | 20, 22, A325 | Như với bản đầu |
| Số hàng bulông, Bước hàng | 3, 75 | Các bulông trong hàng đứng |
| Khoảng cách mép (bulông trên và dưới) | 38 | Từ bulông trên và dưới đến hai đầu bản; bản sâu bằng số hàng × bước + 2 × giá trị này |
| Nhóm bulông nâng lên | 0 | 0 căn giữa các bulông theo chiều sâu dầm |
| Khoảng hở đến cột | 13 | Khe hở thông giữa cột và góc gần nhất của dầm |
| Đường bulông tính từ mặt cột | 65 | Dọc theo dầm, từ mặt cột đến các bulông |
| Dự phòng chiều dài bulông | 30 | Cộng vào phần kẹp (bản + bụng dầm), làm tròn lên 5 mm |
| Kích thước mối hàn góc | 6 | Hai bên bản đến cột |

## Điều nên biết

- Bản là một phần của cụm cột (hàn trong xưởng); cụm dầm chỉ có các lỗ.
- Dầm xiên hoặc nghiêng được cắt lùi nhiều hơn dầm vuông để góc gần nhất giữ khe hở. DetailCraft cắt dầm vuông: thợ gia công cắt đầu theo cách phù hợp. Cạnh của bản ở cột cũng được vẽ vuông.
- DetailCraft không kiểm tra cường độ. Cảnh báo dùng giá trị tối thiểu của EN 1993-1-8 Bảng 3.3 cho khoảng cách mép và bước, và cho biết khi bản sâu hơn phần bụng dầm giữa các góc lượn, hoặc khi các bulông nằm quá gần đầu cắt của dầm.
- [Kiểm tra va chạm](topic:clash-check) bỏ qua bản và các thanh mà nó nối: chúng được thiết kế để gặp nhau.
