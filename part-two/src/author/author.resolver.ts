import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { BookService } from 'src/book/book.service';
import { Author } from './author.schema';
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

  @ResolveField()
  async books(@Parent() author: Author) {
    return this.bookService.findByAuthorId(author.id)
  }
}
