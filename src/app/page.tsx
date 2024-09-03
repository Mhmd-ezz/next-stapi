import { Button } from "@/components/ui/button";

async function getStrapiData(path: string) {
  const baseUrl = 'http://localhost:1337';
  try {
    const response = await fetch(baseUrl + path);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default async function Home() {
  const strapiData = await getStrapiData('/api/home-page');

  const { id, attributes } = strapiData.data;
  const { title, description } = attributes;

  return (
    <main className="container mx-auto py-6">
      <h1 className=""> {title}</h1>
      <p className="">{description}</p>
      <Button>Test {id}</Button>
    </main>
  );
}
