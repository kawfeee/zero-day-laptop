// import React, { useState } from "react";
// import "../styles/TrainingVideos.css";

// const TrainingVideos = () => {
//   const [isComplianceChecked, setIsComplianceChecked] = useState(false);

//   const handleComplianceCheck = () => {
//     setIsComplianceChecked(!isComplianceChecked);
//   };

//   return (
//     <div className="training-videos-container">
//       {/* Main Blue Rectangle Container */}
//       <div className="main-rectangle">
//         {/* White Text Area */}
//         <div className="white-text-area">
//           <div className="text-content">
//             <h2 className="section-title">CONFIDENTIALITY PLEDGE</h2>
//             <p className="section-subtitle">
//               Aenean aliquet lectus vestibulum gravida sed vulputate vitae.
//             </p>
//             <div className="main-text">
//               <p>
//                 Contrary to popular belief, Lorem Ipsum is not simply random
//                 text. It has roots in a piece of classical Latin literature from
//                 45 BC, making it over 2000 years old. Richard McClintock, a
//                 Latin professor at Hampden-Sydney College in Virginia, looked up
//                 one of the more obscure Latin words, consectetur, from a Lorem
//                 Ipsum passage, and going through the cites of the word in
//                 classical literature, discovered the undoubtable source. Lorem
//                 Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
//                 Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
//                 written in 45 BC. This book is a treatise on the theory of
//                 ethics, very popular during the Renaissance. The first line of
//                 Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
//                 in section 1.10.32.
//               </p>
//               <p>
//                 The standard chunk of Lorem Ipsum used since the 1500s is
//                 reproduced below for those interested. Sections 1.10.32 and
//                 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
//                 reproduced in their exact original form, accompanied by English
//                 versions from the 1914 translation by H. Rackham
//               </p>
//               <p>
//                 There are many variations of passages of Lorem Ipsum available,
//                 but the majority have suffered alteration in some form, by
//                 injected humour, or randomised words which don't look even
//                 slightly believable. If you are going to use a passage of Lorem
//                 Ipsum, you need to be sure there isn't anything embarrassing
//                 hidden in the middle of text. All the Lorem Ipsum generators on
//                 the Internet tend to repeat predefined chunks as necessary,
//                 making this the first true generator on the Internet. It uses a
//                 dictionary of over 200 Latin words, combined with a handful of
//                 model sentence structures, to generate Lorem Ipsum which looks
//                 reasonable. The generated Lorem Ipsum is therefore always free
//                 from repetition, injected humour, or non-characteristic words
//                 etc.
//               </p>
//               <p>
//                 There are many variations of passages of Lorem Ipsum available,
//                 but the majority have suffered alteration in some form, by
//                 injected humour, or randomised words which don't look even
//                 slightly believable. If you are going to use a passage of Lorem
//                 Ipsum, you need to be sure there isn't anything embarrassing
//                 hidden in the middle of text. All the Lorem Ipsum generators on
//                 the Internet tend to repeat predefined chunks as necessary.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Compliance Checkbox */}
//         <div className="compliance-checkbox">
//           <label className="checkbox-container">
//             <input
//               type="checkbox"
//               checked={isComplianceChecked}
//               onChange={handleComplianceCheck}
//               className="checkbox-input"
//             />
//             <span className="checkbox-text">I agree</span>
//           </label>
//         </div>
//       </div>

//       {/* Submit Button - Outside blue rectangle, above View Policies */}
//       <div className="submit-section-outside">
//         <button className="submit-button">Submit</button>
//       </div>

//       {/* Action Bar - Below the light blue rectangle */}
//       <div className="action-bar">
//         <div className="view-policies-link">
//           <svg
//             width="20"
//             height="20"
//             viewBox="0 0 20 20"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <mask
//               id="mask0_124_23135"
//               style={{ maskType: "luminance" }}
//               maskUnits="userSpaceOnUse"
//               x="0"
//               y="0"
//               width="20"
//               height="20"
//             >
//               <path d="M0 0H20V20H0V0Z" fill="white" />
//             </mask>
//             <g mask="url(#mask0_124_23135)">
//               <path
//                 d="M16.875 8.65039V16.2578C16.875 16.9481 16.6309 17.5374 16.1428 18.0256C15.6546 18.5137 15.0653 18.7578 14.375 18.7578H5.625C4.93464 18.7578 4.34539 18.5137 3.85723 18.0256C3.36908 17.5374 3.125 16.9481 3.125 16.2578V3.75781C3.125 3.06746 3.36908 2.4782 3.85723 1.99005C4.34539 1.50189 4.93464 1.25781 5.625 1.25781H9.48242C9.73104 1.25785 9.97017 1.30543 10.1998 1.40055C10.4294 1.49567 10.6321 1.6311 10.8079 1.80684L16.3259 7.32485C16.5017 7.50066 16.6372 7.70338 16.7323 7.93301C16.8274 8.16265 16.8749 8.40184 16.875 8.65039ZM15.625 8.65049C15.625 8.56763 15.6091 8.48793 15.5774 8.41139C15.5457 8.33485 15.5006 8.2673 15.442 8.20874L9.92412 2.69082C9.86553 2.63224 9.79797 2.5871 9.72142 2.55539C9.64487 2.52369 9.56521 2.50783 9.48242 2.50781H5.625C5.27982 2.50781 4.98519 2.62985 4.74112 2.87393C4.49704 3.118 4.375 3.41263 4.375 3.75781V16.2578C4.375 16.603 4.49704 16.8976 4.74112 17.1417C4.98519 17.3858 5.27982 17.5078 5.625 17.5078H14.375C14.7202 17.5078 15.0148 17.3858 15.2589 17.1417C15.503 16.8976 15.625 16.603 15.625 16.2578V8.65049Z"
//                 fill="#606060"
//               />
//               <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M10 1.57031C9.65482 1.57031 9.375 1.85014 9.375 2.19531V6.88281C9.375 7.40058 9.55806 7.84252 9.92417 8.20864C10.2903 8.57476 10.7322 8.75781 11.25 8.75781H15.9375C16.2827 8.75781 16.5625 8.47798 16.5625 8.13281C16.5625 7.78764 16.2827 7.50781 15.9375 7.50781H11.25C11.0774 7.50781 10.9301 7.44679 10.8081 7.32475C10.686 7.20271 10.625 7.0554 10.625 6.88281V2.19531C10.625 1.85014 10.3452 1.57031 10 1.57031ZM6.25 11.2578C6.25 11.603 6.52983 11.8828 6.875 11.8828H13.125C13.4702 11.8828 13.75 11.603 13.75 11.2578C13.75 10.9126 13.4702 10.6328 13.125 10.6328H6.875C6.52983 10.6328 6.25 10.9126 6.25 11.2578ZM6.25 14.3828C6.25 14.728 6.52983 15.0078 6.875 15.0078H13.125C13.4702 15.0078 13.75 14.728 13.75 14.3828C13.75 14.0376 13.4702 13.7578 13.125 13.7578H6.875C6.52983 13.7578 6.25 14.0376 6.25 14.3828Z"
//                 fill="#606060"
//               />
//             </g>
//           </svg>
//           <span>View Policies</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TrainingVideos;
