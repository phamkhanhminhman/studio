import { environment } from '../environments/environment';

export const SERVER = environment.serverUrl;

export const SERVICE_CONFIG = {

    LOGIN: SERVER + 'api/auth/login',

    AUTH_GOOGLE: SERVER + 'auth-google',

    MEDIA_ITEMS: SERVER + 'photo',

    CALLBACK: SERVER + 'callback',

    PLAYLIST: SERVER + 'api/playlist-youtube'

  };