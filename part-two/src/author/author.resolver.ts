import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { BookService } from 'src/book/book.service';
import { Author, CreateAuthorInput } from './author.schema';
import { AuthorService } from './author.service';

@Resolver(() => Author)
export class AuthorResolver {
  constructor(
    private bookService: BookService,
    private authorService: AuthorService,
  ) {}

  @Query(() => [Author])
  async authors() {
    return this.authorService.findMany();
  }

  @Mutation(() => Author)
  async createAuthor(@Args("input") input: CreateAuthorInput) {
    return this.authorService.createAuthor(input)
  }

  @ResolveField()
  async books(@Parent() parent: Author) {
    return this.bookService.findByAuthorId(parent._id)
  }
}
