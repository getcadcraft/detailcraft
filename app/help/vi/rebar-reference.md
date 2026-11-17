---
title: Tham chiếu thép thanh
summary: Kích thước thanh, kích thước móc, mã hình dạng, chiều dài cắt và các cột của bảng uốn thép mà DetailCraft sử dụng.
keywords: thép thanh, kích thước thanh, móc, đường kính uốn, mã hình dạng, chiều dài cắt, bảng uốn thép, danh sách thanh, ASTM A615, ACI 318
from: 1583535e
---

## Kích thước thanh

Theo ASTM A615/A615M Bảng 1 (ký hiệu theo hệ inch-pound). Milimét và kg/m là quy đổi chính xác từ các giá trị inch và lb/ft đã công bố. Danh sách hiển thị mỗi kích thước dưới dạng, ví dụ, "#5 (15.9 mm)".

| Thanh | Đường kính (mm) | Khối lượng (kg/m) | Diện tích (mm²) | Đường kính uốn trong | Cánh móc 90°, ngoài đến ngoài (mm) |
|---|---|---|---|---|---|
| #3 | 9.5 | 0.560 | 71 | 6 db | 152 |
| #4 | 12.7 | 0.994 | 129 | 6 db | 203 |
| #5 | 15.9 | 1.552 | 200 | 6 db | 254 |
| #6 | 19.1 | 2.235 | 284 | 6 db | 305 |
| #7 | 22.2 | 3.042 | 387 | 6 db | 356 |
| #8 | 25.4 | 3.973 | 510 | 6 db | 406 |
| #9 | 28.7 | 5.060 | 645 | 8 db | 487 |
| #10 | 32.3 | 6.404 | 819 | 8 db | 548 |
| #11 | 35.8 | 7.907 | 1006 | 8 db | 609 |

Trong [Cài đặt DetailCraft](topic:settings) ({{ui:Thép thanh}}), **tên thanh ASTM** có thể hiển thị các thanh này bằng tên mềm theo hệ mét A615M: #3 = #10, #4 = #13, #5 = #16, #6 = #19, #7 = #22, #8 = #25, #9 = #29, #10 = #32, #11 = #36 (cùng các thanh; ACI 315-99 Bảng 1 liệt kê cả hai).

### Thanh theo hệ mét (BS 4449)

| Thanh | Đường kính (mm) | kg/m | Bán kính uốn tối thiểu r (mm) | Cánh móc = hình chiếu đầu P (mm) |
|---|---|---|---|---|
| H8 | 8 | 0.395 | 16 | 115 |
| H10 | 10 | 0.617 | 20 | 120 |
| H12 | 12 | 0.888 | 24 | 125 |
| H16 | 16 | 1.578 | 32 | 130 |
| H20 | 20 | 2.466 | 70 | 190 |
| H25 | 25 | 3.853 | 87 | 240 |
| H32 | 32 | 6.313 | 112 | 305 |
| H40 | 40 | 9.865 | 140 | 380 |

Khối lượng là diện tích tiết diện danh định nhân 7850 kg/m³. Bán kính và hình chiếu đầu là giá trị tối thiểu của BS 8666:2020 (bảng kích thước tối thiểu; đường kính cũ là 2r). Móng dùng thanh BS sẽ có cánh móc P và chiều dài cắt theo các công thức BS 8666 bên dưới. Chọn thép châu Âu trong cài đặt sẽ tạo móng mới với lưới H16 và thép chờ H20 trong bê tông C30/37.

## Móc

Thanh ASTM: móc 90° tiêu chuẩn theo ACI 318-19 Bảng 25.3.1: đường kính uốn trong 6 db cho #3 đến #8 và 8 db cho #9 đến #11, với đoạn thẳng kéo dài 12 db sau chỗ uốn. Cánh móc, đo ngoài đến ngoài, bằng một nửa đường kính uốn + db + 12 db.

Nếu móc của thanh lưới không vừa trong chiều sâu móng bên trong lớp bê tông bảo vệ, DetailCraft rút ngắn cánh móc cho vừa và đưa ra một cảnh báo.

## Hình dạng

DetailCraft lưu ba hình dạng. Bảng uốn thép in chúng theo mã của DetailCraft, theo loại ACI 315 hoặc theo mã hình dạng BS 8666: chọn **Mã hình dạng bảng uốn thép** trong [Cài đặt DetailCraft](topic:settings) ({{ui:Thép thanh}}).

| Mã | Hình dạng | Kích thước |
|---|---|---|
| S | Thẳng | A = chiều dài |
| L | Một góc uốn 90° | A = cạnh chính, B = cánh móc, cả hai ngoài đến ngoài |
| U | Hai góc uốn 90° cùng một phía | A = giữa, B và C = hai cánh, ngoài đến ngoài |

Thanh lưới có {{ui:Móc đầu}} bật thì là U; không bật thì là S. Thép chờ có {{ui:Móc ở đáy}} bật thì là L; không bật thì là S.

| DetailCraft | BS 8666:2020 | ACI 315-99 (Hình 10) |
|---|---|---|
| S | 00, L = A | không có số loại |
| L | 11, L = A + B − 0.5r − d | không có số loại: hình không có thanh một móc |
| U | 21, A và C là hai cánh, B là phần giữa: L = A + B + C − r − 2d | Loại 2, móc A và G, thẳng B |

Với mã BS 8666 hoặc ACI 315, các cột A, B và C của bảng uốn theo ký hiệu của tiêu chuẩn đó (phần giữa của U là B).

## Chiều dài cắt

Với thanh BS 4449, chiều dài cắt là công thức BS 8666 theo mã hình dạng của thanh (xem trên). Với thanh ASTM, đó là chiều dài chính xác của đường trục thanh: các đoạn thẳng cộng với các góc uốn dưới dạng cung có bán kính bằng một nửa đường kính uốn cộng một nửa đường kính thanh. Nó không được tính từ bảng trừ độ uốn, nên có thể lệch vài milimét so với bảng uốn dùng cách đó.

## Bố trí

- Lưới đáy: thanh dọc theo L tạo lớp dưới, thanh dọc theo B nằm trên chúng. Mỗi nhóm được rải đều trong móng bên trong lớp bê tông bảo vệ, theo khoảng cách bạn nhập hoặc nhỏ hơn, và có ít nhất hai thanh.
- Thép chờ: lưới thanh dọc theo L và dọc theo B theo khoảng cách bạn nhập, căn giữa móng, đứng trên lưới và nhô lên trên mặt trên một đoạn bằng phần nhô bạn nhập. Mỗi móc hướng ra ngoài.

## Kiểm tra

| Kiểm tra | Quy tắc | Kết quả |
|---|---|---|
| Chỗ cho thanh | Lớp bê tông bảo vệ hai bên chừa chỗ cho các thanh | Từ chối nếu không |
| Chiều sâu cho hai lớp | Chiều sâu trừ hai lớp bảo vệ chứa được cả hai lớp lưới | Từ chối nếu không |
| Thép chờ vừa | Lưới thép chờ nằm trong lớp bảo vệ | Từ chối nếu không |
| Khoảng cách thông thủy | Ít nhất là giá trị lớn hơn giữa 25.4 mm và db (ACI 318-19 25.2.1; kích thước cốt liệu không được kiểm tra) | Cảnh báo |
| Chiều sâu móc | Cánh móc vừa trong chiều sâu bên trong lớp bảo vệ | Cảnh báo, cánh bị rút ngắn |
| Móc thép chờ | Móc nằm ngoài lớp bảo vệ bê tông | Cảnh báo |

## Các cột của bảng uốn thép

Tab {{ui:Bảng uốn thép}} và tệp CSV của nó có các cột: Ký hiệu thép, Kích thước, Hình dạng, A (mm), B (mm), C (mm), Số lượng, Chiều dài cắt (mm), Tổng chiều dài (m), kg/m, Khối lượng mỗi thanh (kg), Tổng khối lượng (kg), Dùng cho. Dòng cuối cộng tổng số lượng, chiều dài và khối lượng.
