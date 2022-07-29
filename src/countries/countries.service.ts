import { Injectable } from '@nestjs/common/decorators';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Country } from './country.entity';
import { AddCountryInput } from './input/add-country.input';

@Injectable()
export class CountriesService {
  constructor(
    @InjectRepository(Country) private countriesRepository: Repository<Country>,
  ) {}

  async findAll(): Promise<Country[]> {
    return this.countriesRepository.find({});
  }

  async addCountry(addCountryInput: AddCountryInput): Promise<Country> {
    const newCountry = this.countriesRepository.create(addCountryInput);
    return this.countriesRepository.save(newCountry);
  }

  async addCountries(countries: Country[]): Promise<Country[]> {
    return this.countriesRepository.save(countries);
  }

  async deleteAll() {
    return this.countriesRepository.delete({});
  }
}
