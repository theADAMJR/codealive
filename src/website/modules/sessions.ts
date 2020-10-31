import { getUser } from './github-oauth';

const sessions = new Map();

export function get(token: string) {
  return sessions.get(token) ?? create(token);
}
async function create(token: string) {
  setTimeout(() => sessions.delete(token), 5 * 60 * 1000);
  await update(token);

  return sessions.get(token);
}

export async function update(token: string) {
  return sessions
    .set(token, { authUser: await getUser(token) });
}