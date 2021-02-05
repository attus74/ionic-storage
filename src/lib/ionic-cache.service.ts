import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class IonicCacheService {

  private prefix: string = 'io-cache-'

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
      this.storage.set(this.prefix + key, cache).then(() => {
        resolve(null);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  /**
   * Get data from Cache
   * @param key 
   *  Cache Key
   * 
   * The request is rejected, if no data exists or data is expired.
   */
  get(key: string): Promise<IonicCacheData> {
    return new Promise((resolve, reject) => {
      this.storage.get(this.prefix + key).then((cache: IonicCacheData) => {
        const now = new Date();
        if (cache.expire > now) {
          resolve(cache.data);
        } else {
          this.storage.remove(this.prefix + key);
          reject();
        }
      }).catch(() => {
        reject();
      });
    });
  }

}

export interface IonicCacheData {

  key: string
  data: any
  expire: Date

}