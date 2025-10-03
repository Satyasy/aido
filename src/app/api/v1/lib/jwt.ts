import jwt, { SignOptions } from 'jsonwebtoken';
import { JwtPayload } from 'jsonwebtoken';

const SECRET: jwt.Secret = process.env.JWT_SECRET as string;

if (!SECRET) {
  throw new Error('JWT_SECRET is not defined in the environment variables');
}
export function signJwt(
    payload: object,
    expiresIn: SignOptions['expiresIn'] = "1d" as SignOptions['expiresIn']
): string {
    const options: SignOptions = { expiresIn };
    return jwt.sign(payload, SECRET, options);
}
export function verifyJwt(token: string): JwtPayload | null {
    try {
        return jwt.verify(token, SECRET) as JwtPayload;
    } catch (error) {
        console.error('JWT verification failed:', error);
        return null;
    }
}