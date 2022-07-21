const express = require('express')
const axios = require("axios");
require('dotenv').config()
const router = express.Router()




router.get('/list',async(req,res)=>{
    const genre_key=(req.query.genre).trim()
    console.log(genre_key)
    const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/charts/list',
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host': process.env.API_HOST
        }
    };


    try{
        // const response=await axios(options)
        // res.send(response.data)
        const data = {
            "countries": [
                {
                    "id": "DE",
                    "listid": "ip-country-chart-DE",
                    "momentum_listid": "risers-country-chart-DE",
                    "name": "Germany",
                    "cities": [
                        {
                            "id": "2950159",
                            "name": "Berlin",
                            "countryid": "DE",
                            "listid": "ip-city-chart-2950159"
                        },
                        {
                            "id": "2928810",
                            "name": "Essen",
                            "countryid": "DE",
                            "listid": "ip-city-chart-2928810"
                        },
                        {
                            "id": "2867714",
                            "name": "Munich",
                            "countryid": "DE",
                            "listid": "ip-city-chart-2867714"
                        },
                        {
                            "id": "2911298",
                            "name": "Hamburg",
                            "countryid": "DE",
                            "listid": "ip-city-chart-2911298"
                        },
                        {
                            "id": "2925533",
                            "name": "Frankfurt am Main",
                            "countryid": "DE",
                            "listid": "ip-city-chart-2925533"
                        },
                        {
                            "id": "2825297",
                            "name": "Stuttgart",
                            "countryid": "DE",
                            "listid": "ip-city-chart-2825297"
                        },
                        {
                            "id": "2886242",
                            "name": "Köln",
                            "countryid": "DE",
                            "listid": "ip-city-chart-2886242"
                        },
                        {
                            "id": "2873891",
                            "name": "Mannheim",
                            "countryid": "DE",
                            "listid": "ip-city-chart-2873891"
                        },
                        {
                            "id": "2935517",
                            "name": "Dortmund",
                            "countryid": "DE",
                            "listid": "ip-city-chart-2935517"
                        },
                        {
                            "id": "2861650",
                            "name": "Nürnberg",
                            "countryid": "DE",
                            "listid": "ip-city-chart-2861650"
                        },
                        {
                            "id": "2934246",
                            "name": "Düsseldorf",
                            "countryid": "DE",
                            "listid": "ip-city-chart-2934246"
                        },
                        {
                            "id": "2910831",
                            "name": "Hannover",
                            "countryid": "DE",
                            "listid": "ip-city-chart-2910831"
                        },
                        {
                            "id": "2944388",
                            "name": "Bremen",
                            "countryid": "DE",
                            "listid": "ip-city-chart-2944388"
                        },
                        {
                            "id": "2809346",
                            "name": "Wiesbaden",
                            "countryid": "DE",
                            "listid": "ip-city-chart-2809346"
                        },
                        {
                            "id": "2946447",
                            "name": "Bonn",
                            "countryid": "DE",
                            "listid": "ip-city-chart-2946447"
                        },
                        {
                            "id": "2842647",
                            "name": "Saarbrücken",
                            "countryid": "DE",
                            "listid": "ip-city-chart-2842647"
                        },
                        {
                            "id": "2949186",
                            "name": "Bielefeld",
                            "countryid": "DE",
                            "listid": "ip-city-chart-2949186"
                        },
                        {
                            "id": "2879139",
                            "name": "Leipzig",
                            "countryid": "DE",
                            "listid": "ip-city-chart-2879139"
                        },
                        {
                            "id": "2892794",
                            "name": "Karlsruhe",
                            "countryid": "DE",
                            "listid": "ip-city-chart-2892794"
                        },
                        {
                            "id": "2935022",
                            "name": "Dresden",
                            "countryid": "DE",
                            "listid": "ip-city-chart-2935022"
                        },
                        {
                            "id": "2954172",
                            "name": "Augsburg",
                            "countryid": "DE",
                            "listid": "ip-city-chart-2954172"
                        },
                        {
                            "id": "2805753",
                            "name": "Wuppertal",
                            "countryid": "DE",
                            "listid": "ip-city-chart-2805753"
                        },
                        {
                            "id": "2869894",
                            "name": "Mönchengladbach",
                            "countryid": "DE",
                            "listid": "ip-city-chart-2869894"
                        },
                        {
                            "id": "2886946",
                            "name": "Koblenz",
                            "countryid": "DE",
                            "listid": "ip-city-chart-2886946"
                        },
                        {
                            "id": "2945024",
                            "name": "Braunschweig",
                            "countryid": "DE",
                            "listid": "ip-city-chart-2945024"
                        },
                        {
                            "id": "3247449",
                            "name": "Aachen",
                            "countryid": "DE",
                            "listid": "ip-city-chart-3247449"
                        },
                        {
                            "id": "2847736",
                            "name": "Reutlingen",
                            "countryid": "DE",
                            "listid": "ip-city-chart-2847736"
                        },
                        {
                            "id": "2892518",
                            "name": "Kassel",
                            "countryid": "DE",
                            "listid": "ip-city-chart-2892518"
                        },
                        {
                            "id": "2911522",
                            "name": "Halle (Saale)",
                            "countryid": "DE",
                            "listid": "ip-city-chart-2911522"
                        },
                        {
                            "id": "2907669",
                            "name": "Heilbronn",
                            "countryid": "DE",
                            "listid": "ip-city-chart-2907669"
                        },
                        {
                            "id": "2938913",
                            "name": "Darmstadt",
                            "countryid": "DE",
                            "listid": "ip-city-chart-2938913"
                        },
                        {
                            "id": "2832495",
                            "name": "Siegen",
                            "countryid": "DE",
                            "listid": "ip-city-chart-2832495"
                        },
                        {
                            "id": "2849483",
                            "name": "Regensburg",
                            "countryid": "DE",
                            "listid": "ip-city-chart-2849483"
                        },
                        {
                            "id": "2925177",
                            "name": "Freiburg",
                            "countryid": "DE",
                            "listid": "ip-city-chart-2925177"
                        },
                        {
                            "id": "2924585",
                            "name": "Friedrichshafen",
                            "countryid": "DE",
                            "listid": "ip-city-chart-2924585"
                        },
                        {
                            "id": "2856883",
                            "name": "Osnabrück",
                            "countryid": "DE",
                            "listid": "ip-city-chart-2856883"
                        },
                        {
                            "id": "2940132",
                            "name": "Chemnitz",
                            "countryid": "DE",
                            "listid": "ip-city-chart-2940132"
                        },
                        {
                            "id": "2853969",
                            "name": "Pforzheim",
                            "countryid": "DE",
                            "listid": "ip-city-chart-2853969"
                        },
                        {
                            "id": "2867543",
                            "name": "Münster",
                            "countryid": "DE",
                            "listid": "ip-city-chart-2867543"
                        },
                        {
                            "id": "2875601",
                            "name": "Lübeck",
                            "countryid": "DE",
                            "listid": "ip-city-chart-2875601"
                        },
                        {
                            "id": "2874545",
                            "name": "Magdeburg",
                            "countryid": "DE",
                            "listid": "ip-city-chart-2874545"
                        },
                        {
                            "id": "2891122",
                            "name": "Kiel",
                            "countryid": "DE",
                            "listid": "ip-city-chart-2891122"
                        },
                        {
                            "id": "2844988",
                            "name": "Rosenheim",
                            "countryid": "DE",
                            "listid": "ip-city-chart-2844988"
                        },
                        {
                            "id": "2820256",
                            "name": "Ulm",
                            "countryid": "DE",
                            "listid": "ip-city-chart-2820256"
                        },
                        {
                            "id": "2844588",
                            "name": "Rostock",
                            "countryid": "DE",
                            "listid": "ip-city-chart-2844588"
                        },
                        {
                            "id": "2821164",
                            "name": "Trier",
                            "countryid": "DE",
                            "listid": "ip-city-chart-2821164"
                        },
                        {
                            "id": "2855328",
                            "name": "Passau",
                            "countryid": "DE",
                            "listid": "ip-city-chart-2855328"
                        },
                        {
                            "id": "2926271",
                            "name": "Flensburg",
                            "countryid": "DE",
                            "listid": "ip-city-chart-2926271"
                        },
                        {
                            "id": "2956656",
                            "name": "Amberg",
                            "countryid": "DE",
                            "listid": "ip-city-chart-2956656"
                        },
                        {
                            "id": "2826287",
                            "name": "Stralsund",
                            "countryid": "DE",
                            "listid": "ip-city-chart-2826287"
                        }
                    ],
                    "genres": [
                        {
                            "id": "DE-1",
                            "countryid": "DE",
                            "listid": "genre-country-chart-DE-1",
                            "name": "Pop",
                            "urlPath": "pop",
                            "count": 100
                        },
                        {
                            "id": "DE-2",
                            "countryid": "DE",
                            "listid": "genre-country-chart-DE-2",
                            "name": "Hip-Hop/Rap",
                            "urlPath": "hip-hop-rap",
                            "count": 100
                        },
                        {
                            "id": "DE-3",
                            "countryid": "DE",
                            "listid": "genre-country-chart-DE-3",
                            "name": "Dance",
                            "urlPath": "dance",
                            "count": 100
                        }
                    ]
                },
                {
                    "id": "TW",
                    "listid": "ip-country-chart-TW",
                    "name": "Taiwan",
                    "cities": [
                        {
                            "id": "1668341",
                            "name": "Taipei",
                            "countryid": "TW",
                            "listid": "ip-city-chart-1668341"
                        },
                        {
                            "id": "1673820",
                            "name": "Kaohsiung",
                            "countryid": "TW",
                            "listid": "ip-city-chart-1673820"
                        },
                        {
                            "id": "1668399",
                            "name": "Taichung",
                            "countryid": "TW",
                            "listid": "ip-city-chart-1668399"
                        },
                        {
                            "id": "1668355",
                            "name": "Tainan",
                            "countryid": "TW",
                            "listid": "ip-city-chart-1668355"
                        },
                        {
                            "id": "1675151",
                            "name": "Hsinchu",
                            "countryid": "TW",
                            "listid": "ip-city-chart-1675151"
                        },
                        {
                            "id": "1665443",
                            "name": "Yuanlin",
                            "countryid": "TW",
                            "listid": "ip-city-chart-1665443"
                        },
                        {
                            "id": "1670412",
                            "name": "Pizitou",
                            "countryid": "TW",
                            "listid": "ip-city-chart-1670412"
                        },
                        {
                            "id": "1674504",
                            "name": "Hualien City",
                            "countryid": "TW",
                            "listid": "ip-city-chart-1674504"
                        }
                    ],
                    "genres": []
                },
                {
                    "id": "PT",
                    "listid": "ip-country-chart-PT",
                    "name": "Portugal",
                    "cities": [
                        {
                            "id": "2267057",
                            "name": "Lisbon",
                            "countryid": "PT",
                            "listid": "ip-city-chart-2267057"
                        },
                        {
                            "id": "2735943",
                            "name": "Porto",
                            "countryid": "PT",
                            "listid": "ip-city-chart-2735943"
                        },
                        {
                            "id": "2742032",
                            "name": "Braga",
                            "countryid": "PT",
                            "listid": "ip-city-chart-2742032"
                        },
                        {
                            "id": "2268339",
                            "name": "Faro",
                            "countryid": "PT",
                            "listid": "ip-city-chart-2268339"
                        },
                        {
                            "id": "2742611",
                            "name": "Aveiro",
                            "countryid": "PT",
                            "listid": "ip-city-chart-2742611"
                        },
                        {
                            "id": "2740637",
                            "name": "Coimbra",
                            "countryid": "PT",
                            "listid": "ip-city-chart-2740637"
                        },
                        {
                            "id": "2267827",
                            "name": "Funchal",
                            "countryid": "PT",
                            "listid": "ip-city-chart-2267827"
                        },
                        {
                            "id": "2732265",
                            "name": "Viseu",
                            "countryid": "PT",
                            "listid": "ip-city-chart-2732265"
                        },
                        {
                            "id": "2270437",
                            "name": "Caldas da Rainha",
                            "countryid": "PT",
                            "listid": "ip-city-chart-2270437"
                        },
                        {
                            "id": "2263480",
                            "name": "Santarém",
                            "countryid": "PT",
                            "listid": "ip-city-chart-2263480"
                        },
                        {
                            "id": "2268406",
                            "name": "Évora",
                            "countryid": "PT",
                            "listid": "ip-city-chart-2268406"
                        },
                        {
                            "id": "2262917",
                            "name": "Sines",
                            "countryid": "PT",
                            "listid": "ip-city-chart-2262917"
                        },
                        {
                            "id": "2736041",
                            "name": "Ponte de Lima",
                            "countryid": "PT",
                            "listid": "ip-city-chart-2736041"
                        },
                        {
                            "id": "2742027",
                            "name": "Bragança",
                            "countryid": "PT",
                            "listid": "ip-city-chart-2742027"
                        },
                        {
                            "id": "2738785",
                            "name": "Guarda",
                            "countryid": "PT",
                            "listid": "ip-city-chart-2738785"
                        },
                        {
                            "id": "2272447",
                            "name": "Abrantes",
                            "countryid": "PT",
                            "listid": "ip-city-chart-2272447"
                        },
                        {
                            "id": "2265888",
                            "name": "Montemor-o-Novo",
                            "countryid": "PT",
                            "listid": "ip-city-chart-2265888"
                        }
                    ],
                    "genres": []
                },
                {
                    "id": "DK",
                    "listid": "ip-country-chart-DK",
                    "name": "Denmark",
                    "cities": [
                        {
                            "id": "2618425",
                            "name": "Copenhagen",
                            "countryid": "DK",
                            "listid": "ip-city-chart-2618425"
                        },
                        {
                            "id": "2624652",
                            "name": "Århus",
                            "countryid": "DK",
                            "listid": "ip-city-chart-2624652"
                        },
                        {
                            "id": "2615876",
                            "name": "Odense",
                            "countryid": "DK",
                            "listid": "ip-city-chart-2615876"
                        },
                        {
                            "id": "2610613",
                            "name": "Vejle",
                            "countryid": "DK",
                            "listid": "ip-city-chart-2610613"
                        },
                        {
                            "id": "2622447",
                            "name": "Esbjerg",
                            "countryid": "DK",
                            "listid": "ip-city-chart-2622447"
                        },
                        {
                            "id": "2621230",
                            "name": "Grenaa",
                            "countryid": "DK",
                            "listid": "ip-city-chart-2621230"
                        },
                        {
                            "id": "2616015",
                            "name": "Nyborg",
                            "countryid": "DK",
                            "listid": "ip-city-chart-2616015"
                        },
                        {
                            "id": "2614553",
                            "name": "Rønne",
                            "countryid": "DK",
                            "listid": "ip-city-chart-2614553"
                        },
                        {
                            "id": "2619154",
                            "name": "Kalundborg",
                            "countryid": "DK",
                            "listid": "ip-city-chart-2619154"
                        }
                    ],
                    "genres": []
                },
                {
                    "id": "HR",
                    "listid": "ip-country-chart-HR",
                    "name": "Croatia",
                    "cities": [
                        {
                            "id": "3186886",
                            "name": "Zagreb",
                            "countryid": "HR",
                            "listid": "ip-city-chart-3186886"
                        },
                        {
                            "id": "3190261",
                            "name": "Split",
                            "countryid": "HR",
                            "listid": "ip-city-chart-3190261"
                        },
                        {
                            "id": "3191648",
                            "name": "Rijeka",
                            "countryid": "HR",
                            "listid": "ip-city-chart-3191648"
                        },
                        {
                            "id": "3193935",
                            "name": "Osijek",
                            "countryid": "HR",
                            "listid": "ip-city-chart-3193935"
                        },
                        {
                            "id": "3190941",
                            "name": "Šibenik",
                            "countryid": "HR",
                            "listid": "ip-city-chart-3190941"
                        }
                    ],
                    "genres": []
                },
                {
                    "id": "UA",
                    "listid": "ip-country-chart-UA",
                    "momentum_listid": "risers-country-chart-UA",
                    "name": "Ukraine",
                    "cities": [
                        {
                            "id": "703448",
                            "name": "Kyiv",
                            "countryid": "UA",
                            "listid": "ip-city-chart-703448"
                        },
                        {
                            "id": "706483",
                            "name": "Kharkiv",
                            "countryid": "UA",
                            "listid": "ip-city-chart-706483"
                        },
                        {
                            "id": "698740",
                            "name": "Odessa",
                            "countryid": "UA",
                            "listid": "ip-city-chart-698740"
                        },
                        {
                            "id": "709930",
                            "name": "Dnipro",
                            "countryid": "UA",
                            "listid": "ip-city-chart-709930"
                        },
                        {
                            "id": "700569",
                            "name": "Mykolayiv",
                            "countryid": "UA",
                            "listid": "ip-city-chart-700569"
                        },
                        {
                            "id": "702550",
                            "name": "Lviv",
                            "countryid": "UA",
                            "listid": "ip-city-chart-702550"
                        },
                        {
                            "id": "687700",
                            "name": "Zaporizhia",
                            "countryid": "UA",
                            "listid": "ip-city-chart-687700"
                        },
                        {
                            "id": "703845",
                            "name": "Kryvyi Rih",
                            "countryid": "UA",
                            "listid": "ip-city-chart-703845"
                        },
                        {
                            "id": "709717",
                            "name": "Donetsk",
                            "countryid": "UA",
                            "listid": "ip-city-chart-709717"
                        },
                        {
                            "id": "695594",
                            "name": "Rivne",
                            "countryid": "UA",
                            "listid": "ip-city-chart-695594"
                        },
                        {
                            "id": "706369",
                            "name": "Khmelnytskyi",
                            "countryid": "UA",
                            "listid": "ip-city-chart-706369"
                        },
                        {
                            "id": "690548",
                            "name": "Uzhgorod",
                            "countryid": "UA",
                            "listid": "ip-city-chart-690548"
                        },
                        {
                            "id": "701822",
                            "name": "Mariupol",
                            "countryid": "UA",
                            "listid": "ip-city-chart-701822"
                        },
                        {
                            "id": "702658",
                            "name": "Luhansk",
                            "countryid": "UA",
                            "listid": "ip-city-chart-702658"
                        },
                        {
                            "id": "694423",
                            "name": "Sevastopol",
                            "countryid": "UA",
                            "listid": "ip-city-chart-694423"
                        },
                        {
                            "id": "710719",
                            "name": "Chernivtsi",
                            "countryid": "UA",
                            "listid": "ip-city-chart-710719"
                        },
                        {
                            "id": "705135",
                            "name": "Konotop",
                            "countryid": "UA",
                            "listid": "ip-city-chart-705135"
                        },
                        {
                            "id": "706524",
                            "name": "Kerch",
                            "countryid": "UA",
                            "listid": "ip-city-chart-706524"
                        },
                        {
                            "id": "704143",
                            "name": "Kremenets",
                            "countryid": "UA",
                            "listid": "ip-city-chart-704143"
                        },
                        {
                            "id": "702874",
                            "name": "Lokhvytsya",
                            "countryid": "UA",
                            "listid": "ip-city-chart-702874"
                        }
                    ],
                    "genres": []
                },
                {
                    "id": "HU",
                    "listid": "ip-country-chart-HU",
                    "momentum_listid": "risers-country-chart-HU",
                    "name": "Hungary",
                    "cities": [
                        {
                            "id": "3054643",
                            "name": "Budapest",
                            "countryid": "HU",
                            "listid": "ip-city-chart-3054643"
                        },
                        {
                            "id": "715429",
                            "name": "Szeged",
                            "countryid": "HU",
                            "listid": "ip-city-chart-715429"
                        },
                        {
                            "id": "721472",
                            "name": "Debrecen",
                            "countryid": "HU",
                            "listid": "ip-city-chart-721472"
                        },
                        {
                            "id": "3052009",
                            "name": "Győr",
                            "countryid": "HU",
                            "listid": "ip-city-chart-3052009"
                        },
                        {
                            "id": "717582",
                            "name": "Miskolc",
                            "countryid": "HU",
                            "listid": "ip-city-chart-717582"
                        },
                        {
                            "id": "3046526",
                            "name": "Pécs",
                            "countryid": "HU",
                            "listid": "ip-city-chart-3046526"
                        },
                        {
                            "id": "3042929",
                            "name": "Veszprém",
                            "countryid": "HU",
                            "listid": "ip-city-chart-3042929"
                        },
                        {
                            "id": "722437",
                            "name": "Békéscsaba",
                            "countryid": "HU",
                            "listid": "ip-city-chart-722437"
                        },
                        {
                            "id": "715126",
                            "name": "Szolnok",
                            "countryid": "HU",
                            "listid": "ip-city-chart-715126"
                        },
                        {
                            "id": "3044310",
                            "name": "Szombathely",
                            "countryid": "HU",
                            "listid": "ip-city-chart-3044310"
                        },
                        {
                            "id": "721239",
                            "name": "Eger",
                            "countryid": "HU",
                            "listid": "ip-city-chart-721239"
                        },
                        {
                            "id": "3046619",
                            "name": "Parádsasvár",
                            "countryid": "HU",
                            "listid": "ip-city-chart-3046619"
                        },
                        {
                            "id": "3042638",
                            "name": "Zalaegerszeg",
                            "countryid": "HU",
                            "listid": "ip-city-chart-3042638"
                        },
                        {
                            "id": "717635",
                            "name": "Mezőtúr",
                            "countryid": "HU",
                            "listid": "ip-city-chart-717635"
                        },
                        {
                            "id": "720006",
                            "name": "Heves",
                            "countryid": "HU",
                            "listid": "ip-city-chart-720006"
                        }
                    ],
                    "genres": []
                },
                {
                    "id": "MA",
                    "listid": "ip-country-chart-MA",
                    "name": "Morocco",
                    "cities": [
                        {
                            "id": "2553604",
                            "name": "Casablanca",
                            "countryid": "MA",
                            "listid": "ip-city-chart-2553604"
                        },
                        {
                            "id": "2538475",
                            "name": "Rabat",
                            "countryid": "MA",
                            "listid": "ip-city-chart-2538475"
                        },
                        {
                            "id": "2542997",
                            "name": "Marrakesh",
                            "countryid": "MA",
                            "listid": "ip-city-chart-2542997"
                        },
                        {
                            "id": "2561668",
                            "name": "Agadir",
                            "countryid": "MA",
                            "listid": "ip-city-chart-2561668"
                        },
                        {
                            "id": "2548885",
                            "name": "Fès",
                            "countryid": "MA",
                            "listid": "ip-city-chart-2548885"
                        },
                        {
                            "id": "2530335",
                            "name": "Tangier",
                            "countryid": "MA",
                            "listid": "ip-city-chart-2530335"
                        },
                        {
                            "id": "2542715",
                            "name": "Meknès",
                            "countryid": "MA",
                            "listid": "ip-city-chart-2542715"
                        },
                        {
                            "id": "2544571",
                            "name": "Kenitra",
                            "countryid": "MA",
                            "listid": "ip-city-chart-2544571"
                        },
                        {
                            "id": "2541479",
                            "name": "Nador",
                            "countryid": "MA",
                            "listid": "ip-city-chart-2541479"
                        },
                        {
                            "id": "2555745",
                            "name": "Beni Mellal",
                            "countryid": "MA",
                            "listid": "ip-city-chart-2555745"
                        },
                        {
                            "id": "2540483",
                            "name": "Oujda-Angad",
                            "countryid": "MA",
                            "listid": "ip-city-chart-2540483"
                        },
                        {
                            "id": "2528910",
                            "name": "Tétouan",
                            "countryid": "MA",
                            "listid": "ip-city-chart-2528910"
                        }
                    ],
                    "genres": []
                },
                {
                    "id": "ID",
                    "listid": "ip-country-chart-ID",
                    "momentum_listid": "risers-country-chart-ID",
                    "name": "Indonesia",
                    "cities": [
                        {
                            "id": "1642911",
                            "name": "Jakarta",
                            "countryid": "ID",
                            "listid": "ip-city-chart-1642911"
                        },
                        {
                            "id": "1625822",
                            "name": "Surabaya",
                            "countryid": "ID",
                            "listid": "ip-city-chart-1625822"
                        },
                        {
                            "id": "1650357",
                            "name": "Bandung",
                            "countryid": "ID",
                            "listid": "ip-city-chart-1650357"
                        },
                        {
                            "id": "1214520",
                            "name": "Medan",
                            "countryid": "ID",
                            "listid": "ip-city-chart-1214520"
                        },
                        {
                            "id": "1645528",
                            "name": "Denpasar",
                            "countryid": "ID",
                            "listid": "ip-city-chart-1645528"
                        },
                        {
                            "id": "1627896",
                            "name": "Semarang",
                            "countryid": "ID",
                            "listid": "ip-city-chart-1627896"
                        },
                        {
                            "id": "1622786",
                            "name": "Makassar",
                            "countryid": "ID",
                            "listid": "ip-city-chart-1622786"
                        },
                        {
                            "id": "1621177",
                            "name": "Yogyakarta",
                            "countryid": "ID",
                            "listid": "ip-city-chart-1621177"
                        },
                        {
                            "id": "1636544",
                            "name": "Manado",
                            "countryid": "ID",
                            "listid": "ip-city-chart-1636544"
                        },
                        {
                            "id": "1636722",
                            "name": "Malang",
                            "countryid": "ID",
                            "listid": "ip-city-chart-1636722"
                        },
                        {
                            "id": "1629001",
                            "name": "Samarinda",
                            "countryid": "ID",
                            "listid": "ip-city-chart-1629001"
                        },
                        {
                            "id": "1631761",
                            "name": "Pekanbaru",
                            "countryid": "ID",
                            "listid": "ip-city-chart-1631761"
                        },
                        {
                            "id": "1625812",
                            "name": "Surakarta",
                            "countryid": "ID",
                            "listid": "ip-city-chart-1625812"
                        },
                        {
                            "id": "1633070",
                            "name": "Palembang",
                            "countryid": "ID",
                            "listid": "ip-city-chart-1633070"
                        },
                        {
                            "id": "8224624",
                            "name": "City of Balikpapan",
                            "countryid": "ID",
                            "listid": "ip-city-chart-8224624"
                        },
                        {
                            "id": "1633419",
                            "name": "Padang",
                            "countryid": "ID",
                            "listid": "ip-city-chart-1633419"
                        },
                        {
                            "id": "1630789",
                            "name": "Pontianak",
                            "countryid": "ID",
                            "listid": "ip-city-chart-1630789"
                        },
                        {
                            "id": "1624917",
                            "name": "Bandar Lampung",
                            "countryid": "ID",
                            "listid": "ip-city-chart-1624917"
                        },
                        {
                            "id": "1642858",
                            "name": "Jambi City",
                            "countryid": "ID",
                            "listid": "ip-city-chart-1642858"
                        },
                        {
                            "id": "1650213",
                            "name": "Banjarmasin",
                            "countryid": "ID",
                            "listid": "ip-city-chart-1650213"
                        },
                        {
                            "id": "1636930",
                            "name": "Madiun",
                            "countryid": "ID",
                            "listid": "ip-city-chart-1636930"
                        },
                        {
                            "id": "1633034",
                            "name": "Palu",
                            "countryid": "ID",
                            "listid": "ip-city-chart-1633034"
                        },
                        {
                            "id": "1627267",
                            "name": "Sidareja",
                            "countryid": "ID",
                            "listid": "ip-city-chart-1627267"
                        },
                        {
                            "id": "2082600",
                            "name": "Jayapura",
                            "countryid": "ID",
                            "listid": "ip-city-chart-2082600"
                        },
                        {
                            "id": "1636022",
                            "name": "Martapura",
                            "countryid": "ID",
                            "listid": "ip-city-chart-1636022"
                        },
                        {
                            "id": "1630341",
                            "name": "Purwakarta",
                            "countryid": "ID",
                            "listid": "ip-city-chart-1630341"
                        },
                        {
                            "id": "2057087",
                            "name": "Kupang",
                            "countryid": "ID",
                            "listid": "ip-city-chart-2057087"
                        },
                        {
                            "id": "1624647",
                            "name": "Tasikmalaya",
                            "countryid": "ID",
                            "listid": "ip-city-chart-1624647"
                        },
                        {
                            "id": "1624987",
                            "name": "Tanjungagung",
                            "countryid": "ID",
                            "listid": "ip-city-chart-1624987"
                        },
                        {
                            "id": "1215502",
                            "name": "Banda Aceh",
                            "countryid": "ID",
                            "listid": "ip-city-chart-1215502"
                        },
                        {
                            "id": "1651531",
                            "name": "Ambon",
                            "countryid": "ID",
                            "listid": "ip-city-chart-1651531"
                        },
                        {
                            "id": "1640344",
                            "name": "Kendari",
                            "countryid": "ID",
                            "listid": "ip-city-chart-1640344"
                        },
                        {
                            "id": "1624863",
                            "name": "Tanjung Pinang",
                            "countryid": "ID",
                            "listid": "ip-city-chart-1624863"
                        },
                        {
                            "id": "1624725",
                            "name": "Tarakan",
                            "countryid": "ID",
                            "listid": "ip-city-chart-1624725"
                        },
                        {
                            "id": "1626801",
                            "name": "Situbondo",
                            "countryid": "ID",
                            "listid": "ip-city-chart-1626801"
                        }
                    ],
                    "genres": []
                },
                {
                    "id": "IE",
                    "listid": "ip-country-chart-IE",
                    "name": "Ireland",
                    "cities": [
                        {
                            "id": "2964574",
                            "name": "Dublin",
                            "countryid": "IE",
                            "listid": "ip-city-chart-2964574"
                        },
                        {
                            "id": "2965140",
                            "name": "Cork",
                            "countryid": "IE",
                            "listid": "ip-city-chart-2965140"
                        },
                        {
                            "id": "2961423",
                            "name": "Sligo",
                            "countryid": "IE",
                            "listid": "ip-city-chart-2961423"
                        },
                        {
                            "id": "2962361",
                            "name": "An Muileann gCearr",
                            "countryid": "IE",
                            "listid": "ip-city-chart-2962361"
                        }
                    ],
                    "genres": []
                },
                {
                    "id": "US",
                    "listid": "ip-country-chart-US",
                    "momentum_listid": "risers-country-chart-US",
                    "name": "United States",
                    "cities": [
                        {
                            "id": "5128581",
                            "name": "New York City",
                            "countryid": "US",
                            "listid": "ip-city-chart-5128581"
                        },
                        {
                            "id": "5368361",
                            "name": "Los Angeles",
                            "countryid": "US",
                            "listid": "ip-city-chart-5368361"
                        },
                        {
                            "id": "4887398",
                            "name": "Chicago",
                            "countryid": "US",
                            "listid": "ip-city-chart-4887398"
                        },
                        {
                            "id": "4699066",
                            "name": "Houston",
                            "countryid": "US",
                            "listid": "ip-city-chart-4699066"
                        },
                        {
                            "id": "4180439",
                            "name": "Atlanta",
                            "countryid": "US",
                            "listid": "ip-city-chart-4180439"
                        },
                        {
                            "id": "4684888",
                            "name": "Dallas",
                            "countryid": "US",
                            "listid": "ip-city-chart-4684888"
                        },
                        {
                            "id": "4164138",
                            "name": "Miami",
                            "countryid": "US",
                            "listid": "ip-city-chart-4164138"
                        },
                        {
                            "id": "5308655",
                            "name": "Phoenix",
                            "countryid": "US",
                            "listid": "ip-city-chart-5308655"
                        },
                        {
                            "id": "5387877",
                            "name": "Riverside",
                            "countryid": "US",
                            "listid": "ip-city-chart-5387877"
                        },
                        {
                            "id": "4140963",
                            "name": "Washington, D.C.",
                            "countryid": "US",
                            "listid": "ip-city-chart-4140963"
                        },
                        {
                            "id": "4560349",
                            "name": "Philadelphia",
                            "countryid": "US",
                            "listid": "ip-city-chart-4560349"
                        },
                        {
                            "id": "4930956",
                            "name": "Boston",
                            "countryid": "US",
                            "listid": "ip-city-chart-4930956"
                        },
                        {
                            "id": "5323810",
                            "name": "Anaheim",
                            "countryid": "US",
                            "listid": "ip-city-chart-5323810"
                        },
                        {
                            "id": "5419384",
                            "name": "Denver",
                            "countryid": "US",
                            "listid": "ip-city-chart-5419384"
                        },
                        {
                            "id": "5506956",
                            "name": "Las Vegas",
                            "countryid": "US",
                            "listid": "ip-city-chart-5506956"
                        },
                        {
                            "id": "5391811",
                            "name": "San Diego",
                            "countryid": "US",
                            "listid": "ip-city-chart-5391811"
                        },
                        {
                            "id": "4990729",
                            "name": "Detroit",
                            "countryid": "US",
                            "listid": "ip-city-chart-4990729"
                        },
                        {
                            "id": "5809844",
                            "name": "Seattle",
                            "countryid": "US",
                            "listid": "ip-city-chart-5809844"
                        },
                        {
                            "id": "4726206",
                            "name": "San Antonio",
                            "countryid": "US",
                            "listid": "ip-city-chart-4726206"
                        },
                        {
                            "id": "4167147",
                            "name": "Orlando",
                            "countryid": "US",
                            "listid": "ip-city-chart-4167147"
                        },
                        {
                            "id": "4347778",
                            "name": "Baltimore",
                            "countryid": "US",
                            "listid": "ip-city-chart-4347778"
                        },
                        {
                            "id": "4393217",
                            "name": "Kansas City",
                            "countryid": "US",
                            "listid": "ip-city-chart-4393217"
                        },
                        {
                            "id": "5037649",
                            "name": "Minneapolis",
                            "countryid": "US",
                            "listid": "ip-city-chart-5037649"
                        },
                        {
                            "id": "4691930",
                            "name": "Fort Worth",
                            "countryid": "US",
                            "listid": "ip-city-chart-4691930"
                        },
                        {
                            "id": "4174757",
                            "name": "Tampa",
                            "countryid": "US",
                            "listid": "ip-city-chart-4174757"
                        },
                        {
                            "id": "5389489",
                            "name": "Sacramento",
                            "countryid": "US",
                            "listid": "ip-city-chart-5389489"
                        },
                        {
                            "id": "4671654",
                            "name": "Austin",
                            "countryid": "US",
                            "listid": "ip-city-chart-4671654"
                        },
                        {
                            "id": "5392171",
                            "name": "San Jose",
                            "countryid": "US",
                            "listid": "ip-city-chart-5392171"
                        },
                        {
                            "id": "5391959",
                            "name": "San Francisco",
                            "countryid": "US",
                            "listid": "ip-city-chart-5391959"
                        },
                        {
                            "id": "5304391",
                            "name": "Mesa",
                            "countryid": "US",
                            "listid": "ip-city-chart-5304391"
                        },
                        {
                            "id": "4407066",
                            "name": "St. Louis",
                            "countryid": "US",
                            "listid": "ip-city-chart-4407066"
                        },
                        {
                            "id": "4155966",
                            "name": "Fort Lauderdale",
                            "countryid": "US",
                            "listid": "ip-city-chart-4155966"
                        },
                        {
                            "id": "5746545",
                            "name": "Portland",
                            "countryid": "US",
                            "listid": "ip-city-chart-5746545"
                        },
                        {
                            "id": "4508722",
                            "name": "Cincinnati",
                            "countryid": "US",
                            "listid": "ip-city-chart-4508722"
                        },
                        {
                            "id": "4544349",
                            "name": "Oklahoma City",
                            "countryid": "US",
                            "listid": "ip-city-chart-4544349"
                        },
                        {
                            "id": "5206379",
                            "name": "Pittsburgh",
                            "countryid": "US",
                            "listid": "ip-city-chart-5206379"
                        },
                        {
                            "id": "5780993",
                            "name": "Salt Lake City",
                            "countryid": "US",
                            "listid": "ip-city-chart-5780993"
                        },
                        {
                            "id": "5150529",
                            "name": "Cleveland",
                            "countryid": "US",
                            "listid": "ip-city-chart-5150529"
                        },
                        {
                            "id": "4509177",
                            "name": "Columbus",
                            "countryid": "US",
                            "listid": "ip-city-chart-4509177"
                        },
                        {
                            "id": "4641239",
                            "name": "Memphis",
                            "countryid": "US",
                            "listid": "ip-city-chart-4641239"
                        },
                        {
                            "id": "4709796",
                            "name": "McAllen",
                            "countryid": "US",
                            "listid": "ip-city-chart-4709796"
                        },
                        {
                            "id": "4644585",
                            "name": "Nashville",
                            "countryid": "US",
                            "listid": "ip-city-chart-4644585"
                        },
                        {
                            "id": "4049979",
                            "name": "Birmingham",
                            "countryid": "US",
                            "listid": "ip-city-chart-4049979"
                        },
                        {
                            "id": "5224151",
                            "name": "Providence",
                            "countryid": "US",
                            "listid": "ip-city-chart-5224151"
                        },
                        {
                            "id": "4736476",
                            "name": "The Woodlands TX",
                            "countryid": "US",
                            "listid": "ip-city-chart-4736476"
                        },
                        {
                            "id": "4460243",
                            "name": "Charlotte",
                            "countryid": "US",
                            "listid": "ip-city-chart-4460243"
                        },
                        {
                            "id": "4160021",
                            "name": "Jacksonville",
                            "countryid": "US",
                            "listid": "ip-city-chart-4160021"
                        },
                        {
                            "id": "4335045",
                            "name": "New Orleans",
                            "countryid": "US",
                            "listid": "ip-city-chart-4335045"
                        },
                        {
                            "id": "4487042",
                            "name": "Raleigh",
                            "countryid": "US",
                            "listid": "ip-city-chart-4487042"
                        },
                        {
                            "id": "4921100",
                            "name": "Hammond IN",
                            "countryid": "US",
                            "listid": "ip-city-chart-4921100"
                        },
                        {
                            "id": "4149962",
                            "name": "Cape Coral",
                            "countryid": "US",
                            "listid": "ip-city-chart-4149962"
                        },
                        {
                            "id": "5318313",
                            "name": "Tucson",
                            "countryid": "US",
                            "listid": "ip-city-chart-5318313"
                        },
                        {
                            "id": "5454711",
                            "name": "Albuquerque",
                            "countryid": "US",
                            "listid": "ip-city-chart-5454711"
                        },
                        {
                            "id": "5263045",
                            "name": "Milwaukee",
                            "countryid": "US",
                            "listid": "ip-city-chart-5263045"
                        },
                        {
                            "id": "5113694",
                            "name": "Coram NY",
                            "countryid": "US",
                            "listid": "ip-city-chart-5113694"
                        },
                        {
                            "id": "4839366",
                            "name": "New Haven",
                            "countryid": "US",
                            "listid": "ip-city-chart-4839366"
                        },
                        {
                            "id": "4259418",
                            "name": "Indianapolis",
                            "countryid": "US",
                            "listid": "ip-city-chart-4259418"
                        },
                        {
                            "id": "5350937",
                            "name": "Fresno",
                            "countryid": "US",
                            "listid": "ip-city-chart-5350937"
                        },
                        {
                            "id": "5812944",
                            "name": "Tacoma",
                            "countryid": "US",
                            "listid": "ip-city-chart-5812944"
                        },
                        {
                            "id": "4553433",
                            "name": "Tulsa",
                            "countryid": "US",
                            "listid": "ip-city-chart-4553433"
                        },
                        {
                            "id": "5110077",
                            "name": "Brentwood NY",
                            "countryid": "US",
                            "listid": "ip-city-chart-5110077"
                        },
                        {
                            "id": "5110629",
                            "name": "Buffalo",
                            "countryid": "US",
                            "listid": "ip-city-chart-5110629"
                        },
                        {
                            "id": "5520993",
                            "name": "El Paso",
                            "countryid": "US",
                            "listid": "ip-city-chart-5520993"
                        },
                        {
                            "id": "4781708",
                            "name": "Richmond",
                            "countryid": "US",
                            "listid": "ip-city-chart-4781708"
                        },
                        {
                            "id": "4835797",
                            "name": "Hartford",
                            "countryid": "US",
                            "listid": "ip-city-chart-4835797"
                        },
                        {
                            "id": "5350734",
                            "name": "Fremont CA",
                            "countryid": "US",
                            "listid": "ip-city-chart-5350734"
                        },
                        {
                            "id": "5178127",
                            "name": "Allentown",
                            "countryid": "US",
                            "listid": "ip-city-chart-5178127"
                        },
                        {
                            "id": "4299276",
                            "name": "Louisville",
                            "countryid": "US",
                            "listid": "ip-city-chart-4299276"
                        },
                        {
                            "id": "5417598",
                            "name": "Colorado Springs",
                            "countryid": "US",
                            "listid": "ip-city-chart-5417598"
                        },
                        {
                            "id": "5074472",
                            "name": "Omaha",
                            "countryid": "US",
                            "listid": "ip-city-chart-5074472"
                        },
                        {
                            "id": "4898015",
                            "name": "Joliet",
                            "countryid": "US",
                            "listid": "ip-city-chart-4898015"
                        },
                        {
                            "id": "5780026",
                            "name": "Provo",
                            "countryid": "US",
                            "listid": "ip-city-chart-5780026"
                        },
                        {
                            "id": "4315588",
                            "name": "Baton Rouge",
                            "countryid": "US",
                            "listid": "ip-city-chart-4315588"
                        },
                        {
                            "id": "5325738",
                            "name": "Bakersfield",
                            "countryid": "US",
                            "listid": "ip-city-chart-5325738"
                        },
                        {
                            "id": "5105496",
                            "name": "Trenton",
                            "countryid": "US",
                            "listid": "ip-city-chart-5105496"
                        },
                        {
                            "id": "5586437",
                            "name": "Boise",
                            "countryid": "US",
                            "listid": "ip-city-chart-5586437"
                        },
                        {
                            "id": "5134086",
                            "name": "Rochester",
                            "countryid": "US",
                            "listid": "ip-city-chart-5134086"
                        },
                        {
                            "id": "5511077",
                            "name": "Reno",
                            "countryid": "US",
                            "listid": "ip-city-chart-5511077"
                        },
                        {
                            "id": "4575352",
                            "name": "Columbia",
                            "countryid": "US",
                            "listid": "ip-city-chart-4575352"
                        },
                        {
                            "id": "4890864",
                            "name": "Elgin",
                            "countryid": "US",
                            "listid": "ip-city-chart-4890864"
                        },
                        {
                            "id": "5339111",
                            "name": "Concord CA",
                            "countryid": "US",
                            "listid": "ip-city-chart-5339111"
                        },
                        {
                            "id": "4580543",
                            "name": "Greenville",
                            "countryid": "US",
                            "listid": "ip-city-chart-4580543"
                        },
                        {
                            "id": "4145381",
                            "name": "Wilmington",
                            "countryid": "US",
                            "listid": "ip-city-chart-4145381"
                        },
                        {
                            "id": "5856195",
                            "name": "Honolulu",
                            "countryid": "US",
                            "listid": "ip-city-chart-5856195"
                        },
                        {
                            "id": "4574324",
                            "name": "Charleston",
                            "countryid": "US",
                            "listid": "ip-city-chart-4574324"
                        },
                        {
                            "id": "5779206",
                            "name": "Ogden",
                            "countryid": "US",
                            "listid": "ip-city-chart-5779206"
                        },
                        {
                            "id": "4951788",
                            "name": "Springfield MO",
                            "countryid": "US",
                            "listid": "ip-city-chart-4951788"
                        },
                        {
                            "id": "4703223",
                            "name": "Killeen",
                            "countryid": "US",
                            "listid": "ip-city-chart-4703223"
                        },
                        {
                            "id": "4504476",
                            "name": "Toms River",
                            "countryid": "US",
                            "listid": "ip-city-chart-4504476"
                        },
                        {
                            "id": "4776222",
                            "name": "Norfolk",
                            "countryid": "US",
                            "listid": "ip-city-chart-4776222"
                        },
                        {
                            "id": "4705349",
                            "name": "Laredo",
                            "countryid": "US",
                            "listid": "ip-city-chart-4705349"
                        },
                        {
                            "id": "4994358",
                            "name": "Grand Rapids",
                            "countryid": "US",
                            "listid": "ip-city-chart-4994358"
                        },
                        {
                            "id": "4509884",
                            "name": "Dayton",
                            "countryid": "US",
                            "listid": "ip-city-chart-4509884"
                        },
                        {
                            "id": "5145476",
                            "name": "Akron",
                            "countryid": "US",
                            "listid": "ip-city-chart-5145476"
                        },
                        {
                            "id": "4172131",
                            "name": "Sarasota",
                            "countryid": "US",
                            "listid": "ip-city-chart-4172131"
                        },
                        {
                            "id": "4634946",
                            "name": "Knoxville",
                            "countryid": "US",
                            "listid": "ip-city-chart-4634946"
                        },
                        {
                            "id": "4281730",
                            "name": "Wichita",
                            "countryid": "US",
                            "listid": "ip-city-chart-4281730"
                        },
                        {
                            "id": "5399020",
                            "name": "Stockton",
                            "countryid": "US",
                            "listid": "ip-city-chart-5399020"
                        },
                        {
                            "id": "5402405",
                            "name": "Thousand Oaks",
                            "countryid": "US",
                            "listid": "ip-city-chart-5402405"
                        },
                        {
                            "id": "4956184",
                            "name": "Worcester",
                            "countryid": "US",
                            "listid": "ip-city-chart-4956184"
                        },
                        {
                            "id": "4931429",
                            "name": "Brockton",
                            "countryid": "US",
                            "listid": "ip-city-chart-4931429"
                        },
                        {
                            "id": "4119403",
                            "name": "Little Rock",
                            "countryid": "US",
                            "listid": "ip-city-chart-4119403"
                        },
                        {
                            "id": "4110486",
                            "name": "Fayetteville AR",
                            "countryid": "US",
                            "listid": "ip-city-chart-4110486"
                        },
                        {
                            "id": "5378538",
                            "name": "Oakland",
                            "countryid": "US",
                            "listid": "ip-city-chart-5378538"
                        },
                        {
                            "id": "5380184",
                            "name": "Oxnard",
                            "countryid": "US",
                            "listid": "ip-city-chart-5380184"
                        },
                        {
                            "id": "4791259",
                            "name": "Virginia Beach",
                            "countryid": "US",
                            "listid": "ip-city-chart-4791259"
                        },
                        {
                            "id": "4755158",
                            "name": "Dale City VA",
                            "countryid": "US",
                            "listid": "ip-city-chart-4755158"
                        },
                        {
                            "id": "4431410",
                            "name": "Jackson",
                            "countryid": "US",
                            "listid": "ip-city-chart-4431410"
                        },
                        {
                            "id": "4076598",
                            "name": "Mobile",
                            "countryid": "US",
                            "listid": "ip-city-chart-4076598"
                        },
                        {
                            "id": "5106834",
                            "name": "Albany",
                            "countryid": "US",
                            "listid": "ip-city-chart-5106834"
                        },
                        {
                            "id": "5879400",
                            "name": "Anchorage",
                            "countryid": "US",
                            "listid": "ip-city-chart-5879400"
                        },
                        {
                            "id": "5140405",
                            "name": "Syracuse",
                            "countryid": "US",
                            "listid": "ip-city-chart-5140405"
                        },
                        {
                            "id": "5525577",
                            "name": "Lubbock",
                            "countryid": "US",
                            "listid": "ip-city-chart-5525577"
                        },
                        {
                            "id": "5373900",
                            "name": "Modesto",
                            "countryid": "US",
                            "listid": "ip-city-chart-5373900"
                        },
                        {
                            "id": "4169171",
                            "name": "Port Saint Lucie",
                            "countryid": "US",
                            "listid": "ip-city-chart-4169171"
                        },
                        {
                            "id": "4409896",
                            "name": "Springfield MA",
                            "countryid": "US",
                            "listid": "ip-city-chart-4409896"
                        },
                        {
                            "id": "5282804",
                            "name": "Bridgeport",
                            "countryid": "US",
                            "listid": "ip-city-chart-5282804"
                        },
                        {
                            "id": "5392952",
                            "name": "Santa Barbara",
                            "countryid": "US",
                            "listid": "ip-city-chart-5392952"
                        },
                        {
                            "id": "4676740",
                            "name": "Brownsville",
                            "countryid": "US",
                            "listid": "ip-city-chart-4676740"
                        },
                        {
                            "id": "5811696",
                            "name": "Spokane",
                            "countryid": "US",
                            "listid": "ip-city-chart-5811696"
                        },
                        {
                            "id": "4341513",
                            "name": "Shreveport",
                            "countryid": "US",
                            "listid": "ip-city-chart-4341513"
                        },
                        {
                            "id": "4469146",
                            "name": "Greensboro",
                            "countryid": "US",
                            "listid": "ip-city-chart-4469146"
                        },
                        {
                            "id": "5261457",
                            "name": "Madison",
                            "countryid": "US",
                            "listid": "ip-city-chart-5261457"
                        },
                        {
                            "id": "5207728",
                            "name": "Reading",
                            "countryid": "US",
                            "listid": "ip-city-chart-5207728"
                        },
                        {
                            "id": "4853423",
                            "name": "Davenport",
                            "countryid": "US",
                            "listid": "ip-city-chart-4853423"
                        },
                        {
                            "id": "4907959",
                            "name": "Rockford",
                            "countryid": "US",
                            "listid": "ip-city-chart-4907959"
                        },
                        {
                            "id": "5177568",
                            "name": "Youngstown",
                            "countryid": "US",
                            "listid": "ip-city-chart-5177568"
                        },
                        {
                            "id": "4998830",
                            "name": "Lansing",
                            "countryid": "US",
                            "listid": "ip-city-chart-4998830"
                        },
                        {
                            "id": "4738214",
                            "name": "Tyler",
                            "countryid": "US",
                            "listid": "ip-city-chart-4738214"
                        },
                        {
                            "id": "5347335",
                            "name": "Fairfield",
                            "countryid": "US",
                            "listid": "ip-city-chart-5347335"
                        },
                        {
                            "id": "4929771",
                            "name": "Barnstable",
                            "countryid": "US",
                            "listid": "ip-city-chart-4929771"
                        },
                        {
                            "id": "5211303",
                            "name": "Scranton",
                            "countryid": "US",
                            "listid": "ip-city-chart-5211303"
                        },
                        {
                            "id": "5391295",
                            "name": "Salinas",
                            "countryid": "US",
                            "listid": "ip-city-chart-5391295"
                        },
                        {
                            "id": "4174715",
                            "name": "Tallahassee",
                            "countryid": "US",
                            "listid": "ip-city-chart-4174715"
                        },
                        {
                            "id": "5254962",
                            "name": "Green Bay",
                            "countryid": "US",
                            "listid": "ip-city-chart-5254962"
                        },
                        {
                            "id": "4889229",
                            "name": "Crystal Lake",
                            "countryid": "US",
                            "listid": "ip-city-chart-4889229"
                        },
                        {
                            "id": "5799610",
                            "name": "Kennewick",
                            "countryid": "US",
                            "listid": "ip-city-chart-5799610"
                        },
                        {
                            "id": "4669635",
                            "name": "Abilene",
                            "countryid": "US",
                            "listid": "ip-city-chart-4669635"
                        },
                        {
                            "id": "5768233",
                            "name": "Rapid City",
                            "countryid": "US",
                            "listid": "ip-city-chart-5768233"
                        },
                        {
                            "id": "5231851",
                            "name": "Sioux Falls",
                            "countryid": "US",
                            "listid": "ip-city-chart-5231851"
                        },
                        {
                            "id": "4613868",
                            "name": "Clarksville TN",
                            "countryid": "US",
                            "listid": "ip-city-chart-4613868"
                        },
                        {
                            "id": "4850751",
                            "name": "Cedar Rapids",
                            "countryid": "US",
                            "listid": "ip-city-chart-4850751"
                        },
                        {
                            "id": "4839843",
                            "name": "Norwich",
                            "countryid": "US",
                            "listid": "ip-city-chart-4839843"
                        },
                        {
                            "id": "5725846",
                            "name": "Eugene",
                            "countryid": "US",
                            "listid": "ip-city-chart-5725846"
                        },
                        {
                            "id": "5059163",
                            "name": "Fargo",
                            "countryid": "US",
                            "listid": "ip-city-chart-5059163"
                        },
                        {
                            "id": "4250542",
                            "name": "Springfield IL",
                            "countryid": "US",
                            "listid": "ip-city-chart-4250542"
                        },
                        {
                            "id": "5816605",
                            "name": "Yakima",
                            "countryid": "US",
                            "listid": "ip-city-chart-5816605"
                        },
                        {
                            "id": "5596475",
                            "name": "Idaho Falls",
                            "countryid": "US",
                            "listid": "ip-city-chart-5596475"
                        },
                        {
                            "id": "5435464",
                            "name": "Pueblo",
                            "countryid": "US",
                            "listid": "ip-city-chart-5435464"
                        },
                        {
                            "id": "4207400",
                            "name": "Macon",
                            "countryid": "US",
                            "listid": "ip-city-chart-4207400"
                        },
                        {
                            "id": "4453066",
                            "name": "Asheville",
                            "countryid": "US",
                            "listid": "ip-city-chart-4453066"
                        },
                        {
                            "id": "5423573",
                            "name": "Grand Junction",
                            "countryid": "US",
                            "listid": "ip-city-chart-5423573"
                        },
                        {
                            "id": "5640350",
                            "name": "Billings",
                            "countryid": "US",
                            "listid": "ip-city-chart-5640350"
                        },
                        {
                            "id": "5175865",
                            "name": "Warren OH",
                            "countryid": "US",
                            "listid": "ip-city-chart-5175865"
                        },
                        {
                            "id": "5403191",
                            "name": "Tracy CA",
                            "countryid": "US",
                            "listid": "ip-city-chart-5403191"
                        },
                        {
                            "id": "5322053",
                            "name": "Yuma",
                            "countryid": "US",
                            "listid": "ip-city-chart-5322053"
                        },
                        {
                            "id": "5188843",
                            "name": "Erie",
                            "countryid": "US",
                            "listid": "ip-city-chart-5188843"
                        },
                        {
                            "id": "4969398",
                            "name": "Lewiston",
                            "countryid": "US",
                            "listid": "ip-city-chart-4969398"
                        },
                        {
                            "id": "5610810",
                            "name": "Twin Falls",
                            "countryid": "US",
                            "listid": "ip-city-chart-5610810"
                        },
                        {
                            "id": "5044407",
                            "name": "Saint Cloud",
                            "countryid": "US",
                            "listid": "ip-city-chart-5044407"
                        },
                        {
                            "id": "5688025",
                            "name": "Bismarck",
                            "countryid": "US",
                            "listid": "ip-city-chart-5688025"
                        },
                        {
                            "id": "5336269",
                            "name": "Chico",
                            "countryid": "US",
                            "listid": "ip-city-chart-5336269"
                        },
                        {
                            "id": "5821086",
                            "name": "Cheyenne",
                            "countryid": "US",
                            "listid": "ip-city-chart-5821086"
                        },
                        {
                            "id": "4219762",
                            "name": "Rome",
                            "countryid": "US",
                            "listid": "ip-city-chart-4219762"
                        },
                        {
                            "id": "5786899",
                            "name": "Bellingham",
                            "countryid": "US",
                            "listid": "ip-city-chart-5786899"
                        },
                        {
                            "id": "5855927",
                            "name": "Hilo",
                            "countryid": "US",
                            "listid": "ip-city-chart-5855927"
                        },
                        {
                            "id": "5604045",
                            "name": "Pocatello",
                            "countryid": "US",
                            "listid": "ip-city-chart-5604045"
                        },
                        {
                            "id": "5666639",
                            "name": "Missoula",
                            "countryid": "US",
                            "listid": "ip-city-chart-5666639"
                        },
                        {
                            "id": "5024719",
                            "name": "Duluth",
                            "countryid": "US",
                            "listid": "ip-city-chart-5024719"
                        },
                        {
                            "id": "5713587",
                            "name": "Bend",
                            "countryid": "US",
                            "listid": "ip-city-chart-5713587"
                        },
                        {
                            "id": "5820705",
                            "name": "Casper",
                            "countryid": "US",
                            "listid": "ip-city-chart-5820705"
                        },
                        {
                            "id": "4558475",
                            "name": "Hanover PA",
                            "countryid": "US",
                            "listid": "ip-city-chart-4558475"
                        },
                        {
                            "id": "5861897",
                            "name": "Fairbanks",
                            "countryid": "US",
                            "listid": "ip-city-chart-5861897"
                        },
                        {
                            "id": "5655240",
                            "name": "Great Falls",
                            "countryid": "US",
                            "listid": "ip-city-chart-5655240"
                        },
                        {
                            "id": "4156268",
                            "name": "Freeport FL",
                            "countryid": "US",
                            "listid": "ip-city-chart-4156268"
                        },
                        {
                            "id": "5069297",
                            "name": "Grand Island",
                            "countryid": "US",
                            "listid": "ip-city-chart-5069297"
                        },
                        {
                            "id": "4947459",
                            "name": "Pittsfield",
                            "countryid": "US",
                            "listid": "ip-city-chart-4947459"
                        },
                        {
                            "id": "4838204",
                            "name": "Mansfield City",
                            "countryid": "US",
                            "listid": "ip-city-chart-4838204"
                        },
                        {
                            "id": "4884453",
                            "name": "Belvidere",
                            "countryid": "US",
                            "listid": "ip-city-chart-4884453"
                        },
                        {
                            "id": "4274994",
                            "name": "Manhattan",
                            "countryid": "US",
                            "listid": "ip-city-chart-4274994"
                        },
                        {
                            "id": "5785243",
                            "name": "Aberdeen SD",
                            "countryid": "US",
                            "listid": "ip-city-chart-5785243"
                        },
                        {
                            "id": "4081671",
                            "name": "Oneonta",
                            "countryid": "US",
                            "listid": "ip-city-chart-4081671"
                        },
                        {
                            "id": "4126226",
                            "name": "Pine Bluff",
                            "countryid": "US",
                            "listid": "ip-city-chart-4126226"
                        },
                        {
                            "id": "5697939",
                            "name": "North Platte",
                            "countryid": "US",
                            "listid": "ip-city-chart-5697939"
                        },
                        {
                            "id": "5225857",
                            "name": "Aberdeen WA",
                            "countryid": "US",
                            "listid": "ip-city-chart-5225857"
                        },
                        {
                            "id": "4191916",
                            "name": "Douglas GA",
                            "countryid": "US",
                            "listid": "ip-city-chart-4191916"
                        },
                        {
                            "id": "5088262",
                            "name": "Keene NH",
                            "countryid": "US",
                            "listid": "ip-city-chart-5088262"
                        },
                        {
                            "id": "4143658",
                            "name": "Milford DE",
                            "countryid": "US",
                            "listid": "ip-city-chart-4143658"
                        },
                        {
                            "id": "5221637",
                            "name": "Coventry RI",
                            "countryid": "US",
                            "listid": "ip-city-chart-5221637"
                        },
                        {
                            "id": "5554072",
                            "name": "Juneau",
                            "countryid": "US",
                            "listid": "ip-city-chart-5554072"
                        },
                        {
                            "id": "5000947",
                            "name": "Marquette",
                            "countryid": "US",
                            "listid": "ip-city-chart-5000947"
                        },
                        {
                            "id": "5445298",
                            "name": "Dodge City",
                            "countryid": "US",
                            "listid": "ip-city-chart-5445298"
                        },
                        {
                            "id": "5807212",
                            "name": "Port Angeles",
                            "countryid": "US",
                            "listid": "ip-city-chart-5807212"
                        },
                        {
                            "id": "5824805",
                            "name": "Evanston",
                            "countryid": "US",
                            "listid": "ip-city-chart-5824805"
                        },
                        {
                            "id": "4786522",
                            "name": "South Boston",
                            "countryid": "US",
                            "listid": "ip-city-chart-4786522"
                        },
                        {
                            "id": "5520552",
                            "name": "Dumas",
                            "countryid": "US",
                            "listid": "ip-city-chart-5520552"
                        },
                        {
                            "id": "5039173",
                            "name": "New Ulm MN",
                            "countryid": "US",
                            "listid": "ip-city-chart-5039173"
                        },
                        {
                            "id": "5063342",
                            "name": "Aurora",
                            "countryid": "US",
                            "listid": "ip-city-chart-5063342"
                        },
                        {
                            "id": "4849448",
                            "name": "Brooklyn",
                            "countryid": "US",
                            "listid": "ip-city-chart-4849448"
                        },
                        {
                            "id": "5077237",
                            "name": "Saint Paul",
                            "countryid": "US",
                            "listid": "ip-city-chart-5077237"
                        },
                        {
                            "id": "4421208",
                            "name": "Centreville",
                            "countryid": "US",
                            "listid": "ip-city-chart-4421208"
                        },
                        {
                            "id": "5233037",
                            "name": "Woonsocket",
                            "countryid": "US",
                            "listid": "ip-city-chart-5233037"
                        }
                    ],
                    "genres": [
                        {
                            "id": "US-1",
                            "countryid": "US",
                            "listid": "genre-country-chart-US-1",
                            "name": "Pop",
                            "urlPath": "pop",
                            "count": 100
                        },
                        {
                            "id": "US-2",
                            "countryid": "US",
                            "listid": "genre-country-chart-US-2",
                            "name": "Hip-Hop/Rap",
                            "urlPath": "hip-hop-rap",
                            "count": 100
                        },
                        {
                            "id": "US-3",
                            "countryid": "US",
                            "listid": "genre-country-chart-US-3",
                            "name": "Dance",
                            "urlPath": "dance",
                            "count": 100
                        },
                        {
                            "id": "US-10",
                            "countryid": "US",
                            "listid": "genre-country-chart-US-10",
                            "name": "Country",
                            "urlPath": "country",
                            "count": 100
                        }
                    ]
                },
                {
                    "id": "EG",
                    "listid": "ip-country-chart-EG",
                    "name": "Egypt",
                    "cities": [
                        {
                            "id": "360630",
                            "name": "Cairo",
                            "countryid": "EG",
                            "listid": "ip-city-chart-360630"
                        },
                        {
                            "id": "361058",
                            "name": "Alexandria",
                            "countryid": "EG",
                            "listid": "ip-city-chart-361058"
                        },
                        {
                            "id": "359493",
                            "name": "Zagazig",
                            "countryid": "EG",
                            "listid": "ip-city-chart-359493"
                        },
                        {
                            "id": "360761",
                            "name": "Al Manşūrah",
                            "countryid": "EG",
                            "listid": "ip-city-chart-360761"
                        },
                        {
                            "id": "360829",
                            "name": "Al Maḩallah al Kubrá",
                            "countryid": "EG",
                            "listid": "ip-city-chart-360829"
                        },
                        {
                            "id": "349158",
                            "name": "Shibīn al-KawmShibƒ´n al Kawm",
                            "countryid": "EG",
                            "listid": "ip-city-chart-349158"
                        },
                        {
                            "id": "361320",
                            "name": "Al Faiyūm",
                            "countryid": "EG",
                            "listid": "ip-city-chart-361320"
                        },
                        {
                            "id": "359783",
                            "name": "Asyūţ",
                            "countryid": "EG",
                            "listid": "ip-city-chart-359783"
                        },
                        {
                            "id": "359796",
                            "name": "Suez",
                            "countryid": "EG",
                            "listid": "ip-city-chart-359796"
                        },
                        {
                            "id": "358619",
                            "name": "Port Said",
                            "countryid": "EG",
                            "listid": "ip-city-chart-358619"
                        },
                        {
                            "id": "359792",
                            "name": "Aswan",
                            "countryid": "EG",
                            "listid": "ip-city-chart-359792"
                        },
                        {
                            "id": "360502",
                            "name": "Luxor",
                            "countryid": "EG",
                            "listid": "ip-city-chart-360502"
                        }
                    ],
                    "genres": []
                },
                {
                    "id": "IL",
                    "listid": "ip-country-chart-IL",
                    "momentum_listid": "risers-country-chart-IL",
                    "name": "Israel",
                    "cities": [
                        {
                            "id": "293397",
                            "name": "Tel Aviv",
                            "countryid": "IL",
                            "listid": "ip-city-chart-293397"
                        },
                        {
                            "id": "294801",
                            "name": "Haifa",
                            "countryid": "IL",
                            "listid": "ip-city-chart-294801"
                        },
                        {
                            "id": "294071",
                            "name": "Netanya",
                            "countryid": "IL",
                            "listid": "ip-city-chart-294071"
                        },
                        {
                            "id": "281184",
                            "name": "Jerusalem",
                            "countryid": "IL",
                            "listid": "ip-city-chart-281184"
                        },
                        {
                            "id": "295530",
                            "name": "Beersheba",
                            "countryid": "IL",
                            "listid": "ip-city-chart-295530"
                        }
                    ],
                    "genres": []
                },
                {
                    "id": "UY",
                    "listid": "ip-country-chart-UY",
                    "name": "Uruguay",
                    "cities": [
                        {
                            "id": "3441575",
                            "name": "Montevideo",
                            "countryid": "UY",
                            "listid": "ip-city-chart-3441575"
                        },
                        {
                            "id": "3440714",
                            "name": "Salto",
                            "countryid": "UY",
                            "listid": "ip-city-chart-3440714"
                        },
                        {
                            "id": "3440781",
                            "name": "Rivera",
                            "countryid": "UY",
                            "listid": "ip-city-chart-3440781"
                        },
                        {
                            "id": "3440791",
                            "name": "Río Branco",
                            "countryid": "UY",
                            "listid": "ip-city-chart-3440791"
                        }
                    ],
                    "genres": []
                },
                {
                    "id": "IN",
                    "listid": "ip-country-chart-IN",
                    "momentum_listid": "risers-country-chart-IN",
                    "name": "India",
                    "cities": [
                        {
                            "id": "1273294",
                            "name": "Delhi",
                            "countryid": "IN",
                            "listid": "ip-city-chart-1273294"
                        },
                        {
                            "id": "1275339",
                            "name": "Mumbai",
                            "countryid": "IN",
                            "listid": "ip-city-chart-1275339"
                        },
                        {
                            "id": "1277333",
                            "name": "Bengaluru",
                            "countryid": "IN",
                            "listid": "ip-city-chart-1277333"
                        },
                        {
                            "id": "1269843",
                            "name": "Hyderabad",
                            "countryid": "IN",
                            "listid": "ip-city-chart-1269843"
                        },
                        {
                            "id": "1273874",
                            "name": "Cochin",
                            "countryid": "IN",
                            "listid": "ip-city-chart-1273874"
                        },
                        {
                            "id": "1259229",
                            "name": "Pune",
                            "countryid": "IN",
                            "listid": "ip-city-chart-1259229"
                        },
                        {
                            "id": "1263694",
                            "name": "Manjeri",
                            "countryid": "IN",
                            "listid": "ip-city-chart-1263694"
                        },
                        {
                            "id": "1254163",
                            "name": "Thiruvananthapuram",
                            "countryid": "IN",
                            "listid": "ip-city-chart-1254163"
                        },
                        {
                            "id": "1264527",
                            "name": "Chennai",
                            "countryid": "IN",
                            "listid": "ip-city-chart-1264527"
                        },
                        {
                            "id": "1275218",
                            "name": "Botad",
                            "countryid": "IN",
                            "listid": "ip-city-chart-1275218"
                        },
                        {
                            "id": "1275004",
                            "name": "Kolkata",
                            "countryid": "IN",
                            "listid": "ip-city-chart-1275004"
                        },
                        {
                            "id": "1265873",
                            "name": "Kozhikode",
                            "countryid": "IN",
                            "listid": "ip-city-chart-1265873"
                        },
                        {
                            "id": "1255364",
                            "name": "Sūrat",
                            "countryid": "IN",
                            "listid": "ip-city-chart-1255364"
                        },
                        {
                            "id": "1254187",
                            "name": "Tiruchirappalli",
                            "countryid": "IN",
                            "listid": "ip-city-chart-1254187"
                        },
                        {
                            "id": "1264728",
                            "name": "Ludhiāna",
                            "countryid": "IN",
                            "listid": "ip-city-chart-1264728"
                        },
                        {
                            "id": "1269515",
                            "name": "Jaipur",
                            "countryid": "IN",
                            "listid": "ip-city-chart-1269515"
                        },
                        {
                            "id": "1254780",
                            "name": "Tellicherry",
                            "countryid": "IN",
                            "listid": "ip-city-chart-1254780"
                        },
                        {
                            "id": "1259091",
                            "name": "Kollam",
                            "countryid": "IN",
                            "listid": "ip-city-chart-1259091"
                        },
                        {
                            "id": "1265911",
                            "name": "Kottayam",
                            "countryid": "IN",
                            "listid": "ip-city-chart-1265911"
                        },
                        {
                            "id": "1268159",
                            "name": "Kanchipuram",
                            "countryid": "IN",
                            "listid": "ip-city-chart-1268159"
                        },
                        {
                            "id": "1273865",
                            "name": "Coimbatore",
                            "countryid": "IN",
                            "listid": "ip-city-chart-1273865"
                        },
                        {
                            "id": "1278985",
                            "name": "Alleppey",
                            "countryid": "IN",
                            "listid": "ip-city-chart-1278985"
                        },
                        {
                            "id": "1262775",
                            "name": "Morbi",
                            "countryid": "IN",
                            "listid": "ip-city-chart-1262775"
                        },
                        {
                            "id": "1262180",
                            "name": "Nagpur",
                            "countryid": "IN",
                            "listid": "ip-city-chart-1262180"
                        },
                        {
                            "id": "1269743",
                            "name": "Indore",
                            "countryid": "IN",
                            "listid": "ip-city-chart-1269743"
                        },
                        {
                            "id": "1253573",
                            "name": "Vadodara",
                            "countryid": "IN",
                            "listid": "ip-city-chart-1253573"
                        },
                        {
                            "id": "1258847",
                            "name": "Rājkot",
                            "countryid": "IN",
                            "listid": "ip-city-chart-1258847"
                        },
                        {
                            "id": "1264733",
                            "name": "Lucknow",
                            "countryid": "IN",
                            "listid": "ip-city-chart-1264733"
                        },
                        {
                            "id": "1254331",
                            "name": "Tiruvallur",
                            "countryid": "IN",
                            "listid": "ip-city-chart-1254331"
                        },
                        {
                            "id": "1271476",
                            "name": "Guwahati",
                            "countryid": "IN",
                            "listid": "ip-city-chart-1271476"
                        },
                        {
                            "id": "1274746",
                            "name": "Chandigarh",
                            "countryid": "IN",
                            "listid": "ip-city-chart-1274746"
                        },
                        {
                            "id": "1262321",
                            "name": "Mysore",
                            "countryid": "IN",
                            "listid": "ip-city-chart-1262321"
                        },
                        {
                            "id": "1263780",
                            "name": "Mangalore",
                            "countryid": "IN",
                            "listid": "ip-city-chart-1263780"
                        },
                        {
                            "id": "1268782",
                            "name": "Jalandhar",
                            "countryid": "IN",
                            "listid": "ip-city-chart-1268782"
                        },
                        {
                            "id": "1275841",
                            "name": "Bhopal",
                            "countryid": "IN",
                            "listid": "ip-city-chart-1275841"
                        },
                        {
                            "id": "1253102",
                            "name": "Visakhapatnam",
                            "countryid": "IN",
                            "listid": "ip-city-chart-1253102"
                        },
                        {
                            "id": "1269920",
                            "name": "Hubli",
                            "countryid": "IN",
                            "listid": "ip-city-chart-1269920"
                        },
                        {
                            "id": "1278710",
                            "name": "Amritsar",
                            "countryid": "IN",
                            "listid": "ip-city-chart-1278710"
                        },
                        {
                            "id": "1275817",
                            "name": "Bhubaneshwar",
                            "countryid": "IN",
                            "listid": "ip-city-chart-1275817"
                        },
                        {
                            "id": "1260086",
                            "name": "Patna",
                            "countryid": "IN",
                            "listid": "ip-city-chart-1260086"
                        },
                        {
                            "id": "1267995",
                            "name": "Kanpur",
                            "countryid": "IN",
                            "listid": "ip-city-chart-1267995"
                        },
                        {
                            "id": "1266285",
                            "name": "Kolhāpur",
                            "countryid": "IN",
                            "listid": "ip-city-chart-1266285"
                        },
                        {
                            "id": "1255634",
                            "name": "Srinagar",
                            "countryid": "IN",
                            "listid": "ip-city-chart-1255634"
                        },
                        {
                            "id": "1253184",
                            "name": "Vijayawada",
                            "countryid": "IN",
                            "listid": "ip-city-chart-1253184"
                        },
                        {
                            "id": "1258980",
                            "name": "Raipur",
                            "countryid": "IN",
                            "listid": "ip-city-chart-1258980"
                        },
                        {
                            "id": "1256237",
                            "name": "Shimla",
                            "countryid": "IN",
                            "listid": "ip-city-chart-1256237"
                        },
                        {
                            "id": "1258526",
                            "name": "Ranchi",
                            "countryid": "IN",
                            "listid": "ip-city-chart-1258526"
                        },
                        {
                            "id": "1279233",
                            "name": "Ahmedabad",
                            "countryid": "IN",
                            "listid": "ip-city-chart-1279233"
                        },
                        {
                            "id": "1266122",
                            "name": "Korba",
                            "countryid": "IN",
                            "listid": "ip-city-chart-1266122"
                        },
                        {
                            "id": "1256525",
                            "name": "Shiliguri",
                            "countryid": "IN",
                            "listid": "ip-city-chart-1256525"
                        }
                    ],
                    "genres": []
                },
                {
                    "id": "ZA",
                    "listid": "ip-country-chart-ZA",
                    "momentum_listid": "risers-country-chart-ZA",
                    "name": "South Africa",
                    "cities": [
                        {
                            "id": "993800",
                            "name": "Johannesburg",
                            "countryid": "ZA",
                            "listid": "ip-city-chart-993800"
                        },
                        {
                            "id": "964137",
                            "name": "Pretoria",
                            "countryid": "ZA",
                            "listid": "ip-city-chart-964137"
                        },
                        {
                            "id": "3369157",
                            "name": "Cape Town",
                            "countryid": "ZA",
                            "listid": "ip-city-chart-3369157"
                        },
                        {
                            "id": "1007311",
                            "name": "Durban",
                            "countryid": "ZA",
                            "listid": "ip-city-chart-1007311"
                        },
                        {
                            "id": "1020098",
                            "name": "Benoni",
                            "countryid": "ZA",
                            "listid": "ip-city-chart-1020098"
                        },
                        {
                            "id": "964420",
                            "name": "Port Elizabeth",
                            "countryid": "ZA",
                            "listid": "ip-city-chart-964420"
                        },
                        {
                            "id": "949880",
                            "name": "Tembisa",
                            "countryid": "ZA",
                            "listid": "ip-city-chart-949880"
                        },
                        {
                            "id": "1018725",
                            "name": "Bloemfontein",
                            "countryid": "ZA",
                            "listid": "ip-city-chart-1018725"
                        },
                        {
                            "id": "980921",
                            "name": "Mabopane",
                            "countryid": "ZA",
                            "listid": "ip-city-chart-980921"
                        },
                        {
                            "id": "944385",
                            "name": "Vereeniging",
                            "countryid": "ZA",
                            "listid": "ip-city-chart-944385"
                        },
                        {
                            "id": "962367",
                            "name": "Richards Bay",
                            "countryid": "ZA",
                            "listid": "ip-city-chart-962367"
                        },
                        {
                            "id": "965289",
                            "name": "Polokwane",
                            "countryid": "ZA",
                            "listid": "ip-city-chart-965289"
                        },
                        {
                            "id": "965301",
                            "name": "Pietermaritzburg",
                            "countryid": "ZA",
                            "listid": "ip-city-chart-965301"
                        },
                        {
                            "id": "1006984",
                            "name": "East London",
                            "countryid": "ZA",
                            "listid": "ip-city-chart-1006984"
                        },
                        {
                            "id": "971534",
                            "name": "Nelspruit",
                            "countryid": "ZA",
                            "listid": "ip-city-chart-971534"
                        },
                        {
                            "id": "940909",
                            "name": "Welkom",
                            "countryid": "ZA",
                            "listid": "ip-city-chart-940909"
                        },
                        {
                            "id": "971421",
                            "name": "Newcastle",
                            "countryid": "ZA",
                            "listid": "ip-city-chart-971421"
                        },
                        {
                            "id": "945945",
                            "name": "Upington",
                            "countryid": "ZA",
                            "listid": "ip-city-chart-945945"
                        },
                        {
                            "id": "3359736",
                            "name": "Vredendal",
                            "countryid": "ZA",
                            "listid": "ip-city-chart-3359736"
                        },
                        {
                            "id": "967106",
                            "name": "Oudtshoorn",
                            "countryid": "ZA",
                            "listid": "ip-city-chart-967106"
                        },
                        {
                            "id": "956907",
                            "name": "Schweizer-Reneke",
                            "countryid": "ZA",
                            "listid": "ip-city-chart-956907"
                        },
                        {
                            "id": "3361142",
                            "name": "Springbok",
                            "countryid": "ZA",
                            "listid": "ip-city-chart-3361142"
                        }
                    ],
                    "genres": [
                        {
                            "id": "ZA-1",
                            "countryid": "ZA",
                            "listid": "genre-country-chart-ZA-1",
                            "name": "Pop",
                            "urlPath": "pop",
                            "count": 100
                        },
                        {
                            "id": "ZA-2",
                            "countryid": "ZA",
                            "listid": "genre-country-chart-ZA-2",
                            "name": "Hip-Hop/Rap",
                            "urlPath": "hip-hop-rap",
                            "count": 100
                        },
                        {
                            "id": "ZA-3",
                            "countryid": "ZA",
                            "listid": "genre-country-chart-ZA-3",
                            "name": "Dance",
                            "urlPath": "dance",
                            "count": 100
                        }
                    ]
                },
                {
                    "id": "IT",
                    "listid": "ip-country-chart-IT",
                    "momentum_listid": "risers-country-chart-IT",
                    "name": "Italy",
                    "cities": [
                        {
                            "id": "3173435",
                            "name": "Milan",
                            "countryid": "IT",
                            "listid": "ip-city-chart-3173435"
                        },
                        {
                            "id": "3169070",
                            "name": "Rome",
                            "countryid": "IT",
                            "listid": "ip-city-chart-3169070"
                        },
                        {
                            "id": "3172394",
                            "name": "Naples",
                            "countryid": "IT",
                            "listid": "ip-city-chart-3172394"
                        },
                        {
                            "id": "3165524",
                            "name": "Turin",
                            "countryid": "IT",
                            "listid": "ip-city-chart-3165524"
                        },
                        {
                            "id": "2523920",
                            "name": "Palermo",
                            "countryid": "IT",
                            "listid": "ip-city-chart-2523920"
                        },
                        {
                            "id": "3173529",
                            "name": "Mestre",
                            "countryid": "IT",
                            "listid": "ip-city-chart-3173529"
                        },
                        {
                            "id": "3181554",
                            "name": "Brescia",
                            "countryid": "IT",
                            "listid": "ip-city-chart-3181554"
                        },
                        {
                            "id": "3182164",
                            "name": "Bergamo",
                            "countryid": "IT",
                            "listid": "ip-city-chart-3182164"
                        },
                        {
                            "id": "3164527",
                            "name": "Verona",
                            "countryid": "IT",
                            "listid": "ip-city-chart-3164527"
                        },
                        {
                            "id": "3171728",
                            "name": "Padova",
                            "countryid": "IT",
                            "listid": "ip-city-chart-3171728"
                        },
                        {
                            "id": "3181928",
                            "name": "Bologna",
                            "countryid": "IT",
                            "listid": "ip-city-chart-3181928"
                        },
                        {
                            "id": "3176959",
                            "name": "Florence",
                            "countryid": "IT",
                            "listid": "ip-city-chart-3176959"
                        },
                        {
                            "id": "3173331",
                            "name": "Modena",
                            "countryid": "IT",
                            "listid": "ip-city-chart-3173331"
                        },
                        {
                            "id": "2525068",
                            "name": "Catania",
                            "countryid": "IT",
                            "listid": "ip-city-chart-2525068"
                        },
                        {
                            "id": "3182351",
                            "name": "Bari",
                            "countryid": "IT",
                            "listid": "ip-city-chart-3182351"
                        },
                        {
                            "id": "3176219",
                            "name": "Genoa",
                            "countryid": "IT",
                            "listid": "ip-city-chart-3176219"
                        },
                        {
                            "id": "3168673",
                            "name": "Salerno",
                            "countryid": "IT",
                            "listid": "ip-city-chart-3168673"
                        },
                        {
                            "id": "2525473",
                            "name": "Cagliari",
                            "countryid": "IT",
                            "listid": "ip-city-chart-2525473"
                        },
                        {
                            "id": "3171168",
                            "name": "Pescara",
                            "countryid": "IT",
                            "listid": "ip-city-chart-3171168"
                        },
                        {
                            "id": "3174659",
                            "name": "Livorno",
                            "countryid": "IT",
                            "listid": "ip-city-chart-3174659"
                        },
                        {
                            "id": "3165926",
                            "name": "Taranto",
                            "countryid": "IT",
                            "listid": "ip-city-chart-3165926"
                        },
                        {
                            "id": "2524170",
                            "name": "Messina",
                            "countryid": "IT",
                            "listid": "ip-city-chart-2524170"
                        },
                        {
                            "id": "3183072",
                            "name": "Andria",
                            "countryid": "IT",
                            "listid": "ip-city-chart-3183072"
                        },
                        {
                            "id": "3174953",
                            "name": "Lecce",
                            "countryid": "IT",
                            "listid": "ip-city-chart-3174953"
                        },
                        {
                            "id": "3171457",
                            "name": "Parma",
                            "countryid": "IT",
                            "listid": "ip-city-chart-3171457"
                        },
                        {
                            "id": "3164419",
                            "name": "Vicenza",
                            "countryid": "IT",
                            "listid": "ip-city-chart-3164419"
                        },
                        {
                            "id": "3169361",
                            "name": "Rimini",
                            "countryid": "IT",
                            "listid": "ip-city-chart-3169361"
                        },
                        {
                            "id": "3170147",
                            "name": "Pordenone",
                            "countryid": "IT",
                            "listid": "ip-city-chart-3170147"
                        },
                        {
                            "id": "3176746",
                            "name": "Forlì",
                            "countryid": "IT",
                            "listid": "ip-city-chart-3176746"
                        },
                        {
                            "id": "3164699",
                            "name": "Varese",
                            "countryid": "IT",
                            "listid": "ip-city-chart-3164699"
                        },
                        {
                            "id": "3183178",
                            "name": "Altamura",
                            "countryid": "IT",
                            "listid": "ip-city-chart-3183178"
                        },
                        {
                            "id": "3165185",
                            "name": "Trieste",
                            "countryid": "IT",
                            "listid": "ip-city-chart-3165185"
                        },
                        {
                            "id": "3177090",
                            "name": "Ferrara",
                            "countryid": "IT",
                            "listid": "ip-city-chart-3177090"
                        },
                        {
                            "id": "3169522",
                            "name": "Reggio nell'Emilia",
                            "countryid": "IT",
                            "listid": "ip-city-chart-3169522"
                        },
                        {
                            "id": "3165243",
                            "name": "Trento",
                            "countryid": "IT",
                            "listid": "ip-city-chart-3165243"
                        },
                        {
                            "id": "3175081",
                            "name": "La Spezia",
                            "countryid": "IT",
                            "listid": "ip-city-chart-3175081"
                        },
                        {
                            "id": "3181913",
                            "name": "Bolzano",
                            "countryid": "IT",
                            "listid": "ip-city-chart-3181913"
                        },
                        {
                            "id": "6457398",
                            "name": "Verbania",
                            "countryid": "IT",
                            "listid": "ip-city-chart-6457398"
                        },
                        {
                            "id": "3182297",
                            "name": "Bassano del Grappa",
                            "countryid": "IT",
                            "listid": "ip-city-chart-3182297"
                        },
                        {
                            "id": "3183089",
                            "name": "Ancona",
                            "countryid": "IT",
                            "listid": "ip-city-chart-3183089"
                        },
                        {
                            "id": "3177610",
                            "name": "Desenzano del Garda",
                            "countryid": "IT",
                            "listid": "ip-city-chart-3177610"
                        },
                        {
                            "id": "3181528",
                            "name": "Brindisi",
                            "countryid": "IT",
                            "listid": "ip-city-chart-3181528"
                        },
                        {
                            "id": "3182884",
                            "name": "Arezzo",
                            "countryid": "IT",
                            "listid": "ip-city-chart-3182884"
                        },
                        {
                            "id": "3173131",
                            "name": "Monopoli",
                            "countryid": "IT",
                            "listid": "ip-city-chart-3173131"
                        },
                        {
                            "id": "3167777",
                            "name": "San Remo",
                            "countryid": "IT",
                            "listid": "ip-city-chart-3167777"
                        },
                        {
                            "id": "2525059",
                            "name": "Catanzaro",
                            "countryid": "IT",
                            "listid": "ip-city-chart-2525059"
                        },
                        {
                            "id": "2524653",
                            "name": "Gela",
                            "countryid": "IT",
                            "listid": "ip-city-chart-2524653"
                        },
                        {
                            "id": "3175786",
                            "name": "Grosseto",
                            "countryid": "IT",
                            "listid": "ip-city-chart-3175786"
                        },
                        {
                            "id": "3166917",
                            "name": "Schio",
                            "countryid": "IT",
                            "listid": "ip-city-chart-3166917"
                        },
                        {
                            "id": "3177315",
                            "name": "Fabriano",
                            "countryid": "IT",
                            "listid": "ip-city-chart-3177315"
                        }
                    ],
                    "genres": [
                        {
                            "id": "IT-1",
                            "countryid": "IT",
                            "listid": "genre-country-chart-IT-1",
                            "name": "Pop",
                            "urlPath": "pop",
                            "count": 100
                        },
                        {
                            "id": "IT-2",
                            "countryid": "IT",
                            "listid": "genre-country-chart-IT-2",
                            "name": "Hip-Hop/Rap",
                            "urlPath": "hip-hop-rap",
                            "count": 100
                        },
                        {
                            "id": "IT-3",
                            "countryid": "IT",
                            "listid": "genre-country-chart-IT-3",
                            "name": "Dance",
                            "urlPath": "dance",
                            "count": 100
                        }
                    ]
                },
                {
                    "id": "MX",
                    "listid": "ip-country-chart-MX",
                    "momentum_listid": "risers-country-chart-MX",
                    "name": "Mexico",
                    "cities": [
                        {
                            "id": "3530597",
                            "name": "Mexico City",
                            "countryid": "MX",
                            "listid": "ip-city-chart-3530597"
                        },
                        {
                            "id": "4005539",
                            "name": "Guadalajara",
                            "countryid": "MX",
                            "listid": "ip-city-chart-4005539"
                        },
                        {
                            "id": "3521081",
                            "name": "Puebla",
                            "countryid": "MX",
                            "listid": "ip-city-chart-3521081"
                        },
                        {
                            "id": "3995465",
                            "name": "Monterrey",
                            "countryid": "MX",
                            "listid": "ip-city-chart-3995465"
                        },
                        {
                            "id": "3981609",
                            "name": "Tijuana",
                            "countryid": "MX",
                            "listid": "ip-city-chart-3981609"
                        },
                        {
                            "id": "3518692",
                            "name": "San Juan del Río",
                            "countryid": "MX",
                            "listid": "ip-city-chart-3518692"
                        },
                        {
                            "id": "4013708",
                            "name": "Juárez",
                            "countryid": "MX",
                            "listid": "ip-city-chart-4013708"
                        },
                        {
                            "id": "3998655",
                            "name": "León de los Aldama",
                            "countryid": "MX",
                            "listid": "ip-city-chart-3998655"
                        },
                        {
                            "id": "3985606",
                            "name": "San Luis Potosí",
                            "countryid": "MX",
                            "listid": "ip-city-chart-3985606"
                        },
                        {
                            "id": "3822723",
                            "name": "Alfredo V. Bonfil",
                            "countryid": "MX",
                            "listid": "ip-city-chart-3822723"
                        },
                        {
                            "id": "3523349",
                            "name": "Mérida",
                            "countryid": "MX",
                            "listid": "ip-city-chart-3523349"
                        },
                        {
                            "id": "3981254",
                            "name": "Torreón",
                            "countryid": "MX",
                            "listid": "ip-city-chart-3981254"
                        },
                        {
                            "id": "4019233",
                            "name": "Aguascalientes",
                            "countryid": "MX",
                            "listid": "ip-city-chart-4019233"
                        },
                        {
                            "id": "3514783",
                            "name": "Veracruz",
                            "countryid": "MX",
                            "listid": "ip-city-chart-3514783"
                        },
                        {
                            "id": "4005492",
                            "name": "Guadalupe",
                            "countryid": "MX",
                            "listid": "ip-city-chart-4005492"
                        },
                        {
                            "id": "4014338",
                            "name": "Chihuahua",
                            "countryid": "MX",
                            "listid": "ip-city-chart-4014338"
                        },
                        {
                            "id": "4018390",
                            "name": "Ciudad Apodaca",
                            "countryid": "MX",
                            "listid": "ip-city-chart-4018390"
                        },
                        {
                            "id": "3522210",
                            "name": "Pachuca de Soto",
                            "countryid": "MX",
                            "listid": "ip-city-chart-3522210"
                        },
                        {
                            "id": "3991164",
                            "name": "Santiago de Querétaro",
                            "countryid": "MX",
                            "listid": "ip-city-chart-3991164"
                        },
                        {
                            "id": "3995402",
                            "name": "Morelia",
                            "countryid": "MX",
                            "listid": "ip-city-chart-3995402"
                        },
                        {
                            "id": "3520339",
                            "name": "Reynosa",
                            "countryid": "MX",
                            "listid": "ip-city-chart-3520339"
                        },
                        {
                            "id": "4004330",
                            "name": "Irapuato",
                            "countryid": "MX",
                            "listid": "ip-city-chart-4004330"
                        },
                        {
                            "id": "3526617",
                            "name": "Xalapa de Enríquez",
                            "countryid": "MX",
                            "listid": "ip-city-chart-3526617"
                        },
                        {
                            "id": "3996069",
                            "name": "Mexicali",
                            "countryid": "MX",
                            "listid": "ip-city-chart-3996069"
                        },
                        {
                            "id": "3514670",
                            "name": "Villahermosa",
                            "countryid": "MX",
                            "listid": "ip-city-chart-3514670"
                        },
                        {
                            "id": "3522507",
                            "name": "Oaxaca",
                            "countryid": "MX",
                            "listid": "ip-city-chart-3522507"
                        },
                        {
                            "id": "3815415",
                            "name": "Tlaxcala",
                            "countryid": "MX",
                            "listid": "ip-city-chart-3815415"
                        },
                        {
                            "id": "3985241",
                            "name": "San Nicolás de los Garza",
                            "countryid": "MX",
                            "listid": "ip-city-chart-3985241"
                        },
                        {
                            "id": "3515001",
                            "name": "Tuxtla",
                            "countryid": "MX",
                            "listid": "ip-city-chart-3515001"
                        },
                        {
                            "id": "4004898",
                            "name": "Hermosillo",
                            "countryid": "MX",
                            "listid": "ip-city-chart-4004898"
                        },
                        {
                            "id": "3529612",
                            "name": "Ecatepec de Morelos",
                            "countryid": "MX",
                            "listid": "ip-city-chart-3529612"
                        },
                        {
                            "id": "4014875",
                            "name": "Celaya",
                            "countryid": "MX",
                            "listid": "ip-city-chart-4014875"
                        },
                        {
                            "id": "3988086",
                            "name": "Saltillo",
                            "countryid": "MX",
                            "listid": "ip-city-chart-3988086"
                        },
                        {
                            "id": "3530240",
                            "name": "Córdoba",
                            "countryid": "MX",
                            "listid": "ip-city-chart-3530240"
                        },
                        {
                            "id": "4018584",
                            "name": "Amealco",
                            "countryid": "MX",
                            "listid": "ip-city-chart-4018584"
                        },
                        {
                            "id": "4012176",
                            "name": "Culiacán",
                            "countryid": "MX",
                            "listid": "ip-city-chart-4012176"
                        },
                        {
                            "id": "3533462",
                            "name": "Acapulco de Juárez",
                            "countryid": "MX",
                            "listid": "ip-city-chart-3533462"
                        },
                        {
                            "id": "3530594",
                            "name": "Ciudad Madero",
                            "countryid": "MX",
                            "listid": "ip-city-chart-3530594"
                        },
                        {
                            "id": "4011743",
                            "name": "Victoria de Durango",
                            "countryid": "MX",
                            "listid": "ip-city-chart-4011743"
                        },
                        {
                            "id": "3980760",
                            "name": "Uruapan",
                            "countryid": "MX",
                            "listid": "ip-city-chart-3980760"
                        },
                        {
                            "id": "3532617",
                            "name": "Atlacomulco de Fabela",
                            "countryid": "MX",
                            "listid": "ip-city-chart-3532617"
                        },
                        {
                            "id": "3522551",
                            "name": "Nuevo Laredo",
                            "countryid": "MX",
                            "listid": "ip-city-chart-3522551"
                        },
                        {
                            "id": "3997479",
                            "name": "Los Mochis",
                            "countryid": "MX",
                            "listid": "ip-city-chart-3997479"
                        },
                        {
                            "id": "3981941",
                            "name": "Tepic",
                            "countryid": "MX",
                            "listid": "ip-city-chart-3981941"
                        },
                        {
                            "id": "3531673",
                            "name": "Cancún",
                            "countryid": "MX",
                            "listid": "ip-city-chart-3531673"
                        },
                        {
                            "id": "3818579",
                            "name": "Venustiano Carranza",
                            "countryid": "MX",
                            "listid": "ip-city-chart-3818579"
                        },
                        {
                            "id": "3515004",
                            "name": "Tuxtla",
                            "countryid": "MX",
                            "listid": "ip-city-chart-3515004"
                        },
                        {
                            "id": "3976161",
                            "name": "Adolfo López Mateos",
                            "countryid": "MX",
                            "listid": "ip-city-chart-3976161"
                        },
                        {
                            "id": "3482886",
                            "name": "Cuauhtémoc",
                            "countryid": "MX",
                            "listid": "ip-city-chart-3482886"
                        },
                        {
                            "id": "4018648",
                            "name": "Álvaro Obregón",
                            "countryid": "MX",
                            "listid": "ip-city-chart-4018648"
                        }
                    ],
                    "genres": [
                        {
                            "id": "MX-1",
                            "countryid": "MX",
                            "listid": "genre-country-chart-MX-1",
                            "name": "Pop",
                            "urlPath": "pop",
                            "count": 100
                        },
                        {
                            "id": "MX-2",
                            "countryid": "MX",
                            "listid": "genre-country-chart-MX-2",
                            "name": "Hip-Hop/Rap",
                            "urlPath": "hip-hop-rap",
                            "count": 100
                        },
                        {
                            "id": "MX-3",
                            "countryid": "MX",
                            "listid": "genre-country-chart-MX-3",
                            "name": "Dance",
                            "urlPath": "dance",
                            "count": 100
                        }
                    ]
                },
                {
                    "id": "MY",
                    "listid": "ip-country-chart-MY",
                    "name": "Malaysia",
                    "cities": [
                        {
                            "id": "1735161",
                            "name": "Kuala Lumpur",
                            "countryid": "MY",
                            "listid": "ip-city-chart-1735161"
                        },
                        {
                            "id": "1735106",
                            "name": "George Town",
                            "countryid": "MY",
                            "listid": "ip-city-chart-1735106"
                        },
                        {
                            "id": "1734759",
                            "name": "Malacca",
                            "countryid": "MY",
                            "listid": "ip-city-chart-1734759"
                        },
                        {
                            "id": "1732905",
                            "name": "Klang",
                            "countryid": "MY",
                            "listid": "ip-city-chart-1732905"
                        },
                        {
                            "id": "1732752",
                            "name": "Johor Bahru",
                            "countryid": "MY",
                            "listid": "ip-city-chart-1732752"
                        },
                        {
                            "id": "1734634",
                            "name": "Ipoh",
                            "countryid": "MY",
                            "listid": "ip-city-chart-1734634"
                        },
                        {
                            "id": "1735634",
                            "name": "Kuching",
                            "countryid": "MY",
                            "listid": "ip-city-chart-1735634"
                        },
                        {
                            "id": "1733432",
                            "name": "Kota Kinabalu",
                            "countryid": "MY",
                            "listid": "ip-city-chart-1733432"
                        },
                        {
                            "id": "1736376",
                            "name": "Kota Bharu",
                            "countryid": "MY",
                            "listid": "ip-city-chart-1736376"
                        },
                        {
                            "id": "1734810",
                            "name": "Seremban",
                            "countryid": "MY",
                            "listid": "ip-city-chart-1734810"
                        },
                        {
                            "id": "6697380",
                            "name": "Putrajaya",
                            "countryid": "MY",
                            "listid": "ip-city-chart-6697380"
                        },
                        {
                            "id": "1735227",
                            "name": "Kuantan",
                            "countryid": "MY",
                            "listid": "ip-city-chart-1735227"
                        },
                        {
                            "id": "1738050",
                            "name": "Miri",
                            "countryid": "MY",
                            "listid": "ip-city-chart-1738050"
                        },
                        {
                            "id": "1734052",
                            "name": "Sandakan",
                            "countryid": "MY",
                            "listid": "ip-city-chart-1734052"
                        }
                    ],
                    "genres": []
                },
                {
                    "id": "ES",
                    "listid": "ip-country-chart-ES",
                    "momentum_listid": "risers-country-chart-ES",
                    "name": "Spain",
                    "cities": [
                        {
                            "id": "3117735",
                            "name": "Madrid",
                            "countryid": "ES",
                            "listid": "ip-city-chart-3117735"
                        },
                        {
                            "id": "3128760",
                            "name": "Barcelona",
                            "countryid": "ES",
                            "listid": "ip-city-chart-3128760"
                        },
                        {
                            "id": "2509954",
                            "name": "Valencia",
                            "countryid": "ES",
                            "listid": "ip-city-chart-2509954"
                        },
                        {
                            "id": "2510911",
                            "name": "Sevilla",
                            "countryid": "ES",
                            "listid": "ip-city-chart-2510911"
                        },
                        {
                            "id": "3128026",
                            "name": "Bilbao",
                            "countryid": "ES",
                            "listid": "ip-city-chart-3128026"
                        },
                        {
                            "id": "3104324",
                            "name": "Zaragoza",
                            "countryid": "ES",
                            "listid": "ip-city-chart-3104324"
                        },
                        {
                            "id": "2512989",
                            "name": "Palma",
                            "countryid": "ES",
                            "listid": "ip-city-chart-2512989"
                        },
                        {
                            "id": "2515270",
                            "name": "Las Palmas de Gran Canaria",
                            "countryid": "ES",
                            "listid": "ip-city-chart-2515270"
                        },
                        {
                            "id": "2514256",
                            "name": "Málaga",
                            "countryid": "ES",
                            "listid": "ip-city-chart-2514256"
                        },
                        {
                            "id": "3119841",
                            "name": "A Coruña",
                            "countryid": "ES",
                            "listid": "ip-city-chart-3119841"
                        },
                        {
                            "id": "2513416",
                            "name": "Murcia",
                            "countryid": "ES",
                            "listid": "ip-city-chart-2513416"
                        },
                        {
                            "id": "3110044",
                            "name": "Donostia / San Sebastián",
                            "countryid": "ES",
                            "listid": "ip-city-chart-3110044"
                        },
                        {
                            "id": "3108288",
                            "name": "Tarragona",
                            "countryid": "ES",
                            "listid": "ip-city-chart-3108288"
                        },
                        {
                            "id": "3114472",
                            "name": "Pamplona",
                            "countryid": "ES",
                            "listid": "ip-city-chart-3114472"
                        },
                        {
                            "id": "2517117",
                            "name": "Granada",
                            "countryid": "ES",
                            "listid": "ip-city-chart-2517117"
                        },
                        {
                            "id": "2521978",
                            "name": "Alicante",
                            "countryid": "ES",
                            "listid": "ip-city-chart-2521978"
                        },
                        {
                            "id": "3106672",
                            "name": "Valladolid",
                            "countryid": "ES",
                            "listid": "ip-city-chart-3106672"
                        },
                        {
                            "id": "2511174",
                            "name": "Santa Cruz de Tenerife",
                            "countryid": "ES",
                            "listid": "ip-city-chart-2511174"
                        },
                        {
                            "id": "3105184",
                            "name": "Vilanova i la Geltrú",
                            "countryid": "ES",
                            "listid": "ip-city-chart-3105184"
                        },
                        {
                            "id": "3105976",
                            "name": "Vigo",
                            "countryid": "ES",
                            "listid": "ip-city-chart-3105976"
                        },
                        {
                            "id": "2520600",
                            "name": "Cadiz",
                            "countryid": "ES",
                            "listid": "ip-city-chart-2520600"
                        },
                        {
                            "id": "2520058",
                            "name": "Cartagena",
                            "countryid": "ES",
                            "listid": "ip-city-chart-2520058"
                        },
                        {
                            "id": "3121424",
                            "name": "Gijón",
                            "countryid": "ES",
                            "listid": "ip-city-chart-3121424"
                        },
                        {
                            "id": "2521886",
                            "name": "Almería",
                            "countryid": "ES",
                            "listid": "ip-city-chart-2521886"
                        },
                        {
                            "id": "3109718",
                            "name": "Santander",
                            "countryid": "ES",
                            "listid": "ip-city-chart-3109718"
                        },
                        {
                            "id": "2519240",
                            "name": "Córdoba",
                            "countryid": "ES",
                            "listid": "ip-city-chart-2519240"
                        },
                        {
                            "id": "3127978",
                            "name": "Blanes",
                            "countryid": "ES",
                            "listid": "ip-city-chart-3127978"
                        },
                        {
                            "id": "3121456",
                            "name": "Girona",
                            "countryid": "ES",
                            "listid": "ip-city-chart-3121456"
                        },
                        {
                            "id": "2521582",
                            "name": "Arona",
                            "countryid": "ES",
                            "listid": "ip-city-chart-2521582"
                        },
                        {
                            "id": "2522013",
                            "name": "Algeciras",
                            "countryid": "ES",
                            "listid": "ip-city-chart-2522013"
                        },
                        {
                            "id": "3118532",
                            "name": "León",
                            "countryid": "ES",
                            "listid": "ip-city-chart-3118532"
                        },
                        {
                            "id": "2516548",
                            "name": "Huelva",
                            "countryid": "ES",
                            "listid": "ip-city-chart-2516548"
                        },
                        {
                            "id": "3127461",
                            "name": "Burgos",
                            "countryid": "ES",
                            "listid": "ip-city-chart-3127461"
                        },
                        {
                            "id": "3118150",
                            "name": "Logroño",
                            "countryid": "ES",
                            "listid": "ip-city-chart-3118150"
                        },
                        {
                            "id": "3106050",
                            "name": "Vic",
                            "countryid": "ES",
                            "listid": "ip-city-chart-3106050"
                        },
                        {
                            "id": "2522258",
                            "name": "Albacete",
                            "countryid": "ES",
                            "listid": "ip-city-chart-2522258"
                        },
                        {
                            "id": "3114965",
                            "name": "Ourense",
                            "countryid": "ES",
                            "listid": "ip-city-chart-3114965"
                        },
                        {
                            "id": "2521570",
                            "name": "Arrecife",
                            "countryid": "ES",
                            "listid": "ip-city-chart-2521570"
                        },
                        {
                            "id": "2521420",
                            "name": "Badajoz",
                            "countryid": "ES",
                            "listid": "ip-city-chart-2521420"
                        },
                        {
                            "id": "2518878",
                            "name": "Denia",
                            "countryid": "ES",
                            "listid": "ip-city-chart-2518878"
                        },
                        {
                            "id": "3122453",
                            "name": "Figueres",
                            "countryid": "ES",
                            "listid": "ip-city-chart-3122453"
                        },
                        {
                            "id": "3107677",
                            "name": "Tortosa",
                            "countryid": "ES",
                            "listid": "ip-city-chart-3107677"
                        },
                        {
                            "id": "3117814",
                            "name": "Lugo",
                            "countryid": "ES",
                            "listid": "ip-city-chart-3117814"
                        },
                        {
                            "id": "3120431",
                            "name": "Igualada",
                            "countryid": "ES",
                            "listid": "ip-city-chart-3120431"
                        },
                        {
                            "id": "3114567",
                            "name": "Palafrugell",
                            "countryid": "ES",
                            "listid": "ip-city-chart-3114567"
                        },
                        {
                            "id": "2513947",
                            "name": "Melilla",
                            "countryid": "ES",
                            "listid": "ip-city-chart-2513947"
                        },
                        {
                            "id": "3104342",
                            "name": "Zamora",
                            "countryid": "ES",
                            "listid": "ip-city-chart-3104342"
                        },
                        {
                            "id": "2514891",
                            "name": "Lorca",
                            "countryid": "ES",
                            "listid": "ip-city-chart-2514891"
                        },
                        {
                            "id": "2520425",
                            "name": "Campiña",
                            "countryid": "ES",
                            "listid": "ip-city-chart-2520425"
                        },
                        {
                            "id": "3124967",
                            "name": "Ciutadella",
                            "countryid": "ES",
                            "listid": "ip-city-chart-3124967"
                        }
                    ],
                    "genres": [
                        {
                            "id": "ES-1",
                            "countryid": "ES",
                            "listid": "genre-country-chart-ES-1",
                            "name": "Pop",
                            "urlPath": "pop",
                            "count": 100
                        },
                        {
                            "id": "ES-2",
                            "countryid": "ES",
                            "listid": "genre-country-chart-ES-2",
                            "name": "Hip-Hop/Rap",
                            "urlPath": "hip-hop-rap",
                            "count": 100
                        },
                        {
                            "id": "ES-3",
                            "countryid": "ES",
                            "listid": "genre-country-chart-ES-3",
                            "name": "Dance",
                            "urlPath": "dance",
                            "count": 100
                        }
                    ]
                },
                {
                    "id": "VE",
                    "listid": "ip-country-chart-VE",
                    "name": "Venezuela",
                    "cities": [
                        {
                            "id": "3646738",
                            "name": "Caracas",
                            "countryid": "VE",
                            "listid": "ip-city-chart-3646738"
                        },
                        {
                            "id": "3625549",
                            "name": "Valencia",
                            "countryid": "VE",
                            "listid": "ip-city-chart-3625549"
                        },
                        {
                            "id": "3632998",
                            "name": "Maracay",
                            "countryid": "VE",
                            "listid": "ip-city-chart-3632998"
                        },
                        {
                            "id": "3633009",
                            "name": "Maracaibo",
                            "countryid": "VE",
                            "listid": "ip-city-chart-3633009"
                        },
                        {
                            "id": "3648559",
                            "name": "Barcelona",
                            "countryid": "VE",
                            "listid": "ip-city-chart-3648559"
                        },
                        {
                            "id": "3648522",
                            "name": "Barquisimeto",
                            "countryid": "VE",
                            "listid": "ip-city-chart-3648522"
                        },
                        {
                            "id": "3645528",
                            "name": "Ciudad Guayana",
                            "countryid": "VE",
                            "listid": "ip-city-chart-3645528"
                        },
                        {
                            "id": "3632308",
                            "name": "Mérida",
                            "countryid": "VE",
                            "listid": "ip-city-chart-3632308"
                        },
                        {
                            "id": "3778045",
                            "name": "Maturín",
                            "countryid": "VE",
                            "listid": "ip-city-chart-3778045"
                        },
                        {
                            "id": "3805673",
                            "name": "San Fernando de Apure",
                            "countryid": "VE",
                            "listid": "ip-city-chart-3805673"
                        },
                        {
                            "id": "3627382",
                            "name": "Santa Elena de Uairén",
                            "countryid": "VE",
                            "listid": "ip-city-chart-3627382"
                        },
                        {
                            "id": "3629710",
                            "name": "Puerto Ayacucho",
                            "countryid": "VE",
                            "listid": "ip-city-chart-3629710"
                        }
                    ],
                    "genres": []
                },
                {
                    "id": "AR",
                    "listid": "ip-country-chart-AR",
                    "momentum_listid": "risers-country-chart-AR",
                    "name": "Argentina",
                    "cities": [
                        {
                            "id": "3435910",
                            "name": "Buenos Aires",
                            "countryid": "AR",
                            "listid": "ip-city-chart-3435910"
                        },
                        {
                            "id": "3860259",
                            "name": "Córdoba",
                            "countryid": "AR",
                            "listid": "ip-city-chart-3860259"
                        },
                        {
                            "id": "3844421",
                            "name": "Mendoza",
                            "countryid": "AR",
                            "listid": "ip-city-chart-3844421"
                        },
                        {
                            "id": "3838583",
                            "name": "Rosario",
                            "countryid": "AR",
                            "listid": "ip-city-chart-3838583"
                        },
                        {
                            "id": "3429577",
                            "name": "Resistencia",
                            "countryid": "AR",
                            "listid": "ip-city-chart-3429577"
                        },
                        {
                            "id": "3836277",
                            "name": "Santa Fe",
                            "countryid": "AR",
                            "listid": "ip-city-chart-3836277"
                        },
                        {
                            "id": "3837056",
                            "name": "San Luis",
                            "countryid": "AR",
                            "listid": "ip-city-chart-3837056"
                        },
                        {
                            "id": "3836873",
                            "name": "San Miguel de Tucumán",
                            "countryid": "AR",
                            "listid": "ip-city-chart-3836873"
                        },
                        {
                            "id": "3837213",
                            "name": "San Juan",
                            "countryid": "AR",
                            "listid": "ip-city-chart-3837213"
                        },
                        {
                            "id": "3430863",
                            "name": "Mar del Plata",
                            "countryid": "AR",
                            "listid": "ip-city-chart-3430863"
                        },
                        {
                            "id": "3435364",
                            "name": "Clorinda",
                            "countryid": "AR",
                            "listid": "ip-city-chart-3435364"
                        },
                        {
                            "id": "3838233",
                            "name": "Salta",
                            "countryid": "AR",
                            "listid": "ip-city-chart-3838233"
                        },
                        {
                            "id": "3843123",
                            "name": "Neuquén",
                            "countryid": "AR",
                            "listid": "ip-city-chart-3843123"
                        },
                        {
                            "id": "3865086",
                            "name": "Bahía Blanca",
                            "countryid": "AR",
                            "listid": "ip-city-chart-3865086"
                        },
                        {
                            "id": "3860443",
                            "name": "Comodoro Rivadavia",
                            "countryid": "AR",
                            "listid": "ip-city-chart-3860443"
                        },
                        {
                            "id": "3429886",
                            "name": "Posadas",
                            "countryid": "AR",
                            "listid": "ip-city-chart-3429886"
                        },
                        {
                            "id": "3838859",
                            "name": "Río Gallegos",
                            "countryid": "AR",
                            "listid": "ip-city-chart-3838859"
                        },
                        {
                            "id": "3848950",
                            "name": "La Rioja",
                            "countryid": "AR",
                            "listid": "ip-city-chart-3848950"
                        },
                        {
                            "id": "7647007",
                            "name": "San Carlos de Bariloche",
                            "countryid": "AR",
                            "listid": "ip-city-chart-7647007"
                        },
                        {
                            "id": "7116866",
                            "name": "Villa Mercedes",
                            "countryid": "AR",
                            "listid": "ip-city-chart-7116866"
                        },
                        {
                            "id": "3835994",
                            "name": "Santa Rosa",
                            "countryid": "AR",
                            "listid": "ip-city-chart-3835994"
                        },
                        {
                            "id": "3435261",
                            "name": "Concordia",
                            "countryid": "AR",
                            "listid": "ip-city-chart-3435261"
                        },
                        {
                            "id": "3833367",
                            "name": "Ushuaia",
                            "countryid": "AR",
                            "listid": "ip-city-chart-3833367"
                        },
                        {
                            "id": "3832899",
                            "name": "Viedma",
                            "countryid": "AR",
                            "listid": "ip-city-chart-3832899"
                        },
                        {
                            "id": "3859552",
                            "name": "Cutral-Có",
                            "countryid": "AR",
                            "listid": "ip-city-chart-3859552"
                        },
                        {
                            "id": "3833883",
                            "name": "Trelew",
                            "countryid": "AR",
                            "listid": "ip-city-chart-3833883"
                        },
                        {
                            "id": "3429790",
                            "name": "Puerto Eldorado",
                            "countryid": "AR",
                            "listid": "ip-city-chart-3429790"
                        },
                        {
                            "id": "3430340",
                            "name": "Oberá",
                            "countryid": "AR",
                            "listid": "ip-city-chart-3430340"
                        },
                        {
                            "id": "3834601",
                            "name": "Tartagal",
                            "countryid": "AR",
                            "listid": "ip-city-chart-3834601"
                        },
                        {
                            "id": "3861678",
                            "name": "Charata",
                            "countryid": "AR",
                            "listid": "ip-city-chart-3861678"
                        },
                        {
                            "id": "3852468",
                            "name": "Laboulaye",
                            "countryid": "AR",
                            "listid": "ip-city-chart-3852468"
                        }
                    ],
                    "genres": []
                },
                {
                    "id": "AT",
                    "listid": "ip-country-chart-AT",
                    "momentum_listid": "risers-country-chart-AT",
                    "name": "Austria",
                    "cities": [
                        {
                            "id": "2761369",
                            "name": "Vienna",
                            "countryid": "AT",
                            "listid": "ip-city-chart-2761369"
                        },
                        {
                            "id": "2766824",
                            "name": "Salzburg",
                            "countryid": "AT",
                            "listid": "ip-city-chart-2766824"
                        },
                        {
                            "id": "2775220",
                            "name": "Innsbruck",
                            "countryid": "AT",
                            "listid": "ip-city-chart-2775220"
                        },
                        {
                            "id": "2774326",
                            "name": "Klagenfurt am Wörthersee",
                            "countryid": "AT",
                            "listid": "ip-city-chart-2774326"
                        },
                        {
                            "id": "2779674",
                            "name": "Feldkirch",
                            "countryid": "AT",
                            "listid": "ip-city-chart-2779674"
                        }
                    ],
                    "genres": []
                },
                {
                    "id": "AU",
                    "listid": "ip-country-chart-AU",
                    "momentum_listid": "risers-country-chart-AU",
                    "name": "Australia",
                    "cities": [
                        {
                            "id": "2147714",
                            "name": "Sydney",
                            "countryid": "AU",
                            "listid": "ip-city-chart-2147714"
                        },
                        {
                            "id": "2158177",
                            "name": "Melbourne",
                            "countryid": "AU",
                            "listid": "ip-city-chart-2158177"
                        },
                        {
                            "id": "2174003",
                            "name": "Brisbane",
                            "countryid": "AU",
                            "listid": "ip-city-chart-2174003"
                        },
                        {
                            "id": "2063523",
                            "name": "Perth",
                            "countryid": "AU",
                            "listid": "ip-city-chart-2063523"
                        },
                        {
                            "id": "2078025",
                            "name": "Adelaide",
                            "countryid": "AU",
                            "listid": "ip-city-chart-2078025"
                        },
                        {
                            "id": "2165087",
                            "name": "Gold Coast",
                            "countryid": "AU",
                            "listid": "ip-city-chart-2165087"
                        },
                        {
                            "id": "2163355",
                            "name": "Hobart",
                            "countryid": "AU",
                            "listid": "ip-city-chart-2163355"
                        },
                        {
                            "id": "2146142",
                            "name": "Townsville",
                            "countryid": "AU",
                            "listid": "ip-city-chart-2146142"
                        },
                        {
                            "id": "2172797",
                            "name": "Cairns",
                            "countryid": "AU",
                            "listid": "ip-city-chart-2172797"
                        },
                        {
                            "id": "2073124",
                            "name": "Darwin",
                            "countryid": "AU",
                            "listid": "ip-city-chart-2073124"
                        },
                        {
                            "id": "2147497",
                            "name": "Tamworth",
                            "countryid": "AU",
                            "listid": "ip-city-chart-2147497"
                        },
                        {
                            "id": "2178174",
                            "name": "Albury",
                            "countryid": "AU",
                            "listid": "ip-city-chart-2178174"
                        },
                        {
                            "id": "2159220",
                            "name": "Mackay",
                            "countryid": "AU",
                            "listid": "ip-city-chart-2159220"
                        },
                        {
                            "id": "2173323",
                            "name": "Bundaberg",
                            "countryid": "AU",
                            "listid": "ip-city-chart-2173323"
                        },
                        {
                            "id": "2146108",
                            "name": "Traralgon",
                            "countryid": "AU",
                            "listid": "ip-city-chart-2146108"
                        },
                        {
                            "id": "2145110",
                            "name": "Wagga Wagga",
                            "countryid": "AU",
                            "listid": "ip-city-chart-2145110"
                        },
                        {
                            "id": "2157698",
                            "name": "Mildura",
                            "countryid": "AU",
                            "listid": "ip-city-chart-2157698"
                        },
                        {
                            "id": "2152659",
                            "name": "Port Macquarie",
                            "countryid": "AU",
                            "listid": "ip-city-chart-2152659"
                        },
                        {
                            "id": "2154219",
                            "name": "Orange",
                            "countryid": "AU",
                            "listid": "ip-city-chart-2154219"
                        },
                        {
                            "id": "2144528",
                            "name": "Warrnambool",
                            "countryid": "AU",
                            "listid": "ip-city-chart-2144528"
                        },
                        {
                            "id": "2077963",
                            "name": "Albany",
                            "countryid": "AU",
                            "listid": "ip-city-chart-2077963"
                        },
                        {
                            "id": "2070998",
                            "name": "Geraldton",
                            "countryid": "AU",
                            "listid": "ip-city-chart-2070998"
                        },
                        {
                            "id": "2157343",
                            "name": "Moe",
                            "countryid": "AU",
                            "listid": "ip-city-chart-2157343"
                        },
                        {
                            "id": "2068823",
                            "name": "Kalgoorlie",
                            "countryid": "AU",
                            "listid": "ip-city-chart-2068823"
                        },
                        {
                            "id": "2077895",
                            "name": "Alice Springs",
                            "countryid": "AU",
                            "listid": "ip-city-chart-2077895"
                        },
                        {
                            "id": "2063042",
                            "name": "Port Hedland",
                            "countryid": "AU",
                            "listid": "ip-city-chart-2063042"
                        },
                        {
                            "id": "2173911",
                            "name": "Broken Hill",
                            "countryid": "AU",
                            "listid": "ip-city-chart-2173911"
                        },
                        {
                            "id": "2063056",
                            "name": "Port Augusta",
                            "countryid": "AU",
                            "listid": "ip-city-chart-2063056"
                        },
                        {
                            "id": "2075720",
                            "name": "Broome",
                            "countryid": "AU",
                            "listid": "ip-city-chart-2075720"
                        },
                        {
                            "id": "2065594",
                            "name": "Mount Isa",
                            "countryid": "AU",
                            "listid": "ip-city-chart-2065594"
                        }
                    ],
                    "genres": [
                        {
                            "id": "AU-1",
                            "countryid": "AU",
                            "listid": "genre-country-chart-AU-1",
                            "name": "Pop",
                            "urlPath": "pop",
                            "count": 100
                        },
                        {
                            "id": "AU-2",
                            "countryid": "AU",
                            "listid": "genre-country-chart-AU-2",
                            "name": "Hip-Hop/Rap",
                            "urlPath": "hip-hop-rap",
                            "count": 100
                        },
                        {
                            "id": "AU-3",
                            "countryid": "AU",
                            "listid": "genre-country-chart-AU-3",
                            "name": "Dance",
                            "urlPath": "dance",
                            "count": 100
                        }
                    ]
                },
                {
                    "id": "RO",
                    "listid": "ip-country-chart-RO",
                    "momentum_listid": "risers-country-chart-RO",
                    "name": "Romania",
                    "cities": [
                        {
                            "id": "683506",
                            "name": "Bucharest",
                            "countryid": "RO",
                            "listid": "ip-city-chart-683506"
                        },
                        {
                            "id": "675810",
                            "name": "Iaşi",
                            "countryid": "RO",
                            "listid": "ip-city-chart-675810"
                        },
                        {
                            "id": "683844",
                            "name": "Brașov",
                            "countryid": "RO",
                            "listid": "ip-city-chart-683844"
                        },
                        {
                            "id": "665087",
                            "name": "Timişoara",
                            "countryid": "RO",
                            "listid": "ip-city-chart-665087"
                        },
                        {
                            "id": "680963",
                            "name": "Constanţa",
                            "countryid": "RO",
                            "listid": "ip-city-chart-680963"
                        },
                        {
                            "id": "681290",
                            "name": "Cluj-Napoca",
                            "countryid": "RO",
                            "listid": "ip-city-chart-681290"
                        },
                        {
                            "id": "668872",
                            "name": "Râmnicu Vâlcea",
                            "countryid": "RO",
                            "listid": "ip-city-chart-668872"
                        },
                        {
                            "id": "680332",
                            "name": "Craiova",
                            "countryid": "RO",
                            "listid": "ip-city-chart-680332"
                        },
                        {
                            "id": "667268",
                            "name": "Sibiu",
                            "countryid": "RO",
                            "listid": "ip-city-chart-667268"
                        },
                        {
                            "id": "670889",
                            "name": "Piatra Neamţ",
                            "countryid": "RO",
                            "listid": "ip-city-chart-670889"
                        },
                        {
                            "id": "675918",
                            "name": "Hunedoara",
                            "countryid": "RO",
                            "listid": "ip-city-chart-675918"
                        },
                        {
                            "id": "684657",
                            "name": "Bistriţa",
                            "countryid": "RO",
                            "listid": "ip-city-chart-684657"
                        },
                        {
                            "id": "678015",
                            "name": "Focșani",
                            "countryid": "RO",
                            "listid": "ip-city-chart-678015"
                        },
                        {
                            "id": "684039",
                            "name": "Botoşani",
                            "countryid": "RO",
                            "listid": "ip-city-chart-684039"
                        },
                        {
                            "id": "666767",
                            "name": "Slatina",
                            "countryid": "RO",
                            "listid": "ip-city-chart-666767"
                        },
                        {
                            "id": "686590",
                            "name": "Aiud",
                            "countryid": "RO",
                            "listid": "ip-city-chart-686590"
                        },
                        {
                            "id": "685174",
                            "name": "Beiuş",
                            "countryid": "RO",
                            "listid": "ip-city-chart-685174"
                        },
                        {
                            "id": "662986",
                            "name": "Victoria",
                            "countryid": "RO",
                            "listid": "ip-city-chart-662986"
                        }
                    ],
                    "genres": []
                },
                {
                    "id": "NL",
                    "listid": "ip-country-chart-NL",
                    "momentum_listid": "risers-country-chart-NL",
                    "name": "Netherlands",
                    "cities": [
                        {
                            "id": "2747891",
                            "name": "Rotterdam",
                            "countryid": "NL",
                            "listid": "ip-city-chart-2747891"
                        },
                        {
                            "id": "2759794",
                            "name": "Amsterdam",
                            "countryid": "NL",
                            "listid": "ip-city-chart-2759794"
                        },
                        {
                            "id": "2747373",
                            "name": "The Hague",
                            "countryid": "NL",
                            "listid": "ip-city-chart-2747373"
                        },
                        {
                            "id": "2745912",
                            "name": "Utrecht",
                            "countryid": "NL",
                            "listid": "ip-city-chart-2745912"
                        },
                        {
                            "id": "2756253",
                            "name": "Eindhoven",
                            "countryid": "NL",
                            "listid": "ip-city-chart-2756253"
                        },
                        {
                            "id": "2747351",
                            "name": "s-Hertogenbosch",
                            "countryid": "NL",
                            "listid": "ip-city-chart-2747351"
                        },
                        {
                            "id": "2756071",
                            "name": "Enschede",
                            "countryid": "NL",
                            "listid": "ip-city-chart-2756071"
                        },
                        {
                            "id": "2759661",
                            "name": "Arnhem",
                            "countryid": "NL",
                            "listid": "ip-city-chart-2759661"
                        },
                        {
                            "id": "2746301",
                            "name": "Tilburg",
                            "countryid": "NL",
                            "listid": "ip-city-chart-2746301"
                        },
                        {
                            "id": "2758401",
                            "name": "Breda",
                            "countryid": "NL",
                            "listid": "ip-city-chart-2758401"
                        },
                        {
                            "id": "2759706",
                            "name": "Apeldoorn",
                            "countryid": "NL",
                            "listid": "ip-city-chart-2759706"
                        },
                        {
                            "id": "2754652",
                            "name": "Heerlen",
                            "countryid": "NL",
                            "listid": "ip-city-chart-2754652"
                        },
                        {
                            "id": "2750053",
                            "name": "Nijmegen",
                            "countryid": "NL",
                            "listid": "ip-city-chart-2750053"
                        },
                        {
                            "id": "2743477",
                            "name": "Zwolle",
                            "countryid": "NL",
                            "listid": "ip-city-chart-2743477"
                        },
                        {
                            "id": "2747930",
                            "name": "Roosendaal",
                            "countryid": "NL",
                            "listid": "ip-city-chart-2747930"
                        },
                        {
                            "id": "2755251",
                            "name": "Groningen",
                            "countryid": "NL",
                            "listid": "ip-city-chart-2755251"
                        },
                        {
                            "id": "2759899",
                            "name": "Alkmaar",
                            "countryid": "NL",
                            "listid": "ip-city-chart-2759899"
                        },
                        {
                            "id": "2759879",
                            "name": "Almere Stad",
                            "countryid": "NL",
                            "listid": "ip-city-chart-2759879"
                        },
                        {
                            "id": "2750896",
                            "name": "Middelburg",
                            "countryid": "NL",
                            "listid": "ip-city-chart-2750896"
                        },
                        {
                            "id": "2754861",
                            "name": "Hardenberg",
                            "countryid": "NL",
                            "listid": "ip-city-chart-2754861"
                        },
                        {
                            "id": "2751792",
                            "name": "Leeuwarden",
                            "countryid": "NL",
                            "listid": "ip-city-chart-2751792"
                        },
                        {
                            "id": "2751283",
                            "name": "Maastricht",
                            "countryid": "NL",
                            "listid": "ip-city-chart-2751283"
                        },
                        {
                            "id": "2745641",
                            "name": "Venlo",
                            "countryid": "NL",
                            "listid": "ip-city-chart-2745641"
                        },
                        {
                            "id": "2745783",
                            "name": "Veendam",
                            "countryid": "NL",
                            "listid": "ip-city-chart-2745783"
                        },
                        {
                            "id": "2754669",
                            "name": "Heerenveen",
                            "countryid": "NL",
                            "listid": "ip-city-chart-2754669"
                        },
                        {
                            "id": "2756136",
                            "name": "Emmen",
                            "countryid": "NL",
                            "listid": "ip-city-chart-2756136"
                        },
                        {
                            "id": "2759633",
                            "name": "Assen",
                            "countryid": "NL",
                            "listid": "ip-city-chart-2759633"
                        },
                        {
                            "id": "2748000",
                            "name": "Roermond",
                            "countryid": "NL",
                            "listid": "ip-city-chart-2748000"
                        },
                        {
                            "id": "2756767",
                            "name": "Doetinchem",
                            "countryid": "NL",
                            "listid": "ip-city-chart-2756767"
                        },
                        {
                            "id": "2754848",
                            "name": "Harderwijk",
                            "countryid": "NL",
                            "listid": "ip-city-chart-2754848"
                        },
                        {
                            "id": "2744911",
                            "name": "Weert",
                            "countryid": "NL",
                            "listid": "ip-city-chart-2744911"
                        },
                        {
                            "id": "2751738",
                            "name": "Lelystad",
                            "countryid": "NL",
                            "listid": "ip-city-chart-2751738"
                        },
                        {
                            "id": "2757220",
                            "name": "Den Helder",
                            "countryid": "NL",
                            "listid": "ip-city-chart-2757220"
                        },
                        {
                            "id": "2756644",
                            "name": "Drachten",
                            "countryid": "NL",
                            "listid": "ip-city-chart-2756644"
                        },
                        {
                            "id": "2745634",
                            "name": "Venray",
                            "countryid": "NL",
                            "listid": "ip-city-chart-2745634"
                        },
                        {
                            "id": "2744332",
                            "name": "Winterswijk",
                            "countryid": "NL",
                            "listid": "ip-city-chart-2744332"
                        },
                        {
                            "id": "2756139",
                            "name": "Emmeloord",
                            "countryid": "NL",
                            "listid": "ip-city-chart-2756139"
                        },
                        {
                            "id": "2757340",
                            "name": "Delfzijl",
                            "countryid": "NL",
                            "listid": "ip-city-chart-2757340"
                        },
                        {
                            "id": "2754817",
                            "name": "Harlingen",
                            "countryid": "NL",
                            "listid": "ip-city-chart-2754817"
                        },
                        {
                            "id": "2744608",
                            "name": "West-Terschelling",
                            "countryid": "NL",
                            "listid": "ip-city-chart-2744608"
                        }
                    ],
                    "genres": []
                },
                {
                    "id": "NO",
                    "listid": "ip-country-chart-NO",
                    "name": "Norway",
                    "cities": [
                        {
                            "id": "3143244",
                            "name": "Oslo",
                            "countryid": "NO",
                            "listid": "ip-city-chart-3143244"
                        },
                        {
                            "id": "3161732",
                            "name": "Bergen",
                            "countryid": "NO",
                            "listid": "ip-city-chart-3161732"
                        },
                        {
                            "id": "3133880",
                            "name": "Trondheim",
                            "countryid": "NO",
                            "listid": "ip-city-chart-3133880"
                        },
                        {
                            "id": "3149318",
                            "name": "Kristiansand",
                            "countryid": "NO",
                            "listid": "ip-city-chart-3149318"
                        },
                        {
                            "id": "3133895",
                            "name": "Tromsø",
                            "countryid": "NO",
                            "listid": "ip-city-chart-3133895"
                        },
                        {
                            "id": "3163392",
                            "name": "Ålesund",
                            "countryid": "NO",
                            "listid": "ip-city-chart-3163392"
                        },
                        {
                            "id": "3160881",
                            "name": "Bodø",
                            "countryid": "NO",
                            "listid": "ip-city-chart-3160881"
                        },
                        {
                            "id": "3153823",
                            "name": "Harstad",
                            "countryid": "NO",
                            "listid": "ip-city-chart-3153823"
                        },
                        {
                            "id": "847633",
                            "name": "Alta",
                            "countryid": "NO",
                            "listid": "ip-city-chart-847633"
                        }
                    ],
                    "genres": []
                },
                {
                    "id": "RU",
                    "listid": "ip-country-chart-RU",
                    "momentum_listid": "risers-country-chart-RU",
                    "name": "Russia",
                    "cities": [
                        {
                            "id": "524901",
                            "name": "Moscow",
                            "countryid": "RU",
                            "listid": "ip-city-chart-524901"
                        },
                        {
                            "id": "498817",
                            "name": "Saint Petersburg",
                            "countryid": "RU",
                            "listid": "ip-city-chart-498817"
                        },
                        {
                            "id": "542420",
                            "name": "Krasnodar",
                            "countryid": "RU",
                            "listid": "ip-city-chart-542420"
                        },
                        {
                            "id": "501175",
                            "name": "Rostov-na-Donu",
                            "countryid": "RU",
                            "listid": "ip-city-chart-501175"
                        },
                        {
                            "id": "1496747",
                            "name": "Novosibirsk",
                            "countryid": "RU",
                            "listid": "ip-city-chart-1496747"
                        },
                        {
                            "id": "1486209",
                            "name": "Yekaterinburg",
                            "countryid": "RU",
                            "listid": "ip-city-chart-1486209"
                        },
                        {
                            "id": "551487",
                            "name": "Kazan",
                            "countryid": "RU",
                            "listid": "ip-city-chart-551487"
                        },
                        {
                            "id": "499099",
                            "name": "Samara",
                            "countryid": "RU",
                            "listid": "ip-city-chart-499099"
                        },
                        {
                            "id": "520555",
                            "name": "Nizhniy Novgorod",
                            "countryid": "RU",
                            "listid": "ip-city-chart-520555"
                        },
                        {
                            "id": "1508291",
                            "name": "Chelyabinsk",
                            "countryid": "RU",
                            "listid": "ip-city-chart-1508291"
                        },
                        {
                            "id": "1489425",
                            "name": "Tomsk",
                            "countryid": "RU",
                            "listid": "ip-city-chart-1489425"
                        },
                        {
                            "id": "472045",
                            "name": "Voronezh",
                            "countryid": "RU",
                            "listid": "ip-city-chart-472045"
                        },
                        {
                            "id": "1502026",
                            "name": "Krasnoyarsk",
                            "countryid": "RU",
                            "listid": "ip-city-chart-1502026"
                        },
                        {
                            "id": "479561",
                            "name": "Ufa",
                            "countryid": "RU",
                            "listid": "ip-city-chart-479561"
                        },
                        {
                            "id": "2023469",
                            "name": "Irkutsk",
                            "countryid": "RU",
                            "listid": "ip-city-chart-2023469"
                        },
                        {
                            "id": "1496153",
                            "name": "Omsk",
                            "countryid": "RU",
                            "listid": "ip-city-chart-1496153"
                        },
                        {
                            "id": "472757",
                            "name": "Volgograd",
                            "countryid": "RU",
                            "listid": "ip-city-chart-472757"
                        },
                        {
                            "id": "511196",
                            "name": "Perm",
                            "countryid": "RU",
                            "listid": "ip-city-chart-511196"
                        },
                        {
                            "id": "2013348",
                            "name": "Vladivostok",
                            "countryid": "RU",
                            "listid": "ip-city-chart-2013348"
                        },
                        {
                            "id": "1488754",
                            "name": "Tyumen",
                            "countryid": "RU",
                            "listid": "ip-city-chart-1488754"
                        },
                        {
                            "id": "498677",
                            "name": "Saratov",
                            "countryid": "RU",
                            "listid": "ip-city-chart-498677"
                        },
                        {
                            "id": "487846",
                            "name": "Stavropol’",
                            "countryid": "RU",
                            "listid": "ip-city-chart-487846"
                        },
                        {
                            "id": "491422",
                            "name": "Sochi",
                            "countryid": "RU",
                            "listid": "ip-city-chart-491422"
                        },
                        {
                            "id": "2022890",
                            "name": "Khabarovsk",
                            "countryid": "RU",
                            "listid": "ip-city-chart-2022890"
                        },
                        {
                            "id": "554840",
                            "name": "Izhevsk",
                            "countryid": "RU",
                            "listid": "ip-city-chart-554840"
                        },
                        {
                            "id": "532096",
                            "name": "Makhachkala",
                            "countryid": "RU",
                            "listid": "ip-city-chart-532096"
                        },
                        {
                            "id": "482283",
                            "name": "Tol’yatti",
                            "countryid": "RU",
                            "listid": "ip-city-chart-482283"
                        },
                        {
                            "id": "511565",
                            "name": "Penza",
                            "countryid": "RU",
                            "listid": "ip-city-chart-511565"
                        },
                        {
                            "id": "468902",
                            "name": "Yaroslavl",
                            "countryid": "RU",
                            "listid": "ip-city-chart-468902"
                        },
                        {
                            "id": "1503901",
                            "name": "Kemerovo",
                            "countryid": "RU",
                            "listid": "ip-city-chart-1503901"
                        },
                        {
                            "id": "523750",
                            "name": "Naberezhnyye Chelny",
                            "countryid": "RU",
                            "listid": "ip-city-chart-523750"
                        },
                        {
                            "id": "515003",
                            "name": "Orenburg",
                            "countryid": "RU",
                            "listid": "ip-city-chart-515003"
                        },
                        {
                            "id": "569696",
                            "name": "Cheboksary",
                            "countryid": "RU",
                            "listid": "ip-city-chart-569696"
                        },
                        {
                            "id": "479123",
                            "name": "Ulyanovsk",
                            "countryid": "RU",
                            "listid": "ip-city-chart-479123"
                        },
                        {
                            "id": "503550",
                            "name": "Pyatigorsk",
                            "countryid": "RU",
                            "listid": "ip-city-chart-503550"
                        },
                        {
                            "id": "554234",
                            "name": "Kaliningrad",
                            "countryid": "RU",
                            "listid": "ip-city-chart-554234"
                        },
                        {
                            "id": "500096",
                            "name": "Ryazan‚Äô",
                            "countryid": "RU",
                            "listid": "ip-city-chart-500096"
                        },
                        {
                            "id": "480562",
                            "name": "Tula",
                            "countryid": "RU",
                            "listid": "ip-city-chart-480562"
                        },
                        {
                            "id": "473249",
                            "name": "Vladikavkaz",
                            "countryid": "RU",
                            "listid": "ip-city-chart-473249"
                        },
                        {
                            "id": "535121",
                            "name": "Lipetsk",
                            "countryid": "RU",
                            "listid": "ip-city-chart-535121"
                        },
                        {
                            "id": "523523",
                            "name": "Nal’chik",
                            "countryid": "RU",
                            "listid": "ip-city-chart-523523"
                        },
                        {
                            "id": "532288",
                            "name": "Magnitogorsk",
                            "countryid": "RU",
                            "listid": "ip-city-chart-532288"
                        },
                        {
                            "id": "1496990",
                            "name": "Novokuznetsk",
                            "countryid": "RU",
                            "listid": "ip-city-chart-1496990"
                        },
                        {
                            "id": "518255",
                            "name": "Novorossiysk",
                            "countryid": "RU",
                            "listid": "ip-city-chart-518255"
                        },
                        {
                            "id": "555312",
                            "name": "Ivanovo",
                            "countryid": "RU",
                            "listid": "ip-city-chart-555312"
                        },
                        {
                            "id": "558418",
                            "name": "Groznyy",
                            "countryid": "RU",
                            "listid": "ip-city-chart-558418"
                        },
                        {
                            "id": "538560",
                            "name": "Kursk",
                            "countryid": "RU",
                            "listid": "ip-city-chart-538560"
                        },
                        {
                            "id": "569223",
                            "name": "Cherepovets",
                            "countryid": "RU",
                            "listid": "ip-city-chart-569223"
                        },
                        {
                            "id": "580922",
                            "name": "Armavir",
                            "countryid": "RU",
                            "listid": "ip-city-chart-580922"
                        }
                    ],
                    "genres": [
                        {
                            "id": "RU-1",
                            "countryid": "RU",
                            "listid": "genre-country-chart-RU-1",
                            "name": "Pop",
                            "urlPath": "pop",
                            "count": 100
                        },
                        {
                            "id": "RU-2",
                            "countryid": "RU",
                            "listid": "genre-country-chart-RU-2",
                            "name": "Hip-Hop/Rap",
                            "urlPath": "hip-hop-rap",
                            "count": 100
                        },
                        {
                            "id": "RU-3",
                            "countryid": "RU",
                            "listid": "genre-country-chart-RU-3",
                            "name": "Dance",
                            "urlPath": "dance",
                            "count": 100
                        }
                    ]
                },
                {
                    "id": "BE",
                    "listid": "ip-country-chart-BE",
                    "momentum_listid": "risers-country-chart-BE",
                    "name": "Belgium",
                    "cities": [
                        {
                            "id": "2803448",
                            "name": "Aalst",
                            "countryid": "BE",
                            "listid": "ip-city-chart-2803448"
                        },
                        {
                            "id": "2803138",
                            "name": "Antwerpen",
                            "countryid": "BE",
                            "listid": "ip-city-chart-2803138"
                        },
                        {
                            "id": "2803073",
                            "name": "Arlon",
                            "countryid": "BE",
                            "listid": "ip-city-chart-2803073"
                        },
                        {
                            "id": "2802583",
                            "name": "Bastogne",
                            "countryid": "BE",
                            "listid": "ip-city-chart-2802583"
                        },
                        {
                            "id": "2802170",
                            "name": "Beringen",
                            "countryid": "BE",
                            "listid": "ip-city-chart-2802170"
                        },
                        {
                            "id": "2802106",
                            "name": "Bertrix",
                            "countryid": "BE",
                            "listid": "ip-city-chart-2802106"
                        },
                        {
                            "id": "2800931",
                            "name": "Brugge",
                            "countryid": "BE",
                            "listid": "ip-city-chart-2800931"
                        },
                        {
                            "id": "2800866",
                            "name": "Brussels",
                            "countryid": "BE",
                            "listid": "ip-city-chart-2800866"
                        },
                        {
                            "id": "2800481",
                            "name": "Charleroi",
                            "countryid": "BE",
                            "listid": "ip-city-chart-2800481"
                        },
                        {
                            "id": "2800025",
                            "name": "Couvin",
                            "countryid": "BE",
                            "listid": "ip-city-chart-2800025"
                        },
                        {
                            "id": "2797656",
                            "name": "Gent",
                            "countryid": "BE",
                            "listid": "ip-city-chart-2797656"
                        },
                        {
                            "id": "2796491",
                            "name": "Hasselt",
                            "countryid": "BE",
                            "listid": "ip-city-chart-2796491"
                        },
                        {
                            "id": "2796132",
                            "name": "Helchteren",
                            "countryid": "BE",
                            "listid": "ip-city-chart-2796132"
                        },
                        {
                            "id": "2795800",
                            "name": "Heusden",
                            "countryid": "BE",
                            "listid": "ip-city-chart-2795800"
                        },
                        {
                            "id": "2795261",
                            "name": "Houthalen",
                            "countryid": "BE",
                            "listid": "ip-city-chart-2795261"
                        },
                        {
                            "id": "2794166",
                            "name": "Koksijde",
                            "countryid": "BE",
                            "listid": "ip-city-chart-2794166"
                        },
                        {
                            "id": "2794055",
                            "name": "Kortrijk",
                            "countryid": "BE",
                            "listid": "ip-city-chart-2794055"
                        },
                        {
                            "id": "2792482",
                            "name": "Leuven",
                            "countryid": "BE",
                            "listid": "ip-city-chart-2792482"
                        },
                        {
                            "id": "2792413",
                            "name": "Liège",
                            "countryid": "BE",
                            "listid": "ip-city-chart-2792413"
                        },
                        {
                            "id": "2791744",
                            "name": "Marche-en-Famenne",
                            "countryid": "BE",
                            "listid": "ip-city-chart-2791744"
                        },
                        {
                            "id": "2791537",
                            "name": "Mechelen",
                            "countryid": "BE",
                            "listid": "ip-city-chart-2791537"
                        },
                        {
                            "id": "2790471",
                            "name": "Namur",
                            "countryid": "BE",
                            "listid": "ip-city-chart-2790471"
                        },
                        {
                            "id": "2789786",
                            "name": "Ostend",
                            "countryid": "BE",
                            "listid": "ip-city-chart-2789786"
                        },
                        {
                            "id": "2785341",
                            "name": "Tournai",
                            "countryid": "BE",
                            "listid": "ip-city-chart-2785341"
                        },
                        {
                            "id": "2785141",
                            "name": "Turnhout",
                            "countryid": "BE",
                            "listid": "ip-city-chart-2785141"
                        },
                        {
                            "id": "2784821",
                            "name": "Verviers",
                            "countryid": "BE",
                            "listid": "ip-city-chart-2784821"
                        }
                    ],
                    "genres": []
                },
                {
                    "id": "FI",
                    "listid": "ip-country-chart-FI",
                    "name": "Finland",
                    "cities": [
                        {
                            "id": "658225",
                            "name": "Helsinki",
                            "countryid": "FI",
                            "listid": "ip-city-chart-658225"
                        },
                        {
                            "id": "633679",
                            "name": "Turku",
                            "countryid": "FI",
                            "listid": "ip-city-chart-633679"
                        },
                        {
                            "id": "634963",
                            "name": "Tampere",
                            "countryid": "FI",
                            "listid": "ip-city-chart-634963"
                        },
                        {
                            "id": "643492",
                            "name": "Oulu",
                            "countryid": "FI",
                            "listid": "ip-city-chart-643492"
                        },
                        {
                            "id": "632978",
                            "name": "Vaasa",
                            "countryid": "FI",
                            "listid": "ip-city-chart-632978"
                        },
                        {
                            "id": "655194",
                            "name": "Jyväskylä",
                            "countryid": "FI",
                            "listid": "ip-city-chart-655194"
                        },
                        {
                            "id": "650859",
                            "name": "Kouvola",
                            "countryid": "FI",
                            "listid": "ip-city-chart-650859"
                        },
                        {
                            "id": "648900",
                            "name": "Lappeenranta",
                            "countryid": "FI",
                            "listid": "ip-city-chart-648900"
                        },
                        {
                            "id": "650224",
                            "name": "Kuopio",
                            "countryid": "FI",
                            "listid": "ip-city-chart-650224"
                        },
                        {
                            "id": "655808",
                            "name": "Joensuu",
                            "countryid": "FI",
                            "listid": "ip-city-chart-655808"
                        },
                        {
                            "id": "651943",
                            "name": "Kokkola",
                            "countryid": "FI",
                            "listid": "ip-city-chart-651943"
                        },
                        {
                            "id": "649924",
                            "name": "Kuusamo",
                            "countryid": "FI",
                            "listid": "ip-city-chart-649924"
                        },
                        {
                            "id": "11593510",
                            "name": "Älajärvi",
                            "countryid": "FI",
                            "listid": "ip-city-chart-11593510"
                        }
                    ],
                    "genres": []
                },
                {
                    "id": "BG",
                    "listid": "ip-country-chart-BG",
                    "name": "Bulgaria",
                    "cities": [
                        {
                            "id": "727011",
                            "name": "Sofia",
                            "countryid": "BG",
                            "listid": "ip-city-chart-727011"
                        },
                        {
                            "id": "726050",
                            "name": "Varna",
                            "countryid": "BG",
                            "listid": "ip-city-chart-726050"
                        },
                        {
                            "id": "726848",
                            "name": "Stara Zagora",
                            "countryid": "BG",
                            "listid": "ip-city-chart-726848"
                        },
                        {
                            "id": "727523",
                            "name": "Ruse",
                            "countryid": "BG",
                            "listid": "ip-city-chart-727523"
                        },
                        {
                            "id": "731549",
                            "name": "Gabrovo",
                            "countryid": "BG",
                            "listid": "ip-city-chart-731549"
                        }
                    ],
                    "genres": []
                },
                {
                    "id": "JP",
                    "listid": "ip-country-chart-JP",
                    "momentum_listid": "risers-country-chart-JP",
                    "name": "Japan",
                    "cities": [
                        {
                            "id": "1850147",
                            "name": "Tokyo",
                            "countryid": "JP",
                            "listid": "ip-city-chart-1850147"
                        },
                        {
                            "id": "1853909",
                            "name": "Osaka",
                            "countryid": "JP",
                            "listid": "ip-city-chart-1853909"
                        },
                        {
                            "id": "1856057",
                            "name": "Nagoya",
                            "countryid": "JP",
                            "listid": "ip-city-chart-1856057"
                        },
                        {
                            "id": "1863967",
                            "name": "Fukuoka",
                            "countryid": "JP",
                            "listid": "ip-city-chart-1863967"
                        },
                        {
                            "id": "1857910",
                            "name": "Kyoto",
                            "countryid": "JP",
                            "listid": "ip-city-chart-1857910"
                        },
                        {
                            "id": "2128295",
                            "name": "Sapporo",
                            "countryid": "JP",
                            "listid": "ip-city-chart-2128295"
                        },
                        {
                            "id": "1856035",
                            "name": "Naha",
                            "countryid": "JP",
                            "listid": "ip-city-chart-1856035"
                        },
                        {
                            "id": "1859307",
                            "name": "Kitakyushu",
                            "countryid": "JP",
                            "listid": "ip-city-chart-1859307"
                        },
                        {
                            "id": "2111149",
                            "name": "Sendai",
                            "countryid": "JP",
                            "listid": "ip-city-chart-2111149"
                        },
                        {
                            "id": "1854383",
                            "name": "Okayama",
                            "countryid": "JP",
                            "listid": "ip-city-chart-1854383"
                        },
                        {
                            "id": "1862415",
                            "name": "Hiroshima",
                            "countryid": "JP",
                            "listid": "ip-city-chart-1862415"
                        },
                        {
                            "id": "1863641",
                            "name": "Gifu-shi",
                            "countryid": "JP",
                            "listid": "ip-city-chart-1863641"
                        },
                        {
                            "id": "1857843",
                            "name": "Maebashi",
                            "countryid": "JP",
                            "listid": "ip-city-chart-1857843"
                        },
                        {
                            "id": "1858421",
                            "name": "Kumamoto",
                            "countryid": "JP",
                            "listid": "ip-city-chart-1858421"
                        },
                        {
                            "id": "1851717",
                            "name": "Shizuoka",
                            "countryid": "JP",
                            "listid": "ip-city-chart-1851717"
                        },
                        {
                            "id": "1860827",
                            "name": "Kagoshima",
                            "countryid": "JP",
                            "listid": "ip-city-chart-1860827"
                        },
                        {
                            "id": "1863289",
                            "name": "Hamamatsu",
                            "countryid": "JP",
                            "listid": "ip-city-chart-1863289"
                        },
                        {
                            "id": "1862627",
                            "name": "Himeji",
                            "countryid": "JP",
                            "listid": "ip-city-chart-1862627"
                        },
                        {
                            "id": "1849053",
                            "name": "Utsunomiya",
                            "countryid": "JP",
                            "listid": "ip-city-chart-1849053"
                        },
                        {
                            "id": "2110683",
                            "name": "Tsukuba",
                            "countryid": "JP",
                            "listid": "ip-city-chart-2110683"
                        },
                        {
                            "id": "1865005",
                            "name": "Ashikaga",
                            "countryid": "JP",
                            "listid": "ip-city-chart-1865005"
                        },
                        {
                            "id": "1849796",
                            "name": "Tsu",
                            "countryid": "JP",
                            "listid": "ip-city-chart-1849796"
                        },
                        {
                            "id": "1851100",
                            "name": "Takamatsu",
                            "countryid": "JP",
                            "listid": "ip-city-chart-1851100"
                        },
                        {
                            "id": "1864134",
                            "name": "Fuji",
                            "countryid": "JP",
                            "listid": "ip-city-chart-1864134"
                        },
                        {
                            "id": "1849846",
                            "name": "Toyohashi",
                            "countryid": "JP",
                            "listid": "ip-city-chart-1849846"
                        },
                        {
                            "id": "1849876",
                            "name": "Toyama",
                            "countryid": "JP",
                            "listid": "ip-city-chart-1849876"
                        },
                        {
                            "id": "1863917",
                            "name": "Fukuyama",
                            "countryid": "JP",
                            "listid": "ip-city-chart-1863917"
                        },
                        {
                            "id": "1859100",
                            "name": "Kōfu",
                            "countryid": "JP",
                            "listid": "ip-city-chart-1859100"
                        },
                        {
                            "id": "1854487",
                            "name": "Ōita",
                            "countryid": "JP",
                            "listid": "ip-city-chart-1854487"
                        },
                        {
                            "id": "1926099",
                            "name": "Matsuyama",
                            "countryid": "JP",
                            "listid": "ip-city-chart-1926099"
                        },
                        {
                            "id": "1855431",
                            "name": "Niigata",
                            "countryid": "JP",
                            "listid": "ip-city-chart-1855431"
                        },
                        {
                            "id": "1856177",
                            "name": "Nagasaki",
                            "countryid": "JP",
                            "listid": "ip-city-chart-1856177"
                        },
                        {
                            "id": "1848373",
                            "name": "Yokkaichi",
                            "countryid": "JP",
                            "listid": "ip-city-chart-1848373"
                        },
                        {
                            "id": "2112141",
                            "name": "Kuriyama",
                            "countryid": "JP",
                            "listid": "ip-city-chart-2112141"
                        },
                        {
                            "id": "1860243",
                            "name": "Kanazawa",
                            "countryid": "JP",
                            "listid": "ip-city-chart-1860243"
                        },
                        {
                            "id": "1858428",
                            "name": "Kumagaya",
                            "countryid": "JP",
                            "listid": "ip-city-chart-1858428"
                        },
                        {
                            "id": "1853483",
                            "name": "Oyama",
                            "countryid": "JP",
                            "listid": "ip-city-chart-1853483"
                        },
                        {
                            "id": "2111901",
                            "name": "Mito",
                            "countryid": "JP",
                            "listid": "ip-city-chart-2111901"
                        },
                        {
                            "id": "1850158",
                            "name": "Tokushima",
                            "countryid": "JP",
                            "listid": "ip-city-chart-1850158"
                        },
                        {
                            "id": "1858088",
                            "name": "Kurume",
                            "countryid": "JP",
                            "listid": "ip-city-chart-1858088"
                        },
                        {
                            "id": "1857519",
                            "name": "Matsumoto",
                            "countryid": "JP",
                            "listid": "ip-city-chart-1857519"
                        },
                        {
                            "id": "1926004",
                            "name": "Wakayama",
                            "countryid": "JP",
                            "listid": "ip-city-chart-1926004"
                        },
                        {
                            "id": "1861835",
                            "name": "Iizuka",
                            "countryid": "JP",
                            "listid": "ip-city-chart-1861835"
                        },
                        {
                            "id": "1863985",
                            "name": "Fukui-shi",
                            "countryid": "JP",
                            "listid": "ip-city-chart-1863985"
                        },
                        {
                            "id": "2113126",
                            "name": "Akita",
                            "countryid": "JP",
                            "listid": "ip-city-chart-2113126"
                        },
                        {
                            "id": "2129376",
                            "name": "Kushiro",
                            "countryid": "JP",
                            "listid": "ip-city-chart-2129376"
                        },
                        {
                            "id": "1861416",
                            "name": "Ishigaki",
                            "countryid": "JP",
                            "listid": "ip-city-chart-1861416"
                        },
                        {
                            "id": "1855540",
                            "name": "Naze",
                            "countryid": "JP",
                            "listid": "ip-city-chart-1855540"
                        },
                        {
                            "id": "2127515",
                            "name": "Wakkanai",
                            "countryid": "JP",
                            "listid": "ip-city-chart-2127515"
                        },
                        {
                            "id": "1861285",
                            "name": "Itoigawa",
                            "countryid": "JP",
                            "listid": "ip-city-chart-1861285"
                        }
                    ],
                    "genres": []
                },
                {
                    "id": "FR",
                    "listid": "ip-country-chart-FR",
                    "momentum_listid": "risers-country-chart-FR",
                    "name": "France",
                    "cities": [
                        {
                            "id": "2988507",
                            "name": "Paris",
                            "countryid": "FR",
                            "listid": "ip-city-chart-2988507"
                        },
                        {
                            "id": "2996944",
                            "name": "Lyon",
                            "countryid": "FR",
                            "listid": "ip-city-chart-2996944"
                        },
                        {
                            "id": "2990440",
                            "name": "Nice",
                            "countryid": "FR",
                            "listid": "ip-city-chart-2990440"
                        },
                        {
                            "id": "2995469",
                            "name": "Marseille",
                            "countryid": "FR",
                            "listid": "ip-city-chart-2995469"
                        },
                        {
                            "id": "3031582",
                            "name": "Bordeaux",
                            "countryid": "FR",
                            "listid": "ip-city-chart-3031582"
                        },
                        {
                            "id": "2972315",
                            "name": "Toulouse",
                            "countryid": "FR",
                            "listid": "ip-city-chart-2972315"
                        },
                        {
                            "id": "2998324",
                            "name": "Lille",
                            "countryid": "FR",
                            "listid": "ip-city-chart-2998324"
                        },
                        {
                            "id": "2989460",
                            "name": "Orange",
                            "countryid": "FR",
                            "listid": "ip-city-chart-2989460"
                        },
                        {
                            "id": "2990969",
                            "name": "Nantes",
                            "countryid": "FR",
                            "listid": "ip-city-chart-2990969"
                        },
                        {
                            "id": "2973783",
                            "name": "Strasbourg",
                            "countryid": "FR",
                            "listid": "ip-city-chart-2973783"
                        },
                        {
                            "id": "2992166",
                            "name": "Montpellier",
                            "countryid": "FR",
                            "listid": "ip-city-chart-2992166"
                        },
                        {
                            "id": "2972328",
                            "name": "Toulon",
                            "countryid": "FR",
                            "listid": "ip-city-chart-2972328"
                        },
                        {
                            "id": "2980291",
                            "name": "Saint-Étienne",
                            "countryid": "FR",
                            "listid": "ip-city-chart-2980291"
                        },
                        {
                            "id": "3014728",
                            "name": "Grenoble",
                            "countryid": "FR",
                            "listid": "ip-city-chart-3014728"
                        },
                        {
                            "id": "2989317",
                            "name": "Orléans",
                            "countryid": "FR",
                            "listid": "ip-city-chart-2989317"
                        },
                        {
                            "id": "2982652",
                            "name": "Rouen",
                            "countryid": "FR",
                            "listid": "ip-city-chart-2982652"
                        },
                        {
                            "id": "2983990",
                            "name": "Rennes",
                            "countryid": "FR",
                            "listid": "ip-city-chart-2983990"
                        },
                        {
                            "id": "3024635",
                            "name": "Clermont-Ferrand",
                            "countryid": "FR",
                            "listid": "ip-city-chart-3024635"
                        },
                        {
                            "id": "2994160",
                            "name": "Metz",
                            "countryid": "FR",
                            "listid": "ip-city-chart-2994160"
                        },
                        {
                            "id": "3034475",
                            "name": "Bayonne",
                            "countryid": "FR",
                            "listid": "ip-city-chart-3034475"
                        },
                        {
                            "id": "2987914",
                            "name": "Perpignan",
                            "countryid": "FR",
                            "listid": "ip-city-chart-2987914"
                        },
                        {
                            "id": "2972191",
                            "name": "Tours",
                            "countryid": "FR",
                            "listid": "ip-city-chart-2972191"
                        },
                        {
                            "id": "2971053",
                            "name": "Valence",
                            "countryid": "FR",
                            "listid": "ip-city-chart-2971053"
                        },
                        {
                            "id": "3035681",
                            "name": "Avignon",
                            "countryid": "FR",
                            "listid": "ip-city-chart-3035681"
                        },
                        {
                            "id": "3030300",
                            "name": "Brest",
                            "countryid": "FR",
                            "listid": "ip-city-chart-3030300"
                        },
                        {
                            "id": "3021372",
                            "name": "Dijon",
                            "countryid": "FR",
                            "listid": "ip-city-chart-3021372"
                        },
                        {
                            "id": "2988358",
                            "name": "Pau",
                            "countryid": "FR",
                            "listid": "ip-city-chart-2988358"
                        },
                        {
                            "id": "3037543",
                            "name": "Annecy",
                            "countryid": "FR",
                            "listid": "ip-city-chart-3037543"
                        },
                        {
                            "id": "2971041",
                            "name": "Valenciennes",
                            "countryid": "FR",
                            "listid": "ip-city-chart-2971041"
                        },
                        {
                            "id": "3037656",
                            "name": "Angers",
                            "countryid": "FR",
                            "listid": "ip-city-chart-3037656"
                        },
                        {
                            "id": "2984114",
                            "name": "Reims",
                            "countryid": "FR",
                            "listid": "ip-city-chart-2984114"
                        },
                        {
                            "id": "3003796",
                            "name": "Le Havre",
                            "countryid": "FR",
                            "listid": "ip-city-chart-3003796"
                        },
                        {
                            "id": "3006787",
                            "name": "La Rochelle",
                            "countryid": "FR",
                            "listid": "ip-city-chart-3006787"
                        },
                        {
                            "id": "2998286",
                            "name": "Limoges",
                            "countryid": "FR",
                            "listid": "ip-city-chart-2998286"
                        },
                        {
                            "id": "2997577",
                            "name": "Lorient",
                            "countryid": "FR",
                            "listid": "ip-city-chart-2997577"
                        },
                        {
                            "id": "3003603",
                            "name": "Le Mans",
                            "countryid": "FR",
                            "listid": "ip-city-chart-3003603"
                        },
                        {
                            "id": "3033123",
                            "name": "Besançon",
                            "countryid": "FR",
                            "listid": "ip-city-chart-3033123"
                        },
                        {
                            "id": "3020686",
                            "name": "Dunkerque",
                            "countryid": "FR",
                            "listid": "ip-city-chart-3020686"
                        },
                        {
                            "id": "2970777",
                            "name": "Vannes",
                            "countryid": "FR",
                            "listid": "ip-city-chart-2970777"
                        },
                        {
                            "id": "3038334",
                            "name": "Ajaccio",
                            "countryid": "FR",
                            "listid": "ip-city-chart-3038334"
                        },
                        {
                            "id": "3029162",
                            "name": "Calais",
                            "countryid": "FR",
                            "listid": "ip-city-chart-3029162"
                        },
                        {
                            "id": "2969392",
                            "name": "Vichy",
                            "countryid": "FR",
                            "listid": "ip-city-chart-2969392"
                        },
                        {
                            "id": "3038634",
                            "name": "Agen",
                            "countryid": "FR",
                            "listid": "ip-city-chart-3038634"
                        },
                        {
                            "id": "3036784",
                            "name": "Arras",
                            "countryid": "FR",
                            "listid": "ip-city-chart-3036784"
                        },
                        {
                            "id": "3005866",
                            "name": "Laval",
                            "countryid": "FR",
                            "listid": "ip-city-chart-3005866"
                        },
                        {
                            "id": "3025466",
                            "name": "Cherbourg-Octeville",
                            "countryid": "FR",
                            "listid": "ip-city-chart-3025466"
                        },
                        {
                            "id": "3032213",
                            "name": "Blois",
                            "countryid": "FR",
                            "listid": "ip-city-chart-3032213"
                        },
                        {
                            "id": "3028542",
                            "name": "Carpentras",
                            "countryid": "FR",
                            "listid": "ip-city-chart-3028542"
                        }
                    ],
                    "genres": [
                        {
                            "id": "FR-1",
                            "countryid": "FR",
                            "listid": "genre-country-chart-FR-1",
                            "name": "Pop",
                            "urlPath": "pop",
                            "count": 100
                        },
                        {
                            "id": "FR-2",
                            "countryid": "FR",
                            "listid": "genre-country-chart-FR-2",
                            "name": "Hip-Hop/Rap",
                            "urlPath": "hip-hop-rap",
                            "count": 100
                        },
                        {
                            "id": "FR-3",
                            "countryid": "FR",
                            "listid": "genre-country-chart-FR-3",
                            "name": "Dance",
                            "urlPath": "dance",
                            "count": 100
                        }
                    ]
                },
                {
                    "id": "NZ",
                    "listid": "ip-country-chart-NZ",
                    "name": "New Zealand",
                    "cities": [
                        {
                            "id": "2193733",
                            "name": "Auckland",
                            "countryid": "NZ",
                            "listid": "ip-city-chart-2193733"
                        },
                        {
                            "id": "2192362",
                            "name": "Christchurch",
                            "countryid": "NZ",
                            "listid": "ip-city-chart-2192362"
                        },
                        {
                            "id": "2179537",
                            "name": "Wellington",
                            "countryid": "NZ",
                            "listid": "ip-city-chart-2179537"
                        },
                        {
                            "id": "2191562",
                            "name": "Dunedin",
                            "countryid": "NZ",
                            "listid": "ip-city-chart-2191562"
                        },
                        {
                            "id": "2186239",
                            "name": "New Plymouth",
                            "countryid": "NZ",
                            "listid": "ip-city-chart-2186239"
                        },
                        {
                            "id": "6241325",
                            "name": "Rotorua",
                            "countryid": "NZ",
                            "listid": "ip-city-chart-6241325"
                        }
                    ],
                    "genres": []
                },
                {
                    "id": "SA",
                    "listid": "ip-country-chart-SA",
                    "name": "Saudi Arabia",
                    "cities": [
                        {
                            "id": "108410",
                            "name": "Riyadh",
                            "countryid": "SA",
                            "listid": "ip-city-chart-108410"
                        },
                        {
                            "id": "105343",
                            "name": "Jeddah",
                            "countryid": "SA",
                            "listid": "ip-city-chart-105343"
                        },
                        {
                            "id": "110336",
                            "name": "Dammam",
                            "countryid": "SA",
                            "listid": "ip-city-chart-110336"
                        },
                        {
                            "id": "104515",
                            "name": "Mecca",
                            "countryid": "SA",
                            "listid": "ip-city-chart-104515"
                        },
                        {
                            "id": "109223",
                            "name": "Medina",
                            "countryid": "SA",
                            "listid": "ip-city-chart-109223"
                        },
                        {
                            "id": "109571",
                            "name": "Al Hufūf",
                            "countryid": "SA",
                            "listid": "ip-city-chart-109571"
                        },
                        {
                            "id": "107304",
                            "name": "Buraydah",
                            "countryid": "SA",
                            "listid": "ip-city-chart-107304"
                        },
                        {
                            "id": "109323",
                            "name": "Khobar",
                            "countryid": "SA",
                            "listid": "ip-city-chart-109323"
                        },
                        {
                            "id": "107968",
                            "name": "Ta’if",
                            "countryid": "SA",
                            "listid": "ip-city-chart-107968"
                        },
                        {
                            "id": "105072",
                            "name": "Khamis Mushait",
                            "countryid": "SA",
                            "listid": "ip-city-chart-105072"
                        },
                        {
                            "id": "106281",
                            "name": "Ha'il",
                            "countryid": "SA",
                            "listid": "ip-city-chart-106281"
                        },
                        {
                            "id": "101628",
                            "name": "Tabuk",
                            "countryid": "SA",
                            "listid": "ip-city-chart-101628"
                        },
                        {
                            "id": "103630",
                            "name": "Najrān",
                            "countryid": "SA",
                            "listid": "ip-city-chart-103630"
                        },
                        {
                            "id": "108512",
                            "name": "Arar",
                            "countryid": "SA",
                            "listid": "ip-city-chart-108512"
                        },
                        {
                            "id": "108648",
                            "name": "Qurayyat",
                            "countryid": "SA",
                            "listid": "ip-city-chart-108648"
                        },
                        {
                            "id": "106297",
                            "name": "Hafar Al-Batin",
                            "countryid": "SA",
                            "listid": "ip-city-chart-106297"
                        },
                        {
                            "id": "110250",
                            "name": "‘Afīf",
                            "countryid": "SA",
                            "listid": "ip-city-chart-110250"
                        }
                    ],
                    "genres": []
                },
                {
                    "id": "BR",
                    "listid": "ip-country-chart-BR",
                    "momentum_listid": "risers-country-chart-BR",
                    "name": "Brazil",
                    "cities": [
                        {
                            "id": "3448439",
                            "name": "São Paulo",
                            "countryid": "BR",
                            "listid": "ip-city-chart-3448439"
                        },
                        {
                            "id": "3451190",
                            "name": "Rio de Janeiro",
                            "countryid": "BR",
                            "listid": "ip-city-chart-3451190"
                        },
                        {
                            "id": "3470127",
                            "name": "Belo Horizonte",
                            "countryid": "BR",
                            "listid": "ip-city-chart-3470127"
                        },
                        {
                            "id": "3464975",
                            "name": "Curitiba",
                            "countryid": "BR",
                            "listid": "ip-city-chart-3464975"
                        },
                        {
                            "id": "3452925",
                            "name": "Porto Alegre",
                            "countryid": "BR",
                            "listid": "ip-city-chart-3452925"
                        },
                        {
                            "id": "3469058",
                            "name": "Brasília",
                            "countryid": "BR",
                            "listid": "ip-city-chart-3469058"
                        },
                        {
                            "id": "3450554",
                            "name": "Salvador",
                            "countryid": "BR",
                            "listid": "ip-city-chart-3450554"
                        },
                        {
                            "id": "3462377",
                            "name": "Goiânia",
                            "countryid": "BR",
                            "listid": "ip-city-chart-3462377"
                        },
                        {
                            "id": "3467865",
                            "name": "Campinas",
                            "countryid": "BR",
                            "listid": "ip-city-chart-3467865"
                        },
                        {
                            "id": "3405870",
                            "name": "Belém",
                            "countryid": "BR",
                            "listid": "ip-city-chart-3405870"
                        },
                        {
                            "id": "3399415",
                            "name": "Fortaleza",
                            "countryid": "BR",
                            "listid": "ip-city-chart-3399415"
                        },
                        {
                            "id": "3390760",
                            "name": "Recife",
                            "countryid": "BR",
                            "listid": "ip-city-chart-3390760"
                        },
                        {
                            "id": "3663517",
                            "name": "Manaus",
                            "countryid": "BR",
                            "listid": "ip-city-chart-3663517"
                        },
                        {
                            "id": "3451328",
                            "name": "Ribeirão Preto",
                            "countryid": "BR",
                            "listid": "ip-city-chart-3451328"
                        },
                        {
                            "id": "3463237",
                            "name": "Florianópolis",
                            "countryid": "BR",
                            "listid": "ip-city-chart-3463237"
                        },
                        {
                            "id": "3467747",
                            "name": "Campo Grande",
                            "countryid": "BR",
                            "listid": "ip-city-chart-3467747"
                        },
                        {
                            "id": "3448742",
                            "name": "São José",
                            "countryid": "BR",
                            "listid": "ip-city-chart-3448742"
                        },
                        {
                            "id": "3447399",
                            "name": "Sorocaba",
                            "countryid": "BR",
                            "listid": "ip-city-chart-3447399"
                        },
                        {
                            "id": "3448636",
                            "name": "São José dos Campos",
                            "countryid": "BR",
                            "listid": "ip-city-chart-3448636"
                        },
                        {
                            "id": "3459505",
                            "name": "Juiz de Fora",
                            "countryid": "BR",
                            "listid": "ip-city-chart-3459505"
                        },
                        {
                            "id": "3445831",
                            "name": "Uberlândia",
                            "countryid": "BR",
                            "listid": "ip-city-chart-3445831"
                        },
                        {
                            "id": "3460845",
                            "name": "Itajaí",
                            "countryid": "BR",
                            "listid": "ip-city-chart-3460845"
                        },
                        {
                            "id": "3465038",
                            "name": "Cuiabá",
                            "countryid": "BR",
                            "listid": "ip-city-chart-3465038"
                        },
                        {
                            "id": "3394023",
                            "name": "Natal",
                            "countryid": "BR",
                            "listid": "ip-city-chart-3394023"
                        },
                        {
                            "id": "3388368",
                            "name": "São Luís",
                            "countryid": "BR",
                            "listid": "ip-city-chart-3388368"
                        },
                        {
                            "id": "3458449",
                            "name": "Londrina",
                            "countryid": "BR",
                            "listid": "ip-city-chart-3458449"
                        },
                        {
                            "id": "3456068",
                            "name": "Novo Hamburgo",
                            "countryid": "BR",
                            "listid": "ip-city-chart-3456068"
                        },
                        {
                            "id": "3459712",
                            "name": "Joinville",
                            "countryid": "BR",
                            "listid": "ip-city-chart-3459712"
                        },
                        {
                            "id": "3469968",
                            "name": "Blumenau",
                            "countryid": "BR",
                            "listid": "ip-city-chart-3469968"
                        },
                        {
                            "id": "3395981",
                            "name": "Maceió",
                            "countryid": "BR",
                            "listid": "ip-city-chart-3395981"
                        },
                        {
                            "id": "3386496",
                            "name": "Teresina",
                            "countryid": "BR",
                            "listid": "ip-city-chart-3386496"
                        },
                        {
                            "id": "3466537",
                            "name": "Caxias do Sul",
                            "countryid": "BR",
                            "listid": "ip-city-chart-3466537"
                        },
                        {
                            "id": "3448639",
                            "name": "São José do Rio Preto",
                            "countryid": "BR",
                            "listid": "ip-city-chart-3448639"
                        },
                        {
                            "id": "3444924",
                            "name": "Vitória",
                            "countryid": "BR",
                            "listid": "ip-city-chart-3444924"
                        },
                        {
                            "id": "3457671",
                            "name": "Maringá",
                            "countryid": "BR",
                            "listid": "ip-city-chart-3457671"
                        },
                        {
                            "id": "3446682",
                            "name": "Taubaté",
                            "countryid": "BR",
                            "listid": "ip-city-chart-3446682"
                        },
                        {
                            "id": "3397277",
                            "name": "João Pessoa",
                            "countryid": "BR",
                            "listid": "ip-city-chart-3397277"
                        },
                        {
                            "id": "3453186",
                            "name": "Ponta Grossa",
                            "countryid": "BR",
                            "listid": "ip-city-chart-3453186"
                        },
                        {
                            "id": "3662762",
                            "name": "Porto Velho",
                            "countryid": "BR",
                            "listid": "ip-city-chart-3662762"
                        },
                        {
                            "id": "3444876",
                            "name": "Volta Redonda",
                            "countryid": "BR",
                            "listid": "ip-city-chart-3444876"
                        },
                        {
                            "id": "3445026",
                            "name": "Vila Velha",
                            "countryid": "BR",
                            "listid": "ip-city-chart-3445026"
                        },
                        {
                            "id": "3453643",
                            "name": "Piracicaba",
                            "countryid": "BR",
                            "listid": "ip-city-chart-3453643"
                        },
                        {
                            "id": "3463030",
                            "name": "Foz do Iguaçu",
                            "countryid": "BR",
                            "listid": "ip-city-chart-3463030"
                        },
                        {
                            "id": "3454244",
                            "name": "Pelotas",
                            "countryid": "BR",
                            "listid": "ip-city-chart-3454244"
                        },
                        {
                            "id": "3398269",
                            "name": "Imperatriz",
                            "countryid": "BR",
                            "listid": "ip-city-chart-3398269"
                        },
                        {
                            "id": "3474574",
                            "name": "Palmas",
                            "countryid": "BR",
                            "listid": "ip-city-chart-3474574"
                        },
                        {
                            "id": "3471859",
                            "name": "Araçatuba",
                            "countryid": "BR",
                            "listid": "ip-city-chart-3471859"
                        },
                        {
                            "id": "3450083",
                            "name": "Santa Maria",
                            "countryid": "BR",
                            "listid": "ip-city-chart-3450083"
                        },
                        {
                            "id": "3454857",
                            "name": "Passo Fundo",
                            "countryid": "BR",
                            "listid": "ip-city-chart-3454857"
                        },
                        {
                            "id": "3457692",
                            "name": "Marília",
                            "countryid": "BR",
                            "listid": "ip-city-chart-3457692"
                        }
                    ],
                    "genres": [
                        {
                            "id": "BR-1",
                            "countryid": "BR",
                            "listid": "genre-country-chart-BR-1",
                            "name": "Pop",
                            "urlPath": "pop",
                            "count": 100
                        },
                        {
                            "id": "BR-2",
                            "countryid": "BR",
                            "listid": "genre-country-chart-BR-2",
                            "name": "Hip-Hop/Rap",
                            "urlPath": "hip-hop-rap",
                            "count": 100
                        },
                        {
                            "id": "BR-3",
                            "countryid": "BR",
                            "listid": "genre-country-chart-BR-3",
                            "name": "Dance",
                            "urlPath": "dance",
                            "count": 100
                        }
                    ]
                },
                {
                    "id": "SE",
                    "listid": "ip-country-chart-SE",
                    "name": "Sweden",
                    "cities": [
                        {
                            "id": "2673730",
                            "name": "Stockholm",
                            "countryid": "SE",
                            "listid": "ip-city-chart-2673730"
                        },
                        {
                            "id": "2711537",
                            "name": "Göteborg",
                            "countryid": "SE",
                            "listid": "ip-city-chart-2711537"
                        },
                        {
                            "id": "2692969",
                            "name": "Malmö",
                            "countryid": "SE",
                            "listid": "ip-city-chart-2692969"
                        },
                        {
                            "id": "2686657",
                            "name": "Örebro",
                            "countryid": "SE",
                            "listid": "ip-city-chart-2686657"
                        },
                        {
                            "id": "2664454",
                            "name": "Västerås",
                            "countryid": "SE",
                            "listid": "ip-city-chart-2664454"
                        },
                        {
                            "id": "2702979",
                            "name": "Jönköping",
                            "countryid": "SE",
                            "listid": "ip-city-chart-2702979"
                        },
                        {
                            "id": "2670781",
                            "name": "Sundsvall",
                            "countryid": "SE",
                            "listid": "ip-city-chart-2670781"
                        },
                        {
                            "id": "2680075",
                            "name": "Sandviken",
                            "countryid": "SE",
                            "listid": "ip-city-chart-2680075"
                        },
                        {
                            "id": "2701680",
                            "name": "Karlstad",
                            "countryid": "SE",
                            "listid": "ip-city-chart-2701680"
                        },
                        {
                            "id": "602150",
                            "name": "Umeå",
                            "countryid": "SE",
                            "listid": "ip-city-chart-602150"
                        },
                        {
                            "id": "2720383",
                            "name": "Borlänge",
                            "countryid": "SE",
                            "listid": "ip-city-chart-2720383"
                        },
                        {
                            "id": "2685750",
                            "name": "Östersund",
                            "countryid": "SE",
                            "listid": "ip-city-chart-2685750"
                        },
                        {
                            "id": "2702261",
                            "name": "Kalmar",
                            "countryid": "SE",
                            "listid": "ip-city-chart-2702261"
                        },
                        {
                            "id": "604490",
                            "name": "Luleå",
                            "countryid": "SE",
                            "listid": "ip-city-chart-604490"
                        },
                        {
                            "id": "2677234",
                            "name": "Skövde",
                            "countryid": "SE",
                            "listid": "ip-city-chart-2677234"
                        },
                        {
                            "id": "2715568",
                            "name": "Falköping",
                            "countryid": "SE",
                            "listid": "ip-city-chart-2715568"
                        },
                        {
                            "id": "2712045",
                            "name": "Gislaved",
                            "countryid": "SE",
                            "listid": "ip-city-chart-2712045"
                        },
                        {
                            "id": "605155",
                            "name": "Kiruna",
                            "countryid": "SE",
                            "listid": "ip-city-chart-605155"
                        }
                    ],
                    "genres": []
                },
                {
                    "id": "SG",
                    "listid": "ip-country-chart-SG",
                    "name": "Singapore",
                    "cities": [
                        {
                            "id": "1880252",
                            "name": "Singapore",
                            "countryid": "SG",
                            "listid": "ip-city-chart-1880252"
                        }
                    ],
                    "genres": []
                },
                {
                    "id": "BY",
                    "listid": "ip-country-chart-BY",
                    "name": "Belarus",
                    "cities": [
                        {
                            "id": "625144",
                            "name": "Minsk",
                            "countryid": "BY",
                            "listid": "ip-city-chart-625144"
                        },
                        {
                            "id": "627904",
                            "name": "Hrodna",
                            "countryid": "BY",
                            "listid": "ip-city-chart-627904"
                        },
                        {
                            "id": "627907",
                            "name": "Gomel",
                            "countryid": "BY",
                            "listid": "ip-city-chart-627907"
                        },
                        {
                            "id": "620127",
                            "name": "Vitebsk",
                            "countryid": "BY",
                            "listid": "ip-city-chart-620127"
                        },
                        {
                            "id": "621754",
                            "name": "Slonim",
                            "countryid": "BY",
                            "listid": "ip-city-chart-621754"
                        },
                        {
                            "id": "625818",
                            "name": "Luninyets",
                            "countryid": "BY",
                            "listid": "ip-city-chart-625818"
                        }
                    ],
                    "genres": []
                },
                {
                    "id": "GB",
                    "listid": "ip-country-chart-GB",
                    "momentum_listid": "risers-country-chart-GB",
                    "name": "United Kingdom",
                    "cities": [
                        {
                            "id": "2643743",
                            "name": "London",
                            "countryid": "GB",
                            "listid": "ip-city-chart-2643743"
                        },
                        {
                            "id": "2655603",
                            "name": "Birmingham",
                            "countryid": "GB",
                            "listid": "ip-city-chart-2655603"
                        },
                        {
                            "id": "2643123",
                            "name": "Manchester",
                            "countryid": "GB",
                            "listid": "ip-city-chart-2643123"
                        },
                        {
                            "id": "2654675",
                            "name": "Bristol",
                            "countryid": "GB",
                            "listid": "ip-city-chart-2654675"
                        },
                        {
                            "id": "2636531",
                            "name": "Sunderland",
                            "countryid": "GB",
                            "listid": "ip-city-chart-2636531"
                        },
                        {
                            "id": "2648579",
                            "name": "Glasgow",
                            "countryid": "GB",
                            "listid": "ip-city-chart-2648579"
                        },
                        {
                            "id": "2644210",
                            "name": "Liverpool",
                            "countryid": "GB",
                            "listid": "ip-city-chart-2644210"
                        },
                        {
                            "id": "2640194",
                            "name": "Plymouth",
                            "countryid": "GB",
                            "listid": "ip-city-chart-2640194"
                        },
                        {
                            "id": "2638077",
                            "name": "Sheffield",
                            "countryid": "GB",
                            "listid": "ip-city-chart-2638077"
                        },
                        {
                            "id": "2644688",
                            "name": "Leeds",
                            "countryid": "GB",
                            "listid": "ip-city-chart-2644688"
                        },
                        {
                            "id": "2653822",
                            "name": "Cardiff",
                            "countryid": "GB",
                            "listid": "ip-city-chart-2653822"
                        },
                        {
                            "id": "2636841",
                            "name": "Stoke-on-Trent",
                            "countryid": "GB",
                            "listid": "ip-city-chart-2636841"
                        },
                        {
                            "id": "2652221",
                            "name": "Coventry",
                            "countryid": "GB",
                            "listid": "ip-city-chart-2652221"
                        },
                        {
                            "id": "2633948",
                            "name": "Wigan",
                            "countryid": "GB",
                            "listid": "ip-city-chart-2633948"
                        },
                        {
                            "id": "2654993",
                            "name": "Bradford",
                            "countryid": "GB",
                            "listid": "ip-city-chart-2654993"
                        },
                        {
                            "id": "2641170",
                            "name": "Nottingham",
                            "countryid": "GB",
                            "listid": "ip-city-chart-2641170"
                        },
                        {
                            "id": "2650225",
                            "name": "Edinburgh",
                            "countryid": "GB",
                            "listid": "ip-city-chart-2650225"
                        },
                        {
                            "id": "2644668",
                            "name": "Leicester",
                            "countryid": "GB",
                            "listid": "ip-city-chart-2644668"
                        },
                        {
                            "id": "2641430",
                            "name": "Northampton",
                            "countryid": "GB",
                            "listid": "ip-city-chart-2641430"
                        },
                        {
                            "id": "2639996",
                            "name": "Portsmouth",
                            "countryid": "GB",
                            "listid": "ip-city-chart-2639996"
                        },
                        {
                            "id": "2637487",
                            "name": "Southampton",
                            "countryid": "GB",
                            "listid": "ip-city-chart-2637487"
                        },
                        {
                            "id": "2655984",
                            "name": "Belfast",
                            "countryid": "GB",
                            "listid": "ip-city-chart-2655984"
                        },
                        {
                            "id": "2654710",
                            "name": "Brighton",
                            "countryid": "GB",
                            "listid": "ip-city-chart-2654710"
                        },
                        {
                            "id": "2655095",
                            "name": "Bournemouth",
                            "countryid": "GB",
                            "listid": "ip-city-chart-2655095"
                        },
                        {
                            "id": "2642607",
                            "name": "Middlesbrough",
                            "countryid": "GB",
                            "listid": "ip-city-chart-2642607"
                        },
                        {
                            "id": "2648404",
                            "name": "Gloucester",
                            "countryid": "GB",
                            "listid": "ip-city-chart-2648404"
                        },
                        {
                            "id": "2639912",
                            "name": "Preston",
                            "countryid": "GB",
                            "listid": "ip-city-chart-2639912"
                        },
                        {
                            "id": "2642465",
                            "name": "Milton Keynes",
                            "countryid": "GB",
                            "listid": "ip-city-chart-2642465"
                        },
                        {
                            "id": "2651347",
                            "name": "Derby",
                            "countryid": "GB",
                            "listid": "ip-city-chart-2651347"
                        },
                        {
                            "id": "2640729",
                            "name": "Oxford",
                            "countryid": "GB",
                            "listid": "ip-city-chart-2640729"
                        },
                        {
                            "id": "2639577",
                            "name": "Reading",
                            "countryid": "GB",
                            "listid": "ip-city-chart-2639577"
                        },
                        {
                            "id": "2636432",
                            "name": "Swansea",
                            "countryid": "GB",
                            "listid": "ip-city-chart-2636432"
                        },
                        {
                            "id": "2645425",
                            "name": "Kingston upon Hull",
                            "countryid": "GB",
                            "listid": "ip-city-chart-2645425"
                        },
                        {
                            "id": "2636389",
                            "name": "Swindon",
                            "countryid": "GB",
                            "listid": "ip-city-chart-2636389"
                        },
                        {
                            "id": "2646057",
                            "name": "Ipswich",
                            "countryid": "GB",
                            "listid": "ip-city-chart-2646057"
                        },
                        {
                            "id": "2655459",
                            "name": "Blackpool",
                            "countryid": "GB",
                            "listid": "ip-city-chart-2655459"
                        },
                        {
                            "id": "2651123",
                            "name": "Doncaster",
                            "countryid": "GB",
                            "listid": "ip-city-chart-2651123"
                        },
                        {
                            "id": "2636177",
                            "name": "Taunton",
                            "countryid": "GB",
                            "listid": "ip-city-chart-2636177"
                        },
                        {
                            "id": "2640354",
                            "name": "Peterborough",
                            "countryid": "GB",
                            "listid": "ip-city-chart-2640354"
                        },
                        {
                            "id": "2657832",
                            "name": "Aberdeen",
                            "countryid": "GB",
                            "listid": "ip-city-chart-2657832"
                        },
                        {
                            "id": "2641181",
                            "name": "Norwich",
                            "countryid": "GB",
                            "listid": "ip-city-chart-2641181"
                        },
                        {
                            "id": "2646458",
                            "name": "Huddersfield",
                            "countryid": "GB",
                            "listid": "ip-city-chart-2646458"
                        },
                        {
                            "id": "2635650",
                            "name": "Torquay",
                            "countryid": "GB",
                            "listid": "ip-city-chart-2635650"
                        },
                        {
                            "id": "2633352",
                            "name": "York",
                            "countryid": "GB",
                            "listid": "ip-city-chart-2633352"
                        },
                        {
                            "id": "2649808",
                            "name": "Exeter",
                            "countryid": "GB",
                            "listid": "ip-city-chart-2649808"
                        },
                        {
                            "id": "2638703",
                            "name": "Saint Peters",
                            "countryid": "GB",
                            "listid": "ip-city-chart-2638703"
                        },
                        {
                            "id": "2633563",
                            "name": "Worcester",
                            "countryid": "GB",
                            "listid": "ip-city-chart-2633563"
                        },
                        {
                            "id": "2646088",
                            "name": "Inverness",
                            "countryid": "GB",
                            "listid": "ip-city-chart-2646088"
                        },
                        {
                            "id": "2643734",
                            "name": "Londonderry County Borough",
                            "countryid": "GB",
                            "listid": "ip-city-chart-2643734"
                        },
                        {
                            "id": "2653941",
                            "name": "Cambridge",
                            "countryid": "GB",
                            "listid": "ip-city-chart-2653941"
                        }
                    ],
                    "genres": [
                        {
                            "id": "GB-1",
                            "countryid": "GB",
                            "listid": "genre-country-chart-GB-1",
                            "name": "Pop",
                            "urlPath": "pop",
                            "count": 100
                        },
                        {
                            "id": "GB-2",
                            "countryid": "GB",
                            "listid": "genre-country-chart-GB-2",
                            "name": "Hip-Hop/Rap",
                            "urlPath": "hip-hop-rap",
                            "count": 100
                        },
                        {
                            "id": "GB-3",
                            "countryid": "GB",
                            "listid": "genre-country-chart-GB-3",
                            "name": "Dance",
                            "urlPath": "dance",
                            "count": 100
                        }
                    ]
                },
                {
                    "id": "CA",
                    "listid": "ip-country-chart-CA",
                    "momentum_listid": "risers-country-chart-CA",
                    "name": "Canada",
                    "cities": [
                        {
                            "id": "6167865",
                            "name": "Toronto",
                            "countryid": "CA",
                            "listid": "ip-city-chart-6167865"
                        },
                        {
                            "id": "6077243",
                            "name": "Montréal",
                            "countryid": "CA",
                            "listid": "ip-city-chart-6077243"
                        },
                        {
                            "id": "6173331",
                            "name": "Vancouver",
                            "countryid": "CA",
                            "listid": "ip-city-chart-6173331"
                        },
                        {
                            "id": "5913490",
                            "name": "Calgary",
                            "countryid": "CA",
                            "listid": "ip-city-chart-5913490"
                        },
                        {
                            "id": "5946768",
                            "name": "Edmonton",
                            "countryid": "CA",
                            "listid": "ip-city-chart-5946768"
                        },
                        {
                            "id": "6183235",
                            "name": "Winnipeg",
                            "countryid": "CA",
                            "listid": "ip-city-chart-6183235"
                        },
                        {
                            "id": "6325494",
                            "name": "Québec",
                            "countryid": "CA",
                            "listid": "ip-city-chart-6325494"
                        },
                        {
                            "id": "6094817",
                            "name": "Ottawa",
                            "countryid": "CA",
                            "listid": "ip-city-chart-6094817"
                        },
                        {
                            "id": "5969782",
                            "name": "Hamilton",
                            "countryid": "CA",
                            "listid": "ip-city-chart-5969782"
                        },
                        {
                            "id": "5923101",
                            "name": "Clarence-Rockland",
                            "countryid": "CA",
                            "listid": "ip-city-chart-5923101"
                        },
                        {
                            "id": "5992996",
                            "name": "Kitchener",
                            "countryid": "CA",
                            "listid": "ip-city-chart-5992996"
                        },
                        {
                            "id": "6065592",
                            "name": "Maple Creek",
                            "countryid": "CA",
                            "listid": "ip-city-chart-6065592"
                        },
                        {
                            "id": "6058560",
                            "name": "London",
                            "countryid": "CA",
                            "listid": "ip-city-chart-6058560"
                        },
                        {
                            "id": "6159905",
                            "name": "Surrey",
                            "countryid": "CA",
                            "listid": "ip-city-chart-6159905"
                        },
                        {
                            "id": "6141256",
                            "name": "Saskatoon",
                            "countryid": "CA",
                            "listid": "ip-city-chart-6141256"
                        },
                        {
                            "id": "6182958",
                            "name": "Windsor",
                            "countryid": "CA",
                            "listid": "ip-city-chart-6182962"
                        },
                        {
                            "id": "6324729",
                            "name": "Halifax",
                            "countryid": "CA",
                            "listid": "ip-city-chart-6324729"
                        },
                        {
                            "id": "6324733",
                            "name": "St. John's",
                            "countryid": "CA",
                            "listid": "ip-city-chart-6324733"
                        },
                        {
                            "id": "5964700",
                            "name": "Greater Sudbury",
                            "countryid": "CA",
                            "listid": "ip-city-chart-5964700"
                        },
                        {
                            "id": "5964347",
                            "name": "Grande Prairie",
                            "countryid": "CA",
                            "listid": "ip-city-chart-5964347"
                        },
                        {
                            "id": "6113365",
                            "name": "Prince George",
                            "countryid": "CA",
                            "listid": "ip-city-chart-6113365"
                        },
                        {
                            "id": "6071618",
                            "name": "Medicine Hat",
                            "countryid": "CA",
                            "listid": "ip-city-chart-6071618"
                        },
                        {
                            "id": "6058024",
                            "name": "Lloydminster",
                            "countryid": "CA",
                            "listid": "ip-city-chart-6058024"
                        },
                        {
                            "id": "5955895",
                            "name": "Fort McMurray",
                            "countryid": "CA",
                            "listid": "ip-city-chart-5955895"
                        },
                        {
                            "id": "6141439",
                            "name": "Sault Ste. Marie",
                            "countryid": "CA",
                            "listid": "ip-city-chart-6141439"
                        },
                        {
                            "id": "6354908",
                            "name": "Sydney",
                            "countryid": "CA",
                            "listid": "ip-city-chart-6354908"
                        },
                        {
                            "id": "6138517",
                            "name": "Saint John",
                            "countryid": "CA",
                            "listid": "ip-city-chart-6138517"
                        },
                        {
                            "id": "6173017",
                            "name": "Val-d'Or",
                            "countryid": "CA",
                            "listid": "ip-city-chart-6173017"
                        },
                        {
                            "id": "6354895",
                            "name": "Rimouski",
                            "countryid": "CA",
                            "listid": "ip-city-chart-6354895"
                        },
                        {
                            "id": "5914132",
                            "name": "Campbell River",
                            "countryid": "CA",
                            "listid": "ip-city-chart-5914132"
                        },
                        {
                            "id": "5889745",
                            "name": "Baie-Comeau",
                            "countryid": "CA",
                            "listid": "ip-city-chart-5889745"
                        },
                        {
                            "id": "5940934",
                            "name": "Dolbeau-Mistassini",
                            "countryid": "CA",
                            "listid": "ip-city-chart-5940934"
                        },
                        {
                            "id": "6185607",
                            "name": "Yorkton",
                            "countryid": "CA",
                            "listid": "ip-city-chart-6185607"
                        },
                        {
                            "id": "6180550",
                            "name": "Whitehorse",
                            "countryid": "CA",
                            "listid": "ip-city-chart-6180550"
                        },
                        {
                            "id": "5994839",
                            "name": "Labrador City",
                            "countryid": "CA",
                            "listid": "ip-city-chart-5994839"
                        },
                        {
                            "id": "5927969",
                            "name": "Corner Brook",
                            "countryid": "CA",
                            "listid": "ip-city-chart-5927969"
                        },
                        {
                            "id": "6185377",
                            "name": "Yellowknife",
                            "countryid": "CA",
                            "listid": "ip-city-chart-6185377"
                        },
                        {
                            "id": "6165406",
                            "name": "Thompson",
                            "countryid": "CA",
                            "listid": "ip-city-chart-6165406"
                        },
                        {
                            "id": "6162949",
                            "name": "Terrace",
                            "countryid": "CA",
                            "listid": "ip-city-chart-6162949"
                        },
                        {
                            "id": "6166142",
                            "name": "Thunder Bay",
                            "countryid": "CA",
                            "listid": "ip-city-chart-6166142"
                        },
                        {
                            "id": "7281931",
                            "name": "Okanagan",
                            "countryid": "CA",
                            "listid": "ip-city-chart-7281931"
                        }
                    ],
                    "genres": [
                        {
                            "id": "CA-1",
                            "countryid": "CA",
                            "listid": "genre-country-chart-CA-1",
                            "name": "Pop",
                            "urlPath": "pop",
                            "count": 100
                        },
                        {
                            "id": "CA-2",
                            "countryid": "CA",
                            "listid": "genre-country-chart-CA-2",
                            "name": "Hip-Hop/Rap",
                            "urlPath": "hip-hop-rap",
                            "count": 100
                        },
                        {
                            "id": "CA-3",
                            "countryid": "CA",
                            "listid": "genre-country-chart-CA-3",
                            "name": "Dance",
                            "urlPath": "dance",
                            "count": 100
                        }
                    ]
                },
                {
                    "id": "CH",
                    "listid": "ip-country-chart-CH",
                    "momentum_listid": "risers-country-chart-CH",
                    "name": "Switzerland",
                    "cities": [
                        {
                            "id": "2657896",
                            "name": "Zürich",
                            "countryid": "CH",
                            "listid": "ip-city-chart-2657896"
                        },
                        {
                            "id": "2660646",
                            "name": "Genève",
                            "countryid": "CH",
                            "listid": "ip-city-chart-2660646"
                        },
                        {
                            "id": "2661604",
                            "name": "Basel",
                            "countryid": "CH",
                            "listid": "ip-city-chart-2661604"
                        },
                        {
                            "id": "2659994",
                            "name": "Lausanne",
                            "countryid": "CH",
                            "listid": "ip-city-chart-2659994"
                        },
                        {
                            "id": "2661552",
                            "name": "Bern",
                            "countryid": "CH",
                            "listid": "ip-city-chart-2661552"
                        },
                        {
                            "id": "2659811",
                            "name": "Luzern",
                            "countryid": "CH",
                            "listid": "ip-city-chart-2659811"
                        },
                        {
                            "id": "2658822",
                            "name": "Sankt Gallen",
                            "countryid": "CH",
                            "listid": "ip-city-chart-2658822"
                        },
                        {
                            "id": "2660718",
                            "name": "Fribourg",
                            "countryid": "CH",
                            "listid": "ip-city-chart-2660718"
                        },
                        {
                            "id": "2659297",
                            "name": "Olten",
                            "countryid": "CH",
                            "listid": "ip-city-chart-2659297"
                        },
                        {
                            "id": "2659836",
                            "name": "Lugano",
                            "countryid": "CH",
                            "listid": "ip-city-chart-2659836"
                        },
                        {
                            "id": "2658576",
                            "name": "Sitten",
                            "countryid": "CH",
                            "listid": "ip-city-chart-2658576"
                        },
                        {
                            "id": "2661169",
                            "name": "Chur",
                            "countryid": "CH",
                            "listid": "ip-city-chart-2661169"
                        },
                        {
                            "id": "2658377",
                            "name": "Thun",
                            "countryid": "CH",
                            "listid": "ip-city-chart-2658377"
                        },
                        {
                            "id": "2660076",
                            "name": "La Chaux-de-Fonds",
                            "countryid": "CH",
                            "listid": "ip-city-chart-2660076"
                        }
                    ],
                    "genres": []
                },
                {
                    "id": "KR",
                    "listid": "ip-country-chart-KR",
                    "name": "South Korea",
                    "cities": [
                        {
                            "id": "1835848",
                            "name": "Seoul",
                            "countryid": "KR",
                            "listid": "ip-city-chart-1835848"
                        },
                        {
                            "id": "1835329",
                            "name": "Daegu",
                            "countryid": "KR",
                            "listid": "ip-city-chart-1835329"
                        },
                        {
                            "id": "1838524",
                            "name": "Busan",
                            "countryid": "KR",
                            "listid": "ip-city-chart-1838524"
                        },
                        {
                            "id": "1841811",
                            "name": "Gwangju",
                            "countryid": "KR",
                            "listid": "ip-city-chart-1841811"
                        },
                        {
                            "id": "1835235",
                            "name": "Daejeon",
                            "countryid": "KR",
                            "listid": "ip-city-chart-1835235"
                        },
                        {
                            "id": "1845759",
                            "name": "Cheonan",
                            "countryid": "KR",
                            "listid": "ip-city-chart-1845759"
                        },
                        {
                            "id": "1833747",
                            "name": "Ulsan",
                            "countryid": "KR",
                            "listid": "ip-city-chart-1833747"
                        },
                        {
                            "id": "1845604",
                            "name": "Cheongju-si",
                            "countryid": "KR",
                            "listid": "ip-city-chart-1845604"
                        },
                        {
                            "id": "1846326",
                            "name": "Changwon",
                            "countryid": "KR",
                            "listid": "ip-city-chart-1846326"
                        },
                        {
                            "id": "1845457",
                            "name": "Jeonju",
                            "countryid": "KR",
                            "listid": "ip-city-chart-1845457"
                        },
                        {
                            "id": "1846266",
                            "name": "Jeju City",
                            "countryid": "KR",
                            "listid": "ip-city-chart-1846266"
                        },
                        {
                            "id": "1845136",
                            "name": "Chuncheon",
                            "countryid": "KR",
                            "listid": "ip-city-chart-1845136"
                        },
                        {
                            "id": "1842225",
                            "name": "Gumi",
                            "countryid": "KR",
                            "listid": "ip-city-chart-1842225"
                        },
                        {
                            "id": "1882056",
                            "name": "Sinhyeon",
                            "countryid": "KR",
                            "listid": "ip-city-chart-1882056"
                        },
                        {
                            "id": "1846912",
                            "name": "Anseong",
                            "countryid": "KR",
                            "listid": "ip-city-chart-1846912"
                        },
                        {
                            "id": "1842025",
                            "name": "Gunsan",
                            "countryid": "KR",
                            "listid": "ip-city-chart-1842025"
                        },
                        {
                            "id": "1835648",
                            "name": "Suncheon",
                            "countryid": "KR",
                            "listid": "ip-city-chart-1835648"
                        },
                        {
                            "id": "1839071",
                            "name": "Pohang",
                            "countryid": "KR",
                            "listid": "ip-city-chart-1839071"
                        },
                        {
                            "id": "1846052",
                            "name": "Chinju",
                            "countryid": "KR",
                            "listid": "ip-city-chart-1846052"
                        },
                        {
                            "id": "1841066",
                            "name": "Mokpo",
                            "countryid": "KR",
                            "listid": "ip-city-chart-1841066"
                        },
                        {
                            "id": "1838469",
                            "name": "Pyeongchang",
                            "countryid": "KR",
                            "listid": "ip-city-chart-1838469"
                        }
                    ],
                    "genres": []
                },
                {
                    "id": "CL",
                    "listid": "ip-country-chart-CL",
                    "momentum_listid": "risers-country-chart-CL",
                    "name": "Chile",
                    "cities": [
                        {
                            "id": "3871336",
                            "name": "Santiago",
                            "countryid": "CL",
                            "listid": "ip-city-chart-3871336"
                        },
                        {
                            "id": "3868121",
                            "name": "Viña del Mar",
                            "countryid": "CL",
                            "listid": "ip-city-chart-3868121"
                        },
                        {
                            "id": "3899539",
                            "name": "Antofagasta",
                            "countryid": "CL",
                            "listid": "ip-city-chart-3899539"
                        },
                        {
                            "id": "3887127",
                            "name": "Iquique",
                            "countryid": "CL",
                            "listid": "ip-city-chart-3887127"
                        },
                        {
                            "id": "3874960",
                            "name": "Puerto Montt",
                            "countryid": "CL",
                            "listid": "ip-city-chart-3874960"
                        },
                        {
                            "id": "3870011",
                            "name": "Temuco",
                            "countryid": "CL",
                            "listid": "ip-city-chart-3870011"
                        },
                        {
                            "id": "3893656",
                            "name": "Copiapó",
                            "countryid": "CL",
                            "listid": "ip-city-chart-3893656"
                        },
                        {
                            "id": "3870282",
                            "name": "Talcahuano",
                            "countryid": "CL",
                            "listid": "ip-city-chart-3870282"
                        },
                        {
                            "id": "3893629",
                            "name": "Coquimbo",
                            "countryid": "CL",
                            "listid": "ip-city-chart-3893629"
                        },
                        {
                            "id": "3874787",
                            "name": "Punta Arenas",
                            "countryid": "CL",
                            "listid": "ip-city-chart-3874787"
                        },
                        {
                            "id": "3894426",
                            "name": "Coyhaique",
                            "countryid": "CL",
                            "listid": "ip-city-chart-3894426"
                        }
                    ],
                    "genres": []
                },
                {
                    "id": "GR",
                    "listid": "ip-country-chart-GR",
                    "momentum_listid": "risers-country-chart-GR",
                    "name": "Greece",
                    "cities": [
                        {
                            "id": "264371",
                            "name": "Athens",
                            "countryid": "GR",
                            "listid": "ip-city-chart-264371"
                        },
                        {
                            "id": "734077",
                            "name": "Thessaloníki",
                            "countryid": "GR",
                            "listid": "ip-city-chart-734077"
                        },
                        {
                            "id": "261745",
                            "name": "Irákleion",
                            "countryid": "GR",
                            "listid": "ip-city-chart-261745"
                        },
                        {
                            "id": "255683",
                            "name": "Pátra",
                            "countryid": "GR",
                            "listid": "ip-city-chart-255683"
                        },
                        {
                            "id": "259289",
                            "name": "Kórinthos",
                            "countryid": "GR",
                            "listid": "ip-city-chart-259289"
                        },
                        {
                            "id": "258576",
                            "name": "Lárisa",
                            "countryid": "GR",
                            "listid": "ip-city-chart-258576"
                        },
                        {
                            "id": "400666",
                            "name": "Ródos",
                            "countryid": "GR",
                            "listid": "ip-city-chart-400666"
                        },
                        {
                            "id": "261779",
                            "name": "Ioánnina",
                            "countryid": "GR",
                            "listid": "ip-city-chart-261779"
                        },
                        {
                            "id": "733905",
                            "name": "Véroia",
                            "countryid": "GR",
                            "listid": "ip-city-chart-733905"
                        },
                        {
                            "id": "733776",
                            "name": "Giannitsá",
                            "countryid": "GR",
                            "listid": "ip-city-chart-733776"
                        },
                        {
                            "id": "734330",
                            "name": "Sérres",
                            "countryid": "GR",
                            "listid": "ip-city-chart-734330"
                        },
                        {
                            "id": "733840",
                            "name": "Xánthi",
                            "countryid": "GR",
                            "listid": "ip-city-chart-733840"
                        },
                        {
                            "id": "736928",
                            "name": "Alexandroupoli",
                            "countryid": "GR",
                            "listid": "ip-city-chart-736928"
                        },
                        {
                            "id": "262603",
                            "name": "Ermoúpolis",
                            "countryid": "GR",
                            "listid": "ip-city-chart-262603"
                        }
                    ],
                    "genres": []
                },
                {
                    "id": "CN",
                    "listid": "ip-country-chart-CN",
                    "name": "China",
                    "cities": [
                        {
                            "id": "1796236",
                            "name": "Shanghai",
                            "countryid": "CN",
                            "listid": "ip-city-chart-1796236"
                        },
                        {
                            "id": "1816670",
                            "name": "Beijing",
                            "countryid": "CN",
                            "listid": "ip-city-chart-1816670"
                        },
                        {
                            "id": "1809858",
                            "name": "Guangzhou",
                            "countryid": "CN",
                            "listid": "ip-city-chart-1809858"
                        },
                        {
                            "id": "1795565",
                            "name": "Shenzhen",
                            "countryid": "CN",
                            "listid": "ip-city-chart-1795565"
                        },
                        {
                            "id": "1815286",
                            "name": "Chengdu",
                            "countryid": "CN",
                            "listid": "ip-city-chart-1815286"
                        },
                        {
                            "id": "1799962",
                            "name": "Nanjing",
                            "countryid": "CN",
                            "listid": "ip-city-chart-1799962"
                        },
                        {
                            "id": "1792947",
                            "name": "Tianjin",
                            "countryid": "CN",
                            "listid": "ip-city-chart-1792947"
                        },
                        {
                            "id": "1808926",
                            "name": "Hangzhou",
                            "countryid": "CN",
                            "listid": "ip-city-chart-1808926"
                        },
                        {
                            "id": "1797929",
                            "name": "Qingdao",
                            "countryid": "CN",
                            "listid": "ip-city-chart-1797929"
                        },
                        {
                            "id": "2034937",
                            "name": "Shenyang",
                            "countryid": "CN",
                            "listid": "ip-city-chart-2034937"
                        },
                        {
                            "id": "1791247",
                            "name": "Wuhan",
                            "countryid": "CN",
                            "listid": "ip-city-chart-1791247"
                        },
                        {
                            "id": "1805753",
                            "name": "Jinan",
                            "countryid": "CN",
                            "listid": "ip-city-chart-1805753"
                        },
                        {
                            "id": "1790630",
                            "name": "Xi’an",
                            "countryid": "CN",
                            "listid": "ip-city-chart-1790630"
                        },
                        {
                            "id": "1814906",
                            "name": "Chongqing",
                            "countryid": "CN",
                            "listid": "ip-city-chart-1814906"
                        },
                        {
                            "id": "1804651",
                            "name": "Kunming",
                            "countryid": "CN",
                            "listid": "ip-city-chart-1804651"
                        },
                        {
                            "id": "1810295",
                            "name": "Gaozhou",
                            "countryid": "CN",
                            "listid": "ip-city-chart-1810295"
                        },
                        {
                            "id": "1815577",
                            "name": "Changsha",
                            "countryid": "CN",
                            "listid": "ip-city-chart-1815577"
                        },
                        {
                            "id": "1790645",
                            "name": "Xiamen",
                            "countryid": "CN",
                            "listid": "ip-city-chart-1790645"
                        },
                        {
                            "id": "1795270",
                            "name": "Shijiazhuang",
                            "countryid": "CN",
                            "listid": "ip-city-chart-1795270"
                        },
                        {
                            "id": "1816269",
                            "name": "Baise City",
                            "countryid": "CN",
                            "listid": "ip-city-chart-1816269"
                        },
                        {
                            "id": "1814087",
                            "name": "Dalian",
                            "countryid": "CN",
                            "listid": "ip-city-chart-1814087"
                        },
                        {
                            "id": "1795060",
                            "name": "Shiqi",
                            "countryid": "CN",
                            "listid": "ip-city-chart-1795060"
                        },
                        {
                            "id": "1784658",
                            "name": "Zhengzhou",
                            "countryid": "CN",
                            "listid": "ip-city-chart-1784658"
                        },
                        {
                            "id": "2038180",
                            "name": "Changchun",
                            "countryid": "CN",
                            "listid": "ip-city-chart-2038180"
                        },
                        {
                            "id": "2037013",
                            "name": "Harbin",
                            "countryid": "CN",
                            "listid": "ip-city-chart-2037013"
                        },
                        {
                            "id": "1787323",
                            "name": "Yangshuo",
                            "countryid": "CN",
                            "listid": "ip-city-chart-1787323"
                        },
                        {
                            "id": "1810821",
                            "name": "Fuzhou",
                            "countryid": "CN",
                            "listid": "ip-city-chart-1810821"
                        },
                        {
                            "id": "1799397",
                            "name": "Ningbo",
                            "countryid": "CN",
                            "listid": "ip-city-chart-1799397"
                        },
                        {
                            "id": "1808722",
                            "name": "Hefei",
                            "countryid": "CN",
                            "listid": "ip-city-chart-1808722"
                        },
                        {
                            "id": "1809461",
                            "name": "Guiyang",
                            "countryid": "CN",
                            "listid": "ip-city-chart-1809461"
                        },
                        {
                            "id": "1800163",
                            "name": "Nanchang",
                            "countryid": "CN",
                            "listid": "ip-city-chart-1800163"
                        },
                        {
                            "id": "1529102",
                            "name": "Ürümqi",
                            "countryid": "CN",
                            "listid": "ip-city-chart-1529102"
                        },
                        {
                            "id": "1790437",
                            "name": "Zhuhai",
                            "countryid": "CN",
                            "listid": "ip-city-chart-1790437"
                        },
                        {
                            "id": "1815456",
                            "name": "Changzhou",
                            "countryid": "CN",
                            "listid": "ip-city-chart-1815456"
                        },
                        {
                            "id": "1799869",
                            "name": "Nanning",
                            "countryid": "CN",
                            "listid": "ip-city-chart-1799869"
                        },
                        {
                            "id": "1809078",
                            "name": "Haikou",
                            "countryid": "CN",
                            "listid": "ip-city-chart-1809078"
                        },
                        {
                            "id": "1791388",
                            "name": "Wenzhou",
                            "countryid": "CN",
                            "listid": "ip-city-chart-1791388"
                        },
                        {
                            "id": "1793511",
                            "name": "Taiyuan",
                            "countryid": "CN",
                            "listid": "ip-city-chart-1793511"
                        },
                        {
                            "id": "1915223",
                            "name": "Zhongshan",
                            "countryid": "CN",
                            "listid": "ip-city-chart-1915223"
                        },
                        {
                            "id": "1917790",
                            "name": "Dadonghai",
                            "countryid": "CN",
                            "listid": "ip-city-chart-1917790"
                        },
                        {
                            "id": "1804430",
                            "name": "Lanzhou",
                            "countryid": "CN",
                            "listid": "ip-city-chart-1804430"
                        },
                        {
                            "id": "1809498",
                            "name": "Guilin",
                            "countryid": "CN",
                            "listid": "ip-city-chart-1809498"
                        },
                        {
                            "id": "2036892",
                            "name": "Hohhot",
                            "countryid": "CN",
                            "listid": "ip-city-chart-2036892"
                        },
                        {
                            "id": "1806299",
                            "name": "Jiangmen",
                            "countryid": "CN",
                            "listid": "ip-city-chart-1806299"
                        },
                        {
                            "id": "1797417",
                            "name": "Wuxi",
                            "countryid": "CN",
                            "listid": "ip-city-chart-1797417"
                        },
                        {
                            "id": "1793724",
                            "name": "Tai’an",
                            "countryid": "CN",
                            "listid": "ip-city-chart-1793724"
                        }
                    ],
                    "genres": []
                },
                {
                    "id": "CO",
                    "listid": "ip-country-chart-CO",
                    "momentum_listid": "risers-country-chart-CO",
                    "name": "Colombia",
                    "cities": [
                        {
                            "id": "3688689",
                            "name": "Bogotá",
                            "countryid": "CO",
                            "listid": "ip-city-chart-3688689"
                        },
                        {
                            "id": "3674962",
                            "name": "Medellín",
                            "countryid": "CO",
                            "listid": "ip-city-chart-3674962"
                        },
                        {
                            "id": "3687925",
                            "name": "Cali",
                            "countryid": "CO",
                            "listid": "ip-city-chart-3687925"
                        },
                        {
                            "id": "3689147",
                            "name": "Barranquilla",
                            "countryid": "CO",
                            "listid": "ip-city-chart-3689147"
                        },
                        {
                            "id": "3687238",
                            "name": "Cartagena",
                            "countryid": "CO",
                            "listid": "ip-city-chart-3687238"
                        },
                        {
                            "id": "3672486",
                            "name": "Pereira",
                            "countryid": "CO",
                            "listid": "ip-city-chart-3672486"
                        },
                        {
                            "id": "3688465",
                            "name": "Bucaramanga",
                            "countryid": "CO",
                            "listid": "ip-city-chart-3688465"
                        },
                        {
                            "id": "3675443",
                            "name": "Manizales",
                            "countryid": "CO",
                            "listid": "ip-city-chart-3675443"
                        },
                        {
                            "id": "3680656",
                            "name": "Ibagué",
                            "countryid": "CO",
                            "listid": "ip-city-chart-3680656"
                        },
                        {
                            "id": "3672778",
                            "name": "Pasto",
                            "countryid": "CO",
                            "listid": "ip-city-chart-3672778"
                        },
                        {
                            "id": "3685533",
                            "name": "Cúcuta",
                            "countryid": "CO",
                            "listid": "ip-city-chart-3685533"
                        },
                        {
                            "id": "3668605",
                            "name": "Santa Marta",
                            "countryid": "CO",
                            "listid": "ip-city-chart-3668605"
                        },
                        {
                            "id": "3666304",
                            "name": "Valledupar",
                            "countryid": "CO",
                            "listid": "ip-city-chart-3666304"
                        },
                        {
                            "id": "3670218",
                            "name": "San Andrés",
                            "countryid": "CO",
                            "listid": "ip-city-chart-3670218"
                        },
                        {
                            "id": "3828545",
                            "name": "San José del Guaviare",
                            "countryid": "CO",
                            "listid": "ip-city-chart-3828545"
                        },
                        {
                            "id": "3676623",
                            "name": "Leticia",
                            "countryid": "CO",
                            "listid": "ip-city-chart-3676623"
                        },
                        {
                            "id": "3671519",
                            "name": "Puerto Carreño",
                            "countryid": "CO",
                            "listid": "ip-city-chart-3671519"
                        }
                    ],
                    "genres": []
                },
                {
                    "id": "KZ",
                    "listid": "ip-country-chart-KZ",
                    "momentum_listid": "risers-country-chart-KZ",
                    "name": "Kazakhstan",
                    "cities": [
                        {
                            "id": "1526384",
                            "name": "Almaty",
                            "countryid": "KZ",
                            "listid": "ip-city-chart-1526384"
                        },
                        {
                            "id": "1526273",
                            "name": "Nur-Sultan",
                            "countryid": "KZ",
                            "listid": "ip-city-chart-1526273"
                        },
                        {
                            "id": "1518980",
                            "name": "Shymkent",
                            "countryid": "KZ",
                            "listid": "ip-city-chart-1518980"
                        },
                        {
                            "id": "1516905",
                            "name": "Taraz",
                            "countryid": "KZ",
                            "listid": "ip-city-chart-1516905"
                        },
                        {
                            "id": "1519928",
                            "name": "Kostanay",
                            "countryid": "KZ",
                            "listid": "ip-city-chart-1519928"
                        },
                        {
                            "id": "609655",
                            "name": "Karagandy",
                            "countryid": "KZ",
                            "listid": "ip-city-chart-609655"
                        },
                        {
                            "id": "610611",
                            "name": "Aqtöbe",
                            "countryid": "KZ",
                            "listid": "ip-city-chart-610611"
                        },
                        {
                            "id": "1520240",
                            "name": "Pavlodar",
                            "countryid": "KZ",
                            "listid": "ip-city-chart-1520240"
                        },
                        {
                            "id": "610529",
                            "name": "Atyrau",
                            "countryid": "KZ",
                            "listid": "ip-city-chart-610529"
                        },
                        {
                            "id": "1519422",
                            "name": "Semey",
                            "countryid": "KZ",
                            "listid": "ip-city-chart-1519422"
                        },
                        {
                            "id": "610612",
                            "name": "Aktau",
                            "countryid": "KZ",
                            "listid": "ip-city-chart-610612"
                        },
                        {
                            "id": "1519922",
                            "name": "Kyzylorda",
                            "countryid": "KZ",
                            "listid": "ip-city-chart-1519922"
                        },
                        {
                            "id": "1520316",
                            "name": "Ust-Kamenogorsk",
                            "countryid": "KZ",
                            "listid": "ip-city-chart-1520316"
                        },
                        {
                            "id": "608668",
                            "name": "Oral",
                            "countryid": "KZ",
                            "listid": "ip-city-chart-608668"
                        },
                        {
                            "id": "1520172",
                            "name": "Petropavl",
                            "countryid": "KZ",
                            "listid": "ip-city-chart-1520172"
                        },
                        {
                            "id": "1516589",
                            "name": "Zhezqazghan",
                            "countryid": "KZ",
                            "listid": "ip-city-chart-1516589"
                        },
                        {
                            "id": "1525798",
                            "name": "Balqash",
                            "countryid": "KZ",
                            "listid": "ip-city-chart-1525798"
                        },
                        {
                            "id": "1521370",
                            "name": "Ridder",
                            "countryid": "KZ",
                            "listid": "ip-city-chart-1521370"
                        },
                        {
                            "id": "1519691",
                            "name": "Sarkand",
                            "countryid": "KZ",
                            "listid": "ip-city-chart-1519691"
                        },
                        {
                            "id": "1521368",
                            "name": "Baikonur",
                            "countryid": "KZ",
                            "listid": "ip-city-chart-1521368"
                        },
                        {
                            "id": "1516601",
                            "name": "Dzhetygara",
                            "countryid": "KZ",
                            "listid": "ip-city-chart-1516601"
                        },
                        {
                            "id": "610298",
                            "name": "Beyneu",
                            "countryid": "KZ",
                            "listid": "ip-city-chart-610298"
                        },
                        {
                            "id": "1526193",
                            "name": "Arkalyk",
                            "countryid": "KZ",
                            "listid": "ip-city-chart-1526193"
                        },
                        {
                            "id": "1517060",
                            "name": "Zaysan",
                            "countryid": "KZ",
                            "listid": "ip-city-chart-1517060"
                        },
                        {
                            "id": "1525988",
                            "name": "Ayagoz",
                            "countryid": "KZ",
                            "listid": "ip-city-chart-1525988"
                        }
                    ],
                    "genres": []
                },
                {
                    "id": "CR",
                    "listid": "ip-country-chart-CR",
                    "name": "Costa Rica",
                    "cities": [
                        {
                            "id": "3621849",
                            "name": "San Francisco",
                            "countryid": "CR",
                            "listid": "ip-city-chart-3621849"
                        },
                        {
                            "id": "3623076",
                            "name": "Liberia",
                            "countryid": "CR",
                            "listid": "ip-city-chart-3623076"
                        },
                        {
                            "id": "3621841",
                            "name": "San José",
                            "countryid": "CR",
                            "listid": "ip-city-chart-3621841"
                        }
                    ],
                    "genres": []
                },
                {
                    "id": "TH",
                    "listid": "ip-country-chart-TH",
                    "name": "Thailand",
                    "cities": [
                        {
                            "id": "1609350",
                            "name": "Bangkok",
                            "countryid": "TH",
                            "listid": "ip-city-chart-1609350"
                        },
                        {
                            "id": "1153671",
                            "name": "Chiang Mai",
                            "countryid": "TH",
                            "listid": "ip-city-chart-1153671"
                        },
                        {
                            "id": "1609776",
                            "name": "Khon Kaen",
                            "countryid": "TH",
                            "listid": "ip-city-chart-1609776"
                        },
                        {
                            "id": "1150515",
                            "name": "Surat Thani",
                            "countryid": "TH",
                            "listid": "ip-city-chart-1150515"
                        },
                        {
                            "id": "1610780",
                            "name": "Hat Yai",
                            "countryid": "TH",
                            "listid": "ip-city-chart-1610780"
                        },
                        {
                            "id": "1607708",
                            "name": "Phitsanulok",
                            "countryid": "TH",
                            "listid": "ip-city-chart-1607708"
                        },
                        {
                            "id": "1605239",
                            "name": "Udon Thani",
                            "countryid": "TH",
                            "listid": "ip-city-chart-1605239"
                        },
                        {
                            "id": "1605245",
                            "name": "Ubon Ratchathani",
                            "countryid": "TH",
                            "listid": "ip-city-chart-1605245"
                        },
                        {
                            "id": "1153557",
                            "name": "Chumphon",
                            "countryid": "TH",
                            "listid": "ip-city-chart-1153557"
                        },
                        {
                            "id": "1610469",
                            "name": "Kalasin",
                            "countryid": "TH",
                            "listid": "ip-city-chart-1610469"
                        },
                        {
                            "id": "1153090",
                            "name": "Kamphaeng Phet",
                            "countryid": "TH",
                            "listid": "ip-city-chart-1153090"
                        },
                        {
                            "id": "1607737",
                            "name": "Phetchabun",
                            "countryid": "TH",
                            "listid": "ip-city-chart-1607737"
                        },
                        {
                            "id": "1606790",
                            "name": "Sakon Nakhon",
                            "countryid": "TH",
                            "listid": "ip-city-chart-1606790"
                        }
                    ],
                    "genres": []
                },
                {
                    "id": "PE",
                    "listid": "ip-country-chart-PE",
                    "name": "Peru",
                    "cities": [
                        {
                            "id": "3936456",
                            "name": "Lima",
                            "countryid": "PE",
                            "listid": "ip-city-chart-3936456"
                        },
                        {
                            "id": "3947322",
                            "name": "Arequipa",
                            "countryid": "PE",
                            "listid": "ip-city-chart-3947322"
                        },
                        {
                            "id": "3691175",
                            "name": "Trujillo",
                            "countryid": "PE",
                            "listid": "ip-city-chart-3691175"
                        },
                        {
                            "id": "3928128",
                            "name": "Tacna",
                            "countryid": "PE",
                            "listid": "ip-city-chart-3928128"
                        },
                        {
                            "id": "3941584",
                            "name": "Cusco",
                            "countryid": "PE",
                            "listid": "ip-city-chart-3941584"
                        },
                        {
                            "id": "3698350",
                            "name": "Chiclayo",
                            "countryid": "PE",
                            "listid": "ip-city-chart-3698350"
                        },
                        {
                            "id": "3693528",
                            "name": "Piura",
                            "countryid": "PE",
                            "listid": "ip-city-chart-3693528"
                        },
                        {
                            "id": "3938527",
                            "name": "Ica",
                            "countryid": "PE",
                            "listid": "ip-city-chart-3938527"
                        },
                        {
                            "id": "3693345",
                            "name": "Pucallpa",
                            "countryid": "PE",
                            "listid": "ip-city-chart-3693345"
                        },
                        {
                            "id": "3696183",
                            "name": "Iquitos",
                            "countryid": "PE",
                            "listid": "ip-city-chart-3696183"
                        },
                        {
                            "id": "3694564",
                            "name": "Moyobamba",
                            "countryid": "PE",
                            "listid": "ip-city-chart-3694564"
                        },
                        {
                            "id": "3927942",
                            "name": "Tambopata",
                            "countryid": "PE",
                            "listid": "ip-city-chart-3927942"
                        }
                    ],
                    "genres": []
                },
                {
                    "id": "CZ",
                    "listid": "ip-country-chart-CZ",
                    "name": "Czechia",
                    "cities": [
                        {
                            "id": "3067696",
                            "name": "Prague",
                            "countryid": "CZ",
                            "listid": "ip-city-chart-3067696"
                        },
                        {
                            "id": "3078610",
                            "name": "Brno",
                            "countryid": "CZ",
                            "listid": "ip-city-chart-3078610"
                        },
                        {
                            "id": "3068799",
                            "name": "Ostrava",
                            "countryid": "CZ",
                            "listid": "ip-city-chart-3068799"
                        },
                        {
                            "id": "3074967",
                            "name": "Hradec Králové",
                            "countryid": "CZ",
                            "listid": "ip-city-chart-3074967"
                        },
                        {
                            "id": "3063548",
                            "name": "Ústí nad Labem",
                            "countryid": "CZ",
                            "listid": "ip-city-chart-3063548"
                        },
                        {
                            "id": "3068160",
                            "name": "Pilsen",
                            "countryid": "CZ",
                            "listid": "ip-city-chart-3068160"
                        },
                        {
                            "id": "3069011",
                            "name": "Olomouc",
                            "countryid": "CZ",
                            "listid": "ip-city-chart-3069011"
                        },
                        {
                            "id": "3070291",
                            "name": "Most",
                            "countryid": "CZ",
                            "listid": "ip-city-chart-3070291"
                        },
                        {
                            "id": "3071961",
                            "name": "Liberec",
                            "countryid": "CZ",
                            "listid": "ip-city-chart-3071961"
                        },
                        {
                            "id": "3062339",
                            "name": "Vsetín",
                            "countryid": "CZ",
                            "listid": "ip-city-chart-3062339"
                        },
                        {
                            "id": "3077916",
                            "name": "České Budějovice",
                            "countryid": "CZ",
                            "listid": "ip-city-chart-3077916"
                        },
                        {
                            "id": "3073803",
                            "name": "Karlovy Vary",
                            "countryid": "CZ",
                            "listid": "ip-city-chart-3073803"
                        },
                        {
                            "id": "3067580",
                            "name": "Přerov",
                            "countryid": "CZ",
                            "listid": "ip-city-chart-3067580"
                        },
                        {
                            "id": "3064673",
                            "name": "Šumperk",
                            "countryid": "CZ",
                            "listid": "ip-city-chart-3064673"
                        },
                        {
                            "id": "3074199",
                            "name": "Jihlava",
                            "countryid": "CZ",
                            "listid": "ip-city-chart-3074199"
                        }
                    ],
                    "genres": []
                },
                {
                    "id": "PL",
                    "listid": "ip-country-chart-PL",
                    "momentum_listid": "risers-country-chart-PL",
                    "name": "Poland",
                    "cities": [
                        {
                            "id": "756135",
                            "name": "Warsaw",
                            "countryid": "PL",
                            "listid": "ip-city-chart-756135"
                        },
                        {
                            "id": "3096472",
                            "name": "Katowice",
                            "countryid": "PL",
                            "listid": "ip-city-chart-3096472"
                        },
                        {
                            "id": "3094802",
                            "name": "Kraków",
                            "countryid": "PL",
                            "listid": "ip-city-chart-3094802"
                        },
                        {
                            "id": "3099434",
                            "name": "Gdańsk",
                            "countryid": "PL",
                            "listid": "ip-city-chart-3099434"
                        },
                        {
                            "id": "3088171",
                            "name": "Poznań",
                            "countryid": "PL",
                            "listid": "ip-city-chart-3088171"
                        },
                        {
                            "id": "3081368",
                            "name": "Wrocław",
                            "countryid": "PL",
                            "listid": "ip-city-chart-3081368"
                        },
                        {
                            "id": "3093133",
                            "name": "Łódź",
                            "countryid": "PL",
                            "listid": "ip-city-chart-3093133"
                        },
                        {
                            "id": "3083829",
                            "name": "Szczecin",
                            "countryid": "PL",
                            "listid": "ip-city-chart-3083829"
                        },
                        {
                            "id": "776069",
                            "name": "Białystok",
                            "countryid": "PL",
                            "listid": "ip-city-chart-776069"
                        },
                        {
                            "id": "3102014",
                            "name": "Bydgoszcz",
                            "countryid": "PL",
                            "listid": "ip-city-chart-3102014"
                        },
                        {
                            "id": "765876",
                            "name": "Lublin",
                            "countryid": "PL",
                            "listid": "ip-city-chart-765876"
                        },
                        {
                            "id": "3103402",
                            "name": "Bielsko-Biala",
                            "countryid": "PL",
                            "listid": "ip-city-chart-3103402"
                        },
                        {
                            "id": "3099230",
                            "name": "Gliwice",
                            "countryid": "PL",
                            "listid": "ip-city-chart-3099230"
                        },
                        {
                            "id": "759734",
                            "name": "Rzeszów",
                            "countryid": "PL",
                            "listid": "ip-city-chart-759734"
                        },
                        {
                            "id": "769250",
                            "name": "Kielce",
                            "countryid": "PL",
                            "listid": "ip-city-chart-769250"
                        },
                        {
                            "id": "3090048",
                            "name": "Opole",
                            "countryid": "PL",
                            "listid": "ip-city-chart-3090048"
                        },
                        {
                            "id": "3080165",
                            "name": "Zielona Góra",
                            "countryid": "PL",
                            "listid": "ip-city-chart-3080165"
                        },
                        {
                            "id": "763166",
                            "name": "Olsztyn",
                            "countryid": "PL",
                            "listid": "ip-city-chart-763166"
                        },
                        {
                            "id": "757026",
                            "name": "Tarnów",
                            "countryid": "PL",
                            "listid": "ip-city-chart-757026"
                        },
                        {
                            "id": "3096880",
                            "name": "Kalisz",
                            "countryid": "PL",
                            "listid": "ip-city-chart-3096880"
                        },
                        {
                            "id": "3093692",
                            "name": "Legnica",
                            "countryid": "PL",
                            "listid": "ip-city-chart-3093692"
                        },
                        {
                            "id": "3082707",
                            "name": "Wałbrzych",
                            "countryid": "PL",
                            "listid": "ip-city-chart-3082707"
                        },
                        {
                            "id": "3097257",
                            "name": "Jelenia Góra",
                            "countryid": "PL",
                            "listid": "ip-city-chart-3097257"
                        },
                        {
                            "id": "3081741",
                            "name": "Włocławek",
                            "countryid": "PL",
                            "listid": "ip-city-chart-3081741"
                        },
                        {
                            "id": "3080644",
                            "name": "Żary",
                            "countryid": "PL",
                            "listid": "ip-city-chart-3080644"
                        },
                        {
                            "id": "3088825",
                            "name": "Płock",
                            "countryid": "PL",
                            "listid": "ip-city-chart-3088825"
                        },
                        {
                            "id": "3096372",
                            "name": "Kędzierzyn-Koźle",
                            "countryid": "PL",
                            "listid": "ip-city-chart-3096372"
                        },
                        {
                            "id": "3095049",
                            "name": "Koszalin",
                            "countryid": "PL",
                            "listid": "ip-city-chart-3095049"
                        },
                        {
                            "id": "774558",
                            "name": "Chełm",
                            "countryid": "PL",
                            "listid": "ip-city-chart-774558"
                        },
                        {
                            "id": "3090452",
                            "name": "Nowy Tomyśl",
                            "countryid": "PL",
                            "listid": "ip-city-chart-3090452"
                        },
                        {
                            "id": "758445",
                            "name": "Stalowa Wola",
                            "countryid": "PL",
                            "listid": "ip-city-chart-758445"
                        },
                        {
                            "id": "3096003",
                            "name": "Kluczbork",
                            "countryid": "PL",
                            "listid": "ip-city-chart-3096003"
                        },
                        {
                            "id": "766027",
                            "name": "Łomża",
                            "countryid": "PL",
                            "listid": "ip-city-chart-766027"
                        },
                        {
                            "id": "3101672",
                            "name": "Chojnice",
                            "countryid": "PL",
                            "listid": "ip-city-chart-3101672"
                        },
                        {
                            "id": "759412",
                            "name": "Siedlce",
                            "countryid": "PL",
                            "listid": "ip-city-chart-759412"
                        },
                        {
                            "id": "774747",
                            "name": "Busko-Zdrój",
                            "countryid": "PL",
                            "listid": "ip-city-chart-774747"
                        },
                        {
                            "id": "3092906",
                            "name": "Lubliniec",
                            "countryid": "PL",
                            "listid": "ip-city-chart-3092906"
                        },
                        {
                            "id": "763111",
                            "name": "Opoczno",
                            "countryid": "PL",
                            "listid": "ip-city-chart-763111"
                        },
                        {
                            "id": "3080102",
                            "name": "Złocieniec",
                            "countryid": "PL",
                            "listid": "ip-city-chart-3080102"
                        },
                        {
                            "id": "772621",
                            "name": "Ełk",
                            "countryid": "PL",
                            "listid": "ip-city-chart-772621"
                        },
                        {
                            "id": "3082197",
                            "name": "Wieluń",
                            "countryid": "PL",
                            "listid": "ip-city-chart-3082197"
                        },
                        {
                            "id": "3097902",
                            "name": "Iława",
                            "countryid": "PL",
                            "listid": "ip-city-chart-3097902"
                        },
                        {
                            "id": "3089779",
                            "name": "Ostróda",
                            "countryid": "PL",
                            "listid": "ip-city-chart-3089779"
                        },
                        {
                            "id": "3095797",
                            "name": "Koło",
                            "countryid": "PL",
                            "listid": "ip-city-chart-3095797"
                        },
                        {
                            "id": "3088065",
                            "name": "Prudnik",
                            "countryid": "PL",
                            "listid": "ip-city-chart-3088065"
                        },
                        {
                            "id": "764634",
                            "name": "Mława",
                            "countryid": "PL",
                            "listid": "ip-city-chart-764634"
                        },
                        {
                            "id": "3091141",
                            "name": "Namysłów",
                            "countryid": "PL",
                            "listid": "ip-city-chart-3091141"
                        },
                        {
                            "id": "3081699",
                            "name": "Włoszczowa",
                            "countryid": "PL",
                            "listid": "ip-city-chart-3081699"
                        },
                        {
                            "id": "3081300",
                            "name": "Wschowa",
                            "countryid": "PL",
                            "listid": "ip-city-chart-3081300"
                        },
                        {
                            "id": "3082704",
                            "name": "Wałcz",
                            "countryid": "PL",
                            "listid": "ip-city-chart-3082704"
                        }
                    ],
                    "genres": []
                },
                {
                    "id": "TR",
                    "listid": "ip-country-chart-TR",
                    "momentum_listid": "risers-country-chart-TR",
                    "name": "Turkey",
                    "cities": [
                        {
                            "id": "745044",
                            "name": "Istanbul",
                            "countryid": "TR",
                            "listid": "ip-city-chart-745044"
                        },
                        {
                            "id": "323786",
                            "name": "Ankara",
                            "countryid": "TR",
                            "listid": "ip-city-chart-323786"
                        },
                        {
                            "id": "750269",
                            "name": "Bursa",
                            "countryid": "TR",
                            "listid": "ip-city-chart-750269"
                        },
                        {
                            "id": "311046",
                            "name": "İzmir",
                            "countryid": "TR",
                            "listid": "ip-city-chart-311046"
                        },
                        {
                            "id": "323777",
                            "name": "Antalya",
                            "countryid": "TR",
                            "listid": "ip-city-chart-323777"
                        },
                        {
                            "id": "325363",
                            "name": "Adana",
                            "countryid": "TR",
                            "listid": "ip-city-chart-325363"
                        },
                        {
                            "id": "315202",
                            "name": "Eskişehir",
                            "countryid": "TR",
                            "listid": "ip-city-chart-315202"
                        },
                        {
                            "id": "314830",
                            "name": "Gaziantep",
                            "countryid": "TR",
                            "listid": "ip-city-chart-314830"
                        },
                        {
                            "id": "304531",
                            "name": "Mersin",
                            "countryid": "TR",
                            "listid": "ip-city-chart-304531"
                        },
                        {
                            "id": "317109",
                            "name": "Denizli",
                            "countryid": "TR",
                            "listid": "ip-city-chart-317109"
                        },
                        {
                            "id": "306571",
                            "name": "Konya",
                            "countryid": "TR",
                            "listid": "ip-city-chart-306571"
                        },
                        {
                            "id": "325303",
                            "name": "Afyonkarahisar",
                            "countryid": "TR",
                            "listid": "ip-city-chart-325303"
                        },
                        {
                            "id": "745028",
                            "name": "İzmit",
                            "countryid": "TR",
                            "listid": "ip-city-chart-745028"
                        },
                        {
                            "id": "325303",
                            "name": "Afyonkarahisar",
                            "countryid": "TR",
                            "listid": "ip-city-chart-325303"
                        },
                        {
                            "id": "752850",
                            "name": "Adapazarı",
                            "countryid": "TR",
                            "listid": "ip-city-chart-752850"
                        },
                        {
                            "id": "308464",
                            "name": "Kayseri",
                            "countryid": "TR",
                            "listid": "ip-city-chart-308464"
                        },
                        {
                            "id": "740264",
                            "name": "Samsun",
                            "countryid": "TR",
                            "listid": "ip-city-chart-740264"
                        },
                        {
                            "id": "322830",
                            "name": "Aydın",
                            "countryid": "TR",
                            "listid": "ip-city-chart-322830"
                        },
                        {
                            "id": "298333",
                            "name": "Şanlıurfa",
                            "countryid": "TR",
                            "listid": "ip-city-chart-298333"
                        },
                        {
                            "id": "303700",
                            "name": "Ödemiş",
                            "countryid": "TR",
                            "listid": "ip-city-chart-303700"
                        },
                        {
                            "id": "738927",
                            "name": "Tekirdağ",
                            "countryid": "TR",
                            "listid": "ip-city-chart-738927"
                        },
                        {
                            "id": "6354984",
                            "name": "Merter Keresteciler",
                            "countryid": "TR",
                            "listid": "ip-city-chart-6354984"
                        },
                        {
                            "id": "304922",
                            "name": "Malatya",
                            "countryid": "TR",
                            "listid": "ip-city-chart-304922"
                        },
                        {
                            "id": "300399",
                            "name": "Söke",
                            "countryid": "TR",
                            "listid": "ip-city-chart-300399"
                        },
                        {
                            "id": "314967",
                            "name": "Fethiye",
                            "countryid": "TR",
                            "listid": "ip-city-chart-314967"
                        },
                        {
                            "id": "315368",
                            "name": "Erzurum",
                            "countryid": "TR",
                            "listid": "ip-city-chart-315368"
                        },
                        {
                            "id": "298117",
                            "name": "Van",
                            "countryid": "TR",
                            "listid": "ip-city-chart-298117"
                        },
                        {
                            "id": "738648",
                            "name": "Trabzon",
                            "countryid": "TR",
                            "listid": "ip-city-chart-738648"
                        },
                        {
                            "id": "741100",
                            "name": "Ordu",
                            "countryid": "TR",
                            "listid": "ip-city-chart-741100"
                        },
                        {
                            "id": "309647",
                            "name": "Ağrı",
                            "countryid": "TR",
                            "listid": "ip-city-chart-309647"
                        },
                        {
                            "id": "300822",
                            "name": "Siirt",
                            "countryid": "TR",
                            "listid": "ip-city-chart-300822"
                        },
                        {
                            "id": "739600",
                            "name": "Sinop",
                            "countryid": "TR",
                            "listid": "ip-city-chart-739600"
                        }
                    ],
                    "genres": [
                        {
                            "id": "TR-1",
                            "countryid": "TR",
                            "listid": "genre-country-chart-TR-1",
                            "name": "Pop",
                            "urlPath": "pop",
                            "count": 100
                        },
                        {
                            "id": "TR-2",
                            "countryid": "TR",
                            "listid": "genre-country-chart-TR-2",
                            "name": "Hip-Hop/Rap",
                            "urlPath": "hip-hop-rap",
                            "count": 100
                        },
                        {
                            "id": "TR-3",
                            "countryid": "TR",
                            "listid": "genre-country-chart-TR-3",
                            "name": "Dance",
                            "urlPath": "dance",
                            "count": 100
                        }
                    ]
                }
            ],
            "global": {
                "genres": [
                    {
                        "id": "global-1",
                        "listid": "genre-global-chart-1",
                        "name": "Pop",
                        "urlPath": "pop",
                        "count": 200
                    },
                    {
                        "id": "global-2",
                        "listid": "genre-global-chart-2",
                        "name": "Hip-Hop/Rap",
                        "urlPath": "hip-hop-rap",
                        "count": 200
                    },
                    {
                        "id": "global-3",
                        "listid": "genre-global-chart-3",
                        "name": "Dance",
                        "urlPath": "dance",
                        "count": 200
                    },
                    {
                        "id": "global-4",
                        "listid": "genre-global-chart-4",
                        "name": "Electronic",
                        "urlPath": "electronic",
                        "count": 100
                    },
                    {
                        "id": "global-5",
                        "listid": "genre-global-chart-5",
                        "name": "R&B/Soul",
                        "urlPath": "randb-soul",
                        "count": 100
                    },
                    {
                        "id": "global-6",
                        "listid": "genre-global-chart-6",
                        "name": "Alternative",
                        "urlPath": "alternative",
                        "count": 100
                    },
                    {
                        "id": "global-7",
                        "listid": "genre-global-chart-7",
                        "name": "Rock",
                        "urlPath": "rock",
                        "count": 100
                    },
                    {
                        "id": "global-8",
                        "listid": "genre-global-chart-8",
                        "name": "Latin",
                        "urlPath": "latin",
                        "count": 100
                    },
                    {
                        "id": "global-9",
                        "listid": "genre-global-chart-9",
                        "name": "Film, TV & Stage",
                        "urlPath": "film-tv-and-stage",
                        "count": 100
                    },
                    {
                        "id": "global-10",
                        "listid": "genre-global-chart-10",
                        "name": "Country",
                        "urlPath": "country",
                        "count": 100
                    },
                    {
                        "id": "global-11",
                        "listid": "genre-global-chart-11",
                        "name": "AfroBeats",
                        "urlPath": "afrobeats",
                        "count": 50
                    },
                    {
                        "id": "global-12",
                        "listid": "genre-global-chart-12",
                        "name": "Worldwide",
                        "urlPath": "worldwide",
                        "count": 50
                    },
                    {
                        "id": "global-13",
                        "listid": "genre-global-chart-13",
                        "name": "Reggae/Dancehall",
                        "urlPath": "reggae-dancehall",
                        "count": 50
                    },
                    {
                        "id": "global-14",
                        "listid": "genre-global-chart-14",
                        "name": "House",
                        "urlPath": "house",
                        "count": 50
                    },
                    {
                        "id": "global-15",
                        "listid": "genre-global-chart-15",
                        "name": "K-Pop",
                        "urlPath": "k-pop",
                        "count": 50
                    },
                    {
                        "id": "global-16",
                        "listid": "genre-global-chart-16",
                        "name": "French Pop",
                        "urlPath": "french-pop",
                        "count": 50
                    },
                    {
                        "id": "global-17",
                        "listid": "genre-global-chart-17",
                        "name": "Singer/Songwriter",
                        "urlPath": "singer-songwriter",
                        "count": 50
                    },
                    {
                        "id": "global-18",
                        "listid": "genre-global-chart-18",
                        "name": "Regional Mexicano",
                        "urlPath": "regional-mexicano",
                        "count": 50
                    }
                ]
            }
        }
        const {global} = data
        const {genres} = global
        const genreData=genres.filter(genre=>genre.name===genre_key)
        console.log("CHART DATA",genreData)
        console.log(genreData[0].listid)
        //Fetch chart data relevant to obtained genre
        try{
            const options = {
                method: 'GET',
                url: 'https://shazam.p.rapidapi.com/charts/track',
                params: {
                    locale: 'en-US',
                    listId: genreData[0].listid,
                    pageSize: '20',
                    startFrom: '0'
                },
                headers: {
                    'X-RapidAPI-Key': process.env.RAPID_API_KEY,
                    'X-RapidAPI-Host': process.env.API_HOST
                }
            };
            
            const response = await axios(options)
            const genreListData=response.data
            // console.log("GENRE LIST DATA",genreListData)
            res.send(genreListData)
        }
        catch (error) {
            console.log(error)
            res.send(error)
        }
        
    }
    catch(err){
        console.log(err)
        res.send(err)
    }

})


module.exports = router