Deposits = new Mongo.Collection('deposits', {connection: null});
new PersistentMinimongo(Deposits);