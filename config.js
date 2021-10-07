
const botlist_token = process.env['botlist']
const server_token = process.env['server']

        module.exports = {
            bot: {
                token: botlist_token, // Bot List Bot Token from https://discord.com/developers/applications
                prefix: "po!",
                owners: [""],
                mongourl: "mongodb+srv://pop:pop@pbl.iljrt.mongodb.net/vcodes?retryWrites=true&w=majority",  //https://mongodb.com/cloud/atlas/register
                servers: {
                    token: server_token, // Server List Bot Token
                    prefix: "po!"
                }
            },
        
            website: {
                callback: "https://www.pbots.tk/callback", //example : https://vcodes.xyz avoid / at last. 
                secret: "Ap23l0dspbVRHf0pkOX5dwnJNd06Ownl",
                clientID: "874575884135313419", // Bot client id.
                tags: [ "Moderation", "Fun", "Minecraft","Economy","Guard","NSFW","Anime","Invite","Music","Logging", "Web Dashboard", "Reddit", "Youtube", "Twitch", "Crypto", "Leveling", "Game", "Roleplay", "Utility", "Config", "Simple", "AI" ],
                languages: [
                    { flag: 'gb', code: 'en', name: 'English' },
                    { flag: 'tr', code: 'tr', name: 'Türkçe' },
                    { flag: 'de', code: 'de', name: 'Deutsch' },
                    {flag: "cn", code: "chi", name: "华文"}
                ],
                servers: {
                    tags: [
                    {
                        icon: "fal fa-code",
                        name: "Development"
                    },
                    {
                        icon: "fal fa-play",
                        name: "Stream"
                    },
                    {
                        icon: "fal fa-camera",
                        name: "Media"
                    },
                    {
                        icon: 'fal fa-building',
                        name: 'Company'
                    },
                    {
                        icon: 'fal fa-gamepad',
                        name: 'Game'
                    },
                    {
                        icon: 'fal fa-icons',
                        name: 'Emoji'
                    },
                    {
                        icon: 'fal fa-robot',
                        name: 'Bot List'
                    },
                    {
                        icon: 'fal fa-server',
                        name: 'Server List'
                    },
                    
                    {
                        icon: 'fab fa-discord',
                        name: 'Support'
                    },
                    {
                        icon: 'fal fa-volume',
                        name: 'Sound'
                    },
                    {
                        icon: 'fal fa-comments',
                        name: 'Chatting'
                    },
                    {
                        icon: 'fal fa-lips',
                        name: 'NSFW'
                    },
                    {
                      icon: "fal fa-comment-slash",
                      name: "Challange"
                    },
                    {
                      icon: "fal fa-hand-rock",
                      name: "Protest"
                    },
                    {
                      icon: "fal fa-headphones-alt",
                      name: "Roleplay"
                    },
                    {
                      icon: "fal fa-grin-alt",
                      name: "Meme"
                    },
                    {
                      icon: "fal fa-shopping-cart",
                      name: "Shop"
                    },
                    {
                      icon: "fal fa-desktop",
                      name: "Technology"
                    },
                    {
                      icon: "fal fa-laugh",
                      name: "Fun"
                    },
                    {
                      icon: "fal fa-share-alt",
                      name: "Social"
                    },
                    {
                      icon: "fal fa-laptop",
                      name: "E-Spor"
                    },
                    {
                      icon: 'fal fa-palette',
                      name: 'Design'
                    },
                    {
                      icon: 'fal fa-users',
                      name: 'Community'
                    }
                    ]                
                }
            },
        
            server: {
                id: "875172026195783751",
                invite: "https://discord.gg/AKHZHyGwMX",
                roles: {
                    administrator: "878658328765558897",
                    moderator: "878658001202991155",
                    profile: {
                        sitecreator : "875172026577453104",
                        booster: "878890788245872641",
                        sponsor: "875172026195783758",
                        supporter: "894771477734383628",
                        partnerRole: "894592941694255116",
                        premium: "894774324353982514",
                        member: "875172026195783756"
                    },
                    codeshare: {
                        javascript: "xxxxxx",
                        html: "xxxxxx",
                        substructure: "xxxxxx",
                        bdfd: "xxxxxx", // Bot Designer For Discord
                        fiveInvite: "xxxxxx",
                        tenInvite: "xxxxxx",
                        fifteenInvite: "xxxxxx",
                        twentyInvite: "xxxxxx"
                    },
                    botlist: {
                        developer: "875172026195783755",
                        certified_developer: "875172026195783755",
                        bot: "878430595271774230",
                        certified_bot: "878430595271774230",
                    }
                },
                channels: {
                    codelog: "875172026762031172",
                    login: "878588747090911252",
                    webstatus: "881179662854799390",
                    uptimelog: "881179662854799390",
                    botlog: "881179732497014824",
                    votes: "881179814676037683"
                }
            }
        
        
        }
