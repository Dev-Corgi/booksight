"use client";

import { useSelector, useDispatch } from "react-redux";
import {
  setMapId,
  setMapName,
  setAddressName,
  setPrevMapId,
} from "@redux/mapSlice";
import BackArrowIcon from "@svg/BackArrowIcon.svg";
import Korea from "./Maps/Korea";
import Busan from "./Maps/Busan";
import Chungcheongbukdo from "./Maps/Chungcheongbukdo";
import Chungcheongnamdo from "./Maps/Chungcheongnamdo";
import Daegu from "./Maps/Daegu";
import Daejeon from "./Maps/Daejeon";
import Gangwondo from "./Maps/Gangwondo";
import Gwangju from "./Maps/Gwangju";
import Gyeonggido from "./Maps/Gyeonggido";
import Gyeongsangbukdo from "./Maps/Gyeongsangbukdo";
import Gyeongsangnamdo from "./Maps/Gyeongsangnamdo";
import Incheon from "./Maps/Incheon";
import Jeju from "./Maps/Jeju";
import Jeollabukdo from "./Maps/Jeollabukdo";
import Jeollanamdo from "./Maps/Jeollanamdo";
import Seoul from "./Maps/Seoul";
import Ulsan from "./Maps/Ulsan";
import Sejong from "./Maps/Sejong";
import Gangwondo_Cheorwon from "./Maps/Gangwondo_subs/Gangwondo_Cheorwon";
import Gangwondo_Hwacheon from "./Maps/Gangwondo_subs/Gangwondo_Hwacheon";
import Gangwondo_Chuncheon from "./Maps/Gangwondo_subs/Gangwondo_Chuncheon";
import Gangwondo_Hongcheon from "./Maps/Gangwondo_subs/Gangwondo_Hongcheon";
import Gangwondo_Hoengseong from "./Maps/Gangwondo_subs/Gangwondo_Hoengseong";
import Gangwondo_Inje from "./Maps/Gangwondo_subs/Gangwondo_Inje";
import Gangwondo_Goseong from "./Maps/Gangwondo_subs/Gangwondo_Goseong";
import Gangwondo_Sokcho from "./Maps/Gangwondo_subs/Gangwondo_Sokcho";
import Gangwondo_Gangneung from "./Maps/Gangwondo_subs/Gangwondo_Gangneung";
import Gangwondo_Jeongseon from "./Maps/Gangwondo_subs/Gangwondo_Jeongseon";
import Gangwondo_Yeongwol from "./Maps/Gangwondo_subs/Gangwondo_Yeongwol";
import Gangwondo_Taebaek from "./Maps/Gangwondo_subs/Gangwondo_Taebaek";
import Gangwondo_Samcheok from "./Maps/Gangwondo_subs/Gangwondo_Samcheok";
import Gangwondo_Wonju from "./Maps/Gangwondo_subs/Gangwondo_Wonju";
import Gangwondo_Yanggu from "./Maps/Gangwondo_subs/Gangwondo_Yanggu";
import Gangwondo_Pyeongchang from "./Maps/Gangwondo_subs/Gangwondo_Pyeongchang";
import Gangwondo_Yangyang from "./Maps/Gangwondo_subs/Gangwondo_Yangyang";
import Gangwondo_Donghae from "./Maps/Gangwondo_subs/Gangwondo_Donghae";

import Busan_Buk from "./Maps/Busan_subs/Busan_Buk";
import Busan_Busanjin from "./Maps/Busan_subs/Busan_Busanjin";
import Busan_Dong from "./Maps/Busan_subs/Busan_Dong";
import Busan_Dongrae from "./Maps/Busan_subs/Busan_Dongrae";
import Busan_Gangseo from "./Maps/Busan_subs/Busan_Gangseo";
import Busan_Geumjeong from "./Maps/Busan_subs/Busan_Geumjeong";
import Busan_Gijang from "./Maps/Busan_subs/Busan_Gijang";
import Busan_Haeundae from "./Maps/Busan_subs/Busan_Haeundae";
import Busan_Jung from "./Maps/Busan_subs/Busan_Jung";
import Busan_Nam from "./Maps/Busan_subs/Busan_Nam";
import Busan_Saha from "./Maps/Busan_subs/Busan_Saha";
import Busan_Sasang from "./Maps/Busan_subs/Busan_Sasang";
import Busan_Seo from "./Maps/Busan_subs/Busan_Seo";
import Busan_Suyeong from "./Maps/Busan_subs/Busan_Suyeong";
import Busan_Yeongdo from "./Maps/Busan_subs/Busan_Yeongdo";
import Busan_Yeonje from "./Maps/Busan_subs/Busan_Yeonje";

import Chungcheongbukdo_Boeun from "./Maps/Chungcheongbukdo_subs/Chungcheongbukdo_Boeun";
import Chungcheongbukdo_Cheongju from "./Maps/Chungcheongbukdo_subs/Chungcheongbukdo_Cheongju";
import Chungcheongbukdo_Chungju from "./Maps/Chungcheongbukdo_subs/Chungcheongbukdo_Chungju";
import Chungcheongbukdo_Danyang from "./Maps/Chungcheongbukdo_subs/Chungcheongbukdo_Danyang";
import Chungcheongbukdo_Eumseong from "./Maps/Chungcheongbukdo_subs/Chungcheongbukdo_Eumseong";
import Chungcheongbukdo_Goesan from "./Maps/Chungcheongbukdo_subs/Chungcheongbukdo_Goesan";
import Chungcheongbukdo_Jecheon from "./Maps/Chungcheongbukdo_subs/Chungcheongbukdo_Jecheon";
import Chungcheongbukdo_Jeungpyeong from "./Maps/Chungcheongbukdo_subs/Chungcheongbukdo_Jeungpyeong";
import Chungcheongbukdo_Jincheon from "./Maps/Chungcheongbukdo_subs/Chungcheongbukdo_Jincheon";
import Chungcheongbukdo_Okcheon from "./Maps/Chungcheongbukdo_subs/Chungcheongbukdo_Okcheon";
import Chungcheongbukdo_Yeongdong from "./Maps/Chungcheongbukdo_subs/Chungcheongbukdo_Yeongdong";

import Chungcheongnamdo_Asan from "./Maps/Chungcheongnamdo_subs/Chungcheongnamdo_Asan";
import Chungcheongnamdo_Boryeong from "./Maps/Chungcheongnamdo_subs/Chungcheongnamdo_Boryeong";
import Chungcheongnamdo_Buyeo from "./Maps/Chungcheongnamdo_subs/Chungcheongnamdo_Buyeo";
import Chungcheongnamdo_Cheonan from "./Maps/Chungcheongnamdo_subs/Chungcheongnamdo_Cheonan";
import Chungcheongnamdo_Cheongyang from "./Maps/Chungcheongnamdo_subs/Chungcheongnamdo_Cheongyang";
import Chungcheongnamdo_Dangjin from "./Maps/Chungcheongnamdo_subs/Chungcheongnamdo_Dangjin";
import Chungcheongnamdo_Geumsan from "./Maps/Chungcheongnamdo_subs/Chungcheongnamdo_Geumsan";
import Chungcheongnamdo_Gongju from "./Maps/Chungcheongnamdo_subs/Chungcheongnamdo_Gongju";
import Chungcheongnamdo_Gyeryong from "./Maps/Chungcheongnamdo_subs/Chungcheongnamdo_Gyeryong";
import Chungcheongnamdo_Hongseong from "./Maps/Chungcheongnamdo_subs/Chungcheongnamdo_Hongseong";
import Chungcheongnamdo_Nonsan from "./Maps/Chungcheongnamdo_subs/Chungcheongnamdo_Nonsan";
import Chungcheongnamdo_Seocheon from "./Maps/Chungcheongnamdo_subs/Chungcheongnamdo_Seocheon";
import Chungcheongnamdo_Seosan from "./Maps/Chungcheongnamdo_subs/Chungcheongnamdo_Seosan";
import Chungcheongnamdo_Taean from "./Maps/Chungcheongnamdo_subs/Chungcheongnamdo_Taean";
import Chungcheongnamdo_Yesan from "./Maps/Chungcheongnamdo_subs/Chungcheongnamdo_Yesan";

import Daegu_Buk from "./Maps/Daegu_subs/Daegu_Buk";
import Daegu_Dalseo from "./Maps/Daegu_subs/Daegu_Dalseo";
import Daegu_Dalseong from "./Maps/Daegu_subs/Daegu_Dalseong";
import Daegu_Dong from "./Maps/Daegu_subs/Daegu_Dong";
import Daegu_Gunwi from "./Maps/Daegu_subs/Daegu_Gunwi";
import Daegu_Jung from "./Maps/Daegu_subs/Daegu_Jung";
import Daegu_Nam from "./Maps/Daegu_subs/Daegu_Nam";
import Daegu_Seo from "./Maps/Daegu_subs/Daegu_Seo";
import Daegu_Suseong from "./Maps/Daegu_subs/Daegu_Suseong";

import Daejeon_Daedeok from "./Maps/Daejeon_subs/Daejeon_Daedeok";
import Daejeon_Dong from "./Maps/Daejeon_subs/Daejeon_Dong";
import Daejeon_Jung from "./Maps/Daejeon_subs/Daejeon_Jung";
import Daejeon_Seo from "./Maps/Daejeon_subs/Daejeon_Seo";
import Daejeon_Yuseong from "./Maps/Daejeon_subs/Daejeon_Yuseong";

import Gwangju_Buk from "./Maps/Gwangju_subs/Gwangju_Buk";
import Gwangju_Dong from "./Maps/Gwangju_subs/Gwangju_Dong";
import Gwangju_Gwangsan from "./Maps/Gwangju_subs/Gwangju_Gwangsan";
import Gwangju_Nam from "./Maps/Gwangju_subs/Gwangju_Nam";
import Gwangju_Seo from "./Maps/Gwangju_subs/Gwangju_Seo";

import Gyeonggido_Ansan from "./Maps/Gyeonggido_subs/Gyeonggido_Ansan";
import Gyeonggido_Anseong from "./Maps/Gyeonggido_subs/Gyeonggido_Anseong";
import Gyeonggido_Anyang from "./Maps/Gyeonggido_subs/Gyeonggido_Anyang";
import Gyeonggido_Bucheon from "./Maps/Gyeonggido_subs/Gyeonggido_Bucheon";
import Gyeonggido_Dongducheon from "./Maps/Gyeonggido_subs/Gyeonggido_Dongducheon";
import Gyeonggido_Gapyeong from "./Maps/Gyeonggido_subs/Gyeonggido_Gapyeong";
import Gyeonggido_Gimpo from "./Maps/Gyeonggido_subs/Gyeonggido_Gimpo";
import Gyeonggido_Goyang from "./Maps/Gyeonggido_subs/Gyeonggido_Goyang";
import Gyeonggido_Gunpo from "./Maps/Gyeonggido_subs/Gyeonggido_Gunpo";
import Gyeonggido_Guri from "./Maps/Gyeonggido_subs/Gyeonggido_Guri";
import Gyeonggido_Gwacheon from "./Maps/Gyeonggido_subs/Gyeonggido_Gwacheon";
import Gyeonggido_Gwangju from "./Maps/Gyeonggido_subs/Gyeonggido_Gwangju";
import Gyeonggido_Gwangmyeong from "./Maps/Gyeonggido_subs/Gyeonggido_Gwangmyeong";
import Gyeonggido_Hanam from "./Maps/Gyeonggido_subs/Gyeonggido_Hanam";
import Gyeonggido_Hwaseong from "./Maps/Gyeonggido_subs/Gyeonggido_Hwaseong";
import Gyeonggido_Icheon from "./Maps/Gyeonggido_subs/Gyeonggido_Icheon";
import Gyeonggido_Namyangju from "./Maps/Gyeonggido_subs/Gyeonggido_Namyangju";
import Gyeonggido_Osan from "./Maps/Gyeonggido_subs/Gyeonggido_Osan";
import Gyeonggido_Paju from "./Maps/Gyeonggido_subs/Gyeonggido_Paju";
import Gyeonggido_Pocheon from "./Maps/Gyeonggido_subs/Gyeonggido_Pocheon";
import Gyeonggido_Pyeongtaek from "./Maps/Gyeonggido_subs/Gyeonggido_Pyeongtaek";
import Gyeonggido_Seongnam from "./Maps/Gyeonggido_subs/Gyeonggido_Seongnam";
import Gyeonggido_Siheung from "./Maps/Gyeonggido_subs/Gyeonggido_Siheung";
import Gyeonggido_Suwon from "./Maps/Gyeonggido_subs/Gyeonggido_Suwon";
import Gyeonggido_Uijeongbu from "./Maps/Gyeonggido_subs/Gyeonggido_Uijeongbu";
import Gyeonggido_Uiwang from "./Maps/Gyeonggido_subs/Gyeonggido_Uiwang";
import Gyeonggido_Yangju from "./Maps/Gyeonggido_subs/Gyeonggido_Yangju";
import Gyeonggido_Yangpyeong from "./Maps/Gyeonggido_subs/Gyeonggido_Yangpyeong";
import Gyeonggido_Yeoju from "./Maps/Gyeonggido_subs/Gyeonggido_Yeoju";
import Gyeonggido_Yeoncheon from "./Maps/Gyeonggido_subs/Gyeonggido_Yeoncheon";
import Gyeonggido_Yongin from "./Maps/Gyeonggido_subs/Gyeonggido_Yongin";

import Gyeongsangbukdo_Andong from "./Maps/Gyeongsangbukdo_subs/Gyeongsangbukdo_Andong";
import Gyeongsangbukdo_Bonghwa from "./Maps/Gyeongsangbukdo_subs/Gyeongsangbukdo_Bonghwa";
import Gyeongsangbukdo_Cheongdo from "./Maps/Gyeongsangbukdo_subs/Gyeongsangbukdo_Cheongdo";
import Gyeongsangbukdo_Cheongsong from "./Maps/Gyeongsangbukdo_subs/Gyeongsangbukdo_Cheongsong";
import Gyeongsangbukdo_Chilgok from "./Maps/Gyeongsangbukdo_subs/Gyeongsangbukdo_Chilgok";
import Gyeongsangbukdo_Gimcheon from "./Maps/Gyeongsangbukdo_subs/Gyeongsangbukdo_Gimcheon";
import Gyeongsangbukdo_Goryeong from "./Maps/Gyeongsangbukdo_subs/Gyeongsangbukdo_Goryeong";
import Gyeongsangbukdo_Gumi from "./Maps/Gyeongsangbukdo_subs/Gyeongsangbukdo_Gumi";
import Gyeongsangbukdo_Gyeongju from "./Maps/Gyeongsangbukdo_subs/Gyeongsangbukdo_Gyeongju";
import Gyeongsangbukdo_Gyeongsan from "./Maps/Gyeongsangbukdo_subs/Gyeongsangbukdo_Gyeongsan";
import Gyeongsangbukdo_Mungyeong from "./Maps/Gyeongsangbukdo_subs/Gyeongsangbukdo_Mungyeong";
import Gyeongsangbukdo_Pohang from "./Maps/Gyeongsangbukdo_subs/Gyeongsangbukdo_Pohang";
import Gyeongsangbukdo_Sangju from "./Maps/Gyeongsangbukdo_subs/Gyeongsangbukdo_Sangju";
import Gyeongsangbukdo_Seongju from "./Maps/Gyeongsangbukdo_subs/Gyeongsangbukdo_Seongju";
import Gyeongsangbukdo_Uiseong from "./Maps/Gyeongsangbukdo_subs/Gyeongsangbukdo_Uiseong";
import Gyeongsangbukdo_Uljin from "./Maps/Gyeongsangbukdo_subs/Gyeongsangbukdo_Uljin";
import Gyeongsangbukdo_Ulleung from "./Maps/Gyeongsangbukdo_subs/Gyeongsangbukdo_Ulleung";
import Gyeongsangbukdo_Yecheon from "./Maps/Gyeongsangbukdo_subs/Gyeongsangbukdo_Yecheon";
import Gyeongsangbukdo_Yeongcheon from "./Maps/Gyeongsangbukdo_subs/Gyeongsangbukdo_Yeongcheon";
import Gyeongsangbukdo_Yeongdeok from "./Maps/Gyeongsangbukdo_subs/Gyeongsangbukdo_Yeongdeok";
import Gyeongsangbukdo_Yeongju from "./Maps/Gyeongsangbukdo_subs/Gyeongsangbukdo_Yeongju";
import Gyeongsangbukdo_Yeongyang from "./Maps/Gyeongsangbukdo_subs/Gyeongsangbukdo_Yeongyang";

import Gyeongsangnamdo_Changnyeong from "./Maps/Gyeongsangnamdo_subs/Gyeongsangnamdo_Changnyeong";
import Gyeongsangnamdo_Changwon from "./Maps/Gyeongsangnamdo_subs/Gyeongsangnamdo_Changwon";
import Gyeongsangnamdo_Geochang from "./Maps/Gyeongsangnamdo_subs/Gyeongsangnamdo_Geochang";
import Gyeongsangnamdo_Geoje from "./Maps/Gyeongsangnamdo_subs/Gyeongsangnamdo_Geoje";
import Gyeongsangnamdo_Gimhae from "./Maps/Gyeongsangnamdo_subs/Gyeongsangnamdo_Gimhae";
import Gyeongsangnamdo_Goseong from "./Maps/Gyeongsangnamdo_subs/Gyeongsangnamdo_Goseong";
import Gyeongsangnamdo_Hadong from "./Maps/Gyeongsangnamdo_subs/Gyeongsangnamdo_Hadong";
import Gyeongsangnamdo_Haman from "./Maps/Gyeongsangnamdo_subs/Gyeongsangnamdo_Haman";
import Gyeongsangnamdo_Hamyang from "./Maps/Gyeongsangnamdo_subs/Gyeongsangnamdo_Hamyang";
import Gyeongsangnamdo_Hapcheon from "./Maps/Gyeongsangnamdo_subs/Gyeongsangnamdo_Hapcheon";
import Gyeongsangnamdo_Jinju from "./Maps/Gyeongsangnamdo_subs/Gyeongsangnamdo_Jinju";
import Gyeongsangnamdo_Miryang from "./Maps/Gyeongsangnamdo_subs/Gyeongsangnamdo_Miryang";
import Gyeongsangnamdo_Namhae from "./Maps/Gyeongsangnamdo_subs/Gyeongsangnamdo_Namhae";
import Gyeongsangnamdo_Sacheon from "./Maps/Gyeongsangnamdo_subs/Gyeongsangnamdo_Sacheon";
import Gyeongsangnamdo_Sancheong from "./Maps/Gyeongsangnamdo_subs/Gyeongsangnamdo_Sancheong";
import Gyeongsangnamdo_Tongyeong from "./Maps/Gyeongsangnamdo_subs/Gyeongsangnamdo_Tongyeong";
import Gyeongsangnamdo_Uiryeong from "./Maps/Gyeongsangnamdo_subs/Gyeongsangnamdo_Uiryeong";
import Gyeongsangnamdo_Yangsan from "./Maps/Gyeongsangnamdo_subs/Gyeongsangnamdo_Yangsan";

import Incheon_Bupyeong from "./Maps/Incheon_subs/Incheon_Bupyeong";
import Incheon_Dong from "./Maps/Incheon_subs/Incheon_Dong";
import Incheon_Ganghwa from "./Maps/Incheon_subs/Incheon_Ganghwa";
import Incheon_Gyeyang from "./Maps/Incheon_subs/Incheon_Gyeyang";
import Incheon_Jung from "./Maps/Incheon_subs/Incheon_Jung";
import Incheon_Michuhol from "./Maps/Incheon_subs/Incheon_Michuhol";
import Incheon_Namdong from "./Maps/Incheon_subs/Incheon_Namdong";
import Incheon_Ongjin from "./Maps/Incheon_subs/Incheon_Ongjin";
import Incheon_Seo from "./Maps/Incheon_subs/Incheon_Seo";
import Incheon_Yeonsu from "./Maps/Incheon_subs/Incheon_Yeonsu";

import Jeju_Jeju from "./Maps/Jeju_subs/Jeju_Jeju";
import Jeju_Seogwipo from "./Maps/Jeju_subs/Jeju_Seogwipo";

import Jeollabukdo_Buan from "./Maps/Jeollabukdo_subs/Jeollabukdo_Buan";
import Jeollabukdo_Gimje from "./Maps/Jeollabukdo_subs/Jeollabukdo_Gimje";
import Jeollabukdo_Gochang from "./Maps/Jeollabukdo_subs/Jeollabukdo_Gochang";
import Jeollabukdo_Gunsan from "./Maps/Jeollabukdo_subs/Jeollabukdo_Gunsan";
import Jeollabukdo_Iksan from "./Maps/Jeollabukdo_subs/Jeollabukdo_Iksan";
import Jeollabukdo_Imsil from "./Maps/Jeollabukdo_subs/Jeollabukdo_Imsil";
import Jeollabukdo_Jangsu from "./Maps/Jeollabukdo_subs/Jeollabukdo_Jangsu";
import Jeollabukdo_Jeonan from "./Maps/Jeollabukdo_subs/Jeollabukdo_Jeonan";
import Jeollabukdo_Jeongeup from "./Maps/Jeollabukdo_subs/Jeollabukdo_Jeongeup";
import Jeollabukdo_Jeonju from "./Maps/Jeollabukdo_subs/Jeollabukdo_Jeonju";
import Jeollabukdo_Muju from "./Maps/Jeollabukdo_subs/Jeollabukdo_Muju";
import Jeollabukdo_Namwon from "./Maps/Jeollabukdo_subs/Jeollabukdo_Namwon";
import Jeollabukdo_Sunchang from "./Maps/Jeollabukdo_subs/Jeollabukdo_Sunchang";
import Jeollabukdo_Wanju from "./Maps/Jeollabukdo_subs/Jeollabukdo_Wanju";

import Jeollanamdo_Boseong from "./Maps/Jeollanamdo_subs/Jeollanamdo_Boseong";
import Jeollanamdo_Damyang from "./Maps/Jeollanamdo_subs/Jeollanamdo_Damyang";
import Jeollanamdo_Gangjin from "./Maps/Jeollanamdo_subs/Jeollanamdo_Gangjin";
import Jeollanamdo_Goheung from "./Maps/Jeollanamdo_subs/Jeollanamdo_Goheung";
import Jeollanamdo_Gokseong from "./Maps/Jeollanamdo_subs/Jeollanamdo_Gokseong";
import Jeollanamdo_Gurye from "./Maps/Jeollanamdo_subs/Jeollanamdo_Gurye";
import Jeollanamdo_Gwangyang from "./Maps/Jeollanamdo_subs/Jeollanamdo_Gwangyang";
import Jeollanamdo_Haenam from "./Maps/Jeollanamdo_subs/Jeollanamdo_Haenam";
import Jeollanamdo_Hampyeong from "./Maps/Jeollanamdo_subs/Jeollanamdo_Hampyeong";
import Jeollanamdo_Hwasun from "./Maps/Jeollanamdo_subs/Jeollanamdo_Hwasun";
import Jeollanamdo_Jangheung from "./Maps/Jeollanamdo_subs/Jeollanamdo_Jangheung";
import Jeollanamdo_Jangseong from "./Maps/Jeollanamdo_subs/Jeollanamdo_Jangseong";
import Jeollanamdo_Jindo from "./Maps/Jeollanamdo_subs/Jeollanamdo_Jindo";
import Jeollanamdo_Muan from "./Maps/Jeollanamdo_subs/Jeollanamdo_Muan";
import Jeollanamdo_Naju from "./Maps/Jeollanamdo_subs/Jeollanamdo_Naju";
import Jeollanamdo_Sinan from "./Maps/Jeollanamdo_subs/Jeollanamdo_Sinan";
import Jeollanamdo_Suncheon from "./Maps/Jeollanamdo_subs/Jeollanamdo_Suncheon";
import Jeollanamdo_Wando from "./Maps/Jeollanamdo_subs/Jeollanamdo_Wando";
import Jeollanamdo_Yeongam from "./Maps/Jeollanamdo_subs/Jeollanamdo_Yeongam";
import Jeollanamdo_Yeonggwang from "./Maps/Jeollanamdo_subs/Jeollanamdo_Yeonggwang";
import Jeollanamdo_Yeosu from "./Maps/Jeollanamdo_subs/Jeollanamdo_Yeosu";

import Seoul_Dobong from "./Maps/Seoul_subs/Seoul_Dobong";
import Seoul_Dongdaemun from "./Maps/Seoul_subs/Seoul_Dongdaemun";
import Seoul_Dongjak from "./Maps/Seoul_subs/Seoul_Dongjak";
import Seoul_Eunpyeong from "./Maps/Seoul_subs/Seoul_Eunpyeong";
import Seoul_Gangbuk from "./Maps/Seoul_subs/Seoul_Gangbuk";
import Seoul_Gangdong from "./Maps/Seoul_subs/Seoul_Gangdong";
import Seoul_Gangnam from "./Maps/Seoul_subs/Seoul_Gangnam";
import Seoul_Gangseo from "./Maps/Seoul_subs/Seoul_Gangseo";
import Seoul_Geumcheon from "./Maps/Seoul_subs/Seoul_Geumcheon";
import Seoul_Guro from "./Maps/Seoul_subs/Seoul_Guro";
import Seoul_Gwanak from "./Maps/Seoul_subs/Seoul_Gwanak";
import Seoul_Gwangjin from "./Maps/Seoul_subs/Seoul_Gwangjin";
import Seoul_Jongno from "./Maps/Seoul_subs/Seoul_Jongno";
import Seoul_Jung from "./Maps/Seoul_subs/Seoul_Jung";
import Seoul_Jungnang from "./Maps/Seoul_subs/Seoul_Jungnang";
import Seoul_Mapo from "./Maps/Seoul_subs/Seoul_Mapo";
import Seoul_Nowon from "./Maps/Seoul_subs/Seoul_Nowon";
import Seoul_Seocho from "./Maps/Seoul_subs/Seoul_Seocho";
import Seoul_Seodaemun from "./Maps/Seoul_subs/Seoul_Seodaemun";
import Seoul_Seongbuk from "./Maps/Seoul_subs/Seoul_Seongbuk";
import Seoul_Seongdong from "./Maps/Seoul_subs/Seoul_Seongdong";
import Seoul_Songpa from "./Maps/Seoul_subs/Seoul_Songpa";
import Seoul_Yangcheon from "./Maps/Seoul_subs/Seoul_Yangcheon";
import Seoul_Yeongdeungpo from "./Maps/Seoul_subs/Seoul_Yeongdeungpo";
import Seoul_Yongsan from "./Maps/Seoul_subs/Seoul_Yongsan";

import Ulsan_Buk from "./Maps/Ulsan_subs/Ulsan_Buk";
import Ulsan_Dong from "./Maps/Ulsan_subs/Ulsan_Dong";
import Ulsan_Jung from "./Maps/Ulsan_subs/Ulsan_Jung";
import Ulsan_Nam from "./Maps/Ulsan_subs/Ulsan_Nam";
import Ulsan_Ulju from "./Maps/Ulsan_subs/Ulsan_Ulju";

export default function MapBrowser() {
  const { mapId, mapName, prevMapId, addressName } = useSelector(
    (state) => state.map
  );
  const dispatch = useDispatch();

  const Maps = {
    10: <Korea></Korea>,
    11: <Seoul></Seoul>,
    21: <Busan></Busan>,
    22: <Daegu></Daegu>,
    23: <Incheon></Incheon>,
    24: <Gwangju></Gwangju>,
    25: <Daejeon></Daejeon>,
    26: <Ulsan></Ulsan>,
    29: <Sejong></Sejong>,
    31: <Gyeonggido></Gyeonggido>,
    32: <Gangwondo></Gangwondo>,
    33: <Chungcheongbukdo></Chungcheongbukdo>,
    34: <Chungcheongnamdo></Chungcheongnamdo>,
    35: <Jeollabukdo></Jeollabukdo>,
    36: <Jeollanamdo></Jeollanamdo>,
    37: <Gyeongsangbukdo></Gyeongsangbukdo>,
    38: <Gyeongsangnamdo></Gyeongsangnamdo>,
    39: <Jeju></Jeju>,

    //GangWon
    32360: <Gangwondo_Cheorwon />,
    32370: <Gangwondo_Hwacheon />,
    32010: <Gangwondo_Chuncheon />,
    32310: <Gangwondo_Hongcheon />,
    32320: <Gangwondo_Hoengseong />,
    32390: <Gangwondo_Inje />,
    32400: <Gangwondo_Goseong />,
    32060: <Gangwondo_Sokcho />,
    32030: <Gangwondo_Gangneung />,
    32350: <Gangwondo_Jeongseon />,
    32330: <Gangwondo_Yeongwol />,
    32050: <Gangwondo_Taebaek />,
    32070: <Gangwondo_Samcheok />,
    32020: <Gangwondo_Wonju />,
    32380: <Gangwondo_Yanggu />,
    32340: <Gangwondo_Pyeongchang />,
    32410: <Gangwondo_Yangyang />,
    32040: <Gangwondo_Donghae />,

    //Busan
    21080: <Busan_Buk />,
    21050: <Busan_Busanjin />,
    21030: <Busan_Dong />,
    21060: <Busan_Dongrae />,
    21120: <Busan_Gangseo />,
    21110: <Busan_Geumjeong />,
    21310: <Busan_Gijang />,
    21090: <Busan_Haeundae />,
    21010: <Busan_Jung />,
    21070: <Busan_Nam />,
    21100: <Busan_Saha />,
    21150: <Busan_Sasang />,
    21020: <Busan_Seo />,
    21140: <Busan_Suyeong />,
    21040: <Busan_Yeongdo />,
    21130: <Busan_Yeonje />,

    //Chungcheongbukdo
    33320: <Chungcheongbukdo_Boeun />,
    33040: <Chungcheongbukdo_Cheongju />,
    33020: <Chungcheongbukdo_Chungju />,
    33380: <Chungcheongbukdo_Danyang />,
    33370: <Chungcheongbukdo_Eumseong />,
    33360: <Chungcheongbukdo_Goesan />,
    33030: <Chungcheongbukdo_Jecheon />,
    33390: <Chungcheongbukdo_Jeungpyeong />,
    33350: <Chungcheongbukdo_Jincheon />,
    33330: <Chungcheongbukdo_Okcheon />,
    33340: <Chungcheongbukdo_Yeongdong />,

    //Chungcheongnamdo
    34040: <Chungcheongnamdo_Asan />,
    34030: <Chungcheongnamdo_Boryeong />,
    34330: <Chungcheongnamdo_Buyeo />,
    34010: <Chungcheongnamdo_Cheonan />,
    34350: <Chungcheongnamdo_Cheongyang />,
    34080: <Chungcheongnamdo_Dangjin />,
    34310: <Chungcheongnamdo_Geumsan />,
    34020: <Chungcheongnamdo_Gongju />,
    34070: <Chungcheongnamdo_Gyeryong />,
    34360: <Chungcheongnamdo_Hongseong />,
    34060: <Chungcheongnamdo_Nonsan />,
    34340: <Chungcheongnamdo_Seocheon />,
    34050: <Chungcheongnamdo_Seosan />,
    34380: <Chungcheongnamdo_Taean />,
    34370: <Chungcheongnamdo_Yesan />,

    //Daegu
    22050: <Daegu_Buk />,
    22070: <Daegu_Dalseo />,
    22310: <Daegu_Dalseong />,
    22020: <Daegu_Dong />,
    37310: <Daegu_Gunwi />,
    22010: <Daegu_Jung />,
    22040: <Daegu_Nam />,
    22030: <Daegu_Seo />,
    22060: <Daegu_Suseong />,

    //Daegu
    25050: <Daejeon_Daedeok />,
    25010: <Daejeon_Dong />,
    25020: <Daejeon_Jung />,
    25030: <Daejeon_Seo />,
    25040: <Daejeon_Yuseong />,

    //Daegu
    24040: <Gwangju_Buk />,
    24010: <Gwangju_Dong />,
    24050: <Gwangju_Gwangsan />,
    24030: <Gwangju_Nam />,
    24020: <Gwangju_Seo />,

    //Gyeonggido
    31090: <Gyeonggido_Ansan />,
    31220: <Gyeonggido_Anseong />,
    31040: <Gyeonggido_Anyang />,
    31050: <Gyeonggido_Bucheon />,
    31080: <Gyeonggido_Dongducheon />,
    31370: <Gyeonggido_Gapyeong />,
    31230: <Gyeonggido_Gimpo />,
    31100: <Gyeonggido_Goyang />,
    31160: <Gyeonggido_Gunpo />,
    31120: <Gyeonggido_Guri />,
    31110: <Gyeonggido_Gwacheon />,
    31250: <Gyeonggido_Gwangju />,
    31060: <Gyeonggido_Gwangmyeong />,
    31180: <Gyeonggido_Hanam />,
    31240: <Gyeonggido_Hwaseong />,
    31210: <Gyeonggido_Icheon />,
    31130: <Gyeonggido_Namyangju />,
    31140: <Gyeonggido_Osan />,
    31200: <Gyeonggido_Paju />,
    31270: <Gyeonggido_Pocheon />,
    31070: <Gyeonggido_Pyeongtaek />,
    31020: <Gyeonggido_Seongnam />,
    31150: <Gyeonggido_Siheung />,
    31010: <Gyeonggido_Suwon />,
    31030: <Gyeonggido_Uijeongbu />,
    31170: <Gyeonggido_Uiwang />,
    31260: <Gyeonggido_Yangju />,
    31380: <Gyeonggido_Yangpyeong />,
    31280: <Gyeonggido_Yeoju />,
    31350: <Gyeonggido_Yeoncheon />,
    31190: <Gyeonggido_Yongin />,

    //Gyeongsangbukdo
    37040: <Gyeongsangbukdo_Andong />,
    37410: <Gyeongsangbukdo_Bonghwa />,
    37360: <Gyeongsangbukdo_Cheongdo />,
    37330: <Gyeongsangbukdo_Cheongsong />,
    37390: <Gyeongsangbukdo_Chilgok />,
    37030: <Gyeongsangbukdo_Gimcheon />,
    37370: <Gyeongsangbukdo_Goryeong />,
    37050: <Gyeongsangbukdo_Gumi />,
    37020: <Gyeongsangbukdo_Gyeongju />,
    37100: <Gyeongsangbukdo_Gyeongsan />,
    37090: <Gyeongsangbukdo_Mungyeong />,
    37010: <Gyeongsangbukdo_Pohang />,
    37080: <Gyeongsangbukdo_Sangju />,
    37380: <Gyeongsangbukdo_Seongju />,
    37320: <Gyeongsangbukdo_Uiseong />,
    37420: <Gyeongsangbukdo_Uljin />,
    37430: <Gyeongsangbukdo_Ulleung />,
    37400: <Gyeongsangbukdo_Yecheon />,
    37070: <Gyeongsangbukdo_Yeongcheon />,
    37350: <Gyeongsangbukdo_Yeongdeok />,
    37060: <Gyeongsangbukdo_Yeongju />,
    37340: <Gyeongsangbukdo_Yeongyang />,

    //Gyeongsangnamdo
    38330: <Gyeongsangnamdo_Changnyeong />,
    38330: <Gyeongsangnamdo_Changwon />,
    38390: <Gyeongsangnamdo_Geochang />,
    38090: <Gyeongsangnamdo_Geoje />,
    38070: <Gyeongsangnamdo_Gimhae />,
    38340: <Gyeongsangnamdo_Goseong />,
    38360: <Gyeongsangnamdo_Hadong />,
    38320: <Gyeongsangnamdo_Haman />,
    38380: <Gyeongsangnamdo_Hamyang />,
    38400: <Gyeongsangnamdo_Hapcheon />,
    38030: <Gyeongsangnamdo_Jinju />,
    38080: <Gyeongsangnamdo_Miryang />,
    38350: <Gyeongsangnamdo_Namhae />,
    38370: <Gyeongsangnamdo_Sacheon />,
    38370: <Gyeongsangnamdo_Sancheong />,
    38050: <Gyeongsangnamdo_Tongyeong />,
    38310: <Gyeongsangnamdo_Uiryeong />,
    38100: <Gyeongsangnamdo_Yangsan />,

    //Incheon
    23060: <Incheon_Bupyeong />,
    23020: <Incheon_Dong />,
    23310: <Incheon_Ganghwa />,
    23070: <Incheon_Gyeyang />,
    23010: <Incheon_Jung />,
    23030: <Incheon_Michuhol />,
    23050: <Incheon_Namdong />,
    23320: <Incheon_Ongjin />,
    23080: <Incheon_Seo />,
    23040: <Incheon_Yeonsu />,

    //Jeju
    39010: <Jeju_Jeju />,
    39020: <Jeju_Seogwipo />,

    //Jeollabukdo
    35380: <Jeollabukdo_Buan />,
    35060: <Jeollabukdo_Gimje />,
    35370: <Jeollabukdo_Gochang />,
    35020: <Jeollabukdo_Gunsan />,
    35030: <Jeollabukdo_Iksan />,
    35350: <Jeollabukdo_Imsil />,
    35340: <Jeollabukdo_Jangsu />,
    35320: <Jeollabukdo_Jeonan />,
    35040: <Jeollabukdo_Jeongeup />,
    35010: <Jeollabukdo_Jeonju />,
    35330: <Jeollabukdo_Muju />,
    35050: <Jeollabukdo_Namwon />,
    35360: <Jeollabukdo_Sunchang />,
    35310: <Jeollabukdo_Wanju />,

    //Jeollanamdo
    36360: <Jeollanamdo_Boseong />,
    36310: <Jeollanamdo_Damyang />,
    36390: <Jeollanamdo_Gangjin />,
    36350: <Jeollanamdo_Goheung />,
    36320: <Jeollanamdo_Gokseong />,
    36330: <Jeollanamdo_Gurye />,
    36060: <Jeollanamdo_Gwangyang />,
    36400: <Jeollanamdo_Haenam />,
    36430: <Jeollanamdo_Hampyeong />,
    36370: <Jeollanamdo_Hwasun />,
    36380: <Jeollanamdo_Jangheung />,
    36450: <Jeollanamdo_Jangseong />,
    36470: <Jeollanamdo_Jindo />,
    36420: <Jeollanamdo_Muan />,
    36040: <Jeollanamdo_Naju />,
    36480: <Jeollanamdo_Sinan />,
    36030: <Jeollanamdo_Suncheon />,
    36460: <Jeollanamdo_Wando />,
    36410: <Jeollanamdo_Yeongam />,
    36440: <Jeollanamdo_Yeonggwang />,
    36020: <Jeollanamdo_Yeosu />,

    //Seoul
    11100: <Seoul_Dobong />,
    11060: <Seoul_Dongdaemun />,
    11200: <Seoul_Dongjak />,
    11120: <Seoul_Eunpyeong />,
    11090: <Seoul_Gangbuk />,
    11250: <Seoul_Gangdong />,
    11230: <Seoul_Gangnam />,
    11160: <Seoul_Gangseo />,
    11180: <Seoul_Geumcheon />,
    11170: <Seoul_Guro />,
    11210: <Seoul_Gwanak />,
    11050: <Seoul_Gwangjin />,
    11010: <Seoul_Jongno />,
    21010: <Seoul_Jung />,
    11070: <Seoul_Jungnang />,
    11140: <Seoul_Mapo />,
    11110: <Seoul_Nowon />,
    11220: <Seoul_Seocho />,
    11130: <Seoul_Seodaemun />,
    11080: <Seoul_Seongbuk />,
    11040: <Seoul_Seongdong />,
    11240: <Seoul_Songpa />,
    11150: <Seoul_Yangcheon />,
    11190: <Seoul_Yeongdeungpo />,
    11030: <Seoul_Yongsan />,

    //Ulsan
    26040: <Ulsan_Buk />,
    26030: <Ulsan_Dong />,
    26010: <Ulsan_Jung />,
    26020: <Ulsan_Nam />,
    26310: <Ulsan_Ulju />,
  };

  const handleBackClick = () => {
    dispatch(setMapId(prevMapId));
  };

  return (
    <div className="relative flex flex-col items-center ml-[79px] w-[413.2px] h-[725px] rounded-[45px] bg-black overflow-clip">
      <div className="flex flow-row justify-between items-start w-[337.2px] gap-[83px] mt-[29px] whitespace-nowrap">
        <p className="font-NotoSansKRSemiBold text-[35px] text-primary">
          {mapName}
        </p>
        <div
          className="flex flex-row items-center gap-[5px] mt-[9px]"
          onClick={handleBackClick}
        >
          <div className="relative w-[18px] h-[16px]">
            <BackArrowIcon className="text-primary"></BackArrowIcon>
          </div>
          <p className="font-NotoSansKRSemiBold text-[16px] text-primary">
            뒤로 가기
          </p>
        </div>
      </div>
      <div className="absolute flex w-full h-full items-center justify-center pointer-events-none">
        <div className="relative flex justify-center items-center w-[325px] h-[471px] pointer-events-auto">
          {Maps[mapId]}
        </div>
      </div>
    </div>
  );
}
