"use server";

import { signIn } from "@/lib/auth";
import { v4 as uuidv4 } from "uuid";
import { executeAction } from "@/lib/executeAction";

export async function guestSignInAction() {
  return await executeAction({
    actionFn: async () => {
      await signIn("credentials", {
        userID: uuidv4(),
        username: `guest-${uuidv4()}`,
        password: uuidv4(),
        role: "guest",
      });
    },
  });
}
