import { firestore } from '../modules';
import { ResponseError } from '../utils/entities';
import { ERRORS } from '../utils/enums';

export const getUser = async (id: string): Promise<User> => {
  try {
    const userDocument = await firestore().collection('users').doc(id).get();
    const data = userDocument.data() as User;
    data.id = userDocument.id;
    return data;
  } catch (err) {
    throw new ResponseError(ERRORS.USER_NOT_FOUND, err as Error);
  }
};
