/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_GITHUB_PERSONAL_ACCESS_TOKEN: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
