import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const returnedObject = {};
  await uploadPhoto()
    .then((val) => { returnedObject.photo = val; })
    .catch(() => { returnedObject.photo = null; });
  await createUser()
    .then((val) => { returnedObject.user = val; })
    .catch(() => { returnedObject.user = null; });
  return returnedObject;
}
