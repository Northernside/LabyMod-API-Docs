# dl.labymod.net

> [!NOTE]
> Mainly used for the LabyMod Client (cosmetics, emotes and various other essentials)

> [!WARNING]
> Make sure to always use dashed UUIDv4's ({8-4-4-4-16}), as many endpoints fail when inputting UUIDv4s without dashes,

# Navigation
- [LabyMod 3 cosmetics](#labymod-3-cosmetics)
- [LabyMod 3 emotes](#labymod-3-emotes)
- [LabyMod 3 addons](#labymod-3-addons)
- [LabyMod 3 blocked addons](#blocked-addons-labymod-3)
- [LabyMod 3 addon download](#addon-download-labymod-3)
- [LabyMod 3 addon icon](#addon-icon-labymod-3)
- [YouTube subscriber count module essentials](#youtube-subscriber-count-module-essentials)
- [LabyMod's public server list](#labymods-public-server-list)
- [Server metadata](#server-metadata)
- [Player UUID to LabyMod userdata](#player-uuid-to-labymod-userdata)
- [LabyMod groups](#labymod-groups)
- [LabyMod stickerpacks](#labymod-stickerpacks)
- [List of LabyMod Cosmetics](#list-of-labymod-cosmetics)
- [LabyMod cosmetic textures](#labymod-cosmetic-textures)
- [LabyMod advertisements (e.g. main menu icons)](#labymod-advertisements-eg-main-menu-icons)
- [LabyMod advertisement icons](#labymod-advertisement-icons)
- [LabyMod 3 versions](#labymod-3-versions)
- [LabyConnect 3 state](#labymod-3-state)
- [LabyMod cosmetics geometry](#labymod-cosmetics-geometry)
- [LabyMod cosmetics animations](#labymod-cosmetics-animations)
- [LabyMod custom cloak texture](#labymod-custom-cloak-texture)
- [LabyMod custom bandana texture](#labymod-custom-bandana-texture)

## Addons (LabyMod 3)
**Description:** Returns addons and their details from the LabyMod 3 addon store.

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
        "18": [ // 1.8.9
            {
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
                "filesize": "0", // In bytes, seems broken across many addons though
                "category": "2", // categories[i - 1]
                "verified": false, // No solid/consistent pattern
                "performance": false, // Performance improving addons (e.g. Optifine and Sodium)
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
        "116": [...]
    }
}
```

## Blocked addons (LabyMod 3)
**Description:** Returns disabled/blocked addon uuids.

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
**Description:** Returns disabled/blocked addon uuids.

**Request:**
```http
GET /latest/?file=:uuid&a=1
```

**Response:**
*file.jar*

## Addon icon (LabyMod 3)
**Description:** Returns the addon icon of a given addon uuid.

**Request:**
```http
GET /latest/addons/:uuid/icon.png
```

**Response:**
*icon.png* (128x128)

## YouTube subscriber count module essentials
**Description:** Returns some essential data for the YouTube subscriber count module

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
**Description:** Returns the list used for the public servers screen in LabyMod

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
**Description:** Returns metadata for manually added Minecraft servers

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

## Player UUID to LabyMod userdata

**Description:** Returns LabyMod user data such as cosmetics, groups, and user role.

**Request:**
```http
GET /userdata/:uuid.json
```

**Response:**
```json
{
    "c": [ // Cosmetics
        {
            "i": 8, // Cosmetic ID -> Refer to docs/extra/cosmetics.md
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

## LabyMod groups

**Description:** Returns LabyMod groups and their details.

**Request:**
```http
GET /groups.json
```

**Response:**
```json
{
    "groups": [
        {
            "id": 1,
            "name": "administrator",
            "nice_name": "Administrator",
            "color_hex": "e84c3c",
            "color_minecraft": "4",
            "tag_name": "ADMIN",
            "display_type": "ABOVE_HEAD",
            "is_staff": true
        },
        ...
    ]
}
```

## LabyMod stickerpacks

**Description:** Returns LabyMod stickerpacks and their stickers.

**Request:**
```http
GET /stickers.json
```

**Response:**
```json
{
    "packs": [
        {
            "id": 1,
            "name": "Halloween-Pack",
            "stickers": [
                {
                    "id": 1,
                    "name": "Pumpkin",
                    "tags": [
                        "halloween",
                        "kürbis",
                        "pumpkin"
                    ]
                },
                ...
            ]
        },
        ...
    ]
}
```	

## List of LabyMod Cosmetics

**Description:** Returns a list of every LabyMod Cosmetic.

**Request:**
```http
GET /cosmetics/index.json
```

**Response:**
```json
{
  "cosmetics": { // The object key, Cosmetic ID and texture directory are the same.
    "0": {
      "id": "0",
      "type": "COSMETIC", // COSMETIC | FLYING_PET | SHOULDER_PET | WALKING_PET
      "name": "Cloak",
      "options": [
        "is_custom",
        ...
      ], // is_custom | texture | rgb | offset | side | shoulder_side | mojang_uuid
      "scale": "1",
      "attached_to": "BODY", // BODY | HEAD | LEG | ARM
      "texture_type": "USER_BOUND", // USER_BOUND | TYPE_BOUND | MOJANG_BOUND
      "hide_cape": true,
      "texture_directory": "0", // https://dl.labymod.net/textures/:texture_directory/:uuid.png (whereas :uuid is default_data[options.indexOf("texture")]), if "texture" is present)
      "draft": false,
      "nametag_offset": 0,
      "default_data": [
        "1" // 0 = false, 1 = true (in this case, is_custom == true)
      ],
      "category": "CLOAK", // CLOAK | BACK | WING | FACE | HAT | BODY | HEADGEAR | SHOES | PARTNER | ARMS | PETS | AURA | LANYARD | UNDERGLOW
      "position": "BACK", // BACK | LEGS_BACK | FACE | HEAD_TOP | FEET | HIPS | ARM | CHEST | SHOULDER
      "option_list": [ // No clue
        "is_custom",
        ...
      ], // is_custom | texture | rgb | offset | side | shoulder_side | mojang_uuid (OPTIONAL)
      "frame_aspect_ratio": {
        "width": 1,
        "height": 1
      }, // (OPTIONAL)
      "mirror_type": "DUPLICATE", // DUPLICATE | ROTATE (OPTIONAL)
      "mirror": true, // (OPTIONAL)
      "move_type": "BOTH", // BOTH | IDLE_ONLY | MOVE_ONLY (OPTIONAL)
      "frame_animation_delay": 500 // (OPTIONAL)
    },
    ...
  }
}
```

## LabyMod cosmetic textures

**Description:** Returns the texture of a given LabyMod cosmetic.

**Request:**
```http
GET /textures/:texture_directory/:uuid
```

**Response:**
*uuid.png* (varies)

## LabyMod advertisements (e.g. main menu icons)

**Description:** Returns a list of LabyMod advertisements.

**Request:**
```http
GET /advertisement/entries.json
```

```json
{
    "left": [
        {
            "title": "@LabyMod",
            "isNew": false,
            "color": "#FFFFFF",
            "colorHover": "#1da1f2",
            "iconName": "twitter", // https://dl.labymod.net/advertisement/icons/:iconName.png
            "url": "https://twitter.com/LabyMod",
            "visible": true
        },
        ...
    ],
    "right": [...],
    "splashDates": [
        { // Displayed on the main menu at the given date
            "displayString": "LabyStudio",
            "month": 11,
            "day": 24,
            "birthday": true // birthday === true ? "Happy Birthday, {displayString}!" : displayString
        },
        ...
    ],
    "dailyEmotes": [
        {
            "id": 182,
        },
        ...
    ],
}
```

## LabyMod advertisement icons

**Description:** Returns the icon of a given LabyMod advertisement.

**Request:**
```http
GET /advertisement/icons/:iconName.png
```

**Response:**
*iconName.png* (varies)

## LabyMod 3 versions

**Description:** Returns a list of LabyMod versions.

**Request:**
```http
GET /versions.json
```

```json
{
    "1.8.9": {
        "version": "3.9.61",
        "mcUrl": "https://launcher.mojang.com/mc/game/1.8.9/client/3870888a6c3d349d3771a3e9d16c9bf5e076b908/client.jar",
        "url": "https://dl.labymod.net/latest/versions/LabyMod_v3.9.61_mc1.8.9.jar",
        "forge": "https://files.minecraftforge.net/maven/net/minecraftforge/forge/1.8.9-11.15.1.1855/forge-1.8.9-11.15.1.1855-installer.jar",
        "mcUrlJson": "https://launchermeta.mojang.com/v1/packages/d546f1707a3f2b7d034eece5ea2e311eda875787/1.8.9.json"
    },
    "1.12.2": {
        ...
    },
    "1.16.5": { // Additional: Forge doesn't exist on 1.16.5
        ...
    }
}
```

## LabyConnect 3 state

**Description:** Returns the state (not figured out what state means yet) of LabyConnect 3.

**Request:**
```http
GET /labyconnect/state.json
```

**Response:**
```json
{
    "enabled": true, // LabyConnect backend online? No clue
    "coverage": 1, // No clue
    "target": 6 // No clue
}
```

## LabyMod cosmetics geometry

**Description:** Returns the geometry data of a given LabyMod cosmetic.

**Request:**
```http
GET /cosmetics/:id/geo.json
```

```json
{ // I need help from someone who knows how to read 3D rendering shit
    "format_version": "1.12.0",
    "minecraft:geometry": [
        {
            "description": {
                "identifier": "geometry.unknown",
                "texture_width": 22,
                "texture_height": 17,
                "visible_bounds_width": 2,
                "visible_bounds_height": 2,
                "visible_bounds_offset": [
                    0,
                    ...
                ]
            },
            "bones": [
                {
                    "name": "cloak",
                    "pivot": [
                        0,
                        ...
                    ],
                    "rotation": [
                        -6,
                        ...
                    ]
                },
                ...
            ]
        }
    ]
}
```

## LabyMod cosmetics animations

**Description:** Returns the animation data of a given LabyMod cosmetic.

**Request:**
```http
GET /cosmetics/:id/animation.json
```

**Response:**
```json
{ // I need help from someone who knows how to read 3D rendering shit
    "format_version": "1.8.0",
    "animations": {
        "animation.model.new": {
            "loop": true,
            "animation_length": 0.5,
            "anim_time_update": "-t MOVING -q true",
            "bones": {
                "tail": {
                    "rotation": {
                        "0.0": {
                            "post": [
                                25,
                                ...
                            ],
                            "lerp_mode": "catmullrom"
                        },
                        ...
                    }
                },
                "wolfTail": {}
            }
        },
        ...
    }
}
```

## LabyMod custom cloak texture

**Description:** Returns the cloak image of the given player UUID.

**Request:**
```http
GET /capes/:uuid
```

**Response:**
*uuid.png* (varies)

# LabyMod custom bandana texture

**Description:** Returns the bandana image of the given player UUID.

**Request:**
```http
GET /bandanas/:uuid
```



# Waiting on proper reverse engineering
- https://dl.labymod.net/whitelist.bin (zlib compressed, hints for CSV format, but I may be wrong)
- https://dl.labymod.net/emotes/emotedata
- https://dl.labymod.net/cosmetics/:var_1/textures/:var_2.png

![Alt text](assets/var1_textures_var2_png_info.png)