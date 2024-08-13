import { Readable } from 'node:stream';
import { storage } from '../../../../storage.js';
import { AppContext } from '../../../../type.js';
import type { MutationResolvers } from './../../../schema/types.generated.js';
import { randomUUID } from 'node:crypto';
import { unauthorized } from '../../../utils/utils.js';
import { fileTypeFromStream } from 'file-type';
import { createGraphQLError } from 'graphql-yoga';
import { registerTrack } from '../../../../upload/facade.js';

export const upload: NonNullable<MutationResolvers['upload']> = async (_parent, { file }, { user }: AppContext) => {
  if (!user) {
    throw unauthorized();
  }

  const stream = file.stream() as unknown as { readable: Readable };

  const fileType = await fileTypeFromStream(stream.readable);
  if (!fileType?.mime.startsWith('audio/')) {
    throw createGraphQLError(`Invalid file type: ${fileType?.mime ?? 'Unknown file type'}. Only audio files allowed.`);
  }

  const uuid = randomUUID();
  await storage.putObject('tracks', uuid, stream.readable, file.size, { 'content-type': fileType.mime });
  const id = await registerTrack(uuid, user.id);

  return { id, url: `http://localhost:9000/tracks/${uuid}` };
};
