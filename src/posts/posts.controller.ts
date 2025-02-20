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
import { PostService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly posts: PostService) {}

  @Get()
  getPosts() {
    return this.posts.findAll();
  }

  @Get(':id')
  getSinglePost(
    @Param('id', ParseIntPipe) id: number,
    @Query('name') name: string,
  ) {
    return this.posts.findOne(id);
  }

  @Post()
  createPost(@Body() body: CreatePostDto) {
    return this.posts.create(body);
  }
}
