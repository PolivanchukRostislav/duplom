import { Injectable } from '@nestjs/common';
import { CreateUsereDto } from './dto/create-usere.dto';
import { UpdateUsereDto } from './dto/update-usere.dto';

@Injectable()
export class UseresService {
  create(createUsereDto: CreateUsereDto) {
    return 'This action adds a new usere';
  }

  findAll() {
    return `This action returns all useres`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usere`;
  }

  update(id: number, updateUsereDto: UpdateUsereDto) {
    return `This action updates a #${id} usere`;
  }

  remove(id: number) {
    return `This action removes a #${id} usere`;
  }
}
