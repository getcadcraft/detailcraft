---
title: Bắt đầu với DetailCraft
summary: DetailCraft làm được gì hiện nay, cách mở nó, và một mô hình đầu tiên từ lưới đến bản vẽ thi công trong mười phút.
keywords: bắt đầu, mô hình đầu tiên, giới thiệu, chi tiết thép, thép thanh, khởi đầu nhanh, hướng dẫn, tổng quan
from: e4f16bbe
---

DetailCraft là ứng dụng chi tiết thép và thép thanh trong họ CadCraft. Bạn dựng mô hình 3D của khung thép trên lưới và tầng, liên kết chúng, và nhận được những gì xưởng cần: ký hiệu chi tiết và cụm lắp ráp, bảng kê vật tư, bản vẽ thi công từng chi tiết, tệp NC DSTV, mô hình IFC, và bảng uốn thép cho móng.

Đây là bản dựng sớm. Nó làm tốt một danh sách ngắn các việc thay vì mọi thứ cùng lúc. Hãy đọc [Những gì chưa xây dựng](topic:not-built-yet) trước khi lên kế hoạch công việc thực với nó.

## Hiện làm được gì

- Lưới và tầng bạn nhập vào, tính bằng mm.
- Cột, dầm, thanh giằng và bản lấy từ thư viện tiết diện đã công bố (AISC W, S, C, L, HSS và Pipe; IPE, HEA, HEB và UPN của châu Âu; UB, UC, PFC, EA, UEA, SHS, RHS và CHS của Anh), cùng các tiết diện tham số riêng của bạn.
- Hai loại liên kết: bản đầu bulông từ dầm vào cánh cột, và bản chân cột với bốn bulông neo. Mỗi loại có thể sao chép cho mọi mối nối tương tự.
- Lỗ và cắt góc nhập theo vị trí.
- Móng đơn hình chữ nhật với lớp thép đáy và thép chờ.
- Ký hiệu chi tiết và ký hiệu cụm lắp ráp tự cập nhật sau mỗi thay đổi.
- Xuất: IFC4, tệp NC DSTV (cho thép chữ I và bản), bảng kê vật tư dạng CSV, bảng uốn thép dạng CSV, và bản vẽ thi công PDF của một chi tiết.

## Mở DetailCraft

1. Mở DetailCraft trên trình duyệt máy tính: Chrome, Edge, Firefox hoặc Safari. Xem [Trình duyệt và máy tính](common:browsers).
2. Chờ màn hình hiển thị đầy đủ. Thanh trạng thái ở dưới cùng nói "Sẵn sàng. Mở Mẫu, hoặc thiết lập lưới và tầng rồi bắt đầu đặt thanh."

Khung nhìn mô hình cần đồ họa 3D (WebGL). Nếu giữa màn hình hiện "Trình duyệt này không thể khởi động đồ họa 3D (WebGL)", xem [Khắc phục sự cố](topic:troubleshooting#the-3d-view-is-missing).

:::note
Mô hình của bạn ở lại trên máy tính của bạn. Mở một mô hình là đọc nó trong trình duyệt, và lưu là tải xuống một tệp. Không có gì được tải lên. Lưu trên đám mây chưa có sẵn. Xem [Nơi lưu tệp của bạn](common:your-files). Để dùng DetailCraft sau này khi không có kết nối, chọn {{ui:Lưu để dùng ngoại tuyến}} trên thanh ứng dụng một lần khi đang trực tuyến; xem [Làm việc ngoại tuyến](common:offline).
:::

:::offline
Bạn đang ngoại tuyến. DetailCraft chỉ hoạt động không cần kết nối nếu đã được lưu để dùng ngoại tuyến trước đó: khi đó nút {{ui:Lưu để dùng ngoại tuyến}} trên thanh ứng dụng hiện {{ui:Sẵn sàng ngoại tuyến}}. Xem [Làm việc ngoại tuyến](common:offline).
:::

## Xem mẫu trước

Cách nhanh nhất để thấy DetailCraft tạo ra gì là khung mẫu.

1. Chọn {{ui:Mẫu}} trong nhóm {{ui:Tệp}} của thanh công cụ.
2. Khung nhìn hiện một khung hai nhịp: sáu cột có bản chân cột, bốn dầm có bản đầu, một thanh giằng và bảy móng có thép thanh.
3. Nhấn một dầm. Bảng {{ui:Thuộc tính}} bên phải hiện ký hiệu chi tiết, chiều dài cắt, trọng lượng và các lỗ mà bản đầu tạo ra.
4. Mở thẻ {{ui:Bảng kê vật tư}} ở dưới để xem mọi ký hiệu chi tiết cùng số lượng và trọng lượng.

Hướng dẫn [Khám phá khung mẫu](topic:sample-model) đi qua từng phần một.

## Mô hình đầu tiên

Một mô hình mới đã có lưới 1 đến 3 theo A đến B ở khoảng cách 6000 mm, và hai tầng: Tầng 1 ở cao độ 0 và Tầng 2 ở 4000.

1. Chọn {{ui:Mới}}. Nếu mô hình hiện tại có thay đổi, DetailCraft hỏi bạn có muốn lưu trước không.
2. Chọn {{ui:Mặt bằng}} phía trên khung nhìn. Danh sách tầng bên cạnh sẽ chọn Tầng 1.
3. Chọn {{ui:Cột}} trên thanh công cụ, hoặc nhấn {{key:C}}.
4. Nhấn giao điểm lưới A/1. Một cột W12x50 xuất hiện từ Tầng 1 đến Tầng 2. Thanh trạng thái cho biết nó được đặt ở đâu.
5. Nhấn B/1, A/2 và B/2 để đặt thêm ba cột.
6. Chọn Tầng 2 trong danh sách tầng, rồi chọn {{ui:Dầm}} hoặc nhấn {{key:B}}.
7. Nhấn A/1, rồi nhấn A/2. Một dầm W16x26 nối hai đỉnh cột, với cao độ đỉnh thép nằm trên tầng.
8. Nhấn {{key:Esc}} để trở về {{ui:Chọn}}, rồi nhấn vào dầm.
9. Chọn {{ui:Bản đầu}} trong nhóm {{ui:Liên kết}}. Cả hai đầu đều có bản đầu bulông, dầm được cắt lại cho vừa, và bản đầu thứ nhất được chọn.
10. Nhấn vào dầm lần nữa.
11. Chọn {{ui:Bản vẽ thi công}} trong nhóm {{ui:Đầu ra}}. Bản xem trước bản vẽ thi công của dầm sẽ mở ra. Chọn {{ui:Tải xuống PDF}}.
12. Nhấn {{key:Mod+S}} để lưu mô hình. Trình duyệt tải xuống `Untitled.detailcraft.json`.

Đổi tên mô hình trong ô {{ui:Tên}} ở góc trên bên trái trước khi lưu, để tệp và mọi bản xuất đều mang tên đó.

## Bước tiếp theo

- [Tổng quan màn hình](topic:workspace)
- [Thiết lập lưới và tầng](topic:grids-and-levels)
- [Di chuyển trong khung nhìn 3D](topic:navigate-3d), bằng chuột, bàn di chuột hoặc màn hình cảm ứng
- [Chuyển từ phần mềm chi tiết khác](topic:coming-from), nếu bạn đã quen một gói chi tiết lớn
- [Dùng trợ giúp này](common:help)
