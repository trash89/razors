import { writable } from "svelte/store";

const user = writable({ usernale: null, jwt: null });

export default user;
