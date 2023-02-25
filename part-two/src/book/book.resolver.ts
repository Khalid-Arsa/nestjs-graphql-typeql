import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Author } from 'src/author/author.schema';
import { AuthorService } from 'src/author/author.service';
import { CreateBookDto, FindBookInput } from 'src/book/dto/create-book.dto';
import { Book } from './book.schema';
import { BookService } from './book.service';

@Resolver(() => Book)
export class BookResolver {
  constructor(
    private readonly bookService: BookService,
    private readonly authorService: AuthorService,
  ) {}

  @Query(() => [Book]) // What will the query return
  async books /* <--- Query name */(): Promise<Book[]>{
    return this.bookService.findMany(); // Resolve the query
  }

  @Query(() => Book)
  async book(@Args("input") { _id }: FindBookInput) {
    return this.bookService.findById(_id)
  }

  @Mutation(() => Book)
  async createBook(@Args('input') book: CreateBookDto) {
    return this.bookService.createBoook(book)
  }

  @ResolveField(() => Author)
  async author(@Parent() book: Book) {
    return this.authorService.findById(book.author)
  }
}
