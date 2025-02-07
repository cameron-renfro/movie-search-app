import GET_SEARCH_RESULTS from './data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DetailCard from '@/components/ui/DetailCard/DetailCard';

const Page = async ({ params }: { params: { search: string } }) => {
  const { shows, people, movies } = await GET_SEARCH_RESULTS(params.search);

  console.log('🧍 Person', people);

  return (
    <main className="w-screen flex flex-col justify-center items-center">
      <div className="min-h-screen w-fit grid grid-cols-1 sm:w-4/6 sm:max-w-full justify-stretch my-16">
        <h1 className="text-2xl text-gray-100 font-normal mb-8 md:text-4xl">
          Search: {`"${decodeURIComponent(params.search)}"`}
        </h1>
        <Tabs
          defaultValue={
            movies.length > 0 ? 'movies' : shows.length > 0 ? 'shows' : 'people'
          }
          className="h-auto min-w-full bg-neutral-900 rounded-lg p-4 justify-items-stretch flex flex-col justify-start items-start overflow-y-auto"
        >
          <TabsList className="bg-neutral-950">
            {movies.length > 0 && (
              <TabsTrigger value="movies">movies</TabsTrigger>
            )}
            {shows.length > 0 && <TabsTrigger value="shows">shows</TabsTrigger>}
            {people.length > 0 && (
              <TabsTrigger value="people">people</TabsTrigger>
            )}
          </TabsList>

          <TabsContent value="movies" className="h-screen w-full">
            {movies.length > 0 &&
              movies.map((movie: any) => (
                <DetailCard
                  key={movie.id}
                  name={movie.title}
                  href={`/movies/${movie.id}`}
                  image={movie.poster_path}
                  popularity={movie.popularity}
                  date={movie.release_date}
                />
              ))}
          </TabsContent>
          <TabsContent value="shows" className="h-screen w-full">
            {shows.length > 0 &&
              shows.map((show: any) => (
                <DetailCard
                  key={show.id}
                  name={show.name}
                  href={`/shows/${show.id}`}
                  image={show.poster_path}
                  popularity={show.popularity}
                  date={show.first_air_date}
                />
              ))}
          </TabsContent>
          <TabsContent value="people" className="h-screen w-full">
            {people.length > 0 &&
              people.map((person: any) => (
                <DetailCard
                  key={person.id}
                  name={person.name}
                  image={person.profile_path}
                  href={`/person/${person.id}`}
                  popularity={person.popularity}
                />
              ))}
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default Page;
