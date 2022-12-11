import { v4 as uuid } from 'uuid';

export function fileNamer(
  req: Express.Request,
  file: Express.Multer.File,
  cb: (error: Error, fileName: string) => void,
) {
  const fileExtension = file.mimetype.split('/')[1];
  const fileName = `${uuid()}.${fileExtension}`;

  cb(null, fileName);
}
