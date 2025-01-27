import { Cloudinary } from '@cloudinary/url-gen';

const cloudinary = new Cloudinary({
  cloud: {
    cloudName: 'dfnppjwde',
  },
});

export const getCloudinaryUrl = (publicId) => {
  return cloudinary.image(publicId).toURL();
};
