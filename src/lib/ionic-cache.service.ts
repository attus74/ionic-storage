import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class IonicCacheService {

  constructor(private storage: Storage) { }

  /**
   * Add Data to Cache
   * @param key
   *  Cache Key
   * @param data
   *  Data to cache 
   * @param expire 
   *  Expiration in seconds. Optional, default: 900 (i.e. 15 minutes)
   */
  set(key: string, data: any, expire?: number) {
    return new Promise((resolve, reject) => {
      if (expire === undefined) {
        expire = 900;
      }
      const ex = new Date();
      ex.setSeconds(ex.getSeconds() + expire);
      const cache: IonicCacheData = {
        key: key,
        data: data,
        expire: ex,
      };
      this.storage.set('ubg-cache-' + key, cache).then(() => {
        resolve(null);
      }).catch((error) => {
        reject(error);
      });
    });
  }

}

export interface IonicCacheData {

  key: string
  data: any
  expire: Date

}