# flintmc.net

# Navigation
- [Get User](#get-user)
- [Get Modification](#get-modification)
- [Get Modification Description](#get-modification-description)
- [Get Modification Ratings](#get-modification-ratings)
- [Get Modification Changelogs](#get-modification-changelogs)
- [Brand Modification Image](#brand-modification-image)
- [Get Tags](#get-tags)
- [Fetch Jar](#fetch-jar)
- [Get All Modifications](#get-all-modifications)
- [Get Licence List](#get-licence-list)
- [Get Organization](#get-organization)
- [Brand Organization Image](#brand-organization-image)

## Get User
**Description:** returns the user information.

**Request:**
```http
GET /api/get-user
```

**Response:**
```json
{
  "user_name": "EinsJustinn",
  "uuid": "a857726c-b010-456b-8ea5-9a1c323d5f12"
}
```

## Get Modification
**Description:** returns the modification information.

**Request:**
```http
GET /api/client-store/get-modification/:namespace
```

**Response:**
```json
{
  "id": 1,
  "namespace": "voicechat",
  "name": "VoiceChat",
  "featured": false,
  "verified": true,
  "organization": 1,
  "author": "LabyMod",
  "downloads": 181990,
  "download_string": "180.000",
  "short_description": "Totally free in-game voice chat for Minecraft with 3D surround sound. Play together like never before",
  "rating": {
    "count": 18,
    "rating": 4.72
  },
  "changelog": "fixed VoiceUser screen not opening via command in 1.21.3+",
  "required_labymod_build": 1468,
  "releases": 57,
  "last_update": 1733307883,
  "licence": "LGPL-3.0-only",
  "version_string": "*",
  "meta": [],
  "dependencies": [],
  "permissions": [
    "external_servers_access",
    ...
  ],
  "brand_images": [
    {
      "type": "IMAGE",
      "hash": "7d70b5963e817c135d21a39b03b4a741"
    },
    ...
  ],
  "tags": [
    1,
    ...
  ]
}
```

## Get Modification Description
**Description:** returns the modification description.

**Request:**
```http
GET /api/client-store/get-modification-description/:namespace
```

**Response:**
```text
"The Text"
```

## Get Modification Ratings
**Description:** returns the modification ratings.

**Request:**
```http
GET /api/client-store/get-modification-ratings/:namespace
```

**Response:**
```json
[
  {
    "rating": 5,
    "comment": "Gefällt mir!",
    "added_at": "2022-09-01T04:33:29+00:00",
    "user": {
      "user_name": "rexlManu",
      "uuid": "776a08c7-01d7-4637-89b7-0026a04331ab"
    }
  },
  ...
]
```

## Get Modification Changelogs
**Description:** returns the modification changelogs.

**Request:**
```http
GET /api/client-store/get-modification-changelogs/:namespace
```

**Response:**
```json
[
  {
    "changelog": "+ Add base features",
    "added_at": "2022-03-19T19:24:52+00:00",
    "release": "0.0.0"
  },
  ...
]
```

## Brand Modification Image
**Description:** returns the brand modification image.

**Request:**
```http
GET /brand/modification/:hash.png
```

**Response:** image.png

## Get Tags
**Description:** fetches the tags from the client store.

**Request:**
```http
GET /api/client-store/get-tags
```

**Response:**
```json
{
  ...
  "4": {
    "id": 4,
    "tag": "Pvp",
    "description": null,
    "parent_category": 2
  },
  ...
}
```

## Fetch Jar
**Description:** Fetches a jar for a specified version and namespace.

**Request:**
```http
GET /api/client-store/fetch-jar/:namespace/:minecraftVersion
```

**Response:** file.jar

## Get All Modifications
**Description:** returns a list of all modifications.

**Request:**
```http
GET /api/modification/get-all
```

**Response:**
```json
[
  {
    "id": 1,
    "name": "VoiceChat",
    "namespace": "voicechat",
    "short_description": "Totally free in-game voice chat for Minecraft with 3D surround sound. Play together like never before",
    "downloads": 182347,
    "updated_at": "2023-05-19T18:37:21+00:00",
    "rating": 4.722222222,
    "tags": [
      1,
      ...
    ],
    "brand_images": {
      "ICON": "13399310df8d09732c6af67c2d2f7c30",
      "THUMBNAIL": "cab2a638f51ec6215fde4533a305fa39"
    }
  },
  ...
]
```

## Get Licence List
**Description:** Get the license list for developers.

**Request:**
```http
GET /api/developer/get-licence-list
```

**Header:**
```http
Cookie: PHPSESSID=key
```

**Response:**
```json
[
  "...",
  {
    "id": 2,
    "name": "BSD Zero Clause License",
    "shortName": "0BSD",
    "osiApproved": true,
    "isFree": false
  },
  "..."
]
```

## Get Organization
**Description:** returns the organization information.

**Request:**
```http
GET /api/client-store/get-organization/:id
```

**Response:**
```json
{
  "vanity_name": "labymod",
  "display_name": "LabyMod",
  "verified": true,
  "icon_hash": "34b1557e848c8c6f896a53cfc108e746",
  "flint_url": "/organization/1.labymod"
}
```

## Brand Organization Image
**Description:** returns the brand organization image.

**Request:**
```http
GET /brand/organization/:hash.png
```

**Response:** image.png
