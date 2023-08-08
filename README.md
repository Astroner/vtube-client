# Hi there 
This is a client for [Astroner/vtube-b](https://github.com/Astroner/vtube-b). 
This package provides response types and **VTubeClient** class as a simple abstraction over axios to fetch data

# Install
```bash
npm i @dogonis/vtube-client
```
```bash
yarn add @dogonis/vtube-client
```

# Table of content
 - [Basic Usage](#basic-usage)
 - [API](#api)
     - [Channel](#channel)
     - [Artist](#artist)
     - [Video](#video)
     - [Search](#search)
     - [User](#user)
     - [Session](#session)

# Basic Usage
```ts
import { VTubeClient } from "@dogonis/vtube-client"

const client = new VTubeClient("https://backend.address.com/");

export const fetchImagineDragons = () => {
    return client.search.queryMusic("Imagine Dragons");
}
```

# API
Basically **VTubeClient** provides a collection of public APIs to fetch data:
 - [channel](#channel) - youtube channel info
 - [artist](#artist) - music artist info
 - [video](#video) - media info i.e. formats, descriptions and e.t.c
 - [search](#search) - query data from youtube or music
 - [user](#user) - provides methods to create/restore [session](#session) for private API

## Channel
 - **info** - get channel info
 - **videos** - get channel videos. Has continuation interface to get the next page

## Artist
 - **get** - get artist info

## Video
 - **formats** - get media formats
 - **info** - get media info
 - **srcURL** - generates src url for the video. **itag** param specifies file format, can be obtain from **formats**

## Search
 - **queryYoutube** - query data from youtube
 - **queryMusic** - query data from music

## User
 - **signIn** - request API token for provided credentials, returns [session](#session)
 - **signUp** - registers user with provided data
 - **restoreSession** - creates [session](#session) with provided token 

## Session
 - **getToken** - session token
 - **userInfo** - get session user info
 - **getDynamicPlaylist** - requests dynamic playlist
 - **userPlaylists** - get session user's playlists
 - **recommendations**
     - **music** - get session user's music recommendations