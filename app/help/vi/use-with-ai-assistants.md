---
title: Dùng DetailCraft với trợ lý AI
summary: Cho trợ lý AI hoặc kịch bản của riêng bạn đọc mô hình, chi tiết, vấn đề và va chạm, thêm thanh và liên kết, lưu và xuất (cả USD): quyền, kết nối qua CadCraft Studio, và nhật ký hoạt động.
keywords: ai, trợ lý, tác nhân, mcp, giao thức ngữ cảnh mô hình, kịch bản, tự động hóa, chi tiết, va chạm, liên kết, quyền, ngắt kết nối, hoạt động, hoàn tác
from: d624c9a0
---

## Bạn sẽ học được gì

Cách cho trợ lý AI (hoặc một kịch bản bạn viết) làm việc với DetailCraft, và cách quyết định nó được phép chạm vào những gì.

DetailCraft **không có AI riêng** và không gửi gì đi đâu cả. Bạn tự cung cấp trợ lý: bất kỳ chương trình nào nói được giao thức Model Context Protocol (MCP). DetailCraft chỉ cấp cho nó các công cụ, và bạn chọn công cụ nào.

## Bật tính năng

1. Mở {{ui:Settings}} (biểu tượng bánh răng trên thanh ứng dụng, hoặc {{key:Mod+,}}) và chuyển sang thẻ {{ui:DetailCraft}}.
2. Dưới {{ui:Assistants}}, đánh dấu **Cho phép trợ lý AI và kịch bản dùng DetailCraft**. Mục này tắt cho đến khi bạn bật.
3. Chọn những gì nó được phép làm: **Đọc** được đánh dấu sẵn; chỉ đánh dấu **Chỉnh sửa**, **Lưu** hoặc **Xuất** khi bạn cần.

Các công cụ nằm ngoài quyền bạn đã đánh dấu sẽ không được cấp cho trợ lý. Nếu nó vẫn yêu cầu một công cụ như vậy, DetailCraft sẽ từ chối và ghi vào nhật ký hoạt động. Tắt công tắc sẽ ngắt mọi kết nối ngay lập tức.

## Kết nối trợ lý

Trợ lý kết nối qua **CadCraft Studio** trên máy tính của bạn: Studio chạy một máy chủ nhỏ mà chỉ máy tính này truy cập được, được bảo vệ bằng một token mà Studio tạo mỗi lần khởi động. Trong Studio, chọn {{ui:Kết nối trợ lý}} và sao chép địa chỉ và token vào trợ lý của bạn (Studio hiển thị chính xác các cài đặt cần dán). Đừng bao giờ chia sẻ token.

:::note
Một thẻ trình duyệt không thể mở kết nối cho trợ lý: trong các ứng dụng chạy trên trình duyệt, công tắc không có tác dụng cho đến khi bạn dùng CadCraft Studio trên máy tính của mình.
:::

## Bạn luôn kiểm soát

- **Mỗi thay đổi là một bước hoàn tác**, được gắn nhãn là của trợ lý (ví dụ "Trợ lý: thêm dầm", "Trợ lý: thêm bản nút"). {{key:Mod+Z}} hoàn tác thay đổi gần nhất của trợ lý như một khối. Lệnh `undo` của trợ lý chỉ hoàn tác các bước của chính nó, không bao giờ hoàn tác các bước của bạn, trừ khi nó yêu cầu rõ ràng.
- **Nó chờ bạn.** Khi bạn đang đặt một thanh, di chuyển chi tiết hoặc dán, DetailCraft từ chối các thay đổi của trợ lý và bảo nó thử lại.
- **Bạn biết khi nào có kết nối.** Một nút trên thanh ứng dụng hiển thị tên trợ lý khi nó đang kết nối; nhấp vào để xem nó được phép làm gì, hoặc để **Ngắt kết nối**.
- **Hoạt động.** {{ui:Settings}} › {{ui:DetailCraft}} › {{ui:Assistants}} › {{ui:Activity}} liệt kê mọi lần gọi: khi nào, công cụ nào, đã xong hay bị từ chối. {{ui:Save the log}} giữ một bản sao.

## Trợ lý có thể yêu cầu gì

Mọi chiều dài tính bằng mm, các điểm `[x, y, z]` với z hướng lên, như trong mô hình.

| Công cụ | Quyền | Tác dụng |
|---|---|---|
| `app_info`, `model_describe` | Đọc | Mô hình đang mở: lưới, tầng, giai đoạn, thanh theo loại và tiết diện, liên kết, móng, cầu thang, chi tiết, trọng lượng thép, vấn đề |
| `parts_list` | Đọc | Ký hiệu chi tiết với tiết diện, vật liệu, chiều dài cắt, số lượng, trọng lượng, giai đoạn và ký hiệu lắp ráp; lọc theo loại, tiết diện, ký hiệu hoặc giai đoạn |
| `problems_list` | Đọc | Những gì thẻ {{ui:Problems}} liệt kê, mỗi mục kèm nội dung của nó |
| `clash_check` | Đọc | [Kiểm tra va chạm](topic:clash-check), với dung sai và các giai đoạn của nó |
| `selection_get` | Đọc | Những gì bạn đang chọn |
| `selection_set` | Chỉnh sửa | Chọn thanh, liên kết, móng hoặc cầu thang (theo id hoặc ký hiệu chi tiết) để hiển thị cho bạn; không thay đổi gì |
| `member_add` | Chỉnh sửa | Một dầm, cột, thanh giằng hoặc bản giữa hai điểm |
| `connection_add` | Chỉnh sửa | Bản đầu, bản cắt, bản chân cột, mối nối chồng hoặc bản nút tại nơi các thanh đã cho gặp nhau, như các nút {{ui:Connect}} làm |
| `undo` | Chỉnh sửa | Hoàn tác các bước gần nhất của trợ lý |
| `model_save` | Lưu | Lệnh Lưu của DetailCraft |
| `model_export` | Xuất | IFC, tệp NC, BOM, bảng uốn thép, tệp KISS hoặc danh sách cắt, như các nút {{ui:Output}} tạo ra |
| `usd_export` | Xuất | Mô hình thép dưới dạng USD (.usda, .usdc hoặc .usdz), như {{ui:Output}} › {{ui:USD}} ghi ra (xem [Xuất mô hình thép sang USD](topic:usd)); trong Studio, nó có thể ghi tệp vào một thư mục bạn đã cho phép |

## Nếu có gì đó không hoạt động

- **Trợ lý không thấy công cụ DetailCraft nào:** kiểm tra công tắc đã bật trong cửa sổ này chưa, và cửa sổ đã mở trong Studio chưa.
- **"needs the edit permission"** (hoặc save, export): đánh dấu quyền đó dưới {{ui:Assistants}}, rồi yêu cầu lại.
- **"The person is placing a member":** hoàn tất việc bạn đang làm (hoặc nhấn {{key:Esc}}), rồi cho trợ lý thử lại.
- **Lỗi "401" hoặc "token":** token đã thay đổi (Studio khởi động lại, hoặc {{ui:Token mới}}). Sao chép token mới vào cài đặt của trợ lý.

## Xem thêm

- [Công thức cho trợ lý AI](common:assistants-recipes): các ví dụ có sẵn, mỗi ví dụ kèm các công cụ nó gọi.
