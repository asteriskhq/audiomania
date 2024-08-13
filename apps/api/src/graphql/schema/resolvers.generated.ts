/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated.js';
import { me as Query_me } from './../auth/resolvers/Query/me.js';
import { track as Query_track } from './../catalog/resolvers/Query/track.js';
import { tracks as Query_tracks } from './../catalog/resolvers/Query/tracks.js';
import { signIn as Mutation_signIn } from './../auth/resolvers/Mutation/signIn.js';
import { upload as Mutation_upload } from './../upload/resolvers/Mutation/upload.js';
import { SignInPayload } from './../auth/resolvers/SignInPayload.js';
import { Track } from './../catalog/resolvers/Track.js';
import { UploadResult } from './../upload/resolvers/UploadResult.js';
import { User } from './../auth/resolvers/User.js';
import { DateTimeResolver } from 'graphql-scalars';
export const resolvers: Resolvers = {
  Query: { me: Query_me, track: Query_track, tracks: Query_tracks },
  Mutation: { signIn: Mutation_signIn, upload: Mutation_upload },

  SignInPayload: SignInPayload,
  Track: Track,
  UploadResult: UploadResult,
  User: User,
  DateTime: DateTimeResolver,
};
