import { useQuery } from "@apollo/client/react";
import { GET_EPISODES } from "@/graphql/queries";

export default function Home() {
  const { data, loading, error } = useQuery(GET_EPISODES, {
    variables: { page: 1 },
  });

  if (loading) return <p className="p-6 text-lg">Loading episodes...</p>;
  if (error) return <p className="p-6 text-red-500">Error: {error.message}</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Rick and Morty Episodes</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data?.episodes?.results?.map((episode: any) => (
          <div
            key={episode.id}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold">{episode.name}</h2>
            <p className="text-gray-600">{episode.air_date}</p>
            <p className="font-mono text-sm mt-2">{episode.episode}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
