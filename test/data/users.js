function ObjectId(id) { return id }
function ISODate(date) { return new Date(date) }

module.exports = [{
    "_id" : ObjectId("5da4bfb20ce0c2421efbb403"),
    "role" : "DELIVERYMAN",
    "status" : "INACTIVE",
    "givenName" : "Antonio",
    "familyName" : "Carlos Rodrigues Dos Santos",
    "email" : "antoniocrodrigues38@gmail.com",
    "birthDate" : ISODate("1989-03-05T00:00:00.000Z"),
    "motofreteLicense" : "01038265",
    "motofreteExpiration" : ISODate("2020-06-22T00:00:00.000Z"),
    "condumotoLicense" : "02473950",
    "condumotoExpiration" : ISODate("2021-10-06T00:00:00.000Z"),
    "telephones" : [ 
        {
            "type" : "MOBILE",
            "country" : "55",
            "number" : "11977368604"
        }
    ],
    "rg" : {
        "number" : "28748058",
        "issuedBy" : "",
        "state" : "SP"
    },
    "cpf" : "18436759869",
    "cnh" : {
        "type" : "B",
        "number" : 1097429506,
        "expiresAt" : ISODate("2021-10-07T00:00:00.000Z")
    },
    "picture" : "",
    "crateSize" : "120",
    "addresses" : [ 
        {
            "type" : "home",
            "postalCode" : "05856150",
            "address" : "n/d",
            "number" : "44",
            "complement" : "",
            "state" : "SP",
            "city" : "São Paulo",
            "neighborhood" : ""
        }
    ],
    "motorcycle" : [ 
        {
            "active" : false,
            "brand" : "",
            "year" : "",
            "model" : "",
            "renavam" : null,
            "licenseDate" : null,
            "licensePlate" : "",
            "plateCity" : ""
        }
    ],
    "bankAccount" : {
        "type" : "Conta Corrente",
        "number" : 237,
        "name" : "Bradesco",
        "agency" : "0837",
        "agencyDigit" : "1",
        "account" : "0073249",
        "accountDigit" : "22",
        "accountCpf" : "18436759869",
        "accountName" : "Antonio Carlos Rodrigues Dos Santos"
    },
    "createdAt" : ISODate("2019-10-14T18:34:26.963Z"),
    "__v" : 0,
    "terms" : {
        "acceptedAt" : ISODate("2019-11-13T17:10:12.991Z")
    },
    "deletedAt" : ISODate("2019-12-13T15:13:47.241Z"),
    "cnpj" : "",
    "pictures" : {
        "profile" : "",
        "moto" : "",
        "cnh" : "",
        "condumoto" : "",
        "motofrete" : ""
    }
}, {
    "_id" : ObjectId("5da4bfb3127022766ba0d7bc"),
    "role" : "DELIVERYMAN",
    "status" : "ACTIVE",
    "givenName" : "Helio",
    "familyName" : "Aniceto Alves",
    "email" : "hbrtransporteswxpress@gmail.com",
    "birthDate" : ISODate("1989-03-05T00:00:00.000Z"),
    "motofreteLicense" : "",
    "motofreteExpiration" : null,
    "condumotoLicense" : "02540150",
    "condumotoExpiration" : ISODate("2017-11-27T00:00:00.000Z"),
    "telephones" : [ 
        {
            "type" : "MOBILE",
            "country" : "55",
            "number" : "11947869757"
        }
    ],
    "rg" : {
        "number" : "28050818",
        "issuedBy" : "",
        "state" : "SP"
    },
    "cpf" : "25464516859",
    "cnh" : {
        "type" : "A",
        "number" : 605420673,
        "expiresAt" : ISODate("2022-11-11T00:00:00.000Z")
    },
    "picture" : "",
    "crateSize" : "90",
    "addresses" : [ 
        {
            "type" : "home",
            "postalCode" : "04932160",
            "address" : "n/d",
            "number" : "8",
            "complement" : "CS 2",
            "state" : "SP",
            "city" : "São Paulo",
            "neighborhood" : ""
        }
    ],
    "motorcycle" : [ 
        {
            "active" : false,
            "brand" : "",
            "year" : "",
            "model" : "",
            "renavam" : null,
            "licenseDate" : null,
            "licensePlate" : "",
            "plateCity" : ""
        }
    ],
    "bankAccount" : {
        "type" : "Conta Corrente",
        "number" : 341,
        "name" : "Itaú",
        "agency" : "8205 / 500",
        "agencyDigit" : "",
        "account" : "04935-9",
        "accountDigit" : "",
        "accountCpf" : "25464516859",
        "accountName" : "Helio Aniceto Alves"
    },
    "createdAt" : ISODate("2019-10-14T18:34:27.270Z"),
    "__v" : 0,
    "terms" : {
        "acceptedAt" : ISODate("2019-10-30T13:49:38.194Z")
    },
    "deletedAt" : ISODate("2019-12-13T19:04:41.853Z"),
    "cnpj" : "",
    "pictures" : {
        "profile" : "",
        "moto" : "",
        "cnh" : "",
        "condumoto" : "",
        "motofrete" : ""
    }
}, {
    "_id" : ObjectId("5da4bfb3bf786d6437ec303f"),
    "role" : "DELIVERYMAN",
    "status" : "ACTIVE",
    "givenName" : "Felipe",
    "familyName" : "Salviano da Cruz",
    "email" : "davifelipecruz@gmail.com",
    "birthDate" : ISODate("1989-03-05T00:00:00.000Z"),
    "motofreteLicense" : "01131460",
    "motofreteExpiration" : ISODate("2020-03-07T00:00:00.000Z"),
    "condumotoLicense" : "02735954",
    "condumotoExpiration" : ISODate("2023-07-03T00:00:00.000Z"),
    "telephones" : [ 
        {
            "type" : "MOBILE",
            "country" : "55",
            "number" : "11944164791"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "11931457404"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "11969449670"
        }
    ],
    "rg" : {
        "number" : "49391721",
        "state" : "SP"
    },
    "cpf" : "42483734839",
    "cnh" : {
        "type" : "A",
        "number" : 5954702534.0,
        "expiresAt" : ISODate("2023-07-03T00:00:00.000Z")
    },
    "picture" : "",
    "crateSize" : "90",
    "addresses" : [ 
        {
            "type" : "home",
            "postalCode" : "04362060",
            "address" : "n/d",
            "number" : "450",
            "complement" : "",
            "state" : "SP",
            "city" : "São Paulo",
            "country" : "Brazil"
        }
    ],
    "motorcycle" : [ 
        {
            "active" : true,
            "licensePlate" : "FQT6995"
        }
    ],
    "bankAccount" : {
        "type" : "Conta Poupança",
        "number" : 104,
        "name" : "Caixa",
        "agency" : "4134 / 013",
        "account" : "00014335-0",
        "accountCpf" : "42483734839",
        "accountName" : "Felipe Salviano da Cruz"
    },
    "createdAt" : ISODate("2019-10-14T18:34:27.561Z"),
    "__v" : 0,
    "terms" : {
        "acceptedAt" : ISODate("2019-11-13T14:09:04.944Z")
    }
}, {
    "_id" : ObjectId("5da4bfb3bf786dd2abec3044"),
    "role" : "DELIVERYMAN",
    "status" : "ACTIVE",
    "givenName" : "Kleber",
    "familyName" : "Roberto Rodrigues",
    "email" : "nicollykaua2013@gmail.com",
    "birthDate" : ISODate("1989-03-05T00:00:00.000Z"),
    "motofreteLicense" : "00740268",
    "motofreteExpiration" : ISODate("2017-04-16T00:00:00.000Z"),
    "condumotoLicense" : "01651358",
    "condumotoExpiration" : ISODate("2018-10-09T00:00:00.000Z"),
    "telephones" : [ 
        {
            "type" : "MOBILE",
            "country" : "55",
            "number" : "11974102884"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "11998419605"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "11988926726"
        }
    ],
    "rg" : {
        "number" : "45244259",
        "state" : "SP"
    },
    "cpf" : "22804674886",
    "cnh" : {
        "type" : "A",
        "number" : 3350740605.0,
        "expiresAt" : ISODate("2024-03-19T00:00:00.000Z")
    },
    "picture" : "",
    "crateSize" : "90",
    "addresses" : [ 
        {
            "type" : "home",
            "postalCode" : "04433020",
            "address" : "n/d",
            "number" : "309",
            "complement" : "CS 8",
            "state" : "SP",
            "city" : "São Paulo",
            "country" : "Brazil"
        }
    ],
    "motorcycle" : [ 
        {
            "active" : true,
            "licensePlate" : "EEZ5749"
        }
    ],
    "bankAccount" : {
        "type" : "Conta Corrente",
        "number" : 341,
        "name" : "Itaú",
        "agency" : "7912",
        "account" : "05438-9",
        "accountCpf" : "22804674886",
        "accountName" : "kleber Roberto Rodrigues"
    },
    "createdAt" : ISODate("2019-10-14T18:34:27.965Z"),
    "__v" : 0,
    "terms" : {
        "acceptedAt" : ISODate("2019-10-29T19:39:16.737Z")
    }
}, {
    "_id" : ObjectId("5da4bfb40ce0c277f2fbb416"),
    "role" : "DELIVERYMAN",
    "status" : "ACTIVE",
    "givenName" : "Marcio",
    "familyName" : "de Almeida Santos",
    "email" : "marcioalmeida1605@gmail.com",
    "birthDate" : ISODate("1989-03-05T00:00:00.000Z"),
    "motofreteLicense" : "01163167",
    "motofreteExpiration" : ISODate("2019-05-29T00:00:00.000Z"),
    "condumotoLicense" : "02749157",
    "condumotoExpiration" : ISODate("2022-02-08T00:00:00.000Z"),
    "telephones" : [ 
        {
            "type" : "MOBILE",
            "country" : "55",
            "number" : "11941255553"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "11964443080"
        }
    ],
    "rg" : {
        "number" : "381925171",
        "state" : "SP"
    },
    "cpf" : "03210454400",
    "cnh" : {
        "type" : "A",
        "number" : 3773419136.0,
        "expiresAt" : ISODate("2022-02-08T00:00:00.000Z")
    },
    "picture" : "",
    "crateSize" : "150",
    "addresses" : [ 
        {
            "type" : "home",
            "postalCode" : "04868650",
            "address" : "n/d",
            "number" : "91",
            "complement" : "AP 33 A",
            "state" : "SP",
            "city" : "São Paulo",
            "country" : "Brazil"
        }
    ],
    "motorcycle" : [ 
        {
            "active" : true,
            "licensePlate" : "FQI1805"
        }
    ],
    "bankAccount" : {
        "type" : "Conta Corrente",
        "number" : 27,
        "name" : "Santander",
        "agency" : "4553",
        "account" : "01043418-2",
        "accountCpf" : "03210454400",
        "accountName" : "Marcio de Almeida Santos"
    },
    "createdAt" : ISODate("2019-10-14T18:34:28.561Z"),
    "__v" : 0
}, {
    "_id" : ObjectId("5da4bfb41270220c59a0d7c4"),
    "role" : "DELIVERYMAN",
    "status" : "ACTIVE",
    "givenName" : "Jarbas",
    "familyName" : "Gonçalves Dias",
    "email" : "diasjarbas12@gmail.com",
    "birthDate" : ISODate("1989-03-05T00:00:00.000Z"),
    "motofreteLicense" : "01002163",
    "motofreteExpiration" : ISODate("2020-02-17T00:00:00.000Z"),
    "condumotoLicense" : "02212455",
    "condumotoExpiration" : ISODate("2023-05-28T00:00:00.000Z"),
    "telephones" : [ 
        {
            "type" : "MOBILE",
            "country" : "55",
            "number" : "11981622369"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "1126911218"
        }
    ],
    "rg" : {
        "number" : "35907218",
        "state" : "SP"
    },
    "cpf" : "30387901841",
    "cnh" : {
        "type" : "A",
        "number" : 4553049870.0,
        "expiresAt" : ISODate("2023-05-28T00:00:00.000Z")
    },
    "picture" : "",
    "crateSize" : "150",
    "addresses" : [ 
        {
            "type" : "home",
            "postalCode" : "04330170",
            "address" : "n/d",
            "number" : "1",
            "complement" : "CASA 1",
            "state" : "SP",
            "city" : "São Paulo",
            "country" : "Brazil"
        }
    ],
    "motorcycle" : [ 
        {
            "active" : true,
            "licensePlate" : "EXB3841"
        }
    ],
    "bankAccount" : {
        "type" : "Conta Corrente",
        "number" : 27,
        "name" : "Santander",
        "agency" : "4649",
        "account" : "01040743-2",
        "accountCpf" : "30387901841",
        "accountName" : "Jarbas Gonçalves Dias"
    },
    "createdAt" : ISODate("2019-10-14T18:34:28.072Z"),
    "__v" : 0,
    "terms" : {
        "acceptedAt" : ISODate("2019-11-14T13:59:29.109Z")
    }
}, {
    "_id" : ObjectId("5da4bfb30ce0c2256afbb40d"),
    "role" : "DELIVERYMAN",
    "status" : "ACTIVE",
    "givenName" : "Eduardo",
    "familyName" : "Borges Alves",
    "email" : "motofrete.edu@gmail.com",
    "birthDate" : ISODate("1989-03-05T00:00:00.000Z"),
    "motofreteLicense" : "01085069",
    "motofreteExpiration" : ISODate("2019-10-05T00:00:00.000Z"),
    "condumotoLicense" : "02689758",
    "condumotoExpiration" : ISODate("2021-10-20T00:00:00.000Z"),
    "telephones" : [ 
        {
            "type" : "MOBILE",
            "country" : "55",
            "number" : "11981904619"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "1134819038"
        }
    ],
    "rg" : {
        "number" : "42235018",
        "state" : "SP"
    },
    "cpf" : "22463537850",
    "cnh" : {
        "type" : "A",
        "number" : 3536515302.0,
        "expiresAt" : ISODate("2021-10-20T00:00:00.000Z")
    },
    "picture" : "",
    "crateSize" : "150",
    "addresses" : [ 
        {
            "type" : "home",
            "postalCode" : "08225590",
            "address" : "n/d",
            "number" : "7",
            "complement" : "",
            "state" : "SP",
            "city" : "São Paulo",
            "country" : "Brazil"
        }
    ],
    "motorcycle" : [ 
        {
            "active" : true,
            "licensePlate" : "BAI9340"
        }
    ],
    "bankAccount" : {
        "type" : "Conta Poupança",
        "number" : 104,
        "name" : "Caixa",
        "agency" : "4150 / 013",
        "account" : "00035797-8",
        "accountCpf" : "22463537850",
        "accountName" : "Eduardo Borges Alves"
    },
    "createdAt" : ISODate("2019-10-14T18:34:27.665Z"),
    "__v" : 0,
    "terms" : {
        "acceptedAt" : ISODate("2019-11-12T15:49:49.618Z")
    }
}, {
    "_id" : ObjectId("5da4bfb30ce0c2e8d4fbb40b"),
    "role" : "DELIVERYMAN",
    "status" : "ACTIVE",
    "givenName" : "Cleiton",
    "familyName" : "Alexandre dos Santos",
    "email" : "cleitonalexandredossantos37@gmail.com",
    "birthDate" : ISODate("1989-03-05T00:00:00.000Z"),
    "motofreteLicense" : "00938165",
    "motofreteExpiration" : ISODate("2020-05-19T00:00:00.000Z"),
    "condumotoLicense" : "02596458",
    "condumotoExpiration" : ISODate("2020-06-16T00:00:00.000Z"),
    "telephones" : [ 
        {
            "type" : "MOBILE",
            "country" : "55",
            "number" : "11959036619"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "11932413925"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "1127728496"
        }
    ],
    "rg" : {
        "number" : "298891086",
        "state" : "SP"
    },
    "cpf" : "28422977842",
    "cnh" : {
        "type" : "A",
        "number" : 899046175,
        "expiresAt" : ISODate("2020-06-16T00:00:00.000Z")
    },
    "picture" : "",
    "crateSize" : "150",
    "addresses" : [ 
        {
            "type" : "home",
            "postalCode" : "03978540",
            "address" : "n/d",
            "number" : "651A",
            "complement" : "",
            "state" : "SP",
            "city" : "São Paulo",
            "country" : "Brazil"
        }
    ],
    "motorcycle" : [ 
        {
            "active" : true,
            "licensePlate" : "EXR0607"
        }
    ],
    "bankAccount" : {
        "type" : "Conta Corrente",
        "number" : 63,
        "name" : "Inter",
        "agency" : "0001",
        "account" : "31142397",
        "accountCpf" : "28422977842",
        "accountName" : "Cleiton Alexandre dos Santos"
    },
    "createdAt" : ISODate("2019-10-14T18:34:27.463Z"),
    "__v" : 0
}, {
    "_id" : ObjectId("5da4bfb30ce0c2f10ffbb409"),
    "role" : "DELIVERYMAN",
    "status" : "ACTIVE",
    "givenName" : "Dirceu",
    "familyName" : "Quirino dos Santos",
    "email" : "dirceu.quirino@bol.com.br",
    "birthDate" : ISODate("1989-03-05T00:00:00.000Z"),
    "motofreteLicense" : "00796263",
    "motofreteExpiration" : ISODate("2020-03-17T00:00:00.000Z"),
    "condumotoLicense" : "01309650",
    "condumotoExpiration" : ISODate("2020-09-08T00:00:00.000Z"),
    "telephones" : [ 
        {
            "type" : "MOBILE",
            "country" : "55",
            "number" : "11947419433"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "1135351758"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "11989820174"
        }
    ],
    "rg" : {
        "number" : "34846896",
        "state" : "SP"
    },
    "cpf" : "31086818857",
    "cnh" : {
        "type" : "A",
        "number" : 2305544361.0,
        "expiresAt" : ISODate("2020-09-08T00:00:00.000Z")
    },
    "picture" : "",
    "crateSize" : "90",
    "addresses" : [ 
        {
            "type" : "home",
            "postalCode" : "04829500",
            "address" : "n/d",
            "number" : "40",
            "complement" : "Casa 2",
            "state" : "SP",
            "city" : "São Paulo",
            "country" : "Brazil"
        }
    ],
    "motorcycle" : [ 
        {
            "active" : true,
            "licensePlate" : "FON7238"
        }
    ],
    "bankAccount" : {
        "type" : "Conta Corrente",
        "number" : 341,
        "name" : "Itaú",
        "agency" : "7486",
        "account" : "14626-4",
        "accountCpf" : "31086818857",
        "accountName" : "Dirceu Quirino dos Santos"
    },
    "createdAt" : ISODate("2019-10-14T18:34:27.361Z"),
    "__v" : 0
}, {
    "_id" : ObjectId("5da4bfb3127022b364a0d7c1"),
    "role" : "DELIVERYMAN",
    "status" : "ACTIVE",
    "givenName" : "Francisco",
    "familyName" : "Da Silva Leopoldino",
    "email" : "franciscoleopoldino@hotmail.com",
    "birthDate" : ISODate("1989-03-05T00:00:00.000Z"),
    "motofreteLicense" : "01182560",
    "motofreteExpiration" : ISODate("2020-07-27T00:00:00.000Z"),
    "condumotoLicense" : "00858056",
    "condumotoExpiration" : ISODate("2022-11-27T00:00:00.000Z"),
    "telephones" : [ 
        {
            "type" : "MOBILE",
            "country" : "55",
            "number" : "11948419944"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "1147878831"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "11994186168"
        }
    ],
    "rg" : {
        "number" : "259602875",
        "state" : "SP"
    },
    "cpf" : "16937501803",
    "cnh" : {
        "type" : "A",
        "number" : 1142178800,
        "expiresAt" : ISODate("2022-11-27T00:00:00.000Z")
    },
    "picture" : "",
    "crateSize" : "180",
    "addresses" : [ 
        {
            "type" : "home",
            "postalCode" : "08586010",
            "address" : "n/d",
            "number" : "340",
            "complement" : "",
            "state" : "SP",
            "city" : "São Paulo",
            "country" : "Brazil"
        }
    ],
    "motorcycle" : [ 
        {
            "active" : true,
            "licensePlate" : "GJU7159"
        }
    ],
    "bankAccount" : {
        "type" : "Conta Corrente",
        "number" : 341,
        "name" : "Itaú",
        "agency" : "0393",
        "account" : "14616-2",
        "accountCpf" : "16937501803",
        "accountName" : "Francisco Da Silva Leopoldino"
    },
    "createdAt" : ISODate("2019-10-14T18:34:27.677Z"),
    "__v" : 0
}, {
    "_id" : ObjectId("5da4bfb3bf786d6b81ec303a"),
    "role" : "DELIVERYMAN",
    "status" : "ACTIVE",
    "givenName" : "Claudio",
    "familyName" : "Batista de Jesus",
    "email" : "claudiobatista570@gmail.com",
    "birthDate" : ISODate("1989-03-05T00:00:00.000Z"),
    "motofreteLicense" : "00838268",
    "motofreteExpiration" : ISODate("2017-09-16T00:00:00.000Z"),
    "condumotoLicense" : "02485656",
    "condumotoExpiration" : ISODate("2018-05-02T00:00:00.000Z"),
    "telephones" : [ 
        {
            "type" : "MOBILE",
            "country" : "55",
            "number" : "11940319211"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "11940895470"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "1135915341"
        }
    ],
    "rg" : {
        "number" : "34364422",
        "state" : "SP"
    },
    "cpf" : "24071804890",
    "cnh" : {
        "type" : "A",
        "number" : 4432311618.0,
        "expiresAt" : ISODate("2023-04-19T00:00:00.000Z")
    },
    "picture" : "",
    "crateSize" : null,
    "addresses" : [ 
        {
            "type" : "home",
            "postalCode" : "06132080",
            "address" : "n/d",
            "number" : "151",
            "complement" : "CS 3",
            "state" : "SP",
            "city" : "São Paulo",
            "country" : "Brazil"
        }
    ],
    "motorcycle" : [ 
        {
            "active" : true,
            "licensePlate" : "FXP1130"
        }
    ],
    "bankAccount" : {
        "type" : "Conta Corrente",
        "number" : 104,
        "name" : "Caixa",
        "agency" : "2197 / 001",
        "account" : "00024427-5",
        "accountCpf" : "24071804890",
        "accountName" : "Claudio Batista de Jesus"
    },
    "createdAt" : ISODate("2019-10-14T18:34:27.168Z"),
    "__v" : 0,
    "terms" : {
        "acceptedAt" : ISODate("2019-11-13T16:37:59.917Z")
    }
}, {
    "_id" : ObjectId("5da4bfb40ce0c2479dfbb41a"),
    "role" : "DELIVERYMAN",
    "status" : "ACTIVE",
    "givenName" : "Ricardo",
    "familyName" : "Benigno Magalhães",
    "email" : "efataexpress2015@gmail.com",
    "birthDate" : ISODate("1989-03-05T00:00:00.000Z"),
    "motofreteLicense" : "00388165",
    "motofreteExpiration" : ISODate("2019-12-04T00:00:00.000Z"),
    "condumotoLicense" : "01705857",
    "condumotoExpiration" : ISODate("2022-03-07T00:00:00.000Z"),
    "telephones" : [ 
        {
            "type" : "MOBILE",
            "country" : "55",
            "number" : "11940828413"
        }
    ],
    "rg" : {
        "number" : "27810708",
        "state" : "SP"
    },
    "cpf" : "17708924863",
    "cnh" : {
        "type" : "A",
        "number" : 4219750302.0,
        "expiresAt" : ISODate("2022-03-07T00:00:00.000Z")
    },
    "picture" : "",
    "crateSize" : "180",
    "addresses" : [ 
        {
            "type" : "home",
            "postalCode" : "02874140",
            "address" : "n/d",
            "number" : "725",
            "complement" : "",
            "state" : "SP",
            "city" : "São Paulo",
            "country" : "Brazil"
        }
    ],
    "motorcycle" : [ 
        {
            "active" : true,
            "licensePlate" : "ESR4389"
        }
    ],
    "bankAccount" : {
        "type" : "Conta Corrente",
        "number" : 1,
        "name" : "Banco do Brasil",
        "agency" : "4298-6",
        "account" : "11467-7",
        "accountCpf" : "17708924863",
        "accountName" : "Ricardo Benigno Magalhães"
    },
    "createdAt" : ISODate("2019-10-14T18:34:28.762Z"),
    "__v" : 0,
    "terms" : {
        "acceptedAt" : ISODate("2019-11-25T20:51:19.878Z")
    }
}, {
    "_id" : ObjectId("5da4bfb21270225c34a0d7b7"),
    "role" : "DELIVERYMAN",
    "status" : "ACTIVE",
    "givenName" : "Cicero",
    "familyName" : "da Silva Santos",
    "email" : "cicerosilva264@gmail.com",
    "birthDate" : ISODate("1989-03-05T00:00:00.000Z"),
    "motofreteLicense" : "01045768",
    "motofreteExpiration" : ISODate("2019-07-19T00:00:00.000Z"),
    "condumotoLicense" : "01819259",
    "condumotoExpiration" : ISODate("2019-11-24T00:00:00.000Z"),
    "telephones" : [ 
        {
            "type" : "MOBILE",
            "country" : "55",
            "number" : "11987335111"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "11969474660"
        }
    ],
    "rg" : {
        "number" : "32634181",
        "state" : "SP"
    },
    "cpf" : "29314595854",
    "cnh" : {
        "type" : "A",
        "number" : 2492189884.0,
        "expiresAt" : ISODate("2019-11-24T00:00:00.000Z")
    },
    "picture" : "",
    "crateSize" : "120",
    "addresses" : [ 
        {
            "type" : "home",
            "postalCode" : "08373340",
            "address" : "n/d",
            "number" : "17",
            "complement" : "CASA 1",
            "state" : "SP",
            "city" : "São Paulo",
            "country" : "Brazil"
        }
    ],
    "motorcycle" : [ 
        {
            "active" : true,
            "licensePlate" : "GAX4080"
        }
    ],
    "bankAccount" : {
        "type" : "Conta Jurídica Corrente",
        "number" : 1,
        "name" : "Banco do Brasil",
        "agency" : "4299-4",
        "account" : "000000027728-2",
        "accountCpf" : "29314595854",
        "accountName" : "Cicero da Silva Santos"
    },
    "createdAt" : ISODate("2019-10-14T18:34:26.973Z"),
    "__v" : 0
}, {
    "_id" : ObjectId("5da4bfb31270223fd0a0d7be"),
    "role" : "DELIVERYMAN",
    "status" : "ACTIVE",
    "givenName" : "Eriton",
    "familyName" : "Santos Da Costa",
    "email" : "tomtom.ts65@gmail.com",
    "birthDate" : ISODate("1989-03-05T00:00:00.000Z"),
    "motofreteLicense" : "00876267",
    "motofreteExpiration" : ISODate("2019-12-21T00:00:00.000Z"),
    "condumotoLicense" : "02491753",
    "condumotoExpiration" : ISODate("2021-04-25T00:00:00.000Z"),
    "telephones" : [ 
        {
            "type" : "MOBILE",
            "country" : "55",
            "number" : "11947186752"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "11994176052"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "11947359505"
        }
    ],
    "rg" : {
        "number" : "43588313",
        "state" : "SP"
    },
    "cpf" : "33433568839",
    "cnh" : {
        "type" : "A",
        "number" : 3924255101.0,
        "expiresAt" : ISODate("2021-04-25T00:00:00.000Z")
    },
    "picture" : "",
    "crateSize" : "180",
    "addresses" : [ 
        {
            "type" : "home",
            "postalCode" : "03927370",
            "address" : "n/d",
            "number" : "36",
            "complement" : "CS 2 CJ PROMORAR SAPOPEMBA",
            "state" : "SP",
            "city" : "São Paulo",
            "country" : "Brazil"
        }
    ],
    "motorcycle" : [ 
        {
            "active" : true,
            "licensePlate" : "ENU9509"
        }
    ],
    "bankAccount" : {
        "type" : "Conta Corrente",
        "number" : 341,
        "name" : "Itaú",
        "agency" : "6503",
        "account" : "07065-5",
        "accountCpf" : "33433568839",
        "accountName" : "Eriton Santos Da Costa"
    },
    "createdAt" : ISODate("2019-10-14T18:34:27.468Z"),
    "__v" : 0,
    "terms" : {
        "acceptedAt" : ISODate("2019-10-29T18:35:29.517Z")
    }
}, {
    "_id" : ObjectId("5da4bfb3bf786d0cf9ec303e"),
    "role" : "DELIVERYMAN",
    "status" : "ACTIVE",
    "givenName" : "Dorival",
    "familyName" : "Genovez Santos",
    "email" : "santosdorival2507@gmail.com",
    "birthDate" : ISODate("1989-03-05T00:00:00.000Z"),
    "motofreteLicense" : "",
    "motofreteExpiration" : null,
    "condumotoLicense" : "02568250",
    "condumotoExpiration" : ISODate("2019-12-11T00:00:00.000Z"),
    "telephones" : [ 
        {
            "type" : "MOBILE",
            "country" : "55",
            "number" : "11962840854"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "11962063880"
        }
    ],
    "rg" : {
        "number" : "532084342",
        "state" : "SP"
    },
    "cpf" : "28180913813",
    "cnh" : {
        "type" : "A",
        "number" : 723773870,
        "expiresAt" : ISODate("2019-12-11T00:00:00.000Z")
    },
    "picture" : "",
    "crateSize" : "90",
    "addresses" : [ 
        {
            "type" : "home",
            "postalCode" : "05851290",
            "address" : "n/d",
            "number" : "28",
            "complement" : "",
            "state" : "SP",
            "city" : "São Paulo",
            "country" : "Brazil"
        }
    ],
    "motorcycle" : [ 
        {
            "active" : true,
            "licensePlate" : "DGY2034"
        }
    ],
    "bankAccount" : {
        "type" : "Conta Corrente",
        "number" : 341,
        "name" : "Itaú",
        "agency" : "1003",
        "account" : "68212-5",
        "accountCpf" : "28180913813",
        "accountName" : "Dorival Genovez Santos"
    },
    "createdAt" : ISODate("2019-10-14T18:34:27.368Z"),
    "__v" : 0,
    "terms" : {
        "acceptedAt" : ISODate("2019-11-14T16:10:12.529Z")
    }
}, {
    "_id" : ObjectId("5da4bfb40ce0c27efffbb413"),
    "role" : "DELIVERYMAN",
    "status" : "ACTIVE",
    "givenName" : "Ismar",
    "familyName" : "Atilio de Andrade",
    "email" : "ismar.andrade2013@gmail.com",
    "birthDate" : ISODate("1989-03-05T00:00:00.000Z"),
    "motofreteLicense" : "01175262",
    "motofreteExpiration" : ISODate("2019-07-18T00:00:00.000Z"),
    "condumotoLicense" : "02049155",
    "condumotoExpiration" : ISODate("2020-04-10T00:00:00.000Z"),
    "telephones" : [ 
        {
            "type" : "MOBILE",
            "country" : "55",
            "number" : "11989237026"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "1150216056"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "1156785621"
        }
    ],
    "rg" : {
        "number" : "30943107",
        "state" : "SP"
    },
    "cpf" : "28873560890",
    "cnh" : {
        "type" : "A",
        "number" : 2118814685,
        "expiresAt" : ISODate("2020-04-10T00:00:00.000Z")
    },
    "picture" : "",
    "crateSize" : "180",
    "addresses" : [ 
        {
            "type" : "home",
            "postalCode" : "04369050",
            "address" : "n/d",
            "number" : "164",
            "complement" : "",
            "state" : "SP",
            "city" : "São Paulo",
            "country" : "Brazil"
        }
    ],
    "motorcycle" : [ 
        {
            "active" : true,
            "licensePlate" : "EOC0769"
        }
    ],
    "bankAccount" : {
        "type" : "Conta Corrente",
        "number" : 341,
        "name" : "Itaú",
        "agency" : "0067",
        "account" : "40638-9",
        "accountCpf" : "28873560890",
        "accountName" : "Ismar Atilio de Andrade"
    },
    "createdAt" : ISODate("2019-10-14T18:34:28.065Z"),
    "__v" : 0,
    "terms" : {
        "acceptedAt" : ISODate("2019-11-18T14:05:49.525Z")
    }
}, {
    "_id" : ObjectId("5da4bfb4127022297ca0d7c9"),
    "role" : "DELIVERYMAN",
    "status" : "ACTIVE",
    "givenName" : "Max",
    "familyName" : "Marcelo Tavares",
    "email" : "maxxvares@gmail.com",
    "birthDate" : ISODate("1989-03-05T00:00:00.000Z"),
    "motofreteLicense" : "01010760",
    "motofreteExpiration" : ISODate("2020-04-03T00:00:00.000Z"),
    "condumotoLicense" : "02624559",
    "condumotoExpiration" : ISODate("2020-03-28T00:00:00.000Z"),
    "telephones" : [ 
        {
            "type" : "MOBILE",
            "country" : "55",
            "number" : "11947009206"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "1128520131"
        }
    ],
    "rg" : {
        "number" : "354136896",
        "state" : "SP"
    },
    "cpf" : "32873275855",
    "cnh" : {
        "type" : "A",
        "number" : 3572162828.0,
        "expiresAt" : ISODate("2020-10-16T00:00:00.000Z")
    },
    "picture" : "",
    "crateSize" : "120",
    "addresses" : [ 
        {
            "type" : "home",
            "postalCode" : "08420000",
            "address" : "n/d",
            "number" : "2415",
            "complement" : "R I  CS11",
            "state" : "SP",
            "city" : "São Paulo",
            "country" : "Brazil"
        }
    ],
    "motorcycle" : [ 
        {
            "active" : true,
            "licensePlate" : "GFS0159"
        }
    ],
    "bankAccount" : {
        "type" : "Conta Corrente",
        "number" : 1,
        "name" : "Banco do Brasil",
        "agency" : "2809-6",
        "account" : "31294-0",
        "accountCpf" : "32873275855",
        "accountName" : "Max Marcelo Tavares"
    },
    "createdAt" : ISODate("2019-10-14T18:34:28.373Z"),
    "__v" : 0
}, {
    "_id" : ObjectId("5da4bfb2bf786d3998ec3038"),
    "role" : "DELIVERYMAN",
    "status" : "ACTIVE",
    "givenName" : "Arquimedes",
    "familyName" : "dos Santos Flavio",
    "email" : "flavio1981sp@gmail.com",
    "birthDate" : ISODate("1989-03-05T00:00:00.000Z"),
    "motofreteLicense" : "01079468",
    "motofreteExpiration" : ISODate("2019-09-18T00:00:00.000Z"),
    "condumotoLicense" : "02258358",
    "condumotoExpiration" : ISODate("2023-01-10T00:00:00.000Z"),
    "telephones" : [ 
        {
            "type" : "MOBILE",
            "country" : "55",
            "number" : "11995709691"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "11963492795"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "1125326006"
        }
    ],
    "rg" : {
        "number" : "35034854",
        "state" : "SP"
    },
    "cpf" : "31589787846",
    "cnh" : {
        "type" : "A",
        "number" : 4344586325.0,
        "expiresAt" : ISODate("2023-01-10T00:00:00.000Z")
    },
    "picture" : "",
    "crateSize" : "90",
    "addresses" : [ 
        {
            "type" : "home",
            "postalCode" : "03821230",
            "address" : "n/d",
            "number" : "150",
            "complement" : "AP 14 B7",
            "state" : "SP",
            "city" : "São Paulo",
            "country" : "Brazil"
        }
    ],
    "motorcycle" : [ 
        {
            "active" : true,
            "licensePlate" : "FSF4006"
        }
    ],
    "bankAccount" : {
        "type" : "Conta Corrente",
        "number" : 237,
        "name" : "Bradesco",
        "agency" : "0500-2",
        "account" : "0079249-7",
        "accountCpf" : "31589787846",
        "accountName" : "Arquimedes dos Santos Flavio"
    },
    "createdAt" : ISODate("2019-10-14T18:34:26.868Z"),
    "__v" : 0,
    "terms" : {
        "acceptedAt" : ISODate("2019-10-15T17:40:54.044Z")
    }
}, {
    "_id" : ObjectId("5da4bfb2bf786d8f85ec3037"),
    "role" : "DELIVERYMAN",
    "status" : "ACTIVE",
    "givenName" : "Danilo",
    "familyName" : "Cesar Zenerato Cardoso",
    "email" : "danilozenerato@gmail.com",
    "birthDate" : ISODate("1989-03-05T00:00:00.000Z"),
    "motofreteLicense" : "01160460",
    "motofreteExpiration" : ISODate("2020-05-22T00:00:00.000Z"),
    "condumotoLicense" : "01826255",
    "condumotoExpiration" : ISODate("2023-05-03T00:00:00.000Z"),
    "telephones" : [ 
        {
            "type" : "MOBILE",
            "country" : "55",
            "number" : "11979584740"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "11996561731"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "1129537848"
        }
    ],
    "rg" : {
        "number" : "28803868",
        "state" : "SP"
    },
    "cpf" : "29779705848",
    "cnh" : {
        "type" : "A",
        "number" : 1857269746,
        "expiresAt" : ISODate("2023-05-03T00:00:00.000Z")
    },
    "picture" : "",
    "crateSize" : "150",
    "addresses" : [ 
        {
            "type" : "home",
            "postalCode" : "02378000",
            "address" : "n/d",
            "number" : "1927",
            "complement" : "",
            "state" : "SP",
            "city" : "São Paulo",
            "country" : "Brazil"
        }
    ],
    "motorcycle" : [ 
        {
            "active" : true,
            "licensePlate" : "FAP6840"
        }
    ],
    "bankAccount" : {
        "type" : "Conta Corrente",
        "number" : 341,
        "name" : "Itaú",
        "agency" : "1572",
        "account" : "13683-4",
        "accountCpf" : "29779705848",
        "accountName" : "Danilo Cesar Zenerato Cardoso"
    },
    "createdAt" : ISODate("2019-10-14T18:34:26.846Z"),
    "__v" : 0,
    "terms" : {
        "acceptedAt" : ISODate("2019-10-15T17:17:11.085Z")
    }
}, {
    "_id" : ObjectId("5da4bfb30ce0c2555ffbb411"),
    "role" : "DELIVERYMAN",
    "status" : "ACTIVE",
    "givenName" : "Hugo",
    "familyName" : "Roberto Melo Maia",
    "email" : "hugo.mmaia@hotmail.com",
    "birthDate" : ISODate("1989-03-05T00:00:00.000Z"),
    "motofreteLicense" : "00855464",
    "motofreteExpiration" : ISODate("2016-11-10T00:00:00.000Z"),
    "condumotoLicense" : "02503352",
    "condumotoExpiration" : ISODate("2016-07-28T00:00:00.000Z"),
    "telephones" : [ 
        {
            "type" : "MOBILE",
            "country" : "55",
            "number" : "11970569215"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "11961823849"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "11983218838"
        }
    ],
    "rg" : {
        "number" : "36630667",
        "state" : "SP"
    },
    "cpf" : "34461584801",
    "cnh" : {
        "type" : "A",
        "number" : 5461559190.0,
        "expiresAt" : ISODate("2021-07-01T00:00:00.000Z")
    },
    "picture" : "",
    "crateSize" : null,
    "addresses" : [ 
        {
            "type" : "home",
            "postalCode" : "05736090",
            "address" : "n/d",
            "number" : "215",
            "complement" : "",
            "state" : "SP",
            "city" : "São Paulo",
            "country" : "Brazil"
        }
    ],
    "motorcycle" : [ 
        {
            "active" : true,
            "licensePlate" : "GIV8030"
        }
    ],
    "bankAccount" : {
        "type" : "Conta Corrente",
        "number" : 237,
        "name" : "Bradesco",
        "agency" : "0421-9",
        "account" : "0098082-0",
        "accountCpf" : "34461584801",
        "accountName" : "Hugo Roberto Melo Maia"
    },
    "createdAt" : ISODate("2019-10-14T18:34:27.962Z"),
    "__v" : 0
}, {
    "_id" : ObjectId("5da4bfb31270221ff0a0d7b9"),
    "role" : "DELIVERYMAN",
    "status" : "ACTIVE",
    "givenName" : "Caio",
    "familyName" : "Carvalho De Souza",
    "email" : "caio29031995@gmail.com",
    "birthDate" : ISODate("1989-03-05T00:00:00.000Z"),
    "motofreteLicense" : "01041860",
    "motofreteExpiration" : ISODate("2020-06-23T00:00:00.000Z"),
    "condumotoLicense" : "02661454",
    "condumotoExpiration" : ISODate("2023-03-26T00:00:00.000Z"),
    "telephones" : [ 
        {
            "type" : "MOBILE",
            "country" : "55",
            "number" : "11947593430"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "11947593429"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "1146082590"
        }
    ],
    "rg" : {
        "number" : "454418553",
        "state" : "SP"
    },
    "cpf" : "44448301826",
    "cnh" : {
        "type" : "A",
        "number" : 6018420282.0,
        "expiresAt" : ISODate("2023-03-26T00:00:00.000Z")
    },
    "picture" : "",
    "crateSize" : "180",
    "addresses" : [ 
        {
            "type" : "home",
            "postalCode" : "05187360",
            "address" : "n/d",
            "number" : "125",
            "complement" : "CS 3",
            "state" : "SP",
            "city" : "São Paulo",
            "country" : "Brazil"
        }
    ],
    "motorcycle" : [ 
        {
            "active" : true,
            "licensePlate" : "FJC3753"
        }
    ],
    "bankAccount" : {
        "type" : "Conta Corrente",
        "number" : 27,
        "name" : "Santander",
        "agency" : "0259 / 01",
        "account" : "023043-9",
        "accountCpf" : "44448301826",
        "accountName" : "Caio Carvalho De Souza"
    },
    "createdAt" : ISODate("2019-10-14T18:34:27.076Z"),
    "__v" : 0
}, {
    "_id" : ObjectId("5da4bfb312702247dca0d7bd"),
    "role" : "DELIVERYMAN",
    "status" : "ACTIVE",
    "givenName" : "Felipe",
    "familyName" : "Valentim da França",
    "email" : "felipe_valentim1989@hotmail.com",
    "birthDate" : ISODate("1989-03-05T00:00:00.000Z"),
    "motofreteLicense" : "01190466",
    "motofreteExpiration" : ISODate("2020-08-20T00:00:00.000Z"),
    "condumotoLicense" : "02756854",
    "condumotoExpiration" : ISODate("2019-11-05T00:00:00.000Z"),
    "telephones" : [ 
        {
            "type" : "MOBILE",
            "country" : "55",
            "number" : "11974932316"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "1127378136"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "11947235423"
        }
    ],
    "rg" : {
        "number" : "444774610",
        "state" : "SP"
    },
    "cpf" : "38550436801",
    "cnh" : {
        "type" : "A",
        "number" : 4841389402.0,
        "expiresAt" : ISODate("2019-11-05T00:00:00.000Z")
    },
    "picture" : "",
    "crateSize" : "150",
    "addresses" : [ 
        {
            "type" : "home",
            "postalCode" : "03207000",
            "address" : "n/d",
            "number" : "498",
            "complement" : "",
            "state" : "SP",
            "city" : "São Paulo",
            "country" : "Brazil"
        }
    ],
    "motorcycle" : [ 
        {
            "active" : true,
            "licensePlate" : "DKK4465"
        }
    ],
    "bankAccount" : {
        "type" : "Conta Corrente",
        "number" : 341,
        "name" : "Itaú",
        "agency" : "0593",
        "account" : "04300-3",
        "accountCpf" : "38550436801",
        "accountName" : "Felipe Valentim da França"
    },
    "createdAt" : ISODate("2019-10-14T18:34:27.275Z"),
    "__v" : 0,
    "terms" : {
        "acceptedAt" : ISODate("2019-11-18T12:50:09.382Z")
    }
}, {
    "_id" : ObjectId("5da4bfb40ce0c2d654fbb414"),
    "role" : "DELIVERYMAN",
    "status" : "ACTIVE",
    "givenName" : "João",
    "familyName" : "Domingos Alves dos Santos",
    "email" : "domingosalves021@gmail.com",
    "birthDate" : ISODate("1989-03-05T00:00:00.000Z"),
    "motofreteLicense" : "00761664",
    "motofreteExpiration" : ISODate("2019-09-23T00:00:00.000Z"),
    "condumotoLicense" : "02391856",
    "condumotoExpiration" : ISODate("2024-05-05T00:00:00.000Z"),
    "telephones" : [ 
        {
            "type" : "MOBILE",
            "country" : "55",
            "number" : "11960751840"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "11981726609"
        }
    ],
    "rg" : {
        "number" : "56026723",
        "state" : "SP"
    },
    "cpf" : "66323630591",
    "cnh" : {
        "type" : "A",
        "number" : 2529490418.0,
        "expiresAt" : ISODate("2024-05-05T00:00:00.000Z")
    },
    "picture" : "",
    "crateSize" : "120",
    "addresses" : [ 
        {
            "type" : "home",
            "postalCode" : "03243070",
            "address" : "n/d",
            "number" : "104",
            "complement" : "CS 6",
            "state" : "SP",
            "city" : "São Paulo",
            "country" : "Brazil"
        }
    ],
    "motorcycle" : [ 
        {
            "active" : true,
            "licensePlate" : "FRE5984"
        }
    ],
    "bankAccount" : {
        "type" : "Conta Corrente",
        "number" : 237,
        "name" : "Bradesco",
        "agency" : "0298-4",
        "account" : "0000321-2",
        "accountCpf" : "66323630591",
        "accountName" : "João Domingos Alves dos Santos"
    },
    "createdAt" : ISODate("2019-10-14T18:34:28.359Z"),
    "__v" : 0,
    "terms" : {
        "acceptedAt" : ISODate("2019-10-25T20:24:11.682Z")
    }
}, {
    "_id" : ObjectId("5da4bfb2bf786d3c10ec3039"),
    "role" : "DELIVERYMAN",
    "status" : "ACTIVE",
    "givenName" : "Carlos",
    "familyName" : "Jean Passos Santos",
    "email" : "carlosjean09@hotmail.com",
    "birthDate" : ISODate("1989-03-05T00:00:00.000Z"),
    "motofreteLicense" : "01132962",
    "motofreteExpiration" : ISODate("2020-03-09T00:00:00.000Z"),
    "condumotoLicense" : "02732556",
    "condumotoExpiration" : ISODate("2020-04-23T00:00:00.000Z"),
    "telephones" : [ 
        {
            "type" : "MOBILE",
            "country" : "55",
            "number" : "11984132759"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "11980513721"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "11948897463"
        }
    ],
    "rg" : {
        "number" : "47077029",
        "state" : "SP"
    },
    "cpf" : "33115131852",
    "cnh" : {
        "type" : "A",
        "number" : 3678185321.0,
        "expiresAt" : ISODate("2020-04-23T00:00:00.000Z")
    },
    "picture" : "",
    "crateSize" : "150",
    "addresses" : [ 
        {
            "type" : "home",
            "postalCode" : "05776460",
            "address" : "n/d",
            "number" : "390",
            "complement" : "",
            "state" : "SP",
            "city" : "São Paulo",
            "country" : "Brazil"
        }
    ],
    "motorcycle" : [ 
        {
            "active" : true,
            "licensePlate" : "FZN5722"
        }
    ],
    "bankAccount" : {
        "type" : "Conta Poupança",
        "number" : 237,
        "name" : "Bradesco",
        "agency" : "2841-0",
        "account" : "1008081-9",
        "accountCpf" : "33115131852",
        "accountName" : "Carlos Jean Passos Santos"
    },
    "createdAt" : ISODate("2019-10-14T18:34:26.966Z"),
    "__v" : 0,
    "terms" : {
        "acceptedAt" : ISODate("2019-11-11T20:50:31.396Z")
    }
}, {
    "_id" : ObjectId("5da4bfb3bf786db661ec3043"),
    "role" : "DELIVERYMAN",
    "status" : "ACTIVE",
    "givenName" : "Ivan",
    "familyName" : "Rodrigues da Silva",
    "email" : "irodriguesdasilva1986@gmail.com",
    "birthDate" : ISODate("1989-03-05T00:00:00.000Z"),
    "motofreteLicense" : "01044869",
    "motofreteExpiration" : ISODate("2020-06-28T00:00:00.000Z"),
    "condumotoLicense" : "02647451",
    "condumotoExpiration" : ISODate("2023-04-18T00:00:00.000Z"),
    "telephones" : [ 
        {
            "type" : "MOBILE",
            "country" : "55",
            "number" : "11940126400"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "1158413636"
        }
    ],
    "rg" : {
        "number" : "441787095",
        "state" : "SP"
    },
    "cpf" : "36341552807",
    "cnh" : {
        "type" : "A",
        "number" : 3823266905.0,
        "expiresAt" : ISODate("2023-04-18T00:00:00.000Z")
    },
    "picture" : "",
    "crateSize" : "120",
    "addresses" : [ 
        {
            "type" : "home",
            "postalCode" : "05735110",
            "address" : "n/d",
            "number" : "351",
            "complement" : "",
            "state" : "SP",
            "city" : "São Paulo",
            "country" : "Brazil"
        }
    ],
    "motorcycle" : [ 
        {
            "active" : true,
            "licensePlate" : "GIN6939"
        }
    ],
    "bankAccount" : {
        "type" : "Conta Corrente",
        "number" : 237,
        "name" : "Bradesco",
        "agency" : "3084-8",
        "account" : "0513483-8",
        "accountCpf" : "36341552807",
        "accountName" : "Ivan Rodrigues da Silva"
    },
    "createdAt" : ISODate("2019-10-14T18:34:27.860Z"),
    "__v" : 0,
    "terms" : {
        "acceptedAt" : ISODate("2019-12-05T21:12:41.681Z")
    }
}, {
    "_id" : ObjectId("5da4bfb30ce0c20e5cfbb40f"),
    "role" : "DELIVERYMAN",
    "status" : "ACTIVE",
    "givenName" : "Fabiano",
    "familyName" : "Vicente Gode",
    "email" : "coomesp.fabiano@hotmail.com",
    "birthDate" : ISODate("1989-03-05T00:00:00.000Z"),
    "motofreteLicense" : "01009265",
    "motofreteExpiration" : ISODate("2020-03-30T00:00:00.000Z"),
    "condumotoLicense" : "02079453",
    "condumotoExpiration" : ISODate("2023-05-09T00:00:00.000Z"),
    "telephones" : [ 
        {
            "type" : "MOBILE",
            "country" : "55",
            "number" : "11961635624"
        }
    ],
    "rg" : {
        "number" : "402795234",
        "state" : "SP"
    },
    "cpf" : "34010118806",
    "cnh" : {
        "type" : "A",
        "number" : 4138849710.0,
        "expiresAt" : ISODate("2023-05-09T00:00:00.000Z")
    },
    "picture" : "",
    "crateSize" : "90",
    "addresses" : [ 
        {
            "type" : "home",
            "postalCode" : "08538390",
            "address" : "n/d",
            "number" : "25",
            "complement" : "BL 9 - AP 01",
            "state" : "SP",
            "city" : "São Paulo",
            "country" : "Brazil"
        }
    ],
    "motorcycle" : [ 
        {
            "active" : true,
            "licensePlate" : "FMM0476"
        }
    ],
    "bankAccount" : {
        "type" : "Conta Corrente",
        "number" : 237,
        "name" : "Bradesco",
        "agency" : "0211-9",
        "account" : "0202719-4",
        "accountCpf" : "34010118806",
        "accountName" : "Fabiano Vicente Gode"
    },
    "createdAt" : ISODate("2019-10-14T18:34:27.765Z"),
    "__v" : 0
}, {
    "_id" : ObjectId("5da4bfb30ce0c26bb7fbb410"),
    "role" : "DELIVERYMAN",
    "status" : "ACTIVE",
    "givenName" : "Eder",
    "familyName" : "Billafranca",
    "email" : "ederbilla@gmal.com",
    "birthDate" : ISODate("1989-03-05T00:00:00.000Z"),
    "motofreteLicense" : "00445568",
    "motofreteExpiration" : ISODate("2020-01-31T00:00:00.000Z"),
    "condumotoLicense" : "01856251",
    "condumotoExpiration" : ISODate("2023-07-04T00:00:00.000Z"),
    "telephones" : [ 
        {
            "type" : "MOBILE",
            "country" : "55",
            "number" : "11940190300"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "1136551521"
        }
    ],
    "rg" : {
        "number" : "21817392",
        "state" : "SP"
    },
    "cpf" : "21652061894",
    "cnh" : {
        "type" : "A",
        "number" : 726496145,
        "expiresAt" : ISODate("2023-07-04T00:00:00.000Z")
    },
    "picture" : "",
    "crateSize" : "90",
    "addresses" : [ 
        {
            "type" : "home",
            "postalCode" : "05572050",
            "address" : "n/d",
            "number" : "66",
            "complement" : "",
            "state" : "SP",
            "city" : "São Paulo",
            "country" : "Brazil"
        }
    ],
    "motorcycle" : [ 
        {
            "active" : true,
            "licensePlate" : "FVF1319"
        }
    ],
    "bankAccount" : {
        "type" : "Conta Corrente",
        "number" : 341,
        "name" : "Itaú",
        "agency" : "0786",
        "account" : "64875-8",
        "accountCpf" : "21652061894",
        "accountName" : "Eder Billafranca"
    },
    "createdAt" : ISODate("2019-10-14T18:34:27.862Z"),
    "__v" : 0,
    "terms" : {
        "acceptedAt" : ISODate("2019-11-12T19:43:31.954Z")
    }
}, {
    "_id" : ObjectId("5da4bfb31270222ea6a0d7c3"),
    "role" : "DELIVERYMAN",
    "status" : "ACTIVE",
    "givenName" : "Helio",
    "familyName" : "France de Arruda Barros",
    "email" : "hfarruda@hotmail.com",
    "birthDate" : ISODate("1989-03-05T00:00:00.000Z"),
    "motofreteLicense" : "00695262",
    "motofreteExpiration" : ISODate("2019-10-11T00:00:00.000Z"),
    "condumotoLicense" : "02168359",
    "condumotoExpiration" : ISODate("2023-10-30T00:00:00.000Z"),
    "telephones" : [ 
        {
            "type" : "MOBILE",
            "country" : "55",
            "number" : "11999592648"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "1127210031"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "11989482648"
        }
    ],
    "rg" : {
        "number" : "324400767",
        "state" : "SP"
    },
    "cpf" : "31948769883",
    "cnh" : {
        "type" : "A",
        "number" : 2350677491.0,
        "expiresAt" : ISODate("2023-10-30T00:00:00.000Z")
    },
    "picture" : "",
    "crateSize" : "180",
    "addresses" : [ 
        {
            "type" : "home",
            "postalCode" : "03936100",
            "address" : "n/d",
            "number" : "125",
            "complement" : "",
            "state" : "SP",
            "city" : "São Paulo",
            "country" : "Brazil"
        }
    ],
    "motorcycle" : [ 
        {
            "active" : true,
            "licensePlate" : "EXR0629"
        }
    ],
    "bankAccount" : {
        "type" : "Conta Corrente",
        "number" : 27,
        "name" : "Santander",
        "agency" : "0399",
        "account" : "01035798-2",
        "accountCpf" : "31948769883",
        "accountName" : "Helio France de Arruda Barros"
    },
    "createdAt" : ISODate("2019-10-14T18:34:27.970Z"),
    "__v" : 0,
    "terms" : {
        "acceptedAt" : ISODate("2019-11-13T20:25:53.001Z")
    }
}, {
    "_id" : ObjectId("5da4bfb3bf786d8a82ec303c"),
    "role" : "DELIVERYMAN",
    "status" : "ACTIVE",
    "givenName" : "Egilson",
    "familyName" : "Ribeiro de Lima",
    "email" : "anajuliajulio7@gmail.com",
    "birthDate" : ISODate("1989-03-05T00:00:00.000Z"),
    "motofreteLicense" : "",
    "motofreteExpiration" : null,
    "condumotoLicense" : "02766752",
    "condumotoExpiration" : ISODate("2023-01-29T00:00:00.000Z"),
    "telephones" : [ 
        {
            "type" : "MOBILE",
            "country" : "55",
            "number" : "11987587438"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "1122633046"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "1129922497"
        }
    ],
    "rg" : {
        "number" : "281592123",
        "state" : "SP"
    },
    "cpf" : "26842430852",
    "cnh" : {
        "type" : "A",
        "number" : 2347113000.0,
        "expiresAt" : ISODate("2023-01-29T00:00:00.000Z")
    },
    "picture" : "",
    "crateSize" : "90",
    "addresses" : [ 
        {
            "type" : "home",
            "postalCode" : "02353100",
            "address" : "n/d",
            "number" : "85",
            "complement" : "CASA 3",
            "state" : "SP",
            "city" : "São Paulo",
            "country" : "Brazil"
        }
    ],
    "motorcycle" : [ 
        {
            "active" : true,
            "licensePlate" : "GIL6620"
        }
    ],
    "bankAccount" : {
        "type" : "Conta Corrente",
        "number" : 341,
        "name" : "Itaú",
        "agency" : "8857",
        "account" : "07928-2",
        "accountCpf" : "26842430852",
        "accountName" : "Egilson Ribeiro de Lima"
    },
    "createdAt" : ISODate("2019-10-14T18:34:27.360Z"),
    "__v" : 0,
    "terms" : {
        "acceptedAt" : ISODate("2019-11-19T12:45:53.096Z")
    }
}, {
    "_id" : ObjectId("5da4bfb30ce0c23740fbb408"),
    "role" : "DELIVERYMAN",
    "status" : "ACTIVE",
    "givenName" : "Bruno",
    "familyName" : "Rodrigo Ferreira de Alvarenga",
    "email" : "brunorodrigofa@gmail.com",
    "birthDate" : ISODate("1989-03-05T00:00:00.000Z"),
    "motofreteLicense" : "01175963",
    "motofreteExpiration" : ISODate("2020-07-10T00:00:00.000Z"),
    "condumotoLicense" : "02740656",
    "condumotoExpiration" : ISODate("2021-01-07T00:00:00.000Z"),
    "telephones" : [ 
        {
            "type" : "MOBILE",
            "country" : "55",
            "number" : "11949463670"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "1158726303"
        }
    ],
    "rg" : {
        "number" : "45371952",
        "state" : "SP"
    },
    "cpf" : "33481532806",
    "cnh" : {
        "type" : "A",
        "number" : 3899854036.0,
        "expiresAt" : ISODate("2021-01-07T00:00:00.000Z")
    },
    "picture" : "",
    "crateSize" : "120",
    "addresses" : [ 
        {
            "type" : "home",
            "postalCode" : "05879000",
            "address" : "n/d",
            "number" : "425",
            "complement" : "AP 13A",
            "state" : "SP",
            "city" : "São Paulo",
            "country" : "Brazil"
        }
    ],
    "motorcycle" : [ 
        {
            "active" : true,
            "licensePlate" : "FPD9649"
        }
    ],
    "bankAccount" : {
        "type" : "Conta Poupança",
        "number" : 104,
        "name" : "Caixa",
        "agency" : "3006 / 013",
        "account" : "00010589 -1",
        "accountCpf" : "33481532806",
        "accountName" : "Bruno Rodrigo Ferreira de Alvarenga"
    },
    "createdAt" : ISODate("2019-10-14T18:34:27.268Z"),
    "__v" : 0
}, {
    "_id" : ObjectId("5da4bfb3127022491ca0d7ba"),
    "role" : "DELIVERYMAN",
    "status" : "ACTIVE",
    "givenName" : "Dassaev",
    "familyName" : "Santos Duarte",
    "email" : "dassaevsduarte@gmail.com",
    "birthDate" : ISODate("1989-03-05T00:00:00.000Z"),
    "motofreteLicense" : "00915966",
    "motofreteExpiration" : ISODate("2020-03-29T00:00:00.000Z"),
    "condumotoLicense" : "02735156",
    "condumotoExpiration" : ISODate("2023-07-24T00:00:00.000Z"),
    "telephones" : [ 
        {
            "type" : "MOBILE",
            "country" : "55",
            "number" : "11958989185"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "11954311799"
        }
    ],
    "rg" : {
        "number" : "45885193",
        "state" : "SP"
    },
    "cpf" : "41788238842",
    "cnh" : {
        "type" : "A",
        "number" : 6002352230.0,
        "expiresAt" : ISODate("2023-07-27T00:00:00.000Z")
    },
    "picture" : "",
    "crateSize" : "150",
    "addresses" : [ 
        {
            "type" : "home",
            "postalCode" : "06056250",
            "address" : "n/d",
            "number" : "16",
            "complement" : "",
            "state" : "SP",
            "city" : "São Paulo",
            "country" : "Brazil"
        }
    ],
    "motorcycle" : [ 
        {
            "active" : true,
            "licensePlate" : "FVO9850"
        }
    ],
    "bankAccount" : {
        "type" : "Conta Poupança",
        "number" : 237,
        "name" : "Bradesco",
        "agency" : "2826-6",
        "account" : "10111219-2",
        "accountCpf" : "41788238842",
        "accountName" : "Dassaev Santos Duarte"
    },
    "createdAt" : ISODate("2019-10-14T18:34:27.168Z"),
    "__v" : 0,
    "terms" : {
        "acceptedAt" : ISODate("2019-10-24T14:14:55.090Z")
    }
}, {
    "_id" : ObjectId("5da4bfb30ce0c25441fbb406"),
    "role" : "DELIVERYMAN",
    "status" : "ACTIVE",
    "givenName" : "Antonio",
    "familyName" : "Claudio Dos Santos Ferreira",
    "email" : "01operador01@gmail.com",
    "birthDate" : ISODate("1989-03-05T00:00:00.000Z"),
    "motofreteLicense" : "01188968",
    "motofreteExpiration" : ISODate("2020-08-16T00:00:00.000Z"),
    "condumotoLicense" : "02794250",
    "condumotoExpiration" : ISODate("2024-07-17T00:00:00.000Z"),
    "telephones" : [ 
        {
            "type" : "MOBILE",
            "country" : "55",
            "number" : "11962535349"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "11967638622"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "59314657"
        }
    ],
    "rg" : {
        "number" : "35514094",
        "state" : "SP"
    },
    "cpf" : "80350330344",
    "cnh" : {
        "type" : "A",
        "number" : 1123428255,
        "expiresAt" : ISODate("2024-04-17T00:00:00.000Z")
    },
    "picture" : "",
    "crateSize" : "180",
    "addresses" : [ 
        {
            "type" : "home",
            "postalCode" : "04900000",
            "address" : "n/d",
            "number" : "230",
            "complement" : "-",
            "state" : "SP",
            "city" : "São Paulo",
            "country" : "Brazil"
        }
    ],
    "motorcycle" : [ 
        {
            "active" : true,
            "licensePlate" : "EXK9184"
        }
    ],
    "bankAccount" : {
        "type" : "Conta Corrente",
        "number" : 237,
        "name" : "Bradesco",
        "agency" : "3263-8",
        "account" : "0600194-7",
        "accountCpf" : "80350330344",
        "accountName" : "Antonio Claudio Dos Santos Ferreira"
    },
    "createdAt" : ISODate("2019-10-14T18:34:27.165Z"),
    "__v" : 0
}, {
    "_id" : ObjectId("5da4bfb30ce0c26342fbb40a"),
    "role" : "DELIVERYMAN",
    "status" : "ACTIVE",
    "givenName" : "Cleyton",
    "familyName" : "Martins Guerra",
    "email" : "loggimartins@gmail.com",
    "birthDate" : ISODate("1989-03-05T00:00:00.000Z"),
    "motofreteLicense" : "01029460",
    "motofreteExpiration" : ISODate("2020-05-30T00:00:00.000Z"),
    "condumotoLicense" : "02647958",
    "condumotoExpiration" : ISODate("2024-07-30T00:00:00.000Z"),
    "telephones" : [ 
        {
            "type" : "MOBILE",
            "country" : "55",
            "number" : "11961831039"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "11956076677"
        }
    ],
    "rg" : {
        "number" : "35306129",
        "state" : "SP"
    },
    "cpf" : "31370598874",
    "cnh" : {
        "type" : "A",
        "number" : 3600426237.0,
        "expiresAt" : ISODate("2024-07-30T00:00:00.000Z")
    },
    "picture" : "",
    "crateSize" : "90",
    "addresses" : [ 
        {
            "type" : "home",
            "postalCode" : "03977409",
            "address" : "n/d",
            "number" : "800",
            "complement" : "AP  31A",
            "state" : "SP",
            "city" : "São Paulo",
            "country" : "Brazil"
        }
    ],
    "motorcycle" : [ 
        {
            "active" : true,
            "licensePlate" : "FHS6640"
        }
    ],
    "bankAccount" : {
        "type" : "Conta Corrente",
        "number" : 341,
        "name" : "Itaú",
        "agency" : "8445",
        "account" : "08034-7",
        "accountCpf" : "31370598874",
        "accountName" : "Cleyton Martins Guerra"
    },
    "createdAt" : ISODate("2019-10-14T18:34:27.365Z"),
    "__v" : 0,
    "terms" : {
        "acceptedAt" : ISODate("2019-11-29T21:10:21.973Z")
    }
}, {
    "_id" : ObjectId("5da4bfb30ce0c26952fbb407"),
    "role" : "DELIVERYMAN",
    "status" : "ACTIVE",
    "givenName" : "Andre",
    "familyName" : "De Macedo Alves",
    "email" : "andre.macedoalves@hotmail.com",
    "birthDate" : ISODate("1989-03-05T00:00:00.000Z"),
    "motofreteLicense" : "01138669",
    "motofreteExpiration" : ISODate("2020-03-21T00:00:00.000Z"),
    "condumotoLicense" : "02760258",
    "condumotoExpiration" : ISODate("2022-03-03T00:00:00.000Z"),
    "telephones" : [ 
        {
            "type" : "MOBILE",
            "country" : "55",
            "number" : "11947926777"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "11959350001"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "46854744"
        }
    ],
    "rg" : {
        "number" : "41804135",
        "state" : "SP"
    },
    "cpf" : "35773826860",
    "cnh" : {
        "type" : "A",
        "number" : 4082441433.0,
        "expiresAt" : ISODate("2022-03-03T00:00:00.000Z")
    },
    "picture" : "",
    "crateSize" : "150",
    "addresses" : [ 
        {
            "type" : "home",
            "postalCode" : "06807470",
            "address" : "n/d",
            "number" : "121",
            "complement" : "AP 61",
            "state" : "SP",
            "city" : "São Paulo",
            "country" : "Brazil"
        }
    ],
    "motorcycle" : [ 
        {
            "active" : true,
            "licensePlate" : "GDV8589"
        }
    ],
    "bankAccount" : {
        "type" : "Conta Corrente",
        "number" : 27,
        "name" : "Santander",
        "agency" : "3938",
        "account" : "01081853-5",
        "accountCpf" : "35773826860",
        "accountName" : "Andre De Macedo Alves"
    },
    "createdAt" : ISODate("2019-10-14T18:34:27.262Z"),
    "__v" : 0,
    "terms" : {
        "acceptedAt" : ISODate("2019-12-05T21:12:04.401Z")
    }
}, {
    "_id" : ObjectId("5da4bfb3127022485aa0d7c2"),
    "role" : "DELIVERYMAN",
    "status" : "ACTIVE",
    "givenName" : "Marcelo",
    "familyName" : "Gonçalves dos Santos",
    "email" : "marcelogoncalves3434@gmail.com",
    "birthDate" : ISODate("1989-03-05T00:00:00.000Z"),
    "motofreteLicense" : "01014269",
    "motofreteExpiration" : ISODate("2020-04-18T00:00:00.000Z"),
    "condumotoLicense" : "02641054",
    "condumotoExpiration" : ISODate("2021-01-18T00:00:00.000Z"),
    "telephones" : [ 
        {
            "type" : "MOBILE",
            "country" : "55",
            "number" : "11962758116"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "1129546141"
        }
    ],
    "rg" : {
        "number" : "323515083",
        "state" : "SP"
    },
    "cpf" : "30376633832",
    "cnh" : {
        "type" : "A",
        "number" : 2343407073.0,
        "expiresAt" : ISODate("2021-01-18T00:00:00.000Z")
    },
    "picture" : "",
    "crateSize" : "120",
    "addresses" : [ 
        {
            "type" : "home",
            "postalCode" : "02189070",
            "address" : "n/d",
            "number" : "214",
            "complement" : "",
            "state" : "SP",
            "city" : "São Paulo",
            "country" : "Brazil"
        }
    ],
    "motorcycle" : [ 
        {
            "active" : true,
            "licensePlate" : "FYU0850"
        }
    ],
    "bankAccount" : {
        "type" : "Conta Corrente",
        "number" : 237,
        "name" : "Bradesco",
        "agency" : "3298-0",
        "account" : "0002745-6",
        "accountCpf" : "30376633832",
        "accountName" : "Marcelo Gonçalves dos Santos"
    },
    "createdAt" : ISODate("2019-10-14T18:34:27.869Z"),
    "__v" : 0,
    "terms" : {
        "acceptedAt" : ISODate("2019-11-13T18:30:12.218Z")
    }
}, {
    "_id" : ObjectId("5da4bfb40ce0c27a55fbb417"),
    "role" : "DELIVERYMAN",
    "status" : "ACTIVE",
    "givenName" : "Jeova",
    "familyName" : "Aneglo Oliveira do Nascimento",
    "email" : "jeovaanegloo@gmail.com",
    "birthDate" : ISODate("1989-03-05T00:00:00.000Z"),
    "motofreteLicense" : "01006568",
    "motofreteExpiration" : ISODate("2020-03-15T00:00:00.000Z"),
    "condumotoLicense" : "01751050",
    "condumotoExpiration" : ISODate("2020-09-18T00:00:00.000Z"),
    "telephones" : [ 
        {
            "type" : "MOBILE",
            "country" : "55",
            "number" : "11982932878"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "11948060623"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "11965870571"
        }
    ],
    "rg" : {
        "number" : "44495713",
        "state" : "SP"
    },
    "cpf" : "36040911875",
    "cnh" : {
        "type" : "A",
        "number" : 4224217812.0,
        "expiresAt" : ISODate("2020-09-18T00:00:00.000Z")
    },
    "picture" : "",
    "crateSize" : "120",
    "addresses" : [ 
        {
            "type" : "home",
            "postalCode" : "08141060",
            "address" : "n/d",
            "number" : "21",
            "complement" : "",
            "state" : "SP",
            "city" : "São Paulo",
            "country" : "Brazil"
        }
    ],
    "motorcycle" : [ 
        {
            "active" : true,
            "licensePlate" : "GJL1360"
        }
    ],
    "bankAccount" : {
        "type" : "Conta Corrente",
        "number" : 1,
        "name" : "Banco do Brasil",
        "agency" : "1819-8",
        "account" : "53314-9",
        "accountCpf" : "36040911875",
        "accountName" : "Jeova Aneglo Oliveira do Nascimento"
    },
    "createdAt" : ISODate("2019-10-14T18:34:28.662Z"),
    "__v" : 0,
    "terms" : {
        "acceptedAt" : ISODate("2019-11-11T16:51:48.096Z")
    }
}, {
    "_id" : ObjectId("5da4bfb41270223b99a0d7d1"),
    "role" : "DELIVERYMAN",
    "status" : "ACTIVE",
    "givenName" : "Tiago",
    "familyName" : "Tavares De Almeida Dos Reis",
    "email" : "tta.reis@gmail.com",
    "birthDate" : ISODate("1989-03-05T00:00:00.000Z"),
    "motofreteLicense" : "01142062",
    "motofreteExpiration" : ISODate("2020-04-04T00:00:00.000Z"),
    "condumotoLicense" : "02728227",
    "condumotoExpiration" : ISODate("2020-07-21T00:00:00.000Z"),
    "telephones" : [ 
        {
            "type" : "MOBILE",
            "country" : "55",
            "number" : "11982871511"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "11982344552"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "1159245069"
        }
    ],
    "rg" : {
        "number" : "335495448",
        "state" : "SP"
    },
    "cpf" : "31533758875",
    "cnh" : {
        "type" : "A",
        "number" : 3295667203.0,
        "expiresAt" : ISODate("2020-07-21T00:00:00.000Z")
    },
    "picture" : "",
    "crateSize" : "150",
    "addresses" : [ 
        {
            "type" : "home",
            "postalCode" : "04863100",
            "address" : "n/d",
            "number" : "101",
            "complement" : "",
            "state" : "SP",
            "city" : "São Paulo",
            "country" : "Brazil"
        }
    ],
    "motorcycle" : [ 
        {
            "active" : true,
            "licensePlate" : "JKA9757"
        }
    ],
    "bankAccount" : {
        "type" : "Conta Poupança",
        "number" : 237,
        "name" : "Bradesco",
        "agency" : "2724-3",
        "account" : "1006644-1",
        "accountCpf" : "31533758875",
        "accountName" : "Tiago Tavares De Almeida Dos Reis"
    },
    "createdAt" : ISODate("2019-10-14T18:34:29.068Z"),
    "__v" : 0,
    "terms" : {
        "acceptedAt" : ISODate("2019-11-25T19:00:55.980Z")
    }
}, {
    "_id" : ObjectId("5da4bfb31270223698a0d7c0"),
    "role" : "DELIVERYMAN",
    "status" : "ACTIVE",
    "givenName" : "Flavio",
    "familyName" : "Moises De Alcantara",
    "email" : "flaviomoisesalcantara@gmail.com",
    "birthDate" : ISODate("1989-03-05T00:00:00.000Z"),
    "motofreteLicense" : "00990663",
    "motofreteExpiration" : ISODate("2019-11-09T00:00:00.000Z"),
    "condumotoLicense" : "01095455",
    "condumotoExpiration" : ISODate("2022-01-20T00:00:00.000Z"),
    "telephones" : [ 
        {
            "type" : "MOBILE",
            "country" : "55",
            "number" : "11957103487"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "11952786621"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "1158723809"
        }
    ],
    "rg" : {
        "number" : "26100205",
        "state" : "SP"
    },
    "cpf" : "25314053802",
    "cnh" : {
        "type" : "A",
        "number" : 1955969000,
        "expiresAt" : ISODate("2022-01-20T00:00:00.000Z")
    },
    "picture" : "",
    "crateSize" : "120",
    "addresses" : [ 
        {
            "type" : "home",
            "postalCode" : "05880251",
            "address" : "n/d",
            "number" : "386",
            "complement" : "",
            "state" : "SP",
            "city" : "São Paulo",
            "country" : "Brazil"
        }
    ],
    "motorcycle" : [ 
        {
            "active" : true,
            "licensePlate" : "FEN6317"
        }
    ],
    "bankAccount" : {
        "type" : "Conta Corrente",
        "number" : 237,
        "name" : "Bradesco",
        "agency" : "2683-2",
        "account" : "0006241-3",
        "accountCpf" : "25314053802",
        "accountName" : "Flavio Moises De Alcantara"
    },
    "createdAt" : ISODate("2019-10-14T18:34:27.479Z"),
    "__v" : 0,
    "terms" : {
        "acceptedAt" : ISODate("2019-11-12T20:26:36.527Z")
    }
}, {
    "_id" : ObjectId("5da4bfb3bf786d8f0cec3042"),
    "role" : "DELIVERYMAN",
    "status" : "ACTIVE",
    "givenName" : "Hudson",
    "familyName" : "Junio Ferreira",
    "email" : "hudsfer82@gmail.com",
    "birthDate" : ISODate("1989-03-05T00:00:00.000Z"),
    "motofreteLicense" : "00809861",
    "motofreteExpiration" : ISODate("2018-05-20T00:00:00.000Z"),
    "condumotoLicense" : "02051656",
    "condumotoExpiration" : ISODate("2019-09-16T00:00:00.000Z"),
    "telephones" : [ 
        {
            "type" : "MOBILE",
            "country" : "55",
            "number" : "11947756139"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "11958284389"
        }
    ],
    "rg" : {
        "number" : "344962209",
        "state" : "SP"
    },
    "cpf" : "30314501835",
    "cnh" : {
        "type" : "A",
        "number" : 2097134828,
        "expiresAt" : ISODate("2021-09-05T00:00:00.000Z")
    },
    "picture" : "",
    "crateSize" : "90",
    "addresses" : [ 
        {
            "type" : "home",
            "postalCode" : "04568000",
            "address" : "n/d",
            "number" : "133",
            "complement" : "",
            "state" : "SP",
            "city" : "São Paulo",
            "country" : "Brazil"
        }
    ],
    "motorcycle" : [ 
        {
            "active" : true,
            "licensePlate" : "FCO1032"
        }
    ],
    "bankAccount" : {
        "type" : "Conta Corrente",
        "number" : 341,
        "name" : "Itaú",
        "agency" : "1633",
        "account" : "15519-5",
        "accountCpf" : "30314501835",
        "accountName" : "Hudson Junio Ferreira"
    },
    "createdAt" : ISODate("2019-10-14T18:34:27.669Z"),
    "__v" : 0
}, {
    "_id" : ObjectId("5da4bfb312702233c6a0d7b8"),
    "role" : "DELIVERYMAN",
    "status" : "ACTIVE",
    "givenName" : "Anderson",
    "familyName" : "da Silva",
    "email" : "silva.andersoon@hotmail.com",
    "birthDate" : ISODate("1989-03-05T00:00:00.000Z"),
    "motofreteLicense" : "01095668",
    "motofreteExpiration" : ISODate("2019-10-31T00:00:00.000Z"),
    "condumotoLicense" : "01271156",
    "condumotoExpiration" : ISODate("2023-01-18T00:00:00.000Z"),
    "telephones" : [ 
        {
            "type" : "MOBILE",
            "country" : "55",
            "number" : "11947622195"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "11998784579"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "1139842718"
        }
    ],
    "rg" : {
        "number" : "247975308",
        "state" : "SP"
    },
    "cpf" : "14430821801",
    "cnh" : {
        "type" : "A",
        "number" : 661431660,
        "expiresAt" : ISODate("2023-01-18T00:00:00.000Z")
    },
    "picture" : "",
    "crateSize" : "150",
    "addresses" : [ 
        {
            "type" : "home",
            "postalCode" : "02850090",
            "address" : "n/d",
            "number" : "63",
            "complement" : "CS 2",
            "state" : "SP",
            "city" : "São Paulo",
            "country" : "Brazil"
        }
    ],
    "motorcycle" : [ 
        {
            "active" : true,
            "licensePlate" : "FOJ3576"
        }
    ],
    "bankAccount" : {
        "type" : "Conta Jurídica Corrente",
        "number" : 1,
        "name" : "Banco do Brasil",
        "agency" : "4417-2",
        "account" : "8.802-1",
        "accountCpf" : "14430821801",
        "accountName" : "Anderson da Silva"
    },
    "createdAt" : ISODate("2019-10-14T18:34:27.070Z"),
    "__v" : 0,
    "terms" : {
        "acceptedAt" : ISODate("2019-11-13T16:01:12.605Z")
    }
}, {
    "_id" : ObjectId("5da4bfb3bf786d417cec3040"),
    "role" : "DELIVERYMAN",
    "status" : "ACTIVE",
    "givenName" : "Fabricio",
    "familyName" : "Martins Garcia",
    "email" : "fbrpsa_zs@yahoo.com.br",
    "birthDate" : ISODate("1989-03-05T00:00:00.000Z"),
    "motofreteLicense" : "00835064",
    "motofreteExpiration" : ISODate("2018-09-02T00:00:00.000Z"),
    "condumotoLicense" : "01887858",
    "condumotoExpiration" : ISODate("2018-12-10T00:00:00.000Z"),
    "telephones" : [ 
        {
            "type" : "MOBILE",
            "country" : "55",
            "number" : "11953373043"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "1141792334"
        }
    ],
    "rg" : {
        "number" : "35184564",
        "state" : "SP"
    },
    "cpf" : "32837324850",
    "cnh" : {
        "type" : "A",
        "number" : 2436965800.0,
        "expiresAt" : ISODate("2023-12-19T00:00:00.000Z")
    },
    "picture" : "",
    "crateSize" : "90",
    "addresses" : [ 
        {
            "type" : "home",
            "postalCode" : "05861390",
            "address" : "n/d",
            "number" : "105",
            "complement" : "",
            "state" : "SP",
            "city" : "São Paulo",
            "country" : "Brazil"
        }
    ],
    "motorcycle" : [ 
        {
            "active" : true,
            "licensePlate" : "FWC9020"
        }
    ],
    "bankAccount" : {
        "type" : "Conta Corrente",
        "number" : 341,
        "name" : "Itaú",
        "agency" : "8667",
        "account" : "02447-8",
        "accountCpf" : "32837324850",
        "accountName" : "Fabricio Martins Garcia"
    },
    "createdAt" : ISODate("2019-10-14T18:34:27.565Z"),
    "__v" : 0,
    "terms" : {
        "acceptedAt" : ISODate("2019-10-30T18:58:44.430Z")
    }
}, {
    "_id" : ObjectId("5da4bfb41270222e15a0d7cf"),
    "role" : "DELIVERYMAN",
    "status" : "ACTIVE",
    "givenName" : "Teofilo",
    "familyName" : "Jose De Sousa",
    "email" : "teo.finho1@yahoo.com",
    "birthDate" : ISODate("1989-03-05T00:00:00.000Z"),
    "motofreteLicense" : "01104063",
    "motofreteExpiration" : ISODate("2019-11-28T00:00:00.000Z"),
    "condumotoLicense" : "02709651",
    "condumotoExpiration" : ISODate("2019-12-05T00:00:00.000Z"),
    "telephones" : [ 
        {
            "type" : "MOBILE",
            "country" : "55",
            "number" : "11977022528"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "1120130725"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "11965889902"
        }
    ],
    "rg" : {
        "number" : "47716415",
        "state" : "SP"
    },
    "cpf" : "34841226842",
    "cnh" : {
        "type" : "A",
        "number" : 4932729540.0,
        "expiresAt" : ISODate("2019-12-05T00:00:00.000Z")
    },
    "picture" : "",
    "crateSize" : "150",
    "addresses" : [ 
        {
            "type" : "home",
            "postalCode" : "03952030",
            "address" : "n/d",
            "number" : "4",
            "complement" : "",
            "state" : "SP",
            "city" : "São Paulo",
            "country" : "Brazil"
        }
    ],
    "motorcycle" : [ 
        {
            "active" : true,
            "licensePlate" : "ONC0164"
        }
    ],
    "bankAccount" : {
        "type" : "Conta Corrente",
        "number" : 27,
        "name" : "Santander",
        "agency" : "1633",
        "account" : "01008269-5",
        "accountCpf" : "34841226842",
        "accountName" : "Teofilo Jose De Sousa"
    },
    "createdAt" : ISODate("2019-10-14T18:34:28.769Z"),
    "__v" : 0,
    "terms" : {
        "acceptedAt" : ISODate("2019-10-30T13:50:43.270Z")
    }
}, {
    "_id" : ObjectId("5da4bfb21270228605a0d7b6"),
    "role" : "DELIVERYMAN",
    "status" : "ACTIVE",
    "givenName" : "Anderson",
    "familyName" : "Camargo Vieira",
    "email" : "andcamvie@gmail.com",
    "birthDate" : ISODate("1989-03-05T00:00:00.000Z"),
    "motofreteLicense" : "01001566",
    "motofreteExpiration" : ISODate("2020-02-02T00:00:00.000Z"),
    "condumotoLicense" : "02141957",
    "condumotoExpiration" : ISODate("2019-10-08T00:00:00.000Z"),
    "telephones" : [ 
        {
            "type" : "MOBILE",
            "country" : "55",
            "number" : "11984968162"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "11943665097"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "1142411584"
        }
    ],
    "rg" : {
        "number" : "27890046",
        "state" : "SP"
    },
    "cpf" : "26404806851",
    "cnh" : {
        "type" : "A",
        "number" : 3412698038.0,
        "expiresAt" : ISODate("2019-10-08T00:00:00.000Z")
    },
    "picture" : "",
    "crateSize" : "150",
    "addresses" : [ 
        {
            "type" : "home",
            "postalCode" : "06807150",
            "address" : "n/d",
            "number" : "197",
            "complement" : "",
            "state" : "SP",
            "city" : "São Paulo",
            "country" : "Brazil"
        }
    ],
    "motorcycle" : [ 
        {
            "active" : true,
            "licensePlate" : "OSU0368"
        }
    ],
    "bankAccount" : {
        "type" : "Conta Corrente",
        "number" : 237,
        "name" : "Bradesco",
        "agency" : "2474",
        "account" : "0008586-3",
        "accountCpf" : "26404806851",
        "accountName" : "Anderson Camargo Vieira"
    },
    "createdAt" : ISODate("2019-10-14T18:34:26.872Z"),
    "__v" : 0,
    "terms" : {
        "acceptedAt" : ISODate("2019-11-04T12:58:33.366Z")
    }
}, {
    "_id" : ObjectId("5da4bfb30ce0c23547fbb412"),
    "role" : "DELIVERYMAN",
    "status" : "ACTIVE",
    "givenName" : "Jose",
    "familyName" : "Weliton Feitosa Aleixo",
    "email" : "eduardocondejw@gmail.com",
    "birthDate" : ISODate("1989-03-05T00:00:00.000Z"),
    "motofreteLicense" : "01110861",
    "motofreteExpiration" : ISODate("2019-12-19T00:00:00.000Z"),
    "condumotoLicense" : "02719959",
    "condumotoExpiration" : ISODate("2023-11-13T00:00:00.000Z"),
    "telephones" : [ 
        {
            "type" : "MOBILE",
            "country" : "55",
            "number" : "11991959183"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "87981190056"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "1155120374"
        }
    ],
    "rg" : {
        "number" : "42173062",
        "state" : "SP"
    },
    "cpf" : "31266488863",
    "cnh" : {
        "type" : "A",
        "number" : 2876503931.0,
        "expiresAt" : ISODate("2023-11-13T00:00:00.000Z")
    },
    "picture" : "",
    "crateSize" : "150",
    "addresses" : [ 
        {
            "type" : "home",
            "postalCode" : "05861400",
            "address" : "n/d",
            "number" : "13",
            "complement" : "",
            "state" : "SP",
            "city" : "São Paulo",
            "country" : "Brazil"
        }
    ],
    "motorcycle" : [ 
        {
            "active" : true,
            "licensePlate" : "FAB9828"
        }
    ],
    "bankAccount" : {
        "type" : "Conta Corrente",
        "number" : 237,
        "name" : "Bradesco",
        "agency" : "1266-1",
        "account" : "41175-2",
        "accountCpf" : "31266488863",
        "accountName" : "Jose Weliton Feitosa Aleixo"
    },
    "createdAt" : ISODate("2019-10-14T18:34:28.059Z"),
    "__v" : 0,
    "terms" : {
        "acceptedAt" : ISODate("2019-11-04T18:17:57.387Z")
    }
}, {
    "_id" : ObjectId("5da4bfb30ce0c2feb6fbb40c"),
    "role" : "DELIVERYMAN",
    "status" : "ACTIVE",
    "givenName" : "Daniel",
    "familyName" : "Moreira Belo",
    "email" : "dmbpp13@yahoo.com.br",
    "birthDate" : ISODate("1989-03-05T00:00:00.000Z"),
    "motofreteLicense" : "00356964",
    "motofreteExpiration" : ISODate("2020-08-09T00:00:00.000Z"),
    "condumotoLicense" : "01495852",
    "condumotoExpiration" : ISODate("2020-12-09T00:00:00.000Z"),
    "telephones" : [ 
        {
            "type" : "MOBILE",
            "country" : "55",
            "number" : "11947479910"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "1134818113"
        }
    ],
    "rg" : {
        "number" : "26756445",
        "state" : "SP"
    },
    "cpf" : "28309193866",
    "cnh" : {
        "type" : "A",
        "number" : 2726051702.0,
        "expiresAt" : ISODate("2020-12-09T00:00:00.000Z")
    },
    "picture" : "",
    "crateSize" : "180",
    "addresses" : [ 
        {
            "type" : "home",
            "postalCode" : "04156000",
            "address" : "n/d",
            "number" : "241",
            "complement" : "CS 3",
            "state" : "SP",
            "city" : "São Paulo",
            "country" : "Brazil"
        }
    ],
    "motorcycle" : [ 
        {
            "active" : true,
            "licensePlate" : "FLP1158"
        }
    ],
    "bankAccount" : {
        "type" : "Conta Corrente",
        "number" : 341,
        "name" : "Itaú",
        "agency" : "4496",
        "account" : "02826-9",
        "accountCpf" : "28309193866",
        "accountName" : "Daniel Moreira Belo"
    },
    "createdAt" : ISODate("2019-10-14T18:34:27.661Z"),
    "__v" : 0
}, {
    "_id" : ObjectId("5da4bfb20ce0c2d1e6fbb404"),
    "role" : "DELIVERYMAN",
    "status" : "ACTIVE",
    "givenName" : "Ailton",
    "familyName" : "da Silva",
    "email" : "ailton060212@gmail.com",
    "birthDate" : ISODate("1989-03-05T00:00:00.000Z"),
    "motofreteLicense" : "00843466",
    "motofreteExpiration" : ISODate("2019-10-09T00:00:00.000Z"),
    "condumotoLicense" : "02451859",
    "condumotoExpiration" : ISODate("2021-05-13T00:00:00.000Z"),
    "telephones" : [ 
        {
            "type" : "MOBILE",
            "country" : "55",
            "number" : "11973006988"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "1145565617"
        }
    ],
    "rg" : {
        "number" : "33142290",
        "state" : "SP"
    },
    "cpf" : "22012663877",
    "cnh" : {
        "type" : "A",
        "number" : 1098478567,
        "expiresAt" : ISODate("2021-05-13T00:00:00.000Z")
    },
    "picture" : "",
    "crateSize" : "180",
    "addresses" : [ 
        {
            "type" : "home",
            "postalCode" : "06033170",
            "address" : "n/d",
            "number" : "126",
            "complement" : "CS 1",
            "state" : "SP",
            "city" : "São Paulo",
            "country" : "Brazil"
        }
    ],
    "motorcycle" : [ 
        {
            "active" : true,
            "licensePlate" : "FHV7482"
        }
    ],
    "bankAccount" : {
        "type" : "Conta Corrente",
        "number" : 341,
        "name" : "Itaú",
        "agency" : "0073",
        "account" : "00935-9",
        "accountCpf" : "22012663877",
        "accountName" : "Ailton da Silva"
    },
    "createdAt" : ISODate("2019-10-14T18:34:26.969Z"),
    "__v" : 0,
    "terms" : {
        "acceptedAt" : ISODate("2019-10-24T18:55:13.367Z")
    }
}, {
    "_id" : ObjectId("5da4bfb31270220997a0d7bf"),
    "role" : "DELIVERYMAN",
    "status" : "ACTIVE",
    "givenName" : "Gerson",
    "familyName" : "Soares Ribeiro",
    "email" : "nosreg0@gmail.com",
    "birthDate" : ISODate("1989-03-05T00:00:00.000Z"),
    "motofreteLicense" : "01046063",
    "motofreteExpiration" : ISODate("2020-06-29T00:00:00.000Z"),
    "condumotoLicense" : "02473550",
    "condumotoExpiration" : ISODate("2023-10-04T00:00:00.000Z"),
    "telephones" : [ 
        {
            "type" : "MOBILE",
            "country" : "55",
            "number" : "11967257855"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "11991877022"
        }
    ],
    "rg" : {
        "number" : "54920010",
        "state" : "SP"
    },
    "cpf" : "07640337437",
    "cnh" : {
        "type" : "A",
        "number" : 4620290550.0,
        "expiresAt" : ISODate("2023-10-04T00:00:00.000Z")
    },
    "picture" : "",
    "crateSize" : "150",
    "addresses" : [ 
        {
            "type" : "home",
            "postalCode" : "01142200",
            "address" : "n/d",
            "number" : "100",
            "complement" : "AP 402 A",
            "state" : "SP",
            "city" : "São Paulo",
            "country" : "Brazil"
        }
    ],
    "motorcycle" : [ 
        {
            "active" : true,
            "licensePlate" : "GDD7108"
        }
    ],
    "bankAccount" : {
        "type" : "Conta Poupança",
        "number" : 104,
        "name" : "Caixa",
        "agency" : "4905 / 013",
        "account" : "00001852-2",
        "accountCpf" : "07640337437",
        "accountName" : "Gerson Soares Ribeiro"
    },
    "createdAt" : ISODate("2019-10-14T18:34:27.474Z"),
    "__v" : 0,
    "terms" : {
        "acceptedAt" : ISODate("2019-11-11T21:26:20.080Z")
    }
}, {
    "_id" : ObjectId("5da4bfb312702239cfa0d7bb"),
    "role" : "DELIVERYMAN",
    "status" : "ACTIVE",
    "givenName" : "Fernando",
    "familyName" : "Silva Pereira dos Santos",
    "email" : "fernando.spsantoos@gmail.com",
    "birthDate" : ISODate("1989-03-05T00:00:00.000Z"),
    "motofreteLicense" : "01210467",
    "motofreteExpiration" : ISODate("2019-10-18T00:00:00.000Z"),
    "condumotoLicense" : "02472457",
    "condumotoExpiration" : ISODate("2023-10-18T00:00:00.000Z"),
    "telephones" : [ 
        {
            "type" : "MOBILE",
            "country" : "55",
            "number" : "11989271905"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "11966240608"
        }
    ],
    "rg" : {
        "number" : "44951588",
        "state" : "SP"
    },
    "cpf" : "35375797801",
    "cnh" : {
        "type" : "A",
        "number" : 4397718907.0,
        "expiresAt" : ISODate("2023-10-18T00:00:00.000Z")
    },
    "picture" : "",
    "crateSize" : "90",
    "addresses" : [ 
        {
            "type" : "home",
            "postalCode" : "05328050",
            "address" : "n/d",
            "number" : "13",
            "complement" : "",
            "state" : "SP",
            "city" : "São Paulo",
            "country" : "Brazil"
        }
    ],
    "motorcycle" : [ 
        {
            "active" : true,
            "licensePlate" : "GCB6459"
        }
    ],
    "bankAccount" : {
        "type" : "Conta Corrente",
        "number" : 341,
        "name" : "Itaú",
        "agency" : "0067",
        "account" : "40848-4",
        "accountCpf" : "35375797801",
        "accountName" : "Fernando Silva Pereira dos Santos"
    },
    "createdAt" : ISODate("2019-10-14T18:34:27.173Z"),
    "__v" : 0,
    "terms" : {
        "acceptedAt" : ISODate("2019-11-18T16:54:28.742Z")
    }
}, {
    "_id" : ObjectId("5da4bfb41270220574a0d7ca"),
    "role" : "DELIVERYMAN",
    "status" : "ACTIVE",
    "givenName" : "Paulo",
    "familyName" : "Henrique Dias",
    "email" : "diashenrique.10@hotmail.com",
    "birthDate" : ISODate("1989-03-05T00:00:00.000Z"),
    "motofreteLicense" : "00451665",
    "motofreteExpiration" : ISODate("2020-02-04T00:00:00.000Z"),
    "condumotoLicense" : "01757857",
    "condumotoExpiration" : ISODate("2021-01-08T00:00:00.000Z"),
    "telephones" : [ 
        {
            "type" : "MOBILE",
            "country" : "55",
            "number" : "11998866078"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "11998914658"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "1125583002"
        }
    ],
    "rg" : {
        "number" : "42836005",
        "state" : "SP"
    },
    "cpf" : "33762314861",
    "cnh" : {
        "type" : "A",
        "number" : 3458679200.0,
        "expiresAt" : ISODate("2021-01-08T00:00:00.000Z")
    },
    "picture" : "",
    "crateSize" : "90",
    "addresses" : [ 
        {
            "type" : "home",
            "postalCode" : "08490670",
            "address" : "n/d",
            "number" : "13",
            "complement" : "",
            "state" : "SP",
            "city" : "São Paulo",
            "country" : "Brazil"
        }
    ],
    "motorcycle" : [ 
        {
            "active" : true,
            "licensePlate" : "FPE2426"
        }
    ],
    "bankAccount" : {
        "type" : "Conta Corrente",
        "number" : 341,
        "name" : "Itaú",
        "agency" : "8857",
        "account" : "08278-1",
        "accountCpf" : "33762314861",
        "accountName" : "Paulo Henrique Dias"
    },
    "createdAt" : ISODate("2019-10-14T18:34:28.470Z"),
    "__v" : 0
}, {
    "_id" : ObjectId("5da4bfb41270221862a0d7d0"),
    "role" : "DELIVERYMAN",
    "status" : "ACTIVE",
    "givenName" : "Simey",
    "familyName" : "Alex Rocha",
    "email" : "rochasimey@gmail.com",
    "birthDate" : ISODate("1989-03-05T00:00:00.000Z"),
    "motofreteLicense" : "01105560",
    "motofreteExpiration" : ISODate("2019-11-30T00:00:00.000Z"),
    "condumotoLicense" : "02716054",
    "condumotoExpiration" : ISODate("2024-01-04T00:00:00.000Z"),
    "telephones" : [ 
        {
            "type" : "MOBILE",
            "country" : "55",
            "number" : "11998094380"
        }, 
        {
            "type" : "HOME",
            "country" : "55",
            "number" : "11999491262"
        }
    ],
    "rg" : {
        "number" : "302937778",
        "state" : "SP"
    },
    "cpf" : "31237974810",
    "cnh" : {
        "type" : "A",
        "number" : 6175362905.0,
        "expiresAt" : ISODate("2024-01-04T00:00:00.000Z")
    },
    "picture" : "",
    "crateSize" : "150",
    "addresses" : [ 
        {
            "type" : "home",
            "postalCode" : "03980100",
            "address" : "n/d",
            "number" : "146",
            "complement" : "",
            "state" : "SP",
            "city" : "São Paulo",
            "country" : "Brazil"
        }
    ],
    "motorcycle" : [ 
        {
            "active" : true,
            "licensePlate" : "GHE9958"
        }
    ],
    "bankAccount" : {
        "type" : "Conta Corrente",
        "number" : 27,
        "name" : "Santander",
        "agency" : "4353",
        "account" : "01090111-2",
        "accountCpf" : "31237974810",
        "accountName" : "Simey Alex Rocha"
    },
    "createdAt" : ISODate("2019-10-14T18:34:28.774Z"),
    "__v" : 0
}
]