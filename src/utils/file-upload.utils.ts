export const imageFileFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
      return cb(new Error('Недопустимый формат изображения'), false);
    }
    cb(null, true);
  };

export const editFileName = (req, file, cb) => {
    const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
    cb(null, `${randomName}-${file.originalname}`);
};