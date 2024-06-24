import { lngProps } from '@/api/global.model';
import { Info, Queue } from '@/components';

const Home = async ({ params: { lng } }: lngProps) => (
  <div className="mb-2 mt-12 flex-1">
    <Queue lng={lng} />
    <Info lng={lng} />
  </div>
);

export default Home;

// TODO: add cookies
// TODO: add tests
