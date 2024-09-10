import Profile_1 from "@png/profileImages/Profile_1.png"
import Profile_2 from "@png/profileImages/Profile_2.png"
import Profile_3 from "@png/profileImages/Profile_3.png"
import Profile_4 from "@png/profileImages/Profile_4.png"
import Profile_5 from "@png/profileImages/Profile_5.png"
import Profile_6 from "@png/profileImages/Profile_6.png"
import Profile_7 from "@png/profileImages/Profile_7.png"
import Profile_8 from "@png/profileImages/Profile_8.png"
import Profile_9 from "@png/profileImages/Profile_9.png"

export default function getRandomProfileImage(){
    const localImages = [
        Profile_1,
        Profile_2,
        Profile_3,
        Profile_4,
        Profile_5,
        Profile_6,
        Profile_7,
        Profile_8,
        Profile_9,
        // 추가 이미지 경로
    ];

    const randomImage = localImages[Math.floor(Math.random() * localImages.length)];
    return randomImage;
}