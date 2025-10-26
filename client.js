const { Kafka } = require('kafkajs');

export const kafka = new Kafka({
    clientId: 'kafka-test',
    brokers: ['192.168.0.74:9092'],
});
