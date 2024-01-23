"use client";

import React from "react";
import "./Navbar.css";
import { useSelector } from "react-redux";
import Link from "next/link";
import dynamic from "next/dynamic";

function Navbar() {
  const wishedData = useSelector((data) => data.wishListData.wishList);
  const cartData = useSelector((data) => data.cartListData.cartList);
  console.log(wishedData.length);
  const totalItem = cartData.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.quantity;
  }, 0);

  const totalAmount = cartData.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.price * currentValue.quantity;
  }, 0);

  return (
    <div className="navbar mx-auto max-w-6xl bg-transparent py-6">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="84"
            height="24"
            viewBox="0 0 84 24"
            fill="none"
          >
            <path
              d="M4.88916 21.5103C5.19678 21.5103 5.50879 21.4312 5.8252 21.2729C6.15039 21.1147 6.47559 20.8687 6.80078 20.5347C7.13477 20.2007 7.47754 19.77 7.8291 19.2427C8.18066 18.7065 8.54102 18.0693 8.91016 17.3311L9.04199 17.0542L9.58252 17.4629L9.45068 17.7397C8.97607 18.6802 8.50146 19.4844 8.02686 20.1523C7.56104 20.8203 7.09961 21.3652 6.64258 21.7871C6.19434 22.209 5.75049 22.5166 5.31104 22.71C4.87158 22.9033 4.44971 23 4.04541 23C3.47412 23 2.96436 22.8813 2.51611 22.644C2.06787 22.4067 1.68994 22.0859 1.38232 21.6816C1.07471 21.2686 0.841797 20.7939 0.683594 20.2578C0.516602 19.7129 0.433105 19.1416 0.433105 18.5439C0.433105 17.5947 0.564941 16.7334 0.828613 15.96C1.0835 15.1777 1.42627 14.5098 1.85693 13.9561C2.29639 13.4023 2.79297 12.9717 3.34668 12.6641C3.90039 12.3564 4.47607 12.2026 5.07373 12.2026C5.68018 12.2026 6.1416 12.3564 6.45801 12.6641C6.7832 12.9717 6.9458 13.3584 6.9458 13.8242C6.9458 14.2725 6.81836 14.6943 6.56348 15.0898C6.30859 15.4766 5.96143 15.8589 5.52197 16.2368C5.09131 16.606 4.59033 16.9751 4.01904 17.3442C3.44775 17.7046 2.8457 18.0781 2.21289 18.4648C2.27441 18.9219 2.37988 19.3394 2.5293 19.7173C2.67871 20.0864 2.86768 20.4072 3.09619 20.6797C3.32471 20.9434 3.58838 21.1499 3.88721 21.2993C4.18604 21.4399 4.52002 21.5103 4.88916 21.5103ZM5.29785 14.2197C5.29785 13.8682 5.20117 13.5913 5.00781 13.3892C4.82324 13.187 4.59473 13.0859 4.32227 13.0859C4.09375 13.0859 3.85205 13.1694 3.59717 13.3364C3.34229 13.4946 3.10938 13.7539 2.89844 14.1143C2.6875 14.4658 2.51172 14.9185 2.37109 15.4722C2.23047 16.0259 2.16016 16.6982 2.16016 17.4893V17.7925C2.45898 17.6343 2.78857 17.4277 3.14893 17.1729C3.51807 16.9092 3.86084 16.6191 4.17725 16.3027C4.49365 15.9863 4.75732 15.6523 4.96826 15.3008C5.18799 14.9404 5.29785 14.5801 5.29785 14.2197ZM32.7197 19.7305C32.7197 20.2314 32.7637 20.6533 32.8516 20.9961C32.9395 21.3389 33.0933 21.5103 33.313 21.5103C33.4448 21.5103 33.5854 21.4487 33.7349 21.3257C33.8931 21.1938 34.0732 20.9829 34.2754 20.6929C34.4775 20.4028 34.7061 20.0293 34.9609 19.5723C35.2246 19.1064 35.5234 18.5396 35.8574 17.8716L36.2529 17.0542L36.7935 17.4629L36.3979 18.2803C36.0288 19.0186 35.6816 19.6821 35.3564 20.271C35.04 20.8511 34.7368 21.3433 34.4468 21.7476C34.1567 22.1519 33.8711 22.4639 33.5898 22.6836C33.3174 22.8945 33.0449 23 32.7725 23C32.4824 23 32.2363 22.9209 32.0342 22.7627C31.8408 22.6045 31.6782 22.3892 31.5464 22.1167C31.4146 21.8354 31.3135 21.5146 31.2432 21.1543C31.1729 20.7852 31.1245 20.394 31.0981 19.981C30.8872 20.4028 30.6543 20.7983 30.3994 21.1675C30.1445 21.5278 29.8765 21.8442 29.5952 22.1167C29.3228 22.3892 29.0371 22.6045 28.7383 22.7627C28.4395 22.9209 28.1406 23 27.8418 23C27.4023 23 26.9761 22.9077 26.563 22.7231C26.1499 22.5386 25.7808 22.2573 25.4556 21.8794C25.1392 21.5015 24.8843 21.0269 24.6909 20.4556C24.4976 19.8755 24.4009 19.1943 24.4009 18.4121C24.4009 17.498 24.5195 16.6631 24.7568 15.9072C24.9941 15.1426 25.3149 14.4878 25.7192 13.9429C26.1235 13.3892 26.5894 12.9629 27.1167 12.6641C27.644 12.3564 28.1978 12.2026 28.7778 12.2026C29.1294 12.2026 29.4546 12.2817 29.7534 12.4399C30.0522 12.5981 30.3115 12.7915 30.5312 13.02C30.7598 13.2397 30.9487 13.4771 31.0981 13.7319C31.2476 13.978 31.3486 14.189 31.4014 14.3647L31.5596 13.0859C31.5771 12.9189 31.6562 12.7783 31.7969 12.6641C31.9463 12.5498 32.1089 12.4619 32.2847 12.4004C32.4604 12.3301 32.6318 12.2817 32.7988 12.2554C32.9658 12.2202 33.0845 12.2026 33.1548 12.2026C33.2603 12.2026 33.3306 12.2202 33.3657 12.2554C33.4009 12.2905 33.4185 12.3608 33.4185 12.4663C33.4185 12.5981 33.3789 12.8662 33.2998 13.2705C33.2295 13.666 33.1504 14.1758 33.0625 14.7998C32.9834 15.415 32.9043 16.1401 32.8252 16.9751C32.7549 17.8101 32.7197 18.7285 32.7197 19.7305ZM31.2695 16.25C31.2695 15.8457 31.208 15.4502 31.085 15.0635C30.9619 14.668 30.7949 14.3208 30.584 14.022C30.373 13.7144 30.127 13.4683 29.8457 13.2837C29.5732 13.0991 29.2832 13.0068 28.9756 13.0068C28.5977 13.0068 28.2417 13.1167 27.9077 13.3364C27.5825 13.5474 27.2969 13.8506 27.0508 14.2461C26.8135 14.6328 26.6245 15.103 26.4839 15.6567C26.3433 16.2017 26.2729 16.8037 26.2729 17.4629C26.2729 18.7812 26.4795 19.7876 26.8926 20.4819C27.3057 21.1675 27.855 21.5103 28.5405 21.5103C28.8394 21.5103 29.147 21.3916 29.4634 21.1543C29.7886 20.9082 30.083 20.561 30.3467 20.1128C30.6191 19.6558 30.8389 19.1021 31.0059 18.4517C31.1816 17.8013 31.2695 17.0674 31.2695 16.25ZM43.9521 18.4121C43.9521 19.0098 43.8599 19.5854 43.6753 20.1392C43.4995 20.6841 43.2358 21.1719 42.8843 21.6025C42.5415 22.0244 42.1108 22.3628 41.5923 22.6177C41.0825 22.8726 40.498 23 39.8389 23C39.3643 23 38.938 22.9253 38.5601 22.7759C38.1909 22.6177 37.8745 22.4111 37.6108 22.1562C37.3472 21.8926 37.145 21.5981 37.0044 21.2729C36.8638 20.939 36.7935 20.5962 36.7935 20.2446C36.7935 19.8931 36.8594 19.5679 36.9912 19.269C37.1318 18.9614 37.3164 18.7021 37.5449 18.4912C37.7822 18.2715 38.0503 18.1001 38.3491 17.9771C38.6479 17.854 38.9644 17.7925 39.2983 17.7925C39.5093 17.7925 39.729 17.8188 39.9575 17.8716V18.2539C39.6763 18.2539 39.3994 18.311 39.127 18.4253C38.8633 18.5396 38.626 18.6978 38.415 18.8999C38.2129 19.0933 38.0503 19.3306 37.9272 19.6118C37.8042 19.8843 37.7427 20.1787 37.7427 20.4951C37.7427 21.0752 37.9404 21.541 38.3359 21.8926C38.7402 22.2354 39.2896 22.4067 39.9839 22.4067C40.3354 22.4067 40.6562 22.3408 40.9463 22.209C41.2363 22.0684 41.4824 21.8794 41.6846 21.6421C41.8955 21.396 42.0537 21.106 42.1592 20.772C42.2734 20.438 42.3306 20.0732 42.3306 19.6777C42.3306 19.2998 42.2559 18.9482 42.1064 18.623C41.957 18.2979 41.7593 17.9902 41.5132 17.7002C41.2671 17.4102 40.9858 17.1377 40.6694 16.8828C40.3618 16.6279 40.0454 16.3862 39.7202 16.1577C39.4038 15.9204 39.0918 15.6919 38.7842 15.4722C38.4766 15.2524 38.2085 15.0327 37.98 14.813L36.6616 17.7397L36.1211 17.3311L37.4658 14.3911C37.1406 14.0835 36.8989 13.7935 36.7407 13.521C36.5913 13.2397 36.5166 12.9058 36.5166 12.519C36.5166 12.3081 36.5518 12.1104 36.6221 11.9258C36.7012 11.7324 36.8022 11.5698 36.9253 11.438C37.0571 11.2974 37.2065 11.1875 37.3735 11.1084C37.5405 11.0293 37.7163 10.9897 37.9009 10.9897C38.2349 10.9897 38.4854 11.0864 38.6523 11.2798C38.8193 11.4644 38.9028 11.6973 38.9028 11.9785C38.9028 12.1104 38.8896 12.251 38.8633 12.4004C38.8369 12.541 38.8018 12.686 38.7578 12.8354C38.7227 12.9761 38.6831 13.1079 38.6392 13.231C38.604 13.354 38.5732 13.4595 38.5469 13.5474C38.8105 13.7495 39.127 13.9473 39.4961 14.1406C39.8652 14.3252 40.2476 14.5186 40.6431 14.7207C41.0474 14.9229 41.4473 15.1426 41.8428 15.3799C42.2383 15.6172 42.5898 15.8809 42.8975 16.1709C43.2139 16.4609 43.4688 16.7905 43.6621 17.1597C43.8555 17.5288 43.9521 17.9463 43.9521 18.4121ZM37.9272 11.583C37.8042 11.583 37.7031 11.627 37.624 11.7148C37.5537 11.7939 37.5186 11.9038 37.5186 12.0444C37.5186 12.2026 37.5581 12.3784 37.6372 12.5718C37.7163 12.7651 37.8569 12.9541 38.0591 13.1387C38.147 12.9541 38.2129 12.7739 38.2568 12.5981C38.3096 12.4224 38.3359 12.2466 38.3359 12.0708C38.3359 11.9302 38.2964 11.8159 38.2173 11.728C38.147 11.6313 38.0503 11.583 37.9272 11.583ZM46.7866 18.4121C46.7866 18.8428 46.7734 19.2998 46.7471 19.7832C46.7207 20.2578 46.6636 20.7368 46.5757 21.2202C46.4966 21.6948 46.3779 22.1606 46.2197 22.6177C46.0615 23.0659 45.8462 23.4834 45.5737 23.8701L44.5718 23.5669C44.7915 22.8286 44.9233 22.0552 44.9673 21.2466C45.0112 20.438 45.0332 19.6294 45.0332 18.8208C45.0332 17.9419 45.0068 17.063 44.9541 16.1841C44.8926 15.3052 44.8267 14.4263 44.7563 13.5474C44.6772 12.6597 44.6113 11.7676 44.5586 10.8711C44.4971 9.97461 44.4663 9.06934 44.4663 8.15527C44.4663 7.60156 44.5278 7.11816 44.6509 6.70508C44.7651 6.29199 44.9189 5.94922 45.1123 5.67676C45.3057 5.4043 45.521 5.20215 45.7583 5.07031C45.9956 4.92969 46.2329 4.85938 46.4702 4.85938C46.8042 4.85938 47.0679 4.97803 47.2612 5.21533C47.4634 5.45264 47.6128 5.77344 47.7095 6.17773C47.8062 6.58203 47.8545 7.05225 47.8545 7.58838C47.8633 8.12451 47.8413 8.69141 47.7886 9.28906C47.7358 9.88672 47.6611 10.4976 47.5645 11.1216C47.4678 11.7456 47.3623 12.3521 47.248 12.9409C47.1338 13.5298 47.0195 14.0791 46.9053 14.5889C46.7998 15.0986 46.7075 15.5337 46.6284 15.894C46.6284 15.9644 46.6328 16.0391 46.6416 16.1182C46.6504 16.1885 46.6548 16.2588 46.6548 16.3291C46.8394 15.916 47.0635 15.4722 47.3271 14.9976C47.5996 14.5142 47.9028 14.0659 48.2368 13.6528C48.5796 13.2397 48.9487 12.897 49.3442 12.6245C49.7485 12.3433 50.1748 12.2026 50.623 12.2026C51.2822 12.2026 51.7788 12.4224 52.1128 12.8618C52.4468 13.3013 52.6138 13.9341 52.6138 14.7603C52.6138 15.3315 52.583 15.8809 52.5215 16.4082C52.46 16.9355 52.3896 17.4453 52.3105 17.9375C52.2402 18.4209 52.1743 18.8911 52.1128 19.3481C52.0513 19.8052 52.0205 20.2578 52.0205 20.7061C52.0205 21.2422 52.1567 21.5103 52.4292 21.5103C52.561 21.5103 52.728 21.396 52.9302 21.1675C53.1411 20.9302 53.374 20.6182 53.6289 20.2314C53.8838 19.8447 54.1519 19.4009 54.4331 18.8999C54.7144 18.3989 54.9912 17.876 55.2637 17.3311L55.3955 17.0542L55.936 17.4629L55.8042 17.7397C55.4966 18.3462 55.1758 18.9614 54.8418 19.5854C54.5078 20.2095 54.165 20.7764 53.8135 21.2861C53.4619 21.7871 53.1016 22.2002 52.7324 22.5254C52.3721 22.8418 52.0117 23 51.6514 23C51.4932 23 51.3306 22.9736 51.1636 22.9209C51.0054 22.8682 50.8604 22.7759 50.7285 22.644C50.5967 22.5122 50.4868 22.3364 50.3989 22.1167C50.311 21.8882 50.2671 21.5981 50.2671 21.2466C50.2671 20.895 50.2847 20.5127 50.3198 20.0996C50.355 19.6865 50.3945 19.2646 50.4385 18.834C50.4912 18.3945 50.5483 17.9595 50.6099 17.5288C50.6714 17.0981 50.7241 16.6938 50.7681 16.3159C50.8208 15.938 50.8647 15.5996 50.8999 15.3008C50.9351 14.9932 50.9526 14.7427 50.9526 14.5493C50.9526 14.0483 50.8823 13.6836 50.7417 13.4551C50.6011 13.2266 50.3901 13.1123 50.1089 13.1123C49.7573 13.1123 49.4189 13.2661 49.0938 13.5737C48.7686 13.8813 48.4609 14.2681 48.1709 14.7339C47.8896 15.1909 47.6304 15.6875 47.3931 16.2236C47.1558 16.751 46.9448 17.2388 46.7603 17.687C46.7603 17.8188 46.7646 17.9507 46.7734 18.0825C46.7822 18.2056 46.7866 18.3154 46.7866 18.4121ZM45.9297 7.12695C45.9297 7.4873 45.9429 7.92676 45.9692 8.44531C46.0044 8.95508 46.0439 9.50879 46.0879 10.1064C46.1406 10.7041 46.1934 11.3281 46.2461 11.9785C46.3076 12.6289 46.3691 13.2705 46.4307 13.9033C46.5273 13.4111 46.624 12.8706 46.7207 12.2817C46.8174 11.6841 46.9009 11.0864 46.9712 10.4888C47.0503 9.88232 47.1074 9.29346 47.1426 8.72217C47.1865 8.15088 47.1953 7.64551 47.1689 7.20605C47.1514 6.7666 47.0942 6.41504 46.9976 6.15137C46.9009 5.87891 46.7603 5.74268 46.5757 5.74268C46.4087 5.74268 46.2593 5.84375 46.1274 6.0459C45.9956 6.24805 45.9297 6.6084 45.9297 7.12695ZM66.4434 17.4629L66.2983 17.7397C65.9995 18.3374 65.5996 18.8164 65.0986 19.1768C64.6064 19.5283 64.0703 19.7568 63.4902 19.8623C63.332 20.3105 63.1255 20.728 62.8706 21.1147C62.6245 21.4927 62.3389 21.8223 62.0137 22.1035C61.6973 22.3848 61.3369 22.6045 60.9326 22.7627C60.5371 22.9209 60.1064 23 59.6406 23C58.9639 23 58.353 22.8594 57.8081 22.5781C57.272 22.2881 56.8149 21.9014 56.437 21.418C56.0591 20.9258 55.769 20.3545 55.5669 19.7041C55.3647 19.0449 55.2637 18.3418 55.2637 17.5947C55.2637 16.9443 55.3384 16.3555 55.4878 15.8281C55.6372 15.292 55.8262 14.8174 56.0547 14.4043C56.2832 13.9824 56.5381 13.6177 56.8193 13.3101C57.1006 12.9937 57.3774 12.7344 57.6499 12.5322C57.9224 12.3301 58.1685 12.1807 58.3882 12.084C58.6167 11.9785 58.7881 11.9258 58.9023 11.9258L59.0737 12.3872C58.7134 12.6509 58.3926 13.02 58.1113 13.4946C57.8652 13.8989 57.6411 14.4351 57.439 15.103C57.2456 15.771 57.1489 16.6016 57.1489 17.5947C57.1489 18.2012 57.2061 18.79 57.3203 19.3613C57.4346 19.9326 57.6016 20.438 57.8213 20.8774C58.041 21.3169 58.3091 21.6685 58.6255 21.9321C58.9507 22.1958 59.3154 22.3276 59.7197 22.3276C60.2734 22.3276 60.7305 22.1079 61.0908 21.6685C61.46 21.2202 61.7324 20.6094 61.9082 19.8359C61.4512 19.7393 61.0161 19.5591 60.603 19.2954C60.1899 19.0317 59.8252 18.7065 59.5088 18.3198C59.1924 17.9243 58.9375 17.4717 58.7441 16.9619C58.5596 16.4521 58.4673 15.8984 58.4673 15.3008C58.4673 14.8086 58.5288 14.3779 58.6519 14.0088C58.7837 13.6309 58.9551 13.3188 59.166 13.0728C59.377 12.8179 59.6187 12.6289 59.8911 12.5059C60.1724 12.374 60.4668 12.3081 60.7744 12.3081C61.1348 12.3081 61.5039 12.4136 61.8818 12.6245C62.2598 12.8267 62.6025 13.1343 62.9102 13.5474C63.2178 13.9517 63.4683 14.4614 63.6616 15.0767C63.855 15.6919 63.9517 16.4082 63.9517 17.2256C63.9517 17.5332 63.9341 17.8364 63.8989 18.1353C63.8638 18.4341 63.811 18.7241 63.7407 19.0054C64.1626 18.8823 64.5449 18.6846 64.8877 18.4121C65.2393 18.1396 65.5293 17.7793 65.7578 17.3311L65.9028 17.0542L66.4434 17.4629ZM59.3374 15.1953C59.3374 15.7139 59.4077 16.1929 59.5483 16.6323C59.6978 17.063 59.8955 17.4453 60.1416 17.7793C60.3877 18.1045 60.6733 18.377 60.9985 18.5967C61.3237 18.8164 61.6709 18.9702 62.04 19.0581C62.084 18.812 62.1104 18.5571 62.1191 18.2935C62.1367 18.021 62.1455 17.7441 62.1455 17.4629C62.1455 16.8389 62.0972 16.2764 62.0005 15.7754C61.9038 15.2656 61.7764 14.835 61.6182 14.4834C61.46 14.123 61.2754 13.8462 61.0645 13.6528C60.8535 13.4595 60.6382 13.3628 60.4185 13.3628C60.1196 13.3628 59.8647 13.5254 59.6538 13.8506C59.4429 14.167 59.3374 14.6152 59.3374 15.1953ZM66.5884 17.1992L66.4565 17.4629L66.3247 17.7397L65.7842 17.3311L65.916 17.0542C66.1357 16.606 66.3159 16.1577 66.4565 15.7095C66.606 15.2524 66.7246 14.8262 66.8125 14.4307C66.9092 14.0352 66.9883 13.688 67.0498 13.3892C67.1113 13.0903 67.1729 12.875 67.2344 12.7432C67.2871 12.6377 67.3618 12.5542 67.4585 12.4927C67.564 12.4224 67.6694 12.3652 67.7749 12.3213C67.8892 12.2773 67.9946 12.2466 68.0913 12.229C68.1968 12.2114 68.2715 12.2026 68.3154 12.2026C68.5088 12.2026 68.6362 12.2422 68.6978 12.3213C68.7681 12.4004 68.8032 12.541 68.8032 12.7432C68.8032 12.8398 68.7812 13.0815 68.7373 13.4683C68.7021 13.8462 68.6582 14.3252 68.6055 14.9053C68.5615 15.4766 68.5176 16.1226 68.4736 16.8433C68.4385 17.5552 68.4209 18.2935 68.4209 19.0581C68.4209 19.6118 68.4473 20.0513 68.5 20.3765C68.5527 20.6929 68.6187 20.9302 68.6978 21.0884C68.7856 21.2466 68.8779 21.3477 68.9746 21.3916C69.0801 21.4355 69.1855 21.4575 69.291 21.4575C69.4316 21.4575 69.5898 21.396 69.7656 21.2729C69.9414 21.1499 70.1479 20.9346 70.3853 20.627C70.6226 20.3105 70.895 19.8887 71.2026 19.3613C71.5103 18.8252 71.8706 18.1484 72.2837 17.3311L72.4287 17.0542L72.9692 17.4629L72.8242 17.7397C72.4902 18.3901 72.1562 19.0317 71.8223 19.6646C71.4971 20.2974 71.1631 20.8599 70.8203 21.3521C70.4863 21.8442 70.1479 22.2441 69.8052 22.5518C69.4624 22.8506 69.1196 23 68.7769 23C68.4165 23 68.1045 22.9297 67.8408 22.7891C67.5859 22.6396 67.3706 22.3979 67.1948 22.064C67.0278 21.73 66.9004 21.2905 66.8125 20.7456C66.7334 20.1919 66.6938 19.5107 66.6938 18.7021C66.6938 18.4736 66.6938 18.2363 66.6938 17.9902C66.6938 17.7354 66.7026 17.4717 66.7202 17.1992H66.5884ZM69.291 9.5C69.291 9.80762 69.1855 10.0669 68.9746 10.2778C68.7725 10.48 68.5176 10.5811 68.21 10.5811C67.9111 10.5811 67.6562 10.48 67.4453 10.2778C67.2344 10.0669 67.1289 9.80762 67.1289 9.5C67.1289 9.20117 67.2344 8.94629 67.4453 8.73535C67.6562 8.52441 67.9111 8.41895 68.21 8.41895C68.5176 8.41895 68.7725 8.52441 68.9746 8.73535C69.1855 8.94629 69.291 9.20117 69.291 9.5ZM77.5044 13.1123C77.2583 13.1123 76.9814 13.2222 76.6738 13.4419C76.375 13.6616 76.0718 13.9473 75.7642 14.2988C75.4565 14.6416 75.1577 15.0283 74.8677 15.459C74.5864 15.8896 74.3403 16.3159 74.1294 16.7378C74.103 17.5112 74.0767 18.355 74.0503 19.269C74.0327 20.1831 74.0239 21.1587 74.0239 22.1958C74.0239 22.3276 73.9624 22.4463 73.8394 22.5518C73.7251 22.6484 73.5889 22.7319 73.4307 22.8022C73.2725 22.8638 73.1099 22.9121 72.9429 22.9473C72.7759 22.9824 72.6396 23 72.5342 23C72.4023 23 72.2793 22.9604 72.165 22.8813C72.0508 22.8022 71.9937 22.6265 71.9937 22.354C71.9937 22.2222 72.0068 22.0596 72.0332 21.8662C72.0596 21.6641 72.0947 21.4487 72.1387 21.2202C72.1738 20.9917 72.2178 20.7588 72.2705 20.5215C72.3145 20.2754 72.3584 20.0469 72.4023 19.8359V13.3892C72.4023 13.2134 72.4067 13.0771 72.4155 12.9805C72.4155 12.875 72.4287 12.7959 72.4551 12.7432C72.5078 12.6201 72.6001 12.5234 72.7319 12.4531C72.8638 12.3828 73.0044 12.3301 73.1538 12.2949C73.3032 12.251 73.4482 12.2246 73.5889 12.2158C73.7295 12.207 73.8394 12.2026 73.9185 12.2026C74.0679 12.2026 74.1689 12.2422 74.2217 12.3213C74.2832 12.4004 74.314 12.541 74.314 12.7432C74.314 12.7168 74.292 12.9321 74.248 13.3892C74.2129 13.8462 74.1821 14.501 74.1558 15.3535C74.4194 14.9404 74.7051 14.5449 75.0127 14.167C75.3203 13.7891 75.6411 13.4551 75.9751 13.165C76.3091 12.875 76.6519 12.6421 77.0034 12.4663C77.3638 12.2905 77.7285 12.2026 78.0977 12.2026C78.7568 12.2026 79.2402 12.4136 79.5479 12.8354C79.8555 13.2485 80.0093 13.811 80.0093 14.5229C80.0093 14.9712 79.9785 15.4722 79.917 16.0259C79.8643 16.5708 79.7983 17.1289 79.7192 17.7002C79.6489 18.2627 79.583 18.8164 79.5215 19.3613C79.4688 19.8975 79.4424 20.3896 79.4424 20.8379C79.4424 21.418 79.6226 21.708 79.9829 21.708C80.0972 21.708 80.229 21.6509 80.3784 21.5366C80.5366 21.4136 80.73 21.1895 80.9585 20.8643C81.1958 20.5391 81.4771 20.0952 81.8022 19.5327C82.1274 18.9614 82.5142 18.2275 82.9624 17.3311L83.0942 17.0542L83.6348 17.4629L83.5029 17.7397C82.9756 18.7944 82.5054 19.6602 82.0923 20.3369C81.688 21.0137 81.3188 21.5498 80.9849 21.9453C80.6509 22.3408 80.3389 22.6177 80.0488 22.7759C79.7588 22.9253 79.4688 23 79.1787 23C78.9941 23 78.8096 22.9736 78.625 22.9209C78.4404 22.8682 78.2778 22.7759 78.1372 22.644C77.9966 22.5122 77.8823 22.3364 77.7944 22.1167C77.7065 21.8882 77.6626 21.5981 77.6626 21.2466C77.6626 20.7192 77.6978 20.126 77.7681 19.4668C77.8384 18.8076 77.9175 18.1484 78.0054 17.4893C78.0933 16.8301 78.1724 16.2104 78.2427 15.6304C78.313 15.0415 78.3481 14.5625 78.3481 14.1934C78.3481 13.8682 78.2778 13.6089 78.1372 13.4155C77.9966 13.2134 77.7856 13.1123 77.5044 13.1123Z"
              fill="#398AB9"
            />
            <path
              d="M19.8525 12.2026V9.76367C19.8525 8.70898 19.8833 7.75098 19.9448 6.88965C20.0151 6.01953 20.1646 5.21533 20.3931 4.47705C19.6987 4.37158 18.9868 4.24854 18.2573 4.10791C17.5278 3.9585 16.8115 3.81787 16.1084 3.68604C15.4141 3.5542 14.7505 3.44434 14.1177 3.35645C13.4937 3.25977 12.9312 3.21143 12.4302 3.21143C11.7534 3.21143 11.1909 3.26855 10.7427 3.38281C10.2944 3.48828 9.93408 3.6333 9.66162 3.81787C9.38916 4.00244 9.1958 4.21777 9.08154 4.46387C8.97607 4.70117 8.92334 4.95605 8.92334 5.22852C8.92334 5.50098 8.98486 5.75146 9.10791 5.97998C9.23975 6.2085 9.42432 6.41064 9.66162 6.58643C9.89893 6.75342 10.1802 6.88525 10.5054 6.98193C10.8394 7.07861 11.2085 7.12695 11.6128 7.12695C12.061 7.12695 12.4565 7.07861 12.7993 6.98193C13.1509 6.87646 13.4497 6.76221 13.6958 6.63916C13.9858 6.49854 14.2407 6.33594 14.4604 6.15137L14.7241 6.71826C14.4517 6.92041 14.1528 7.10059 13.8276 7.25879C13.5464 7.39941 13.2168 7.52686 12.8389 7.64111C12.4697 7.74658 12.061 7.79932 11.6128 7.79932C11.0239 7.79932 10.501 7.72021 10.0439 7.56201C9.5957 7.40381 9.21777 7.19287 8.91016 6.9292C8.60254 6.65674 8.36963 6.34033 8.21143 5.97998C8.05322 5.61963 7.97412 5.2373 7.97412 4.83301C7.97412 4.40234 8.04883 3.98486 8.19824 3.58057C8.33887 3.17627 8.58057 2.81592 8.92334 2.49951C9.25732 2.18311 9.70117 1.93262 10.2549 1.74805C10.8086 1.55469 11.4897 1.45801 12.2983 1.45801C13.0454 1.45801 13.7925 1.51953 14.5396 1.64258C15.2954 1.75684 16.0381 1.90186 16.7676 2.07764C17.5059 2.24463 18.2222 2.4292 18.9165 2.63135C19.6196 2.82471 20.292 3.00049 20.9336 3.15869C21.3115 2.46436 21.7817 1.91064 22.3442 1.49756C22.9067 1.07568 23.5176 0.864746 24.1768 0.864746C24.458 0.864746 24.7085 0.913086 24.9282 1.00977C25.1479 1.09766 25.3325 1.21631 25.4819 1.36572C25.6313 1.51514 25.7412 1.69092 25.8115 1.89307C25.8906 2.08643 25.9302 2.29297 25.9302 2.5127C25.9302 2.88184 25.8423 3.20264 25.6665 3.4751C25.4995 3.73877 25.2666 3.96289 24.9678 4.14746C24.6689 4.32324 24.3174 4.45508 23.9131 4.54297C23.5088 4.62207 23.0737 4.66162 22.6079 4.66162C22.5024 4.66162 22.3926 4.66162 22.2783 4.66162C22.1729 4.66162 22.0674 4.65283 21.9619 4.63525C21.8916 5.07471 21.8345 5.56689 21.7905 6.11182C21.7554 6.64795 21.7378 7.25439 21.7378 7.93115V12.2026H23.5044L23.2275 13.0068H21.7378V16.25C21.7378 16.9883 21.729 17.6343 21.7114 18.188C21.6938 18.7329 21.6455 19.2207 21.5664 19.6514C21.4873 20.0732 21.3687 20.4556 21.2104 20.7983C21.0522 21.1323 20.8325 21.4619 20.5513 21.7871C20.0679 22.3408 19.3955 22.7935 18.5342 23.145C17.6729 23.4966 16.627 23.6724 15.3965 23.6724C14.6406 23.6724 13.9199 23.5669 13.2344 23.356C12.5488 23.145 11.9468 22.8506 11.4282 22.4727C10.9097 22.0947 10.4966 21.6421 10.189 21.1147C9.88135 20.5874 9.72754 20.0029 9.72754 19.3613C9.72754 18.8867 9.80225 18.4604 9.95166 18.0825C10.1099 17.7046 10.312 17.3706 10.5581 17.0806C10.8042 16.7817 11.0723 16.5269 11.3623 16.3159C11.6611 16.105 11.9512 15.9292 12.2324 15.7886C12.5137 15.6479 12.7686 15.5381 12.9971 15.459C13.2256 15.3799 13.397 15.3271 13.5112 15.3008L13.7749 15.8413C13.5728 15.9468 13.3442 16.0918 13.0894 16.2764C12.8433 16.4521 12.6104 16.6807 12.3906 16.9619C12.1709 17.2344 11.9863 17.5684 11.8369 17.9639C11.6875 18.3594 11.6128 18.8252 11.6128 19.3613C11.6128 19.9326 11.7095 20.4468 11.9028 20.9038C12.0962 21.3521 12.3643 21.7344 12.707 22.0508C13.0586 22.3584 13.4717 22.5957 13.9463 22.7627C14.4297 22.9209 14.957 23 15.5283 23C16.1699 23 16.7544 22.9121 17.2817 22.7363C17.8179 22.5605 18.2749 22.2661 18.6528 21.853C19.0308 21.4399 19.3252 20.8906 19.5361 20.2051C19.7471 19.5195 19.8525 18.667 19.8525 17.6475V13.0068H17.2949L17.5586 12.2026H19.8525ZM24.1768 1.58984C23.7812 1.58984 23.4165 1.73486 23.0825 2.0249C22.7485 2.30615 22.4717 2.78955 22.252 3.4751C22.5244 3.51904 22.7881 3.5542 23.043 3.58057C23.2979 3.60693 23.5396 3.62012 23.7681 3.62012C24.0054 3.62012 24.2075 3.58936 24.3745 3.52783C24.5503 3.45752 24.6909 3.36963 24.7964 3.26416C24.9019 3.15869 24.981 3.04004 25.0337 2.9082C25.0864 2.77637 25.1128 2.64453 25.1128 2.5127C25.1128 2.25781 25.0249 2.04248 24.8491 1.8667C24.6733 1.68213 24.4492 1.58984 24.1768 1.58984Z"
              fill="#F2575D"
            />
          </svg>
        </Link>
      </div>
      <div className="flex-none">
        <div className="dropdown  dropdown-end">
          <div role="button" className="btn btn-ghost btn-circle">
            <Link href="/searchPage">
              <div className="indictor">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 21L15 15L21 21ZM17 10C17 10.9193 16.8189 11.8295 16.4672 12.6788C16.1154 13.5281 15.5998 14.2997 14.9497 14.9497C14.2997 15.5998 13.5281 16.1154 12.6788 16.4672C11.8295 16.8189 10.9193 17 10 17C9.08075 17 8.1705 16.8189 7.32122 16.4672C6.47194 16.1154 5.70026 15.5998 5.05025 14.9497C4.40024 14.2997 3.88463 13.5281 3.53284 12.6788C3.18106 11.8295 3 10.9193 3 10C3 8.14348 3.7375 6.36301 5.05025 5.05025C6.36301 3.7375 8.14348 3 10 3C11.8565 3 13.637 3.7375 14.9497 5.05025C16.2625 6.36301 17 8.14348 17 10Z"
                    stroke="#333333"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
        <div className="dropdown  dropdown-end">
          <div role="button" className="btn btn-ghost btn-circle">
            <Link href="/wishedPage">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M4.31804 6.31804C3.90017 6.7359 3.5687 7.23198 3.34255 7.77795C3.1164 8.32392 3 8.90909 3 9.50004C3 10.091 3.1164 10.6762 3.34255 11.2221C3.5687 11.7681 3.90017 12.2642 4.31804 12.682L12 20.364L19.682 12.682C20.526 11.8381 21.0001 10.6935 21.0001 9.50004C21.0001 8.30656 20.526 7.16196 19.682 6.31804C18.8381 5.47412 17.6935 5.00001 16.5 5.00001C15.3066 5.00001 14.162 5.47412 13.318 6.31804L12 7.63604L10.682 6.31804C10.2642 5.90017 9.7681 5.5687 9.22213 5.34255C8.67616 5.1164 8.09099 5 7.50004 5C6.90909 5 6.32392 5.1164 5.77795 5.34255C5.23198 5.5687 4.7359 5.90017 4.31804 6.31804V6.31804Z"
                    stroke="#333333"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {wishedData.length ? (
                  <span className="badge bg-[#F2575D] border-0 text-white badge-sm indicator-item">
                    {wishedData.length}
                  </span>
                ) : null}
              </div>
            </Link>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {cartData.length ? (
                <span className="badge bg-[#F2575D] border-0 text-white badge-sm indicator-item">
                  {totalItem}
                </span>
              ) : null}
            </div>
          </div>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content cart_dropdown w-52 bg-base-100 shadow"
          >
            <div className="card-body ">
              <span className="font-bold text-lg text-textC1">
                {totalItem} Items
              </span>
              <span className="text-red-900">
                Total Amount: ${totalAmount && totalAmount}
              </span>
              <div className="card-actions">
                <Link href="/cartPage">
                  <button className="my_button btn-block my-1">
                    View cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div role="button" className="btn btn-ghost btn-circle">
            <Link href="/login">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16 7C16 8.06087 15.5786 9.07828 14.8284 9.82843C14.0783 10.5786 13.0609 11 12 11C10.9391 11 9.92172 10.5786 9.17157 9.82843C8.42143 9.07828 8 8.06087 8 7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7V7ZM12 14C10.1435 14 8.36301 14.7375 7.05025 16.0503C5.7375 17.363 5 19.1435 5 21H19C19 19.1435 18.2625 17.363 16.9497 16.0503C15.637 14.7375 13.8565 14 12 14V14Z"
                    stroke="#333333"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default dynamic (() => Promise.resolve(Navbar), {ssr: false})

