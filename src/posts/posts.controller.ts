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

@Controller('posts')
export class PostsController {
  @Get()
  getPosts() {
    return 'list of posts';
  }

  @Get(':id')
  getSinglePost(
    @Param('id', ParseIntPipe) id: string,
    @Query('name') name: string,
  ) {
    return 'get a single post with id ' + id + ' and name of ' + name;
  }

  @Post()
  createPost(@Body() body: CreatePostDto) {
    console.log(body);
    return 'create post';
  }
}
