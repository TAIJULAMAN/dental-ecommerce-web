// import React from "react";
// import { useState } from 'react';
// import { FiSend } from 'react-icons/fi';
// import { AiOutlineRobot } from 'react-icons/ai';
// export default function AboutUs() {
//     const messages = Array(6).fill('Hello, Reza How can i help you??');
//     return (
//           <div className="flex flex-col h-screen bg-slate-900 text-white font-sans">
//           {/* Header */}
//           <header className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700">
//             <AiOutlineRobot className="text-2xl text-sky-400" />
//             <span className="font-semibold">Ai Bot 24×7 Support Bot</span>
//           </header>

//           {/* Messages */}
//           <main className="flex-1 overflow-y-auto p-4 space-y-3">
//             {messages.map((msg, idx) => (
//               <div
//                 key={idx}
//                 className="bg-slate-700 rounded-lg px-4 py-2 max-w-xs break-words"
//               >
//                 {msg}
//                 <p className="text-xs text-slate-400 mt-1">8:26 pm</p>
//               </div>
//             ))}
//           </main>

//           {/* Input */}
//           <footer className="p-4 bg-slate-800 border-t border-slate-700">
//             <form className="flex items-center gap-2">
//               <input
//                 type="text"
//                 placeholder="Type here"
//                 className="flex-1 bg-slate-700 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
//               />
//               <button
//                 type="submit"
//                 className="p-2 rounded-full bg-sky-500 hover:bg-sky-600 transition"
//               >
//                 <FiSend size={18} />
//               </button>
//             </form>
//           </footer>
//         </div>
//     );
// }

// AboutUs.jsx
// import React from 'react';

// const AboutUs = () => (
//   <section className="max-w-3xl mx-auto px-6 py-12 text-slate-700 leading-relaxed">
//     <h1 className="text-4xl font-bold mb-6 text-slate-900">About&nbsp;Us</h1>

//     {[
//       `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,

//       `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,

//       `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum.`
//     ].map((para, idx) => (
//       <p key={idx} className="mb-6">
//         {para}
//       </p>
//     ))}
//   </section>
// );

// export default AboutUs;
import React from "react";
import BreadCrumb from "../../components/shared/BreadCrumb";
export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#171717] text-white py-5">
      <div className="container mx-auto flex justify-start items-center">
        <BreadCrumb title="About Us" />
      </div>
      <div className="container mx-auto p-5 shadow-lg rounded-lg bg-[#1c1c1c]">
        <section className="px-6 py-12 text-slate-700 leading-relaxed">
          <h1 className="text-2xl font-bold mb-5 text-white">About Us</h1>

          {[
            `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,

            `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,

            `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum.`,
          ].map((para, idx) => (
            <p key={idx} className="mb-5 text-[#9F9C96]">
              {para}
            </p>
          ))}
        </section>
      </div>
    </div>
  );
}
