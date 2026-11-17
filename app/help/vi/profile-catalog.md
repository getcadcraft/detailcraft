---
title: Danh mục tiết diện
summary: Mọi kích thước thép dựng sẵn, cách viết tên tiết diện, nguồn kích thước, và cách đặt tên cho bản và tiết diện tùy chỉnh.
keywords: tiết diện, mặt cắt, danh mục, kích thước, hình w, wide flange, hình s, máng, thép góc, hss, ống, ống thép, ipe, hea, heb, upn, uk, anh, ub, uc, pfc, ea, uea, thép góc không đều cạnh, shs, rhs, chs, tạo nguội, cán nóng, blue book, bản, aisc, en 10365, đặt tên
from: cd9b2bc3
---

DetailCraft có 2,311 kích thước dựng sẵn, mỗi kích thước được sao chép từ một bảng đã công bố và được kiểm tra bằng bộ thử nghiệm của ứng dụng: diện tích tính từ kích thước phải khớp với diện tích đã công bố, và khối lượng đã công bố phải khớp với diện tích đó nhân với khối lượng riêng của thép. Bản và tiết diện tùy chỉnh được tạo từ kích thước của chúng.

## Cách đặt tên

- **Hình US** được viết như cách sổ tay AISC in, với chữ x viết thường: W12x50, C10x15.3, L4x4x1/2, HSS6x6x1/4, HSS6.625x0.280. Gõ không phân biệt chữ hoa, chữ thường.
- **Ống (Pipe)** được viết như trong cơ sở dữ liệu AISC: Pipe4STD, Pipe4XS, Pipe4XXS (tiêu chuẩn, dày, rất dày kép).
- **Hình châu Âu** được viết như EN 10365: IPE200, HEA240, HEB300, UPN200 (không có khoảng trắng).
- **Hình UK** được viết với họ trước, rồi đến kích thước của Blue Book: UB305x165x40, UC203x203x46, PFC200x90x30, EA100x100x10.0, UEA150x90x10.0, SHS100x100x5.0, RHS200x100x8.0, CHS88.9x5.0. Tiết diện rỗng tạo nguội bắt đầu bằng CF: CFSHS100x100x5.0. Gõ theo cách bản vẽ thường ghi cũng được: 305x165x40 UB, L100x100x10, SHS100x5.
- **Bản** có dạng `PL<thickness>x<width>` tính bằng milimét: PL20x200 dày 20 mm và rộng 200 mm. Mọi kích thước từ công cụ {{ui:Bản}} đều dùng được.
- **Tiết diện tùy chỉnh** có tên bất kỳ bạn đặt, miễn là không trùng tên danh mục và không giống tên bản.

Trong các danh sách {{ui:Tiết diện}}, tiêu đề mỗi nhóm nêu nguồn của nó, ví dụ "Hình W — AISC Shapes Database v16.0".

## Nguồn

| Nhóm | Nguồn | Ghi chú |
|---|---|---|
| Hình W, hình S, Máng (C), Thép góc (L), HSS, Ống (Pipe) | AISC Shapes Database v16.0 | Kích thước đổi từ inch sang milimét chính xác; khối lượng trên mét từ lb/ft đã công bố |
| IPE, HEA, HEB, UPN | EN 10365:2017 | Milimét và kg/m như đã công bố |
| UB, UC, PFC, EA, UEA, SHS, RHS, CHS, CFSHS, CFRHS, CFCHS | Steel for Life Blue Book (UK), bảng v18 (BS EN 10365, BS EN 10056-1, BS EN 10210-2, BS EN 10219-2) | Milimét và kg/m như đã công bố |
| Bản | Tham số | Khối lượng từ diện tích × 7850 kg/m³ |
| Tùy chỉnh | Kích thước của bạn | Khối lượng từ diện tích × 7850 kg/m³ |

Cách vẽ các hình:

- **Hình W:** cơ sở dữ liệu AISC không cho bán kính bo, nên DetailCraft vẽ bo như r = kdes − tf.
- **Hình S và máng (C, UPN):** cánh song song với độ dày trung bình đã công bố, góc vuông (cánh thực tế nghiêng).
- **Thép góc:** góc vuông.
- **HSS chữ nhật:** độ dày thành thiết kế (0.93 × danh định, như AISC 360-22 B4.2 cho phép) với bán kính góc ngoài gấp đôi giá trị đó.
- **HSS tròn và Ống (Pipe):** độ dày thành thiết kế (0.93 × danh định).
- **IPE, HEA, HEB, UB, UC:** bán kính góc chân đã công bố.
- **PFC, EA, UEA:** góc vuông (khối lượng và diện tích đã công bố vẫn gồm các bán kính).
- **SHS, RHS, CHS:** thành danh định. Góc cán nóng: ngoài 1.5 t, trong t. Tạo nguội: ngoài 2 t, trong t đến 6 mm; 2.5 t và 1.5 t đến 10 mm; 3 t và 2 t trên mức đó.

## Các kích thước

Mọi kích thước các bảng liệt kê trong các nhóm này, nhỏ nhất trước:

| Nhóm | Kích thước |
|---|---|
| Hình W (289) | W4x13 đến W44x408 |
| Hình S (28) | S3x5.7 đến S24x121 |
| Máng (32) | C3x3.5 đến C15x50 |
| Thép góc, cạnh bằng (61) | L2x2x1/8 đến L12x12x1-3/8 |
| HSS, chữ nhật và vuông (525) | HSS1-1/2x1-1/2x1/8 đến HSS34x10x1 |
| HSS, tròn (189) | HSS1.660x0.140 đến HSS28.000x1.000 |
| Ống (Pipe) (51) | Pipe1/2STD đến Pipe26XS |
| IPE (18) | IPE80 đến IPE600 |
| HEA (24) | HEA100 đến HEA1000 |
| HEB (24) | HEB100 đến HEB1000 |
| UPN (18) | UPN50 đến UPN400 |
| Thép góc, cạnh không bằng (76) | L2-1/2x1-1/2x3/16 đến L8x6x1 |
| UB (107) | UB127x76x13 đến UB1016x305x584 |
| UC (46) | UC152x152x23 đến UC356x406x1299 |
| PFC (16) | PFC100x50x10 đến PFC430x100x64 |
| EA (42) | EA20x20x3.0 đến EA200x200x24.0 |
| UEA (39) | UEA30x20x3.0 đến UEA200x150x18.0 |
| SHS, cán nóng (123) | SHS40x40x3.2 đến SHS400x400x17.5 |
| RHS, cán nóng (161) | RHS50x30x3.2 đến RHS500x300x17.5 |
| CHS, cán nóng (103) | CHS42.4x3.2 đến CHS508.0x17.5 |
| CFSHS, tạo nguội (96) | CFSHS25x25x2.0 đến CFSHS400x400x12.5 |
| CFRHS, tạo nguội (137) | CFRHS50x25x2.0 đến CFRHS500x300x12.5 |
| CFCHS, tạo nguội (106) | CFCHS33.7x3.0 đến CFCHS508.0x16.0 |

Thép góc không đều cạnh đối xứng là cùng một chi tiết được quay đầu cho đầu, như xưởng làm chiều đối diện: lỗ, cắt góc và bản nút của nó đi cùng.

Chọn công cụ đặt và chọn một kích thước để xem chiều sâu, chiều rộng cánh, độ dày bụng và cánh, bán kính bo, diện tích (cm²), khối lượng (kg/m) và nguồn trong hộp {{ui:Tiết diện}} của bảng {{ui:Thuộc tính}}.

## Mỗi hình làm được gì

| Hình | Lỗ | Cắt góc | Bản đầu và bản chân cột | Tệp NC | Bản vẽ thi công |
|---|---|---|---|---|---|
| Chữ I (W, S, IPE, HEA, HEB, UB, UC, chữ I tùy chỉnh) | Bụng, cánh trên, cánh dưới | Có | Bản đầu: dầm và cột. Bản chân cột: có | Có | Có |
| Máng (C, UPN, PFC) | Bụng, cánh trên, cánh dưới | Không | Chỉ bản chân cột | Có | Có |
| HSS chữ nhật, SHS, RHS | Thành bên (bụng), trên, dưới | Không | Chỉ bản chân cột | Có | Có |
| HSS tròn, Ống (Pipe), CHS | Chưa có | Không | Chỉ bản chân cột | Có | Có |
| Thép góc (L, EA, UEA) | Chưa có | Không | Chỉ bản chân cột | Có | Có |
| Bản và thanh dẹt tùy chỉnh | Mặt bản | Không | Không | Có | Có |

Với ống chữ nhật, một lỗ trên mặt "bụng" xuyên qua cả hai thành bên. Nội dung của mỗi tệp NC có trong [Các trường tệp NC](topic:nc1-fields).

## Cần kích thước khác?

Thêm nó như một [tiết diện tùy chỉnh](topic:plates-and-profiles#add-a-custom-profile). Danh sách dựng sẵn chưa thể sửa từ ứng dụng.
