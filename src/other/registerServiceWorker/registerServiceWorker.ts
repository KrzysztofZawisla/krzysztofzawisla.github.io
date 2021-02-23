import { Workbox } from "workbox-window";

const registerServiceWorker = async (path: string): Promise<void> => {
  try {
    const wb = new Workbox(path);
    await wb.register();
  } catch {
    // eslint-disable-next-line no-console
    console.error("Can't register service worker");
  }
};

export default registerServiceWorker;
