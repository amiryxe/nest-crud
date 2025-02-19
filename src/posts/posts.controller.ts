import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Get()
  getPosts() {
    return 'list of posts';
  }

  @Get(':id')
  getSinglePost(@Param('id') id: string, @Query('name') name: string) {
    return 'get a single post with id ' + id + ' and name of ' + name;
  }

  @Post()
  createPost(@Body() body: any) {
    console.log(body);
    return 'create post';
  }
}
