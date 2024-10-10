// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_GITHUB_CLIENT_ID: string
    readonly VITE_GITHUB_CLIENT_SECRET: string
    // 更多环境变量...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
