import { lngProps } from '@/api/global.model';
import { Info, Queue } from '@/components';

const Home = async ({ params: { lng } }: lngProps) => (
  <div className="my-12 flex-1">
    <Queue />
    <Info lng={lng} />
  </div>
);

export default Home;
