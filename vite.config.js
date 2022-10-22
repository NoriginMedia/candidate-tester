import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    optimizeDeps: {
        exclude: ["oh-vue-icons/icons"]
    },
    plugins: [vue()]
})
