
import React from "react";
import { sacramento } from "@/lib/fonts";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function page() {
    const line1 = 'Hôm nay là ngày 8/3, nên béo muốn dành tặng cho em 1 số bài hát để cho em biết rằng, em là người phụ nữ quan trọng nhất đối với anh (không tính mẹ anh :D). Béo à, em có biết em luôn mang hình tượng 1 người rất là mạnh mẽ trong mắt anh không? qua các lời tâm sự and câu chuyện em kể, em luôn cố gắng mang lại điều tốt đẹp nhất cho mọi người xung quanh em, bạn bè, gia đình hay là anh ngay cả khi nó làm em buồn hay mệt. Vì thế, nếu như 1 ngày nào đó em mệt, béo cảm thấy quá nặng nề, thì em hãy để anh carry em a little bit nhé? Anh hong biết rằng mọi thứ sẽ trở nên dễ dàng hơn hay không but anh biết 1 điều rằng, em luôn luôn có anh để cùng nhau xử lý vì có em, anh không cần phải sợ gì cả.';
    return (
    <>
      <div className="w-full h-screen bg-gradient-to-r from-pink-500 to-red-500">
        <div className="flex justify-center items-center ">
          <div className="w-full mx-auto md:w-3/4 h-full md:h-1/2 my-9 ">
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/44NE0YF9Bc1Zh3pu29UvE6?utm_source=generator"
              width="100%"
              height="400"
              allowFullScreen
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="flex justify-center items-center">
         
          <TextGenerateEffect
            words={line1}
            className={`text-5xl md:text-8xl lg:text-9xl ${sacramento.className}`}
          />
        </div>
      </div>
    </>
  );
}
