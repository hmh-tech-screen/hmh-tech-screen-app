import {users} from "./mock-user-data";

export const fetchUsers = () => {
    return Promise.resolve(users);
}