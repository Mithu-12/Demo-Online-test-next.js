import Layout from '../Components/Layout';
import MCQ from '../Components/MCQ';
import { allData } from '../utils/data';

export default function Home() {
  return (
    <div>
      <Layout>
        <MCQ data={allData} />
      </Layout>
    </div>
  );
}
