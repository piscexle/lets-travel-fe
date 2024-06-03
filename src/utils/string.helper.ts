import { FileTypeEnum } from '@/config/constant';

export const checkTypeFile = (url: string) => {
  try {
    const urls = url.split('.');
    const endUrl = (urls.length > 0 ? urls[urls.length - 1] : '').toLocaleLowerCase();
    switch (endUrl) {
      case 'jpeg':
      case 'jpg':
      case 'png':
      case 'gif':
      case 'bmp':
      case 'webp':
        return FileTypeEnum.image;
      case 'mp4':
      case 'quicktime':
      case 'webm':
      case 'ogg':
      case 'avi':
        return FileTypeEnum.video;
      default:
        return FileTypeEnum.file;
    }
  } catch {
    return FileTypeEnum.image;
  }
};

export const extractYoutubeEmbedId = (youtubeUrl: string) => {
  // eslint-disable-next-line no-useless-escape
  const regex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = youtubeUrl.match(regex);

  return match && match[2].length === 11 ? match[2] : null;
};

export const isURLValid = (url: string) => {
  // Sử dụng biểu thức chính quy để kiểm tra xem URL có bắt đầu bằng "http://" hoặc "https://" không
  const regex = /^(http|https):\/\//;
  return regex.test(url);
};
