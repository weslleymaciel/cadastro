import { firestore } from '../modules';
import { ResponseError } from '../utils/entities';
import { ERRORS } from '../utils/enums';

export const getUser = async (_id: string): Promise<User> => {
  try {
    const userDocument = await firestore()
      .collection('users')
      .doc('Gp7kK8JhgO1f5c1BiHY')
      .get();
    const data = userDocument.data() as User;
    data.id = userDocument.id;
    return data;
  } catch (err) {
    throw new ResponseError(ERRORS.USER_NOT_FOUND, err as Error);
  }
};
