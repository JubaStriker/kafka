const { Kafka } = require('kafkajs');

const kafka = new Kafka({
    clientId: 'kafka-test',
    brokers: ['http://192.168.0.74:9092'],
});

async function init() {
    const admin = kafka.admin();
    console.log('admin connecting....');
    admin.connect();
    console.log('admin connected....');

    console.log('Creating topic [rider-updates] ');
    await admin.createTopics({
        topics: [{
            topic: 'rider-updates',
            numPartitions: 2,

        }]
    });
    console.log('Topic created success...');

    console.log('Disconnecting admin');
    await admin.disconnect();
}

init();