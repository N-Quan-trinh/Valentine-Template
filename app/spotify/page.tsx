
import React from "react";
import { sacramento } from "@/lib/fonts";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function page() {
    const line1 = `Hôm nay là ngày 8/3, nên béo muốn dành tặng cho em 1 số bài hát để cho em biết rằng, em là người phụ nữ quan trọng nhất với anh bây giờ (không tính mẹ anh :D). Trong khoảng thời gian qua, em luôn luôn giành những điều tốt đẹp nhất cho gia đình, bạn bè và anh mà có lúc quên đi cả bản thân. Vì vậy, những lúc em cảm thấy mọi thứ quá nặng nề, rằng có vẻ cả thế giới đang chống lại em, thì anh sẽ cùng em carry some of the heavy weight nhé ! `;
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
