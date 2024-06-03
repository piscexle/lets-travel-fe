export interface UploadState {
  load: boolean;
  error?: string | null; // You can include additional properties as needed.
}

export type ParamPostUploadImage = {
  key: string;
  file: File;
};

export type ParamDeleteUploadImage = {
  key: string;
  id: string;
};

export type ParamPostUploadVideo = {
  key: string;
  file: File;
};

export type ParamPostUploadSingleFile = {
  key: string;
  file: File;
};

export type ParamDeleteUploadVideo = {
  key: string;
  id: string;
};

export type ParamPostUploadImages = {
  key: string;
  files: File[] | any;
};
