---
title: Cài đặt DetailCraft
summary: Đặt các thanh mới làm hình dạng Mỹ hoặc châu Âu, đặt khoảng cách Nhân bản đưa bản sao đi bao xa, chọn bản sao có mang liên kết hay không, và hiện hoặc ẩn bulông trong khung nhìn 3D.
keywords: cài đặt, tùy chọn, kích thước tờ, kích thước giấy, bản vẽ, tùy chọn, thép, aisc, en, hình dạng châu Âu, hình dạng Mỹ, hình dạng hệ mét, tiết diện mặc định, mác thép, s355, a992, khoảng cách nhân bản, khoảng cách dán, sao chép liên kết, bulông, thanh neo, ẩn bulông, đặt lại
from: e46cea57
---

Mở {{ui:Cài đặt}} bằng biểu tượng bánh răng trên thanh ứng dụng hoặc bằng {{key:Mod+,}}. Tab đầu tiên, {{ui:DetailCraft}}, chứa các cài đặt thuộc riêng ứng dụng này; {{ui:Chung}} chứa các cài đặt mà mọi ứng dụng CadCraft dùng chung (giao diện, thanh công cụ, bảng). Cài đặt của DetailCraft chỉ tồn tại trong ứng dụng: bạn đổi chúng ở đây, chúng có hiệu lực ngay, và trình duyệt này ghi nhớ chúng. Chúng không được lưu trong tệp mô hình của bạn.

## Thanh mới

Các công cụ đặt thanh bắt đầu với những tiết diện và mác nào:

| Công cụ | Hình dạng Mỹ (AISC), A992 | Hình dạng châu Âu (EN), S355 |
|---|---|---|
| {{ui:Dầm}} | W16x26, A992 | IPE300, S355 |
| {{ui:Cột}} | W12x50, A992 | HEB200, S355 |
| {{ui:Thanh giằng}} | HSS6x6x1/4, A500 Gr C | HEA160, S355 |
| {{ui:Bản}} | A36 | S355 |

Hình dạng Mỹ là mặc định. Lựa chọn châu Âu dùng HEA160 cho thanh giằng vì danh mục EN của DetailCraft chưa có tiết diện rỗng ([Danh mục tiết diện](topic:profile-catalog)). Bạn vẫn có thể chọn bất kỳ tiết diện và mác nào cho chi tiết kế tiếp trong bảng {{ui:Thuộc tính}} khi một công cụ đặt đang bật. Các thanh đã có trong mô hình giữ tiết diện và mác riêng của chúng.

## Nhân bản và dán

- **Độ dời (mm)**: x, y và z. {{ui:Nhân bản}} ({{key:Mod+D}}) đặt bản sao cách bản gốc chừng này, và dạng {{ui:Dán theo độ dời (mm, từ bản gốc)}} bắt đầu với giá trị đó. Mặc định là 6000, 0, 0: một nhịp 6 m dọc theo các lưới số. Hãy đặt nó theo khoảng cách nhịp của bạn, hoặc một chiều cao cao độ theo z để sao chép một sàn lên trên.
- **{{ui:Sao chép bản đầu và bản chân cột cùng cấu kiện}}** (bật mặc định): một liên kết đi theo bản sao chỉ khi mọi thanh nó nối đều được sao chép. Bỏ chọn để chỉ sao chép thanh và móng mà không có liên kết, ví dụ để thử một liên kết khác trên bản sao.

Xem [Sao chép, dán và nhân bản](topic:copy-paste).

## Khung nhìn 3D

**Hiện bulông và thanh neo** (bật mặc định). Bỏ chọn để ẩn chúng trong khung nhìn và thấy các lỗ và bản của một mối nối đông đúc. Bulông ẩn không thể nhấp vào; hãy nhấp vào bản để chọn liên kết. Bảng kê vật tư, bản vẽ và mọi bản xuất vẫn bao gồm mọi bulông và thanh.

## Chỉ báo góc

Những gì hiển thị ở góc khung nhìn 3D: **Khối xem** (mặc định; góc trên bên phải: nhấp vào một mặt, cạnh hoặc góc để nhìn từ đó, kéo để xoay quanh, kéo vòng la bàn của nó để xoay mô hình), **Biểu tượng trục** (một dấu X, Y, Z nhỏ ở góc dưới bên trái, quay theo khung nhìn: X màu đỏ, Y màu xanh lá, Z màu xanh dương) hoặc **Không có**. Chỉ có trong {{ui:3D}}; {{ui:Mặt bằng}} và {{ui:Mặt đứng}} không hiển thị cái nào. Xem [Khối xem](topic:view-cube).

## Đặt lại

{{ui:Đặt lại cài đặt DetailCraft}} ở cuối hộp thoại đưa các mục này về mặc định (hình dạng Mỹ, độ dời 6000, 0, 0, liên kết được sao chép, bulông được hiển thị), cùng các mục của {{ui:Chung}}.

## Bản vẽ

**Kích thước tờ**: các bản vẽ tờ và bản vẽ thi công được lập trên khổ giấy ngang: A4, A3 (mặc định), A2, A1, ANSI B, ANSI C hoặc ANSI D. Các cửa sổ {{ui:Bản vẽ}} và bản vẽ thi công có cùng danh sách. Xem [Bản vẽ bố trí chung và bản vẽ lắp ráp](topic:drawings).

## Thép thanh

- **Tên thanh ASTM**: #3 đến #11, hoặc #10 đến #36 theo hệ mét mềm cho cùng các thanh.
- **Mã hình dạng bảng uốn thép**: S, L, U của DetailCraft; loại ACI 315; hoặc mã hình dạng BS 8666. Xem [Tham chiếu thép thanh](topic:rebar-reference).

## Kéo để chọn

**Hình chữ nhật** (như trước) hoặc **Lasso**: một đường tự do, với {{key:Space}} chuyển giữa bên trong, chạm vào và hàng rào khi bạn kéo. Xem [Chọn bằng cửa sổ](topic:select-and-change#select-with-a-window).
