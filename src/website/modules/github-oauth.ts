import fetch from 'node-fetch';
import config from '../../../config.json';

export const loginURL = `https://github.com/login/oauth/authorize?client_id=${config.githubOAuth.clientId}`;

export async function getToken(code: string) {
  const response = await fetch(`https://github.com/login/oauth/access_token?client_id=${config.githubOAuth.clientId}&client_secret=${config.githubOAuth.clientSecret}&code=${code}`);  
  const text = await response.text();

  const token = text.match(/access_token=(?!&)([\dA-Za-z]+)/)[1];
  return (response.ok)
    ? token
    : null;
}

export async function getUser(token: string) {
  const response = await fetch(`https://api.github.com/user?access_token=${token}`,
      { headers: { Authorization: `token ${token}` }});
  return (response.ok)
    ? await response.json()
    : null;
}
