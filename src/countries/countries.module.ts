import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountriesResolver } from './countries.resolver';
import { CountriesService } from './countries.service';
import { Country } from './country.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Country])],
  providers: [CountriesResolver, CountriesService],
})
export class CountriesModule {}
