import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.lumo.ng',
  appName: 'Lumo',
  webDir: 'www',
  plugins: {
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"]
    },
    Keyboard: {
      resizeOnFullScreen: true,
      
    }
  }
};

export default config;
