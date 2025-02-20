import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { CreatePostDto } from './dtos/create-post.dto';
import { PostRepository } from './posts.repository';

@Controller('posts')
export class PostsController {
  postRepo: PostRepository;

  constructor() {
    this.postRepo = new PostRepository();
  }

  @Get()
  getPosts() {
    return this.postRepo.findAll();
  }

  @Get(':id')
  getSinglePost(
    @Param('id', ParseIntPipe) id: number,
    @Query('name') name: string,
  ) {
    return this.postRepo.findOne(id);
  }

  @Post()
  createPost(@Body() body: CreatePostDto) {
    return this.postRepo.create(body);
  }
}
