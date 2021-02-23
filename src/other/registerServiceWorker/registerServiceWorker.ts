import { Workbox } from "workbox-window";

const registerServiceWorker = async (path: string): Promise<void> => {
  try {
    const wb = new Workbox(path);
    await wb.register();
  } catch (error) {
    console.error("Can't register service worker");
    throw error;
  }
};

export default registerServiceWorker;
