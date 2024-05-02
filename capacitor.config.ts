import type { CapacitorConfig } from '@capacitor/cli';



const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'javiza',
  webDir: 'src',
  plugins: {
    LiveUpdates: {
      appId: '042a1261',
      channel: 'Production',
      autoUpdateMethod: 'background',
      maxVersions: 2
    }
  }
};