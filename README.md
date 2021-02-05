# Ionic Storage

Cache and Token Service for Ionic-Angular

Usage in Service:

```ts
constructor(private tokenService: IonicTokenService)

this.tokenService.getRefreshToken().then(token => {});

this.tokenService.setRefreshToken(tokenString);

this.tokenService.deleteRefreshToken();
```

```ts

constructor(private cacheService: IonicCacheService)

this.cacheService.set(key, value, expire);

this.cacheService.get(key).then(value => {});

```