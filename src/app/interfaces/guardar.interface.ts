export class PhotoService {
    public photos: UserPhoto[] = [];
  
    // other code
  }
export interface UserPhoto {
    filepath: string;
    webviewPath?: string;
  }