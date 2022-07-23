import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CreatePetInput } from './dto/create-pet.input';
import { Pet } from './pet.entity';
import { PetsService } from './pets.service';

@Resolver(() => Pet)
export class PetsResolver {
  constructor(private petsService: PetsService) { }

  @Query(() => [Pet])
  pets(): Promise<Pet[]> {
    return this.petsService.findAll()
  }

  @Query(() => Pet)
  getPet(@Args('id', { type: () => Int }) id: number): Promise<Pet> {
    return this.petsService.findOne(id)
  }

  @Mutation(() => Pet)
  createPet(@Args('createPetInput') createPetInput: CreatePetInput): Promise<Pet> {
    return this.petsService.createPet(createPetInput)
  }
}
