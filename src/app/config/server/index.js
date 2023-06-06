let ServerConfig={
  //Configure the offline DB
  OFFLINE_DB_NAME:'swyger_database',

  //Configure the server
  HOST_SERVER:{
    AUTH:'http://localhost:4100',
    DATABASE:'http://localhost:4400',
    STORAGE:'http://localhost:4500',
    MAIL:'http://localhost:4200',
  },
  API_VERSION:{
    AUTH:'/api/v1',
    DATABASE:'/api/v1',
    STORAGE:'/api/v1',
    MAIL:'/api/v1',
  },
  AUTO_REFRESH_TOKEN_TIMEOUT:1500000, //in millisecond= 25 minutes
  // A Unique Api key for all your servers
  API_KEY:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzd3lnZXIuY29tIiwiaWF0IjoxNjUzNDQwOTkxLCJleHAiOjE2ODQ5NzY5OTEsImF1ZCI6ImRheW52ZXIuY29tIiwic3ViIjoidGVhbUBzd3lnZXIuY29tIiwiR2l2ZW5OYW1lIjoiSXZhbiBKb2VsIiwiU3VybmFtZSI6IlNvYmd1aSIsIkVtYWlsIjoidGVhbUBhZ2dsb215LmNvbSIsIlJvbGUiOlsiQWRtaW4iLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.UvlcjBahR9G8dKxIeENJ7k4I87t3_oNJQ16eyPsRcSE'
}
export default ServerConfig
