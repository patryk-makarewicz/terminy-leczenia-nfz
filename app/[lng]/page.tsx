import { lngProps } from '@/api/global.model';
import { Info, Queue } from '@/components';

const Home = async ({ params: { lng } }: lngProps) => (
  <div className="mb-2 mt-12 flex-1">
    <Queue />
    <Info lng={lng} />
  </div>
);

export default Home;

// TODO: remove react-query
// TODO: add lng switch
// TODO: add cookies
// TODO: add tests
