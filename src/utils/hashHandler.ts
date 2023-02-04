import bcrypt from 'bcrypt'
import CryptoJS from 'crypto-js'

export const hashHandler = {

  hashEmail (email: string): string {
    return CryptoJS.SHA256(email).toString()
  },

  async hashPassword (password: string): Promise<string> {
    return await bcrypt.hash(password, 8)
  },

  async comparePassword (password: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword)
  }
}
