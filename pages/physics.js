import Layout from '../Components/Layout';
import MCQ from '../Components/MCQ';
import { physicsData } from '../utils/data';

export default function Physics() {
  console.log(physicsData);
  return (
    <div>
      <Layout>
        <MCQ data={physicsData} />
      </Layout>
    </div>
  );
}
