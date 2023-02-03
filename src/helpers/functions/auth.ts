import store from "@/store";

import { db } from "@/firebase";
import { User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

import { DbTables } from "../enums/db/db.enum";
import { Actions } from "../enums/store/store.enum";

export async function authUser(user: User) {
  const docRef = doc(db, DbTables.users, user.uid);

  try {
    const docRefSnapshot = await getDoc(docRef);

    if (docRefSnapshot.exists()) {
      const data = docRefSnapshot.data();
      const isAdmin: boolean = data.isAdmin;
      const { email, uid } = user;

      store.dispatch(Actions.logIn, { email, uid, isAdmin });
    }
  } catch (error) {
    console.log(error);
  }
}
