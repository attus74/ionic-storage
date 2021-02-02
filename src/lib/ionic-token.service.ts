import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class IonicTokenService {

  private   tokenName: string = 'api_refresh_token';

  constructor(private storage: Storage) { }

  getRefreshToken(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.storage.get(this.tokenName).then(value => {
        resolve(value);
      }).catch(() => {
        reject();
      });
    });
  }

  deleteRefreshToken(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.storage.remove(this.tokenName).then(() => {
        resolve(null);
      }).catch(() => {
        reject();
      });
    });
  }

  setRefreshToken(token: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.storage.set(this.tokenName, token).then(() => {
        resolve(null);
      }).catch(() => {
        reject();
      });
    });
  }

}