const express = require('express')
const axios = require("axios");
require('dotenv').config()
const router = express.Router()



router.get('/artist-info',async(req,res)=>{
    const artistID=req.query.artistid;
    console.log(artistID)
    
    const options = {
        method: 'GET',
        url: 'https://shazam-core.p.rapidapi.com/v1/artists/details',
        params: { artist_id: '95705522' },
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
        }
    };

    const data = {
        "songs": {
            "267264869": {
                "id": "267264869",
                "type": "songs",
                "href": "/v1/catalog/us/songs/267264869?l=en-US",
                "attributes": {
                    "previews": [
                        {
                            "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/a9/ab/41/a9ab41cd-9bb0-a51e-1bda-2cbd4c0f1239/mzaf_5940997494632632799.plus.aac.ep.m4a"
                        }
                    ],
                    "artwork": {
                        "width": 1425,
                        "url": "https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/2f/ec/dd/2fecdd59-1ca1-47c1-a945-2969eb0d347b/888880280336.jpg/{w}x{h}bb.jpg",
                        "height": 1425,
                        "textColor3": "b4a854",
                        "textColor2": "cec7cd",
                        "textColor4": "aaa5a9",
                        "textColor1": "dbcc63",
                        "bgColor": "191b18",
                        "hasP3": false
                    },
                    "artistName": "Chris Brown",
                    "url": "https://music.apple.com/us/album/kiss-kiss-feat-t-pain/267264811?i=267264869",
                    "discNumber": 1,
                    "genreNames": [
                        "R&B/Soul",
                        "Music"
                    ],
                    "hasTimeSyncedLyrics": true,
                    "isMasteredForItunes": false,
                    "durationInMillis": 250667,
                    "releaseDate": "2007-09-11",
                    "isAppleDigitalMaster": false,
                    "name": "Kiss Kiss (feat. T-Pain)",
                    "isrc": "USJI10700577",
                    "audioTraits": [
                        "lossy-stereo",
                        "lossless",
                        "atmos",
                        "spatial"
                    ],
                    "hasLyrics": true,
                    "albumName": "Exclusive (Expanded Edition)",
                    "playParams": {
                        "id": "267264869",
                        "kind": "song"
                    },
                    "trackNumber": 2,
                    "audioLocale": "en-US",
                    "composerName": "Chris Brown & T-Pain"
                }
            },
            "422045110": {
                "id": "422045110",
                "type": "songs",
                "href": "/v1/catalog/us/songs/422045110?l=en-US",
                "attributes": {
                    "previews": [
                        {
                            "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/03/9d/1c/039d1c8e-ebc5-605b-dd88-91de1378be59/mzaf_13615341630887966447.plus.aac.ep.m4a"
                        }
                    ],
                    "artwork": {
                        "width": 1500,
                        "url": "https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/d4/39/fc/d439fc24-1392-ec40-1ef7-02c9b59d9cd3/884977932539.jpg/{w}x{h}bb.jpg",
                        "height": 1500,
                        "textColor3": "a4a1c1",
                        "textColor2": "e3913c",
                        "textColor4": "bd7939",
                        "textColor1": "c4c3e6",
                        "bgColor": "271a2b",
                        "hasP3": false
                    },
                    "artistName": "Chris Brown",
                    "url": "https://music.apple.com/us/album/look-at-me-now-feat-lil-wayne-busta-rhymes/422045097?i=422045110",
                    "discNumber": 1,
                    "genreNames": [
                        "R&B/Soul",
                        "Music"
                    ],
                    "hasTimeSyncedLyrics": true,
                    "isMasteredForItunes": false,
                    "durationInMillis": 222587,
                    "releaseDate": "2011-02-01",
                    "isAppleDigitalMaster": false,
                    "name": "Look At Me Now (feat. Lil Wayne & Busta Rhymes)",
                    "isrc": "USJI11100017",
                    "audioTraits": [
                        "lossy-stereo",
                        "atmos",
                        "spatial",
                        "lossless"
                    ],
                    "hasLyrics": true,
                    "albumName": "F.A.M.E. (Expanded Edition)",
                    "playParams": {
                        "id": "422045110",
                        "kind": "song"
                    },
                    "trackNumber": 4,
                    "audioLocale": "en-US",
                    "composerName": "Chris Brown, Jean-Baptiste, Dwayne Carter, Trevor Smith, Thomas Pentz, Nick van de Wall & Ryan Buendia",
                    "contentRating": "explicit"
                }
            },
            "942089571": {
                "id": "942089571",
                "type": "songs",
                "href": "/v1/catalog/us/songs/942089571?l=en-US",
                "attributes": {
                    "previews": [
                        {
                            "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/12/43/d8/1243d8b6-22a6-790b-e291-d29efd865705/mzaf_17305454251054227244.plus.aac.ep.m4a"
                        }
                    ],
                    "artwork": {
                        "width": 1425,
                        "url": "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/83/31/a7/8331a7c4-82f1-549f-310c-09dba41dff9d/075679945631.jpg/{w}x{h}bb.jpg",
                        "height": 1425,
                        "textColor3": "c8ac99",
                        "textColor2": "e6a483",
                        "textColor4": "c0876c",
                        "textColor1": "efd2bb",
                        "bgColor": "2c1410",
                        "hasP3": false
                    },
                    "artistName": "Omarion",
                    "url": "https://music.apple.com/us/album/post-to-be-feat-chris-brown-jhene-aiko/942089565?i=942089571",
                    "discNumber": 1,
                    "genreNames": [
                        "R&B/Soul",
                        "Music"
                    ],
                    "hasTimeSyncedLyrics": true,
                    "isMasteredForItunes": false,
                    "durationInMillis": 226581,
                    "releaseDate": "2014-11-11",
                    "isAppleDigitalMaster": false,
                    "name": "Post To Be (feat. Chris Brown & Jhene Aiko)",
                    "isrc": "USAT21404847",
                    "audioTraits": [
                        "lossy-stereo",
                        "lossless"
                    ],
                    "hasLyrics": true,
                    "albumName": "Sex Playlist",
                    "playParams": {
                        "id": "942089571",
                        "kind": "song"
                    },
                    "trackNumber": 2,
                    "audioLocale": "en-US",
                    "composerName": "Bobby Joseph Turner, Jr., Christopher Brown, Dijon McFarlane, Everton Bonner, Jhene Aiko Chilombo, Jhené Aiko, John Taylor, Lloyd Willis, Lowell Dunbar, Micah Evan Powell, Mikely Adam, Omarion & Samuel Jean",
                    "contentRating": "explicit"
                }
            },
            "1011549366": {
                "id": "1011549366",
                "type": "songs",
                "href": "/v1/catalog/us/songs/1011549366?l=en-US",
                "attributes": {
                    "previews": [
                        {
                            "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/e6/eb/49/e6eb49bf-7014-b47a-5456-85bb5d058e18/mzaf_7686961432926944389.plus.aac.ep.m4a"
                        }
                    ],
                    "artwork": {
                        "width": 1425,
                        "url": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/a6/16/25/a6162590-4434-40bf-6390-6e3df46c7bbe/075679923578.jpg/{w}x{h}bb.jpg",
                        "height": 1425,
                        "textColor3": "e4b9a5",
                        "textColor2": "e2cdb3",
                        "textColor4": "d9a793",
                        "textColor1": "f0e3c9",
                        "bgColor": "b51113",
                        "hasP3": false
                    },
                    "artistName": "Meek Mill",
                    "url": "https://music.apple.com/us/album/all-eyes-on-you-feat-chris-brown-nicki-minaj/1011549230?i=1011549366",
                    "discNumber": 1,
                    "genreNames": [
                        "Hip-Hop/Rap",
                        "Music"
                    ],
                    "hasTimeSyncedLyrics": true,
                    "isMasteredForItunes": true,
                    "durationInMillis": 223975,
                    "releaseDate": "2015-06-26",
                    "isAppleDigitalMaster": true,
                    "name": "All Eyes On You (feat. Chris Brown & Nicki Minaj)",
                    "isrc": "USAT21501576",
                    "audioTraits": [
                        "lossy-stereo",
                        "lossless",
                        "atmos",
                        "spatial"
                    ],
                    "hasLyrics": true,
                    "albumName": "Dreams Worth More Than Money",
                    "playParams": {
                        "id": "1011549366",
                        "kind": "song"
                    },
                    "trackNumber": 4,
                    "audioLocale": "en-US",
                    "composerName": "Alexander Joseph Delicata, Andre Davidson, Anthony Henderson, Byron Mccane, Chris Brown, Christopher Wallace, DJ Khaled, Daniel Morris, Kevin Cossom, Meek Mill, Nicki Minaj, Sean \"Puffy\" Combs, Sean Winston Davidson, Steven Howse & Steven Jordan",
                    "contentRating": "explicit"
                }
            },
            "1059869490": {
                "id": "1059869490",
                "type": "songs",
                "href": "/v1/catalog/us/songs/1059869490?l=en-US",
                "attributes": {
                    "previews": [
                        {
                            "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/bf/ba/5c/bfba5cd3-6f2e-f4c3-40f0-e724dfa42ab8/mzaf_6269716520774775221.plus.aac.ep.m4a"
                        }
                    ],
                    "artwork": {
                        "width": 1500,
                        "url": "https://is4-ssl.mzstatic.com/image/thumb/Music71/v4/0b/4b/6f/0b4b6fc8-8231-dbfd-49d3-a92bb95d0f24/mzm.nsulprvx.jpg/{w}x{h}bb.jpg",
                        "height": 1500,
                        "textColor3": "e1e1e0",
                        "textColor2": "f0f0f0",
                        "textColor4": "d5d5d5",
                        "textColor1": "fefefe",
                        "bgColor": "6c6b69",
                        "hasP3": false
                    },
                    "artistName": "Chris Brown",
                    "url": "https://music.apple.com/us/album/back-to-sleep/1059869479?i=1059869490",
                    "discNumber": 1,
                    "genreNames": [
                        "R&B/Soul",
                        "Music"
                    ],
                    "hasTimeSyncedLyrics": true,
                    "isMasteredForItunes": true,
                    "durationInMillis": 201266,
                    "releaseDate": "2015-11-09",
                    "isAppleDigitalMaster": true,
                    "name": "Back to Sleep",
                    "isrc": "USRC11502944",
                    "audioTraits": [
                        "lossy-stereo",
                        "lossless"
                    ],
                    "hasLyrics": true,
                    "albumName": "Royalty (Deluxe Version)",
                    "playParams": {
                        "id": "1059869490",
                        "kind": "song"
                    },
                    "trackNumber": 1,
                    "audioLocale": "en-US",
                    "composerName": "Chris Brown, August Rigo, ANDERSON HERNANDEZ, Allen Ritter & Matthew Samuels",
                    "contentRating": "explicit"
                }
            },
            "1127989702": {
                "id": "1127989702",
                "type": "songs",
                "href": "/v1/catalog/us/songs/1127989702?l=en-US",
                "attributes": {
                    "previews": [
                        {
                            "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/e5/41/c3/e541c32b-d06c-1b38-c51d-cd6b6999296a/mzaf_11340440039454941380.plus.aac.ep.m4a"
                        }
                    ],
                    "artwork": {
                        "width": 1500,
                        "url": "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/02/f6/9e/02f69e64-9f7b-8c15-c0a4-4dec2860fb44/886445975833.jpg/{w}x{h}bb.jpg",
                        "height": 1500,
                        "textColor3": "d0d0d0",
                        "textColor2": "fbede4",
                        "textColor4": "cdc2ba",
                        "textColor1": "ffffff",
                        "bgColor": "151515",
                        "hasP3": false
                    },
                    "artistName": "DJ Khaled",
                    "url": "https://music.apple.com/us/album/do-you-mind-feat-nicki-minaj-chris-brown-august-alsina/1127989414?i=1127989702",
                    "discNumber": 1,
                    "genreNames": [
                        "Hip-Hop/Rap",
                        "Music"
                    ],
                    "hasTimeSyncedLyrics": true,
                    "isMasteredForItunes": false,
                    "durationInMillis": 325615,
                    "releaseDate": "2016-07-29",
                    "isAppleDigitalMaster": false,
                    "name": "Do You Mind (feat. Nicki Minaj, Chris Brown, August Alsina, Jeremih, Future & Rick Ross)",
                    "isrc": "USSM11605482",
                    "audioTraits": [
                        "lossy-stereo",
                        "lossless"
                    ],
                    "hasLyrics": true,
                    "albumName": "Major Key",
                    "playParams": {
                        "id": "1127989702",
                        "kind": "song"
                    },
                    "trackNumber": 7,
                    "audioLocale": "en-US",
                    "composerName": "Chris Brown, August Alsina, DJ Khaled, Onika Maraj, Jeremy Felton, Nayvadius Wilburn, William Roberts, Kevin Cossom, Sean McMillion, Ralph Jeanty, Johnny Mollings, Lenny Mollings & Michael Tyrone Johnson",
                    "contentRating": "explicit"
                }
            },
            "1258268652": {
                "id": "1258268652",
                "type": "songs",
                "href": "/v1/catalog/us/songs/1258268652?l=en-US",
                "attributes": {
                    "previews": [
                        {
                            "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/65/c2/a6/65c2a66f-113b-618a-ba85-85b9d5fe1b16/mzaf_1354123241336423425.plus.aac.ep.m4a"
                        }
                    ],
                    "artwork": {
                        "width": 1425,
                        "url": "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/b0/b8/ed/b0b8ede1-8c79-97bb-9da4-417322137e3a/075679893802.jpg/{w}x{h}bb.jpg",
                        "height": 1425,
                        "textColor3": "c6d0d1",
                        "textColor2": "f6f1dd",
                        "textColor4": "c9c5b6",
                        "textColor1": "f3ffff",
                        "bgColor": "15181d",
                        "hasP3": false
                    },
                    "artistName": "Meek Mill",
                    "url": "https://music.apple.com/us/album/whatever-you-need-feat-chris-brown-ty-dolla-%24ign/1258267771?i=1258268652",
                    "discNumber": 1,
                    "genreNames": [
                        "Hip-Hop/Rap",
                        "Music"
                    ],
                    "hasTimeSyncedLyrics": true,
                    "isMasteredForItunes": false,
                    "durationInMillis": 205373,
                    "releaseDate": "2017-06-01",
                    "isAppleDigitalMaster": false,
                    "name": "Whatever You Need (feat. Chris Brown & Ty Dolla $ign)",
                    "isrc": "USAT21701415",
                    "audioTraits": [
                        "lossy-stereo",
                        "lossless",
                        "atmos",
                        "spatial"
                    ],
                    "hasLyrics": true,
                    "albumName": "Wins & Losses",
                    "playParams": {
                        "id": "1258268652",
                        "kind": "song"
                    },
                    "trackNumber": 4,
                    "audioLocale": "en-US",
                    "composerName": "Arin Ray, Carl Wheeler, Christian Ward, D'Wayne Wiggins, James Royo, Meek Mill, Mustard, Rance Dopson & Tyrone Griffin",
                    "contentRating": "explicit"
                }
            },
            "1293916706": {
                "id": "1293916706",
                "type": "songs",
                "href": "/v1/catalog/us/songs/1293916706?l=en-US",
                "attributes": {
                    "previews": [
                        {
                            "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/ea/a1/21/eaa1217e-3dd7-1d38-fa3b-328ca759b090/mzaf_4708157442576560273.plus.aac.ep.m4a"
                        }
                    ],
                    "artwork": {
                        "width": 1500,
                        "url": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/0e/79/86/0e798631-1a91-4a73-9db6-80d87c7e550b/886446781471.jpg/{w}x{h}bb.jpg",
                        "height": 1500,
                        "textColor3": "b070a2",
                        "textColor2": "de71b0",
                        "textColor4": "b25a8d",
                        "textColor1": "dc8dcb",
                        "bgColor": "000000",
                        "hasP3": false
                    },
                    "artistName": "Chris Brown",
                    "url": "https://music.apple.com/us/album/tempo/1293916276?i=1293916706",
                    "discNumber": 1,
                    "genreNames": [
                        "R&B/Soul",
                        "Music"
                    ],
                    "hasTimeSyncedLyrics": true,
                    "isMasteredForItunes": true,
                    "durationInMillis": 218744,
                    "releaseDate": "2017-10-20",
                    "isAppleDigitalMaster": true,
                    "name": "Tempo",
                    "isrc": "USRC11702701",
                    "audioTraits": [
                        "lossy-stereo",
                        "lossless",
                        "atmos",
                        "spatial"
                    ],
                    "hasLyrics": true,
                    "albumName": "Heartbreak on a Full Moon",
                    "playParams": {
                        "id": "1293916706",
                        "kind": "song"
                    },
                    "trackNumber": 9,
                    "audioLocale": "en-US",
                    "composerName": "Chris Brown, Sean Momberger, Lonnie Kimble, Patrizio Pigliapoco & Omari Wade Toure",
                    "contentRating": "explicit"
                }
            },
            "1322718180": {
                "id": "1322718180",
                "type": "songs",
                "href": "/v1/catalog/us/songs/1322718180?l=en-US",
                "attributes": {
                    "previews": [
                        {
                            "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/9a/fa/24/9afa24a7-be31-d03c-a633-f490d7ea8f19/mzaf_6111464982985617847.plus.aac.ep.m4a"
                        }
                    ],
                    "artwork": {
                        "width": 1500,
                        "url": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/88/5f/d4/885fd4b0-0c34-8626-83c8-79c76935b378/886446902074.jpg/{w}x{h}bb.jpg",
                        "height": 1500,
                        "textColor3": "cbaf92",
                        "textColor2": "f17059",
                        "textColor4": "c55e4e",
                        "textColor1": "f8d5ae",
                        "bgColor": "181621",
                        "hasP3": false
                    },
                    "artistName": "Chris Brown",
                    "url": "https://music.apple.com/us/album/privacy/1322715306?i=1322718180",
                    "discNumber": 1,
                    "genreNames": [
                        "R&B/Soul",
                        "Music"
                    ],
                    "hasTimeSyncedLyrics": true,
                    "isMasteredForItunes": true,
                    "durationInMillis": 220964,
                    "releaseDate": "2017-03-24",
                    "isAppleDigitalMaster": true,
                    "name": "Privacy",
                    "isrc": "USRC11700703",
                    "audioTraits": [
                        "lossy-stereo",
                        "lossless",
                        "atmos",
                        "spatial"
                    ],
                    "hasLyrics": true,
                    "albumName": "Heartbreak on a Full Moon (Deluxe Edition): Cuffing Season - 12 Days of Christmas",
                    "playParams": {
                        "id": "1322718180",
                        "kind": "song"
                    },
                    "trackNumber": 14,
                    "audioLocale": "en-US",
                    "composerName": "Chris Brown, DAVID L DOMAN, Jim Stewart & Patrizio Pigliapoco",
                    "contentRating": "explicit"
                }
            },
            "1322719685": {
                "id": "1322719685",
                "type": "songs",
                "href": "/v1/catalog/us/songs/1322719685?l=en-US",
                "attributes": {
                    "previews": [
                        {
                            "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/9c/60/69/9c60691c-8215-b2f5-592d-75ad5887344e/mzaf_15149727090430822906.plus.aac.ep.m4a"
                        }
                    ],
                    "artwork": {
                        "width": 1500,
                        "url": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/88/5f/d4/885fd4b0-0c34-8626-83c8-79c76935b378/886446902074.jpg/{w}x{h}bb.jpg",
                        "height": 1500,
                        "textColor3": "cbaf92",
                        "textColor2": "f17059",
                        "textColor4": "c55e4e",
                        "textColor1": "f8d5ae",
                        "bgColor": "181621",
                        "hasP3": false
                    },
                    "artistName": "Chris Brown",
                    "url": "https://music.apple.com/us/album/party-feat-usher-gucci-mane/1322715306?i=1322719685",
                    "discNumber": 1,
                    "genreNames": [
                        "R&B/Soul",
                        "Music"
                    ],
                    "hasTimeSyncedLyrics": true,
                    "isMasteredForItunes": true,
                    "durationInMillis": 221178,
                    "releaseDate": "2016-12-16",
                    "isAppleDigitalMaster": true,
                    "name": "Party (feat. Usher & Gucci Mane)",
                    "isrc": "USRC11602722",
                    "audioTraits": [
                        "lossy-stereo",
                        "lossless",
                        "atmos",
                        "spatial"
                    ],
                    "hasLyrics": true,
                    "albumName": "Heartbreak on a Full Moon (Deluxe Edition): Cuffing Season - 12 Days of Christmas",
                    "playParams": {
                        "id": "1322719685",
                        "kind": "song"
                    },
                    "trackNumber": 29,
                    "audioLocale": "en-US",
                    "composerName": "Chris Brown, Floyd Bentley, Christopher Dotson, Melvin Moore, Lyrica Anderson, Bobby Joseph Turner, Jr., Radric Davis, Usher Raymond & Barry Bradford",
                    "contentRating": "explicit"
                }
            },
            "1322719822": {
                "id": "1322719822",
                "type": "songs",
                "href": "/v1/catalog/us/songs/1322719822?l=en-US",
                "attributes": {
                    "previews": [
                        {
                            "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/a5/6f/38/a56f38b7-247a-2630-0ce2-42c8c82e0734/mzaf_17824414846206172068.plus.aac.ep.m4a"
                        }
                    ],
                    "artwork": {
                        "width": 1500,
                        "url": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/88/5f/d4/885fd4b0-0c34-8626-83c8-79c76935b378/886446902074.jpg/{w}x{h}bb.jpg",
                        "height": 1500,
                        "textColor3": "cbaf92",
                        "textColor2": "f17059",
                        "textColor4": "c55e4e",
                        "textColor1": "f8d5ae",
                        "bgColor": "181621",
                        "hasP3": false
                    },
                    "artistName": "Chris Brown",
                    "url": "https://music.apple.com/us/album/pills-automobiles-feat-yo-gotti-a-boogie-wit-da/1322715306?i=1322719822",
                    "discNumber": 1,
                    "genreNames": [
                        "R&B/Soul",
                        "Music"
                    ],
                    "hasTimeSyncedLyrics": true,
                    "isMasteredForItunes": true,
                    "durationInMillis": 293435,
                    "releaseDate": "2017-08-04",
                    "isAppleDigitalMaster": true,
                    "name": "Pills & Automobiles (feat. Yo Gotti, A Boogie wit da Hoodie & Kodak Black)",
                    "isrc": "USRC11701962",
                    "audioTraits": [
                        "lossy-stereo",
                        "atmos",
                        "spatial",
                        "lossless"
                    ],
                    "hasLyrics": true,
                    "albumName": "Heartbreak on a Full Moon (Deluxe Edition): Cuffing Season - 12 Days of Christmas",
                    "playParams": {
                        "id": "1322719822",
                        "kind": "song"
                    },
                    "trackNumber": 33,
                    "audioLocale": "en-US",
                    "composerName": "Chris Brown, Joshua Isaih Parker, Samuel David Jiminez, Mario Mims, Julius Dubose, Dieuson Octave & Jordan Hutchins",
                    "contentRating": "explicit"
                }
            },
            "1351005400": {
                "id": "1351005400",
                "type": "songs",
                "href": "/v1/catalog/us/songs/1351005400?l=en-US",
                "attributes": {
                    "previews": [
                        {
                            "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/9e/c6/4b/9ec64b6a-c97d-21a2-623b-e6aee65fbb4e/mzaf_3397676984569543674.plus.aac.ep.m4a"
                        }
                    ],
                    "artwork": {
                        "width": 1500,
                        "url": "https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/71/12/d0/7112d02e-dd6c-5ecb-3c10-793311e6e85d/4050538380699.jpg/{w}x{h}bb.jpg",
                        "height": 1500,
                        "textColor3": "303233",
                        "textColor2": "101113",
                        "textColor4": "3c3e41",
                        "textColor1": "010101",
                        "bgColor": "eef5fb",
                        "hasP3": false
                    },
                    "artistName": "Lil Dicky",
                    "url": "https://music.apple.com/us/album/freaky-friday-feat-chris-brown/1351005381?i=1351005400",
                    "discNumber": 1,
                    "genreNames": [
                        "Hip-Hop/Rap",
                        "Music"
                    ],
                    "hasTimeSyncedLyrics": true,
                    "isMasteredForItunes": true,
                    "durationInMillis": 216632,
                    "releaseDate": "2018-02-27",
                    "isAppleDigitalMaster": true,
                    "name": "Freaky Friday (feat. Chris Brown)",
                    "isrc": "QMRSZ1800283",
                    "audioTraits": [
                        "lossy-stereo",
                        "lossless"
                    ],
                    "hasLyrics": true,
                    "albumName": "Freaky Friday (feat. Chris Brown) - Single",
                    "playParams": {
                        "id": "1351005400",
                        "kind": "song"
                    },
                    "trackNumber": 1,
                    "audioLocale": "en-US",
                    "composerName": "Benjamin Levin, Christopher Brown, David Burd, Dijon McFarlane, Joshua Coleman, Lewis Hughes, Lil Dicky, Magnus August Hoiberg, Nicholas Audino & Wilbart McCoy III",
                    "contentRating": "explicit"
                }
            },
            "1440851763": {
                "id": "1440851763",
                "type": "songs",
                "href": "/v1/catalog/us/songs/1440851763?l=en-US",
                "attributes": {
                    "previews": [
                        {
                            "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/6a/27/25/6a2725e0-2785-c7cf-c7c5-34bb486b1bab/mzaf_10406596554199027098.plus.aac.ep.m4a"
                        }
                    ],
                    "artwork": {
                        "width": 1500,
                        "url": "https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/a1/98/a0/a198a0ae-3fe0-a780-b012-0c20b76bc96d/14UMGIM59293.rgb.jpg/{w}x{h}bb.jpg",
                        "height": 1500,
                        "textColor3": "343532",
                        "textColor2": "370228",
                        "textColor4": "5e3453",
                        "textColor1": "020400",
                        "bgColor": "fcfcfc",
                        "hasP3": false
                    },
                    "artistName": "Nicki Minaj",
                    "url": "https://music.apple.com/us/album/only-feat-drake-lil-wayne-chris-brown/1440851747?i=1440851763",
                    "discNumber": 1,
                    "genreNames": [
                        "Hip-Hop/Rap",
                        "Music"
                    ],
                    "hasTimeSyncedLyrics": true,
                    "isMasteredForItunes": true,
                    "durationInMillis": 312035,
                    "releaseDate": "2014-10-28",
                    "isAppleDigitalMaster": true,
                    "name": "Only (feat. Drake, Lil Wayne & Chris Brown)",
                    "isrc": "USCM51400340",
                    "audioTraits": [
                        "lossy-stereo",
                        "lossless",
                        "atmos",
                        "spatial"
                    ],
                    "hasLyrics": true,
                    "albumName": "The Pinkprint (Bonus Tracks)",
                    "playParams": {
                        "id": "1440851763",
                        "kind": "song"
                    },
                    "trackNumber": 6,
                    "audioLocale": "en-US",
                    "composerName": "Lil Wayne, Onika Maraj, Aubrey Drake Graham, Jeremy Coleman, Lukasz Gottwald, Timothy Thomas, Theron Thomas & Henry Walter",
                    "contentRating": "explicit"
                },
                "meta": {
                    "formerIds": [
                        "947648623",
                        "947935723"
                    ]
                }
            },
            "1466877482": {
                "id": "1466877482",
                "type": "songs",
                "href": "/v1/catalog/us/songs/1466877482?l=en-US",
                "attributes": {
                    "previews": [
                        {
                            "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/47/ae/df/47aedf9b-2738-a543-10dc-aeba7aa270e1/mzaf_1812804498232376888.plus.aac.ep.m4a"
                        }
                    ],
                    "artwork": {
                        "width": 3000,
                        "url": "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/6d/73/b7/6d73b73e-dc59-cb79-8322-39842a57aa93/886447789421.jpg/{w}x{h}bb.jpg",
                        "height": 3000,
                        "textColor3": "b16bc2",
                        "textColor2": "e16c9a",
                        "textColor4": "ba577f",
                        "textColor1": "d685ef",
                        "bgColor": "1d0310",
                        "hasP3": false
                    },
                    "artistName": "Chris Brown",
                    "url": "https://music.apple.com/us/album/heat-feat-gunna/1466876988?i=1466877482",
                    "discNumber": 1,
                    "genreNames": [
                        "R&B/Soul",
                        "Music"
                    ],
                    "hasTimeSyncedLyrics": true,
                    "isMasteredForItunes": true,
                    "durationInMillis": 232727,
                    "releaseDate": "2019-06-20",
                    "isAppleDigitalMaster": true,
                    "name": "Heat (feat. Gunna)",
                    "isrc": "USRC11901581",
                    "audioTraits": [
                        "lossy-stereo",
                        "lossless"
                    ],
                    "hasLyrics": true,
                    "albumName": "Indigo",
                    "playParams": {
                        "id": "1466877482",
                        "kind": "song"
                    },
                    "trackNumber": 10,
                    "audioLocale": "en-US",
                    "composerName": "Chris Brown, Tyron Buddah Douglas, Sr., Aaron Lamont, Keith Thomas, Mark Pitts, Sergio Kitchens & Leshawn S. Rogers",
                    "contentRating": "explicit"
                }
            },
            "1466877495": {
                "id": "1466877495",
                "type": "songs",
                "href": "/v1/catalog/us/songs/1466877495?l=en-US",
                "attributes": {
                    "previews": [
                        {
                            "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/a7/9d/03/a79d030b-9f8b-7407-212a-9336f7a03e68/mzaf_256094519790054351.plus.aac.ep.m4a"
                        }
                    ],
                    "artwork": {
                        "width": 3000,
                        "url": "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/6d/73/b7/6d73b73e-dc59-cb79-8322-39842a57aa93/886447789421.jpg/{w}x{h}bb.jpg",
                        "height": 3000,
                        "textColor3": "b16bc2",
                        "textColor2": "e16c9a",
                        "textColor4": "ba577f",
                        "textColor1": "d685ef",
                        "bgColor": "1d0310",
                        "hasP3": false
                    },
                    "artistName": "Chris Brown",
                    "url": "https://music.apple.com/us/album/no-guidance-feat-drake/1466876988?i=1466877495",
                    "discNumber": 1,
                    "genreNames": [
                        "R&B/Soul",
                        "Music"
                    ],
                    "hasTimeSyncedLyrics": true,
                    "isMasteredForItunes": true,
                    "durationInMillis": 260645,
                    "releaseDate": "2019-06-12",
                    "isAppleDigitalMaster": true,
                    "name": "No Guidance (feat. Drake)",
                    "isrc": "USRC11901583",
                    "audioTraits": [
                        "lossy-stereo",
                        "lossless"
                    ],
                    "hasLyrics": true,
                    "albumName": "Indigo",
                    "playParams": {
                        "id": "1466877495",
                        "kind": "song"
                    },
                    "trackNumber": 11,
                    "audioLocale": "en-US",
                    "composerName": "Chris Brown, Aubrey Drake Graham, ANDERSON HERNANDEZ, Teddy Walton, Noah Shebib, Nija Charles, Tyler James Bryant, Michee Patrick Lebrun, Joshua Huizar & Matthew Samuels",
                    "contentRating": "explicit"
                }
            },
            "1467816528": {
                "id": "1467816528",
                "type": "songs",
                "href": "/v1/catalog/us/songs/1467816528?l=en-US",
                "attributes": {
                    "previews": [
                        {
                            "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/5c/67/ee/5c67ee04-c222-8e40-fe66-3a3c67c97331/mzaf_11132649610704055210.plus.aac.ep.m4a"
                        }
                    ],
                    "artwork": {
                        "width": 3000,
                        "url": "https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/88/7e/8d/887e8d16-a3d3-ac05-39bb-7d1d600000e0/19UMGIM53142.rgb.jpg/{w}x{h}bb.jpg",
                        "height": 3000,
                        "textColor3": "b1abb9",
                        "textColor2": "c1d0c7",
                        "textColor4": "9ca9ac",
                        "textColor1": "dad3d8",
                        "bgColor": "0a0c3d",
                        "hasP3": false
                    },
                    "artistName": "DaniLeigh",
                    "url": "https://music.apple.com/us/album/easy-remix-feat-chris-brown/1467816521?i=1467816528",
                    "discNumber": 1,
                    "genreNames": [
                        "Hip-Hop/Rap",
                        "Music"
                    ],
                    "hasTimeSyncedLyrics": true,
                    "isMasteredForItunes": true,
                    "durationInMillis": 186564,
                    "releaseDate": "2019-05-17",
                    "isAppleDigitalMaster": true,
                    "name": "Easy (Remix) [feat. Chris Brown]",
                    "isrc": "USUM71907371",
                    "audioTraits": [
                        "lossy-stereo",
                        "lossless",
                        "atmos",
                        "spatial"
                    ],
                    "hasLyrics": true,
                    "albumName": "Easy (Remix) [feat. Chris Brown] - Single",
                    "playParams": {
                        "id": "1467816528",
                        "kind": "song"
                    },
                    "trackNumber": 1,
                    "audioLocale": "en-US",
                    "composerName": "Chris Brown, Danielle Curiel, Christopher Allen Clark, Fallon King, Mathias Sorum & Ronald M. Ferebee Jr"
                }
            },
            "1481623884": {
                "id": "1481623884",
                "type": "songs",
                "href": "/v1/catalog/us/songs/1481623884?l=en-US",
                "attributes": {
                    "previews": [
                        {
                            "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/67/79/c6/6779c666-146a-8c38-6038-c1a89e33c24c/mzaf_13197671198586997708.plus.aac.ep.m4a"
                        }
                    ],
                    "artwork": {
                        "width": 3000,
                        "url": "https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/96/1b/c9/961bc949-7e03-2670-f612-72c34ece6a22/886447924464.jpg/{w}x{h}bb.jpg",
                        "height": 3000,
                        "textColor3": "99a9d2",
                        "textColor2": "aec2d7",
                        "textColor4": "8c9db7",
                        "textColor1": "bed1fa",
                        "bgColor": "050936",
                        "hasP3": false
                    },
                    "artistName": "Chris Brown",
                    "url": "https://music.apple.com/us/album/no-guidance-feat-drake/1481623861?i=1481623884",
                    "discNumber": 1,
                    "genreNames": [
                        "R&B/Soul",
                        "Music"
                    ],
                    "hasTimeSyncedLyrics": true,
                    "isMasteredForItunes": true,
                    "durationInMillis": 260645,
                    "releaseDate": "2019-06-12",
                    "isAppleDigitalMaster": true,
                    "name": "No Guidance (feat. Drake)",
                    "isrc": "USRC11901583",
                    "audioTraits": [
                        "lossy-stereo",
                        "atmos",
                        "spatial",
                        "lossless"
                    ],
                    "hasLyrics": true,
                    "albumName": "Indigo (Extended)",
                    "playParams": {
                        "id": "1481623884",
                        "kind": "song"
                    },
                    "trackNumber": 21,
                    "audioLocale": "en-US",
                    "composerName": "Chris Brown, Aubrey Drake Graham, ANDERSON HERNANDEZ, Teddy Walton, Noah Shebib, Nija Charles, Tyler James Bryant, Michee Patrick Lebrun, Joshua Huizar & Matthew Samuels",
                    "contentRating": "explicit"
                }
            },
            "1486710959": {
                "id": "1486710959",
                "type": "songs",
                "href": "/v1/catalog/us/songs/1486710959?l=en-US",
                "attributes": {
                    "previews": [
                        {
                            "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/d7/a4/ad/d7a4ad69-a9dd-33e9-bd81-aae7ece2ad1a/mzaf_5491481590758754213.plus.aac.ep.m4a"
                        }
                    ],
                    "artwork": {
                        "width": 3000,
                        "url": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/d5/5c/4b/d55c4b51-a191-2e6b-04a5-b04867de364c/19UMGIM98546.rgb.jpg/{w}x{h}bb.jpg",
                        "height": 3000,
                        "textColor3": "c178a4",
                        "textColor2": "e47591",
                        "textColor4": "b96076",
                        "textColor1": "ef93ca",
                        "bgColor": "0c0a0b",
                        "hasP3": false
                    },
                    "artistName": "Tory Lanez",
                    "url": "https://music.apple.com/us/album/the-take-feat-chris-brown/1486710711?i=1486710959",
                    "discNumber": 1,
                    "genreNames": [
                        "R&B/Soul",
                        "Music"
                    ],
                    "hasTimeSyncedLyrics": true,
                    "isMasteredForItunes": true,
                    "durationInMillis": 221492,
                    "releaseDate": "2019-11-15",
                    "isAppleDigitalMaster": true,
                    "name": "The Take (feat. Chris Brown)",
                    "isrc": "USUM71922079",
                    "audioTraits": [
                        "lossy-stereo",
                        "lossless",
                        "atmos",
                        "spatial"
                    ],
                    "hasLyrics": true,
                    "albumName": "Chixtape 5",
                    "playParams": {
                        "id": "1486710959",
                        "kind": "song"
                    },
                    "trackNumber": 6,
                    "audioLocale": "en-US",
                    "composerName": "Daystar Peterson, Christopher Brown, Daniel Gonzalez, Sergio Romero, Anthony Woart, Manesh Lad, Aaron Lobban, Lamar Edwards, James Fauntleroy, Harvey Mason, Steven Russell, Damon Thomas & Barrington Wright",
                    "contentRating": "explicit"
                }
            },
            "1511037390": {
                "id": "1511037390",
                "type": "songs",
                "href": "/v1/catalog/us/songs/1511037390?l=en-US",
                "attributes": {
                    "previews": [
                        {
                            "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/d9/49/25/d949252a-ce6d-bdcd-b042-a86d7590fe86/mzaf_17198693303687999308.plus.aac.ep.m4a"
                        }
                    ],
                    "artwork": {
                        "width": 3000,
                        "url": "https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/a7/36/f6/a736f61f-1a51-e955-78b2-9585bd5849cb/20UMGIM34466.rgb.jpg/{w}x{h}bb.jpg",
                        "height": 3000,
                        "textColor3": "ced0cd",
                        "textColor2": "c9b87d",
                        "textColor4": "a49866",
                        "textColor1": "fefefe",
                        "bgColor": "0f1a0a",
                        "hasP3": false
                    },
                    "artistName": "Drake",
                    "url": "https://music.apple.com/us/album/not-you-too-feat-chris-brown/1511037323?i=1511037390",
                    "discNumber": 1,
                    "genreNames": [
                        "Hip-Hop/Rap",
                        "Music"
                    ],
                    "hasTimeSyncedLyrics": true,
                    "isMasteredForItunes": true,
                    "durationInMillis": 269680,
                    "releaseDate": "2020-05-01",
                    "isAppleDigitalMaster": true,
                    "name": "Not You Too (feat. Chris Brown)",
                    "isrc": "USUG12001725",
                    "audioTraits": [
                        "lossy-stereo",
                        "lossless"
                    ],
                    "hasLyrics": true,
                    "albumName": "Dark Lane Demo Tapes",
                    "playParams": {
                        "id": "1511037390",
                        "kind": "song"
                    },
                    "trackNumber": 4,
                    "audioLocale": "en-US",
                    "composerName": "Aubrey Drake Graham & N. Cadastre",
                    "contentRating": "explicit"
                }
            },
            "1512301465": {
                "id": "1512301465",
                "type": "songs",
                "href": "/v1/catalog/us/songs/1512301465?l=en-US",
                "attributes": {
                    "previews": [
                        {
                            "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/84/bd/65/84bd65cf-c8c7-aa81-8d65-3a04e96062ad/mzaf_5725398423844339320.plus.aac.ep.m4a"
                        }
                    ],
                    "artwork": {
                        "width": 3000,
                        "url": "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/81/8e/42/818e4201-66ed-9576-3721-2f6e5bb1be70/886448471837.jpg/{w}x{h}bb.jpg",
                        "height": 3000,
                        "textColor3": "363736",
                        "textColor2": "2e2928",
                        "textColor4": "585453",
                        "textColor1": "040504",
                        "bgColor": "ffffff",
                        "hasP3": false
                    },
                    "artistName": "Chris Brown & Young Thug",
                    "url": "https://music.apple.com/us/album/go-crazy/1512301463?i=1512301465",
                    "discNumber": 1,
                    "genreNames": [
                        "R&B/Soul",
                        "Music"
                    ],
                    "hasTimeSyncedLyrics": true,
                    "isMasteredForItunes": false,
                    "durationInMillis": 176960,
                    "releaseDate": "2020-05-05",
                    "isAppleDigitalMaster": false,
                    "name": "Go Crazy",
                    "isrc": "USRC12001468",
                    "audioTraits": [
                        "lossy-stereo",
                        "lossless",
                        "atmos",
                        "spatial"
                    ],
                    "hasLyrics": true,
                    "albumName": "Slime & B",
                    "playParams": {
                        "id": "1512301465",
                        "kind": "song"
                    },
                    "trackNumber": 2,
                    "audioLocale": "en-US",
                    "composerName": "Chris Brown, Jeffery Lamar Williams, Said Aznou, Dounia Aznou, Johnny Kelvin, Kaniel Castaneda, Cameron Devaun Murphy, Patrizio Pigliapoco, Orville Hall, Phillip Price, Trè Samuels, Turrell Sims, Soraya Benjelloun, Wayne Samuels, Omari Akinlolu & Zakaria Kharbouch",
                    "contentRating": "explicit"
                }
            }
        },
        "albums": {
            "267264811": {
                "id": "267264811",
                "type": "albums",
                "href": "/v1/catalog/us/albums/267264811?l=en-US",
                "attributes": {
                    "artwork": {
                        "width": 1425,
                        "url": "https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/2f/ec/dd/2fecdd59-1ca1-47c1-a945-2969eb0d347b/888880280336.jpg/{w}x{h}bb.jpg",
                        "height": 1425,
                        "textColor3": "b4a854",
                        "textColor2": "cec7cd",
                        "textColor4": "aaa5a9",
                        "textColor1": "dbcc63",
                        "bgColor": "191b18",
                        "hasP3": false
                    },
                    "artistName": "Chris Brown",
                    "isSingle": false,
                    "url": "https://music.apple.com/us/album/exclusive-expanded-edition/267264811",
                    "isComplete": true,
                    "genreNames": [
                        "R&B/Soul",
                        "Music",
                        "Contemporary R&B"
                    ],
                    "trackCount": 18,
                    "isMasteredForItunes": false,
                    "releaseDate": "2007-11-06",
                    "name": "Exclusive (Expanded Edition)",
                    "recordLabel": "Jive",
                    "upc": "888880280336",
                    "audioTraits": [
                        "atmos",
                        "lossless",
                        "lossy-stereo",
                        "spatial"
                    ],
                    "copyright": "℗ 2007 Zomba Recording LLC",
                    "playParams": {
                        "id": "267264811",
                        "kind": "album"
                    },
                    "isCompilation": false,
                    "isPrerelease": false
                }
            },
            "323098604": {
                "id": "323098604",
                "type": "albums",
                "href": "/v1/catalog/us/albums/323098604?l=en-US",
                "attributes": {
                    "artwork": {
                        "width": 1416,
                        "url": "https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/a6/2f/a7/a62fa746-9e76-0789-76b6-919019807d8a/828768451052.jpg/{w}x{h}bb.jpg",
                        "height": 1416,
                        "textColor3": "d1cdce",
                        "textColor2": "c5b5a6",
                        "textColor4": "a79a8d",
                        "textColor1": "faf5f6",
                        "bgColor": "2f2b2c",
                        "hasP3": false
                    },
                    "artistName": "Chris Brown",
                    "isSingle": false,
                    "url": "https://music.apple.com/us/album/chris-brown-expanded-edition/323098604",
                    "isComplete": true,
                    "genreNames": [
                        "R&B/Soul",
                        "Music",
                        "Contemporary R&B"
                    ],
                    "trackCount": 18,
                    "isMasteredForItunes": false,
                    "releaseDate": "2005-11-29",
                    "name": "Chris Brown (Expanded Edition)",
                    "recordLabel": "Jive",
                    "upc": "828768451052",
                    "audioTraits": [
                        "lossless",
                        "lossy-stereo"
                    ],
                    "copyright": "℗ 2006 RCA Records, a division of Sony Music Entertainment",
                    "playParams": {
                        "id": "323098604",
                        "kind": "album"
                    },
                    "isCompilation": false,
                    "isPrerelease": false
                }
            },
            "422045097": {
                "id": "422045097",
                "type": "albums",
                "href": "/v1/catalog/us/albums/422045097?l=en-US",
                "attributes": {
                    "artwork": {
                        "width": 1500,
                        "url": "https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/d4/39/fc/d439fc24-1392-ec40-1ef7-02c9b59d9cd3/884977932539.jpg/{w}x{h}bb.jpg",
                        "height": 1500,
                        "textColor3": "a4a1c1",
                        "textColor2": "e3913c",
                        "textColor4": "bd7939",
                        "textColor1": "c4c3e6",
                        "bgColor": "271a2b",
                        "hasP3": false
                    },
                    "artistName": "Chris Brown",
                    "isSingle": false,
                    "url": "https://music.apple.com/us/album/f-a-m-e-expanded-edition/422045097",
                    "isComplete": true,
                    "genreNames": [
                        "R&B/Soul",
                        "Music"
                    ],
                    "trackCount": 18,
                    "isMasteredForItunes": false,
                    "releaseDate": "2011-03-22",
                    "name": "F.A.M.E. (Expanded Edition)",
                    "recordLabel": "Jive",
                    "upc": "884977932539",
                    "audioTraits": [
                        "lossless",
                        "lossy-stereo"
                    ],
                    "copyright": "℗ 2011 RCA Records, a division of Sony Music Entertainment",
                    "playParams": {
                        "id": "422045097",
                        "kind": "album"
                    },
                    "isCompilation": false,
                    "isPrerelease": false,
                    "contentRating": "explicit"
                }
            },
            "920685975": {
                "id": "920685975",
                "type": "albums",
                "href": "/v1/catalog/us/albums/920685975?l=en-US",
                "attributes": {
                    "artwork": {
                        "width": 1500,
                        "url": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/a3/3a/e3/a33ae3c7-821c-1531-0436-305fcd91f7fe/886444792073.jpg/{w}x{h}bb.jpg",
                        "height": 1500,
                        "textColor3": "c6c6c5",
                        "textColor2": "dbd8d9",
                        "textColor4": "b0afb0",
                        "textColor1": "f6f5f3",
                        "bgColor": "090d0e",
                        "hasP3": false
                    },
                    "artistName": "Chris Brown",
                    "isSingle": false,
                    "url": "https://music.apple.com/us/album/x-expanded-edition/920685975",
                    "isComplete": true,
                    "genreNames": [
                        "R&B/Soul",
                        "Music"
                    ],
                    "trackCount": 22,
                    "isMasteredForItunes": true,
                    "releaseDate": "2014-09-16",
                    "name": "X (Expanded Edition)",
                    "recordLabel": "RCA Records Label",
                    "upc": "886444792073",
                    "audioTraits": [
                        "hi-res-lossless",
                        "lossless",
                        "lossy-stereo"
                    ],
                    "copyright": "℗ 2014 RCA Records, a division of Sony Music Entertainment",
                    "playParams": {
                        "id": "920685975",
                        "kind": "album"
                    },
                    "isCompilation": false,
                    "isPrerelease": false,
                    "contentRating": "explicit"
                }
            },
            "964294743": {
                "id": "964294743",
                "type": "albums",
                "href": "/v1/catalog/us/albums/964294743?l=en-US",
                "attributes": {
                    "artwork": {
                        "width": 1500,
                        "url": "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/5b/90/89/5b908989-9e30-d9e7-4287-e34002eaa878/dj.mbpiaprs.jpg/{w}x{h}bb.jpg",
                        "height": 1500,
                        "textColor3": "c89e26",
                        "textColor2": "eeac29",
                        "textColor4": "c08c24",
                        "textColor1": "f8c22c",
                        "bgColor": "090d0e",
                        "hasP3": false
                    },
                    "artistName": "Chris Brown X Tyga",
                    "isSingle": false,
                    "url": "https://music.apple.com/us/album/fan-of-a-fan-the-album-expanded-edition/964294743",
                    "isComplete": true,
                    "genreNames": [
                        "Hip-Hop/Rap",
                        "Music",
                        "Rap",
                        "R&B/Soul",
                        "Contemporary R&B"
                    ],
                    "trackCount": 16,
                    "isMasteredForItunes": true,
                    "releaseDate": "2015-02-20",
                    "name": "Fan of a Fan the Album (Expanded Edition)",
                    "recordLabel": "RCA Records/Young Money Entertainment/Cash Money Records",
                    "upc": "886445048438",
                    "audioTraits": [
                        "lossless",
                        "lossy-stereo"
                    ],
                    "copyright": "℗ 2015 RCA Records and Young Money Entertainment/Cash Money Records",
                    "playParams": {
                        "id": "964294743",
                        "kind": "album"
                    },
                    "editorialNotes": {
                        "standard": "Chris Brown and Tyga released the mixtape <i>Fan of a Fan</i> in 2010. Since then, their music has often dedicated itself to the pursuit of of wealth and women–such is the dominance of those tropes on this full-album follow-up. The infectious “Ayo” and “Nothin’ Like Me” are the standout bangers, but the pair are at their most engaging with regret thrown into the mix (“Better”) and when the braggadocio becomes less sexualized on the austere, bullish “D.G.I.F.U.”–which features a typically impeccable verse from Pusha T.",
                        "short": "An A-list hook-up with money (and girls) on its mind."
                    },
                    "isCompilation": false,
                    "isPrerelease": false,
                    "contentRating": "explicit"
                }
            },
            "1059791314": {
                "id": "1059791314",
                "type": "albums",
                "href": "/v1/catalog/us/albums/1059791314?l=en-US",
                "attributes": {
                    "artwork": {
                        "width": 1500,
                        "url": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/3e/2b/6d/3e2b6d6e-8edf-71f3-1e64-428d6bbb4dcb/886445462951.jpg/{w}x{h}bb.jpg",
                        "height": 1500,
                        "textColor3": "e1e1e0",
                        "textColor2": "f0f0f0",
                        "textColor4": "d5d5d5",
                        "textColor1": "fefefe",
                        "bgColor": "6c6b69",
                        "hasP3": false
                    },
                    "artistName": "Chris Brown",
                    "isSingle": false,
                    "url": "https://music.apple.com/us/album/royalty-deluxe-version/1059791314",
                    "isComplete": true,
                    "genreNames": [
                        "R&B/Soul",
                        "Music"
                    ],
                    "trackCount": 18,
                    "isMasteredForItunes": true,
                    "releaseDate": "2015-12-18",
                    "name": "Royalty (Deluxe Version)",
                    "recordLabel": "RCA Records Label",
                    "upc": "886445462951",
                    "audioTraits": [
                        "lossless",
                        "lossy-stereo"
                    ],
                    "copyright": "℗ 2015 RCA Records, a division of Sony Music Entertainment",
                    "playParams": {
                        "id": "1059791314",
                        "kind": "album"
                    },
                    "editorialNotes": {
                        "standard": "No matter what life throws at R&B bad boy Chris Brown, he stays focused and confident. His seventh album <i>Royalty</i> gives Team Breezy plenty to obsess over. He keeps the focus on himself—only three guests are featured, Future being one of them (“U Did It”). Music styles like trap, EDM, and G-funk pepper the tracks, thrusting him deeper into the pop jetstream. He confirms his superlover status on “Back to Sleep” and “Little Bit” and estimates how much chill he has on “Zero” and “No Filter.” Like the hero in a samurai flick, Brown artfully fends off the haters and returns the love.",
                        "short": "Breezy immerses himself deeper into R&B and EDM on his seventh album."
                    },
                    "isCompilation": false,
                    "isPrerelease": false,
                    "contentRating": "clean"
                }
            },
            "1059869479": {
                "id": "1059869479",
                "type": "albums",
                "href": "/v1/catalog/us/albums/1059869479?l=en-US",
                "attributes": {
                    "artwork": {
                        "width": 1500,
                        "url": "https://is4-ssl.mzstatic.com/image/thumb/Music71/v4/0b/4b/6f/0b4b6fc8-8231-dbfd-49d3-a92bb95d0f24/mzm.nsulprvx.jpg/{w}x{h}bb.jpg",
                        "height": 1500,
                        "textColor3": "e1e1e0",
                        "textColor2": "f0f0f0",
                        "textColor4": "d5d5d5",
                        "textColor1": "fefefe",
                        "bgColor": "6c6b69",
                        "hasP3": false
                    },
                    "artistName": "Chris Brown",
                    "isSingle": false,
                    "url": "https://music.apple.com/us/album/royalty-deluxe-version/1059869479",
                    "isComplete": true,
                    "genreNames": [
                        "R&B/Soul",
                        "Music"
                    ],
                    "trackCount": 18,
                    "isMasteredForItunes": true,
                    "releaseDate": "2015-12-18",
                    "name": "Royalty (Deluxe Version)",
                    "recordLabel": "RCA Records Label",
                    "upc": "886445462944",
                    "audioTraits": [
                        "lossless",
                        "lossy-stereo"
                    ],
                    "copyright": "℗ 2015 RCA Records, a division of Sony Music Entertainment",
                    "playParams": {
                        "id": "1059869479",
                        "kind": "album"
                    },
                    "editorialNotes": {
                        "standard": "No matter what life throws at R&B bad boy Chris Brown, he stays focused and confident. His seventh album <i>Royalty</i> gives Team Breezy plenty to obsess over. He keeps the focus on himself—only three guests are featured, Future being one of them (“U Did It”). Music styles like trap, EDM, and G-funk pepper the tracks, thrusting him deeper into the pop jet stream. He confirms his super lover status on “Back to Sleep” and “Little Bit” and estimates how much chill he has on “Zero” and “No Filter.” Like the hero in a samurai flick, Brown artfully fends off the haters and returns the love.",
                        "short": "Breezy immerses himself deeper into R&B and EDM on his seventh album.\n"
                    },
                    "isCompilation": false,
                    "isPrerelease": false,
                    "contentRating": "explicit"
                }
            },
            "1293916276": {
                "id": "1293916276",
                "type": "albums",
                "href": "/v1/catalog/us/albums/1293916276?l=en-US",
                "attributes": {
                    "artwork": {
                        "width": 1500,
                        "url": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/0e/79/86/0e798631-1a91-4a73-9db6-80d87c7e550b/886446781471.jpg/{w}x{h}bb.jpg",
                        "height": 1500,
                        "textColor3": "b070a2",
                        "textColor2": "de71b0",
                        "textColor4": "b25a8d",
                        "textColor1": "dc8dcb",
                        "bgColor": "000000",
                        "hasP3": false
                    },
                    "artistName": "Chris Brown",
                    "isSingle": false,
                    "url": "https://music.apple.com/us/album/heartbreak-on-a-full-moon/1293916276",
                    "isComplete": true,
                    "genreNames": [
                        "R&B/Soul",
                        "Music",
                        "Rock",
                        "Contemporary R&B",
                        "Hip-Hop/Rap"
                    ],
                    "trackCount": 45,
                    "isMasteredForItunes": true,
                    "releaseDate": "2017-10-31",
                    "name": "Heartbreak on a Full Moon",
                    "recordLabel": "RCA Records Label",
                    "upc": "886446781471",
                    "audioTraits": [
                        "atmos",
                        "lossless",
                        "lossy-stereo",
                        "spatial"
                    ],
                    "copyright": "℗ 2017 RCA Records, a division of Sony Music Entertainment",
                    "playParams": {
                        "id": "1293916276",
                        "kind": "album"
                    },
                    "editorialNotes": {
                        "short": "Forty-five tracks spanning every Breezy era so far."
                    },
                    "isCompilation": false,
                    "isPrerelease": false,
                    "contentRating": "explicit"
                }
            },
            "1294796855": {
                "id": "1294796855",
                "type": "albums",
                "href": "/v1/catalog/us/albums/1294796855?l=en-US",
                "attributes": {
                    "artwork": {
                        "width": 1500,
                        "url": "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/db/26/fa/db26fa10-a0c7-d2b3-e994-d35c25b519b0/886446805306.jpg/{w}x{h}bb.jpg",
                        "height": 1500,
                        "textColor3": "b070a2",
                        "textColor2": "de71b0",
                        "textColor4": "b25a8d",
                        "textColor1": "dc8dcb",
                        "bgColor": "000000",
                        "hasP3": false
                    },
                    "artistName": "Chris Brown",
                    "isSingle": false,
                    "url": "https://music.apple.com/us/album/heartbreak-on-a-full-moon/1294796855",
                    "isComplete": true,
                    "genreNames": [
                        "R&B/Soul",
                        "Music",
                        "Contemporary R&B",
                        "Hip-Hop/Rap",
                        "Rock"
                    ],
                    "trackCount": 45,
                    "isMasteredForItunes": true,
                    "releaseDate": "2017-10-31",
                    "name": "Heartbreak on a Full Moon",
                    "recordLabel": "RCA Records Label",
                    "upc": "886446805306",
                    "audioTraits": [
                        "lossless",
                        "lossy-stereo"
                    ],
                    "copyright": "℗ 2017 RCA Records, a division of Sony Music Entertainment",
                    "playParams": {
                        "id": "1294796855",
                        "kind": "album"
                    },
                    "isCompilation": false,
                    "isPrerelease": false,
                    "contentRating": "clean"
                }
            },
            "1322715306": {
                "id": "1322715306",
                "type": "albums",
                "href": "/v1/catalog/us/albums/1322715306?l=en-US",
                "attributes": {
                    "artwork": {
                        "width": 1500,
                        "url": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/88/5f/d4/885fd4b0-0c34-8626-83c8-79c76935b378/886446902074.jpg/{w}x{h}bb.jpg",
                        "height": 1500,
                        "textColor3": "cbaf92",
                        "textColor2": "f17059",
                        "textColor4": "c55e4e",
                        "textColor1": "f8d5ae",
                        "bgColor": "181621",
                        "hasP3": false
                    },
                    "artistName": "Chris Brown",
                    "isSingle": false,
                    "url": "https://music.apple.com/us/album/heartbreak-on-a-full-moon-deluxe-edition-cuffing/1322715306",
                    "isComplete": true,
                    "genreNames": [
                        "R&B/Soul",
                        "Music"
                    ],
                    "trackCount": 57,
                    "isMasteredForItunes": true,
                    "releaseDate": "2017-10-31",
                    "name": "Heartbreak on a Full Moon (Deluxe Edition): Cuffing Season - 12 Days of Christmas",
                    "recordLabel": "RCA Records Label",
                    "upc": "886446902074",
                    "audioTraits": [
                        "atmos",
                        "lossless",
                        "lossy-stereo",
                        "spatial"
                    ],
                    "copyright": "℗ 2017 RCA Records, a division of Sony Music Entertainment",
                    "playParams": {
                        "id": "1322715306",
                        "kind": "album"
                    },
                    "isCompilation": false,
                    "isPrerelease": false,
                    "contentRating": "explicit"
                }
            },
            "1445317096": {
                "id": "1445317096",
                "type": "albums",
                "href": "/v1/catalog/us/albums/1445317096?l=en-US",
                "attributes": {
                    "artwork": {
                        "width": 1500,
                        "url": "https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/0f/b4/10/0fb410b2-52cc-0db7-8164-be5750451bc0/00602527308166.rgb.jpg/{w}x{h}bb.jpg",
                        "height": 1500,
                        "textColor3": "cec9cb",
                        "textColor2": "f3d6db",
                        "textColor4": "c7afb3",
                        "textColor1": "fbf6fa",
                        "bgColor": "1a1511",
                        "hasP3": false
                    },
                    "artistName": "Juelz Santana",
                    "isSingle": true,
                    "url": "https://music.apple.com/us/album/back-to-the-crib-feat-chris-brown-single/1445317096",
                    "isComplete": true,
                    "genreNames": [
                        "Hip-Hop/Rap",
                        "Music",
                        "Rap"
                    ],
                    "trackCount": 1,
                    "isMasteredForItunes": false,
                    "releaseDate": "2009-01-01",
                    "name": "Back to the Crib (feat. Chris Brown) - Single",
                    "recordLabel": "Juelz Santana / IDJ",
                    "upc": "00602527308166",
                    "audioTraits": [
                        "lossless",
                        "lossy-stereo"
                    ],
                    "copyright": "℗ 2009 The Island Def Jam Music Group",
                    "playParams": {
                        "id": "1445317096",
                        "kind": "album"
                    },
                    "isCompilation": false,
                    "isPrerelease": false
                }
            },
            "1456143496": {
                "id": "1456143496",
                "type": "albums",
                "href": "/v1/catalog/us/albums/1456143496?l=en-US",
                "attributes": {
                    "artwork": {
                        "width": 1500,
                        "url": "https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/87/c5/29/87c529c5-3da4-0c53-ff67-1dae41da5194/886443538733.jpg/{w}x{h}bb.jpg",
                        "height": 1500,
                        "textColor3": "c9c5da",
                        "textColor2": "d5cbec",
                        "textColor4": "b5abd1",
                        "textColor1": "eeecf8",
                        "bgColor": "322966",
                        "hasP3": false
                    },
                    "artistName": "Chris Brown",
                    "isSingle": false,
                    "url": "https://music.apple.com/us/album/fortune-expanded-edition/1456143496",
                    "isComplete": true,
                    "genreNames": [
                        "R&B/Soul",
                        "Music"
                    ],
                    "trackCount": 22,
                    "isMasteredForItunes": false,
                    "releaseDate": "2012-06-29",
                    "name": "Fortune (Expanded Edition)",
                    "recordLabel": "RCA Records Label",
                    "upc": "886443538733",
                    "audioTraits": [
                        "lossless",
                        "lossy-stereo"
                    ],
                    "copyright": "℗ 2012 RCA Records, a division of Sony Music Entertainment",
                    "playParams": {
                        "id": "1456143496",
                        "kind": "album"
                    },
                    "isCompilation": false,
                    "isPrerelease": false,
                    "contentRating": "explicit"
                }
            },
            "1457080075": {
                "id": "1457080075",
                "type": "albums",
                "href": "/v1/catalog/us/albums/1457080075?l=en-US",
                "attributes": {
                    "artwork": {
                        "width": 3000,
                        "url": "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/65/fb/ae/65fbae5f-59c3-6428-2063-07c89aefc597/886447630686.jpg/{w}x{h}bb.jpg",
                        "height": 3000,
                        "textColor3": "bebfc7",
                        "textColor2": "b6d6e3",
                        "textColor4": "96b2be",
                        "textColor1": "e8e7ee",
                        "bgColor": "16202a",
                        "hasP3": false
                    },
                    "artistName": "Chris Brown",
                    "isSingle": false,
                    "url": "https://music.apple.com/us/album/graffiti-expanded-edition/1457080075",
                    "isComplete": true,
                    "genreNames": [
                        "R&B/Soul",
                        "Music"
                    ],
                    "trackCount": 21,
                    "isMasteredForItunes": false,
                    "releaseDate": "2009-12-07",
                    "name": "Graffiti (Expanded Edition)",
                    "recordLabel": "Jive",
                    "upc": "886447630686",
                    "audioTraits": [
                        "lossless",
                        "lossy-stereo"
                    ],
                    "copyright": "℗ 2009 RCA Records, a division of Sony Music Entertainment",
                    "playParams": {
                        "id": "1457080075",
                        "kind": "album"
                    },
                    "isCompilation": false,
                    "isPrerelease": false
                }
            },
            "1466874457": {
                "id": "1466874457",
                "type": "albums",
                "href": "/v1/catalog/us/albums/1466874457?l=en-US",
                "attributes": {
                    "artwork": {
                        "width": 3000,
                        "url": "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/4e/50/00/4e5000c2-29fb-f898-b9c4-b6891008c282/886447789438.jpg/{w}x{h}bb.jpg",
                        "height": 3000,
                        "textColor3": "b16bc2",
                        "textColor2": "e16c9a",
                        "textColor4": "ba577f",
                        "textColor1": "d685ef",
                        "bgColor": "1d0310",
                        "hasP3": false
                    },
                    "artistName": "Chris Brown",
                    "isSingle": false,
                    "url": "https://music.apple.com/us/album/indigo/1466874457",
                    "isComplete": true,
                    "genreNames": [
                        "R&B/Soul",
                        "Music"
                    ],
                    "trackCount": 32,
                    "isMasteredForItunes": true,
                    "releaseDate": "2019-06-28",
                    "name": "Indigo",
                    "recordLabel": "Chris Brown Entertainment/RCA Records",
                    "upc": "886447789438",
                    "audioTraits": [
                        "lossless",
                        "lossy-stereo"
                    ],
                    "copyright": "℗ 2019 Chris Brown Entertainment, LLC, under exclusive license to RCA Records.",
                    "playParams": {
                        "id": "1466874457",
                        "kind": "album"
                    },
                    "isCompilation": false,
                    "isPrerelease": false,
                    "contentRating": "clean"
                }
            },
            "1466876988": {
                "id": "1466876988",
                "type": "albums",
                "href": "/v1/catalog/us/albums/1466876988?l=en-US",
                "attributes": {
                    "artwork": {
                        "width": 3000,
                        "url": "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/6d/73/b7/6d73b73e-dc59-cb79-8322-39842a57aa93/886447789421.jpg/{w}x{h}bb.jpg",
                        "height": 3000,
                        "textColor3": "b16bc2",
                        "textColor2": "e16c9a",
                        "textColor4": "ba577f",
                        "textColor1": "d685ef",
                        "bgColor": "1d0310",
                        "hasP3": false
                    },
                    "artistName": "Chris Brown",
                    "isSingle": false,
                    "url": "https://music.apple.com/us/album/indigo/1466876988",
                    "isComplete": true,
                    "genreNames": [
                        "R&B/Soul",
                        "Music"
                    ],
                    "trackCount": 32,
                    "isMasteredForItunes": true,
                    "releaseDate": "2019-06-28",
                    "name": "Indigo",
                    "recordLabel": "Chris Brown Entertainment/RCA Records",
                    "upc": "886447789421",
                    "audioTraits": [
                        "lossless",
                        "lossy-stereo"
                    ],
                    "copyright": "℗ 2019 Chris Brown Entertainment, LLC, under exclusive license to RCA Records.",
                    "playParams": {
                        "id": "1466876988",
                        "kind": "album"
                    },
                    "isCompilation": false,
                    "isPrerelease": false,
                    "contentRating": "explicit"
                }
            },
            "1467816521": {
                "id": "1467816521",
                "type": "albums",
                "href": "/v1/catalog/us/albums/1467816521?l=en-US",
                "attributes": {
                    "artwork": {
                        "width": 3000,
                        "url": "https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/88/7e/8d/887e8d16-a3d3-ac05-39bb-7d1d600000e0/19UMGIM53142.rgb.jpg/{w}x{h}bb.jpg",
                        "height": 3000,
                        "textColor3": "b1abb9",
                        "textColor2": "c1d0c7",
                        "textColor4": "9ca9ac",
                        "textColor1": "dad3d8",
                        "bgColor": "0a0c3d",
                        "hasP3": false
                    },
                    "artistName": "DaniLeigh",
                    "isSingle": true,
                    "url": "https://music.apple.com/us/album/easy-remix-feat-chris-brown-single/1467816521",
                    "isComplete": true,
                    "genreNames": [
                        "Hip-Hop/Rap",
                        "Music"
                    ],
                    "trackCount": 1,
                    "isMasteredForItunes": true,
                    "releaseDate": "2019-05-31",
                    "name": "Easy (Remix) [feat. Chris Brown] - Single",
                    "recordLabel": "Def Jam Recordings",
                    "upc": "00602508001413",
                    "audioTraits": [
                        "atmos",
                        "lossless",
                        "lossy-stereo",
                        "spatial"
                    ],
                    "copyright": "℗ 2019 Def Jam Recordings, a division of UMG Recordings, Inc.",
                    "playParams": {
                        "id": "1467816521",
                        "kind": "album"
                    },
                    "isCompilation": false,
                    "isPrerelease": false
                }
            },
            "1481598822": {
                "id": "1481598822",
                "type": "albums",
                "href": "/v1/catalog/us/albums/1481598822?l=en-US",
                "attributes": {
                    "artwork": {
                        "width": 3000,
                        "url": "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/62/7c/ac/627cac79-3693-dd16-6466-48950746f527/886447924471.jpg/{w}x{h}bb.jpg",
                        "height": 3000,
                        "textColor3": "99a9d2",
                        "textColor2": "aec2d7",
                        "textColor4": "8c9db7",
                        "textColor1": "bed1fa",
                        "bgColor": "050936",
                        "hasP3": false
                    },
                    "artistName": "Chris Brown",
                    "isSingle": false,
                    "url": "https://music.apple.com/us/album/indigo-extended/1481598822",
                    "isComplete": true,
                    "genreNames": [
                        "R&B/Soul",
                        "Music"
                    ],
                    "trackCount": 42,
                    "isMasteredForItunes": false,
                    "releaseDate": "2019-06-28",
                    "name": "Indigo (Extended)",
                    "recordLabel": "Chris Brown Entertainment/RCA Records",
                    "upc": "886447924471",
                    "audioTraits": [
                        "lossless",
                        "lossy-stereo"
                    ],
                    "copyright": "℗ 2019 RCA Records, a division of Sony Music Entertainment",
                    "playParams": {
                        "id": "1481598822",
                        "kind": "album"
                    },
                    "isCompilation": false,
                    "isPrerelease": false,
                    "contentRating": "clean"
                }
            },
            "1481623861": {
                "id": "1481623861",
                "type": "albums",
                "href": "/v1/catalog/us/albums/1481623861?l=en-US",
                "attributes": {
                    "artwork": {
                        "width": 3000,
                        "url": "https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/96/1b/c9/961bc949-7e03-2670-f612-72c34ece6a22/886447924464.jpg/{w}x{h}bb.jpg",
                        "height": 3000,
                        "textColor3": "99a9d2",
                        "textColor2": "aec2d7",
                        "textColor4": "8c9db7",
                        "textColor1": "bed1fa",
                        "bgColor": "050936",
                        "hasP3": false
                    },
                    "artistName": "Chris Brown",
                    "isSingle": false,
                    "url": "https://music.apple.com/us/album/indigo-extended/1481623861",
                    "isComplete": true,
                    "genreNames": [
                        "R&B/Soul",
                        "Music"
                    ],
                    "trackCount": 42,
                    "isMasteredForItunes": true,
                    "releaseDate": "2019-06-28",
                    "name": "Indigo (Extended)",
                    "recordLabel": "Chris Brown Entertainment/RCA Records",
                    "upc": "886447924464",
                    "audioTraits": [
                        "lossless",
                        "lossy-stereo"
                    ],
                    "copyright": "℗ 2019 RCA Records, a division of Sony Music Entertainment",
                    "playParams": {
                        "id": "1481623861",
                        "kind": "album"
                    },
                    "isCompilation": false,
                    "isPrerelease": false,
                    "contentRating": "explicit"
                }
            },
            "1495406674": {
                "id": "1495406674",
                "type": "albums",
                "href": "/v1/catalog/us/albums/1495406674?l=en-US",
                "attributes": {
                    "artwork": {
                        "width": 3000,
                        "url": "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/87/66/f9/8766f98b-f0b9-978c-becd-eeb226c5ead7/886448244912.jpg/{w}x{h}bb.jpg",
                        "height": 3000,
                        "textColor3": "33302b",
                        "textColor2": "332f2b",
                        "textColor4": "5c564d",
                        "textColor1": "000000",
                        "bgColor": "fff1d7",
                        "hasP3": false
                    },
                    "artistName": "GASHI",
                    "isSingle": true,
                    "url": "https://music.apple.com/us/album/safety-2020-feat-dj-snake-chris-brown-afro-b-single/1495406674",
                    "isComplete": true,
                    "genreNames": [
                        "Hip-Hop/Rap",
                        "Music"
                    ],
                    "trackCount": 1,
                    "isMasteredForItunes": false,
                    "releaseDate": "2020-01-24",
                    "name": "Safety 2020 (feat. DJ Snake, Chris Brown & Afro B) - Single",
                    "recordLabel": "Honesty Saves Time/RCA Records",
                    "upc": "886448244912",
                    "audioTraits": [
                        "lossless",
                        "lossy-stereo"
                    ],
                    "copyright": "℗ 2020 RCA Records, a division of Sony Music Entertainment",
                    "playParams": {
                        "id": "1495406674",
                        "kind": "album"
                    },
                    "isCompilation": false,
                    "isPrerelease": false
                }
            },
            "1512301463": {
                "id": "1512301463",
                "type": "albums",
                "href": "/v1/catalog/us/albums/1512301463?l=en-US",
                "attributes": {
                    "artwork": {
                        "width": 3000,
                        "url": "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/81/8e/42/818e4201-66ed-9576-3721-2f6e5bb1be70/886448471837.jpg/{w}x{h}bb.jpg",
                        "height": 3000,
                        "textColor3": "363736",
                        "textColor2": "2e2928",
                        "textColor4": "585453",
                        "textColor1": "040504",
                        "bgColor": "ffffff",
                        "hasP3": false
                    },
                    "artistName": "Chris Brown & Young Thug",
                    "isSingle": false,
                    "url": "https://music.apple.com/us/album/slime-b/1512301463",
                    "isComplete": true,
                    "genreNames": [
                        "R&B/Soul",
                        "Music",
                        "Hip-Hop/Rap",
                        "Dirty South",
                        "Hardcore Rap",
                        "Rap"
                    ],
                    "trackCount": 13,
                    "isMasteredForItunes": false,
                    "releaseDate": "2020-05-05",
                    "name": "Slime & B",
                    "recordLabel": "Chris Brown Entertainment/300 Entertainment/RCA Records",
                    "upc": "886448471837",
                    "audioTraits": [
                        "lossless",
                        "lossy-stereo"
                    ],
                    "copyright": "℗ 2020 Chris Brown Entertainment, LLC, under exclusive license to RCA Records",
                    "playParams": {
                        "id": "1512301463",
                        "kind": "album"
                    },
                    "editorialNotes": {
                        "short": "A summery mixtape from a royal rap/R&B alliance."
                    },
                    "isCompilation": false,
                    "isPrerelease": false,
                    "contentRating": "explicit"
                }
            },
            "1512304627": {
                "id": "1512304627",
                "type": "albums",
                "href": "/v1/catalog/us/albums/1512304627?l=en-US",
                "attributes": {
                    "artwork": {
                        "width": 3000,
                        "url": "https://is5-ssl.mzstatic.com/image/thumb/Music113/v4/3d/96/bb/3d96bb5d-202f-6e47-a46e-ea54e5b6587a/886448471851.jpg/{w}x{h}bb.jpg",
                        "height": 3000,
                        "textColor3": "363736",
                        "textColor2": "2e2928",
                        "textColor4": "585453",
                        "textColor1": "040504",
                        "bgColor": "ffffff",
                        "hasP3": false
                    },
                    "artistName": "Chris Brown & Young Thug",
                    "isSingle": false,
                    "url": "https://music.apple.com/us/album/slime-b/1512304627",
                    "isComplete": true,
                    "genreNames": [
                        "R&B/Soul",
                        "Music",
                        "Hip-Hop/Rap",
                        "Dirty South",
                        "Hardcore Rap",
                        "Rap"
                    ],
                    "trackCount": 13,
                    "isMasteredForItunes": false,
                    "releaseDate": "2020-05-05",
                    "name": "Slime & B",
                    "recordLabel": "Chris Brown Entertainment/300 Entertainment/RCA Records",
                    "upc": "886448471851",
                    "audioTraits": [
                        "lossless",
                        "lossy-stereo"
                    ],
                    "copyright": "℗ 2020 Chris Brown Entertainment, LLC, under exclusive license to RCA Records",
                    "playParams": {
                        "id": "1512304627",
                        "kind": "album"
                    },
                    "editorialNotes": {
                        "short": "A summery mixtape from a royal rap/R&B alliance."
                    },
                    "isCompilation": false,
                    "isPrerelease": false,
                    "contentRating": "clean"
                }
            },
            "1631172418": {
                "id": "1631172418",
                "type": "albums",
                "href": "/v1/catalog/us/albums/1631172418?l=en-US",
                "attributes": {
                    "artwork": {
                        "width": 3000,
                        "url": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/b3/54/3c/b3543caa-b127-f202-b8ff-58e8562a5520/196589267825.jpg/{w}x{h}bb.jpg",
                        "height": 3000,
                        "textColor3": "353535",
                        "textColor2": "1f1f1f",
                        "textColor4": "494949",
                        "textColor1": "050505",
                        "bgColor": "f4f4f4",
                        "hasP3": false
                    },
                    "artistName": "Chris Brown",
                    "isSingle": false,
                    "url": "https://music.apple.com/us/album/breezy/1631172418",
                    "isComplete": true,
                    "genreNames": [
                        "R&B/Soul",
                        "Music"
                    ],
                    "trackCount": 24,
                    "isMasteredForItunes": true,
                    "releaseDate": "2022-06-24",
                    "name": "Breezy",
                    "recordLabel": "Chris Brown Entertainment/RCA Records",
                    "upc": "196589267825",
                    "audioTraits": [
                        "atmos",
                        "lossless",
                        "lossy-stereo",
                        "spatial"
                    ],
                    "copyright": "℗ 2022 Chris Brown Entertainment, LLC, under exclusive license to RCA Records",
                    "playParams": {
                        "id": "1631172418",
                        "kind": "album"
                    },
                    "editorialNotes": {
                        "short": "Hear the singer’s highly collaborative tenth album in Spatial Audio. "
                    },
                    "isCompilation": false,
                    "isPrerelease": false,
                    "contentRating": "explicit"
                }
            },
            "1631185747": {
                "id": "1631185747",
                "type": "albums",
                "href": "/v1/catalog/us/albums/1631185747?l=en-US",
                "attributes": {
                    "artwork": {
                        "width": 3000,
                        "url": "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/fa/19/da/fa19da9c-6a3d-987c-02a0-09bdad4d7094/196589201416.jpg/{w}x{h}bb.jpg",
                        "height": 3000,
                        "textColor3": "353535",
                        "textColor2": "1f1f1f",
                        "textColor4": "494949",
                        "textColor1": "050505",
                        "bgColor": "f4f4f4",
                        "hasP3": false
                    },
                    "artistName": "Chris Brown",
                    "isSingle": false,
                    "url": "https://music.apple.com/us/album/breezy/1631185747",
                    "isComplete": true,
                    "genreNames": [
                        "R&B/Soul",
                        "Music"
                    ],
                    "trackCount": 24,
                    "isMasteredForItunes": true,
                    "releaseDate": "2022-06-24",
                    "name": "Breezy",
                    "recordLabel": "Chris Brown Entertainment/RCA Records",
                    "upc": "196589201416",
                    "audioTraits": [
                        "lossless",
                        "lossy-stereo"
                    ],
                    "copyright": "℗ 2022 Chris Brown Entertainment, LLC, under exclusive license to RCA Records",
                    "playParams": {
                        "id": "1631185747",
                        "kind": "album"
                    },
                    "isCompilation": false,
                    "isPrerelease": false,
                    "contentRating": "clean"
                }
            },
            "1633160273": {
                "id": "1633160273",
                "type": "albums",
                "href": "/v1/catalog/us/albums/1633160273?l=en-US",
                "attributes": {
                    "artwork": {
                        "width": 3000,
                        "url": "https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/89/69/0e/89690e05-5083-9c45-8234-da634c5bed9a/196589286413.jpg/{w}x{h}bb.jpg",
                        "height": 3000,
                        "textColor3": "d4d4d4",
                        "textColor2": "ebebeb",
                        "textColor4": "cccccc",
                        "textColor1": "f5f5f5",
                        "bgColor": "505050",
                        "hasP3": false
                    },
                    "artistName": "Chris Brown",
                    "isSingle": false,
                    "url": "https://music.apple.com/us/album/breezy-deluxe/1633160273",
                    "isComplete": true,
                    "genreNames": [
                        "R&B/Soul",
                        "Music"
                    ],
                    "trackCount": 33,
                    "isMasteredForItunes": true,
                    "releaseDate": "2022-06-24",
                    "name": "Breezy (Deluxe)",
                    "recordLabel": "Chris Brown Entertainment/RCA Records",
                    "upc": "196589286413",
                    "audioTraits": [
                        "atmos",
                        "lossless",
                        "lossy-stereo",
                        "spatial"
                    ],
                    "copyright": "℗ 2022 Chris Brown Entertainment, LLC, under exclusive license to RCA Records",
                    "playParams": {
                        "id": "1633160273",
                        "kind": "album"
                    },
                    "isCompilation": false,
                    "isPrerelease": false,
                    "contentRating": "explicit"
                }
            },
            "1633327925": {
                "id": "1633327925",
                "type": "albums",
                "href": "/v1/catalog/us/albums/1633327925?l=en-US",
                "attributes": {
                    "artwork": {
                        "width": 3000,
                        "url": "https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/c7/81/36/c78136d4-b325-764f-a21b-3dead251c3ed/196589286420.jpg/{w}x{h}bb.jpg",
                        "height": 3000,
                        "textColor3": "d4d4d4",
                        "textColor2": "ebebeb",
                        "textColor4": "cccccc",
                        "textColor1": "f5f5f5",
                        "bgColor": "505050",
                        "hasP3": false
                    },
                    "artistName": "Chris Brown",
                    "isSingle": false,
                    "url": "https://music.apple.com/us/album/breezy-deluxe/1633327925",
                    "isComplete": true,
                    "genreNames": [
                        "R&B/Soul",
                        "Music"
                    ],
                    "trackCount": 33,
                    "isMasteredForItunes": true,
                    "releaseDate": "2022-06-24",
                    "name": "Breezy (Deluxe)",
                    "recordLabel": "Chris Brown Entertainment/RCA Records",
                    "upc": "196589286420",
                    "audioTraits": [
                        "lossless",
                        "lossy-stereo"
                    ],
                    "copyright": "℗ 2022 Chris Brown Entertainment, LLC, under exclusive license to RCA Records",
                    "playParams": {
                        "id": "1633327925",
                        "kind": "album"
                    },
                    "isCompilation": false,
                    "isPrerelease": false,
                    "contentRating": "clean"
                }
            }
        },
        "artists": {
            "95705522": {
                "id": "95705522",
                "type": "artists",
                "href": "/v1/catalog/us/artists/95705522?l=en-US",
                "attributes": {
                    "genreNames": [
                        "R&B/Soul"
                    ],
                    "artwork": {
                        "width": 1170,
                        "url": "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/54/ca/43/54ca4321-8c0b-099e-f552-950a40a2a899/pr_source.png/{w}x{h}bb.jpg",
                        "height": 1170,
                        "textColor3": "c98a5b",
                        "textColor2": "eaa669",
                        "textColor4": "bd8755",
                        "textColor1": "f9aa70",
                        "bgColor": "0b0a08",
                        "hasP3": false
                    },
                    "name": "Chris Brown",
                    "url": "https://music.apple.com/us/artist/chris-brown/95705522"
                },
                "relationships": {
                    "albums": {
                        "href": "/v1/catalog/us/artists/95705522/albums?l=en-US",
                        "next": "/v1/catalog/us/artists/95705522/albums?l=en-US&offset=25",
                        "data": [
                            {
                                "id": "1631172418",
                                "type": "albums",
                                "href": "/v1/catalog/us/albums/1631172418?l=en-US"
                            },
                            {
                                "id": "1466876988",
                                "type": "albums",
                                "href": "/v1/catalog/us/albums/1466876988?l=en-US"
                            },
                            {
                                "id": "1293916276",
                                "type": "albums",
                                "href": "/v1/catalog/us/albums/1293916276?l=en-US"
                            },
                            {
                                "id": "1633160273",
                                "type": "albums",
                                "href": "/v1/catalog/us/albums/1633160273?l=en-US"
                            },
                            {
                                "id": "1059869479",
                                "type": "albums",
                                "href": "/v1/catalog/us/albums/1059869479?l=en-US"
                            },
                            {
                                "id": "1512301463",
                                "type": "albums",
                                "href": "/v1/catalog/us/albums/1512301463?l=en-US"
                            },
                            {
                                "id": "323098604",
                                "type": "albums",
                                "href": "/v1/catalog/us/albums/323098604?l=en-US"
                            },
                            {
                                "id": "1481623861",
                                "type": "albums",
                                "href": "/v1/catalog/us/albums/1481623861?l=en-US"
                            },
                            {
                                "id": "267264811",
                                "type": "albums",
                                "href": "/v1/catalog/us/albums/267264811?l=en-US"
                            },
                            {
                                "id": "422045097",
                                "type": "albums",
                                "href": "/v1/catalog/us/albums/422045097?l=en-US"
                            },
                            {
                                "id": "1294796855",
                                "type": "albums",
                                "href": "/v1/catalog/us/albums/1294796855?l=en-US"
                            },
                            {
                                "id": "920685975",
                                "type": "albums",
                                "href": "/v1/catalog/us/albums/920685975?l=en-US"
                            },
                            {
                                "id": "1466874457",
                                "type": "albums",
                                "href": "/v1/catalog/us/albums/1466874457?l=en-US"
                            },
                            {
                                "id": "1322715306",
                                "type": "albums",
                                "href": "/v1/catalog/us/albums/1322715306?l=en-US"
                            },
                            {
                                "id": "1456143496",
                                "type": "albums",
                                "href": "/v1/catalog/us/albums/1456143496?l=en-US"
                            },
                            {
                                "id": "964294743",
                                "type": "albums",
                                "href": "/v1/catalog/us/albums/964294743?l=en-US"
                            },
                            {
                                "id": "1633327925",
                                "type": "albums",
                                "href": "/v1/catalog/us/albums/1633327925?l=en-US"
                            },
                            {
                                "id": "1445317096",
                                "type": "albums",
                                "href": "/v1/catalog/us/albums/1445317096?l=en-US"
                            },
                            {
                                "id": "1457080075",
                                "type": "albums",
                                "href": "/v1/catalog/us/albums/1457080075?l=en-US"
                            },
                            {
                                "id": "1631185747",
                                "type": "albums",
                                "href": "/v1/catalog/us/albums/1631185747?l=en-US"
                            },
                            {
                                "id": "1495406674",
                                "type": "albums",
                                "href": "/v1/catalog/us/albums/1495406674?l=en-US"
                            },
                            {
                                "id": "1467816521",
                                "type": "albums",
                                "href": "/v1/catalog/us/albums/1467816521?l=en-US"
                            },
                            {
                                "id": "1059791314",
                                "type": "albums",
                                "href": "/v1/catalog/us/albums/1059791314?l=en-US"
                            },
                            {
                                "id": "1481598822",
                                "type": "albums",
                                "href": "/v1/catalog/us/albums/1481598822?l=en-US"
                            },
                            {
                                "id": "1512304627",
                                "type": "albums",
                                "href": "/v1/catalog/us/albums/1512304627?l=en-US"
                            }
                        ]
                    }
                },
                "views": {
                    "latest-release": {
                        "href": "/v1/catalog/us/artists/95705522/view/latest-release?l=en-US",
                        "attributes": {
                            "title": "Latest Release"
                        },
                        "data": [
                            {
                                "id": "1633160273",
                                "type": "albums",
                                "href": "/v1/catalog/us/albums/1633160273?l=en-US"
                            }
                        ]
                    },
                    "top-songs": {
                        "href": "/v1/catalog/us/artists/95705522/view/top-songs?l=en-US",
                        "next": "/v1/catalog/us/artists/95705522/view/top-songs?l=en-US&offset=20",
                        "attributes": {
                            "title": "Top Songs"
                        },
                        "data": [
                            {
                                "id": "1481623884",
                                "type": "songs",
                                "href": "/v1/catalog/us/songs/1481623884?l=en-US"
                            },
                            {
                                "id": "1512301465",
                                "type": "songs",
                                "href": "/v1/catalog/us/songs/1512301465?l=en-US"
                            },
                            {
                                "id": "1440851763",
                                "type": "songs",
                                "href": "/v1/catalog/us/songs/1440851763?l=en-US"
                            },
                            {
                                "id": "1351005400",
                                "type": "songs",
                                "href": "/v1/catalog/us/songs/1351005400?l=en-US"
                            },
                            {
                                "id": "1011549366",
                                "type": "songs",
                                "href": "/v1/catalog/us/songs/1011549366?l=en-US"
                            },
                            {
                                "id": "1466877482",
                                "type": "songs",
                                "href": "/v1/catalog/us/songs/1466877482?l=en-US"
                            },
                            {
                                "id": "1127989702",
                                "type": "songs",
                                "href": "/v1/catalog/us/songs/1127989702?l=en-US"
                            },
                            {
                                "id": "1466877495",
                                "type": "songs",
                                "href": "/v1/catalog/us/songs/1466877495?l=en-US"
                            },
                            {
                                "id": "1467816528",
                                "type": "songs",
                                "href": "/v1/catalog/us/songs/1467816528?l=en-US"
                            },
                            {
                                "id": "1486710959",
                                "type": "songs",
                                "href": "/v1/catalog/us/songs/1486710959?l=en-US"
                            },
                            {
                                "id": "1322719822",
                                "type": "songs",
                                "href": "/v1/catalog/us/songs/1322719822?l=en-US"
                            },
                            {
                                "id": "1322718180",
                                "type": "songs",
                                "href": "/v1/catalog/us/songs/1322718180?l=en-US"
                            },
                            {
                                "id": "1059869490",
                                "type": "songs",
                                "href": "/v1/catalog/us/songs/1059869490?l=en-US"
                            },
                            {
                                "id": "422045110",
                                "type": "songs",
                                "href": "/v1/catalog/us/songs/422045110?l=en-US"
                            },
                            {
                                "id": "942089571",
                                "type": "songs",
                                "href": "/v1/catalog/us/songs/942089571?l=en-US"
                            },
                            {
                                "id": "1322719685",
                                "type": "songs",
                                "href": "/v1/catalog/us/songs/1322719685?l=en-US"
                            },
                            {
                                "id": "1293916706",
                                "type": "songs",
                                "href": "/v1/catalog/us/songs/1293916706?l=en-US"
                            },
                            {
                                "id": "1511037390",
                                "type": "songs",
                                "href": "/v1/catalog/us/songs/1511037390?l=en-US"
                            },
                            {
                                "id": "1258268652",
                                "type": "songs",
                                "href": "/v1/catalog/us/songs/1258268652?l=en-US"
                            },
                            {
                                "id": "267264869",
                                "type": "songs",
                                "href": "/v1/catalog/us/songs/267264869?l=en-US"
                            }
                        ]
                    }
                },
                "meta": {
                    "views": {
                        "order": [
                            "latest-release",
                            "top-songs"
                        ]
                    }
                }
            }
        }
    }

    try{
        // const response=await axios(options);
        res.send(data);
    }
    catch(err){
        console.log(err);
    }

})



module.exports=router