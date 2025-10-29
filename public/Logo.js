// // export default function Logo(){
// //   return(
// //     <div className="w-full relative flex justify-center scale-[32%] sm:scale-[40%] origin-bottom">
// //       {/* 파란색 삼각형 */}
// //       <div className="relative z-30">
// //         <svg
// //           className="svg1"
// //           width="200"
// //           height="200"
// //           viewBox="0 0 200 200"
// //           fill="none"
// //         >
// //           {/* <path
// //             className="path1"
// //             d="M 50 140.5 L 100 64 L 150 140.5"
// //             stroke="#007AFF"
// //             strokeWidth="72"
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //             pathLength="1"
// //           /> */}
// //           <path
// //             className="path1"
// //             d="M100 144C75.6995 144 56 124.301 56 100C56 75.6995 75.6995 56 100 56C124.301 56 144 75.6995 144 100C144 124.301 124.301 144 100 144Z"
// //             stroke="#9BE200"
// //             strokeWidth="72"
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //             pathLength="1"
// //           />
// //         </svg>
// //       </div>



// //       {/* 노란색 원 + 흰색 내부 도형 */}
// //       {/* <div className="relative z-10">
// //         <svg
// //           className="svg1"
// //           width="200"
// //           height="200"
// //           viewBox="0 0 200 200"
// //           fill="none"
// //         >
// //           <path
// //             className="path1"
// //             d="M100 144C75.6995 144 56 124.301 56 100C56 75.6995 75.6995 56 100 56C124.301 56 144 75.6995 144 100C144 124.301 124.301 144 100 144Z"
// //             stroke="#F59E0B"
// //             strokeWidth="72"
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //             pathLength="1"
// //           />
// //           <path
// //             className="path2 dark:fill-background"
// //             d="M86 143C86 162.882 69.8823 179 50 179C30.1177 179 14 162.882 14 143C14 123.118 30.1177 107 50 107C69.8823 107 86 123.118 86 143Z"
// //             fill="#ffffff"
// //           />
// //         </svg>
// //       </div> */}
// // <div className="relative z-10">
// //   <svg
// //     className="svg1"
// //     width="200"
// //     height="200"
// //     viewBox="0 0 200 200"
// //     fill="none"
// //   >
// //     {/* 가로선 */}
// //     <path
// //       className="path1"
// //       d="M50 100 H130"  // 좌측 50, 우측 130
// //       stroke="#F59E0B"
// //       strokeWidth="72"
// //       strokeLinecap="round"
// //       strokeLinejoin="round"
// //       pathLength="1"
// //     />

// //     {/* 세로선 */}
// //     <path
// //       className="path2"
// //       d="M130 100 V160"  // 가로선 오른쪽 끝에서 아래로
// //       stroke="#F59E0B"
// //       strokeWidth="72"
// //       strokeLinecap="round"
// //       strokeLinejoin="round"
// //       pathLength="1"
// //     />
// //   </svg>
// // </div>

// //         {/* 초록색 모양 */}
// //       <div className="relative z-20">
// //         <svg
// //           className="svg1"
// //           width="200"
// //           height="200"
// //           viewBox="0 0 200 200"
// //           fill="none"
// //         >
// //           <path
// //             className="path1"
// //             d="M50 57H150"
// //             stroke="#40bbed "
// //             strokeWidth="72"
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //             pathLength="1"
// //           />
// //           <path
// //             className="path2"
// //             d="M50 143L100 93L150 143"
// //             stroke="#40bbed"
// //             strokeWidth="72"
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //             pathLength="1"
// //           />
// //         </svg>
// //       </div>
// //     </div>

// //   )
// // }



// "use client";

// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function AnimatedLKJ() {
//   const [showInitials, setShowInitials] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setShowInitials(true), 2000); // 2초 후 전환
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="flex items-center justify-center h-screen bg-white">
//       {!showInitials ? (
//         // 점 3개 로딩
//         <div className="flex space-x-4">
//           {["#9BE200", "#F59E0B", "#40BBED"].map((color, i) => (
//             <motion.div
//               key={i}
//               className="w-4 h-4 rounded-full"
//               animate={{ y: [0, -10, 0] }}
//               transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.2 }}
//               style={{ backgroundColor: color }}
//             />
//           ))}
//         </div>
//       ) : (
//         // 이니셜 등장
//         <motion.div
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           className="relative w-32 h-32"
//         >
//     <div className="w-full relative flex justify-center scale-[32%] sm:scale-[40%] origin-bottom">
//       {/* 파란색 삼각형 */}
//       <div className="relative z-30">
//         <svg
//           className="svg1"
//           width="200"
//           height="200"
//           viewBox="0 0 200 200"
//           fill="none"
//         >

//           <path
//             className="path1"
//             d="M100 144C75.6995 144 56 124.301 56 100C56 75.6995 75.6995 56 100 56C124.301 56 144 75.6995 144 100C144 124.301 124.301 144 100 144Z"
//             stroke="#9BE200"
//             strokeWidth="72"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             pathLength="1"
//           />
//         </svg>
//       </div>


//       <div className="relative z-10">
//         <svg
//           className="svg1"
//           width="200"
//           height="200"
//           viewBox="0 0 200 200"
//           fill="none"
//         >
//           {/* 가로선 */}
//           <path
//             className="path1"
//             d="M50 100 H130"  // 좌측 50, 우측 130
//             stroke="#F59E0B"
//             strokeWidth="72"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             pathLength="1"
//           />

//           {/* 세로선 */}
//           <path
//             className="path2"
//             d="M130 100 V160"  // 가로선 오른쪽 끝에서 아래로
//             stroke="#F59E0B"
//             strokeWidth="72"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             pathLength="1"
//           />
//         </svg>
//       </div>

//         {/* 초록색 모양 */}
//       <div className="relative z-20">
//         <svg
//           className="svg1"
//           width="200"
//           height="200"
//           viewBox="0 0 200 200"
//           fill="none"
//         >
//           <path
//             className="path1"
//             d="M50 57H150"
//             stroke="#40bbed "
//             strokeWidth="72"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             pathLength="1"
//           />
//           <path
//             className="path2"
//             d="M50 143L100 93L150 143"
//             stroke="#40bbed"
//             strokeWidth="72"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             pathLength="1"
//           />
//         </svg>
//       </div>
//     </div>
//         </motion.div>
//       )}
//     </div>
//   );
// }


