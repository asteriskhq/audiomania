/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated.js';
import { track as Query_track } from './../catalog/resolvers/Query/track.js';
import { tracks as Query_tracks } from './../catalog/resolvers/Query/tracks.js';
import { user as Query_user } from './../user/resolvers/Query/user.js';
import { Track } from './../catalog/resolvers/Track.js';
import { User } from './../user/resolvers/User.js';
import { DateTimeResolver } from 'graphql-scalars';
export const resolvers: Resolvers = {
  Query: { track: Query_track, tracks: Query_tracks, user: Query_user },

  Track: Track,
  User: User,
  DateTime: DateTimeResolver,
};
