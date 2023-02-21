import { config } from 'dotenv'
import { createProxyMiddleware } from 'http-proxy-middleware'

config()

export const MONGO = process.env.MONGODB_URI ?? ''
export const PORT = process.env.PORT ?? 3001
export const SECRET = process.env.SECRET ?? ''
export const REFRESH_SECRET = process.env.REFRESH_SECRET ?? ''

export const proxyConfig = createProxyMiddleware({
  target: 'http://api.duckduckgo.com/',
  changeOrigin: true
})

export const corsConfig = {
  origin: '*'
}

export const rateLimitConfig = {
  windowMs: 5 * 60 * 1000,
  max: 20
}
