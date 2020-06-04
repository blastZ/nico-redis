import IORedis from 'ioredis';

export class Redis {
  redis: IORedis.Redis;

  async connect(url?: string, options?: IORedis.RedisOptions) {
    this.redis = new IORedis(url, {
      lazyConnect: true,
      ...options,
    });

    await this.redis.connect();
  }

  async disconnect() {
    await this.redis.disconnect();
  }

  async set(key: IORedis.KeyType, value: IORedis.ValueType, expiryMode = 'EX', time?: number) {
    return await this.redis.set(key, value, expiryMode, time);
  }

  async get(key: IORedis.KeyType) {
    return await this.redis.get(key);
  }

  async del(keys: IORedis.KeyType[]) {
    return await this.redis.del(keys);
  }
}

export default new Redis();
