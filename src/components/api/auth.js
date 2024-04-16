import {
  URL_AUTH,
  CLIENT_ID,
  RESPONCE_TYPE,
  RANDOM_STRING,
  REDIRECT_URI,
  SCOPE,
} from './const';

const searchParams = new URLSearchParams();

searchParams.append('client_id', CLIENT_ID);
searchParams.append('response_type', RESPONCE_TYPE);
searchParams.append('state', RANDOM_STRING);
searchParams.append('redirect_uri', REDIRECT_URI);
searchParams.append('scope', SCOPE);

const urlAuth = `${URL_AUTH}${searchParams.toString()}`;

export default urlAuth;
