import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CountriesService } from './countries.service';
import { Country } from './country.entity';
import { AddCountryInput } from './input/add-country.input';

@Resolver(() => Country)
export class CountriesResolver {
  constructor(private countriesService: CountriesService) {}

  @Query(() => [Country])
  getAllCountries(): Promise<Country[]> {
    return this.countriesService.findAll();
  }

  @Mutation(() => Country)
  addCountry(
    @Args('addCountryInput') addCountryInput: AddCountryInput,
  ): Promise<Country> {
    return this.countriesService.addCountry(addCountryInput);
  }
}
