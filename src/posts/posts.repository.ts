import { readFile, writeFile } from 'fs/promises';

import { CreatePostDto } from './dtos/create-post.dto';
import { NotFoundException } from '@nestjs/common';

export class PostRepository {
  async findAll() {
    const content = await readFile('sample-db.json', 'utf-8');
    const posts = JSON.parse(content);

    return posts;
  }

  async findOne(id: number) {
    const content = await readFile('sample-db.json', 'utf-8');
    const posts = JSON.parse(content);

    const post = posts.find((post) => post.id === id);

    if (!post) {
      throw new NotFoundException(`Post with id ${id} not found!`);
    }

    return post;
  }

  async create(post: CreatePostDto) {
    const content = await readFile('sample-db.json', 'utf-8');
    const posts = JSON.parse(content);

    posts.push({ id: Math.random() * 999, ...post });

    await writeFile('sample-db.json', JSON.stringify(posts));

    return 'Post Created!';
  }
}
