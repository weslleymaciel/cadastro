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

export const getUsers = async (): Promise<User[]> => {
  try {
    const users = await firestore().collection('users').get();
    return users.docs.map((userDoc) => {
      const user = userDoc.data() as User;
      return { ...user, ...{ id: userDoc.id } };
    }) as User[];
  } catch (err) {
    throw new ResponseError(ERRORS.USER_NOT_FOUND, err as Error);
  }
};

export const updateUser = async (user: User): Promise<void> => {
  try {
    await firestore().collection('users').doc(user.id).update({
      name: user.name,
      picture: user.picture,
      birthdate: user.birthdate,
    });
  } catch (err) {
    throw new ResponseError(ERRORS.COULD_NOT_UPDATE_USER, err as Error);
  }
};

export const removeUser = async (id: string): Promise<void> => {
  try {
    await firestore().collection('users').doc(id).delete();
  } catch (err) {
    throw new ResponseError(ERRORS.COULD_NOT_REMOVE_USER, err as Error);
  }
};
