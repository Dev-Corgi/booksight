import pica from 'pica';

export default async function imageUpScaler(imageUrl,width,height) {
  try {
    // 이미지를 로드할 Image 객체 생성
    const img = new Image();
    img.crossOrigin = 'Anonymous'; // CORS 문제 방지
    img.src = imageUrl;

    // 이미지가 로드될 때까지 기다림
    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
    });

    // 목표 해상도에 맞는 캔버스 생성
    const targetCanvas = document.createElement('canvas');
    targetCanvas.width = width;
    targetCanvas.height = height;

    // Pica 인스턴스 생성
    const picaInstance = pica();

    // 이미지 리사이즈
    const resizedCanvas = await picaInstance.resize(img, targetCanvas, {
      quality: 3,
      unsharpAmount: 80,
      unsharpRadius: 0.6,
      unsharpThreshold: 2
    });

    // 리사이즈된 이미지를 Blob으로 변환
    const blob = await picaInstance.toBlob(resizedCanvas, 'image/jpeg', 1);

    // Blob을 URL로 변환
    const resizedImageUrl = URL.createObjectURL(blob);

    return resizedImageUrl;
  } catch (error) {
    console.error('Image resizing failed:', error);
    throw error;
  }
}
