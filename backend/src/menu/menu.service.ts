import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MenuService {
  constructor(private prisma: PrismaService) {}

  create(createMenuDto: CreateMenuDto) {
    return this.prisma.menuItem.create({
      data: createMenuDto as any,
    });
  }

  findAll() {
    return this.prisma.menuItem.findMany({
      include: { category: true },
    });
  }

  findOne(id: string) {
    return this.prisma.menuItem.findUnique({
      where: { id },
    });
  }

  update(id: string, updateMenuDto: UpdateMenuDto) {
    return this.prisma.menuItem.update({
      where: { id },
      data: updateMenuDto as any,
    });
  }

  remove(id: string) {
    return this.prisma.menuItem.delete({
      where: { id },
    });
  }
}
