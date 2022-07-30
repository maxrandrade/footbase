import { HttpService } from '@nestjs/axios';
import { Controller, Delete, Post } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { CountriesService } from './countries.service';
import * as cheerio from 'cheerio';
import { Country } from './country.entity';
import * as translate from '@vitalets/google-translate-api';

@Controller('/countries')
export class CountriesController {
  constructor(readonly countriesService: CountriesService) {}

  @Post('/scrap-enUS')
  async scrapCountries(): Promise<void> {
    const countries: Country[] = [];
    const response = await firstValueFrom(
      new HttpService().get<string>(
        'https://en.wikipedia.org/wiki/List_of_countries_and_dependencies_by_population'
      )
    );

    const $ = cheerio.load(response.data);
    const rows = $('.wikitable tbody tr');
    rows.each((i, row) => {
      const cells = $(row).children();
      const firstCellInRow = $(cells.get(0)).text();
      const isACountry = !isNaN(parseInt(firstCellInRow));
      if (isACountry) {
        const countryName = $(cells.get(1)).text().trim();
        const flag = $(cells.get(1))
          .find('img')
          .attr('srcset')
          .split(' ')[2]
          .substring(2);
        // countries.push({
        //   enUS: countryName,
        //   flag: `https://${flag}`
        // });
      }
    });
    await this.countriesService.addCountries(countries);
  }

  @Post('translate-ptBR')
  async translateCountriesptBR(): Promise<void> {
    const countries = (await this.countriesService.findAll()).slice(0, 5);
    const translated = await Promise.all(
      countries.map(async ({ id, enUS }) => {
        const ptBR = await translate(enUS, { to: 'pt' });
        return {
          id,
          ptBR: ptBR.text
        };
      })
    );
  }

  @Delete('')
  async deleteCountries(): Promise<void> {
    await this.countriesService.deleteAll();
  }
}
