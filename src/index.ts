import IORedis from 'ioredis';

export class Redis {
  redis: IORedis.Redis;

  async connect(url?: string) {
    this.redis = new IORedis(url, {
      lazyConnect: true,
    });

    await this.redis.connect();
  }

  async set(key: IORedis.KeyType, value: IORedis.ValueType, expiryMode = 'EX', time?: number) {
    return await this.redis.set(key, value, expiryMode, time);
  }

  async get(key: IORedis.KeyType) {
    return await this.redis.get(key);
  }
}

export default new Redis();
