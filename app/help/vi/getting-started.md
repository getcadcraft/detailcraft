---
title: Bắt đầu với DetailCraft
summary: DetailCraft hiện làm được gì, cách mở nó, và mô hình đầu tiên từ lưới trục đến bản vẽ thi công trong mười phút.
keywords: bắt đầu, mô hình đầu tiên, giới thiệu, triển khai chi tiết thép, thép thanh, bắt đầu nhanh, hướng dẫn, tổng quan
from: 3682c0d8
---

DetailCraft là ứng dụng triển khai chi tiết thép và thép thanh trong họ CadCraft. Bạn dựng mô hình 3D của khung thép trên lưới trục và các tầng, nối chúng lại, và nhận những gì xưởng cần: ký hiệu chi tiết và cụm lắp ráp, bảng kê vật tư, bản vẽ thi công từng chi tiết, tệp DSTV NC, mô hình IFC, và bảng uốn thép cho các móng.

Đây là một bản dựng sớm. Nó làm một danh sách ngắn các việc một cách cẩn thận thay vì làm mọi thứ cùng lúc. Hãy đọc [Những gì chưa được xây dựng](topic:not-built-yet) trước khi bạn lên kế hoạch công việc thật xoay quanh nó.

## Hiện nay nó làm được gì

- Lưới trục và các tầng bạn nhập vào, theo milimét.
- Cột, dầm, thanh giằng và bản từ các danh mục tiết diện đã công bố (AISC W, S, C, L, HSS và Pipe; IPE, HEA, HEB và UPN của châu Âu), cùng các tiết diện tham số của riêng bạn.
- Hai liên kết: bản đầu bắt bulông từ dầm vào cánh cột, và bản chân cột với bốn bulông neo. Mỗi liên kết có thể sao chép cho mọi mối nối tương tự.
- Lỗ và cắt góc nhập theo vị trí.
- Móng đơn chữ nhật với lưới thép dưới và thép chờ.
- Ký hiệu chi tiết và cụm lắp ráp tự cập nhật sau mỗi thay đổi.
- Xuất: IFC4, tệp DSTV NC (thép hình chữ I và bản), bảng kê vật tư dạng CSV, bảng uốn thép dạng CSV, và PDF bản vẽ thi công của một chi tiết.

## Mở DetailCraft

1. Mở DetailCraft trong trình duyệt máy tính: Chrome, Edge, Firefox hoặc Safari. Xem [Trình duyệt và máy tính](common:browsers).
2. Chờ màn hình đầy đủ. Thanh trạng thái ở dưới ghi "Ready. Open the Sample, or set grids and levels and start placing members."

Khung nhìn mô hình cần đồ họa 3D (WebGL). Nếu giữa màn hình ghi "This browser could not start 3D graphics (WebGL)", xem [Khắc phục sự cố](topic:troubleshooting#the-3d-view-is-missing).

:::note
Mô hình của bạn ở lại trên máy tính của bạn. Mở một mô hình là đọc nó trong trình duyệt, và lưu là tải một tệp xuống. Không có gì được tải lên. Chưa có tính năng lưu lên đám mây. Xem [Tệp của bạn đi đâu](common:your-files). Để dùng DetailCraft khi không có kết nối sau này, hãy chọn {{ui:Lưu để dùng ngoại tuyến}} trên thanh ứng dụng một lần khi đang trực tuyến; xem [Làm việc ngoại tuyến](common:offline).
:::

:::offline
Bạn đang ngoại tuyến. DetailCraft chỉ hoạt động khi không có kết nối nếu trước đó nó đã được lưu để dùng ngoại tuyến: khi đó nút {{ui:Lưu để dùng ngoại tuyến}} trên thanh ứng dụng ghi {{ui:Sẵn sàng ngoại tuyến}}. Xem [Làm việc ngoại tuyến](common:offline).
:::

## Xem mẫu trước

Cách nhanh nhất để thấy DetailCraft tạo ra gì là khung mẫu.

1. Chọn {{ui:Mẫu}} trong nhóm {{ui:Tệp}} của thanh công cụ.
2. Khung nhìn hiện một khung hai nhịp: sáu cột có bản chân cột, bốn dầm có bản đầu, một thanh giằng và bảy móng có thép.
3. Nhấp vào một dầm. Bảng {{ui:Thuộc tính}} bên phải hiện ký hiệu chi tiết, chiều dài cắt, trọng lượng của nó và các lỗ do bản đầu tạo ra.
4. Mở thẻ {{ui:Bảng kê vật tư}} ở dưới để xem mọi ký hiệu chi tiết cùng số lượng và trọng lượng.

Bài hướng dẫn [Khám phá khung mẫu](topic:sample-model) đi qua nó từng phần một.

## Mô hình đầu tiên của bạn

Một mô hình mới đã có lưới trục 1 đến 3 theo A đến B cách nhau 6000 mm và hai tầng, Level 1 ở 0 và Level 2 ở 4000.

1. Chọn {{ui:Mới}}. Nếu mô hình hiện tại có thay đổi, DetailCraft hỏi có lưu trước không.
2. Chọn {{ui:Mặt bằng}} phía trên khung nhìn. Danh sách tầng bên cạnh chọn Level 1.
3. Chọn {{ui:Cột}} trên thanh công cụ, hoặc nhấn {{key:C}}.
4. Nhấp giao điểm lưới trục A/1. Một cột W12x50 xuất hiện từ Level 1 đến Level 2. Thanh trạng thái cho biết nó nằm ở đâu.
5. Nhấp B/1, A/2 và B/2 để đặt thêm ba cột.
6. Chọn Level 2 trong danh sách tầng, rồi chọn {{ui:Dầm}} hoặc nhấn {{key:B}}.
7. Nhấp A/1, rồi A/2. Một dầm W16x26 nối đỉnh hai cột, mặt trên của thép đúng cao độ tầng.
8. Nhấn {{key:Esc}} để về {{ui:Chọn}}, rồi nhấp vào dầm.
9. Chọn {{ui:Bản đầu}} trong nhóm {{ui:Liên kết}}. Cả hai đầu có một bản đầu bắt bulông, dầm được cắt lùi cho vừa, và bản đầu đầu tiên giờ đang được chọn.
10. Nhấp lại vào dầm.
11. Chọn {{ui:Bản vẽ thi công}} trong nhóm {{ui:Đầu ra}}. Một bản xem trước bản vẽ thi công của dầm mở ra. Chọn {{ui:Tải xuống PDF}}.
12. Nhấn {{key:Mod+S}} để lưu mô hình. Trình duyệt tải xuống `Untitled.detailcraft.json`.

Hãy đổi tên mô hình trong ô {{ui:Tên}} ở góc trên bên trái trước khi lưu, để tệp và mọi bản xuất đều mang tên đó.

## Đi tiếp đến đâu

- [Tham quan màn hình](topic:workspace)
- [Thiết lập lưới trục và các tầng](topic:grids-and-levels)
- [Di chuyển trong khung nhìn 3D](topic:navigate-3d), bằng chuột, bàn di chuột hoặc màn hình cảm ứng
- [Chuyển từ phần mềm triển khai chi tiết khác](topic:coming-from), nếu bạn biết một gói triển khai chi tiết lớn
- [Dùng phần trợ giúp này](common:help)
