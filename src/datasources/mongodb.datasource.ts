import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';
import {ConfiguracionSeguridad} from '../config/seguridad.config';

const config = {
  name: 'mongodb',
  connector: 'mongodb',
  url: 'mongodb+srv://user_mongo_spa_bellisima:hU45fUmFOIAlDCQF@pets.5gugltz.mongodb.net/seguridad-spa-bellisima?retryWrites=true&w=majority&appName=Pets',
  host: 'localhost',
  port: 27017,
  user: '',
  password: '',
  database: 'seguridad-spa-bellisima',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MongodbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mongodb';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mongodb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
