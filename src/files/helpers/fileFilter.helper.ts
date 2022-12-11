export function fileFilter(
  req: Express.Request,
  file: Express.Multer.File,
  cb: (error: Error, acceptFile: boolean) => void,
) {
  if (!file) return cb(new Error('File is empty'), false);

  const fileExtension = file.mimetype.split('/')[1];
  const validExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];

  if (validExtensions.includes(fileExtension)) return cb(null, true);

  cb(null, false);
}
