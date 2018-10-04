import * as CryptoJS from 'crypto-js';
import decode from 'jwt-decode';
import { UserResponseModel, UserRole } from 'app/shared/models';
import { StorageKey } from 'app/shared/models/storage-key/storage-key';

export class JwtTokenHelper {

    static base64url = (source) => {
        // Encode in classical base64
        let encodedSource = CryptoJS.enc.Base64.stringify(source);

        // Remove padding equal characters
        encodedSource = encodedSource.replace(/=+$/, '');

        // Replace characters according to base64url specifications
        encodedSource = encodedSource.replace(/\+/g, '-');
        encodedSource = encodedSource.replace(/\//g, '_');

        return encodedSource;
    }

    public static CreateUnsignedToken = (data: any): string => {
        let header = {
            "alg": "HS256",
            "typ": "JWT"
        };

        let stringifiedHeader = CryptoJS.enc.Utf8.parse(JSON.stringify(header));
        let encodedHeader = JwtTokenHelper.base64url(stringifiedHeader);

        let stringifiedData = CryptoJS.enc.Utf8.parse(JSON.stringify(data));
        let encodedData = JwtTokenHelper.base64url(stringifiedData);

        let token = encodedHeader + "." + encodedData;

        return token;
    }

    public static CreateSigningToken = (data: any): string => {
        let token = JwtTokenHelper.CreateUnsignedToken(data);
        let secret = "My very confidential secret!";

        let signature = CryptoJS.HmacSHA256(token, secret);
        signature = JwtTokenHelper.base64url(signature);

        let signedToken = token + "." + signature;
        return signedToken;
    }

    public static DecodeToken = (token: string): any => {
        if (token == null) {
            return null;
        }
        try {
            let tokenPayload = decode(token);
            if (tokenPayload) {
                return tokenPayload;
            }
        } catch (error) {
            return null;
        }
    }

    public static GetUserInfo = (): UserResponseModel => {
        let userInfoToken = localStorage.getItem(StorageKey.User);
        let userInfo = JwtTokenHelper.DecodeToken(userInfoToken);
        if (userInfo) {
            return <UserResponseModel>{ ...userInfo };
        }

        return null;
    }

    public static isRole(userRole: UserRole): boolean {
        let userInfo = JwtTokenHelper.GetUserInfo();
        if (!userInfo) {
            return false;
        }
        return userInfo.roles.some(role => role == UserRole[userRole].toLowerCase());
    }

    public static get userName(): string | null {
        let userInfo = JwtTokenHelper.GetUserInfo();
        return userInfo && (userInfo.fullName || userInfo.email) || null;
    }

    public static get countryCode(): string | null {
        return 'NI';
        //   let ipInfoToken = localStorage.getItem(StorageKey.IPInfo);
        //   let ipDecode = JwtTokenHelper.DecodeToken(ipInfoToken);
        //  let ipInfo = ipDecode && <IpInfo>{ ...ipDecode } || null;
        //return ipInfo && ipInfo.country || 'ES';
    }
   
}