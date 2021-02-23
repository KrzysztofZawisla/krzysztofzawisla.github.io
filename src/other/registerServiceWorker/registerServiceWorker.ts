import { Workbox } from "workbox-window";

const registerServiceWorker = (path: string): void => {
  const wb = new Workbox(path);
  wb.register();
};

export default registerServiceWorker;
