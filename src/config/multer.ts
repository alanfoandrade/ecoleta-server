import multer from 'multer';
import path from 'path';
import { uuid } from 'uuidv4';

export default {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename(request, file, callback) {
      const fileName = `${uuid()}-${file.originalname}`;

      callback(null, fileName);
    },
  }),
};
