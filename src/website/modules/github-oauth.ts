import { createOAuthAppAuth } from '@octokit/auth-oauth-app';
import fetch from 'node-fetch';
import config from '../../../config.json';

export const auth = createOAuthAppAuth(config.githubOAuth);
export const loginURL = `https://github.com/login/oauth/authorize?client_id=${config.githubOAuth.clientId}`;

export async function getToken(code: string) {
  const response = await fetch(`https://github.com/login/oauth/access_token?client_id=${config.githubOAuth.clientId}&client_secret=${config.githubOAuth.clientSecret}&code=${code}`);
  return (response.ok)
    ? (await response.json()).token
    : null;
}