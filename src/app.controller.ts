import { Body, Controller, Delete, Get, Param, Post, Put, HttpStatus, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {

  constructor(
    private service: AppService
  ) {}

  @Get()
  getAll(): any {
    return {
      data: this.service.getAll()
    }
  }

  @Get(':id')
  getById(@Param('id') id: string): any {
    const user = this.service.getById(id)
    return {
      data: user
    }
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() body): any {
    const user = this.service.create(body)
    return {
      data: user
    }
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body) {
    this.service.update(id, body)
    return {
      message: 'update'
    }
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.service.delete(id)
    return {
      message: 'delete'
    }
  }
}
