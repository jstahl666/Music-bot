module.exports = {
    app: {
        token: 'MTE2NTA4NjgxOTEzODkzMjc1Ng.G69iyV.1lYZYbDaQxBBSPwObwlqrhvHsqx18DDgiffrrk',
        playing: 'by Zerio ❤️',
        global: true,
        guild: '1031725343670816838',
        ExtraMessages: false,
        loopMessage: false,

    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        spotifyBridge: true,
        volume: 75,
        leaveOnEmpty: true,
        leaveOnEmptyCooldown: 30000,
        leaveOnEnd: true,
        leaveOnEndCooldown: 30000,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
