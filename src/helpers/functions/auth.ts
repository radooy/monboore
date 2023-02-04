import { db } from "@/firebase";
import { User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

import { DbTables } from "../enums/db/db.enum";
import { Actions } from "../enums/store/store.enum";
import { Dispatch } from "vuex";

export async function authUser(user: User, dispatch: Dispatch) {
  const docRef = doc(db, DbTables.users, user.uid);

  try {
    const docRefSnapshot = await getDoc(docRef);

    if (docRefSnapshot.exists()) {
      const data = docRefSnapshot.data();
      const isAdmin: boolean = data.isAdmin;
      const { email, uid } = user;

      dispatch(Actions.logIn, { email, uid, isAdmin });
    }
  } catch (error) {
    console.log(error);
  }
}
