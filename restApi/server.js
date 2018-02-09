'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost', routes: { cors: true } });

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {


        let drives = [{
            location: 'Top Drive',
            letter: 'E',
            status: 'Needs title',
            needInitialized: true,
            discTitle: 'TEST_asdf'
        }, {
            location: 'Middle Drive',
            letter: 'D',
            status: 'Processing',
            needInitialized: false,
            discTitle: 'Finding Nemo(2010).mkv'
        }, {
            location: 'Top Drive',
            letter: 'F',
            status: 'Needs title',
            needInitialized: true,
            discTitle: 'DVD_VIDEO'
        }];


        reply(JSON.stringify(drives));
    }
});

server.route({
    method: 'GET',
    path: '/drivesstatus',
    handler: function (request, reply) {


        let drives = [{
            location: 'Top Drive',
            letter: 'E',
            status: 'Needs title',
            needInitialized: true,
            discTitle: 'TEST_asdf'
        }, {
            location: 'Middle Drive',
            letter: 'D',
            status: 'Processing',
            needInitialized: false,
            discTitle: 'Finding Nemo(2010).mkv'
        }, {
            location: 'Top Drive',
            letter: 'F',
            status: 'Needs title',
            needInitialized: true,
            discTitle: 'DVD_VIDEO'
        }];


        reply(JSON.stringify(drives));
    }
});


server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});