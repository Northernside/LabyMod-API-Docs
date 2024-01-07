# dl.labymod.net

> [!NOTE]
> Mainly used for the LabyMod Client (cosmetics, emotes and various other essentials)

## Addons (LabyMod 3)
**Description:** This returns addons and their details from the LabyMod 3 addon store.

**Request:**
```http
GET /addons.json
```

**Response:**
```json
{
    "categories": [ // Addon categories
        "GUI",
        "Tools",
        "Server",
        "Graphics"
    ],
    "addons": {
        "18": [
            { // 1.8.9
                "name": "StreamChat+",
                "uuid": "c7f7055f-443c-4160-8714-a172ab8f74b5",
                "version": "6",
                "hash": "893acef18086e4f3cb30310c25d4cf91",
                "mcversion": "18",
                "enabled": false,
                "installer": false, // Included into LabyMod 3's installer addon list
                "restart": false, // Restart required
                "includeInJar": false, // Bundle into LabyMod (e.g. Optifine)
                "description": "Never tab out of your full screen again! StreamChat+ shows you your Twitch chat in Minecraft.",
                "filesize": "0",
                "category": "2", // categories[i - 1]
                "verified": false, // No solid/consistent pattern
                "performance": false, // Performance improving addons (e.g.  Optifine and Sodium)
                "author": "unordentlich",
                "sorting": [ // No clue
                    61,
                    166,
                    10,
                    166,
                    158
                ]
            }
        ],
        "112": [...],
        "116": []
    }
}
```

## Blocked addons (LabyMod 3)
**Description:** This returns disabled/blocked addon uuids.

**Request:**
```http
GET /blocked_addons.json
```

**Response:**
```json
[
    "81832c2af71a0ff9df57d8c4350a976f",
    ...
]
```

## Addon download (LabyMod 3)
**Description:** This returns disabled/blocked addon uuids.

**Request:**
```http
GET /latest/?file=:uuid&a=1
```

**Response:**
*file.jar*

## Addon icon (LabyMod 3)
**Description:** This returns the addon icon of a given addon uuid.

**Request:**
```http
GET /latest/addons/:uuid/icon.png
```

**Response:**
*icon.png* (128x128)

## YouTube subscriber count module essentials
**Description:** This returns some essential data for the YouTube subscriber count module

**Request:**
```http
GET /subcounter.json
```

**Response:**
```json
{
    "url": "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=%s&fields=items/statistics/subscriberCount&key=%s", // YouTube API endpoint
    "keys": [ // YouTube API keys (... seriously?)
        "AIzaSyAvIJfeoXM5rH4Y2gSBiIgHfi3EjerVW_o",
        ...
    ]
}
```

## LabyMod's public server list
**Description:** This returns the list used for the public servers screen in LabyMod

**Request:**
```http
GET /public_servers.json
```

**Response:**
```json
"servers": { // Sorted by LabyMod player count
    "hypixel.net": { // Server IP
        "partner": false // Official LabyMod partner
    },
    ...
}
```

## Server metadata
**Description:** This returns metadata for manually added Minecraft servers

**Request:**
```http
GET /server_groups.json
```

**Response:**
```json
{
    "server_groups": {
        "timolia": { // Server ID
            "server_name": "timolia",
            "nice_name": "Timolia", // Server displayname
            "direct_ip": "play.timolia.de", // Main server address
            "wildcards": [ // Server address wildcards
                "%.timolia.de"
            ],
            "attachments": [ // Assets for the "fancy server list" in LabyMod 4
                {
                    "file_name": "background.png",
                    "url": "https://dl.labymod.net/img/server/timolia/background.png",
                    "hash": "755ee9fd241921bedc0279986f4b0c50"
                },
                ...
                // A lot more to cover, please visit https://github.com/LabyMod/server-media/blob/master/docs/Files.md for more details
            ],
            "social": { // Mainly used for laby.net/servers/:(address/Server ID)
                "web": "https://timolia.de",
                "web_shop": "https://shop.timolia.de",
                "web_support": "https://forum.timolia.de",
                "twitter": "TimoliaTeam",
                "facebook": "timoliamc",
                "discord": "https://discord.gg/Q55FujN",
                "teamspeak": "ts.timolia.de",
                "tiktok": "timolianetwork",
                "youtube": "https://www.youtube.com/Timolia",
                "instagram": "timolianetwork"
            },
            "gamemodes": {
                "jumpworld": {
                    "name": "JumpWorld",
                    "command": "/quickjoin jumpworld", // Used for the quick join feature in LabyMod 4's "fancy server list"
                    "url": "https://www.timolia.de/games#jumpworld",
                    "color": "#0095B0", // Button background color
                    "versions": "1.19<*"
                },
                ...
            },
        },
        "chat": {
            "message_formats": [
                "^§[a-f0-9](?<level>\\d+)( \\||§8 \\|) §[a-f0-9](?<sender>[a-zA-Z0-9_]{2,16})§r§7: §f(?<message>.*)$"
            ]
        },
        "user_stats": "https://www.timolia.de/stats/{userName}"
    },
    ...
}
```

## Player UUID to LabyMod User Data 
**Subdomain:** `https://dl.labymod.net/`

**Endpoint:** `GET /userdata/:dashed_uuid.json`

**Description:** This returns LabyMod user data such as cosmetics, groups, and user role.

**Request:**
```http
GET /userdata/34e57efa-5783-46c7-a9fc-890296aaba1f.json
```

**Response:**
```json
{
    "c": [ // Cosmetics
        {
            "i": 8, // Cosmetic ID
            "d": [ // Cosmetic Data
                "0a53e04c-5ed0-46e3-a522-7043aaa604a7",
                ...
            ]
        },
        ...
    ],
    "e": [ // Emote IDs
        4,
        ...
    ],
    "f": { // Flatrates
        "e": true // Emotes
    },
    "st": { // Stickers
        "p": [ // Sticker Pack IDs
            1,
            ...
        ]
    },
    "r": { // Role (Outdated use Groups instead)
        "i": 25, // Role ID
        "v": false // Visibility
    },
    "g": [ // Groups
        {
            "i": 13 // Group ID
        }
    ]
}
```

- https://dl.labymod.net/whitelist.bin
- https://dl.labymod.net/emotes/emotedata


- https://dl.labymod.net/groups.json
- https://dl.labymod.net/stickers.json
- https://dl.labymod.net/textures/%25s
- https://dl.labymod.net/advertisement/entries.json
- https://dl.labymod.net/advertisement/icons/%25s.png
- https://dl.labymod.net/versions.json
- https://dl.labymod.net/latest/install/json/1.8.9.json
- https://dl.labymod.net/cosmetics/index.json
- https://dl.labymod.net/labyconnect/state.json
- https://dl.labymod.net/cosmetics/