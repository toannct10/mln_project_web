import { motion } from 'framer-motion';
import { BookOpen, HelpCircle } from 'lucide-react';
import Accordion from '../components/Accordion';

export default function TheoryPage() {
  const pageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  const theoryItems = [
    {
      id: 'giai-cap-la-gi',
      title: '1. Giai cấp là gì?',
      content: (
        <div className="space-y-4 text-slate-700">
          <p className="font-semibold text-slate-800 text-lg md:text-xl">Định nghĩa kinh điển của V.I.Lênin (trong tác phẩm "Sáng kiến vĩ đại"):</p>
          <blockquote className="border-l-4 border-brand-500 pl-4 py-1 italic bg-brand-50/40 text-slate-700 my-4 text-base md:text-lg">
            "Người ta gọi là giai cấp, những tập đoàn người to lớn, khác nhau về địa vị của họ trong một hệ thống sản xuất xã hội nhất định trong lịch sử, khác nhau về quan hệ của họ (thường thường thì những quan hệ này được pháp luật quy định và thừa nhận) đối với những tư liệu sản xuất, khác nhau về vai trò của họ trong tổ chức lao động xã hội, và do đó, khác nhau về phương thức hưởng thụ và về phần sản phẩm xã hội ít hay nhiều mà họ được hưởng."
          </blockquote>
          <p className="text-base md:text-lg">
            Bản chất của giai cấp nằm ở sự phân chia trong <span className="font-semibold text-brand-600">quan hệ sản xuất</span>, cốt lõi là quan hệ sở hữu đối với tư liệu sản xuất.
          </p>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mt-4 space-y-3">
            <h4 className="font-bold text-slate-800 text-base md:text-lg">Sự dịch chuyển trong nền kinh tế số:</h4>
            <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
              <li>
                <strong className="text-brand-700">Giai cấp tư sản số (Digital Capitalist):</strong> Nắm giữ các tư liệu sản xuất phi vật chất cực kỳ quan trọng như <span className="underline">thuật toán cốt lõi</span>, hệ thống máy chủ đám mây khổng lồ, hạ tầng phần mềm cốt lõi, và cơ sở dữ liệu lớn (Big Data).
              </li>
              <li>
                <strong className="text-brand-700">Giai cấp vô sản số (Digital Proletariat):</strong> Những lao động tự do (gig workers, tài xế công nghệ, lập trình viên gia công) không sở hữu các nền tảng này, buộc phải bán sức lao động trí tuệ/vật lý thông qua các ứng dụng di động để kiếm phí dịch vụ.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'dau-tranh-giai-cap-la-gi',
      title: '2. Đấu tranh giai cấp là gì?',
      content: (
        <div className="space-y-4 text-slate-700">
          <p className="text-base md:text-lg">
            Theo lý thuyết Mác - Lênin, <span className="font-semibold text-brand-600">đấu tranh giai cấp</span> là cuộc đấu tranh giữa các giai cấp có lợi ích căn bản đối lập nhau, không thể điều hòa được. Đây là động lực phát triển trực tiếp của các xã hội có giai cấp đối kháng.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="p-5 rounded-2xl bg-white border border-slate-150 shadow-soft">
              <span className="text-xs uppercase font-bold text-brand-500 tracking-wider">Hình thức 1</span>
              <h5 className="font-bold text-slate-800 text-base my-2">Đấu tranh kinh tế</h5>
              <p className="text-xs md:text-sm text-slate-500">Đòi tăng lương, giảm giờ làm, cải thiện điều kiện lao động thông qua bãi công, đình công.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-150 shadow-soft">
              <span className="text-xs uppercase font-bold text-brand-500 tracking-wider">Hình thức 2</span>
              <h5 className="font-bold text-slate-800 text-base my-2">Đấu tranh chính trị</h5>
              <p className="text-xs md:text-sm text-slate-500">Hình thức cao nhất, nhằm giành chính quyền về tay giai cấp vô sản và xóa bỏ chế độ áp bức.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-150 shadow-soft">
              <span className="text-xs uppercase font-bold text-brand-500 tracking-wider">Hình thức 3</span>
              <h5 className="font-bold text-slate-800 text-base my-2">Đấu tranh tư tưởng</h5>
              <p className="text-xs md:text-sm text-slate-500">Giải phóng tư tưởng giai cấp lao động khỏi hệ tư tưởng tư sản, truyền bá chủ nghĩa Mác - Lênin.</p>
            </div>
          </div>
          <p className="text-base md:text-lg">
            Trong kỷ nguyên số, mâu thuẫn giai cấp thể hiện rõ rệt qua việc chủ nền tảng sử dụng các thuật toán điều phối để tối đa hóa thặng dư (thời gian lái xe, mức phí hoa hồng cao), trong khi các tài xế liên tục bị giảm chiết khấu nhưng thiếu hoàn toàn các phúc lợi xã hội căn bản (bảo hiểm y tế, công đoàn chính thức).
          </p>
        </div>
      ),
    },
    {
      id: 'bai-cong-dap-pha-may-moc',
      title: '3. Cuộc bãi công đập phá máy móc thế kỷ 19 diễn ra như thế nào?',
      content: (
        <div className="space-y-4 text-slate-700">
          <p className="text-base md:text-lg">
            Vào đầu thế kỷ 19 (giai đoạn 1811-1816), tại nước Anh, phong trào <span className="font-semibold text-brand-600">Luddite</span> nổ ra. Những công nhân dệt may đã bí mật tổ chức đập phá máy móc công nghiệp dệt và đốt cháy các nhà máy.
          </p>
          <div className="bg-brand-50/50 border border-brand-100 p-6 rounded-2xl my-4 text-slate-700">
            <h4 className="font-bold text-slate-800 text-base md:text-lg mb-2">Vì sao họ lại đập phá máy móc?</h4>
            <p className="text-sm md:text-base leading-relaxed">
              Dưới tác động của cách mạng công nghiệp lần thứ nhất, máy móc xuất hiện làm giảm mạnh nhu cầu về lao động lành nghề, dẫn tới làn sóng mất việc hàng loạt, lương bị giảm trầm trọng, và điều kiện làm việc trong công xưởng vô cùng tồi tệ. Người công nhân khi đó lầm tưởng rằng <strong className="text-red-600">bản thân máy móc</strong> chính là thủ phạm cướp đi sinh kế của họ.
            </p>
          </div>
          <p className="font-bold text-slate-800 text-base md:text-lg">Nhận định triết học của Karl Marx:</p>
          <p className="text-sm md:text-base">
            Karl Marx nhận định đây là hình thức đấu tranh sơ khai, mang tính tự phát và chưa có ý thức giai cấp tự giác. Người công nhân chưa phân biệt được sự khác nhau giữa <span className="italic">công cụ sản xuất vật chất</span> và <span className="italic">hình thức bóc lột xã hội</span> của tư bản.
          </p>
          <p className="text-sm md:text-base italic text-slate-500">
            "Phải có thời gian và kinh nghiệm trước khi người công nhân học được cách phân biệt giữa bản thân máy móc và việc sử dụng chúng trong chủ nghĩa tư bản..." — K.Marx, tác phẩm "Tư bản".
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-28 px-4 pb-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={pageVariants}
        className="max-w-4xl mx-auto space-y-12"
      >
        {/* Header section */}
        <div className="text-center space-y-4">
          <div className="inline-flex p-3 rounded-2xl bg-brand-50 text-brand-600 border border-brand-100/50 shadow-soft">
            <BookOpen className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 font-display">
            Lý thuyết cơ bản
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto">
            Khái niệm triết học Mác - Lênin về phân chia giai cấp và bản chất đấu tranh trong quan hệ sản xuất công nghiệp lịch sử.
          </p>
          <div className="h-1 w-20 bg-brand-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Accordions component */}
        <div className="pt-4">
          <Accordion items={theoryItems} />
        </div>

        {/* Presenter Help Card */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-200/50 flex items-start gap-4 max-w-2xl mx-auto bg-white/40">
          <HelpCircle className="w-6 h-6 text-brand-500 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-slate-800 font-bold text-sm md:text-base">Mẹo trình chiếu Projector</h4>
            <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
              Nhấp vào tiêu đề mỗi thẻ để mở rộng nội dung một cách mượt mà. Hệ thống được tinh chỉnh giãn dòng rộng rãi và cỡ chữ lớn nhằm hỗ trợ người xem dễ dàng quan sát từ xa trong giảng đường.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
