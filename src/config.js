const envSettings = window;
export default class Config {
  static backend_url = envSettings.TELESCOPE_BACKEND_URL;
}
