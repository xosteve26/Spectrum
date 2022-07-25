const express = require('express')
const axios = require("axios");
require('dotenv').config()
const router = express.Router()

function headers(term){
    const options={
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/search',
        params: { term: term, locale: 'en-US', offset: '0', limit: '5' },
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host': process.env.API_HOST
        }
    }
    return options
};


router.get('/health', (req, res) => {
    res.send('API is running')
})

router.get('/search', async(req, res) => {
    const term = req.query.term
    const options = headers(term)
    console.log(term)
   
    try{
        // const response = await axios(options)
        // const data=response.data
        // console.log(data)
        const data = {
            "tracks": {
                "hits": [
                    {
                        "track": {
                            "layout": "5",
                            "type": "MUSIC",
                            "key": "443578639",
                            "title": "Fine China",
                            "subtitle": "Future & Juice WRLD",
                            "share": {
                                "subject": "Fine China - Future & Juice WRLD",
                                "text": "I used Shazam to discover Fine China by Future & Juice WRLD.",
                                "href": "https://www.shazam.com/track/443578639/fine-china",
                                "image": "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/00/a0/dc/00a0dcae-34ed-a9ae-8466-2c1a4b4a5122/886447364802.jpg/400x400cc.jpg",
                                "twitter": "I used @Shazam to discover Fine China by Future & Juice WRLD.",
                                "html": "https://www.shazam.com/snippets/email-share/443578639?lang=en-US&country=US",
                                "avatar": "https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/c2/db/82/c2db8258-65df-a3b5-a69e-38bebb0b956c/pr_source.png/800x800cc.jpg",
                                "snapchat": "https://www.shazam.com/partner/sc/track/443578639"
                            },
                            "images": {
                                "background": "https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/c2/db/82/c2db8258-65df-a3b5-a69e-38bebb0b956c/pr_source.png/800x800cc.jpg",
                                "coverart": "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/00/a0/dc/00a0dcae-34ed-a9ae-8466-2c1a4b4a5122/886447364802.jpg/400x400cc.jpg",
                                "coverarthq": "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/00/a0/dc/00a0dcae-34ed-a9ae-8466-2c1a4b4a5122/886447364802.jpg/400x400cc.jpg",
                                "joecolor": "b:ffffffp:0d0301s:4d1f0dt:3d3534q:714c3e"
                            },
                            "hub": {
                                "type": "APPLEMUSIC",
                                "image": "https://images.shazam.com/static/icons/hub/ios/v5/applemusic_{scalefactor}.png",
                                "actions": [
                                    {
                                        "name": "apple",
                                        "type": "applemusicplay",
                                        "id": "1439124916"
                                    },
                                    {
                                        "name": "apple",
                                        "type": "uri",
                                        "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/54/ad/07/54ad0786-8cd4-39f7-e222-949e03e26bf2/mzaf_481961472884315279.plus.aac.p.m4a"
                                    }
                                ],
                                "options": [
                                    {
                                        "caption": "OPEN",
                                        "actions": [
                                            {
                                                "name": "hub:applemusic:deeplink",
                                                "type": "applemusicopen",
                                                "uri": "https://music.apple.com/us/album/fine-china/1439124838?i=1439124916&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios"
                                            },
                                            {
                                                "name": "hub:applemusic:deeplink",
                                                "type": "uri",
                                                "uri": "https://music.apple.com/us/album/fine-china/1439124838?i=1439124916&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios"
                                            }
                                        ],
                                        "beacondata": {
                                            "type": "open",
                                            "providername": "applemusic"
                                        },
                                        "image": "https://images.shazam.com/static/icons/hub/ios/v5/overflow-open-option_{scalefactor}.png",
                                        "type": "open",
                                        "listcaption": "Open in Apple Music",
                                        "overflowimage": "https://images.shazam.com/static/icons/hub/ios/v5/applemusic-overflow_{scalefactor}.png",
                                        "colouroverflowimage": false,
                                        "providername": "applemusic"
                                    },
                                    {
                                        "caption": "BUY",
                                        "actions": [
                                            {
                                                "type": "uri",
                                                "uri": "https://itunes.apple.com/us/album/fine-china/1439124838?i=1439124916&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=itunes&itsct=Shazam_ios"
                                            }
                                        ],
                                        "beacondata": {
                                            "type": "buy",
                                            "providername": "itunes"
                                        },
                                        "image": "https://images.shazam.com/static/icons/hub/ios/v5/itunes-overflow-buy_{scalefactor}.png",
                                        "type": "buy",
                                        "listcaption": "Buy on iTunes",
                                        "overflowimage": "https://images.shazam.com/static/icons/hub/ios/v5/itunes-overflow-buy_{scalefactor}.png",
                                        "colouroverflowimage": false,
                                        "providername": "itunes"
                                    }
                                ],
                                "providers": [
                                    {
                                        "caption": "Open in Spotify",
                                        "images": {
                                            "overflow": "https://images.shazam.com/static/icons/hub/ios/v5/spotify-overflow_{scalefactor}.png",
                                            "default": "https://images.shazam.com/static/icons/hub/ios/v5/spotify_{scalefactor}.png"
                                        },
                                        "actions": [
                                            {
                                                "name": "hub:spotify:searchdeeplink",
                                                "type": "uri",
                                                "uri": "spotify:search:Fine%20China%20Future"
                                            }
                                        ],
                                        "type": "SPOTIFY"
                                    },
                                    {
                                        "caption": "Open in Deezer",
                                        "images": {
                                            "overflow": "https://images.shazam.com/static/icons/hub/ios/v5/deezer-overflow_{scalefactor}.png",
                                            "default": "https://images.shazam.com/static/icons/hub/ios/v5/deezer_{scalefactor}.png"
                                        },
                                        "actions": [
                                            {
                                                "name": "hub:deezer:searchdeeplink",
                                                "type": "uri",
                                                "uri": "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27Fine+China%27%20artist%3A%27Future++Juice+WRLD%27%7D"
                                            }
                                        ],
                                        "type": "DEEZER"
                                    }
                                ],
                                "explicit": true,
                                "displayname": "APPLE MUSIC"
                            },
                            "artists": [
                                {
                                    "id": "42",
                                    "adamid": "128050210"
                                }
                            ],
                            "url": "https://www.shazam.com/track/443578639/fine-china"
                        }
                    },
                    {
                        "track": {
                            "layout": "5",
                            "type": "MUSIC",
                            "key": "86704240",
                            "title": "Fine China",
                            "subtitle": "Chris Brown",
                            "share": {
                                "subject": "Fine China - Chris Brown",
                                "text": "I used Shazam to discover Fine China by Chris Brown.",
                                "href": "https://www.shazam.com/track/86704240/fine-china",
                                "image": "https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/a3/3a/e3/a33ae3c7-821c-1531-0436-305fcd91f7fe/886444792073.jpg/400x400cc.jpg",
                                "twitter": "I used @Shazam to discover Fine China by Chris Brown.",
                                "html": "https://www.shazam.com/snippets/email-share/86704240?lang=en-US&country=US",
                                "avatar": "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/54/ca/43/54ca4321-8c0b-099e-f552-950a40a2a899/pr_source.png/800x800cc.jpg",
                                "snapchat": "https://www.shazam.com/partner/sc/track/86704240"
                            },
                            "images": {
                                "background": "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/54/ca/43/54ca4321-8c0b-099e-f552-950a40a2a899/pr_source.png/800x800cc.jpg",
                                "coverart": "https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/a3/3a/e3/a33ae3c7-821c-1531-0436-305fcd91f7fe/886444792073.jpg/400x400cc.jpg",
                                "coverarthq": "https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/a3/3a/e3/a33ae3c7-821c-1531-0436-305fcd91f7fe/886444792073.jpg/400x400cc.jpg",
                                "joecolor": "b:090d0ep:f6f5f3s:dbd8d9t:c6c6c5q:b0afb0"
                            },
                            "hub": {
                                "type": "APPLEMUSIC",
                                "image": "https://images.shazam.com/static/icons/hub/ios/v5/applemusic_{scalefactor}.png",
                                "actions": [
                                    {
                                        "name": "apple",
                                        "type": "applemusicplay",
                                        "id": "920686030"
                                    },
                                    {
                                        "name": "apple",
                                        "type": "uri",
                                        "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/1b/aa/25/1baa2573-8d81-8daa-08dd-b68c6be010a0/mzaf_595184799298784750.plus.aac.ep.m4a"
                                    }
                                ],
                                "options": [
                                    {
                                        "caption": "OPEN",
                                        "actions": [
                                            {
                                                "name": "hub:applemusic:deeplink",
                                                "type": "applemusicopen",
                                                "uri": "https://music.apple.com/us/album/fine-china/920685975?i=920686030&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios"
                                            },
                                            {
                                                "name": "hub:applemusic:deeplink",
                                                "type": "uri",
                                                "uri": "https://music.apple.com/us/album/fine-china/920685975?i=920686030&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios"
                                            }
                                        ],
                                        "beacondata": {
                                            "type": "open",
                                            "providername": "applemusic"
                                        },
                                        "image": "https://images.shazam.com/static/icons/hub/ios/v5/overflow-open-option_{scalefactor}.png",
                                        "type": "open",
                                        "listcaption": "Open in Apple Music",
                                        "overflowimage": "https://images.shazam.com/static/icons/hub/ios/v5/applemusic-overflow_{scalefactor}.png",
                                        "colouroverflowimage": false,
                                        "providername": "applemusic"
                                    },
                                    {
                                        "caption": "BUY",
                                        "actions": [
                                            {
                                                "type": "uri",
                                                "uri": "https://itunes.apple.com/us/album/fine-china/920685975?i=920686030&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=itunes&itsct=Shazam_ios"
                                            }
                                        ],
                                        "beacondata": {
                                            "type": "buy",
                                            "providername": "itunes"
                                        },
                                        "image": "https://images.shazam.com/static/icons/hub/ios/v5/itunes-overflow-buy_{scalefactor}.png",
                                        "type": "buy",
                                        "listcaption": "Buy on iTunes",
                                        "overflowimage": "https://images.shazam.com/static/icons/hub/ios/v5/itunes-overflow-buy_{scalefactor}.png",
                                        "colouroverflowimage": false,
                                        "providername": "itunes"
                                    }
                                ],
                                "providers": [
                                    {
                                        "caption": "Open in Spotify",
                                        "images": {
                                            "overflow": "https://images.shazam.com/static/icons/hub/ios/v5/spotify-overflow_{scalefactor}.png",
                                            "default": "https://images.shazam.com/static/icons/hub/ios/v5/spotify_{scalefactor}.png"
                                        },
                                        "actions": [
                                            {
                                                "name": "hub:spotify:searchdeeplink",
                                                "type": "uri",
                                                "uri": "spotify:search:Fine%20China%20Chris%20Brown"
                                            }
                                        ],
                                        "type": "SPOTIFY"
                                    },
                                    {
                                        "caption": "Open in Deezer",
                                        "images": {
                                            "overflow": "https://images.shazam.com/static/icons/hub/ios/v5/deezer-overflow_{scalefactor}.png",
                                            "default": "https://images.shazam.com/static/icons/hub/ios/v5/deezer_{scalefactor}.png"
                                        },
                                        "actions": [
                                            {
                                                "name": "hub:deezer:searchdeeplink",
                                                "type": "uri",
                                                "uri": "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27Fine+China%27%20artist%3A%27Chris+Brown%27%7D"
                                            }
                                        ],
                                        "type": "DEEZER"
                                    }
                                ],
                                "explicit": false,
                                "displayname": "APPLE MUSIC"
                            },
                            "artists": [
                                {
                                    "id": "42",
                                    "adamid": "95705522"
                                }
                            ],
                            "url": "https://www.shazam.com/track/86704240/fine-china"
                        }
                    },
                    {
                        "track": {
                            "layout": "5",
                            "type": "MUSIC",
                            "key": "619682930",
                            "title": "Eyes at Night",
                            "subtitle": "Fine China",
                            "share": {
                                "subject": "Eyes at Night - Fine China",
                                "text": "I used Shazam to discover Eyes at Night by Fine China.",
                                "href": "https://www.shazam.com/track/619682930/eyes-at-night",
                                "image": "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/a5/d3/4d/a5d34d7a-287e-0940-e6e0-f665eef5d603/198003877054.jpg/400x400cc.jpg",
                                "twitter": "I used @Shazam to discover Eyes at Night by Fine China.",
                                "html": "https://www.shazam.com/snippets/email-share/619682930?lang=en-US&country=US",
                                "snapchat": "https://www.shazam.com/partner/sc/track/619682930"
                            },
                            "images": {
                                "background": "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/a5/d3/4d/a5d34d7a-287e-0940-e6e0-f665eef5d603/198003877054.jpg/400x400cc.jpg",
                                "coverart": "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/a5/d3/4d/a5d34d7a-287e-0940-e6e0-f665eef5d603/198003877054.jpg/400x400cc.jpg",
                                "coverarthq": "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/a5/d3/4d/a5d34d7a-287e-0940-e6e0-f665eef5d603/198003877054.jpg/400x400cc.jpg",
                                "joecolor": "b:ffffffp:060000s:191a14t:383333q:474843"
                            },
                            "hub": {
                                "type": "APPLEMUSIC",
                                "image": "https://images.shazam.com/static/icons/hub/ios/v5/applemusic_{scalefactor}.png",
                                "actions": [
                                    {
                                        "name": "apple",
                                        "type": "applemusicplay",
                                        "id": "1630802600"
                                    },
                                    {
                                        "name": "apple",
                                        "type": "uri",
                                        "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/13/fd/f7/13fdf79c-4029-7488-5a23-b80487003715/mzaf_11517029560432419795.plus.aac.ep.m4a"
                                    }
                                ],
                                "options": [
                                    {
                                        "caption": "OPEN",
                                        "actions": [
                                            {
                                                "name": "hub:applemusic:deeplink",
                                                "type": "applemusicopen",
                                                "uri": "https://music.apple.com/us/album/eyes-at-night/1630802598?i=1630802600&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios"
                                            },
                                            {
                                                "name": "hub:applemusic:deeplink",
                                                "type": "uri",
                                                "uri": "https://music.apple.com/us/album/eyes-at-night/1630802598?i=1630802600&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios"
                                            }
                                        ],
                                        "beacondata": {
                                            "type": "open",
                                            "providername": "applemusic"
                                        },
                                        "image": "https://images.shazam.com/static/icons/hub/ios/v5/overflow-open-option_{scalefactor}.png",
                                        "type": "open",
                                        "listcaption": "Open in Apple Music",
                                        "overflowimage": "https://images.shazam.com/static/icons/hub/ios/v5/applemusic-overflow_{scalefactor}.png",
                                        "colouroverflowimage": false,
                                        "providername": "applemusic"
                                    },
                                    {
                                        "caption": "BUY",
                                        "actions": [
                                            {
                                                "type": "uri",
                                                "uri": "https://itunes.apple.com/us/album/eyes-at-night/1630802598?i=1630802600&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=itunes&itsct=Shazam_ios"
                                            }
                                        ],
                                        "beacondata": {
                                            "type": "buy",
                                            "providername": "itunes"
                                        },
                                        "image": "https://images.shazam.com/static/icons/hub/ios/v5/itunes-overflow-buy_{scalefactor}.png",
                                        "type": "buy",
                                        "listcaption": "Buy on iTunes",
                                        "overflowimage": "https://images.shazam.com/static/icons/hub/ios/v5/itunes-overflow-buy_{scalefactor}.png",
                                        "colouroverflowimage": false,
                                        "providername": "itunes"
                                    }
                                ],
                                "providers": [
                                    {
                                        "caption": "Open in Spotify",
                                        "images": {
                                            "overflow": "https://images.shazam.com/static/icons/hub/ios/v5/spotify-overflow_{scalefactor}.png",
                                            "default": "https://images.shazam.com/static/icons/hub/ios/v5/spotify_{scalefactor}.png"
                                        },
                                        "actions": [
                                            {
                                                "name": "hub:spotify:searchdeeplink",
                                                "type": "uri",
                                                "uri": "spotify:search:Eyes%20at%20Night%20Fine%20China"
                                            }
                                        ],
                                        "type": "SPOTIFY"
                                    },
                                    {
                                        "caption": "Open in Deezer",
                                        "images": {
                                            "overflow": "https://images.shazam.com/static/icons/hub/ios/v5/deezer-overflow_{scalefactor}.png",
                                            "default": "https://images.shazam.com/static/icons/hub/ios/v5/deezer_{scalefactor}.png"
                                        },
                                        "actions": [
                                            {
                                                "name": "hub:deezer:searchdeeplink",
                                                "type": "uri",
                                                "uri": "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27Eyes+at+Night%27%20artist%3A%27Fine+China%27%7D"
                                            }
                                        ],
                                        "type": "DEEZER"
                                    }
                                ],
                                "explicit": false,
                                "displayname": "APPLE MUSIC"
                            },
                            "artists": [
                                {
                                    "id": "42",
                                    "adamid": "47347111"
                                }
                            ],
                            "url": "https://www.shazam.com/track/619682930/eyes-at-night"
                        }
                    },
                    {
                        "track": {
                            "layout": "5",
                            "type": "MUSIC",
                            "key": "619682931",
                            "title": "Eyes at Dawn",
                            "subtitle": "Fine China",
                            "share": {
                                "subject": "Eyes at Dawn - Fine China",
                                "text": "I used Shazam to discover Eyes at Dawn by Fine China.",
                                "href": "https://www.shazam.com/track/619682931/eyes-at-dawn",
                                "image": "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/a5/d3/4d/a5d34d7a-287e-0940-e6e0-f665eef5d603/198003877054.jpg/400x400cc.jpg",
                                "twitter": "I used @Shazam to discover Eyes at Dawn by Fine China.",
                                "html": "https://www.shazam.com/snippets/email-share/619682931?lang=en-US&country=US",
                                "snapchat": "https://www.shazam.com/partner/sc/track/619682931"
                            },
                            "images": {
                                "background": "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/a5/d3/4d/a5d34d7a-287e-0940-e6e0-f665eef5d603/198003877054.jpg/400x400cc.jpg",
                                "coverart": "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/a5/d3/4d/a5d34d7a-287e-0940-e6e0-f665eef5d603/198003877054.jpg/400x400cc.jpg",
                                "coverarthq": "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/a5/d3/4d/a5d34d7a-287e-0940-e6e0-f665eef5d603/198003877054.jpg/400x400cc.jpg",
                                "joecolor": "b:ffffffp:060000s:191a14t:383333q:474843"
                            },
                            "hub": {
                                "type": "APPLEMUSIC",
                                "image": "https://images.shazam.com/static/icons/hub/ios/v5/applemusic_{scalefactor}.png",
                                "actions": [
                                    {
                                        "name": "apple",
                                        "type": "applemusicplay",
                                        "id": "1630802601"
                                    },
                                    {
                                        "name": "apple",
                                        "type": "uri",
                                        "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/86/75/50/867550fe-7d57-d224-589a-4c90dc5a36c6/mzaf_5332804852440490537.plus.aac.ep.m4a"
                                    }
                                ],
                                "options": [
                                    {
                                        "caption": "OPEN",
                                        "actions": [
                                            {
                                                "name": "hub:applemusic:deeplink",
                                                "type": "applemusicopen",
                                                "uri": "https://music.apple.com/us/album/eyes-at-dawn/1630802598?i=1630802601&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios"
                                            },
                                            {
                                                "name": "hub:applemusic:deeplink",
                                                "type": "uri",
                                                "uri": "https://music.apple.com/us/album/eyes-at-dawn/1630802598?i=1630802601&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios"
                                            }
                                        ],
                                        "beacondata": {
                                            "type": "open",
                                            "providername": "applemusic"
                                        },
                                        "image": "https://images.shazam.com/static/icons/hub/ios/v5/overflow-open-option_{scalefactor}.png",
                                        "type": "open",
                                        "listcaption": "Open in Apple Music",
                                        "overflowimage": "https://images.shazam.com/static/icons/hub/ios/v5/applemusic-overflow_{scalefactor}.png",
                                        "colouroverflowimage": false,
                                        "providername": "applemusic"
                                    },
                                    {
                                        "caption": "BUY",
                                        "actions": [
                                            {
                                                "type": "uri",
                                                "uri": "https://itunes.apple.com/us/album/eyes-at-dawn/1630802598?i=1630802601&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=itunes&itsct=Shazam_ios"
                                            }
                                        ],
                                        "beacondata": {
                                            "type": "buy",
                                            "providername": "itunes"
                                        },
                                        "image": "https://images.shazam.com/static/icons/hub/ios/v5/itunes-overflow-buy_{scalefactor}.png",
                                        "type": "buy",
                                        "listcaption": "Buy on iTunes",
                                        "overflowimage": "https://images.shazam.com/static/icons/hub/ios/v5/itunes-overflow-buy_{scalefactor}.png",
                                        "colouroverflowimage": false,
                                        "providername": "itunes"
                                    }
                                ],
                                "providers": [
                                    {
                                        "caption": "Open in Spotify",
                                        "images": {
                                            "overflow": "https://images.shazam.com/static/icons/hub/ios/v5/spotify-overflow_{scalefactor}.png",
                                            "default": "https://images.shazam.com/static/icons/hub/ios/v5/spotify_{scalefactor}.png"
                                        },
                                        "actions": [
                                            {
                                                "name": "hub:spotify:searchdeeplink",
                                                "type": "uri",
                                                "uri": "spotify:search:Eyes%20at%20Dawn%20Fine%20China"
                                            }
                                        ],
                                        "type": "SPOTIFY"
                                    },
                                    {
                                        "caption": "Open in Deezer",
                                        "images": {
                                            "overflow": "https://images.shazam.com/static/icons/hub/ios/v5/deezer-overflow_{scalefactor}.png",
                                            "default": "https://images.shazam.com/static/icons/hub/ios/v5/deezer_{scalefactor}.png"
                                        },
                                        "actions": [
                                            {
                                                "name": "hub:deezer:searchdeeplink",
                                                "type": "uri",
                                                "uri": "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27Eyes+at+Dawn%27%20artist%3A%27Fine+China%27%7D"
                                            }
                                        ],
                                        "type": "DEEZER"
                                    }
                                ],
                                "explicit": false,
                                "displayname": "APPLE MUSIC"
                            },
                            "artists": [
                                {
                                    "id": "42",
                                    "adamid": "47347111"
                                }
                            ],
                            "url": "https://www.shazam.com/track/619682931/eyes-at-dawn"
                        }
                    }
                ]
            },
            "artists": {
                "hits": [
                    {
                        "artist": {
                            "avatar": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/76/91/c8/7691c859-a848-7777-04b9-5d17fd98d520/s05.xnaqvale.tif/800x800ac.jpg",
                            "name": "Fine China",
                            "verified": false,
                            "weburl": "https://music.apple.com/us/artist/fine-china/47347111",
                            "adamid": "47347111"
                        }
                    },
                    {
                        "artist": {
                            "avatar": "https://is2-ssl.mzstatic.com/image/thumb/Music116/v4/c2/db/82/c2db8258-65df-a3b5-a69e-38bebb0b956c/pr_source.png/800x800bb.jpg",
                            "name": "Future",
                            "verified": false,
                            "weburl": "https://music.apple.com/us/artist/future/128050210",
                            "adamid": "128050210"
                        }
                    },
                    {
                        "artist": {
                            "avatar": "https://is2-ssl.mzstatic.com/image/thumb/Features115/v4/42/04/ae/4204ae87-e800-6b47-d95c-068e3bd52995/mzl.gwhtpegi.jpg/800x800bb.jpg",
                            "name": "Juice WRLD",
                            "verified": false,
                            "weburl": "https://music.apple.com/us/artist/juice-wrld/1368733420",
                            "adamid": "1368733420"
                        }
                    },
                    {
                        "artist": {
                            "avatar": "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/54/ca/43/54ca4321-8c0b-099e-f552-950a40a2a899/pr_source.png/800x800bb.jpg",
                            "name": "Chris Brown",
                            "verified": false,
                            "weburl": "https://music.apple.com/us/artist/chris-brown/95705522",
                            "adamid": "95705522"
                        }
                    },
                    {
                        "artist": {
                            "avatar": "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/b2/f5/c9/b2f5c9ad-2ec2-a733-70b3-bddf1ae8f8c5/artwork.jpg/800x800ac.jpg",
                            "name": "Fine China",
                            "verified": false,
                            "weburl": "https://music.apple.com/us/artist/fine-china/1563883607",
                            "adamid": "1563883607"
                        }
                    }
                ]
            }
        };
        const {tracks:trackList,artists:artistList} = data;
        const {hits:tracks } = trackList;
        const {hits:artists} = artistList;
        res.send({"tracks":tracks,"artists":artists});
    }
    catch (error){
        res.send(error)
    }

    
})

router.get('/auto-complete', async (req, res) => {
    const term = req.query.term
    const options = headers(term)
    const data=null;
    try {
        const response = await axios(options)
        data=response.data;
    }
    catch (error) {
        res.send(error)
    }




})

router.get('/artist', async (req, res) => {
    const artist_id= req.query.artistid
    console.log(artist_id)
    const options = {
        method: 'GET',
        url: SHAZAM_URL,
        params: { id: artist_id, locale: 'en-US' },
        headers: {
            'X-RapidAPI-Key': RAPID_API_KEY,
            'X-RapidAPI-Host': API_HOST
        }
    };

    try {
        const response = await axios(options)
        const data = response.data;
        res.send(data)
    }
    catch (error) {
        res.send(error)
    }
    
})


router.get('/song', async (req, res) => {
    const song_id = req.query.songid
    console.log(song_id)
    // const options = {
    //     method: 'GET',
    //     url: SHAZAM_URL,
    //     params: { key: song_id, locale: 'en-US' },
    //     headers: {
    //         'X-RapidAPI-Key': RAPID_API_KEY,
    //         'X-RapidAPI-Host': API_HOST
    //     }
    // };

    try {
        // const response = await axios(options)
        // const data = response.data;
        const data = {
            "layout": "5",
            "type": "MUSIC",
            "key": "86704240",
            "title": "Fine China",
            "subtitle": "Chris Brown",
            "images": {
                "background": "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/54/ca/43/54ca4321-8c0b-099e-f552-950a40a2a899/pr_source.png/800x800cc.jpg",
                "coverart": "https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/a3/3a/e3/a33ae3c7-821c-1531-0436-305fcd91f7fe/886444792073.jpg/400x400cc.jpg",
                "coverarthq": "https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/a3/3a/e3/a33ae3c7-821c-1531-0436-305fcd91f7fe/886444792073.jpg/400x400cc.jpg",
                "joecolor": "b:090d0ep:f6f5f3s:dbd8d9t:c6c6c5q:b0afb0"
            },
            "share": {
                "subject": "Fine China - Chris Brown",
                "text": "I used Shazam to discover Fine China by Chris Brown.",
                "href": "https://www.shazam.com/track/86704240/fine-china",
                "image": "https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/a3/3a/e3/a33ae3c7-821c-1531-0436-305fcd91f7fe/886444792073.jpg/400x400cc.jpg",
                "twitter": "I used @Shazam to discover Fine China by Chris Brown.",
                "html": "https://www.shazam.com/snippets/email-share/86704240?lang=en-US&country=US",
                "avatar": "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/54/ca/43/54ca4321-8c0b-099e-f552-950a40a2a899/pr_source.png/800x800cc.jpg",
                "snapchat": "https://www.shazam.com/partner/sc/track/86704240"
            },
            "hub": {
                "type": "APPLEMUSIC",
                "image": "https://images.shazam.com/static/icons/hub/ios/v5/applemusic_{scalefactor}.png",
                "actions": [
                    {
                        "name": "apple",
                        "type": "applemusicplay",
                        "id": "920686030"
                    },
                    {
                        "name": "apple",
                        "type": "uri",
                        "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/1b/aa/25/1baa2573-8d81-8daa-08dd-b68c6be010a0/mzaf_595184799298784750.plus.aac.ep.m4a"
                    }
                ],
                "options": [
                    {
                        "caption": "OPEN",
                        "actions": [
                            {
                                "name": "hub:applemusic:deeplink",
                                "type": "applemusicopen",
                                "uri": "https://music.apple.com/us/album/fine-china/920685975?i=920686030&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios"
                            },
                            {
                                "name": "hub:applemusic:deeplink",
                                "type": "uri",
                                "uri": "https://music.apple.com/us/album/fine-china/920685975?i=920686030&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios"
                            }
                        ],
                        "beacondata": {
                            "type": "open",
                            "providername": "applemusic"
                        },
                        "image": "https://images.shazam.com/static/icons/hub/ios/v5/overflow-open-option_{scalefactor}.png",
                        "type": "open",
                        "listcaption": "Open in Apple Music",
                        "overflowimage": "https://images.shazam.com/static/icons/hub/ios/v5/applemusic-overflow_{scalefactor}.png",
                        "colouroverflowimage": false,
                        "providername": "applemusic"
                    },
                    {
                        "caption": "BUY",
                        "actions": [
                            {
                                "type": "uri",
                                "uri": "https://itunes.apple.com/us/album/fine-china/920685975?i=920686030&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=itunes&itsct=Shazam_ios"
                            }
                        ],
                        "beacondata": {
                            "type": "buy",
                            "providername": "itunes"
                        },
                        "image": "https://images.shazam.com/static/icons/hub/ios/v5/itunes-overflow-buy_{scalefactor}.png",
                        "type": "buy",
                        "listcaption": "Buy on iTunes",
                        "overflowimage": "https://images.shazam.com/static/icons/hub/ios/v5/itunes-overflow-buy_{scalefactor}.png",
                        "colouroverflowimage": false,
                        "providername": "itunes"
                    }
                ],
                "providers": [
                    {
                        "caption": "Open in Spotify",
                        "images": {
                            "overflow": "https://images.shazam.com/static/icons/hub/ios/v5/spotify-overflow_{scalefactor}.png",
                            "default": "https://images.shazam.com/static/icons/hub/ios/v5/spotify_{scalefactor}.png"
                        },
                        "actions": [
                            {
                                "name": "hub:spotify:searchdeeplink",
                                "type": "uri",
                                "uri": "spotify:search:Fine%20China%20Chris%20Brown"
                            }
                        ],
                        "type": "SPOTIFY"
                    },
                    {
                        "caption": "Open in Deezer",
                        "images": {
                            "overflow": "https://images.shazam.com/static/icons/hub/ios/v5/deezer-overflow_{scalefactor}.png",
                            "default": "https://images.shazam.com/static/icons/hub/ios/v5/deezer_{scalefactor}.png"
                        },
                        "actions": [
                            {
                                "name": "hub:deezer:searchdeeplink",
                                "type": "uri",
                                "uri": "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27Fine+China%27%20artist%3A%27Chris+Brown%27%7D"
                            }
                        ],
                        "type": "DEEZER"
                    }
                ],
                "explicit": false,
                "displayname": "APPLE MUSIC"
            },
            "url": "https://www.shazam.com/track/86704240/fine-china",
            "artists": [
                {
                    "id": "42",
                    "adamid": "95705522"
                }
            ],
            "isrc": "USRC11300305",
            "genres": {
                "primary": "R&B/Soul"
            },
            "urlparams": {
                "{tracktitle}": "Fine+China",
                "{trackartist}": "Chris+Brown"
            },
            "myshazam": {
                "apple": {
                    "actions": [
                        {
                            "name": "myshazam:apple",
                            "type": "uri",
                            "uri": "https://music.apple.com/us/album/fine-china/920685975?i=920686030&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios"
                        }
                    ]
                }
            },
            "albumadamid": "920685975",
            "sections": [
                {
                    "type": "SONG",
                    "metapages": [
                        {
                            "image": "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/54/ca/43/54ca4321-8c0b-099e-f552-950a40a2a899/pr_source.png/800x800cc.jpg",
                            "caption": "Chris Brown"
                        },
                        {
                            "image": "https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/a3/3a/e3/a33ae3c7-821c-1531-0436-305fcd91f7fe/886444792073.jpg/400x400cc.jpg",
                            "caption": "Fine China"
                        }
                    ],
                    "tabname": "Song",
                    "metadata": [
                        {
                            "title": "Album",
                            "text": "X (Expanded Edition)"
                        },
                        {
                            "title": "Label",
                            "text": "RCA Records Label"
                        },
                        {
                            "title": "Released",
                            "text": "2013"
                        }
                    ]
                },
                {
                    "type": "LYRICS",
                    "text": [
                        "Baby, does he do it for you?",
                        "When he's finished, does he step back and adore you?",
                        "I just gotta know, 'cause your time is money",
                        "And I won't let him waste it, oh no-n (Ow!)",
                        "",
                        "Baby, just go with it",
                        "'Cause when you're with me, I can't explain it, it's just different",
                        "We can take it slow or act like you're my girl, let's skip the basics",
                        "Whoa-whoa, oh no",
                        "",
                        "He's so replaceable",
                        "(Da-da-da-da, da-da-da, uh, da-da-da)",
                        "You're worth the chase you're putting on",
                        "(Da-da-da-da, da-da-da)",
                        "",
                        "It's alright, I'm not dangerous",
                        "When you're mine, I'll be generous",
                        "You're irreplaceable, a collectible",
                        "Just like fine china",
                        "",
                        "Favorite, you're my favorite",
                        "It's like all the girls around me don't have faces",
                        "And the saying goes",
                        "Life is just a game but I'm not playing",
                        "Whoa-whoa, oh-oh",
                        "",
                        "He's so replaceable",
                        "(Da-da-da-da, da-da-da, uh, da-da-da)",
                        "You're worth the chase you're putting on",
                        "(Da-da-da-da, da-da-da)",
                        "",
                        "It's alright (Yeah), I'm not dangerous",
                        "When you're mine (Woo), I'll be generous",
                        "(You are) You're irreplaceable, a collectible (Just like)",
                        "Just like fine china",
                        "It's alright (Girl), I'm not dangerous (I'm not dangerous)",
                        "When you're mine (Girl), I'll be generous",
                        "(You are) You're irreplaceable, (You are) A collectible (Hey!)",
                        "(You are) just like fine china",
                        "",
                        "Took me a while (Yeah) to find your love (Hey!)",
                        "Ain't no amount of time in this world (Ho!)",
                        "Save me a lot of time and just love me (Hey!)",
                        "Feel it, baby, feel it in your soul",
                        "Are you ready? (oh)",
                        "I know your heart been telling you, you belong to me (Ha ha)",
                        "A-na-na, no-whoa",
                        "",
                        "It's alright (Yeah, whoa!), I'm not dangerous",
                        "When you're mine (Whoa, I'll get you girl), I'll be generous (I, I, no)",
                        "You're irreplaceable, a collectible",
                        "Just like fine china",
                        "",
                        "Oh-oh-oh-oh-oh",
                        "Oh",
                        "Yeah",
                        "Uh",
                        "Oh, oh no",
                        "Yeah, yeah, yeah"
                    ],
                    "footer": "Writer(s): Christopher Maurice Brown, Amber Denise Streeter, Eric A Bellinger, Gharah Lenvardo V Degeddingseze, Mark Kevin Pitts, Leon D Youngblood\nLyrics powered by www.musixmatch.com",
                    "tabname": "Lyrics",
                    "beacondata": {
                        "lyricsid": "25612063",
                        "providername": "musixmatch",
                        "commontrackid": "12053628"
                    }
                },
                {
                    "type": "VIDEO",
                    "tabname": "Video",
                    "youtubeurl": {
                        "caption": "Chris Brown - Fine China (Official Video)",
                        "image": {
                            "dimensions": {
                                "width": 1280,
                                "height": 720
                            },
                            "url": "https://i.ytimg.com/vi/iGs1gODLiSQ/maxresdefault.jpg"
                        },
                        "actions": [
                            {
                                "name": "video:youtube",
                                "type": "webview",
                                "share": {
                                    "subject": "Fine China - Chris Brown",
                                    "text": "I used Shazam to discover Fine China by Chris Brown.",
                                    "href": "https://www.shazam.com/track/86704240/fine-china",
                                    "image": "https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/a3/3a/e3/a33ae3c7-821c-1531-0436-305fcd91f7fe/886444792073.jpg/400x400cc.jpg",
                                    "twitter": "I used @Shazam to discover Fine China by Chris Brown.",
                                    "html": "https://www.shazam.com/snippets/email-share/86704240?lang=-&country=US",
                                    "avatar": "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/54/ca/43/54ca4321-8c0b-099e-f552-950a40a2a899/pr_source.png/800x800cc.jpg",
                                    "snapchat": "https://www.shazam.com/partner/sc/track/86704240"
                                },
                                "uri": "https://youtu.be/iGs1gODLiSQ?autoplay=1"
                            }
                        ]
                    }
                },
                {
                    "type": "RELATED",
                    "tabname": "Related"
                }
            ]
        }
        res.send(data)
    }
    catch (error) {
        res.send(error)
    }

})



module.exports = router